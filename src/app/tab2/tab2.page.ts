import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISeries } from '../models/ISeries.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo:'Series';



  listaSeries: ISeries[]=[
    {
      nome: 'Loki (2021)',
  
      duracao: '52m',
      classificacao: 81,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Drama', 'Sci-Fi','Fantasy'],
    
    },

    {
      nome: 'The Good Doctor: O Bom Doutor (2017)',
  
      duracao: '43m',
      classificacao: 86,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Ação'],
    
    },

    {
      nome: 'The Flash (2014)',
  
      duracao: '44m',
      classificacao: 77,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi ', 'Fantasy'],
    
    },
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
  
      duracao: '50m',
      classificacao: 78,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: ['Sci-Fi','Fantasy', 'Action','Adventure','Drama','War' ,'Politics'],
        
    
    },
    {
      nome: 'Greys Anatomy (2005)',
  
      duracao: '43m',
      classificacao: 82,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      generos: ['Drama'],
    
    },

  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}


    exibirSerie(serie: ISeries) {

      this.dadosService.guardarDados('Series', serie);
      
  
      this.route.navigateByUrl('/dados-serie');
    }

    async exibirAlertaFavorito() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Deseja Realmente Favoritar a Série!!!',
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
        message: 'Serie adicionado aos favoritos.',
        duration: 2000,
        color: 'success',
      });
      toast.present();

}
}