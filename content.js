// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'getCSSFiles') {
//       var cssFiles = findCSSFiles();
//       sendResponse(cssFiles);
//     }
//   });
  
//   function findCSSFiles() {
//     var cssFiles = [];
//     var links = document.querySelectorAll('link[rel="stylesheet"]');
//     links.forEach(function (link) {
//       var href = link.getAttribute('href');
//       if (href && href.endsWith('max.css')) {
//         cssFiles.push(href);
//       }
//     });
//     return cssFiles;
//   }
  
// v2
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'getCSSFiles') {
//       // Wait for the DOM to be fully loaded
//       document.addEventListener('DOMContentLoaded', function () {
//         var cssFiles = findCSSFiles();
//         sendResponse(cssFiles);
//       });
//       return true; // Indicate that the response will be sent asynchronously
//     }
//   });
  
//   function findCSSFiles() {
//     var cssFiles = [];
//     var links = document.querySelectorAll('link[rel="stylesheet"]');
//     links.forEach(function (link) {
//       var href = link.getAttribute('href');
//       if (href && href.endsWith('.max.css')) {
//         cssFiles.push(href);
//       }
//     });
//     return cssFiles;
//   }
  

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
  