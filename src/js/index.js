// Javascript Entry Point
import $ from 'jquery';

import items from './items';

import { data, select, area } from './template';

var $form = $('form');

items.forEach(function(element) {
	if (element.type === "textarea") {
		console.log($form.append(area(element)))
	} else if (element.type === "select") {
		
	}
	// var html = template(element);

});

// $form.append(html);




