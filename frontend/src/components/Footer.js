import React from "react";
import "../style/App.css";

export function Footer() {
  return (
    <footer className="App-footer">
      ©Code for Charlottesville |{" "}
      <a href="https://brigade.codeforamerica.org/brigades/Code-for-Charlottesville/">
        Brigade Website
      </a>{" "}
      | <a href="/LICENSE">License</a> | <a href="/VERSION">Version</a>
    </footer>
  );
}
