
import { flsModules } from "../modules.js";
import { credCalculator } from "../script.js"
// Подключение модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		startDay: 1,
		position: 'tr',
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString("en-GB")
			input.value = value
		},
		onSelect: function (instance, date) {
			if (date.getTime() - Date.now() >= 7776000000) {
				credCalculator.depositDate = true
			} else {
				credCalculator.depositDate = false
			}
			credCalculator.setTotalPrice();
		}
	});
	flsModules.datepicker = picker;
}
