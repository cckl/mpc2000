const $pads = $('.pad')
const $buttons = $('.button')
const display = $('#display')
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

display.html('Press a key or click a pad to begin!')

// Play sounds
function playSound(code) {
  const sound = sounds[code].audio;
  const text = sounds[code].name;
  sound.play();
  sound.volume = sounds[code].vol;
  sound.currentTime = 0;
  display.html(text);
}

// Trigger sounds on key press
$(document).on('keydown', keyPress)

function keyPress(e) {
  let $key = $(`.pad[data-key='${e.keyCode}']`);
  let key = $key[0];
  let code = e.keyCode;
  if (key === undefined) {
    return
  }
  $key.addClass('pressed');
  playSound(code);
}

// Trigger sounds on pad click
$pads.each(function(index, pad) {
  $(pad).on('click', padClick)
})

function padClick(e) {
  if ($(e.target).hasClass('pad')) {
    let code = $(e.target)[0].dataset.key;
    $(e.target).addClass('pressed');
    playSound(code);
  }
}

// Remove pressed CSS class
$pads.each(function(index, pad) {
  $(pad).on('transitionend', removePressed)
})

function removePressed(e) {
  $(e.target).removeClass('pressed');
}

// Clicks for buttons
function pressBtn(e) {
  $(e.target).toggleClass('btn-pressed');
}

$buttons.each(function(index, button) {
  $(button).on('click', pressBtn)
})

// Change cursor
$(document).on('mouseover', changeCursor)

function changeCursor(e) {
  if ($(e.target).hasClass('pad')) {
    $('body').css('cursor', 'pointer')
  } else {
    $('body').css('cursor', 'default')
  }
}
