const generatorInput = document.querySelector('#generatorInput')
const generatorButton = document.querySelector('#generatorButton')
const results = document.querySelector('#results')

let buttonDisabled = true
let isLoading = false
let slogans = [
    {text: 'Testing slogan'}, 
    {text: 'Imagine like it is a catchy slogan here'},
    {text: 'Catchy slogan'},
]

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

displaySlogans()