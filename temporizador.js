function startTimer(initialTime, display) {
  let timer = initialTime;
  let hours, minutes, seconds;

  let interval = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.hours.textContent = hours;
    display.minutes.textContent = minutes;
    display.seconds.textContent = seconds;

    // Guardar el valor actual del temporizador en el localStorage
    localStorage.setItem("timerValue", timer);

    if (--timer < 0) {
      clearInterval(interval);
      display.hours.textContent = "00";
      display.minutes.textContent = "00";
      display.seconds.textContent = "00";
      display.classList.add("time-up");
    }
  }, 1000);
}

const initialTimeInSeconds = 1439 * 60; // 5 minutes (you can adjust this as needed)
window.onload = function () {
  const display = {
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  // Obtener el valor inicial del temporizador almacenado en el localStorage
  const storedTimerValue = localStorage.getItem("timerValue");
  const initialTime = storedTimerValue !== null ? parseInt(storedTimerValue, 10) : initialTimeInSeconds;

  startTimer(initialTime, display);
};
