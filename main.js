document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('msnEbookPopup');
  const closeBtn = document.getElementById('msnClosePopup');
  
  // Select all instances of download trigger buttons across your page
  const triggerButtons = document.querySelectorAll('.msn-trigger-download');

  // Open Popup function
  triggerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden'; // Prevents background layout scrolling
    });
  });

  // Close Popup function via "X" button click
  closeBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('is-active');
    document.body.style.overflow = ''; // Restores window body scroll
  });

  // Close Popup if clicking outside the core card box content structure
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });
});