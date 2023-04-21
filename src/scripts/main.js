class Slider {
  constructor() {
    this.slider = document.querySelector('.slider-wrapper')
    
    this.step = 0
    this.initialPosition = null
    this.finalPosition = null
  }
  
  init = () => {
    this.slider.addEventListener('pointerdown', this.pointerDown)
    this.slider.addEventListener('pointerout', () => this.setCursorStyle('grab'))
    this.slider.addEventListener('pointerup', this.pointerUp)
  }
  
  pointerDown = (event) => {
    event.stopPropagation()
    
    this.slider.style.cursor = 'grabbing'
    this.initialPosition = event
  }
  
  pointerUp = (event) => {
    event.stopPropagation()
    this.finalPosition = event
    
    this.setCursorStyle('grab')
    
    const xAbs = Math.abs(this.initialPosition.pageX - this.finalPosition.pageX)
    if (xAbs < 20) return
    
    if (this.finalPosition.pageX < this.initialPosition.pageX) {
      this.slider.style.transform = `rotateY(${this.step += 90}deg)`
    }
    else {
      this.slider.style.transform = `rotateY(${this.step += -90}deg)`
    }
  }
  
  setCursorStyle = (style) => {
    switch (style) {
      case'grab':
        return this.slider.style.cursor = style
      case'grabbing':
        return this.slider.style.cursor = style
    }
  }
}

new Slider().init()
