import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FuncionarioRequest } from "../models/funcionario/funcionario-model";
import { FilmeRequest } from "../models/filme/filme-model";
import { LoginDto } from "../models/autenticacao/login-request";
import { LoginResponse } from "../models/autenticacao/login-response";

@Injectable()
export class ApiService {
    private url = 'http://localhost:8080/api/v1/';

    constructor(private http: HttpClient) { }

    //EP Funcionarios
    getData(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    postData(body: FuncionarioRequest): Observable<any> {
        return this.http.post<any>(this.url + 'usuario/funcionario', body);
    }

    addFuncionario(body: FuncionarioRequest): Observable<any> {
        return this.http.post<any>(this.url + 'usuario/funcionario', body);
    }

    // EP Autenticacao

    efetuarLogin(body: LoginDto): Observable<any> {
        const headers = {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        };
    
        return this.http.post<any>(this.url + 'login', body, { headers });
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