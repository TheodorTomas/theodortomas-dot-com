/**
 * Initializes the Cookie Consent popup with the user message and css.
 */
import { useEffect } from 'react';

// Todo: add translations to the messages and and move css to constants.
export default () =>
  useEffect(() => {
    import('cookieconsent/build/cookieconsent.min.css'); // eslint-disable-line no-unused-expressions
    import('cookieconsent/build/cookieconsent.min'); // eslint-disable-line no-unused-expressions

    if (window)
      window.addEventListener('load', () => {
        if (window.cookieconsent) {
          window.cookieconsent.initialise({
            palette: {
              popup: {
                background: 'rgba(74, 74, 74, 0.75)',
                text: '#d3d3d3',
              },
              button: {
                background: '#95a3b3',
                text: '#d3d3d3',
              },
            },
            content: {
              message:
                'This website uses cookies to ensure you get the best experience on my website.',
            },
            theme: 'classic',
          });
        }
      });
  }, []);
