import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { ViewComponent } from './employee/view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './post/update/update.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'employee/:id', component:ViewComponent},
  {path: '**', component:NotFoundComponent},
  {path: 'employees/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
