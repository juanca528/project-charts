import { Component, OnInit } from "@angular/core";
import { CitaService } from "src/app/services/cita.service";

@Component({
  selector: "app-citas-otros",
  templateUrl: "./citas-otros.component.html",
  styleUrls: ["./citas-otros.component.css"]
})
export class CitasOtrosComponent implements OnInit {
  selectedOtherServiceInstitution;
  institutions = [{ title: "test" }];

  title = "Otros servicios por institución";
  type = "PieChart";
  data = [];
  columnNames = ["Institución", "Cantidad"];
  options = {};
  width = 1000;
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
  constructor(private api: CitaService) {
    this.getAllInstitutions();
    this.selectedOtherServiceInstitution = {
      institucion: "",
      
    };
  }

  getAllInstitutions = () => {
    this.api.getAllInstitutions().subscribe(
      data => {
        /* console.log(data); */
        this.institutions = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllOtherServicesByInstitution = () => {
    this.api
      .getAllOtherServicesByInstitution(this.selectedOtherServiceInstitution)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          let filt = items.slice(0,10)
          this.title = "Otros servicios por institución";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Institución", "Cantidad"];
          this.options = {
            is3D: true
          };
   
          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Ciudad", "Cant. Afil."];
          this.options1 = {
            vAxis: {
              minValue: 0,
              maxValue: 100,
              format: "#'%'",
              direction: 1
            },
  
            hAxis: {
              maxTextLines: 10,
              textStyle: {
                fontSize: 8,
              }
            }
          };

  
          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Ciudad", "Cant. Afil."];
          this.options2 = {
            vAxis: {
              minValue: 0,
              maxValue: 100,
              format: "#'%'",
              direction: 1
            },
  
            hAxis: {
              maxTextLines: 10,
              textStyle: {
                fontSize: 8,
              }
            }
          };
   
        },
        error => {
          console.log(error);
        }
      );
  };

  ngOnInit() {}
}
