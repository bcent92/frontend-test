import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { config } from '@config/config';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private options = { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' as 'body' };

	private API_URL;

	constructor(private httpClient: HttpClient) {
		this.API_URL = config.apiBaseUrl;
	}

	public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {

		let options = this.options;
		options['params'] = params;
		
		return this.httpClient.get(this.API_URL + path, options).pipe(
			retry(2),
			catchError(this.formatErrors));
	}

	public put(path: string, body: object = {}): Observable<any> {

		return this.httpClient
			.put(this.API_URL + path, JSON.stringify(body), this.options)
			.pipe(catchError(this.formatErrors));
	}

	public post(path: string, body: object = {}): Observable<any> {

		return this.httpClient
			.post(this.API_URL + path, JSON.stringify(body), this.options)
			.pipe(catchError(this.formatErrors));
	}

	public delete(path: string): Observable<any> {
		return this.httpClient.delete(this.API_URL + path, this.options).pipe(catchError(this.formatErrors));
	}

	public formatErrors(error: any): Observable<any> {
		console.log(error);
		return throwError(error.error);
	}
}
