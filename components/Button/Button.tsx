import React from 'react';
type Props = {
  name: string;
  to?: string;
};

const Button = ({ name, to }: Props) => {
  return <div className="button">{name}</div>;
};

export default Button;
