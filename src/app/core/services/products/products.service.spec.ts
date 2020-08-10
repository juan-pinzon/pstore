import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

import { ProductsService } from './products.service';

import { environment } from 'src/environments/environment'

fdescribe('ProductsService', () => {
	let httpClient: HttpClient
	let httpTestingController: HttpTestingController
	let service: ProductsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});

		httpClient = TestBed.inject(HttpClient)
		httpTestingController = TestBed.inject(HttpTestingController)
		service = TestBed.inject(ProductsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('tests for getAllProducts', () => {
		it('should return products', () => {
			//arrange
			const expectData = [
				{
					id: '1',
					title: 'Limones',
					price: '500',
					description: 'Del bueno',
					image: 'storage/sdfsdof/lsajd.jpg',
				},
				{
					id: '2',
					title: 'Naranja',
					price: '500',
					description: 'Del bueno',
					image: 'storage/sdfsdof/lsajd.jpg',
				},
			]
			let dataError, dataResponse
			//act
			service.getAllProducts()
				.subscribe(response => {
					dataResponse = response
				}, error => {
					dataError = error
				})

			const req = httpTestingController.expectOne(`${environment.url_api}/products`)
			req.flush(expectData)

			//assert
			expect(dataResponse.length).toEqual(2)
			expect(req.request.method).toEqual('GET')
			expect(dataError).toBeUndefined()
		})
	})
});
