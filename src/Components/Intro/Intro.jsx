import React from "react";
import './Intro.css';
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Welcome! I Am</span>
          <span>Hessah</span>
          <span>Software Engineer with high level of experience in development
            , producing the Quality work</span>
        </div>
        <button className="button i-button">Hire me</button>
      </div>
      <div className="i-right">I am right side</div>
    </div>
  );
}
export default Intro;
