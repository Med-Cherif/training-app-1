import React from "react";

const Container = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};

export default Container;
