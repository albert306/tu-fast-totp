function listenForClicks() {
    document.addEventListener("click", (e) => {

        function sendTimeCode(tabs) {

            var totp = new jsOTP.totp()
            var timeCode = totp.getOtp("EZASM2WUXRZS6UCFWMAEXR6WMYXU2QII")

            browser.tabs.sendMessage(tabs[0].id, {
                command: "enterTotpCode",
                code: timeCode,
            })
        }

        browser.tabs.query({active: true, currentWindow: true})
            .then(sendTimeCode)
        
    })
}

browser.tabs.executeScript({file: "/content_scripts/totp.js"})
    .then(listenForClicks)
    .catch(() => { console.log("failed to load") });

