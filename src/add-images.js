import Img from './img.jpg';

function addImages(){
    const img = document.createElement('img');
    img.src = Img;
    img.alt = "img";
    img.width = 300;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImages;