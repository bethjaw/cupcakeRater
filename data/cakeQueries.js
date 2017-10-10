const cupcakes = require('./cupcakes')

function getOneCupcake(id){
  for(let i=0; i < cupcakes.length; i++){
    const current = cupcakes[i]

    if(current.id == id){
      return current
    }
  }
}

function addVote(id, vote){
  const oneCupcake = getOneCupcake(id)
  let sum = 0
  oneCupcake.ratings.push(vote)

  for(let i=0; i < oneCupcake.ratings.length; i++) {
    sum = sum + oneCupcake.ratings[i]
  }
  oneCupcake.averageRating = sum / oneCupcake.ratings.length
}

module.exports = {
  getOneCupcake: getOneCupcake,
  addVote: addVote
}
