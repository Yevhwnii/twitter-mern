import React from 'react';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, to, ...props }) => {
  return (
    <Link
      style={{ color: 'inherit', textDecoration: 'none' }}
      to={to}
      {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
