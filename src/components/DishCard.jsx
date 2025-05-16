import React from "react";

const DishCard = ({ project }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-full w-full">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-3xl p-2 align-center"
        />
        <div className="p-4">
          <h3 className="mb-2 text-2xl font-bold tracking-tighter">
            {project.title}
          </h3>
          <p className="text-sm ">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
