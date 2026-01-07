let lessons = {
    html: false,
    css: false,
    js: false
};

if (localStorage.getItem("eduquestLessons")) {
    lessons = JSON.parse(localStorage.getItem("eduquestLessons"));
    updateProgress();
}

function completeLesson(lesson) {
    lessons[lesson] = true;
    localStorage.setItem("eduquestLessons", JSON.stringify(lessons));
    alert(lesson.toUpperCase() + " lesson completed!");
    updateProgress();
}

function updateProgress() {
    let completed = Object.values(lessons).filter(v => v).length;
    let total = Object.keys(lessons).length;
    let percent = Math.round((completed / total) * 100);

    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("progressText").innerText = percent + "% Completed";
}

function startQuiz() {
    let score = 0;

    if (confirm("HTML is used for page structure?")) score++;
    if (confirm("CSS is used for styling?")) score++;

    alert("Quiz Finished! Score: " + score + "/2");
}

function generateCertificate() {
    if (Object.values(lessons).every(v => v)) {
        document.getElementById("certificateText").innerText =
            "🎉 Congratulations! You have successfully completed EduQuest.";
    } else {
        alert("Please complete all lessons first!");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
