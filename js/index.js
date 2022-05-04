
// When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.

// When you click the Create button, the monster should be added to the list and saved in the API.

// At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.

const newMonsterFormContainer = document.querySelector('div#create-monster')
const monsterListContainer = document.querySelector('div#monster-container')

const renderFormElement = () => {
    const formElement = document.createElement('form')
    formElement.id = 'create-new-monster'

    const nameInput = document.createElement('input')
    const ageInput = document.createElement('input')
    const descriptionInput = document.createElement('input')
    const submitInput = document.createElement('input')

    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.placeholder = 'Name...'
    ageInput.type = 'text'
    ageInput.name = 'age'
    ageInput.placeholder = 'Age...'
    descriptionInput.type = 'text'
    descriptionInput.name = 'description'
    descriptionInput.placeholder = 'Description...'
    submitInput.type = 'submit'
    submitInput.value = 'Create'

    formElement.appendChild(nameInput)
    formElement.appendChild(ageInput)
    formElement.appendChild(descriptionInput)
    formElement.appendChild(submitInput)

    newMonsterFormContainer.appendChild(formElement)

}

const renderMonsterList = monstersArray => {
    const monsterListElement = document.createElement('ul')
    monstersArray.forEach(monsterObj => {
        console.log(monsterObj)
        const monster = document.createElement('li')
        monster.textContent = `Name: ${monsterObj.name}. Age: ${monsterObj.age}. Description: ${monsterObj.description}`
        monsterListElement.appendChild(monster)
    })
    monsterListContainer.appendChild(monsterListElement)
}

renderFormElement()

fetch('http://localhost:3000/monsters/?_limit=50')
    .then(resp => resp.json())
    .then(monstersArray => renderMonsterList(monstersArray))