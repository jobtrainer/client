import {PropTypes} from 'react';

import "./index.scss";

const MainButton = ({isSubmit, buttonText, isDisabled}) => {
	let type = isSubmit ? 'submit' : 'button';
	let buttonClass = `main_button${isDisabled ? ' disabled' : ''}`;
	return (
		<button type={type} className={buttonClass} disabled={isDisabled}>{buttonText}</button>
	);
};

MainButton.propTypes = {
	isSubmit: PropTypes.bool,
	buttonText: PropTypes.string,
	isDisabled: PropTypes.bool,
}

export default MainButton;