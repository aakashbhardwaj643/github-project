import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const FooterLogo = styled(ReactLogo)`
  width: 1.2rem;
  color: #A3D4E7;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #A3D4E7;
`;

const GithubFooter = () => {
  return (
    <Footer>
      <FooterContent>
        <Text>Made with React</Text>
        <FooterLogo/>
      </FooterContent>
    </Footer>
  );
};

export default GithubFooter;