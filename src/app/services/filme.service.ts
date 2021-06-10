import { IListaFilmes } from './../models/IFilmeAPI.model';
import { Injectable, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {


  lingua = 'pt-BR';
  regiao = 'BR';



  private apiURL = 'https://api.themoviedb.org/3/';


  private key = '?api_key=1445e27d12df51d144718eb4cbe6b0f4';




  constructor(private http:  HttpClient, public toastController: ToastController) { }


  buscarFilmes(busca: string): Observable<IListaFilmes>{

     const url =`${this.apiURL}search/movie${this.key}&language=${this.lingua}$region=${this.regiao}$query=${busca}`;


   return this.http.get<IListaFilmes>(url).pipe(

     map(retorno=>retorno),
     catchError(erro=> this.exibirErro(erro))
   );
  }
  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color:'danger',
      position:'middle'
    });
    toast.present();
    return null;
  }

}
