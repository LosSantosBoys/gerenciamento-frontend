import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FuncionarioRequest } from "../models/funcionario/funcionario-model";
import { FilmeRequest } from "../models/filme/filme-model";

@Injectable()
export class ApiService {
    private url = 'http://localhost:8080/api/v1/';

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    postData(body: FuncionarioRequest): Observable<any> {
        return this.http.post<any>(this.url + 'usuario/funcionario', body);
    }

    // EP Filmes

    getAllMovie(): Observable<any> {
        return this.http.get<any>(this.url + 'filmes');
    }

    addMovie(body: FilmeRequest): Observable<any> {
        return this.http.post<any>(this.url + 'filmes', body);
    }

    getMovie(title: string): Observable<any> {
        return this.http.get<any>(this.url + '/filmes/' + title);
    }
}