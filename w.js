// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker registered', reg))
      .catch(err => console.error('❌ Service Worker registration failed:', err));
  });
}

// Optional: Add interaction for contact buttons
document.querySelectorAll('.contact-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`You clicked Contact for ${btn.dataset.name}`);
  });
});
