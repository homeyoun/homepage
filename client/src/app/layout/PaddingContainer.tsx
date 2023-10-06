import React, { ReactNode } from "react";

type PaddingContainerProps = {
  children: ReactNode;
};
const PaddingContainer = ({ children }: PaddingContainerProps) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

export default PaddingContainer;
