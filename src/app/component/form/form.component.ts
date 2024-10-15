import { Component } from '@angular/core';
import { Pessoa } from '../../interface/pessoa.interface';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  step: number = 1;

  dadosPessoa: Pessoa = {
    nome: '',
    idade: '',
    telefone: '',
    email: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
  };

  constructor(private localStorageService: LocalStorageService) { }

  nextStep() {
    this.step++;
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  enviarFormulario() {

    this.dadosPessoa = {
      nome: this.dadosPessoa.nome,
      idade: this.dadosPessoa.idade,
      telefone: this.dadosPessoa.telefone,
      email: this.dadosPessoa.email,
      endereco: this.dadosPessoa.endereco,
      numero: this.dadosPessoa.numero,
      bairro: this.dadosPessoa.bairro,
      cidade: this.dadosPessoa.cidade
    };

    localStorage.setItem('dadosPessoa', JSON.stringify(this.dadosPessoa));

    console.log(localStorage.getItem('dadosPessoa'));

  }

}
