const clickRegionLeft = document.getElementById("click-region-left");
const clickRegionRight = document.getElementById("click-region-right");

const panels = [
    'sl31.png', 'sl32.png', 'sl33.png', 'sl34.png', 'sl35.png', 'sl36.png', 'sl37.png', 'sl38.png', 'sl39.png', 'sl310.png', 'sl311.png', 'sl312.png'
];

let currentIndex = 0;

function showPanel(index) {
    const comicPanel = document.getElementById('comic-panel');
    comicPanel.src = 'Chapter 3/' + panels[index];
    comicPanel.alt = `Comic Panel ${index + 1}`;
}

function nextPage() {
    if (currentIndex < panels.length - 1) {
        currentIndex++;
        showPanel(currentIndex);
    }
}

function prevPage() {
    if (currentIndex > 0) {
        currentIndex--;
        showPanel(currentIndex);
    }
}


// Function for arrow key navigation
const keyDownEvent = (e) => {
    if (e.keyCode == '37') {
        prevPage();
    } else if (e.keyCode == '39') {
        nextPage();
    }
}

document.addEventListener("keydown", keyDownEvent)
clickRegionLeft.addEventListener("click", prevPage);
clickRegionRight.addEventListener("click", nextPage);

// Initialize the first panel
showPanel(currentIndex);
