// const inputElement = document.getElementById('userSearch');
// const submitButton = document.getElementById('searchButton')

// submitButton.addEventListener('click', function(event){
//     event.preventDefault()
//     const inputValue = inputElement.value;
//     console.log(inputValue)
// })

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('form');
    searchButton.addEventListener('submit', (event) => {fetchUserData(event)});
});

async function fetchUserData(event){
    event.preventDefault()
    const inputValue = document.getElementById('username').value
    let response = await fetch(`https://api.github.com/users/${inputValue}`);
    let data = await response.json();
    console.log(data)
    return data
}

