import styled from 'styled-components';

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &:hover {
    input:not(:checked) ~ .control-indicator {
      background: #ccc;
    }
    input:checked ~ .control-indicator {
      background: #0e647d;
    }
  }
  input:checked ~ .control-indicator {
    background: #2aa1c0;
  }
  input:checked ~ .control-indicator:after {
    display: block;
    top: 4px;
    left: 8px;
    width: 5px;
    height: 10px;
    transform: rotate(45deg);
    border: solid #fff;
    border-width: 0 2px 2px 0;
  }
  input:disabled ~ .control-indicator:after {
    border-color: #7b7b7b;
  }
  input:disabled ~ .control-indicator {
    pointer-events: none;
    opacity: .6;
    background: #e6e6e6;
  }
  .control-indicator {
    position: absolute;
    top: 2px;
    left: 0;
    width: 20px;
    height: 20px;
    background: #e6e6e6;
    &:after {
      position: absolute;
      display: none;
      content: '';
    }
  }
`;

export default Label;
