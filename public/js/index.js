var tempoReal;
var tempoTotal;
$(function () {

	var wavesurfer = WaveSurfer.create({
		container: document.querySelector('#waveform'),
		barWidth: 2,
		barHeight: 2, 
		barGap: null,
		waveColor: 'violet',
		progressColor: 'purple'
	});

	document.getElementById('play').addEventListener('click', function() {
		var context = new AudioContext();
		wavesurfer.play();
		setInterval(function() {
			tempoReal = wavesurfer.getCurrentTime();
			tempoTotal = wavesurfer.getDuration();
			console.log('====================================')
			console.log('Tempo Percorrido ', tempoReal)
			console.log('Tempo da Musica ', tempoTotal)
			console.log('====================================')
			if(tempoReal === tempoTotal ) {
				location.reload();
			// 	$.get('http://localhost:3000/audio', function(data, status){
			// 		console.log("Data: " + data + "\nStatus: " + status);
			// 		wavesurfer.load('http://localhost:3000/audio');
			// 	});
			// 	setTimeout(function(){

			// 	wavesurfer.play();
			// 	$('#play').click();
			// },5000);
			console.log('Fim');
		}

	},1000);
	});


	document.getElementById('pause').addEventListener('click', function() {
		var context = new AudioContext();
		wavesurfer.pause();
	});




	wavesurfer.load('http://localhost:3000/audio');


});


//Criar Função que destroy o lopp de verificação, para ão buscar o audio mais de duas vezes 