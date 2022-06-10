const content = document.querySelector('#content');

content.appendChild(createNavBar());
 
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

    item.appendChild(link);

    return item;
}

function createFooter(){
    const footer = document.createElement('footer');

}