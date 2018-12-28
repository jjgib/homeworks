import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PostListComponent } from './post-list/post-list.component';
import {HttpModule} from '@angular/http';

const appRoutes:Routes = [
  {path:'',component:AppComponent},
  {path:'users',component:UsersListComponent},
  {path:'blog',component:PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    UsersListComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,MainComponent]
})
export class AppModule { }
