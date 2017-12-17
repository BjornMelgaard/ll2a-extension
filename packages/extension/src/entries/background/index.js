// XXX:
// stolen from here
// https://adamfeuer.com/notes/2013/01/26/chrome-extension-making-browser-action-icon-open-options-page/

function openOrFocusOptionsPage() {
  const optionsUrl = chrome.extension.getURL('options.html')
  chrome.tabs.query({}, extensionTabs => {
    let found = false
    for (let i = 0; i < extensionTabs.length; i++) {
      if (optionsUrl === extensionTabs[i].url) {
        found = true
        console.log('tab id: ' + extensionTabs[i].id)
        chrome.tabs.update(extensionTabs[i].id, { selected: true })
      }
    }
    if (found === false) {
      chrome.tabs.create({ url: 'options.html' })
    }
  })
}
chrome.extension.onConnect.addListener(port => {
  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(info => {
    const maxLength = 1024
    if (info.selection.length > maxLength) {
      info.selection = info.selection.substring(0, maxLength)
    }
    openOrFocusOptionsPage()
  })
})

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(tab => {
  openOrFocusOptionsPage()
})
