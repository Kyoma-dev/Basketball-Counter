let displayH = document.getElementById("homePoints")

let displayG = document.getElementById("guestPoints")

let homeCount = 0

let guestCount = 0

function display() {
    displayH.textContent = homeCount
    displayG.textContent = guestCount
    highlight()
}

display()
highlight()

function plusOneH() {
    homeCount += 1
    displayH.textContent = homeCount
    highlight()
}

function plusOneG() {
    guestCount += 1
    displayG.textContent = guestCount
    highlight()
}

function plusTwoH() {
    homeCount += 2
    displayH.textContent = homeCount
    highlight()
}

function plusTwoG() {
    guestCount += 2
    displayG.textContent = guestCount
    highlight()
}

function plusThreeH() {
    homeCount += 3
    displayH.textContent = homeCount
    highlight()
}

function plusThreeG() {
    guestCount += 3
    displayG.textContent = guestCount
    highlight()
}

function reset() {
    homeCount = 0;
    guestCount = 0;
    displayH.textContent = homeCount
    displayG.textContent = guestCount
    highlight()
}

function highlight() {
    
    if (homeCount > guestCount) {
        displayH.style.color = 'green'; 
        displayG.style.color = ''; 
    } else if (guestCount > homeCount) {
        displayG.style.color = 'green';
        displayH.style.color = '';
    } else {
        displayH.style.color = '';
        displayG.style.color = '';
    }
}