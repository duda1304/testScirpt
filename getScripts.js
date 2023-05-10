async function getScripts() {
    await fetch('https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js')
      .then(response => response.text())
      .then(content => {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = content;
        document.body.appendChild(scriptElement);
      })
      .catch(error => console.error(error));
    await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js')
      .then(response => {response.text();console.log(response)})
      .then(content => {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = content;
        document.body.appendChild(scriptElement);
      })
      .catch(error => console.error(error));
    await  fetch('https://cdn.quilljs.com/1.3.6/quill.js')
      .then(response => response.text())
      .then(content => {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = content;
        document.body.appendChild(scriptElement);
      })
      .catch(error => console.error(error));
}

export { getScripts }