//your JS code here. If required.
// Function to update window size
function updateWindowSize() {
    const sizeText = document.getElementById('sizeText');
    sizeText.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

// Initial call to set size on load
updateWindowSize();

// Add event listener for window resize
window.addEventListener('resize', updateWindowSize);
