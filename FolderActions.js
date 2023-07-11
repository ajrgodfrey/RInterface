
        window.onload = function() {
            var filePath = decodeURIComponent(window.location.pathname);
            var currentDir = filePath.substring(0, filePath.lastIndexOf('/'));
            
            var directoryElement = document.getElementById('currentDirectory');
            directoryElement.textContent = "Current Directory: " + currentDir;
        };
