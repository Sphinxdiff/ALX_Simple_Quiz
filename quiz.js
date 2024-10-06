// Define the checkAnswer function
function checkAnswer() {
    // The correct answer to the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById('feedback');
    
    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no answer is selected, prompt the user
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
