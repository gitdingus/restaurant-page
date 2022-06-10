import homeText from './home-content.txt';
import './home-content.css';

function logText(){
    console.log(homeText);
}

function createHomeDiv(){
    const homeDiv = document.createElement('div');
    const blurb = document.createElement('p');

    blurb.textContent = homeText;

    homeDiv.appendChild(blurb);
    homeDiv.classList.add('home');

    return homeDiv;
}
export { logText, createHomeDiv };