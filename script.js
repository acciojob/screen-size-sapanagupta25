//your JS code here. If required.
function updateSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Update the content of the spans in the h1 tag
            document.getElementById('width').textContent = width;
            document.getElementById('height').textContent = height;
        }

        // Initial update when the page loads
        updateSize();

        // Add event listener for window resize
        window.addEventListener('resize', updateSize);