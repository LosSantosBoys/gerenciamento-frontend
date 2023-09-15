import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isTokenExpired(): boolean {
    const userStr = localStorage.getItem('currentUser');
  
    //Usuário não logado
    if (!userStr) {
      return true;
    }

    const user = JSON.parse(userStr);

    //Token não encontrado
    if (!user || !user.token) {
      this.clearToken(); 
      return true; 
    }

    try {
      const decodedToken: any = jwtDecode(user.token);

      if (typeof decodedToken.exp === 'number') {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        
        //Token expirado
        if (currentTimeInSeconds >= decodedToken.exp) {
          this.clearToken();
          return true;
        }
        
        //Token válido
        return false;
      }

      //Se exp não for um número, token expirado
      this.clearToken(); 
      return true;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      this.clearToken();
      //Erro ao decodificar token, considerar expirado
      return true;
    }
  }

  private clearToken() {
    localStorage.removeItem('currentUser');
  }

}
