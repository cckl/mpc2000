const pads = document.querySelectorAll('.pad')
const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
const sounds = {
  65: {
    char: 'A',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick1.mp3'),
    name: 'KICK 1'
  },
  83: {
    char: 'S',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/kick3.mp3'),
    name: 'KICK 2'
  },
  68: {
    char: 'D',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snare3.mp3'),
    name: 'SNARE 1'
  },
  70: {
    char: 'F',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/snare19.mp3'),
    name: 'SNARE 2'
  },
  81: {
    char: 'Q',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/clap4.mp3'),
    name: 'CLAP 1'
  },
  87: {
    char: 'W',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/clap10.mp3'),
    name: 'CLAP 2'
  },
  69: {
    char: 'E',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/hat10.mp3'),
    name: 'CLOSED HAT'
  },
  82: {
    char: 'R',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/openhat.mp3'),
    name: 'OPEN HAT'
  },
  72: {
    char: 'H',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/pop1.mp3'),
    name: 'PERC 1'
  },
  74: {
    char: 'J',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/synth3.mp3'),
    name: 'SYNTH'
  },
  75: {
    char: 'K',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings2.mp3'),
    name: 'STRINGS 1'
  },
  76: {
    char: 'L',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/strings22.mp3'),
    name: 'STRINGS 2'
  },
  85: {
    char: 'U',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/wood1.mp3'),
    name: 'PERC 2'
  },
  73: {
    char: 'I',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp1.mp3'),
    name: 'HARP 1'
  },
  79: {
    char: 'O',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp2.mp3'),
    name: 'HARP 2'
  },
  80: {
    char: 'P',
    audio: new Audio('https://mpc2000.nyc3.digitaloceanspaces.com/harp3.mp3'),
    name: 'HARP 3'
  }
}

// Play sounds
function playSound(code) {
  const audio = sounds[code].audio;
  audio.play();
  audio.currentTime = 0;
  display.innerText = sounds[code].name;
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
