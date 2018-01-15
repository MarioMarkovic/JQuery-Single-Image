$(document).ready(function(){
	var time = 400;// setting time
	//open image function
	function openSingleImg(){
		var  addDiv = '<div class="container_single_img"><div class="close_btn">&#x2715;</div><img class="popUpActive" src="' + 
		$(this).attr('src') + '"><div class="caption_text">' + $(this).attr('alt') + '</div></div>';

		$(addDiv).appendTo('#background_overlay_single');
		$('#background_overlay_single').fadeIn(time);
	}
	$(document).keydown(function(e){
		e = e || window.event;
		if(e.keyCode == '27'){// esc key
				$('#background_overlay_single').fadeOut(time);
				$('.container_single_img').remove();
		}
	});	
	// open image
	$('.single_img').click(openSingleImg);
	// close button
	$(document).on('click', '.close_btn', function(){
		$('#background_overlay_single').fadeOut(time);
		$('.container_single_img').remove();
	});
});