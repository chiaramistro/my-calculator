import './CalculatorField.css';

const MAX_FIELD_DIGITS = 13;  //Fits 20 numbers with normal font, 13 with digital

function CalculatorField(props) {

  let smallerFont = { };

  function shouldResizeField() {
    if (props.numberToShow.length > MAX_FIELD_DIGITS) {
      smallerFont = {
        //backgroundColor: `#1DA6`, //test
        fontSize: `calc(2.5rem - ${5+(props.numberToShow.length - MAX_FIELD_DIGITS)}px)`,
      };
      return true;
    } else return false;
  }

  return (
    <div className="CalculatorField">
      <p className="field-text u-font-size-default" style={(shouldResizeField() ? smallerFont : {})}>{props.numberToShow}</p>
    </div>
  );
}

export default CalculatorField;
