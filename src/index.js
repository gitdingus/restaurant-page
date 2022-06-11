import './main-style.css';
import  { createHomeDiv } from './pages/home-content';
import { createMenuDiv } from './pages/menu-content';

const content = document.querySelector('#content');
const navBar = createNavBar();
const pageContent = createPageContentDiv();
const footer = createFooter();

content.appendChild(navBar);
content.appendChild(pageContent);
content.appendChild(footer);
 
pageContent.appendChild(createMenuDiv());

function createNavBar(){
    const nav = document.createElement('nav');
    const div = document.createElement('div');
    const header = document.createElement('h1');
    const list = document.createElement('ul');
    // const links = ['Home', 'Menu', 'Reservation', 'Contact'];
    const links = [ 
        {
            title: "Home",
            action: loadHomePage
        },
        {
            title: "Menu",
            action: loadMenuPage
        },
        {
            title: "Reservation",
            action: loadReservationPage
        },
        {
            title: "Contact",
            action: loadContactPage
        }
    ];

    header.textContent = "Theodore Bee's";

    links.forEach(link => list.appendChild(createLinkListItem(link)));
    
    div.appendChild(header);
    div.appendChild(list);

    nav.appendChild(div);

    return nav;
}

function loadHomePage(e) {
    console.log("Home");
    setActivePage(e);
    clearPageContent();
    pageContent.appendChild(createHomeDiv());
}

function loadMenuPage(e){
    console.log("Menu");
    setActivePage(e);
    clearPageContent();
    pageContent.appendChild(createMenuDiv());
}

function loadReservationPage(e){
    console.log("Reservation");
    setActivePage(e);
    clearPageContent();
}

function loadContactPage(e){
    console.log("Contact");
    setActivePage(e);
    clearPageContent();
}

function createLinkListItem(linkObj){
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = linkObj.title;
    link.id = linkObj.title.toLowerCase();

    link.addEventListener('click', linkObj.action);
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

function clearPageContent(){
    while (pageContent.firstChild){
        pageContent.removeChild(pageContent.firstChild);
    }
}