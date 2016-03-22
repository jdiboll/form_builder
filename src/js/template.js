export function data(data) {
	return `
			<label for"${data.id}">${data.label}</label>
			<input type="${data.type}" id="${data.id}">
			
			`}



export function select(select) {
	var options = select.options;

	var optionTemplates = options.map(function({label, value}) {
			return `<option value="${value}">${label}</option>`
		});

			var optionTemplateString = optionTemplates.join('');

			return `

			<label for="${select.id}">${select.label}</label>
			<select id="${select.id}">
			${optionTemplateString}
			</select>
			<br><br>
			

			`}

export function area(area) {
	return 	`
			<textarea id="${area.id}"" rows="10" cols="50">${area.label}</textarea>
			<br><br>
			</div>


			`}




