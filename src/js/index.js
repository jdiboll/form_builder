// Javascript Entry Point
import $ from 'jquery';

import items from './items';

import { input, select, area } from './template';

var $app = $('.app');

items.forEach(function(item) {
	if (item.type === "textarea") {
		template === area;
	} else if (item.type === "select") {
		template === select;
	} else {
		template === input;
	}

	var form = template(item);
	$app.append ( form );
});




