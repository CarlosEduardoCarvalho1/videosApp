import { Component, OnInit } from '@angular/core';
import { ISeries } from '../models/ISeries.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {


  serie : ISeries;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {

    this.serie = this.dadosService.pegarDados1('serie');
    console.log('serie enviada', this.serie);
  }

}
