import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    // TODO: Adicionar URL da API
    private url = 'https://jsonplaceholder.typicode.com/posts/1';

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}