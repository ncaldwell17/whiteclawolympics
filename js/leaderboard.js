var dataset = []
d3.csv("database.csv").then(function(rows) {
  rows.forEach(function(r) {
    dataset.push({
      name: r.name,
      score: r.score,
    })
    dataset.sort((a, b) => {
      return b.score - a.score
    })

    document.getElementById("leader-container").innerHTML = `
  <div class="pfp-leader" style="background-image: url('img/${dataset[0].name}.png')"></div>
  <div class="name">${dataset[0].name}</div>
  `
    var nextplaces = []
    let counter = 1
    dataset.slice(1, 5).forEach(function(r) {
      nextplaces.push(
        `
        <div class="nextplace">
        <div class="number">${counter += 1}</div>
        <div class="pfp" style="background-image: url('img/${r.name}.png')"></div>
        <div class="name">${r.name}</div>
      </div>
        `
      )
    })



    document.getElementById("nextplace-container").innerHTML =  nextplaces.concat()
  })
})



