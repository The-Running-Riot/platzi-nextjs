import React from 'react'
import Navbar from '@components/Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <p>This is a footer</p>
      </footer>
    </>
  )
}