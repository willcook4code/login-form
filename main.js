

var error = function () {
	$('p').css({color: 'red', margin: '0'});
	if ($('#un').val() === '') {
		$('#unErr').html("Please enter an email address before logging in.");
	} else if ($('#un').val() !== 'admin@google.com'){
		$('#unErr').html("Your username was not found.");
	} else {
		$('#unErr').html("");
	}

	if ($('#pw').val() === '') {
		$('#pwErr').html("Please enter a password before logging in.");
	} else if ($('#pw').val() !== 'honeycrisp'){
		$('#pwErr').html("The password you entered is incorrect.");
	} else {
		$('#pwErr').html("");
	}
	
	if ($('#un').val() === 'admin@google.com' && $('#pw').val() === 'honeycrisp')  {
 		window.location = 'https://www.theironyard.com';
	}
};


$('form').on('submit', function(e){
	e.preventDefault();
	error();
});