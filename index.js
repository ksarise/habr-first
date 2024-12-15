(function () {
  const app = document.querySelector(".app");
  const timeInput = app.querySelector(".app__input");
  const addTimerButton = app.querySelector(".app__add-timer");
  const timersList = app.querySelector(".app__timers");

  function createElem(tag, className, parent, content) {
    const elem = document.createElement(tag);
    elem.className = className;
    if (content) {
      elem.textContent = content;
    }
    if (parent) {
      parent.appendChild(elem);
    }
    return elem;
  }

  function createTimer(duration) {
    console.log(duration);
    let timeRemaining = duration;
    const timerElement = createElem("li", "timer", timersList);
    console.log(timerElement);
    const timeDisplay = createElem(
      "span",
      "timer__time",
      timerElement,
      timeRemaining
    );
    const stopButton = createElem(
      "button",
      "timer__button",
      timerElement,
      "Delete"
    );

    const intervalId = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        timeDisplay.textContent = timeRemaining;
      } else {
        clearInterval(intervalId);
        timerElement.remove();
      }
    }, 1000);
  }

  addTimerButton.addEventListener("click", () => {
    const duration = parseInt(timeInput.value, 10);
    if (!isNaN(duration) && duration > 0) {
      createTimer(duration);
      timeInput.value = "";
    }
  });
})();
