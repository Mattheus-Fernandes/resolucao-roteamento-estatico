import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    loadChildren: () => import('./components/start/start-routing.routes').then(m => m.StartRoutingModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./components/general/general-routing.routes').then(m => m.GenerealRoutingModule)
  },
  {
    path: 'transacoes',
    loadChildren: () => import('./components/transacoes/transacoes-routing.routes').then(m => m.TransacoesRoutingModule)
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
