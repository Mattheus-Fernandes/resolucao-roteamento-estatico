import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { GeneralComponent } from './components/general/general.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { CardDebitComponent } from './components/transacoes/components/card-debit/card-debit.component';
import { CardCreditComponent } from './components/transacoes/components/card-credit/card-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GeneralComponent,
    TransacoesComponent,
    PaginaNaoEncontradaComponent,
    BasicComponent,
    ContactComponent,
    AddressComponent,
    CardDebitComponent,
    CardCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
