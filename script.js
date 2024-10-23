let flashcards = [];
let currentIndex = 0;
let queue = [];

function addFlashcard() {
    const input = document.getElementById("flashcard-input");
    const content = input.value.trim();
    if (content) {
        flashcards.push(content);
        input.value = "";
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
    document.getElementById("flashcard").innerText = flashcards[currentIndex] || "No flashcards";
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
        document.getElementById("flashcard").innerText = "All flashcards completed!";
    }
}
