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

  title1 = "";
  type1 = "BarChart";
  data1 = [];
  columnNames1 = ["Vendedor", "Cant. Afil."];
  options1 = {};
  title2 = "";
  type2 = "ScatterChart";
  data2 = [];
  columnNames2 = ["Vendedor", "Cant. Afil."];
  options2 = {};

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
          let filt = items.slice(0,10)
          this.title = "Quejas por Institución";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Institución", "Cantidad"];
          this.options = {};
          this.width = 700;
          this.height = 500;

          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Ciudad", "Cant. Afil."];
          this.options1 = {};
          this.width = 900;
          this.height = 500;
  
          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Ciudad", "Cant. Afil."];
          this.options2 = {};
          this.width = 900;
          this.height = 500;
        },
        error => {
          console.log(error);
        }
      );
  };

  ngOnInit() {}
}
