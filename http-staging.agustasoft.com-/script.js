function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
  
    // LOGO değiştir
    const logo = document.getElementById('logo-img');
    if (logo) {
      logo.src = `./assets/imgs/${lang.toUpperCase()}-Logo.png?ver=${Date.now()}`;
    }
  
    // JSON dosyasını yükle ve i18n güncelle
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (data[key]) {
            el.innerText = data[key];
          }
        });
        document.getElementById("country").value = lang;
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('selectedLang') || navigator.language.slice(0, 2);
    if (!['tr', 'en'].includes(lang)) lang = 'en';
  
    // ✅ Logo başlangıçta doğru gelsin
    const logo = document.getElementById("logo-img");
    if (logo) {
      logo.src = `./assets/imgs/${lang.toUpperCase()}-Logo.png`;
    }
  
    setLanguage(lang);
  });
  
  