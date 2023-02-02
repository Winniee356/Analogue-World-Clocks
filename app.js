const UI = {
    date: document.querySelector(`.date`),
    am_pm: document.querySelector(`.am-pm`),
    second: document.querySelector(`.hand--second`),
    minute: document.querySelector(`.hand--minute`),
    hour: document.querySelector(`.hand--hour`),
}

function updateClock() {
    const now = new Date();
    const date = now.getDate();
    requestAnimationFrame(updateClock)
}

requestAnimationFrame(updateClock)