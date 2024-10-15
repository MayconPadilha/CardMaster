import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../interface/pessoa.interface';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  dadosPessoa: Pessoa = {
    nome: '',
    idade: '',
    telefone: '',
    email: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: ''
  };

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.dadosPessoa = this.localStorageService.getItem('dadosPessoa');
    console.log('Dados carregados do localStorage:', this.dadosPessoa);
  }
}
