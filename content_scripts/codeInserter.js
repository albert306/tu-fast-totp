function enterTotp(code) {

    const totpInput = document.querySelector('input[id="fudis_otp_input"]')
    const submitButton = document.querySelector('button[name="_eventId_proceed"]')

    if (!totpInput || !submitButton) {
        return
        // browser.tabs.sendMessage(tabs[0].id, {
        //     command: "failed"
        // })
    }

    totpInput.value = code
    submitButton.click()

    // browser.tabs.sendMessage(tabs[0].id, {
    //     command: "success"
    // })
}



browser.runtime.onMessage.addListener((message) => {
    if (message.command === "enterTimeCode") {
        enterTotp(message.code)
    }
})