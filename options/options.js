const secretTokenUserInput = document.querySelector("#secretToken")

async function saveOptions(e) {
    e.preventDefault()
    await browser.storage.local.set({
        secretToken: secretTokenUserInput.value
    });
}

function restoreOptions(storedSettings) {
    secretTokenUserInput.value = storedSettings.secretToken || "no token set"
}

const gettingStoredSettings = browser.storage.local.get()
gettingStoredSettings.then(restoreOptions, (error) => { console.log(error) })

document.querySelector("form").addEventListener("submit", saveOptions)