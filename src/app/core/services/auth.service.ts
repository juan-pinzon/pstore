import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private afAuth: AngularFireAuth
	) { }

	createUser(email: string, password: string) {
		return this.afAuth.createUserWithEmailAndPassword(email, password)
	}
}
