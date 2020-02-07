import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-weight: 900;
    font-size: 1rem;
    background: #000000;
    color: white;
  }
  * {
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
    font-style: italic;
  }
`;

const PageStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <PageStyles>
    <h2>JavaScript Drone 🚀</h2>
    <GlobalStyle />
    <Commands />
    <DroneState />
  </PageStyles>
);

export default IndexPage;
