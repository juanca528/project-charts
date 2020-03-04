import { Injectable, Query } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SolicitudService {
  ENDPOINT = "http://192.168.0.165:8000";
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.http.get(this.ENDPOINT + "/ciudad/", {
      headers: this.httpHeaders
    });
  }

  getAllServiceRequest(query): Observable<any> {
    const BODY = {
      ciudad: query.ciudad,
      tipo_servicio: query.tipo_servicio,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin
    };
    return this.http.post(this.ENDPOINT + "/solicitud-servicio/", BODY, {
      headers: this.httpHeaders
    });
  }
}
