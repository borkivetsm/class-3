// const title = document.querySelector('.title');
// title.style.color = 'red';

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';
// btn.style.padding = '10px 20px';

// const list = document.querySelector('.site-nav');
// list.style.backgroundColor = 'yellow';

// const firstLink = document.querySelector('.site-nav__item a');
// firstLink.classList.add('.site-nav__link');
// const link = document.querySelector('a[href="https://"]');


const allLinks = document.querySelectorAll('ul a');
allLinks.forEach (link => {
    const href = link.getAttribute('href');
    if ( href.startsWith('http') || href.startsWith('ftp') ) {
        link.style.color = 'orange'
    }
});

const firsLinkList = allLinks[0];
const lastLinkList = allLinks[allLinks.length - 1];

firsLinkList.classList.add('first-linkList');
lastLinkList.classList.add('last-linkList');

const title = document.querySelector('h1');
title.textContent = 'Hi';
