$(document).ready(function() {
	function Slider(ID) {
		
		this.slider = $("#" + ID);
		this.buttonLeft = this.slider.find(".button-left");
		this.buttonRight = this.slider.find(".button-right");
		this.slides = this.slider.find("li");
		this.slideList = this.slider.find("ul");
		this.active = this.slides.filter(".active");
		this.next = this.active.next();
		this.prev = this.active.prev();

		this.position = 0;
				// console.log(this.next)
		
		Slider.prototype.findActive = function() {
			this.active = this.slides.filter(".active");
			this.next = this.active.next();
			this.prev = this.active.prev();
		}
		
		Slider.prototype.moveRight = function() {
			this.findActive();
			this.position -= (this.next.offset().left - this.active.offset().left);
			this.setPosition();
			this.next.addClass("active").siblings().removeClass("active");
		}
		Slider.prototype.moveLeft = function() {
			this.findActive();
			this.position += (this.active.offset().left - this.prev.offset().left)
			this.setPosition();
			this.prev.addClass("active").siblings().removeClass("active");
		}

		Slider.prototype.setPosition = function() {
			this.slideList.css('margin-left', this.position + 'px')
		}
	}
var c1 = new Slider('carousel-1');
c1.moveRight();
c1.moveRight();
c1.moveLeft();
c1.moveLeft();
// c1.moveRight();
// var c2 = new Slider('carousel-2');
});//-----------
// function Carousel(CarouselID, loop, responsive, slidesOnScreen) {
// 	this.loop = loop;
// 	this.responsive = responsive;
// 	this.slider = document.getElementById(CarouselID);
// 	this.buttonLeft = this.slider.querySelector(".button-left");
// 	this.buttonRight = this.slider.querySelector(".button-right");
// 	this.slidesList = this.slider.querySelector("ul");
// 	this.slides = this.slider.querySelectorAll("li");

// 	this.firstSlide = this.slides[0];
// 	this.lastSlide = this.slides[this.slides.length - 1];

// 	this.slidesCount = this.slides.length;
// 	this.slidesOnScreen = slidesOnScreen;

// 	this.slideWidth = this.firstSlide.offsetWidth;
// 	this.position = 0;

// 	this.buttonLeft.addEventListener("click", this.moveR.bind(this));
// 	this.buttonRight.addEventListener("click", this.moveL.bind(this));

// 	this.slider.querySelector('.carousel-wrap').style.width = this.slideWidth + "px";
// 	this.slider.style.width = this.slideWidth + "px";
	
// }

// Carousel.prototype.findActive = function () {
		
// 		this.activeSlide = this.slider.querySelector('.active');

// }
// Carousel.prototype.setMargin = function() {
	
// 	this.slidesList.style.marginLeft = this.position + "px";

// }

// Carousel.prototype.moveR = function () {
	
// 	if (this.position >= 0 ) {
			
// 			this.position = -((this.slidesCount - 1) * this.slideWidth);
// 			this.setMargin();

// 	} else {

// 			this.slidesList.style.marginLeft = this.position + this.slideWidth + "px";
// 			this.position = this.position + this.slideWidth;
	
// 	}

// }

// Carousel.prototype.moveL = function() {
	
// 	if ( this.position <= -(this.slidesCount * this.slideWidth)
// 		|| this.position <= -((this.slidesCount -1) * this.slideWidth)) {
			
// 			if (this.loop) {
// 				this.position = 0;
// 				this.setMargin();
// 			}

// 	} else {
	
// 		this.position = this.position - this.slideWidth;
// 		this.setMargin();
	
// 	}
// }

// var c1 = new Carousel('carousel-1', true, true, 1);
// var c2 = new Carousel('carousel-2', false, false, 1);