// src/components/Footer.js
import React from 'react';
import { colors } from '../colors';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.secondary, color: colors.white }}>
      <p>© 2024 Siga App. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
