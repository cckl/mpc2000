const pads = document.querySelectorAll('.pad')
const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
const sounds = {
  65: {
    char: 'A',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick1.mp3'),
    vol: 1,
    name: 'KICK 1'
  },
  83: {
    char: 'S',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick3.mp3'),
    vol: 1,
    name: 'KICK 2'
  },
  68: {
    char: 'D',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snareclap.mp3'),
    vol: 0.6,
    name: 'SNARE 1'
  },
  70: {
    char: 'F',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snare19.mp3'),
    vol: 1,
    name: 'SNARE 2'
  },
  81: {
    char: 'Q',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/9clap1.mp3'),
    vol: 0.7,
    name: 'CLAP 1'
  },
  87: {
    char: 'W',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/clap10.mp3'),
    vol: 1,
    name: 'CLAP 2'
  },
  69: {
    char: 'E',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/hat10.mp3'),
    vol: 1,
    name: 'HAT 1'
  },
  82: {
    char: 'R',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/hat7.mp3'),
    vol: 0.5,
    name: 'HAT 2'
  },
  72: {
    char: 'H',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/pop1.mp3'),
    vol: 1,
    name: 'PERC 1'
  },
  74: {
    char: 'J',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/synth3.mp3'),
    vol: 1,
    name: 'SYNTH'
  },
  75: {
    char: 'K',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings2.mp3'),
    vol: 1,
    name: 'STRINGS 1'
  },
  76: {
    char: 'L',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings22.mp3'),
    vol: 1,
    name: 'STRINGS 2'
  },
  85: {
    char: 'U',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/wood1.mp3'),
    vol: 1,
    name: 'PERC 2'
  },
  73: {
    char: 'I',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp1.mp3'),
    vol: 1,
    name: 'HARP 1'
  },
  79: {
    char: 'O',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp2.mp3'),
    vol: 1,
    name: 'HARP 2'
  },
  80: {
    char: 'P',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp3.mp3'),
    vol: 1,
    name: 'HARP 3'
  }
}

// Play sounds
function playSound(code) {
  const sound = sounds[code].audio;
  const text = sounds[code].name;
  sound.play();
  sound.volume = sounds[code].vol;
  sound.currentTime = 0;
  display.innerText = text;
}

// Trigger sounds
document.addEventListener('keydown', keyPress)

function keyPress(e) {
  let key = document.querySelector(`.pad[data-key='${event.which}']`);
  let code = event.which;
  if (key === null) {
    return
  }
  else {
    key.classList.add('pressed');
  }
  playSound(code);
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

// Hover instructions
pads.forEach(function(pad) {
  addEventListener('mouseover', instructions)
})

pads.forEach(function(pad) {
  addEventListener('click', instructions)
})

function instructions(e) {
  if (e.target.classList.contains('pad')) {
    display.innerText = "Press a key to begin!"
  }
}
