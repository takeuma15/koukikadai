'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '大凶'];
    // const results = ['大吉', '中吉', '中吉', '中吉', '凶'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 確率は5%
    } else if (n < 0.2) {
      btn.textContent = '中吉'; // 確率は15%
    } else {
      btn.textContent = '凶'; // 確率は80%
    }
  });
}