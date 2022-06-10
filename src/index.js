const content = document.querySelector('#content');

content.appendChild(createNavBar());
content.appendChild(createFooter());
 
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
    const addressDiv = document.createElement('div');
    const phoneNumberDiv = document.createElement('div');
    const addressLabel = document.createElement('p');
    const phoneLabel = document.createElement('p');
    const address = document.createElement('p');
    const cityStateZip = document.createElement('p');
    const phoneNumber = document.createElement('p');

    addressLabel.textContent = 'Address:';
    address.textContent = '1800 Amity Road.';
    cityStateZip.textContent = 'Bethany, CT 06524';

    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(address);
    addressDiv.appendChild(cityStateZip);

    phoneLabel.textContent = 'Phone:';
    phoneNumber.textContent = '(203) 867-5309';

    phoneNumberDiv.appendChild(phoneLabel);
    phoneNumberDiv.appendChild(phoneNumber);

    footer.appendChild(addressDiv);
    footer.appendChild(phoneNumberDiv);

    return footer;
}
