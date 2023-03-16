import React from "react";

interface Props {
  children: React.ReactNode[];
}

export const OrderedList: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <ol className="mt-6 ml-4 text-base text-zinc-600">
      {children.map((child, index) => {
        return (
          <li key={index} className={index > 0 ? "mt-2" : ""}>
            {child}
          </li>
        );
      })}
    </ol>
  );
};
