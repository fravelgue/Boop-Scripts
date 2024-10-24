/**
	{
		"api":1,
		"name":"Excel2Markdown",
		"description":"Convert Excel's spreadsheet to Markdown",
		"author":"Fran",
		"icon":"fingerprint",
		"tags":"spreadsheet,markdown,excel"
	}
**/

function main(state) {
	//https://github.com/thisdavej/copy-excel-paste-markdown/blob/master/script.js
	//https://chatgpt.com/c/671a5fbe-81a8-800b-9c9d-9f49c8cd0409
	const input = state.text.replace(/(?:[\n\u0085\u2028\u2029]|\r\n?)$/, '');
	const rows = input.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map(row => row.split('\t'));
	const columnCount = Math.max(...rows.map(row => row.length));

	// Add Markdown table header
	let markdown = '';
	rows.forEach((row, rowIndex) => {
		// Ensure all rows have the same number of columns
		while (row.length < columnCount) {
			row.push('');
		}
		markdown += '| ' + row.join(' | ') + ' |\n';

		if (rowIndex === 0) {
			markdown += '| ' + '--- |'.repeat(columnCount) + '\n';
		}
	});

	state.fullText = markdown;
}
