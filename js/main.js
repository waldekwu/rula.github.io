const nextBtn = $("#next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentQuestionIndex = 1;

//question nav
$('#question-list a').on('click', function (e) {
  e.preventDefault();
  $(this).tab('show');
  // currentQuestionIndex = $(this).innerHTML
  console.log();
  currentQuestionIndex = parseInt($(this).text());

})
//card body
for (var i = 0; i < $('.question-container').length; i++) {
	$('.question-container')[i].classList.add("animated", "fadeIn");
}

nextBtn.on('click', (e) => {
	e.preventDefault();
    currentQuestionIndex++;

if (currentQuestionIndex < 10) {
    $('a[href="#step-'+currentQuestionIndex + '"]').tab('show');
} else {
	//results
}
})

$("#prev-btn").on('click', (e) => {
	e.preventDefault();
    currentQuestionIndex--;

if (currentQuestionIndex > 0) {
    $('a[href="#step-'+currentQuestionIndex + '"]').tab('show');
} else {
	//results
}

})


