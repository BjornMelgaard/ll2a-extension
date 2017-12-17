function listenRuntimeMessage(type, cb) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === type) {
      cb(request.payload, sender, sendResponse)
    }
  })
}

export default listenRuntimeMessage
