const slider = document.querySelector('.slider_box');
const slider_btn = document.querySelector('#find');
const slider_color = document.querySelector('.slider_color');
const tooltip = document.querySelector('.slider_tooltip');
onMouseMove = (e) => {
    e.preventDefault();
    let targetRect = slider.getBoundingClientRect();
    let x = e.pageX - targetRect.left;
    if (x > targetRect.width) { x = targetRect.width};
    if (x < 0){ x = 0};
    slider_btn.x = x;
    let percentPosition = (slider_btn.x) / targetRect.width * 100;
    slider_btn.style.left = percentPosition + "%";
    slider_color.style.width = percentPosition + "%";
    tooltip.style.left = percentPosition + "%";
    tooltip.style.opacity = 1;
    tooltip.textContent = Math.round(percentPosition) + '%';
};

onMouseUp  = () => {
    window.removeEventListener('mousemove', onMouseMove);
    tooltip.style.opacity = 0;
    slider_btn.addEventListener('mouseover', function() {
        tooltip.style.opacity = 1;
    });

    slider_btn.addEventListener('mouseout', function() {
        tooltip.style.opacity = 0;
    });
};

dragElement = () =>{
    slider.addEventListener("mousemove", (e)=>{
        onMouseMove(e);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    });
}

dragElement();