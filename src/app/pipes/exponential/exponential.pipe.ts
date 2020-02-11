import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

	//transform(value: any, ...args: any[]): any {
	transform(value: number, exp: number = 2): number {
		return Math.pow(value, exp);
	}

}
