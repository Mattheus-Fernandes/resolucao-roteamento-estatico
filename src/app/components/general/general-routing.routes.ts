import { RouterModule, Routes } from "@angular/router";
import { GeneralComponent } from "./general.component";
import { NgModule } from "@angular/core";
import { BasicComponent } from "./components/basic/basic.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AddressComponent } from "./components/address/address.component";

const generalRoutes: Routes = [
    {
        path: '', component: GeneralComponent, children: [
            {
                path: '', 
                redirectTo: 'basic',
                pathMatch: 'full'
            },
            {
                path: 'basic', component: BasicComponent, title: 'Básico'
            },
            {
                path: 'contact', component: ContactComponent, title: 'Contato'
            }, 
            {
                path: 'address', component: AddressComponent, title: 'Endereço'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(generalRoutes)],
    exports: [RouterModule]
})

export class GenerealRoutingModule {}