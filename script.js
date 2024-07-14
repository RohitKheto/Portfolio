const nav_section = document.querySelector(".nav-section");
const nav_btn = document.querySelector("#active-btn");
const education_experience = document.querySelectorAll(".education-experience");
const progressCircles = document.querySelectorAll('.circle-progress');
const mode_theme = document.querySelector("#mode-theme");
const color_theme = document.querySelector("#color-theme");
let isDark = true;

nav_btn.addEventListener('click', () => {
    nav_section.classList.toggle("active");
    nav_btn.classList.toggle("fa-bars");
    nav_btn.classList.toggle("fa-x");
});

education_experience.forEach(item => {
    item.addEventListener('mousemove', e => {
        item.style.setProperty('--x', (e.pageX - item.offsetLeft) + 'px');
        item.style.setProperty('--y', (e.pageY - item.offsetTop) + 'px');
    });
});

progressCircles.forEach(item => {
    var startDegree = 0;
    var endDegree = parseInt(item.getAttribute('data-degree'), 10);
    let progress = setInterval(() => {
        startDegree++;
        item.style.background = `conic-gradient(var(--primary-color) ${startDegree * 3.6}deg, var(--bg-light-color) 0deg)`;
        item.querySelector('span').textContent = `${startDegree}%`;
        if (startDegree == endDegree) {
            clearInterval(progress);
        }
    }, 10);
});

color_theme.addEventListener('click', () => {
    const themeContainer = document.querySelector(".theme-container");
    if (themeContainer.style.right === "0px") {
        themeContainer.style.right = "-210px";
    } else {
        themeContainer.style.right = "0px";
    }
});


mode_theme.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--bg-dark-color', 'rgb(240, 240, 240)');
        document.documentElement.style.setProperty('--bg-light-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-color-primary', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-color-secondary', 'rgb(101, 101, 101)');
    } else {
        document.documentElement.style.setProperty('--bg-dark-color', 'rgb(5, 5, 5)');
        document.documentElement.style.setProperty('--bg-light-color', 'rgb(40, 40, 40)');
        document.documentElement.style.setProperty('--text-color-primary', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-color-secondary', 'rgb(182, 182, 182)');
    }
    mode_theme.classList.toggle("fa-sun");
    mode_theme.classList.toggle("fa-moon");
    isDark = !isDark;
});

function colorChange(primary, dark, light) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--primary-color-dark', dark);
    document.documentElement.style.setProperty('--primary-color-light', light);
}