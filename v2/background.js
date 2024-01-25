chrome.runtime.onConnect.addListener(function (port) {
    if (port.name === 'cssViewer') {
      port.onMessage.addListener(function (message) {
        if (message.action === 'inspectCSS') {
          fetchCSSContent(message.url, function (cssContent) {
            port.postMessage({ action: 'displayCSS', cssContent: cssContent });
          });
        }
      });
    }
  });
  
  function fetchCSSContent(url, callback) {
    fetch(url)
      .then(response => response.text())
      .then(cssContent => {
        callback(cssContent);
      })
      .catch(error => console.error('Error fetching CSS content:', error));
  }
  