let flashcards = [];
let currentIndex = 0;
let queue = [];
let showingAnswer = false;

function addFlashcard() {
    const question = document.getElementById("question-input").value.trim();
    const answer = document.getElementById("answer-input").value.trim();
    
    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById("question-input").value = "";
        document.getElementById("answer-input").value = "";
        if (flashcards.length === 1) {
            showFlashcard();
        }
    }
}

function showFlashcard() {
    if (queue.length > 0) {
        currentIndex = queue.shift();
    } else if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    const flashcard = flashcards[currentIndex];
    document.getElementById("flashcard-question").innerText = flashcard.question;
    document.getElementById("flashcard-answer").style.display = "none";
    document.getElementById("flashcard-answer").innerText = flashcard.answer;
    showingAnswer = false;
    document.getElementById("show-answer-btn").style.display = "block";
}

function showAnswer() {
    document.getElementById("flashcard-answer").style.display = "block";
    document.getElementById("show-answer-btn").style.display = "none";
}

function rateFlashcard(feedback) {
    switch (feedback) {
        case 'perfect':
            flashcards.splice(currentIndex, 1);
            break;
        case 'great':
            queue.push(currentIndex);
            break;
        case 'fine':
            queue.splice(4, 0, currentIndex);
            break;
        case 'terrible':
            queue.splice(2, 0, currentIndex);
            break;
    }

    if (flashcards.length > 0) {
        showFlashcard();
    } else {
        document.getElementById("flashcard-question").innerText = "All flashcards completed!";
        document.getElementById("flashcard-answer").innerText = "";
    }
}
