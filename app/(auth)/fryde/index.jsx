import React from 'react';
import link from 'next/link'
const MyComponent = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fryde AI</title>
        <link rel="stylesheet" href="static/style_index.css" />
      </head>

      <body>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <h1>Fryde AI</h1>

        <form
          id="inputForm"
          method="POST"
          encType="multipart/form-data"
          action="http://127.0.0.1:5000/fryde"
        >
          <label htmlFor="projectName">Enter Project Name:</label>
          <input type="text" id="projectName" name="projectName" required />

          <label htmlFor="projectID">Enter Project ID:</label>
          <input type="text" id="projectID" name="projectID" required />

          <label htmlFor="requirements">Enter Requirements:</label>
          <textarea id="requirements" name="requirements" rows="4" required></textarea>
          <input type="submit" value="submit" />
        </form>

        <center>
          <span>OR</span>
        </center>

        <form
          id="inputForm1"
          method="POST"
          encType="multipart/form-data"
          action="http://127.0.0.1:5000/json"
        >
          <input type="file" name="jsonFile" accept=".json" />
          <input type="submit" value="Upload JSON" />
        </form>

        <br />

        <footer className="footer">
          <div className="footer__addr">
            <h2>Contact</h2>
            <address>
              21 - Anna University, Chennai<br />
              Phone no - 044 239013<br />
              Mail us - info@hireops.com
            </address>
          </div>
          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">Media</h2>
              <ul className="nav__ul">
                <li>
                  <a href="#">LinkedIn</a>
                </li>

                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">X</a>
                </li>
              </ul>
            </li>
            <li className="nav__item nav__item--extra">
              <h2 className="nav__title">Services</h2>
              <ul className="nav__ul ">
                <li>
                  <a href="#">Skill Matching Engine</a>
                </li>
                <li>
                  <a href="#">Workflow Analysis</a>
                </li>
                <li>
                  <a href="#">Forecast Hiring</a>
                </li>
              </ul>
            </li>
            <li className="nav__item nav__item--extra">
              <h2 className="nav__title">Links</h2>
              <ul className="nav__ul ">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="legal">
            <p>&copy; HireOps. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default MyComponent;
