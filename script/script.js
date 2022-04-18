const generatorInput = document.querySelector('#generatorInput')
const generatorButton = document.querySelector('#generatorButton')
const results = document.querySelector('#results')

let buttonDisabled = true
let isLoading = false
let word = ""
let slogans = [
    {text: 'Testing slogan'}, 
    {text: 'Imagine like it is a catchy slogan here'},
    {text: 'Catchy slogan'},
]

const setButtonState = () => {
    if (buttonDisabled) generatorButton.style.pointerEvents = 'none'
    else generatorButton.style.pointerEvents = 'all'
}

const displaySlogans = () => {
    !isLoading && slogans.map((slogan) => {
        let newSlogan = Slogan(slogan.text)
        results.appendChild(newSlogan)
    })

    if (isLoading) results.appendChild(LoadingSpinner())
}

const Slogan = (text) => {
    const div = document.createElement('div')
    div.innerHTML = text
    div.classList.add('slogan')

    return div
}

const LoadingSpinner = () => {
    const div = document.createElement('div')
    div.id = 'loadingSpinner'

    return div
}

onInputChange = (e) => {
    word = e.target.value

    if (word.length >= 3) buttonDisabled = false
    else buttonDisabled = true

    setButtonState();

    !buttonDisabled ? generatorButton.classList.remove('disabled')
    : generatorButton.classList.add('disabled')
}

onGeneratorButtonClick = (e) => {
    if (buttonDisabled) return;

    console.log('should send a request')
}

generatorInput.addEventListener('input', onInputChange)
generatorButton.addEventListener('click', onGeneratorButtonClick)

displaySlogans()
setButtonState()