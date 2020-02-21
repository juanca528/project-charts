import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { GoogleChartsModule } from "angular-google-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { LoginComponent } from "./login/login.component";
import { CookieService } from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { VentaCuposCiudadesComponent } from './components/venta-cupos-ciudades/venta-cupos-ciudades.component';
import { VentaCuposVendedorComponent } from './components/venta-cupos-vendedor/venta-cupos-vendedor.component';
import { CitasEspecialidadComponent } from './components/citas-especialidad/citas-especialidad.component';
import { CitasEspecialistaComponent } from './components/citas-especialista/citas-especialista.component';
import { CitasExamenComponent } from './components/citas-examen/citas-examen.component';
import { CitasInstitucionComponent } from './components/citas-institucion/citas-institucion.component';
import { CitasOtrosComponent } from './components/citas-otros/citas-otros.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { QuejaEspecialistaComponent } from './components/queja-especialista/queja-especialista.component';
import { QuejaInstitucionComponent } from './components/queja-institucion/queja-institucion.component';

const appRoutes: Routes = [{ path: "login", component: LoginComponent }];
@NgModule({
  declarations: [AppComponent, LoginComponent, VentaCuposCiudadesComponent, VentaCuposVendedorComponent, CitasEspecialidadComponent, CitasEspecialistaComponent, CitasExamenComponent, CitasInstitucionComponent, CitasOtrosComponent, SolicitudComponent, QuejaEspecialistaComponent, QuejaInstitucionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
