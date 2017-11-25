'use strict';

/* Configuration and string constants. */
const LIGHT_CLASS = 'light';
const LIGHT_TEXT = 'Lighten';
const DARK_CLASS = 'dark';
const DARK_TEXT = 'Darken';
const PRISM_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0';
const PRISM_LIGHT = 'themes/prism-solarizedlight.min.css';
const PRISM_DARK = 'themes/prism-okaidia.min.css';
const PRISM_CLASS = 'language-markup';

/* Reusable selector for the layout's body. */
const UiBody = () => document.querySelector('body');

/* Prism stylesheet element. */
const UiPrismCss = () => document.querySelector('#prism-css');
/* Behaviour for Prism stylesheet element. */
const SetUiPrismCss = () => {
  UiPrismCss().setAttribute('href', `${PRISM_CDN}/${
    UiBody().classList.contains(DARK_CLASS) ? PRISM_DARK : PRISM_LIGHT
  }`);
};

/* Block and inline code elements. */
const UiCodes = () => [...document.querySelectorAll('code')];
/* Behaviour for block and inline code elements. */
const SetUiCodes = () => {
  // Set the custom Prism highlighter or use its default.
  UiCodes().map(code => code.classList.add(
    code.parentElement.nodeName === 'PRE' ?
      `language-${code.parentElement.getAttribute('class')}` : PRISM_CLASS
    )
  );
  // Tell Prism to highlight code elements after its type has been set. Wrap it
  // inside a try-catch in case no code elements are found.
  try {
    Prism.highlightAll();
  } catch (error) {}
};

/* Theme toggler element. */
const UiToggleThemes = () => [...document.querySelectorAll('.toggle-theme')];
/* Behaviour for theme toggler elements. */
const SetUiToggleThemes = () => {
  UiToggleThemes().map(toggle => toggle.addEventListener('click', (event) => {
    event.preventDefault();
    // Toggle the light and dark layout themes.
    UiBody().classList.toggle(LIGHT_CLASS);
    UiBody().classList.toggle(DARK_CLASS);
    // Set the toggle texts.
    UiToggleThemes().map(
      t => t.textContent = UiBody().classList.contains(DARK_CLASS) ?
        LIGHT_TEXT : DARK_TEXT
    );
    // Reset Prism's theme.
    SetUiPrismCss();
  }));
};

/* IIFE for this page. */
(() => document.addEventListener('DOMContentLoaded', () => {
  SetUiPrismCss();
  SetUiCodes();
  SetUiToggleThemes();
}))();
