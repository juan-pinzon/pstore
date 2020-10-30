import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { matchPasswordValidator } from '../../../utils/Validators'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	form: FormGroup
	showLoading = false

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {
		this.buildForm()
	}

	ngOnInit(): void {
	}

	register(event: Event) {
		event.preventDefault()
		if (this.form.valid) {
			this.showLoading = true
			this.form.disable()
			const value = this.form.value
			this.authService.createUser(value.email, value.password)
				.then(response => {
					console.log(response)
					this.router.navigate(['/auth/login'])
				})
				.catch(console.log)
				.finally(() => {
					this.form.enable()
					this.showLoading = false
				})
		}
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(7)]],
			confirmPassword: ['', Validators.required],
			type: ['company', Validators.required],
			companyName: ['', Validators.required]
		}, {
			validators: matchPasswordValidator
		})

		this.typeField.valueChanges
			.subscribe(value => {
				if (value === 'company') {
					this.companyNameField.setValidators([Validators.required])
				} else {
					this.companyNameField.setValidators(null)
				}
				this.companyNameField.updateValueAndValidity()
			})
	}

	get emailField() {
		return this.form.get('email')
	}

	get passwordField() {
		return this.form.get('password')
	}

	get confirmPassword() {
		return this.form.get('confirmPassword')
	}

	get typeField() {
		return this.form.get('type')
	}

	get companyNameField() {
		return this.form.get('companyName')
	}

}
