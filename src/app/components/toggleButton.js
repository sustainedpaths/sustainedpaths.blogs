import React, { useEffect } from 'react';

const ToggleMenuBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the `right` property
  const toggleMenuBar = () => {
    setIsToggled(!isToggled);
  };
  // Effect to apply styles based on the state
  useEffect(() => {
    const menuBar = document.querySelector('.menubar');
    if (menuBar) {
      menuBar.style.right = isToggled ? '0px' : '100px'; // Adjust the value as needed
    }
  }, [isToggled]);

  return (
    <div>
      <button className={Styless.menuButton} onClick={toggleMenuBar}>
        {isToggled ? <img src='/delete.png'/> : <img src='/menu.png'/>}
      </button>
    </div>
  );
};

export default ToggleMenuBar;
