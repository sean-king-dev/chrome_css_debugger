chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getCSSFiles') {
    document.addEventListener('DOMContentLoaded', function () {
      var cssFiles = findCSSFiles();
      sendResponse(cssFiles);
    });
    return true;
  }
});

function findCSSFiles() {
  var cssFiles = [];
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && /max\.css(\?.*)?$/.test(href)) {
      cssFiles.push(href);
    }
  });
  return cssFiles;
}
