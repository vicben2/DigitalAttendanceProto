let users = JSON.parse(sessionStorage.getItem('users')) || []
const signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userExists = users.some(user => user.username === username)
    if (userExists) {
        alert('Username already exists. Please choose another one.')
        return
    }

    users.push({ username, password, "listClasses":[] })
    sessionStorage.setItem('users', JSON.stringify(users))
    alert('Account created successfully!')
    signupForm.reset();
    
    window.location.href = "./index.html"
})