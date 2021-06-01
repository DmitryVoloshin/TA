import React from "react";



 const NavigationList = ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>About us</li>
      <li onClick={close}>Simulators</li>
      <li onClick={close}>Trainings</li>
      <li onClick={close}>Schedule</li>
      <li onClick={close}>Contact</li>
    </ul>
  </div>
);

export default NavigationList