import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  step: number = 1;

  constructor(private localStorageService: LocalStorageService) { }

  private formBuilder = inject(FormBuilder);
  protected form = this.formBuilder.group({
    nome: ['', Validators.required],
    idade: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    endereco: ['', Validators.required],
    numero: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
  });

  nextStep() {
    this.step++;
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onClick() {
    this.localStorageService.setItem('dadosPessoa', this.form.value);
  }
}
