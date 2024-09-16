import {Routes} from '@angular/router';
import {ListagemLogsComponent} from "./pages/listagem-logs/listagem-logs.component";
import {ViewComponent} from "./pages/view/view.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: ListagemLogsComponent},
  {path: 'view/:id', component: ViewComponent},
];
