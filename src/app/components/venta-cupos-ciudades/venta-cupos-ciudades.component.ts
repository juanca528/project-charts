import { Component, OnInit } from "@angular/core";
import { CupoService } from "src/app/services/cupo.service";

@Component({
  selector: "app-venta-cupos-ciudades",
  templateUrl: "./venta-cupos-ciudades.component.html",
  styleUrls: ["./venta-cupos-ciudades.component.css"],
})
export class VentaCuposCiudadesComponent implements OnInit {
  selectedMemberShipCity;
  title = "";
  type = "PieChart";
  data = [];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {};
  width = 1000;
  height = 500;
  nameSede: string;

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

  /*   title1 = "Fruits distribution";
  type1 = "ComboChart";
  data1 = [
    ["Apples", 3, 2, 2.5],
    ["Oranges", 2, 3, 2.5],
    ["Pears", 1, 5, 3],
    ["Bananas", 3, 9, 6],
    ["Plums", 4, 2, 3]
  ];
  columnNames1 = ["Fruits", "Jane", "Jone", "Average"];
  options1 = {
    hAxis: {
      title: "Person"
    },
    vAxis: {
      title: "Fruits"
    },
    seriesType: "bars",
    series: { 2: { type: "line" } }
  };
  width1 = 600;
  height1 = 350; */
  constructor(private api: CupoService) {
    this.selectedMemberShipCity = {
      sede: "",
      fecha_ini: "",
      fecha_fin: "",
    };
  }

  getNameSede(id) {
    if (id == 1) {
      this.nameSede = "PALMIRA";
    }
    if (id == 2) {
      this.nameSede = "CALI";
    }
    if (id == 3) {
      this.nameSede = "TULÚA";
    }
    if (id == 4) {
      this.nameSede = "PEREIRA";
    }
    if (id == 5) {
      this.nameSede = "ARMENIA";
    }
    if (id == 6) {
      this.nameSede = "PIENDAMÓ";
    }
    if (id == 7) {
      this.nameSede = "CHINCHINÁ";
    }
  }

  //Funcion que consulta las afiliaciones por ciudad.
  getAllMemberShipByCity = () => {
    this.api.getAllMemberShipByCity(this.selectedMemberShipCity).subscribe(
      (data) => {
        let entries = Object.entries(data);
        let filt = entries.splice(0, 9);
        console.log(data);
        console.log(entries);

        this.title = "";
        this.type = "PieChart";
        this.data = filt;
        this.columnNames = ["Ciudad", "Cantidad afiliacione"];
        this.options = {
          is3D: true,
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
            direction: 1,
          },

          hAxis: {
            maxTextLines: 10,
            textStyle: {
              fontSize: 8,
            },
          },
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
            direction: 1,
          },

          hAxis: {
            maxTextLines: 10,
            textStyle: {
              fontSize: 8,
            },
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}
