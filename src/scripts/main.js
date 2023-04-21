class Slider {
  constructor() {
    this.slider = document.querySelector('.slider')
    this.step = 0
    this.initialPoint = null
    this.finalPoint = null
  }
  
  init = () => {
    document.addEventListener('pointerdown', this.pointerDown)
    document.addEventListener('pointerup', this.pointerUp)
  }
  
  pointerDown = (event) => {
    event.stopPropagation()
    this.initialPoint = event
  }
  
  pointerUp = (event) => {
    event.stopPropagation()
    
    this.finalPoint = event
    
    const xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX)
    
    if (xAbs < 20) return
    
    if (this.finalPoint.pageX < this.initialPoint.pageX) {
      this.slider.style.transform = `rotateY(${this.step += -90}deg)`
    }
    else {
      this.slider.style.transform = `rotateY(${this.step += 90}deg)`
    }
  }
}

new Slider().init()
