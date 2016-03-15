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
			<option value="EN">English</option>
			<option value="FR">French</option>
			<option value="SR">Spanish</option>
			<option value="CH">Chinese</option>
			<option value="JP">Japanese</option>


			</div>
			`}

export function info(area) {
	return `
		<div class="text">
			<textarea name=${user.type} rows="10 cols="50>${user.label}</textarea>
			</div>
			`}