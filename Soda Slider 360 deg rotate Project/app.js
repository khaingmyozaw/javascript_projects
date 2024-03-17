let items = document.querySelectorAll(".carousel .list .item");
let carousel = document.querySelector(".carousel");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let dots = document.querySelectorAll(".carousel ul li");

let lastPosition = items.length - 1;
let active = 0;
let zIndex = 2;

nextBtn.onclick = _=>{
    let newValue = active + 1 > lastPosition ? 0 : active + 1;
    showActiveItem(newValue, showSlider);
}
prevBtn.onclick = _=>{
    let newValue = active - 1 < 0 ? lastPosition : active - 1;
    showActiveItem(newValue, showSlider);
}

let showActiveItem = (newValue, callBackFunction) => {
    if(newValue === active) return;
    let type = newValue > active ? 'next' : 'prev';
    active = newValue;
    callBackFunction(type);
}

// dots clicked
dots.forEach((dot, index) => {
    dot.onclick = _=>{
        showActiveItem(index, showSlider);
    }
})

let removeEffect;
let autoRun = setTimeout(_=>nextBtn.click(), 5000);

let showSlider = (type) => {
    carousel.style.pointerEvents = 'none';
    // get old active item if existed remove it.
    let oldActiveItem = document.querySelector('.carousel .list .item.active');
    if(oldActiveItem) oldActiveItem.classList.remove("active");
    // reset the new one according to the active value
    zIndex++;
    items[active].style.zIndex = zIndex;
    items[active].classList.add('active');

    // 
    if(type === 'next'){
        carousel.style.setProperty('--transform', '300px');
    }else{
        carousel.style.setProperty('--transform', '-300px');
    }
    carousel.classList.add('effect');

    clearTimeout(removeEffect);
    removeEffect = setTimeout(() => {
        carousel.classList.remove('effect');
        carousel.style.pointerEvents = 'auto';
    }, 1500);

    clearTimeout(autoRun);
    autoRun = setTimeout(_=>nextBtn.click(), 5000);

    // dots
    // get old active dot
    let oldActiveDot = document.querySelector(".carousel ul li.active");
    oldActiveDot.classList.remove('active');

    dots[active].classList.add('active');
}