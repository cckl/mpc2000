const pad = document.getElementsByClassName('pad')
const kick1 = new Audio('/sounds/kick1.mp3')
const kick2 = new Audio('/sounds/kick3.mp3')
const snare1 = new Audio('/sounds/snare3.mp3')
const snare2 = new Audio('/sounds/snare19.mp3')
const clap1 = new Audio('/sounds/clap4.mp3')
const clap2 = new Audio('/sounds/clap10.mp3')
const hat1 = new Audio('/sounds/hat10.mp3')
const hat2 = new Audio('/sounds/openhat.mp3')
const fx1 = new Audio('/sounds/pop1.mp3')
const fx2 = new Audio('/sounds/wood1.mp3')
const synth = new Audio('/sounds/synth3.mp3')
const string1 = new Audio('/sounds/strings2.mp3')
const string2 = new Audio('/sounds/strings22.mp3')
const string3 = new Audio('/sounds/strings222.mp3')
const harp1 = new Audio('/sounds/harp1.mp3')
const harp2 = new Audio('/sounds/harp2.mp3')
const harp3 = new Audio('/sounds/harp3.mp3')

document.addEventListener('keydown', keyPress)

function keyPress(e) {
  if (event.which === 65) { kick1.play(); }
  if (event.which === 83) { kick2.play(); }
  if (event.which === 68) { snare1.play(); }
  if (event.which === 70) { snare2.play(); }

  if (event.which === 81) { clap1.play(); }
  if (event.which === 87) { clap2.play(); }
  if (event.which === 69) { hat1.play(); }
  if (event.which === 82) { hat2.play(); }

  if (event.which === 74) { fx1.play(); }
  if (event.which === 75) { synth.play(); }
  if (event.which === 76) { string1.play(); }
  if (event.which === 186) { string2.play(); }

  if (event.which === 85) { fx2.play(); }
  if (event.which === 73) { harp1.play(); }
  if (event.which === 79) { harp2.play(); }
  if (event.which === 80) { harp3.play(); }
}
