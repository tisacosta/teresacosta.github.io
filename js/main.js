
$(function(){
	$('.mobile-menu-icon').click( function() {

		if ($('.main-menu-mobile').hasClass('open')) {
			$('.main-menu-mobile').removeClass('open');
		}
		else {
			$('.main-menu-mobile').addClass('open');
		}

	});

	$('.main-menu-mobile li a').click( function(){
		$('.main-menu-mobile').removeClass('open');
	});

});

$(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});