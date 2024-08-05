
import { useEffect } from 'react';

const useHoverAnimation = (selector, letters = "abcdefghijklmnopqrstuvwxyz") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const handleMouseOver = event => {
      let interactions = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
          if (index < interactions) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("");

        if (interactions > event.target.dataset.value.length) clearInterval(interval);
        interactions = interactions + 1 / 5;
      }, 20);
    };

    elements.forEach(element => {
      element.dataset.value = element.innerText;
      element.addEventListener('mouseover', handleMouseOver);
    });

    // Cleanup event listeners on component unmount
    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, [selector, letters]);
};

export default useHoverAnimation;
