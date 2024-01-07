const secretTokenUserInput = document.querySelector("#secretToken")

function tokenIsValid(input) {
    if (!input.match(/^[A-Z0-9]{32}$/)) {
        return false
    }
    return true

}
async function saveOptions(e) {
    e.preventDefault()
    document.querySelector("#saveSuccess").classList.add("hidden")

    if (!tokenIsValid(secretTokenUserInput.value)) {
        document.querySelector("#wrongFormat").classList.remove("hidden")
        return
    } else {
        document.querySelector("#wrongFormat").classList.add("hidden")
    }

    await browser.storage.local.set({
        secretToken: secretTokenUserInput.value
    });

    document.querySelector("#saveSuccess").classList.remove("hidden")
}

function restoreOptions(storedSettings) {
    secretTokenUserInput.value = storedSettings.secretToken || "no token set"
    document.querySelector("#saveSuccess").classList.add("hidden")
}

const gettingStoredSettings = browser.storage.local.get()
gettingStoredSettings.then(restoreOptions, (error) => { console.log(error) })

document.querySelector("form").addEventListener("submit", saveOptions)