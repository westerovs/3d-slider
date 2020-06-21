const slider = document.querySelector('.slider');


let initialPoint;
let finalPoint;


document.addEventListener('touchstart', start)
document.addEventListener('touchend', end)


function start(event) {
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
};


let step = 0;
function end(event) {
    event.stopPropagation();
    finalPoint = event.changedTouches[0];

    let xAbs = Math.abs(finalPoint.pageX - initialPoint.pageX);

    if (xAbs < 50) {
        console.log(xAbs);
        return false;
    }

    else if (finalPoint.pageX > initialPoint.pageX) {
        slider.style.transform = `rotateY(${step += 90}deg)`
    }

    else {
        slider.style.transform = `rotateY(${step -= 90}deg)`
    }
};