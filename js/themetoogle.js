import { $ } from "./assets/selectors.js";

const typeSchemes = {
    darkMode: {
        title: "Activa el modo claro",
        logo: "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 22.006 22.006\" xml:space=\"preserve\"><path d=\"M4.63,6.045c0.394,0.393,1.028,0.399,1.421,0.006c0.39-0.39,0.393-1.021-0.007-1.421l-1.4-1.4    C4.249,2.835,3.617,2.829,3.223,3.223c-0.391,0.39-0.394,1.02,0.007,1.421L4.63,6.045z\"/><path d=\"M20.997,10.003h-1.98c-0.559,0-1.011,0.444-1.011,1c0,0.553,0.443,1,1.011,1h1.98    c0.559,0,1.009-0.443,1.009-1C22.006,10.451,21.562,10.003,20.997,10.003z\"/><path d=\"M4,11.003c0-0.552-0.444-1-1.01-1H1.009c-0.558,0-1.009,0.444-1.009,1c0,0.553,0.443,1,1.009,1    H2.99C3.548,12.003,4,11.56,4,11.003z\"/><path d=\"M11.003,5c-3.313,0-6,2.687-6,6s2.687,6,6,6c3.312,0,6-2.687,6-6S14.315,5,11.003,5z M11.003,15    c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S13.212,15,11.003,15z\"/><path d=\"M4.63,15.962l-1.4,1.4c-0.395,0.395-0.401,1.027-0.007,1.421c0.391,0.39,1.021,0.393,1.421-0.007    l1.4-1.4c0.395-0.395,0.401-1.027,0.007-1.421C5.66,15.563,5.03,15.562,4.63,15.962z\"/><path d=\"M17.376,6.045l1.4-1.401c0.395-0.395,0.399-1.027,0.007-1.421c-0.392-0.39-1.021-0.393-1.421,0.007    l-1.4,1.4c-0.395,0.395-0.4,1.028-0.007,1.421C16.347,6.441,16.976,6.444,17.376,6.045z\"/><path d=\"M11.003,18.006c-0.553,0-1,0.444-1,1.011v1.98c0,0.559,0.444,1.009,1,1.009    c0.553,0,1-0.442,1-1.009v-1.98C12.003,18.458,11.56,18.006,11.003,18.006z\"/><path d=\"M17.376,15.962c-0.395-0.395-1.027-0.4-1.421-0.007c-0.39,0.392-0.394,1.021,0.007,1.421l1.4,1.4    c0.395,0.395,1.027,0.399,1.421,0.007c0.391-0.39,0.394-1.021-0.007-1.421L17.376,15.962z\"/><path d=\"M11.003,4c0.553,0,1-0.443,1-1.01V1.01c0-0.558-0.443-1.01-1-1.01c-0.553,0-1,0.444-1,1.01v1.98    C10.003,3.548,10.447,4,11.003,4z\"/></svg>"
    },
    lightMode: {
        title: "Activa el modo oscuro",
        logo: "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 679.189 679.189\" xml:space=\"preserve\"><path d=\"M634.419,249.837c-11.261-41.715-30.148-80.709-57.585-117.478c-27.437-36.686-60.594-66.942-100.471-89.613   C437.41,20.569,395.653,5.977,351.16,0.206c-9.233-1.154-16.455,2.556-21.253,10.8c-4.873,8.409-4.188,16.571,1.542,23.99   c36.786,47.486,56.793,100.825,60.668,160.76c3.858,59.522-9.621,114.923-39.415,166.943   c-26.241,45.754-61.749,82.028-107.816,108.574c-45.903,26.464-95.45,39.406-148.394,39.406c-17,0-29.753-0.741-38.252-2.308   c-9.662-0.742-16.793,2.803-21.253,10.8c-4.814,8.656-4.683,16.652,1.542,24.732c28.937,37.593,62.268,66.776,98.929,87.717   c55.31,31.657,111.683,47.568,169.259,47.568c59.902,0,115.879-15.581,168.485-46.332c52.894-31.08,94.815-72.63,125.211-125.228   c22.936-39.736,37.099-82.358,42.507-127.536C648.327,334.834,645.565,291.223,634.419,249.837z M563.313,483.64   c-26.604,46.002-62.993,82.358-108.979,108.986c-45.985,26.629-95.062,39.819-147.619,39.819   c-52.556,0-102.029-13.521-148.006-40.231c-21.262-12.283-38.64-25.474-52.944-38.994c58.739-1.566,113.233-17.396,163.852-47.568   c50.627-30.091,90.668-70.734,120.183-121.683c29.612-51.114,45.021-106.267,45.598-165.376   c0.585-59.193-12.754-114.428-40.569-165.459c22.021,7.337,42.004,16.818,59.894,27.041   c84.131,48.146,135.723,134.956,146.077,223.745C607.823,364.348,595.449,428.074,563.313,483.64z\"/></svg>"
    }
};

const $html = $("html");
const $changeThemeButton = $(".header__theme-mode");

const matchingScheme = matchMedia("(prefers-color-scheme: dark)");
const systemScheme =  matchingScheme.matches ? "darkMode" : "lightMode";

let scheme = localStorage.getItem("scheme") || systemScheme;
changeScheme(scheme);

function changeScheme(scheme) {
    $changeThemeButton.title = typeSchemes[scheme].title;
    $changeThemeButton.innerHTML = typeSchemes[scheme].logo;

    localStorage.setItem("scheme", scheme);
    $html.setAttribute("scheme", scheme);
} 

$changeThemeButton.addEventListener("click", () => {
    scheme = scheme === "darkMode" || scheme === "dark__mode" ? "lightMode": "darkMode";
    changeScheme(scheme);
});