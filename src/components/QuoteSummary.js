import React from 'react';

function QuoteSummary({ quote }) {
	const { firstName, address1, address2, quoteRef, startDate } = quote;

	const startDateObject = new Date(startDate);

	const formattedStartDate = startDateObject.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div>
			<h1>Hey {firstName},</h1>
			<p>
				Here is your quote for Royal & Sun Alliance, {address1}, {address2}
			</p>
			<p>Quote reference: {quoteRef}</p>
			<p>Covers start on {formattedStartDate}.</p>
		</div>
	);
}

export default QuoteSummary;
