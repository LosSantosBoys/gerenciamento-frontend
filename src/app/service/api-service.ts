import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FuncionarioRequest } from "../models/funcionario/funcionario-model";
import { FilmeRequest } from "../models/filme/filme-model";
import { LoginDto } from "../models/autenticacao/login-request";
import { LoginResponse } from "../models/autenticacao/login-response";
import { AuthenticationService } from "../components/auth-service/auth-service";
import { FuncionarioAtualizarRequest } from "../models/funcionario/funcionario-atualizar-request";

@Injectable()
export class ApiService {
    private url = 'http://localhost:8080/api/v1/';

    constructor(private http: HttpClient,
        private authService: AuthenticationService) { 
    }

    //EP Funcionarios
    getData(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    postData(body: FuncionarioRequest): Observable<any> {
        return this.http.post<any>(this.url + 'usuario/funcionario', body);
    }

    addFuncionario(body: FuncionarioRequest): Observable<any> {
        const headers = this.authService.getToken();
        return this.http.post<any>(this.url + 'usuario/funcionario', body, { headers });
    }
    
    buscarFuncionarios(page: number, pageSize: number, nome?: string, documento?: string, cargo?: string): Observable<any> {
        let params = new HttpParams()
          .set('pagina', page.toString())
          .set('tamanhoPagina', pageSize.toString());
    
        if (nome) {
          params = params.set('nome', nome);
        }
        if (documento) {
          params = params.set('documento', documento);
        }
        if (cargo) {
          params = params.set('cargo', cargo);
        }
    
        const headers = this.authService.getToken();
    
        return this.http.get<any[]>(this.url + 'usuario/funcionarios', { headers, params });
      }

      inativarFuncionario(documento: string){
        const headers = this.authService.getToken();
        return this.http.put<any>(this.url + `usuario/funcionario/inativar/${documento}`, null, { headers });
      }

      buscarFuncionarioPorDocumento(documento: string){
        const headers = this.authService.getToken();
        return this.http.get<any>(this.url + `usuario/funcionario/${documento}`, { headers });
      }

      atualizarFuncionario(documento: string, body: FuncionarioAtualizarRequest){
        const headers = this.authService.getToken();
        let params = new HttpParams()
          .set('documento', documento)

        return this.http.put<any>(this.url + `usuario/funcionario`, body, { params, headers })
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