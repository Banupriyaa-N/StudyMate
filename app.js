// GENERATE RANDOM USER ID (temporary for hackathon)
const userID = "user123";  // later we can replace with authentication
function addTimetable() {
    const subject = document.getElementById("subject").value;
    const time = document.getElementById("time").value;

    if (subject === "" || time === "") {
        alert("Enter subject and time");
        return;
    }

    db.ref("users/" + userID + "/timetable").push({
        subject: subject,
        time: time
    });

    document.getElementById("subject").value = "";
    document.getElementById("time").value = "";
}

// DISPLAY TIMETABLE
if (document.getElementById("timetableList")) {
    db.ref("users/" + userID + "/timetable").on("value", snapshot => {
        let data = snapshot.val();
        let list = "";

        for (let key in data) {
            list += `<li><strong>${data[key].subject}</strong> — ${data[key].time}</li>`;
        }
        document.getElementById("timetableList").innerHTML = list;
    });
}
// ================= ASSIGNMENTS =================
function addAssignment() {
    const topic = document.getElementById("topic").value;
    const dueDate = document.getElementById("dueDate").value;

    if (topic === "" || dueDate === "") {
        alert("Enter topic and due date");
        return;
    }

    db.ref("users/" + userID + "/assignments").push({
        topic: topic,
        dueDate: dueDate
    });

    document.getElementById("topic").value = "";
    document.getElementById("dueDate").value = "";
}

if (document.getElementById("assignList")) {
    db.ref("users/" + userID + "/assignments").on("value", snapshot => {
        let data = snapshot.val();
        let list = "";

        for (let key in data) {
            list += `<li><strong>${data[key].topic}</strong> — Due: ${data[key].dueDate}</li>`;
        }
        document.getElementById("assignList").innerHTML = list;
    });
}


// ================= EXAM PLANNER =================
function addExam() {
    const subject = document.getElementById("examSubject").value;
    const examDate = document.getElementById("examDate").value;

    if (subject === "" || examDate === "") {
        alert("Enter subject and exam date");
        return;
    }

    db.ref("users/" + userID + "/exams").push({
        subject: subject,
        examDate: examDate
    });

    document.getElementById("examSubject").value = "";
    document.getElementById("examDate").value = "";
}

if (document.getElementById("examList")) {
    db.ref("users/" + userID + "/exams").on("value", snapshot => {
        let data = snapshot.val();
        let list = "";

        for (let key in data) {
            list += `<li><strong>${data[key].subject}</strong> — Exam on: ${data[key].examDate}</li>`;
        }
        document.getElementById("examList").innerHTML = list;
    });
}