import { Component } from '@angular/core';
import { ISeries } from '../models/ISeries.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Series';



  listaSeries: ISeries[]=[
    {
      nome: 'Loki (2021)',
  
      duracao: '52m',
      classificacao: 81,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy'],
    
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
      generos: ['Drama', 'Sci-Fi & Fantasy'],
    
    },
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
  
      duracao: '50m',
      classificacao: 78,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure','Drama','War & Politics'],
        
    
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


  constructor() {}

}
