function main(){


	//change picture when hover over facebook icon
	$("#facebook").hover(function(){
		$("#facebook").html('<a href="http://www.facebook.com"><img src="image/Facebook-icon1.png" alt="facebook"></a>')
	},
	function(){
		$("#facebook").html('<a href="http://www.facebook.com"><img src="image/Facebook-icon.png" alt="facebook"></a>')
	})

	//change picture when hover over twitter icon
	$("#twitter").hover(function(){
		$("#twitter").html('<a href="http://www.twitter.com"><img src="image/Twitter-icon1.png" alt="twitter"></a>')
	},
	function(){
		$("#twitter").html('<a href="http://www.twitter.com"><img src="image/Twitter-icon.png" alt="twitter"></a>')
	})

	//change picture when hover over RSS icon
	$("#RSS").hover(function(){
		$("#RSS").html('<a href="http://www.google.com"><img src="image/RSS-icon1.png" alt="RSS"></a>')
	},
	function(){
		$("#RSS").html('<a href="http://www.google.com"><img src="image/RSS-icon.png" alt="RSS"></a>')
	})


	//filter function
	$(".filter-item").click(function(){
		//get the key word form the key word been clicked
		var keyWord = $(this).text();
		//if "All" been clicked, show all cards
		if (keyWord == "All"){
			$(".card").show();
		}else{
			//otherwise hide all cards
			$(".card").hide();
			//then only show the cards with keyword as class
			$("."+keyWord).show();
		}
	});

	//click to show transparent background and picture
	$(".product-img").click(function(){
		$("#show-image").show();
	});

	//click to hide transparent background and picture
	$("#show-image").click(function(){
		$(this).hide();
	});

	



}


$(document).ready(main);