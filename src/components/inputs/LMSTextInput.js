import React from 'react';

const LMSTextInput = (props) => {
	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
		console.log(text);
	};

	return (
		<React.Fragment>
			<input type="text" onChange={handleChange} id={props.id} />
		</React.Fragment>
	);
};

export default LMSTextInput;
