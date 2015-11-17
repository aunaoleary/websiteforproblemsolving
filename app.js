$(function(){
	var header = $(".content .Header a");
		
		header.mouseenter(function(){
			header.css("color","#194C4C");
		
		header.mouseleave(function(){
			header.css("color","#5E8282");

		});
	});


	var head = $(".Header");
		
		head.mouseenter(function(){
			head.css("color","");

		head.mouseleave(function(){
			head.css("color","");
		});
	});

	var coloroptions = ["red", "blue", "yellow", "green", "purple", "orange", "gray", "white"];
	
	var choose = function(){
		var bColor = coloroptions[Math.floor(Math.random() * coloroptions.length) ];
		return bColor;
	};

	
	var nav = $(".nav");

		nav.mouseenter(function(){
			nav.css("background-color", choose(coloroptions));

		nav.mouseleave(function(){
			nav.css("background-color","black");

		});
	});

	var shop = $(".content .shopnow a");
		
		shop.mouseenter(function(){
			shop.css("color","");

		shop.mouseleave(function(){
			shop.css("color","")
		});
	});

	var box = $(".content .box");
		
	var catcher = $(".shopnow .catchers a");

	var jewel = $(".shopnow .jewelry a");

	var feather = $(".shopnow .feathers a");

	var casing = $(".shopnow .casings a");

	catcher.mouseenter(function(){
		box.html("Dreamcatchers are info");
		box.css("color","#fff");
		box.css("background-color", "black");
		catcher.css("background-color", "#7B2929");
	});

	catcher.mouseleave(function(){
		box.html("");
		box.css("background-color","")
		catcher.css("background-color","#933");

	});

	jewel.mouseenter(function(){
		box.html("Jewelry are info");
		box.css("color","#fff");
		box.css("background-color", "black");
		jewel.css("background-color", "#7B2929");
	});

	jewel.mouseleave(function(){
		box.html("");
		box.css("background-color","")
		jewel.css("background-color","#933");

	});

	feather.mouseenter(function(){
		box.html("Feathers are info");
		box.css("color","#fff");
		box.css("background-color", "black")
		feather.css("background-color", "#7B2929");
	});

	feather.mouseleave(function(){
		box.html("");
		box.css("background-color","")
		feather.css("background-color","#933");

	});

	casing.mouseenter(function(){
		box.html("Casings are info");
		box.css("color","#fff");
		box.css("background-color", "black")
		casing.css("background-color", "#7B2929");
	});

	casing.mouseleave(function(){
		box.html("");
		box.css("background-color","")
		casing.css("background-color","#933");
	});

	var like = $(".likeus a");
		
		like.mouseenter(function(){
			like.css("color","#5B5BFF");

		like.mouseleave(function(){
			like.css("color","#fff")
		});
	});

	var foot = $(".foot ul li");

		foot.mouseenter(function(){
			foot.css("color","#000");

		foot.mouseleave(function(){
			foot.css("color","#282828");
		});
	});


	var pDiv = $("#program");
		pDiv.html("This <i>is</i> a program");
			pDiv.css("color","#ff0");
		pDiv.click(function(){
			pDiv.html("I clicked it");
				pDiv.css("color","#fff");
	});



});









