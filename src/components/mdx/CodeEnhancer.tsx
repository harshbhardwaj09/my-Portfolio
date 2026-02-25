'use client';

import { useEffect } from 'react';

export default function CodeEnhancer() {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre');

    blocks.forEach((block) => {
      if (block.querySelector('.copy-btn')) return;

      const button = document.createElement('button');
      button.innerText = 'Copy';
      button.className =
        'copy-btn absolute top-2 right-2 text-xs bg-gray-800 text-white px-3 py-1 rounded-md';

      button.onclick = () => {
        const code = block.querySelector('code')?.innerText;
        if (code) {
          navigator.clipboard.writeText(code);
          button.innerText = 'Copied!';
          setTimeout(() => (button.innerText = 'Copy'), 2000);
        }
      };

      block.style.position = 'relative';
      block.appendChild(button);
    });
  }, []);

  return null;
}
