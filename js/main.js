const windowJQ = $(window);
windowJQ.on('scroll', () => {
	const scrolled = windowJQ.scrollTop();
	$('.head').css({
		background: scrolled > 50 ? '#222c' : '#2110',
	});
});
