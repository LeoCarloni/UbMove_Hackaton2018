import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RunComponent } from './run/run.component';
import { RunDetailComponent } from './run-detail/run-detail.component';
import { RunCreateComponent } from './run-create/run-create.component';
import { RunEditComponent } from './run-edit/run-edit.component';

const appRoutes: Routes = [
  {
    path: 'runs',
    component: RunComponent,
    data: { title: 'Run List' }
  },
  {
    path: 'run-details/:id',
    component: RunDetailComponent,
    data: { title: 'Run Details' }
  },
  {
    path: 'run-create',
    component: RunCreateComponent,
    data: { title: 'Create Run' }
  },
  {
    path: 'run-edit/:id',
    component: RunEditComponent,
    data: { title: 'Edit Run' }
  },
  { path: '',
    redirectTo: '/runs',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RunComponent,
    RunDetailComponent,
    RunCreateComponent,
    RunEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
