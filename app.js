const button = document.querySelector('.container button')
const jokeText = document.querySelector('.container p')

//application of joke API
async function getJoke() {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })

  //makes data readable
  const jokeObj = await jokeData.json()

  jokeText.innerHTML = jokeObj.joke
}

button.addEventListener('click', getJoke)
