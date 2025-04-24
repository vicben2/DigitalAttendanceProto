let loggedIn = JSON.parse(sessionStorage.getItem("loggedInUser"))
const welcomeSign = document.getElementById("welcomeSign")
const listClassesCont = document.getElementById("listClasses")
const addNewClassBtn = document.getElementById("addNewClass")
const signOut = document.getElementById("signOut")

welcomeSign.innerText = `Welcome ${loggedIn["username"]}`

if(loggedIn["listClasses"].length === 0) {
    listClassesCont.innerText = "Class list empty"
}
else {
    loggedIn["listClasses"].forEach((cclass, index) => {
        listClassesCont.innerHTML += `<div class="flex"><strong>${cclass["subject"]}</strong> - ${cclass["schedule"]} <button class="attendanceBtn" id="${index}">Begin attendance</button><button>Edit</button><button>Remove</button></div>`
    })
}

const attendanceButtons = document.querySelectorAll(".attendanceBtn")
console.log(attendanceButtons)

addNewClassBtn.addEventListener('click', function() {
    window.location.href = "./addnewclass.html"
})

attendanceButtons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        sessionStorage.setItem("currentClass", `${this.id}`)
        window.location.href = "./attendance.html"
    })  
})

signOut.addEventListener("click", function() {
    sessionStorage.setItem("loggedInUser", null)
    window.location.href = "./index.html"
})