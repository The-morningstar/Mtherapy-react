import React from 'react';
import './Navbar.css';

const App = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Navbar</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <nav>
          <ul className="sidebar">
            <li onClick={hideSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26"
                  viewBox="0 96 960 960"
                  width="26"
                >
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
              </a>
            </li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <ul>
            <li><a  className='logo' href="#">MTherapy</a></li>
            <li className="hideOnMobile"><a href="#">Home</a></li>
            
            <li className="hideOnMobile"><a href="#">About</a></li>
            <li className="menu-button" onClick={showSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26"
                  viewBox="0 96 960 960"
                  width="26"
                >
                  <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
};

export default App;
