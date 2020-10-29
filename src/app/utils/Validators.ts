import { AbstractControl } from '@angular/forms'

export const isPriceValidator = (control: AbstractControl) => {
	const value = control.value
	if (value > 10000) {
		return {price_invalid: true}
	}
	return null
}

function isNumber(value: string) {
	return !isNaN(parseInt(value, 10))
}

export const passwordValidator = (control: AbstractControl) => {
	const value = control.value
	const isNum = value.split('').find(isNumber)
	if (isNum !== undefined) {
		return {invalid_password: true}
	}
	return null
}
