const slider = document.querySelector('.slider')

let step = 0
let initialPoint = null
let finalPoint = null

const pointerDown = (event) => {
  event.stopPropagation()
  
  initialPoint = event
}

const pointerUp = (event) => {
  event.stopPropagation()
  
  finalPoint = event
  
  const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX)
  
  if (xAbs < 20) return
  
  if (finalPoint.pageX < initialPoint.pageX) {
    slider.style.transform = `rotateY(${step += -90}deg)`
  }
  else {
    slider.style.transform = `rotateY(${step += 90}deg)`
  }
}

const init = () => {
  document.addEventListener('pointerdown', pointerDown)
  document.addEventListener('pointerup', pointerUp)
}

init()
