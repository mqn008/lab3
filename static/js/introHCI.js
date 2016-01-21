'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('h4').css("text-decoration","underline");
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Clicked!");
		$('.jumbotron p').addClass("active");
	});

	$('#submitBtn').click(function(e) {
		var projVal = $('#project').val();
		var projWidth = $('#width').val();
		var projText = $('#description').val();
		var projDesc = $(projVal).find('.project-description');
		$(projVal).animate({
			width: projWidth
		});
		$(projDesc).text(projText);
	});

	$('h4').click(function(e) {
		$(this).css({"font-family":"georgia","font-style":"italic"});
	});

	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
	e.preventDefault();
	console.log("Project clicked");
    var projectTitle = $(this).find("p").text();
    console.log(projectTitle);
    var jumbotronHeader = $('.jumbotron h1');
    $(jumbotronHeader).text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
		if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(containingProject).fadeOut();
	}
}