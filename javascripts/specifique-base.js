$(function () {
	var $body   = $(document.body);
	var offset = $('#content').offset();

  $('.vertical-sidebar').on('affix.bs.affix', function (e) {
    if ( $( this ).hasClass( 'vertical-sidebar-left' ) ) {
      if ($(this).next().hasClass('col-lg-offset-1')) {
        $(this).next().removeClass('col-lg-offset-1');
        $(this).next().addClass('col-lg-offset-3 col-sm-offset-4');
      } else {
        $(this).next().addClass('col-lg-offset-2 col-sm-offset-3');
      }
    }
  });
  $('.vertical-sidebar').on('affix-top.bs.affix', function (e) {
    if ( $( this ).hasClass( 'vertical-sidebar-left' ) ) {
      if ($(this).next().hasClass('col-lg-offset-3')) {
        $(this).next().removeClass('col-lg-offset-3 col-sm-offset-4');
        $(this).next().addClass('col-lg-offset-1');
      } else {
        $(this).next().removeClass('col-lg-offset-2 col-sm-offset-3');
      }
    }
  });
  $('.vertical-sidebar').affix({
      offset: {
        top: offset.top - $('.navbar:first').innerHeight()
    }
  });
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

	var top = $(document).scrollTop();
	var myPos = $('.fullwidth-header .background-image').css("background-position").split(" ");
	function checkTop(top) {
	  if(top > 50)
	    $('body>.navbar').removeClass('navbar-transparent');
	  else
	    $('body>.navbar').addClass('navbar-transparent');
	}
	checkTop(top);

	myPos[1] = parseInt(myPos[1].replace("px",""));
	$(window).scroll(function () {
	  var top = $(document).scrollTop();
	  $('.fullwidth-header .background-image').css({
	    'background-position': myPos[0]+' '+parseInt(myPos[1]-(top/3).toFixed(2))-50+'px'
	  });
	  checkTop(top);
	});
});
