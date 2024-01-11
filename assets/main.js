// Toggle class active
const navbarNav = document.querySelector(`.navbar-nav`);
// Hamburger menu active
document.querySelector(`#hamburger-menu`).onclick = () => {
    navbarNav.classList.toggle(`active`);
};

// Hamburger menu nonaktif
const hamburger = document.querySelector(`#hamburger-menu`);

document.addEventListener(`click`, function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove(`active`);
    }
});