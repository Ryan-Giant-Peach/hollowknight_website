import logo from './logo.svg';
import './App.css';
import Vidorslides from './components/Vidorslides';
import Info from './components/Info';
import styled from 'styled-components';
import hklogo from './img/hklogo.png';

function App() {
  return (
    <div className="App">
      <Logo>
        <img src={hklogo} className="hklogo" alt="logo" />
      </Logo>
      <Vidorslides />
      <Info />
    </div>
  );
}

export default App;

const Logo = styled.div``;
