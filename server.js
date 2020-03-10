const express = require('express')
, app = express()
, fs = require('fs')
, getStat = require('util').promisify(fs.stat);


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.static('public'));

// 10 * 1024 * 1024 // 10MB
// usamos um buffer minúsculo! O padrão é 64k
const highWaterMark =  640000;

app.get('/audio',  (req, res) => {

	try {
		fs.readdir('./audio', async function(err,data) {

			const arquivo = Math.floor(Math.random() * data.length)
			const filePath = await './audio/'+data[arquivo];
			console.log('filePath ',filePath)
			const stat = await getStat(filePath);
		    // exibe uma série de informações sobre o arquivo
		    console.log(stat);

		    res.writeHead(200, {
		    	'Content-Type': 'audio/mp3',
		    	'Content-Length': stat.size,
		        // 'Access-Control-Allow-Origin': '*',
		        // 'Access-Control-Allow-Headers': 'Origin, X-Request-Width, Content-Type, Accept'
		    });

		    const stream = await fs.createReadStream(filePath, { highWaterMark });

		    // só exibe quando terminar de enviar tudo
		    stream.on('end', function(){
		    	console.log('acabou')
		    });

		    stream.pipe(res);
		    // faz streaming do audio 
		});    

	} catch(e) {
		
		console.log('err ',e);
	}



});

app.listen(3000, () => console.log('App na porta 3000'));


