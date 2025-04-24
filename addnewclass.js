let loggedIn = JSON.parse(sessionStorage.getItem("loggedInUser"))
const studentList = document.getElementById("studentList")
const studAddBtn = document.getElementById("studAddBtn")
const studAddedList = document.getElementById("studAddedList")
const newClassBtn = document.getElementById("newClassBtn")
let tempStudList = []

//when clicking add student button
studAddBtn.addEventListener("click", function(e) {
    e.preventDefault()

    const lname = document.getElementById("studlname")
    const fname = document.getElementById("studfname")

    if(lname.value && fname.value) {
        studAddedList.innerHTML += `<div class="flex">${lname.value}, ${fname.value} <button>Edit</button><button>Remove</button></div>`
        tempStudList.push({"name": `${lname.value}, ${fname.value}`, "attendance": []})
        lname.value = ""
        fname.value = ""
    }
    else {
        alert("Must input first name and last name.")
    }
})

//when clicking add new class button
newClassBtn.addEventListener("click", function(e) {
    e.preventDefault

    const subject = document.getElementById('subject').value;
    const schedule = document.getElementById('schedule').value;
    loggedIn["listClasses"].push({ subject, schedule, "studentList": tempStudList, "days": 1 })

    let users = JSON.parse(sessionStorage.getItem("users"))
    users = users.map(user => {
        if(loggedIn["username"] === user["username"]) {
            return loggedIn
        }
        return user
    })

    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedIn))
    sessionStorage.setItem("users", JSON.stringify(users))

    alert('New class created!')
    window.location.href = "./dashboard.html"
})