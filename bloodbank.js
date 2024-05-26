
const SliderImages=document.querySelectorAll('.slide-card');
console.log(SliderImages);
let currentSlide=0;


document.addEventListener("DOMContentLoaded",InitialImage);

function InitialImage() {
    if(SliderImages.length>0){
        SliderImages[currentSlide].classList.add("displayImage");
    }
}

function ShowSlide(index){
    if (index>=SliderImages.length) {
        currentSlide=0;
    }
    else if (index < 0) {
        currentSlide=SliderImages.length - 1;
    }
    
    SliderImages.forEach(slide =>{
        slide.classList.remove("displayImage");
    });
    SliderImages[currentSlide].classList.add("displayImage");
}

function NextImage(){
    currentSlide++;
    ShowSlide(currentSlide);
}

function PrevImage(){
    currentSlide--;
    ShowSlide(currentSlide);
}