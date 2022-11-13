import { $, $$ } from "./assets/selectors.js";

const $body = document.body;

const $menuResponsive = $(".header__links--page");
const $menuRectTop = $('.header__responsive__rect--top');
const $menuRectBottom = $('.header__responsive__rect--bottom');

$(".header__responsive__button").addEventListener("click", () => {
    $menuResponsive.classList.toggle("menu__open");
    $body.classList.toggle("menu__open")

    $menuRectTop.classList.toggle('header__responsive__rect--topchange');
    $menuRectBottom.classList.toggle('header__responsive__rect--bottomchange');
});

$$(".header__link--a").forEach(link => {
    link.addEventListener("click", () => {
        $menuResponsive.classList.remove("menu__open");
        $body.classList.remove("menu__open")

        $menuRectTop.classList.remove('header__responsive__rect--topchange');
        $menuRectBottom.classList.remove('header__responsive__rect--bottomchange');
    })
});