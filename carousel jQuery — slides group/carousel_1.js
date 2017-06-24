$(document).ready(function() {
	function Slider(ID, loop, slidesGroup) {
		
		this.slider = $("#" + ID);
		this.buttonLeft = this.slider.find(".button-left");
		this.buttonRight = this.slider.find(".button-right");
		this.slides = this.slider.find("li");
		this.slideList = this.slider.find("ul");
		this.active = this.slides.filter(".active");
		this.next = this.active.next();
		this.prev = this.active.prev();
		this.first = this.slides.first();
		this.last = this.slides.last();

		this.position = 0;

		this.buttonRight.on('click', this.moveRight.bind(this));
		this.buttonLeft.on('click', this.moveLeft.bind(this));

		this.loop = loop;
		this.slidesGroup = slidesGroup;
		this.sliderWidth = this.slidesGroup * this.first.width();
		this.sliderMaxShift = (this.slidesGroup * this.first.width()) * (this.slides.length / this.slidesGroup - 1);

		var that = this;
		this.setSliderWidth = function() {
			that.slider.css("width", that.sliderWidth + "px");
			that.slider.find(".carousel-wrap").css("width", that.sliderWidth + "px");
		}();

		}		

		Slider.prototype.test = function() {
			console.log(this.findActive);
		}

		Slider.prototype.findActive = function() {
			this.active = this.slides.filter(".active");
			this.next = this.active.next();
			this.prev = this.active.prev();
		}
		Slider.prototype.addActive = function( direction ) {
			direction.addClass("active").siblings().removeClass("active");
		}

		Slider.prototype.moveRight = function() {
			this.findActive();
			
			if ( this.position <  -this.sliderMaxShift) {
				this.position = -this.sliderMaxShift;
				this.setPosition();
			}
			else if ( this.next.length ) {
				this.position -= (this.next.offset().left - this.active.offset().left);
				console.log(this.position)
				this.setPosition();
				this.addActive(this.next);
			} else if (this.loop) {
				this.position = 0;
				this.setPosition();
				this.addActive(this.first);
			}

		}
		Slider.prototype.moveLeft = function() {

			this.findActive();
			if ( this.position > 0) {
				this.position = 0;
				this.setPosition();
			}
			else if ( this.prev.length ) {
				console.log(this.position);
				this.position += (this.active.offset().left - this.prev.offset().left);
				this.setPosition();
				this.addActive(this.prev);

			} else if ( this.loop ) {

				this.position = -(this.last.offset().left - this.first.offset().left);
				this.setPosition();
				this.addActive(this.last);

			}

		}
		
		Slider.prototype.setPosition = function() {
			this.slideList.css('margin-left', this.position + 'px')
		}
	
var c1 = new Slider('carousel-1', true, 2);


});
