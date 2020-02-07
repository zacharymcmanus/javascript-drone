import styled from 'styled-components';
import socket from '../socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  grid-gap: 3px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #226089;
    border: 4px solid transparent;
    color: white;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: #ffc600;
    }
    &.takeoff {
      background: #0b8457;
    }
    &.land {
      background: #d72323;
    }
    &.emergency {
      background: #ffd615;
      text-transform: uppercase;
      color: black;
    }
    &.rotate {
      background: #4592af;
      color: black;
    }
    &.height {
      background: #fff;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .center {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

const amount = 100;
const Commands = () => (
  <CommandGrid>
    <button className="rotate" onClick={sendCommand('ccw 90')}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={sendCommand(`forward ${amount}`)}>
      <span className="symbol">↑</span> FORWARD {amount}cm
    </button>
    <button className="rotate" onClick={sendCommand('cw 15')}>
      <span className="symbol">⟳</span> 15°
    </button>
    <button onClick={sendCommand(`left ${amount}`)}>
      <span className="symbol">←</span> LEFT {amount}cm
    </button>
    <div className="center">
      <button className="takeoff" onClick={sendCommand('takeoff')}>
        TAKE OFF
      </button>
      <button className="land" onClick={sendCommand('land')}>
        LAND
      </button>
      <button className="emergency" onClick={sendCommand('emergency')}>
        EMERGENCY LAND
      </button>
    </div>
    <button onClick={sendCommand(`right ${amount}`)}>
      <span className="symbol">→</span>
      RIGHT {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`up ${amount}`)}>
      <span className="symbol">⤒</span> {amount}cm
    </button>
    <button onClick={sendCommand(`back ${amount}`)}>
      <span className="symbol">↓</span> BACK {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`down ${amount}`)}>
      <span className="symbol">⤓</span> {amount}cm
    </button>
    <button onClick={sendCommand('flip l')}>FLIP LEFT</button>
    <button onClick={sendCommand('flip r')}>FLIP RIGHT</button>
    <button onClick={sendCommand('flip b')}>FLIP BACK</button>
    <button onClick={sendCommand('flip f')}>FLIP FORWARD</button>
    <button onClick={sendCommand('go 25 25 25 25')}>GO 25 25 25 25</button>
    <button onClick={sendCommand('curve 100 100 100 150 250 350 50')}>
      CURVE
    </button>
  </CommandGrid>
);

export default Commands;
