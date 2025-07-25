document.querySelectorAll('[contenteditable]').forEach((el) =>
  el.addEventListener('input', () => {
    el.classList.add('edit-animated');
    setTimeout(() => el.classList.remove('edit-animated'), 300);
  })
);

const LOCAL_STORAGE_KEY = '__cv_key__';
const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');

document.querySelectorAll('[contenteditable]').forEach((el, idx) => {
  const key = `element-${idx}`;

  if (savedData[key]) {
    el.textContent = savedData[key];
  }

  el.addEventListener('input', () => {
    savedData[key] = el.textContent;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData));
  });
});
