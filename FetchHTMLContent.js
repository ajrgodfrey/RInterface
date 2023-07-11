function loadExternalContent(filename) {
    var targetElement = document.getElementById(filename);

    // Fetch the external HTML file
    fetch(filename)
        .then(response => response.text())
        .then
