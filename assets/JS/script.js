
function switchOff () {
  anime({
    targets: ".yes, .no",
    easing: "linear",
    opacity: 0,
    duration: 400,
  })

  $( "#background_black" ).css({
    "width": 100 + "%",
    "height": 100 + "%",
  })

  let fallDown = anime.timeline ({
  });

  fallDown
  .add({
    targets: ".glaz",
    translateY: 1000,
    translateX: -200,
    duration: 800,
    easing: "linear"
  })
  .add ({
    targets: ".glaz",
    translateX: -800,
    duration: 1000,
    easing: "linear"
  })
  .add ({
    targets: ".glaz",
    translateY: -500,
    duration: 1000,
    easing: "linear"
  })
  .add ({
    targets: ".glaz",
    translateY: 1000,
    translateX: 500,
    duration: 1200,
    easing: "easeOutQuart",
    scale: {
      value: 2.5,
      easing: "easeOutQuart"
    }
  })

  let moveOn = anime.timeline ({
  });

  moveOn
  .add({
    targets: ".zrachok",
    duration: 500,
    scale: 1.3,
    translateX: 50,
  })
  .add({
    targets: ".zrachok",
    duration: 600,
    scale: 1,
    translateX: -100,
  })
  .add({
    targets: ".zrachok",
    duration: 700,
    scale: 1.3,
    translateX: 50,
    translateY: -50,
  })
  .add({
    targets: ".zrachok",
    duration: 700,
    scale: 0.8,
    translateX: -100,
    translateY: 200,
  })
  .add({
    targets: ".zrachok",
    delay: 800,
    duration: 700,
    scale: 1,
    translateX: -120,
    translateY: -50,
  })

  anime({
    targets: ".logo",
    opacity: 1,
    delay: 4500,
  })
  }

let begining = anime.timeline({
  duration: 1200,
  easing: "linear"
});

begining
.add({
  targets: ".hi",
  opacity: 1
})
.add({
  targets: ".hi",
  opacity: 0
})
.add({
  targets: ".what",
  opacity: 1
})
.add({
  targets: ".what",
  opacity: 0
})
.add({
  targets: ".want",
  opacity: 1
})
.add({
  targets: ".want",
  opacity: 0
})
.add({
    targets: ".yes",
    opacity: 1,
})
.add({
    targets: ".no",
    opacity: 1,
})

function startGame() {
  anime({
    targets: ".yes, .no",
    easing: "linear",
    opacity: 0,
    duration: 400,
  })
  $( "#background_red" ).css({
    "width": 0 + "%",
    "height": 0 + "%",
  })

  function ending() {
    console.log(1);
  }

  changeAnim();
}

$( "#target_no" ).click(function() {
  switchOff();
});

$( "#target_yes" ).click(function() {
  startGame();
});

$( "#logo" ).click(function() {
  ending();
});


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// let scaleArr = [0.7, 0.8, 0.9, 1.4, 1.5, 1.6, 1.7 ]

function animeBall () {
  setTimeout(function() {
    anime ({
      targets: ".red",
      top: getRandomArbitrary(0, 800),
      left: getRandomArbitrary(0, 1500),
    })
    animeBall()
  }, 500)
}

function animeZrachok () {
  setTimeout(function() {
    anime({
      targets: ".white",
    })
    // $( "#white" ).css({
    //   "translateX": getRandomArbitrary(-30, 30) + "px",
    //   "translateY": getRandomArbitrary(-30, 30) + "px",
    // })
    animeZrachok()
  }, 1000)
}

function changeAnim () {
  animeZrachok()
  animeBall()
  anime ({
    targets: ".text",
    opacity: 1,
    duration: 1500,
    delay: 2000,
  })
  anime({
    targets: ".img",
    opacity: 1,
    duration: 1500,
    delay: 2000,
  })
}
