import { $ } from "./assets/selectors.js";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const actualDate = new Date();
const actualDateString = actualDate.toDateString();
const actualDayNumber = actualDate.getDay();

const actualDay = days[actualDayNumber];
const actualYear = actualDate.getFullYear();

const $me = $(".aboutme__figure--image");

const datesEvents = {
    christmas: {
        dates: [`${actualDay} Dec 24 ${actualYear}`, `${actualDay} Dec 25 ${actualYear}`],
        src: `../images/events/mechristmas.webp`
    },
    newYear: {
        dates: [`${actualDay} Dec 31 ${actualYear}`, `${actualDay} Jan 01 ${actualYear}`],
        src: `../images/events/meyear.webp`
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