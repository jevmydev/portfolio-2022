import { $, $$ } from "./assets/selectors.js";

const $body = document.body;

const $buttonOpenMenu = $(".header__responsive-button");

const $menuResponsive = $(".header__links--page");
const $menuRectTop = $(".header__responsive-rect--top");
const $menuRectBottom = $(".header__responsive-rect--bottom");

function toggleMenu() {
    $menuResponsive.classList.toggle("menuOpen");
    $body.classList.toggle("menuOpen");

    if($menuResponsive.classList.contains("menuOpen")) $buttonOpenMenu.title = "Cerrar el menú";
    else $buttonOpenMenu.title = "Abrir el menú";

    $menuRectTop.classList.toggle("header__responsive-rect--topchange");
    $menuRectBottom.classList.toggle("header__responsive-rect--bottomchange");
}

$buttonOpenMenu.addEventListener("click", toggleMenu);
$$(".header__link--inner").forEach(link => link.addEventListener("click", toggleMenu));