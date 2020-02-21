import { Component, OnInit } from "@angular/core";
declare var google;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
 /*  title = "Browser market shares at a specific website, 2014";
  type = "PieChart";
  data = [
    ["Palmira", 578.1],
    ["Cali", 700],
    ["Tulua", 398],
    ["Pereira", 388],
    ["Armenia", 290],
    ["Others", 0.7]
  ];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {};
  width = 550;
  height = 400;

  title1 = "Fruits distribution";
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
  width1 = 550;
  height1 = 400; */

  ngOnInit() {
  /*   google.charts.load("current", {
      packages: ["geomap"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ["Regions", "Popularity"],
        ["Antioquia", 200],
        ["Valle del Cauca", 500],
        ["Bolívar", 600]
      ]);
      var options = {};
      options["region"] = "CO";
      options["resolution"] = "provinces";

      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      chart.draw(data, options);
    } */
  }
}
