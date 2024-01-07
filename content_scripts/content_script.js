function enterTotp(code) {

    const totpInput = document.querySelector('input[id="fudis_otp_input"]')
    const submitButton = document.querySelector('button[name="_eventId_proceed"]')

    if (!totpInput || !submitButton) {
        return
    }

    totpInput.value = code
    submitButton.click()
}


browser.runtime.onMessage.addListener((message) => {
    if (message.command === "enterTimeCode") {
        enterTotp(message.code)
    }
})