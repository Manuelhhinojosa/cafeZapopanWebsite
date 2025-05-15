import React from "react";
import missionImg from "../assets/mission.jpeg";

const Menu = () => {
  return (
    <section id="menu">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 mt-8 text-3xl lg:text-4xl">Menú</h2>
        <div className="relative flex flex-col justify-center items-center">
          <div className="m-5">
            <img src={missionImg} alt="MenuImg" className="rounded-3xl" />
          </div>

          <div className="m-5">
            <img src={missionImg} alt="MenuImg" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
