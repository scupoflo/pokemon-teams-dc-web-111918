const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

getAllTrainers()


function getAllTrainers(trainer){
  fetch('http://localhost:3000/trainers')
    .then(response => response.json())
    .then(trainers => {
      trainers.forEach((trainer)=>{
        createCard(trainer)
      })
    })
}

function render(trainer){

}

function createCard(trainerObj){
  let mainTag = document.getElementsByTagName('main')[0]

  let divTag = document.createElement('div')
  divTag.classList.add('card')
  divTag.id = `data-id ${trainerObj.id}`

  let pTag = document.createElement('p')
  pTag.innerText = `${trainerObj.name}`

  let buttonTag = document.createElement('button')
  buttonTag.dataset.trainerId = trainerObj.id
  buttonTag.innerText = "Add Pokemon"
  buttonTag.addEventListener('click',() => {addPokemonHandler(trainerObj)})


mainTag.appendChild(divTag)
divTag.appendChild(pTag)
divTag.appendChild(buttonTag)


  let ulTag =  document.createElement('ul')
  divTag.appendChild(ulTag)

  trainerObj.pokemons.forEach((pokemon) => {
    let liTag =  document.createElement('li')
    liTag.innerText = `${pokemon.nickname} (${pokemon.species}) `

    ulTag.appendChild(liTag)

    let liButtonTag =  document.createElement('button')
    liButtonTag.classList.add('release')
    liButtonTag.id = `data-pokemon-id-${pokemon.id}`
    liButtonTag.innerText = "Release"

    liTag.appendChild(liButtonTag)
  })
}
function addPokemonHandler(trainerObj){
debugger

  fetch ('http://localhost:3000/pokemons', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({trainer_id: trainerObj.id})})
    .then(response => response.json())
    .then(data => {
      debugger //function render pokemon
    })

}

function(){
  
}






function getAddPokemonButton(trainerId){
  return document.querySelector(`[data-trainer-id='${trainerId}']`)}
 //returns trainerButton Node
