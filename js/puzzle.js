$(document).ready(function(){ 

	var imageClicked = false;
	var firstImageClicked; 
	var secondImageClicked; 
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 1) + 1);
	var moves = 0;
	var secs = 0;

	function shuffleTiles(){
		if(shuffle){
			$('#image-1').css({top: 170, left: 340});
			$('#image-2').css({top: 0, left: 340});
			$('#image-3').css({top: 170, left: 170});
			$('#image-4').css({top: 0, left: 170});
			$('#image-5').css({top: 170, left: 0});
			$('#image-6').css({top: 0, left: 0});
		} 
	}

	$(window).load(function(){
		setTimeout(function(){
			shuffleTiles();
			setInterval(function(){ 
				secs++ 
			}, 1000);
		}, 1000);
	});


	$('.images').click(function(){

		if(imageClicked == false){ 
			firstImageClicked = $(this).attr('id');
			topPosFir = parseInt($(this).css('top')); 
			leftPosFir = parseInt($(this).css('left')); 
			imageClicked = true;
			} 
			else{  
			secondImageClicked = $(this).attr('id');
			topPosSec = parseInt($(this).css('top')); 
			leftPosSec = parseInt($(this).css('left'));

	
			$('#' + firstImageClicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondImageClicked).css({'top' : topPosFir , 'left' : leftPosFir});

		
			imageClicked = false;

		
			setTimeout(function(){
				if(
					$('#image-1').css('left') == '0px' && $('#image-1').css('top') == '0px' && 
					$('#image-2').css('left') == '170px' && $('#image-2').css('top') == '0px' &&
					$('#image-3').css('left') == '340px' && $('#image-3').css('top') == '0px' &&
					$('#image-4').css('left') == '0px' && $('#image-4').css('top') == '170px' &&
					$('#image-5').css('left') == '170px' && $('#image-5').css('top') == '170px' &&
					$('#image-6').css('left') == '340px' && $('#image-6').css('top') == '170px' 
				){
					$('p').text('GOOD JOB, YOU DID IT IN ' + secs + ' SECONDS WITH ' + moves + ' MOVES!!');
					moves = 0;
				}
			}, 1000);

			moves++
		}
	}); 
});

