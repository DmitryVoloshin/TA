import React from "react";

const NavigationList = ({ close }) => {
  const linksList = [
    "About us",
    "Simulators",
    "Trainings",
    "Schedule",
    "Contact",
  ];

  return (
    <div className="menu">
      <ul>
        {linksList.map((item) => {
          return (
            <li onClick={close} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationList;
