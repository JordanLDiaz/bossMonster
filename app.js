
const heros = [{
  name: 'voyager',
  phasers: 20,
  photons: 40,
  health: 100,
  energy: 100,
  selected: true
}, {
  name: 'enterprise',
  phasers: 30,
  photons: 30,
  health: 100,
  energy: 100,
  selected: false
}, {
  name: 'defiant',
  phasers: 10,
  photons: 50,
  health: 100,
  energy: 100,
  selected: false
}, {
  name: 'runabout',
  phasers: 10,
  photons: 20,
  health: 100,
  energy: 100,
  selected: false
},
]

const bosses = [{
  name: 'borg-cube',
  phasers: 30,
  photons: 40,
  health: 500,
  selected: true
}
  // , {
  //   name: 'borg-sphere',
  //   phasers: 30,
  //   photons: 40,
  //   health: 500,
  //   selected: false
  // }
]


function attackBorg() {
  //find all selected players
  // all players attacks add
  //attack removes health from borg
  //draws to screen
  let attack = 0
  heros.forEach(player => {
    if (player.selected == true)
      attack += player.phasers
  }
  )
  bosses.forEach(boss => {
    boss.health -= attack
    if (boss.selected == true)
      if (boss.health <= 0) {
        boss.health = 0
      }
  })
  drawCards()
}

function drawCards() {
  let player = ''
  heros.forEach(hero => {
    if (hero.selected == true)
      player += `
  <div class="col-3 text-center">
    <div class="card h-${hero.name} h-card">
      <h3 id="${hero.name}">${hero.name}</h3>
      <h5>Phasers: ${hero.phasers}</h5>
      <h5>Photons: ${hero.photons}</h5>
      <h5>Structural Integrity: ${hero.health}</h5>
    </div>
  </div>
  `
    document.getElementById('hero').innerHTML = player
  }
  )

  bosses.forEach(boss => {
    let enemy = ''
    if (boss.selected == true)
      enemy = `
    <div class="col-6 text-center">
        <div class="card ${boss.name} h-card" id="${boss.name}" onclick="attackBorg()">
          <h3>${boss.name}</h3>
          <h5>Phasers: ${boss.phasers}</h5>
          <h5>Photons: ${boss.photons}</h5>
          <h5>Structural Integrity: ${boss.health}</h5>
        </div>
      </div>
    `
    document.getElementById('boss').innerHTML = enemy
  }
  )
}

drawCards()
