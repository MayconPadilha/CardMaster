import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../interface/pessoa.interface';
import { LocalStorageService } from '../../service/local-storage.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faCakeCandles, faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  faCakeCandles = faCakeCandles;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  isFlipped = false;

  dadosPessoa: Pessoa = {
    nome: '',
    idade: 0,
    telefone: '',
    email: '',
    endereco: '',
    numero: 0,
    bairro: '',
    cidade: '',
  };

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.dadosPessoa = this.localStorageService.getItem('dadosPessoa');
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
