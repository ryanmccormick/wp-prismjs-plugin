import React from 'react';
import ReactDOM from 'react-dom';

import { WpPrismJS } from './wp-prismjs/WpPrismJS';
import './index.css';

try {
  const elements = Array.from(document.querySelectorAll("pre[lang]")) as Array<HTMLPreElement>;

  if (elements.length > 0) {
    elements.forEach((element: HTMLPreElement) => {
      const lang = (element.getAttribute('lang') || '').toLowerCase();
      const codeBlock = element.innerText;

      ReactDOM.render(<WpPrismJS codeBlock={codeBlock} lang={lang}/>, element);
    });
  }
} catch (exception) {
  // do nothing here. fail silently.
}



