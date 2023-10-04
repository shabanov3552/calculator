// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import { credCalculator } from '../script.js';


export function rangeInit(slider, type) {

	noUiSlider.create(slider, {
		start: 5,
		connect: 'lower',
		step: 1,
		range: {
			'min': [+slider.dataset.min],
			'max': [+slider.dataset.max]
		},

	});
	slider.noUiSlider.on('change', function (values, handle, unencoded, tap, positions, noUiSlider) {
		if (type == 'period') {
			credCalculator.paymentPeriod = Math.floor(values[0])
		}
		if (type == 'borrow') {
			credCalculator.borrowAmount = values[0]
		}
		credCalculator.setTotalPrice()
	})
}
rangeInit(document.querySelector('#paymentPeriodRange'), 'period');
rangeInit(document.querySelector('#borrowRange'), 'borrow');