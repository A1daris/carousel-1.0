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

