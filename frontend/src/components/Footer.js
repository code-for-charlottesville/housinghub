import React from "react";
import "../style/App.css";

export function Footer() {
  return (
    <footer className="container-fluid navbar-dark bg-dark text-center align-middle App-footer">
      <div className="footer-text">
        ©Code for Charlottesville |{" "}
        <a href="https://brigade.codeforamerica.org/brigades/Code-for-Charlottesville/">
          Brigade Website
        </a>{" "}
        | <a href="/LICENSE">License</a> | <a href="/VERSION">Version</a>
      </div>
      <span className="text-right"> Copyright Housing Hub </span>
    </footer>
  );
}
