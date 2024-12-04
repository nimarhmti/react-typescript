import React, { FC, PropsWithChildren } from "react";
type PropsModel = PropsWithChildren<{
  title: string;
}>;

const Card: FC<PropsModel> = ({ children, title }) => {
  return (
    <div className="absolute p-4 bg-gray-600 rounded-xl shadow-md text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Card;
