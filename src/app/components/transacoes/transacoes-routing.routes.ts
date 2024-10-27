import { Router, RouterModule, Routes } from "@angular/router";
import { TransacoesComponent } from "./transacoes.component";
import { NgModule } from "@angular/core";
import { CardDebitComponent } from "./components/card-debit/card-debit.component";
import { CardCreditComponent } from "./components/card-credit/card-credit.component";

const transacoesRoutes: Routes = [
    {
        path: '', component: TransacoesComponent, children: [
            {
                path: '',
                redirectTo: 'credit',
                pathMatch: 'full'
            },
            {
                path: 'credit', component: CardCreditComponent, title: 'Crédito'
            },
            {
                path: 'debit', component: CardDebitComponent, title: 'Débito'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(transacoesRoutes)],
    exports: [RouterModule]
})

export class TransacoesRoutingModule {}