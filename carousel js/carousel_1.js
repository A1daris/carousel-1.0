function Carousel(CarouselID, loop, responsive, slidesOnScreen) {
	this.loop = loop;
	this.responsive = responsive;
	this.slider = document.getElementById(CarouselID);
	this.buttonLeft = this.slider.querySelector(".button-left");
	this.buttonRight = this.slider.querySelector(".button-right");
	this.slidesList = this.slider.querySelector("ul");
	this.slides = this.slider.querySelectorAll("li");

	this.firstSlide = this.slides[0];
	this.lastSlide = this.slides[this.slides.length - 1];

	this.slidesCount = this.slides.length;
	this.slidesOnScreen = slidesOnScreen;

	this.slideWidth = this.firstSlide.offsetWidth;
	this.position = 0;

	this.buttonLeft.addEventListener("click", this.moveR.bind(this));
	this.buttonRight.addEventListener("click", this.moveL.bind(this));

	this.slider.querySelector('.carousel-wrap').style.width = this.slideWidth + "px";
	this.slider.style.width = this.slideWidth + "px";
	
}

Carousel.prototype.findActive = function () {
		
		this.activeSlide = this.slider.querySelector('.active');

}
Carousel.prototype.setMargin = function() {
	
	this.slidesList.style.marginLeft = this.position + "px";

}

Carousel.prototype.moveR = function () {
	
	if (this.position >= 0 ) {
		if (this.loop) {
			this.position = -((this.slidesCount - 1) * this.slideWidth);
			this.setMargin();
		}
	} else {

			this.slidesList.style.marginLeft = this.position + this.slideWidth + "px";
			this.position = this.position + this.slideWidth;
	
	}

}

Carousel.prototype.moveL = function() {
	
	if ( this.position <= -(this.slidesCount * this.slideWidth)
		|| this.position <= -((this.slidesCount -1) * this.slideWidth)) {
			
			if (this.loop) {
				this.position = 0;
				this.setMargin();
			}

	} else {
	
		this.position = this.position - this.slideWidth;
		this.setMargin();
	
	}
}

var c1 = new Carousel('carousel-1', true, true, 1);
var c2 = new Carousel('carousel-2', false, false, 1);