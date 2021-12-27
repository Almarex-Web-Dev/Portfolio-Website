// select toggle btn wrapper
const toggleBtnIcons = document.querySelector('.toggle-icon');
// select both the toggle btns as well the bars and the times
const toggleBtnBars = document.querySelector('.times');
const toggleBtntimes = document.querySelector('.bars');
// select the links-container and the nav links
const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');
// then select the social icons
const showIcons = document.querySelector('.social-icons');

// Now, Let's set our function 

function toggleIcons(){
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if(linkContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }
    else if(linkContainerHeight === navContainerHeight){  
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons);
