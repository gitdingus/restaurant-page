import './main-style.css';
import  { logText, createHomeDiv } from './pages/home-content';

const content = document.querySelector('#content');
const navBar = createNavBar();
const pageContent = createPageContentDiv();
const footer = createFooter();

content.appendChild(navBar);
content.appendChild(pageContent);
content.appendChild(footer);
 
pageContent.appendChild(createHomeDiv());

function createNavBar(){
    const nav = document.createElement('nav');
    const div = document.createElement('div');
    const header = document.createElement('h1');
    const list = document.createElement('ul');
    const links = ['Home', 'Menu', 'Reservation', 'Contact'];

    header.textContent = "Theodore Bee's";

    links.forEach(link => list.appendChild(createLinkListItem(link)));
    
    div.appendChild(header);
    div.appendChild(list);

    nav.appendChild(div);

    return nav;
}

function createLinkListItem(name){
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = name;
    link.id = name.toLowerCase();

    link.addEventListener('click', setActivePage);
    item.appendChild(link);

    return item;
}

function clearActivePage(){
    const links = document.querySelectorAll('nav ul li a');

    links.forEach( link => link.classList.remove('active-page'));
    
}

function setActivePage(e){
    clearActivePage();

    e.target.classList.add("active-page");
}
function createPageContentDiv(){
    const div = document.createElement('div');
    div.classList.add("page-content");

    return div;
}

function createFooter(){
    const footer = document.createElement('footer');
    const addressDiv = document.createElement('div');
    const phoneNumberDiv = document.createElement('div');
    const hoursDiv = document.createElement('div');
    const addressLabel = document.createElement('p');
    const phoneLabel = document.createElement('p');
    const hoursLabel = document.createElement('p');
    const monThruFriday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');
    const address = document.createElement('p');
    const cityStateZip = document.createElement('p');
    const phoneNumber = document.createElement('p');

    addressLabel.textContent = 'Address';
    address.textContent = '1800 Amity Road.';
    cityStateZip.textContent = 'Bethany, CT 06524';

    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(address);
    addressDiv.appendChild(cityStateZip);

    hoursLabel.textContent = 'Hours';
    monThruFriday.textContent = 'Monday through Friday: 9 a.m. to 9 p.m.';
    saturday.textContent = 'Saturday: 9 a.m. to 9 p.m.';
    sunday.textContent = 'Sunday: Closed';
    
    hoursDiv.appendChild(hoursLabel);
    hoursDiv.appendChild(monThruFriday);
    hoursDiv.appendChild(saturday);
    hoursDiv.appendChild(sunday);

    phoneLabel.textContent = 'Phone';
    phoneNumber.textContent = '(203) 867-5309';

    phoneNumberDiv.appendChild(phoneLabel);
    phoneNumberDiv.appendChild(phoneNumber);

    addressDiv.classList.add("address");
    hoursDiv.classList.add('hours');
    phoneNumberDiv.classList.add("phone");

    footer.appendChild(addressDiv);
    footer.appendChild(hoursDiv);
    footer.appendChild(phoneNumberDiv);

    return footer;
}
