const clickRegionLeft = document.getElementById("click-region-left");
const clickRegionRight = document.getElementById("click-region-right");

const panels = [
    'SL_Poster_new.png', '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png'
];

let currentIndex = 0;

function showPanel(index) {
    const comicPanel = document.getElementById('comic-panel');
    comicPanel.src = 'Chapter 2/' + panels[index];
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