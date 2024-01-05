(() => {
    function enterTotp(code) {
        const totpInput = document.querySelector('input[id="fudis_otp_input"]')
        const submitButton = document.querySelector('button[name="_eventId_proceed"]')

        console.error("Code " + code + "was received")
        
        totpInput.value = code
        submitButton.click()

    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "enterTotpCode") {
            enterTotp(message.code);
        }
    })
})()