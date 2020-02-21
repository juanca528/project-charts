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
  width = 700;
  height = 500;
  constructor(private api: CitaService) {
    this.getAllInstitutions();
    this.selectedOtherServiceInstitution = {
      institucion: ""
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
          this.title = "Otros servicios por institución";
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
