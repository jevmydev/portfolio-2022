import { $ } from "./assets/selectors.js";

const $form = $('.form');

$form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData($form);
    let allCorrect = false;

    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }

    const isValidForm = validForm(data.get('email'), data.get('message'));

    if(isValidForm) {
        const formRequest = await fetch('https://formspree.io/f/meqdjobj', options);
        allCorrect = formRequest.ok;
    }    

    $form.reset();

    if(allCorrect) return console.log(true)
    return console.log(false)
});

const validForm = (mail, message) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail) && /[A-Z]/gi.test(message);