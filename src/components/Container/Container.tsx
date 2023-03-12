import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
};
