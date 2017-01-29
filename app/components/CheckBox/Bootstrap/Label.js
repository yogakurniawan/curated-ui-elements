import styled from 'styled-components';

const PRIMARY = '#0275d8';
const SECONDARY = '#fff';
const SUCCESS = '#5cb85c';
const INFO = '#5bc0de';
const WARNING = '#f0ad4e';
const DANGER = '#d9534f';

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
  }
  input:checked ~ .control-indicator {
    background: ${(props) => {
      let color;
      if (props.color === 'primary') {
        color = PRIMARY;
      } else if (props.color === 'secondary') {
        color = SECONDARY;
      } else if (props.color === 'info') {
        color = INFO;
      } else if (props.color === 'success') {
        color = SUCCESS;
      } else if (props.color === 'warning') {
        color = WARNING;
      } else if (props.color === 'danger') {
        color = DANGER;
      }
      return color;
    }};
  }
  input:checked ~ .control-indicator:after {
    display: block;
    top: 4px;
    left: 8px;
    width: 6px;
    height: 12px;
    transform: rotate(45deg);
    border: solid ${(props) => (props.color === 'secondary' ? '#000' : '#fff')};
    border-width: 0 3px 3px 0;
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
    width: 22px;
    height: 22px;
    background: #e6e6e6;
    border-radius: 4px;
    &:after {
      position: absolute;
      display: none;
      content: '';
    }
  }
`;

export default Label;
