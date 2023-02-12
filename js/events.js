import { $ } from "./assets/selectors.js";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const actualDate = new Date();
const actualDateString = actualDate.toDateString();
const actualDayNumber = actualDate.getDay();

const actualDay = days[actualDayNumber];
const actualYear = actualDate.getFullYear();

const $subtitleYear = $(".hero__subtitle-year");

const datesEvents = {
    christmas: {
        dates: [`${actualDay} Dec 24 ${actualYear}`, `${actualDay} Dec 25 ${actualYear}`]
    },
    newYear: {
        dates: [`${actualDay} Dec 31 ${actualYear}`, `${actualDay} Jan 01 ${actualYear}`]
    }
};

function getEvent() {
    for (const eventKey in datesEvents) {
        const event = datesEvents[eventKey];
        const { dates } = event;

        const isEventDay = dates.some((date) => date === actualDateString);

        if (isEventDay) console.log(`¡Hoy es ${eventKey}!`);
    }
}

function calculateYearsLearning() {
    const startLearning = 2021;
    const yearsLearning = actualYear - startLearning;

    $subtitleYear.textContent = yearsLearning;
}

calculateYearsLearning();
getEvent();
