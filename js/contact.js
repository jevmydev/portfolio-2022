import { $ } from "./assets/selectors.js";

const $form = $(".form");
const $formSubmitter = $(".form__submit");
const $status = $(".status")

async function handleSubmit(e) {
    e.preventDefault();
    $status.classList.remove("statusOpen")

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
        $formSubmitter.classList.add("form__submit--disabled");
        $formSubmitter.disabled = true;
        const formRequest = await fetch("https://formspree.io/f/meqdjobj", options);
        allCorrect = formRequest.ok;
    }    

    $formSubmitter.disabled = false;
    $formSubmitter.classList.remove("form__submit--disabled");
    $form.reset();

    if(allCorrect) return openModal("Gracias por enviarme un mensaje. ¡Pronto te responderé!")
    return openModal("Email incorrecto. Vuelve a intentarlo.")
}

function openModal(text) {
    $status.textContent = text;
    $status.classList.add("statusOpen");

    setTimeout(() => $status.classList.remove("statusOpen"), 4000);
}

const validForm = (mail, message) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail) && /[A-Z]/gi.test(message);

$form.addEventListener("submit", handleSubmit);