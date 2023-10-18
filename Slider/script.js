function previous(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider-content').scrollLeft -= widthSlider;
}

function next(){
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemSlider = sliderContent.querySelectorAll('.slider-content-item');
    
    if (scrollLeft == widthSlider * (itemSlider.length -1)){
        sliderContent.scrollLeft = 0;
    }
}