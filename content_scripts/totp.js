(() => {
    function enterTotp() {
        const totpInput = document.querySelector('input[id="fudis_otp_input"]')
        const submitButton = document.querySelector('button[name="_eventId_proceed"]')
        
        // totpInput.value = new TotpGenerator().getOTP(secret)
        totpInput.value = "test"
        submitButton.click

    }

    browser.runtime.onMessage.addListener((message) => {
        console.log("reached onmessage listener")
        if (message.command === "enter") {
            enterTotp(message.beastURL);
        } else if (message.command === "reset") {
            
        }
      })
})()