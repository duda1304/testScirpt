async function getStyles() {
    fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css')
      .then(response => response.text())
      .then(cssContent => {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssContent;
        document.body.appendChild(styleElement);
      })
      .catch(error => console.error(error));
    fetch('https://cdn.quilljs.com/1.3.6/quill.snow.css')
      .then(response => response.text())
      .then(cssContent => {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssContent;
        document.body.appendChild(styleElement);
      })
      .catch(error => console.error(error));
      fetch('https://webhooks.sakuam.de/development/mailto/style.css')
      .then(response => response.text())
      .then(cssContent => {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssContent;
        document.body.appendChild(styleElement);
      })
      .catch(error => console.error(error));
}

export { getStyles }