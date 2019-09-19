$("#subscribe-button").click(sumbmitToMailchimp);

$("#subscribe-form").keydown(function(e) {
	var key = e.which;
	if (key == 13) {
		sumbmitToMailchimp();
	}
});

// Send email to mailchimp
var sumbmitToMailchimp = function() {
	var email = $("#email-input").val();
	alert(`${email} added to our mailing list`);
	setTimeout(function() { 
		$("#email-input").val("");
	}, 1000);
	$("#subscribe-button").addClass("disabled");
}

$("#email-input").on("input", function() {
	if ($("#email-input").val().search("@") != -1) {
		$("#subscribe-button").removeClass("disabled");
	} else {
		$("#subscribe-button").addClass("disabled");
	}
});
