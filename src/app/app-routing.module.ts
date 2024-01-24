import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstExComponent } from './first-ex/first-ex.component';
import { SecondExComponent } from './second-ex/second-ex.component';
import { ThirdExComponent } from './third-ex/third-ex.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: 'project1', component: FirstExComponent },
  { path: 'project2', component: SecondExComponent },
  { path: 'project3', component: TransactionsComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent },
  { path: '', redirectTo: '/project1', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
