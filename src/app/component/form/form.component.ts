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

  constructor(private localStorageService: LocalStorageService) {}

  private formBuilder = inject(FormBuilder);
  protected form = this.formBuilder.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    idade: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    telefone: ['',[Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{5}-\d{4}|\(?\d{2}\)?\s?\d{4}-?\d{4}$/),],],
    email: ['', [Validators.required, Validators.email]],
    endereco: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    numero: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    bairro: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    cidade: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
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
    window.location.href = '/card';
  }
}
