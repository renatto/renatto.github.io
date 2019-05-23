$(function(){
	$(".slides").slidesjs({
		width: 940,
        height: 450,
		navigation: {
			active: true,
			effect: "slide"
		},
		pagination: {
			active: true,
			effect: "slide"
		},
		play: {
			active: true,
			effect: "slide",
			interval: 3000,
			auto: true,
			swap: true,
		// [boolean] show/hide stop and play buttons
			pauseOnHover: true,
		// [boolean] pause a playing slideshow on hover
			restartDelay: 3000
		// [number] restart delay on inactive slideshow
		}
	});
});