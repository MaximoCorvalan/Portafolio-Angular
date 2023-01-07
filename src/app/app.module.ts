import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { FomacionComponent } from './components/fomacion/fomacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modales/login/login.component';
import { FormControl } from '@angular/forms';
import { ExperienciaComponent } from './modales/experiencia/experiencia.component';
import { EducarComponent } from './modales/educar/educar.component';
import { IdiomaComponent } from './modales/idioma/idioma.component';
import { MiinformacionComponent } from './modales/miinformacion/miinformacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './modales/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciaLaboralComponent,
    FomacionComponent,
    SkillsComponent,
    IdiomasComponent,
    LoginComponent,
    ExperienciaComponent,
    EducarComponent,
    IdiomaComponent,
    MiinformacionComponent,
    ProyectoComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
