(function () {
    let questions = [
        {
            title: 'gato',
            alternatives: ['dog', 'cat', 'bird', 'fish'],
            correctAnswer: 1,
        },
        {
            title: 'ave',
            alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
            correctAnswer: 3
        },
        {
            title: 'rata',
            alternatives: ['cat', 'fish', 'rat', 'shark'],
            correctAnswer: 2
        },
        {
            title: 'mosca',
            alternatives: ['fly', 'puma', 'fish', 'dog'],
            correctAnswer: 0
        },
    ]

    let app = {
        start: function () {
            this.currPosition = 0;
            this.score = 0;

            let alts = document.querySelectorAll('.alternative');

            alts.forEach((element, index) => {
                element.addEventListener('click', () => {
                    this.checkAnswer(index);
                })
            });

            this.showQuestion(questions[this.currPosition]);
        },

        showQuestion: function (question) {
            let titleDiv = document.getElementById('title');
            let alts = document.querySelectorAll('.alternative');

            titleDiv.textContent = question.title;

            alts.forEach(function (element, index) {
                element.textContent = question.alternatives[index];
            });
        },

        checkAnswer: function (userSelected) {
            let currQuestion = questions[this.currPosition];

            if (currQuestion.correctAnswer == userSelected) {
                this.score++
                this.showResult(true);
            } else {
                this.showResult(false);
            }

            this.updateStats();

            this.increasePosition();

            this.showQuestion(questions[this.currPosition]);
        },

        increasePosition: function () {
            this.currPosition++;

            if (this.currPosition == questions.length) {
                this.currPosition = 0;
            }
        },

        updateStats: function () {
            let scoreDiv = document.getElementById('score');

            scoreDiv.textContent = `Your score: ${this.score}`;
        },

        showResult: function (isCorrect) {
            let resultDiv = document.getElementById('result');
            let result = '';

            if (isCorrect) {
                result = "Correct Answer!";
            } else {
                let currQuestion = questions[this.currPosition];
                let correctAnswerIndex = currQuestion.correctAnswer;
                let correctAnswerText = currQuestion.alternatives[correctAnswerIndex];

                result = `Wrong! Correct Answer: ${correctAnswerText}`;
            }

            resultDiv.textContent = result;
        }
    }

    app.start();
})()

