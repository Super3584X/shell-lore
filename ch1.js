const clickRegionLeft = document.getElementById("click-region-left");
const clickRegionRight = document.getElementById("click-region-right");

const panels = [
    'SL_Poster_new.png', 'Shell Lore Comic Start.png', 'Shell Lore Comic Start 2.png', 'Shell Lore Comic Start 4 before 3.png', 'Shell Lore Comic Start 5.png', 'Shell Lore Comic Start 3.png', 
    'Shell Lore Comic 1.png', 'Shell Lore Comic 2.png', 'Shell Lore Comic 4.png', 'Shell Lore Comic 5.png', 'Shell Lore Comic 6.png', 
    'Shell Lore Comic 7.png', 'Shell Lore Comic 8.png', 'Shell Lore Comic 9.png', 'Shell Lore Comic 10.png', 'Shell Lore Comic 11.png', 'Shell Lore Comic 12.png', 
    'Shell Lore Comic 13.png', 'Shell Lore Comic 14.png', 'Shell Lore Comic 15.png', 'Shell Lore Comic 16.png', 'Shell Lore Comic 17.png',
    'Shell Lore Comic 19.png', 'Shell Lore Comic 20.png', 'Shell Lore Comic 21.png', 'Shell Lore Comic 22.png'
];

let currentIndex = 0;

function showPanel(index) {
    const comicPanel = document.getElementById('comic-panel');
    comicPanel.src = 'Chapter 1/' + panels[index];
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