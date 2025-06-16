const leftColumn = document.getElementsByClassName("column left");
const viewportWidth = window.innerWidth;

document.addEventListener('scroll', ()=> {
    const top = document.documentElement.scrollTop;
    if (viewportWidth <= 1060){
        if (top > 10){
            leftColumn[0].style.backgroundColor ="#d5e4c1";
            leftColumn[0].style.boxShadow = "5px 5px 10px 2px #736c64";
        }
        else {
            leftColumn[0].style.backgroundColor ="#ebf8ff";
            leftColumn[0].style.boxShadow = "none";
        }
    }
})