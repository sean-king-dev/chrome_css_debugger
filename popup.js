document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getCSSFiles' }, function (response) {
        displayResults(response);
      });
    });
  
    function displayResults(cssFiles) {
      var resultsDiv = document.getElementById('results');
      if (cssFiles.length === 0) {
        resultsDiv.innerHTML = 'No CSS files found.';
      } else {
        resultsDiv.innerHTML = '<strong>CSS Files:</strong><ul>';
        cssFiles.forEach(function (file) {
          resultsDiv.innerHTML += '<li>' + file + '</li>';
        });
        resultsDiv.innerHTML += '</ul>';
      }
    }
  });
  