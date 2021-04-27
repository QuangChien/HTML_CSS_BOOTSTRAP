var starList = [];

document.querySelectorAll(".form-comment .stars a").forEach((element, index) => {
    element.onclick = (event) => {
        event.preventDefault();
        starList.push(element.innerHTML);
        var starEnd = starList.pop();
        document.querySelector("#star").value = starEnd;
    }
});

const list = document.querySelector('p.stars');
list.addEventListener('click', event => {
    event.preventDefault();
    if (event.target !== list) {
        const items = list.childNodes;

        for (let i = 0; i < items.length; i++) {
            if (items[i].nodeType !== 3) {
                items[i].classList.remove("star-active");
            }
        }
        event.target.classList.add("star-active");
    }
});