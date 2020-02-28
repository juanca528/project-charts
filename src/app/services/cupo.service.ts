import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CupoCiudad } from "../interfaces/cupo-ciudad";

@Injectable({
  providedIn: "root"
})
export class CupoService {
  ENDPOINT = "http://192.168.0.164:8000";
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  //Microservicio que consulta las afiliaciones por ciudad.
  getAllMemberShipByCity(query): Observable<any> {
    const BODY = {
      sede: query.sede,
      fecha_ini: query.fecha_ini,
      fecha_fin: query.fecha_fin
    };
    return this.http.post(
      this.ENDPOINT + "/afiliacion/ciudad/",
      BODY,
      {
        headers: this.httpHeaders
      }
      );
    }
    
    //Microservicio que consulta las afiliaciones por vendedor.
    getAllMemberShipBySeller(query): Observable<any> {
      const BODY = {
        cod_vendedor: query.cod_vendedor,
        fecha_ini: query.fecha_ini,
        fecha_fin: query.fecha_fin,
      sede: query.sede
    };
    return this.http.post(
      this.ENDPOINT + "/afiliacion/vendedor/",
      BODY,
      {
        headers: this.httpHeaders
      }
    );
  }
}
