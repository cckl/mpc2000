const pads = document.querySelectorAll('.pad')
const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
const kick1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick1.mp3')
const kick2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick3.mp3')
const snare1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snare3.mp3')
const snare2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snare19.mp3')
const clap1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/clap4.mp3')
const clap2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/clap10.mp3')
const hat1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/hat10.mp3')
const hat2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/openhat.mp3')
const block1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/pop1.mp3')
const block2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/wood1.mp3')
const synth = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/synth3.mp3')
const string1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings2.mp3')
const string2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings22.mp3')
const harp1 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp1.mp3')
const harp2 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp2.mp3')
const harp3 = new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp3.mp3')

// Trigger sounds
document.addEventListener('keydown', keyPress)
function keyPress(e) {
  let key = document.querySelector(`.pad[data-key='${event.which}']`);
  if (key === null) { return; }
  else { key.classList.add('pressed'); }
  if (event.which === 65) {
    kick1.play();
    kick1.currentTime = 0;
    display.innerText = "KICK 1";
  }
  if (event.which === 83) {
    kick2.play();
    kick2.currentTime = 0;
    kick2.volume = 0.5;
    display.innerText = "KICK 2"
  }
  if (event.which === 68) {
    snare1.play();
    snare1.currentTime = 0;
    snare1.volume = 0.5;
    display.innerText = "SNARE 1"
  }
  if (event.which === 70) {
    snare2.play();
    snare2.currentTime = 0;
    snare2.volume = 0.5;
    display.innerText = "SNARE 2"
  }
  if (event.which === 81) {
    clap1.play();
    clap1.currentTime = 0;
    clap1.volume = 0.5;
    display.innerText = "CLAP 1"
  }
  if (event.which === 87) {
    clap2.play();
    clap2.currentTime = 0;
    clap2.volume = 0.5;
    display.innerText = "CLAP 2"
  }
  if (event.which === 69) {
    hat1.play();
    hat1.currentTime = 0;
    display.innerText = "HI HAT 1"
  }
  if (event.which === 82) {
    hat2.play();
    hat2.currentTime = 0;
    display.innerText = "HI HAT 2"
  }
  if (event.which === 72) {
    block1.play();
    block1.currentTime = 0;
    display.innerText = "PERC 1"
  }
  if (event.which === 74) {
    synth.play();
    synth.currentTime = 0;
    display.innerText = "SYNTH"
  }
  if (event.which === 75) {
    string1.play();
    string1.currentTime = 0;
    display.innerText = "STRINGS 1"
  }
  if (event.which === 76) {
    string2.play();
    string2.currentTime = 0;
    display.innerText = "STRINGS 2"
  }
  if (event.which === 85) {
    block2.play();
    block2.currentTime = 0;
    block2.volume = 0.5;
    display.innerText = "PERC 2"
  }
  if (event.which === 73) {
    harp1.play();
    harp1.currentTime = 0;
    display.innerText = "HARP 1"
  }
  if (event.which === 79) {
    harp2.play();
    harp2.currentTime = 0;
    display.innerText = "HARP 2"
  }
  if (event.which === 80) {
    harp3.play();
    harp3.currentTime = 0;
    display.innerText = "HARP 3"
  }
}

// Remove pressed CSS class
document.addEventListener('keyup', removePressed)

function removePressed() {
  let key = document.querySelector(`.pad[data-key='${event.which}']`);
  if (key === null) {
    return
  }
  else {
    key.classList.remove('pressed');
  }
}

// Clicks for buttons
function pressBtn(e) {
  e.target.classList.toggle('btn-pressed');
}

buttons.forEach(function(button) {
  button.addEventListener('click', pressBtn)
})
