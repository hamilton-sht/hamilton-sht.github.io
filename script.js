const button = document.getElementById('language');
const translated = [...document.querySelectorAll('[data-zh]')];
const english = translated.map(element => element.innerHTML);
let language = 'en';
function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  translated.forEach((element, index) => {
    if (language === 'zh') element.textContent = element.dataset.zh;
    else element.innerHTML = english[index];
  });
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  button.textContent = language === 'zh' ? 'EN' : '中文';
  button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  try { localStorage.setItem('preferred-language', language); } catch {}
}
button.hidden = false;
button.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('preferred-language') === 'zh') setLanguage('zh'); } catch {}
