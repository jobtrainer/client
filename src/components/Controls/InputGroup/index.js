import "./index.scss";

const InputGroup = ({labelText, inputType, inputName}) => {
	return (
		<div className="input_group">
			<label htmlFor={inputName}>{labelText}:</label>
			<input id={inputName} type={inputType} className="text_field" />
		</div>
	);
};

export default InputGroup;