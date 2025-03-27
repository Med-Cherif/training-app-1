import React, { LabelHTMLAttributes } from "react";

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label className="label" {...props} />;
};

export default Label;
