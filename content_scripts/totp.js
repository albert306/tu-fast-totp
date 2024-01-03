class TotpGenerator {

    constructor() {}

    dec2hex(s) {
        return (s < 15.5 ? "0" : "") + Math.round(s).toString(16);
    };

    hex2dec(s) {
        return parseInt(s, 16);
    };

    leftpad(s, l, p) {
        if(l + 1 >= s.length) {
            s = Array(l + 1 - s.length).join(p) + s;
        }
        return s;
    };

    base32tohex(base32) {
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";
        for(var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += leftpad(val.toString(2), 5, '0');
        }
        for(var i = 0; i + 4 <= bits.length; i+=4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16) ;
        }
        return hex;
    };

    getOTP(secret) {
        try {
            var epoch = Math.round(new Date().getTime() / 1000.0);
            var time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, "0");
            var hmacObj = new jsSHA(time, "HEX");
            var hmac = hmacObj.getHMAC(base32tohex(secret), "HEX", "SHA-1", "HEX");
            var offset = hex2dec(hmac.substring(hmac.length - 1));
            var otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec("7fffffff")) + "";
            otp = (otp).substr(otp.length - 6, 6);
        } catch (error) {
            throw error;
        }
        return otp;
    };
}


function enterTotp() {
    const totpInput = document.querySelector('input[id="fudis_otp_input"]')
    const submitButton = document.querySelector('button[name="_eventId_proceed"]')
    
    totpInput.value = generateTotp("EZASM2WUXRZS6UCFWMAEXR6WMYXU2QIJ")
    submitButton.click

}

function generateTotp(secret) {
    return new TotpGenerator().getOTP(secret)
}

console.log("TOTP Script was loaded")
enterTotp()
