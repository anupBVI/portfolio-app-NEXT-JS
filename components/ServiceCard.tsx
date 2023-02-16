import React from "react";
import { IService } from "./../types";

const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title, id },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      {/* <Icon /> */}
      <span className="w-12 h-12 text-green-300">ICON</span>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
