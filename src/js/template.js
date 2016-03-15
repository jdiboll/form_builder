export function info(input) {
	return `
		<div class="input">
			<input type=${user.type} id=${user.id} />
			<label for=${user.id}><span>${user.label}</span</label>
			</div>
			`}

export function info(select) {
	return `
		<div class="select">
			<label for=${user.id}></label>
			<select id=${user.id}/>
				<option value=${user.value}>${user.label}</option>
			</div>
			`}

export function info(area) {
	return `
		<div class="text">
			<textarea name=${user.type} rows="10 cols="50>${user.label}</textarea>
			</div>
			`}