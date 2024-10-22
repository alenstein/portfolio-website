//
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      let theme = 'light';
      if (body.classList.contains('dark-mode')) {
          theme = 'dark';
          toggleBtn.textContent = '☀️';
      } else {
          toggleBtn.textContent = '🌙';
      }

      localStorage.setItem('theme', theme);
  });
});


