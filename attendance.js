let loggedIn = JSON.parse(sessionStorage.getItem("loggedInUser"))
let currentClass = sessionStorage.getItem("currentClass")
let currentClassObj = loggedIn["listClasses"][currentClass]
let currentClassStudents = currentClassObj["studentList"]

const subj = document.getElementById("subject")
const sched = document.getElementById("schedule")
const studNames = document.getElementById("studNames")

subj.innerText = "Subject: " + currentClassObj["subject"]
sched.innerText = "Schedule: " + currentClassObj["schedule"]

currentClassStudents.sort()
studNames.innerHTML = currentClassStudents.map((stud) => `<tr>
    <td>${stud}</td>
    <td>
        <label><input type="radio" name="${stud}d1" value="absent" checked>A</label>
        <label><input type="radio" name="${stud}d1" value="present">P</label><br></td>
    </td>
    <td>
        <label><input type="radio" name="${stud}d2" value="absent" checked>A</label>
        <label><input type="radio" name="${stud}d2" value="present">P</label><br></td>
    </td>
    <td>
        <label><input type="radio" name="${stud}d3" value="absent" checked>A</label>
        <label><input type="radio" name="${stud}d3" value="present">P</label><br></td>
    </td>
</tr>`).join('')