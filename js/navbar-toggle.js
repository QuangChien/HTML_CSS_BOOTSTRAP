const node = document.querySelector.bind(document);
node("#icon-svg").onclick = () => {
    node("#navbar-overlay").style.display = "block";
    node("#navbar-mobile").style.transform = "translateX(0)";
}

node("#navbar-moblie-close").onclick = () => {
    node("#navbar-overlay").style.display = "none";
    node("#navbar-mobile").style.transform = "translateX(-100%)";
}

node("#navbar-overlay").onclick = () => {
    node("#navbar-overlay").style.display = "none";
    node("#navbar-mobile").style.transform = "translateX(-100%)";
}