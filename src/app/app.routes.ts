import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: "", redirectTo: "admin", pathMatch: "full"},
    { path: "admin", component:AdminComponent}
];
@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class Approutes {}
