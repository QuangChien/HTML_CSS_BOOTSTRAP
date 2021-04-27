let thumbnails = document.querySelectorAll('.thumbnail img');
let activeImages = document.getElementsByClassName('active-img')
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active-img')
        }

        this.classList.add('active-img')
        document.getElementById('featured').src = this.src
    })

    document.querySelector("#featured").onclick = () => {
        console.log(document.querySelector("#featured").src);
        document.querySelector("#img-product-zoom").src = document.querySelector("#featured").src;
        document.querySelector("#image-overlay").style.display = "block";
        document.querySelector("#img-product-detail").style.display = "block";

    }

    document.querySelector("#image-overlay").onclick = () => {
        document.querySelector("#img-product-detail").style.display = "none";
        document.querySelector("#image-overlay").style.display = "none";
    }
}