var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600 )
    {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

/*const selectElement = (s) => document.querySelector(s);


selectElement('.open').addEventListener('click',() => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click',() => {
    selectElement('.nav-list').classList.remove('active');
});*/