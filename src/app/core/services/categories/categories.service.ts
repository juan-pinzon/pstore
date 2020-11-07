import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Category } from '@core/models/category.model'
import { AngularFireStorage } from '@angular/fire/storage';
import { first, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	private categoriesCollection: AngularFirestoreCollection<Category>

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

	getCategories() {
		return this.categoriesCollection.valueChanges({ idField: 'id' })
			.pipe(
				map(response => response as Category[])
			)
	}

	getCategory(id: string) {
		return this.categoriesCollection.doc(id).valueChanges()
			.pipe(first())
			.pipe(map((response: Category) => {
				response.id = id
				return response
			}))
	}

	updateCategory(id: string, data: Partial<Category>) {
		return this.categoriesCollection.doc(id).update(data)
	}

	checkAvailabilityCategory(name: string) {
		return this.afs.collection<Category>('categories', ref => ref.where('name', '==', name))
			.valueChanges()
			.pipe(
				first(),
				map(res => {
					if (res.length !== 0) {
						return { not_available: true }
					}
					return null
				})
			)
	}
}
