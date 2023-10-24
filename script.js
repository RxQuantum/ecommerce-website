const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("smallImg");
const proName = document.querySelector(".single-pro-details h4");
const proPrice = document.querySelector(".single-pro-details h2");


smallImg[0].addEventListener("click", () => {
    mainImg.src = smallImg[0].src;
    proName.innerHTML = `CHOCO MUSK`
    proPrice.innerHTML = `₦4,000`

})
smallImg[1].addEventListener("click", () => {
    mainImg.src = smallImg[1].src;
    proName.innerHTML = `SOFT D'PAFUME`
    proPrice.innerHTML = `₦4,000`
})
smallImg[2].addEventListener("click", () => {
    mainImg.src = smallImg[2].src;
    proName.innerHTML = `BERRYS WEEKEND`
    proPrice.innerHTML = `₦3,500`
})
smallImg[3].addEventListener("click", () => {
    mainImg.src = smallImg[3].src;
    proName.innerHTML = `OPHYLIA`
    proPrice.innerHTML = `₦6,000`
})
