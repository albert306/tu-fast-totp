(() => {
    
    browser.browserAction.onClicked.addListener( () => { 
        console.log("TOTP Script was loaded")
        browser.tabs.sendMessage(tabs[0].id, {
            command: "enter",
        })
    })

})()
