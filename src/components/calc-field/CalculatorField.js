import './CalculatorField.css';

function CalculatorField(props) {
  return (
    <div className="CalculatorField">
      <p className="field-text u-font-size-default">{props.chainOfOperations}</p>
    </div>
  );
}

export default CalculatorField;
