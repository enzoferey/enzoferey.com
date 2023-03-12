import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Paragraph: React.FC<Props> = (props) => {
  const { children } = props;

  return <p className="mt-6 text-base text-zinc-600">{children}</p>;
};
