'use strict';

$(".letter").click(function () {
	$('#write').val($('#write').val() + event.target.innerHTML);
	$('#write').focus();
});
$(".return").click(function () {
	$('#write').val($('#write').val() + String.fromCharCode(13, 10));
	$('#write').focus();
});
$(".delete").click(function () {

	$('#write').val($('#write').val().slice(0, -1));
	$('#write').focus();
});
