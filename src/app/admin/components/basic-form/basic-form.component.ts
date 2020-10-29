import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-basic-form',
	templateUrl: './basic-form.component.html',
	styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

	form: FormGroup
	constructor(
		private formBuilder: FormBuilder
	) {
		this.buildForm()
	}

	ngOnInit(): void {
		this.nameField.valueChanges
			.subscribe(val => {
			console.log(val)
		})
	}

	save(event: Event): void {
		this.form.markAllAsTouched()
		if (this.form.invalid) { return }
		console.log(this.form.value)
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			fullName: this.formBuilder.group({
				name: ['', [Validators.required, Validators.maxLength(10)]],
				lastName: ['', [Validators.required]]
			}),
			//name: ['', [Validators.required, Validators.maxLength(10)]],
			email: ['', [Validators.required, Validators.email]],
			phone: [''],
			color: ['#ff6f00'],
			date: [''],
			age: [25, [Validators.min(18), Validators.max(100)]],
			category: [1],
			tag: [''],
			agree: [false, Validators.requiredTrue],
			gender: [''],
			zone: ['']
		})
	}

	get nameField() {
		return this.form.get('fullName.name')
	}

	get lastNameField() {
		return this.form.get('fullName.lastName')
	}

	get emailField() {
		return this.form.get('email')
	}

	get phoneField() {
		return this.form.get('phone')
	}

	get colorField() {
		return this.form.get('color')
	}

	get dateField() {
		return this.form.get('date')
	}

	get ageField() {
		return this.form.get('age')
	}

	get categoryField() {
		return this.form.get('category')
	}

	get tagField() {
		return this.form.get('tag')
	}

	get agreeField() {
		return this.form.get('agree')
	}

	get genderField() {
		return this.form.get('gender')
	}

	get zoneField() {
		return this.form.get('zone')
	}

	getNameValue() {
		console.log(this.nameField.value)
	}

	get isNameFieldValid() {
		return this.nameField.touched && this.nameField.valid
	}

	get isNameFieldInvalid() {
		return this.nameField.touched && this.nameField.invalid
	}

}
