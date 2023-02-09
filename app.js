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
    const seconds = now.getSeconds() / 60 * 360;
    const minutes = now.getMinutes() / 60 * 360;
    const hours = now.getHours() / 12 * 360;
    
    // UI update
    UI.date.textContent = date;
    UI.second.style.transform = `rotate($[seconds]deg)`;
    requestAnimationFrame(updateClock)
}

requestAnimationFrame(updateClock)