import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
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

  getSubFromToken(): string | null {
    const userStr = localStorage.getItem('currentUser');

    // Verificar se o usuário está logado
    if (userStr) {
      const user = JSON.parse(userStr);

      if (user && user.token) {
        try {
          const decodedToken: any = jwtDecode(user.token);
          
          if (decodedToken.sub) {
            return decodedToken.sub;
          }
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
        }
      }
    }

    return null;
  }

  getNameFromToken(): string | null {
    const userStr = localStorage.getItem('currentUser');

    // Verificar se o usuário está logado
    if (userStr) {
      const user = JSON.parse(userStr);

      if (user && user.token) {
        try {
          const decodedToken: any = jwtDecode(user.token);
          
          if (decodedToken.nome) {
            return decodedToken.nome;
          }
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
        }
      }
    }

    return null;
  }

  getUserRoles(): string[] {
    const userStr = localStorage.getItem('currentUser');
    const roles: string[] = [];
  
    // Verificar se o usuário está logado
    if (userStr) {
      const user = JSON.parse(userStr);
  
      if (user && user.token) {
        try {
          const decodedToken: any = jwtDecode(user.token);
  
          if (decodedToken.role) { 
            roles.push(decodedToken.role); 
          }
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
        }
      }
    }
  
    return roles;
  }
  
  
  getToken(): HttpHeaders{
    const userStr = localStorage.getItem('currentUser');
    let user = null;
    if (userStr) {
      user = JSON.parse(userStr);

      if (user && user.token) {
        try {
          if (user) {
            return new HttpHeaders({
              'Authorization': `${user.token}`
            });
          }          
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
        }
      }
    }

    return new HttpHeaders();
  }


  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
