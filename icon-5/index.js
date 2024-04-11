const buttons = document.querySelectorAll('.btn');
const ACTIVE_CLASS = 'activated';
const AUTO_REMOVE_CLASS_DELAY = 500;

buttons.forEach((btn) => btn.addEventListener('click', (e) => {
  const btnHasActiveClass = btn.classList.contains(ACTIVE_CLASS);

  btn.classList.toggle(ACTIVE_CLASS);

  if (!btnHasActiveClass) {
    setTimeout(() => btn.classList.remove(ACTIVE_CLASS), AUTO_REMOVE_CLASS_DELAY)
  }
}));