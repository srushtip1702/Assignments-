
const score = 85;

// Using if...else statements
if (score < 0 || score > 100) {
    console.log("Please enter a score between 0 and 100.");
} else {
    console.log("Score:", score);

    // Using switch statement to determine the grade
    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    console.log("Grade:", grade);

    // Using ternary operator to determine pass or fail
    const status = score >= 40 ? "Passed" : "Failed";

    console.log("Status:", status);
}
