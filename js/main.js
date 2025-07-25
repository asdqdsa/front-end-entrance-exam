import html2pdf from 'html2pdf.js';

function getHtmlToPdf() {
  const btn = document.querySelector('#download-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const element = document.querySelector('.cv');
    if (!element) return;

    html2pdf()
      .set({
        margin: 0,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      })
      .from(element)
      .save();
  });
}

function addAnimationOnEdit() {
  document.querySelectorAll('[contenteditable]').forEach((el) =>
    el.addEventListener('input', () => {
      el.classList.add('edit-animated');
      setTimeout(() => el.classList.remove('edit-animated'), 300);
    })
  );
}

function useLS() {
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
}

getHtmlToPdf();
addAnimationOnEdit();
useLS();
