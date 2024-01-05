function onExtensionClick() {

    var totp = new jsOTP.totp()
    var timeCode = totp.getOtp("EZASM2WUXRZS6UCFWMAEXR6WMYXU2QII")

    document.getElementById("totpCode").textContent = "current totp: " + timeCode

    function sendTimeCode(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            command: "enterTimeCode",
            code: timeCode,
        })
    }

    browser.tabs.query({active: true, currentWindow: true})
        .then(sendTimeCode)
        
}

browser.tabs.executeScript({file: "/content_scripts/codeInserter.js"})
    .then(onExtensionClick)
    .catch(() => { console.log("failed to load") });

