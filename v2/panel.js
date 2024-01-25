var cssViewer = document.getElementById('cssViewer');
var cssContents = document.getElementById('cssContents');

chrome.devtools.panels.elements.onSelectionChanged.addListener(function () {
  chrome.devtools.inspectedWindow.eval(
    'window.location.href',
    function (url, error) {
      if (!error) {
        chrome.runtime.sendMessage({ action: 'inspectCSS', url: url }, function (response) {
          displayCSS(response.cssContent);
        });
      }
    }
  );
});

function displayCSS(cssContent) {
  cssContents.innerHTML = '<pre>' + cssContent + '</pre>';
}
