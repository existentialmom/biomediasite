let isDragging = false;
const container = document.querySelector('#container');
const leftColumn = document.querySelector('#left');
const handle = document.querySelector('#handle');

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
});

handle.addEventListener('mousedown', beginDrag);


function beginDrag(e) {
    isDragging = true;
    document.addEventListener('mousemove', onDrag);
}

function onDrag(e) {
    if (!isDragging) return;
    
    const containerWidth = container.offsetWidth;
    const newLeftWidth = e.clientX;

    // Ensure the width is within the boundaries of the container
    const percentage = Math.min(Math.max(newLeftWidth / containerWidth, 0.15), 0.85);  // setting min and max to 20% and 80%

    leftColumn.style.width = (percentage * 100) + 'vw';

    // Update the position of the handle
    handle.style.left = `calc(${percentage * 100}vw - 12.5px)`;
    
}



