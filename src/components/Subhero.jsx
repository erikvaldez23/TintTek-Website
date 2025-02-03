import React from "react";
import "./Subhero.css";

const Subhero = () => {
  return (
    <section className="subhero-overlay"> {/* Updated class name */}
      <div className="subhero">
        <h2>01</h2>
        <p>WINDOW TINTING</p>
      </div>
      <div className="divider"></div> {/* Vertical Line */}
      <div className="subhero">
        <h2>02</h2>
        <p>PAINT CORRECTION</p>
      </div>
      <div className="divider"></div> {/* Vertical Line */}
      <div className="subhero">
        <h2>03</h2>
        <p>PAINT PROTECTION</p>
      </div>
    </section>
  );
};

export default Subhero;

