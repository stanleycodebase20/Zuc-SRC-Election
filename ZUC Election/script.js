// Set the deadline date (YYYY, MM-1, DD)
const deadline = new Date(2025, 2, 24, 23, 59, 59).getTime(); // Change the date accordingly

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "Time's up!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 *60 * 24));
    const hours =  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Use backtick(`) instead of sigle qoutes
    document.getElementById("timer").innerHTML = `
    ${days} Days  ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
