let loggedIn = JSON.parse(sessionStorage.getItem("loggedInUser"))
let currentClass = sessionStorage.getItem("currentClass")
let currentClassObj = loggedIn["listClasses"][currentClass]
let currentClassStudents = currentClassObj["studentList"]

const subj = document.getElementById("subject")
const sched = document.getElementById("schedule")
const studNames = document.getElementById("studNames")
const daysListCont = document.getElementById("daysList")
const newDayBtnCont = document.getElementById("newDayBtnCont")

subj.innerText = "Subject: " + currentClassObj["subject"]
sched.innerText = "Schedule: " + currentClassObj["schedule"]

currentClassStudents.sort()
genTable()


function genTable() {
    daysListCont.innerHTML = `<th>Name</th>`
    for(i = 0; i < currentClassObj["days"]; i++) {
        daysListCont.innerHTML += `<th>Day ${i+1}</th>`
    }
    daysListCont.innerHTML += `<th id="newDayBtnCont"><button onclick="addNewDay()" id="newDayBtn">New day</button></th>`

    let radios = (stud) => {
        let radios = ""
        for(i = 0; i < currentClassObj["days"]; i++) {
            radios += `<td>
    <label><input type="radio" name="${stud}d${i}" value="absent">A</label>
    <label><input type="radio" name="${stud}d${i}" value="present" checked>P</label><br></td>
</td>`
        }
        return radios
    }

    let html = currentClassStudents.map((stud) => `<tr><td>${stud["name"]}</td>${radios(stud["name"])}</tr>`).join('')
    const studListCont = document.getElementById("studNames")
    studListCont.innerHTML = html
}


function addNewDay() {
    currentClassObj["days"] += 1

    let users = JSON.parse(sessionStorage.getItem("users"))
    users = users.map(user => {
        if(loggedIn["username"] === user["username"]) {
            return loggedIn
        }
        return user
    })

    loggedIn["listClasses"][currentClass] = currentClassObj
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedIn))
    sessionStorage.setItem("users", JSON.stringify(users))

    genTable()
}