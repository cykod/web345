
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript" src="slider.js" charset="utf-8"></script>




	<script type="text/javascript">
	$(document).ready(function() {
		/*
		*   Examples - images
		*/

		$("a.pop1").fancybox();

		$("a.pop2").fancybox({
			'overlayShow'	: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});

		$("a.pop3").fancybox({
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'overlayColor'		: '#000',
			'overlayOpacity'	: 0.7		
		});

		$("a.pop4").fancybox({
			'opacity'		: true,
			'overlayShow'	: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'none'
		});

		$("a.pop5").fancybox();

		$("a#example6").fancybox({
			'titlePosition'		: 'outside',
			'overlayColor'		: '#000',
			'overlayOpacity'	: 0.9
		});

		$("a.pop6").fancybox({
			'titlePosition'	: 'inside'
		});

		$("a.pop7").fancybox({
			'titlePosition'	: 'over'
		});

	});
</script>
