$(function () {
	/*==== слайдер фоток ====*/
	$("#next").on ("click", function(e){
		
		e.preventDefault();

		var currentImage = $(".foto-review.curry-foto");
		var currentImageIndex = $(".foto-review.curry-foto").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".foto-review").eq(nextImageIndex);
		currentImage.fadeIn(1000);
		currentImage.removeClass("curry-foto");
		currentImage.removeAttr("style");


		if(nextImageIndex == ($(".foto-review:last").index() + 1)){
			$(".foto-review").eq(0).fadeIn(1000);
			$(".foto-review").eq(0).addClass("curry-foto");
			$(".foto-review").removeAttr("style");
		} else {
			nextImage.fadeIn(1000);
			nextImage.addClass("curry-foto");
			nextImage.removeAttr("style");
		}
	});

	$("#prew").on ("click", function (e) {
		// body...
		e.preventDefault();

		var currentImage = $(".foto-review.curry-foto");
		var currentImageIndex = $(".foto-review.curry-foto").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".foto-review").eq(prevImageIndex);

		currentImage.fadeIn(1000);
		currentImage.removeClass("curry-foto");
		prevImage.fadeIn(1000);
		prevImage.addClass("curry-foto");
		prevImage.removeAttr("style");
	});
});

$(function() {
		/*==== слайдер отзывов ====*/
	$("#next").on ("click", function(e){
		
		e.preventDefault();

		var currentImage1 = $(".slider-reviews-item.curry");
		var currentImageIndex1 = $(".slider-reviews-item.curry").index();
		var nextImageIndex1 = currentImageIndex1 + 1;
		var nextImage1 = $(".slider-reviews-item").eq(nextImageIndex1);
		currentImage1.fadeOut(0);
		currentImage1.removeClass("curry");
	

		if(nextImageIndex1 == ($(".slider-reviews-item:last").index() + 1)){
			$(".slider-reviews-item").eq(0).fadeIn(1000);
			$(".slider-reviews-item").eq(0).addClass("curry");
		} else {
			nextImage1.fadeIn(1000);
			nextImage1.addClass("curry");
			
		}
	});
	$("#prew").on ("click", function (e) {
		// body...
		e.preventDefault();

		var currentImage1 = $(".slider-reviews-item.curry");
		var currentImageIndex1 = $(".slider-reviews-item.curry").index();
		var prevImageIndex1 = currentImageIndex1 - 1;
		var prevImage1 = $(".slider-reviews-item").eq(prevImageIndex1);

		currentImage1.fadeOut(0);
		currentImage1.removeClass("curry");
	
		prevImage1.fadeIn(1000);
		prevImage1.addClass("curry");
	});
			/*==== переключатель плана ====*/

	$("#js-individual-btn").on("click", function(e){
		e.preventDefault();
		$("#js-individual-btn").addClass("active-btn");
		$("#js-company-btn").removeClass("active-btn");
		$("#js-individual-plan").addClass("price-list-active");
		$("#js-company-plan").removeClass("price-list-active");
		$("#individual-btn").addClass("price-list-btn-active");
		$("#company-btn").removeClass("price-list-btn-active");
	});
	$("#js-company-btn").on("click", function(e){
		e.preventDefault();
		$("#js-company-btn").addClass("active-btn");
		$("#js-individual-btn").removeClass("active-btn");
		$("#js-company-plan").addClass("price-list-active");
		$("#js-individual-plan").removeClass("price-list-active");
		$("#company-btn").addClass("price-list-btn-active");
		$("#individual-btn").removeClass("price-list-btn-active");
	});
		/*==== мобильное меню ====*/
		$("#js-burger").on("click", function(e){
			e.preventDefault();
			$("#js-nav-list, #js-sub-nav-list").slideToggle(0);
		});

		/*=====футер слайды====*/

		$(".sub-list-title-moby").on("click", function(e){
			e.preventDefault();

			var $this = $(this);

			if( !$this.hasClass(".active")){

		$(".footer-sub-list-wrapper").slideUp();

		$(".sub-list-title-moby").removeClass(".active");

		}

		$this.next().slideToggle();

		$this.toggleClass(".active");
		
		});
});
