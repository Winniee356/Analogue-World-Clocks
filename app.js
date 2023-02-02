const UI = {
    date: document.querySelector(`.date`),
    am_pm: document.querySelector(`.am-pm`),
    second: document.querySelector(`.hand--second`),
    minute: document.querySelector(`.hand--minute`),
    hour: document.querySelector(`.hand--hour`),
}

function updateClock() {
    // getting date and time
    const now = new Date();
    const date = now.getDate();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();

    
    // UI update
    UI.date.textContent = date;

    requestAnimationFrame(updateClock)
}

requestAnimationFrame(updateClock)