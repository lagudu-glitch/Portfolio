// elements we need
const btn  = document.getElementById("mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Initally hide the menu
menu.style.display = 'none';

// functionality
btn.addEventListener ("click", () => 
{
    if (menu.style.display == 'none')
    {
        menu.style.display = 'block'
    }
    else
    {
        menu.style.display = 'none'
    }
});