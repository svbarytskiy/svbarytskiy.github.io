

//Header scripts
//theme toggle
let toggleTheme = document.querySelector('.header-btns__toggle');
const handleChange = (isChecked) => {

    toggleTheme.checked = isChecked;
    console.log(isChecked)
    if (isChecked) {
        localStorage.setItem('theme', 'dark');
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark', '');
        localStorage.removeItem('theme');
    }

}
toggleTheme.addEventListener('click', () => {
    if (toggleTheme.checked || localStorage.checked) {
        localStorage.setItem('checked', 'true');
    } else {
        localStorage.removeItem('cheked');
    }
    if (localStorage.getItem('cheked') === 'true') {
        toggleTheme.checked = true;
    }
})

if (localStorage.getItem('theme') === ('dark')) {

    handleChange(localStorage.checked);
    console.log(this.checked)
} else {
    document.body.removeAttribute('dark', '');
}

//burger-menu

(function () {
    let toggle = document.querySelector('.nav-toggle');
    let navBar = document.querySelector('.header-navbar');;

    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
        navBar.classList.toggle('nav-active');
    });
})();

//nav-bar

let i = 0;
let navItems = document.getElementsByClassName("header-navbar__navItem");
let changePage = (target) => {
    while (i < navItems.length) {
        navItems[i].classList.remove('active');
        i++;
    }
    navItems[target].classList.add('active');
    i = 0;
}
//Header scripts
//Intro scripts
//slider

(function () {
    let rangeValue = document.querySelector(".bottom-rangebox__range");
    let currentValue = document.querySelector(".bottom-rangevalue__current-value");
    let sliderItems = document.getElementsByClassName("slider-top__imglist__item");
    let slideContent = document.getElementsByClassName("item-content");
    currentValue.innerHTML = '0' + rangeValue.value + '/';
    rangeValue.oninput = () => {
        currentValue.innerHTML = '0' + rangeValue.value + '/';
        while (i < sliderItems.length) {
            sliderItems[i].classList.remove('current_slide');
            slideContent[i].style.opacity = 0;
            slideContent[i].style.left = '-100%';

            if (sliderItems[i].value == rangeValue.value) {
                if (sliderItems[1].value != rangeValue.value) {
                    sliderItems[1].style.opacity = 0;
                }
                if (sliderItems[1].value == rangeValue.value) {
                    sliderItems[1].style.opacity = 1;
                }
                sliderItems[i].classList.add('current_slide');
                slideContent[i].style.opacity = 1;
                slideContent[i].style.left = 0;
            }
            i++;
        }
        i = 0;
    }
})();

//Intro scripts
//HowItsWork
(() => {
    let rangeValue = document.querySelector(".descrRangebox-rangewrapper__range");
    let currentValue = document.querySelector(".descrRangebox-rangevalue__current-value");
    let sliderItems = document.getElementsByClassName("slides-imageList__item");
    let imgList = document.querySelector(".slides-imageList");
    let stateRangeValue = rangeValue.value;
    currentValue.innerHTML = '0' + rangeValue.value + '/';
    rangeValue.oninput = () => {
        currentValue.innerHTML = '0' + rangeValue.value + '/';
        while (i < sliderItems.length) {
            if (i + 1 == rangeValue.value) {
                console.log(stateRangeValue);
                if (rangeValue.value < stateRangeValue) {
                    imgList.style.left = -790 * i + 'px';
                }
                if (rangeValue.value > stateRangeValue) {
                    imgList.style.left = -790 * i + 'px';
                }
                stateRangeValue = i + 1;
            }
            i++;
        }
        i = 0;
    }
})();
//HowItsWork
//Pets
(() => {
    let rangeValue = document.querySelector(".petsRangebox-rangewrapper__range");
    let currentValue = document.querySelector(".petsRangebox-rangevalue__current-value");
    let sliderItems = document.getElementsByClassName("slides-petsImageList__item");
    let imgList = document.querySelector(".slides-petsImageList");
    let slideContent = document.getElementsByClassName("petsitem-content");
    let stateRangeValue = rangeValue.value;
    currentValue.innerHTML = '0' + rangeValue.value + '/';
    rangeValue.oninput = () => {
        currentValue.innerHTML = '0' + rangeValue.value + '/';
        let w = window.innerWidth;
        let screenwidth = -308;
        if (w <= 1200) {
            screenwidth = -230;
        }
        while (i < sliderItems.length) {
            slideContent[i].style.opacity = null;
            if (i + 1 == rangeValue.value) {
                slideContent[i].style.opacity = 1;
                if (rangeValue.value < stateRangeValue) {
                    imgList.style.left = screenwidth * i + 'px';
                }
                if (rangeValue.value > stateRangeValue) {
                    imgList.style.left = screenwidth * i + 'px';
                }
                stateRangeValue = i + 1;
            }
            i++;
        }
        i = 0;
    }
})();
//Pets
//Testimonials
(() => {
    let rangeValue = document.querySelector(".testimonialsRangebox-rangewrapper__range");
    let currentValue = document.querySelector(".testimonialsRangebox-rangevalue__current-value");
    let sliderItems = document.getElementsByClassName("slides-feedbackImageList__item");
    let imgList = document.querySelector(".slides-feedbackImageList");
    let stateRangeValue = rangeValue.value;
    currentValue.innerHTML = '0' + rangeValue.value + '/';
    rangeValue.oninput = () => {
        let w = window.innerWidth;
        let screenwidth = -32.2;
        if (w <= 1200) {
            screenwidth = -66;
        }
        if (w <= 768) {
            screenwidth = -95;
        }
        currentValue.innerHTML = '0' + rangeValue.value + '/';
        while (i < sliderItems.length) {
            if (i + 1 == rangeValue.value) {
                if (rangeValue.value < stateRangeValue) {
                    imgList.style.left = screenwidth * i + 'vw';
                }
                if (rangeValue.value > stateRangeValue) {
                    imgList.style.left = screenwidth * i + 'vw';
                }
                stateRangeValue = i + 1;
            }
            i++;
        }
        i = 0;
    }
})();

//Testimonials

//Map
const cardShower = (x) => {
    let cardsList = document.getElementsByClassName("card");
    cardsList[x - 1].style.opacity = 1;
    cardsList[x - 1].style.zIndex = 8;
    setTimeout(() => {
        cardsList[x - 1].style.opacity = null;
        cardsList[x - 1].style.zIndex = null;
    }, 2500);
}
//Map
//Modal
// Полифилл для метода forEach для NodeList

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown-button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown-list__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown-input-hidden');
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('dropdown-list--visible');
        this.classList.add('dropdown-button--active');
        e.preventDefault();
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown-list--visible');
            e.preventDefault();
        });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown-button--active');
            dropDownList.classList.remove('dropdown-list--visible');
        }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown-button--active');
            dropDownList.classList.remove('dropdown-list--visible');
        }
    });
});


const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
    let html = document.querySelector('html');

    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;
        if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
        ) {

            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
            html.style.overflowY = null;
        }

    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        html.style.overflowY = "hidden";
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', closeModal);
};

modalController({
    modal: '.modal-wrapper',
    btnOpen: '.donate',
    btnClose: '.modal-close',
});
//Modal
