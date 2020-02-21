import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuejaService {
  ENDPOINT = "http://192.168.0.149:8000";
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  constructor(private http: HttpClient) {}

  getAllSpecialist(): Observable<any> {
    return this.http.get(this.ENDPOINT + "/especialista/", {
      headers: this.httpHeaders
    });
  }

  getAllSpecialistComplain(query): Observable<any> {
    const BODY = {
      especialista: query.especialista,
      calificacion: query.calificacion,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin
    };
    return this.http.post(this.ENDPOINT + "/queja-especialista/", BODY, {
      headers: this.httpHeaders
    });
  }

  getAllInstitutionComplain(query): Observable<any> {
    const BODY = {
      institucion: query.institucion,
      calificacion: query.calificacion,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin
    };
    return this.http.post(this.ENDPOINT + "/queja-institucion/", BODY, {
      headers: this.httpHeaders
    });
  }
}
