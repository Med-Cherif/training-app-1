import { HTMLAttributes } from "react";

export const CardTitle = (props: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className="card-title" {...props} />;
};

export const CardHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className="card-header" {...props} />;
};

export const CardBody = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className="card-body" {...props} />;
};

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className="card" {...props} />;
};

export default Card;
