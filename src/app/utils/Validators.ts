import { AbstractControl } from '@angular/forms'

export const isPriceValidator = (control: AbstractControl) => {
	const value = control.value
	console.log(value)
	if (value > 10000) {
		return {price_invalid: true}
	}
	return null
}
