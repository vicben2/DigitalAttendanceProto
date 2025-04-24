let users = JSON.parse(sessionStorage.getItem('users')) || []
const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const currentUserCred = users.filter(user => user.username === username)
    if (currentUserCred.length !== 0 && currentUserCred[0]["password"] === password) {
        alert('Login success')
        sessionStorage.setItem('loggedInUser', JSON.stringify(currentUserCred[0]))
        window.location.href = "./dashboard.html"
    }
    else {
        alert("Wrong password. Please try again.")
    }
})