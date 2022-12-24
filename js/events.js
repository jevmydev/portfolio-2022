import { $ } from "./assets/selectors.js"

const actualDate = new Date();
const actualDateString = actualDate.toDateString();
const actualYear = actualDate.getFullYear();

const $me = $(".aboutme__figure--image");

const datesEvents = {
    christmas: {
        dates: [`Sat Dec 24 ${actualYear}`, `Thu Dec 25 ${actualYear}`],
        src: `../images/events/mechristmas.webp`
    }
}

function getEvent() {
    for(const eventKey in datesEvents) {
        const event = datesEvents[eventKey];
        const { dates, src } = event;

        const isEventDay = dates.some(date => date === actualDateString);

        if(isEventDay) $me.src = src;
    }
}

getEvent();