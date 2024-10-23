document.addEventListener('DOMContentLoaded', function() {
    const showAnswerBtn = document.getElementById('show-answer');
    const answer = document.getElementById('answer');
    const feedbackButtons = document.querySelector('.feedback');

    showAnswerBtn.addEventListener('click', function() {
        answer.style.display = 'block';
        feedbackButtons.style.display = 'block';
        showAnswerBtn.style.display = 'none';
    });

    const feedbackBtns = document.querySelectorAll('.feedback-btn');
    feedbackBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            let feedback = this.getAttribute('data-feedback');
            handleFeedback(feedback);
        });
    });

    function handleFeedback(feedback) {
        alert(`You selected: ${feedback}`);
        // Load next card logic here
        answer.style.display = 'none';
        feedbackButtons.style.display = 'none';
        showAnswerBtn.style.display = 'block';

        // Example next card:
        document.getElementById('question').textContent = "What is 2 + 2?";
        document.getElementById('answer').textContent = "4";
    }
});
