function preload(){
  sound = loadSound('http://localhost:3000/audio');
}
function setup() {
  let cnv = createCanvas(720,400);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(160);
  let c = color(200, 260, 1); // Define color 'c'
  fill(c); // Use color variable 'c' as fill color
  text('play e pause', 20, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 2, 0, 200);
  stroke(270);
  ellipse(width/2, height/2, size, size);

  let level1 = amplitude.getLevel();
  let size1 = map(level1, 0, 2, 0, 400);
  stroke(280);
  ellipse(width/2, height/2, size1, size1);

  let level2 = amplitude.getLevel();
  let size2 = map(level2, 0, 1, 0, 500);
  stroke(290);
  ellipse(width/2, height/2, size2, size2);

  let level3 = amplitude.getLevel();
  let size3 = map(level3, 0, 1, 0, 800);
  stroke(300);
  ellipse(width/2, height/2, size3, size3);
}

function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}