import React from 'react';

const LMSAlert = ({ msg, type, ...rest }) => {
	var alertColorClasses = '';
	var alertIconClasses = '';

	switch (type) {
		case 'primary':
			alertColorClasses = 'bg-indigo-700 text-white ';
			alertIconClasses = 'bg-indigo-400';
			break;
		case 'secondary':
			alertColorClasses = 'bg-gray-300 text-gray-800 ';
			alertIconClasses = 'bg-gray-600';
			break;
		case 'success':
			alertColorClasses = 'bg-green-400 text-white ';
			alertIconClasses = 'bg-green-600';
			break;
		case 'info':
			alertColorClasses = 'bg-blue-400 text-white ';
			alertIconClasses = 'bg-blue-600';
			break;
		case 'warning':
			alertColorClasses = 'bg-orange-400 text-white ';
			alertIconClasses = 'bg-orange-600';
			break;
		case 'danger':
			alertColorClasses = 'bg-red-400 text-white ';
			alertIconClasses = 'bg-red-900';
			break;
		default:
			alertColorClasses = 'bg-gray-300 text-gray-800 ';
			alertIconClasses = 'bg-gray-600';
	}
	return (
		<div
			className={
				alertColorClasses + 'p-2 leading-none flex items-center rounded'
			}
			role="alert"
		>
			<span className={alertIconClasses + 'rounded-full mr-3'}>
				<ion-icon
					size="large"
					className="text-sm"
					name="alert-circle"
				></ion-icon>
			</span>
			<span className="font-semibold mr-2 text-left flex-auto">
				{msg}
			</span>
		</div>
	);
};

export default LMSAlert;
