function listenForClicks() {
    console.log("listening")
    document.addEventListener("click", (e) => {
        generateTotp()  
    })
}


function generateTotp() {
    var totpObj = new TOTP()
    var otp = totpObj.getOTP("SECRET_HERE")
    var textoutput = document.getElementById("popupTotpText")
    textoutput.value = otp
}

browser.tabs
  .executeScript({ file: "/content_scripts/totp.js" })
  .then(listenForClicks)
  .catch(console.log("content_script loading has failed"))