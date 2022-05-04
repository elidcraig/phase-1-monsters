// Create a form within div#create-monster with submit button and 3 inputs:
//      Name, age, and description
// Each input should have a name, and placeholder text
// 
// When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.

// Above your list of monsters, you should have a form to create a new monster. You should have fields for name, 
// age, and description, and a 'Create Monster Button'. When you click the button, the monster should be added to the 
// list and saved in the API.

// At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.



fetch('http://localhost:3000/monsters')
    .then(resp => resp.json())
    .then(monstersArray => console.log(monstersArray))