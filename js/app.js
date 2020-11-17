
(function() {
//Select the input element
const form = document.querySelector('#message-form')
const jokeBtn = document.getElementById("joke-btn");
const messageContent = document.querySelector('.message-content')
const loadAlert = document.getElementById("loadAlert");
//Set up Submit Button
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')

    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
        //Change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    }
})

//click on joke button
jokeBtn.addEventListener('click', async function(e){
    e.preventDefault();
    loadAlert.style.display = "block";
    //fetching joke
    let response = await fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => messageContent.textContent = data.value);
    loadAlert.style.display = "none";
});

})()



