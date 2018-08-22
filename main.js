const pads = document.querySelectorAll('.pad')
const kick1 = new Audio('/sounds/kick1.mp3')
const kick2 = new Audio('/sounds/kick3.mp3')
const snare1 = new Audio('/sounds/snare3.mp3')
const snare2 = new Audio('/sounds/snare19.mp3')
const clap1 = new Audio('/sounds/clap4.mp3')
const clap2 = new Audio('/sounds/clap10.mp3')
const hat1 = new Audio('/sounds/hat10.mp3')
const hat2 = new Audio('/sounds/openhat.mp3')
const block1 = new Audio('/sounds/pop1.mp3')
const block2 = new Audio('/sounds/wood1.mp3')
const synth = new Audio('/sounds/synth3.mp3')
const string1 = new Audio('/sounds/strings2.mp3')
const string2 = new Audio('/sounds/strings22.mp3')
const harp1 = new Audio('/sounds/harp1.mp3')
const harp2 = new Audio('/sounds/harp2.mp3')
const harp3 = new Audio('/sounds/harp3.mp3')
const sounds = [kick1, kick2, snare1, snare2, clap1, clap2, hat1, hat2, block1, block2, synth, string1, string2, harp1, harp2, harp3]

// const soundsObject = {
//   U: {'sound': block2, name: 'Block 2'},
//   I: {'sound': harp1, name: 'Harp 1'},
//   O: {'sound': harp2, name: 'Harp 2'},
//   P: {'sound': harp3, name: 'Harp 3'},
//   H: {'sound': block1, name: 'Block 1'},
//   J: {'sound': synth, name: 'Synth'},
//   K: {'sound': string1, name: 'String 1'},
//   L: {'sound': string2, name: 'String 2'},
//   Q: {'sound': clap1, name: 'Clap 1'},
//   W: {'sound': clap2, name: 'Clap 2'},
//   E: {'sound': hat1, name: 'Hat 1'},
//   R: {'sound': hat2, name: 'Hat 2'},
//   A: {'sound': kick1, name: 'Kick 1'},
//   S: {'sound': kick2, name: 'Kick 2'},
//   D: {'sound': snare1, name: 'Snare 1'},
//   F: {'sound': snare2, name: 'Snare 2'}
// }

document.addEventListener('keydown', keyPress)

function keyPress(e) {
  let key = document.querySelector(`.pad[data-key='${event.which}']`);
  if (key === null) { return; }
  else { key.classList.add('pressed'); }
  if (event.which === 65) {
    kick1.play();
    kick1.currentTime = 0;
  }
  if (event.which === 83) {
    kick2.play();
    kick2.currentTime = 0;
    kick2.volume = 0.5;
  }
  if (event.which === 68) {
    snare1.play();
    snare1.currentTime = 0;
    snare1.volume = 0.5;
  }
  if (event.which === 70) {
    snare2.play();
    snare2.currentTime = 0;
    snare2.volume = 0.5;
  }
  if (event.which === 81) {
    clap1.play();
    clap1.currentTime = 0;
    clap1.volume = 0.5;
  }
  if (event.which === 87) {
    clap2.play();
    clap2.currentTime = 0;
    clap2.volume = 0.5;
  }
  if (event.which === 69) {
    hat1.play();
    hat1.currentTime = 0;
  }
  if (event.which === 82) {
    hat2.play();
    hat2.currentTime = 0;
  }
  if (event.which === 72) {
    block1.play();
    block1.currentTime = 0;
  }
  if (event.which === 74) {
    synth.play();
    synth.currentTime = 0;
  }
  if (event.which === 75) {
    string1.play();
    string1.currentTime = 0;
  }
  if (event.which === 76) {
    string2.play();
    string2.currentTime = 0;
  }
  if (event.which === 85) {
    block2.play();
    block2.currentTime = 0;
    block2.volume = 0.5;
  }
  if (event.which === 73) {
    harp1.play();
    harp1.currentTime = 0;
  }
  if (event.which === 79) {
    harp2.play();
    harp2.currentTime = 0;
  }
  if (event.which === 80) {
    harp3.play();
    harp3.currentTime = 0;
  }
}

document.addEventListener('keyup', removePressed)

function removePressed() {
  let key = document.querySelector(`.pad[data-key='${event.which}']`);
  if (key === null) { return; }
  else { key.classList.remove('pressed'); }
}
