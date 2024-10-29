function showSemester(semesterId) {
    var semesters = document.getElementsByClassName("semester");
    for (var i = 0; i < semesters.length; i++) {
        semesters[i].style.display = "none";
    }
    document.getElementById(semesterId).style.display = "block";
}