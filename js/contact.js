import { $ } from "./assets/selectors.js";

const $form = $(".form");
const $status = $(".status")

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    $status.classList.remove("status--open")

    const data = new FormData($form);
    let allCorrect = false;

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    }

    const isValidForm = validForm(data.get("email"), data.get("message"));

    if(isValidForm) {
        const formRequest = await fetch("https://formspree.io/f/meqdjobj", options);
        allCorrect = formRequest.ok;
    }    

    $form.reset();

    if(allCorrect) return openModal("Gracias por enviarme un mensaje. ¡Pronto te responderé!")
    return openModal("Email incorrecto. Vuelve a intentarlo.")
}

function openModal(text) {
    $status.textContent = text;
    $status.classList.add("status__open");
}

const validForm = (mail, message) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail) && /[A-Z]/gi.test(message);