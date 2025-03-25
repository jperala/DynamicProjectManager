function calculateGrade() {
    const marks = document.getElementById('marks').value;
    let grade;

    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 60 &&marks<=79) {
        grade = 'B';
    } else if (marks >= 40 && marks<=59) {
        grade = 'C';
    } else  {
        grade = 'F';
    } 

    document.getElementById('result').innerHTML = grade;
}
