import React from 'react';
import './LMSButton.css';

const LMSButton = ({
	title,
	type,
	size,
	icon,
	iconSize,
	iconColor,
	clickHandler,
	loading,
	...rest
}) => {
	let btnBaseClasses =
		'font-bold py-2 px-4 rounded inline-flex items-center ';
	let btnSizeClasses = '';
	switch (size) {
		case 'small':
			btnSizeClasses += 'py-2 px-4';
			break;
		case 'large':
			btnSizeClasses += 'py-3 px-6 text-lg';
			break;
		default:
			btnSizeClasses = 'py-2 px-4';
			break;
	}

	switch (type) {
		case 'primary':
			btnBaseClasses += 'bg-indigo-700 hover:bg-indigo-600 text-white ';
			break;
		case 'secondary':
			btnBaseClasses += 'bg-gray-300 hover:bg-gray-400 text-gray-800 ';
			break;
		case 'success':
			btnBaseClasses += 'bg-green-400 hover:bg-green-500 text-white ';
			break;
		case 'info':
			btnBaseClasses += 'bg-blue-400 hover:bg-blue-500 text-white ';
			break;
		case 'warning':
			btnBaseClasses += 'bg-orange-400 hover:bg-orange-500 text-white ';
			break;
		case 'danger':
			btnBaseClasses += 'bg-red-400 hover:bg-red-500 text-white ';
			break;
		default:
			btnBaseClasses += 'bg-gray-300 hover:bg-gray-400 text-gray-800 ';
	}

	return (
		<button
			className={'tracking-wide ' + btnBaseClasses + btnSizeClasses}
			onClick={clickHandler}
		>
			{icon && (
				<ion-icon
					name={icon}
					size={iconSize ? iconSize : 'small'}
					class={loading ? 'rotating' : ''}
				></ion-icon>
			)}
			<span className={icon ? 'ml-2' : ''}>{title}</span>
		</button>
	);
};

export default LMSButton;
