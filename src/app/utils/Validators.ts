import { AbstractControl } from '@angular/forms'
import {CategoriesService} from '@core/services/categories/categories.service';

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

export const matchPasswordValidator = (control: AbstractControl) => {
	const password = control.get('password').value
	const confirmPassword = control.get('confirmPassword').value

	if (password !== confirmPassword) {
		console.log(password, confirmPassword)
		return { match_password: true }
	}

	return null
}

export const checkAvailabilityCategoryValidator = (categoriesService: CategoriesService) => {
	return (control: AbstractControl) => {
		const value = control.value
		return categoriesService.checkAvailabilityCategory(value)
	}
}
