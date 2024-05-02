// src/components/Header.js
import React from 'react';
import { colors } from '../colors';

const Header = () => {
  return (
    <header style={{ backgroundColor: colors.primary, color: colors.white }}>
      <h1>siga - app</h1>
    </header>
  );
};

export default Header;
