$(document).ready(function() {
	$('.color-choose input').on('click', function() {
		var phoneColor = $(this).attr('data-image');

		$('.active').removeClass('active');
		$('.left-column img[data-image = ' + phoneColor + ']').addClass('active');
		$(this).addClass('active');
	});
});

function myfunction64() {
	var span = document.getElementById('price');

    while( span.firstChild ) {
        span.removeChild( span.firstChild );
    }
    span.appendChild( document.createTextNode("$699") );
}

function myfunction128() {
	var span = document.getElementById('price');

    while( span.firstChild ) {
        span.removeChild( span.firstChild );
    }
    span.appendChild( document.createTextNode("$749") );
}

function myfunction256() {
	var span = document.getElementById('price');

    while( span.firstChild ) {
        span.removeChild( span.firstChild );
    }
    span.appendChild( document.createTextNode("$849") );
}