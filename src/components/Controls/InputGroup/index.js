import "./index.scss";

const InputGroup = ({labelText, inputType, inputName, onChange}) => {
	return (
		<div className="input_group">
			<label htmlFor={inputName}>{labelText}:</label>
			<input id={inputName} type={inputType} className="text_field" onChange={onChange} />
		</div>
	);
};

export default InputGroup;