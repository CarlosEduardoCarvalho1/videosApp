import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo='Videos';
  listaVideos: IFilme []=[
    {

      nome:'Army of the Dead: Invasão em Las Vegas (2021)',
      lancamento: '14/05/2021',
      duracao:'2h 28m',
      classificacao:76,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Ação', 'Terror', 'Thriller', 'Crime']



    },

    {
    nome: 'Perigo na Montanha (2018)',
    lancamento: '02/02/2018',
    duracao:'1h 34m',
    classificacao:62,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q8CJj6zMwi53yxojscnVmhMKYKb.jpg',
    generos: ['Drama', 'Ação', 'Thriller']


    },


    {
      nome: 'Esquadrão Trovão (2021)',
      lancamento: '09/04/2021',
      duracao:'1h 47m',
      classificacao:58,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aej7rR73kpAKce6XXBLeqijAwPD.jpg',
      generos: ['Ação','Aventura', 'Comédia']


      }



  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

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
          }
        }, {
          text: 'Sim Favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
          await alert.present();
}

async apresentarToast() {
  const toast = await this.toastController.create({
    message: 'Filme adicionado aos favoritos.',
    duration: 2000,
    color:'success'
  });
  toast.present();
}
}
