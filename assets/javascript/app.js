var panel = $("#quiz-area");


var questions = [{
  question: "Which actor or actress has made the most money?",
  answers: ["Nicholas Cage", "Tom Hanks", "Adam Sandler", "Jennifer Anniston"],
  correctAnswer: "Tom Hanks"
}, {
  question: "Which of these is NOT a state?",
  answers: ["Alaska", "New Jersey", "Hawaii", "Washington D.C"],
  correctAnswer: "Washington D.C"
}, {
  question: "Which of these teams is not a hockey team",
  answers: ["New Jersey Devils", "Chicago Bulls", "New York Rangers", "Washington Capitals"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "Which of these states is the newest state to the U.S.A?",
  answers: ["Florida", "California", "Tennesse", "Alaska"],
  correctAnswer: "Alaska"}, {
  question: "Which of these bands is not a boy band",
  answers: ["Nsync", "Backstreet Boys", "Hanson", "Spice Girls"],
  correctAnswer: "Spice Girls"
}, {
  question: "Which of these aritsts are not a rapper?",
  answers: ["Lil Wayne", "Kendrick Lamar", "Mac Miller", "Eric Church"],
  correctAnswer: "Eric Church"
}, {
  question: "Which of these companys do not make computers?",
  answers: ["Dell", "HP", "Kitchen-Aid", "Samsung"],
  correctAnswer: "Kitchen-Aid"
}, {
  question: "What was Arnold's head shaped like?",
  answers: ["A square", "A circle", "A football", "Diamond"],
  correctAnswer: "A football"
}];


var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
