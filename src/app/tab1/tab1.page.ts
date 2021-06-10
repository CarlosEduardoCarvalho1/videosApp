import { IFilmeApi, IListaFilmes } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'Army of the Dead: Invasão em Las Vegas (2021)',
      lancamento: '14/05/2021',
      duracao: '2h 28m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Ação', 'Terror', 'Thriller', 'Crime'],
      pagina: '/army',
    },

    {
      nome: 'Perigo na Montanha (2018)',
      lancamento: '02/02/2018',
      duracao: '1h 34m',
      classificacao: 62,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q8CJj6zMwi53yxojscnVmhMKYKb.jpg',
      generos: ['Drama', 'Ação', 'Thriller'],
      pagina: '/perigo',
    },

    {
      nome: 'Esquadrão Trovão (2021)',
      lancamento: '09/04/2021',
      duracao: '1h 47m',
      classificacao: 58,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aej7rR73kpAKce6XXBLeqijAwPD.jpg',
      generos: ['Ação', 'Aventura', 'Comédia'],
    },

    {
      nome: 'O Curioso Caso de Benjamin Button (2008)',
      lancamento: '25/12/2008',
      duracao: '2h 46m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7fNRILGSHFzZ9BLUgkraGEHRaBb.jpg',
      generos: ['Drama', 'Fantasia', 'Romance'],
    },

    {
      nome: 'Prenda-me Se For Capaz (2002)',
      lancamento: '24/02/2003',
      duracao: '2h 21m',
      classificacao: 79,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pSaqcj3pwTKt34cyn6NrBE7V4eH.jpg',
      generos: ['Drama', 'Crime'],
    },


  ];

  listaFilmes: IListaFilmes;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService:  FilmeService,
    public route: Router
  ) { }

    exibirFilme(filme: IFilme){

    this.dadosService.guardarDados('filme', filme);

    this.route.navigateByUrl('/dados-filme');
    }

  buscarFilmes(evento: any){

          console.log(evento.target.value);
          const busca = evento.target.value;

          if(busca && busca.trim() !== ''){


           this.filmeService.buscarFilmes(busca).subscribe(dados=>{

             console.log(dados);
             this.listaFilmes = dados;





           });


          }


  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja Realmente Favoritar o Filme!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sim Favoritar',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
