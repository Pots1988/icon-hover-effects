const buttons = document.querySelectorAll('.btn');
const SUCCESS_CLASS = 'btn--success';
const ERROR_CLASS = 'btn--error';
const AUTO_REMOVE_CLASS_DELAY = 1000;

let counter = 0;

const removeActiveClasses = (btn) => [SUCCESS_CLASS, ERROR_CLASS].forEach((item) => btn.classList.remove(item));

buttons.forEach((btn) => btn.addEventListener('click', (e) => {
  const btnHasActiveClass = [SUCCESS_CLASS, ERROR_CLASS].some((item) => btn.classList.contains(item));

  if (btnHasActiveClass) {
    removeActiveClasses(btn);
  } else {
    const ACTIVE_CLASS = counter % 2 ? ERROR_CLASS : SUCCESS_CLASS;

    btn.classList.add(ACTIVE_CLASS);
    counter++;
  }

  if (!btnHasActiveClass) {
    setTimeout(() => removeActiveClasses(btn), AUTO_REMOVE_CLASS_DELAY)
  }
}));