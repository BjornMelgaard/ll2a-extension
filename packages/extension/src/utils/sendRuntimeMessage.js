function sendRuntimeMessage(type, payload) {
  chrome.runtime.sendMessage({ type, payload })
}

export default sendRuntimeMessage
