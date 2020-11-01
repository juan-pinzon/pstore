import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { Category } from '@core/models/category.model'
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	categories: Category[] = []
	categoriesCollection: AngularFirestoreCollection<Category>

	constructor(
		private httpClient: HttpClient,
		private afs: AngularFirestore,
		private storage: AngularFireStorage
	) {
		this.categoriesCollection = this.afs.collection<Category>('categories')
	}

	createCategory(category: Category) {
		const id = this.afs.createId()
		return this.categoriesCollection.doc(id).set(category)
	}

	uploadImage(image: File, path: string) {
		const ref = this.storage.ref(path)
		const task = this.storage.upload(path, image)
		return { task, ref }
	}
}
