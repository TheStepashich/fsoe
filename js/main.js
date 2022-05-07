const windowJQ = $(window);
windowJQ.on('scroll', () => {
	const scrolled = windowJQ.scrollTop();
	$('header').css({
		'background-color': scrolled > 40 ? '#222c' : '#2220',
	});
});
