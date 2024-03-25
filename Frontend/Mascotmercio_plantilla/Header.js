import React from 'react';

function Header() {
  return (
    <>
      <head>
        <title>Mascotmercio</title>
        <link rel="shortcut icon" href="assets/images/gt_favicon.png" />	
        <link rel="stylesheet" href="assets/css/estilo.css" />
        {/* Custom styles for our template */}
        <link rel="stylesheet" href="assets/css/bootstrap-theme.css" media="screen" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="assets/images/logo.png" alt="Logo" />
        </div>
        <ul className="navbar-btns">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="about.html">Acerca de</a></li>
          <li><a href="contact.html">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
