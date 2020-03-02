import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CitaService {
  ENDPOINT = "http://192.168.0.168:8000";
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getAllAppointmentsBySpecialty(query): Observable<any> {
    const BODY = {
      genero: query.genero,
      estrato: query.estrato,
      edad: query.edad,
      ingreso: query.ingreso,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin,
      criterio: query.criterio
    };
    return this.http.post(this.ENDPOINT + "/cita-especialidad/", BODY, {
      headers: this.httpHeaders
    });
  }

  getAllSpecialistAppointments(query): Observable<any> {
    const BODY = {
      genero: query.genero,
      estrato: query.estrato,
      edad: query.edad,
      ingreso: query.ingreso,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin,
      criterio: query.criterio
    };
    return this.http.post(this.ENDPOINT + "/cita-especialista/", BODY, {
      headers: this.httpHeaders
    });
  }

  getAllExamAppointments(query): Observable<any> {
    const BODY = {
      genero: query.genero,
      estrato: query.estrato,
      edad: query.edad,
      ingreso: query.ingreso,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin,
      criterio: query.criterio
    };
    return this.http.post(this.ENDPOINT + "/cita-examen/", BODY, {
      headers: this.httpHeaders
    });
  }

  getAllOtherService(query): Observable<any> {
    const BODY = {
      genero: query.genero,
      estrato: query.estrato,
      edad: query.edad,
      ingreso: query.ingreso,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin,
      criterio: query.criterio
    };
    return this.http.post(this.ENDPOINT + "/otro-servicio/", BODY, {
      headers: this.httpHeaders
    });
  }

  getAllInstitutionAppointments(query): Observable<any> {
    const BODY = {
      genero: query.genero,
      estrato: query.estrato,
      edad: query.edad,
      ingreso: query.ingreso,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin,
      criterio: query.criterio
    };
    return this.http.post(this.ENDPOINT + "/cita-institucion/", BODY, {
      headers: this.httpHeaders
    });
  }
  getAllInstitutions(): Observable<any> {
    return this.http.get(this.ENDPOINT + "/institucion/", {
      headers: this.httpHeaders
    });
  }

  getAllOtherServicesByInstitution(query): Observable<any> {
    const BODY = {
      institucion: query.institucion,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin
    };
    return this.http.post(this.ENDPOINT + "/otro-servicio-institucion/", BODY, {
      headers: this.httpHeaders
    });
  }

}
