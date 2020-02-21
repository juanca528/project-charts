import { Component, OnInit } from "@angular/core";
import { QuejaService } from "src/app/services/queja.service";
import { CitaService } from "src/app/services/cita.service";

@Component({
  selector: "app-queja-institucion",
  templateUrl: "./queja-institucion.component.html",
  styleUrls: ["./queja-institucion.component.css"]
})
export class QuejaInstitucionComponent implements OnInit {
  selectedInstitutionComplain;
  institutions = [];
  title = "Quejas por Institución";
  type = "PieChart";
  data = [];
  columnNames = ["Institución", "Cantidad"];
  options = {};
  width = 700;
  height = 500;
  constructor(private api: QuejaService, private citaApi: CitaService) {
    this.selectedInstitutionComplain = {
      institucion: "",
      calificacion: "",
      fecha_ini: "",
      fecha_fin: ""
    };
    this.getAllInstitutions()
  }

  getAllInstitutions = () => {
    this.citaApi.getAllInstitutions().subscribe(
      data => {
        console.log(data);
        this.institutions = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllInstitutionComplain = () => {
    this.api
      .getAllInstitutionComplain(this.selectedInstitutionComplain)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          this.title = "Quejas por Institución";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Institución", "Cantidad"];
          this.options = {};
          this.width = 700;
          this.height = 500;
        },
        error => {
          console.log(error);
        }
      );
  };

  ngOnInit() {}
}
