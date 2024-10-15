import { Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { CardComponent } from './component/card/card.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
];
