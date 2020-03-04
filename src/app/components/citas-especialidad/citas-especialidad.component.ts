import { Component, OnInit } from "@angular/core";
import { CitaService } from "src/app/services/cita.service";

@Component({
  selector: "app-citas-especialidad",
  templateUrl: "./citas-especialidad.component.html",
  styleUrls: ["./citas-especialidad.component.css"]
})
export class CitasEspecialidadComponent implements OnInit {
  selectedAppointmentsBySpecialty;
  tipoConsulta;
  titleMain;
  params1 = true;
  params2 = true;
  title = "Afiliaciones por ciudades en un determinado año";
  type = "PieChart";
  data = [];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {};
  width = 1000;
  height = 500;

  //
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
    this.selectedAppointmentsBySpecialty = {
      genero: "",
      estrato: "",
      edad: "",
      ingreso: "",
      fecha_ini: "",
      fecha_fin: "",
      criterio: ""
    };
  }

  comparacion() {
    if (this.selectedAppointmentsBySpecialty.criterio == 1) {
      this.params1 = false;
      this.params2 = true;
    }
    if (this.selectedAppointmentsBySpecialty.criterio == 2) {
      this.params1 = false;
      this.params2 = false;
    }
  }

  store() {
    if (this.tipoConsulta == 1) {
      console.log(1);
      this.titleMain =
        "Total citas por especialidad según perfíl sociodemográfico";
    }
    if (this.tipoConsulta == 2) {
      console.log(2);
      this.titleMain =
        "Total citas por especialista según perfíl sociodemográfico";
    }
    if (this.tipoConsulta == 3) {
      console.log(3);
      this.titleMain = "Total citas por examenes según perfíl sociodemográfico";
    }
    if (this.tipoConsulta == 4) {
      console.log(4);
      this.titleMain =
        "Total citas por otro servicios según perfíl sociodemográfico";
    }
    if (this.tipoConsulta == 5) {
      console.log(5);
      this.titleMain =
        "Total citas por institución según perfíl sociodemográfico";
    }
  }

  methodo() {
    if (this.tipoConsulta == 1) {
      this.getAllAppointmentsBySpecialty();
    }
    if (this.tipoConsulta == 2) {
      this.getAllSpecialistAppointments();
    }
    if (this.tipoConsulta == 3) {
      this.getAllExamAppointments();
    }
    if (this.tipoConsulta == 4) {
      this.getAllOtherService();
    }
    if (this.tipoConsulta == 5) {
      this.getAllInstitutionAppointments();
    }
  }

  getAllAppointmentsBySpecialty = () => {
    this.api
      .getAllAppointmentsBySpecialty(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          var filt = items.slice(0, 9);

          this.title = "Citas por especialidad";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Vendedor", "Cant. Afil."];
          this.options = {
            is3D: true
          };

          this.title1 = "";
          this.type1 = "BarChart";
          this.data1 = filt;
          this.columnNames1 = ["Vendedor", "Cant. Afil."];
          this.options1 = {};

          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Vendedor", "Cant. Afil."];
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
                fontSize: 8
              }
            }
          };
        },
        error => {
          console.log(error);
        }
      );
  };

  getAllSpecialistAppointments = () => {
    this.api
      .getAllSpecialistAppointments(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          var filt = items.slice(0, 9);
          this.title = "Citas por especialista";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Especialista", "Cantidad"];
          this.options = {
            is3D: true
          };

          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Especialista", "Cant. Afil."];
          this.options1 = {};

          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Especialista", "Cant. Afil."];
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
                fontSize: 8
              }
            }
          };
        },
        error => {
          console.log(error);
        }
      );
  };

  getAllExamAppointments = () => {
    this.api
      .getAllExamAppointments(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          var filt = items.slice(0, 9);
          this.title = "Citas por examen";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Examen", "Cantidad"];
          this.options = {
            is3D: true
          };

          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Examen", "Cant. Afil."];
          this.options1 = {};

          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Examen", "Cant. Afil."];
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
                fontSize: 8
              }
            }
          };
        },
        error => {
          console.log(error);
        }
      );
  };

  getAllOtherService = () => {
    this.api.getAllOtherService(this.selectedAppointmentsBySpecialty).subscribe(
      data => {
        console.log(data);
        let items = Object.entries(data);
        var filt = items.slice(0, 9);
        this.title = "Otros Servicios";
        this.type = "PieChart";
        this.data = filt;
        this.columnNames = ["Examen", "Cantidad"];
        this.options = {
          is3D: true
        };

        this.title1 = "";
        this.type1 = "ColumnChart";
        this.data1 = filt;
        this.columnNames1 = ["Otros Servicios", "Cant. Afil."];
        this.options1 = {};

        this.title2 = "";
        this.type2 = "ComboChart";
        this.data2 = filt;
        this.columnNames2 = ["Otros servicios", "Cant. Afil."];
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
              fontSize: 8
            }
          }
        };
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllInstitutionAppointments = () => {
    this.api
      .getAllInstitutionAppointments(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          var filt = items.slice(0, 9);
          this.title = "Citas por Institucion";
          this.type = "PieChart";
          this.data = filt;
          this.columnNames = ["Institucion", "Cantidad"];
          this.options = {
            is3D: true
          };

          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Institucion", "Cant. Afil."];
          this.options1 = {};

          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Institucion", "Cant. Afil."];
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
                fontSize: 8
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
