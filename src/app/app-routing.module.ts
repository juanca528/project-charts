import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VentaCuposCiudadesComponent } from "./components/venta-cupos-ciudades/venta-cupos-ciudades.component";
import { VentaCuposVendedorComponent } from "./components/venta-cupos-vendedor/venta-cupos-vendedor.component";
import { CitasEspecialidadComponent } from "./components/citas-especialidad/citas-especialidad.component";
import { CitasEspecialistaComponent } from "./components/citas-especialista/citas-especialista.component";
import { CitasExamenComponent } from "./components/citas-examen/citas-examen.component";
import { CitasInstitucionComponent } from "./components/citas-institucion/citas-institucion.component";
import { CitasOtrosComponent } from './components/citas-otros/citas-otros.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { QuejaEspecialistaComponent } from './components/queja-especialista/queja-especialista.component';
import { QuejaInstitucionComponent } from './components/queja-institucion/queja-institucion.component';

const routes: Routes = [
  { path: "venta-cupo-ciudad", component: VentaCuposCiudadesComponent },
  { path: "venta-cupo-vendedor", component: VentaCuposVendedorComponent },
  { path: "citas-especialidad", component: CitasEspecialidadComponent },
  { path: "citas-especialista", component: CitasEspecialistaComponent },
  { path: "citas-examen", component: CitasExamenComponent },
  { path: "citas-institucion", component: CitasInstitucionComponent },
  { path: "citas-otros", component: CitasOtrosComponent },
  { path: "servicio-solicitud", component: SolicitudComponent },
  { path: "queja-especialista", component: QuejaEspecialistaComponent},
  { path: "queja-institucion", component: QuejaInstitucionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
