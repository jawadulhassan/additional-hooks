import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="header-fixed">
        <header id="header">
          <div className="container">
            <nav id="nav">
              <ul>
                <li>
                  <Link to="/use-reducer-with-context">Use Reducer & Context</Link>
                </li>
                <li>
                  <Link to="/use-callback-memo">Use Callback & Memo </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Layout;
