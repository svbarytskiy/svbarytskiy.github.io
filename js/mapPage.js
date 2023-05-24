//Map Page
(() => {
    let rangeValue = document.querySelector(".mapSliderRangebox-rangewrapper__range");
    let imgList = document.querySelector(".mapSlides-list");
    let currentValue = document.querySelector(".mapSliderRangebox-rangevalue__current-value");
    let sliderItems = document.getElementsByClassName("mapSlides-list__item");
    let stateRangeValue = rangeValue.value;
    currentValue.innerHTML = '0' + rangeValue.value + '/';

    rangeValue.oninput = () => {
        let activeItem = document.querySelector(".mapSlides-list__item-active");
        let toggleActiveClass = (i) => {
            activeItem.classList.replace("mapSlides-list__item-active", "mapSlides-list__item");
            sliderItems[i].classList.replace("mapSlides-list__item", "mapSlides-list__item-active");
        }
        currentValue.innerHTML = '0' + rangeValue.value + '/';
        let w = window.innerWidth;
        let mdl = 7;
        let screenwidth = -142;
        if (w <= 1200) {
            mdl = 4;
        }
        if (w <= 768) {
            mdl = 3;
            screenwidth = -128;
        }
        if (w <= 576) {
            mdl = 2;
            screenwidth = -70;
        }
        let n = sliderItems.length - mdl
        while (i < sliderItems.length + 1) {

            if (i + 1 == rangeValue.value) {
                if (rangeValue.value < stateRangeValue) {
                    if (i + mdl > sliderItems.length) {

                    } else { imgList.style.left = screenwidth * i + 'px'; }
                }
                if (rangeValue.value > stateRangeValue) {
                    if (i + mdl > sliderItems.length) {
                        imgList.style.left = screenwidth * n + 'px';
                    }
                    else {
                        imgList.style.left = screenwidth * i + 'px';
                    }
                }
                console.log(i)
                toggleActiveClass(i);
                stateRangeValue = i + 1;
            }
            i++;
        }
        i = 0;
    }
})();

//Map Page
