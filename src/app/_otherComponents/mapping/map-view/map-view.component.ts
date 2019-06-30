import { DiveSiteInfoService } from './../../../_services/diveSiteInfo/dive-site-info.service';
import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Circle from 'ol/geom/Circle';
import Feature from 'ol/Feature';
import CircleStyle from 'ol/style/Circle';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import Overlay from 'ol/Overlay';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  map: any;
  vectorLayer = new VectorLayer({
    source: new VectorSource({}),
  });
  style = new Style({
    fill: new Fill({
      color: 'white'
    }),
    stroke: new Stroke({
      color: 'black',
      width: 4,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: 'red'
      }),
      stroke: new Stroke({
        width: 2
      })
    }),
  });
  featureCoords: any[];

  constructor(
    private readonly diveSiteInfoService: DiveSiteInfoService
  ) { }

  ngOnInit() {
    this.setupMap();
    this.getDiveSites();
    this.addMapEventTriggers();
    this.plotDiveSites();
  }

  setupMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: [-500000, 7300000],
        zoom: 5
      })
    });
  }

  addMapEventTriggers() {
    let self = this;
    this.map.on('click', function (evt) {
      this.feature_onHover = self.map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        self.toggleDiveSitePanel();
        self.diveSiteInfoService.setDiveSiteInfo(feature.values_);
        return feature;
      });
    });
  }

  toggleDiveSitePanel(){
    this.diveSiteInfoService.showDiveSiteInfo();
  }

  getDiveSites(){
    this.featureCoords = this.diveSiteInfoService.getDiveSites();
  }

  plotDiveSites() {
    this.featureCoords.forEach((ele) => {
      const feature = new Feature(
        new Circle(ele.coords)
      )
      feature.setStyle(this.style);
      feature.getGeometry().setRadius(10000);
      feature.set('name', ele.name);
      feature.set('description', ele.description);
      feature.set('diveType', ele.diveType);
      this.vectorLayer.getSource().addFeature(feature);
    })
  }

  // Example code
  vanillaForEachExample(){
    for(var index = 0; index<this.featureCoords.length; index++){
      // Or rather than this.featureCoords[index] we could set that to a var
      // var ele = this.featureCoords[index]; 
      const feature = new Feature(
        new Circle(this.featureCoords[index])
      )
      feature.setStyle(this.style);
      feature.getGeometry().setRadius(10000);
      feature.set('name', this.featureCoords[index].name);
      feature.set('description', this.featureCoords[index].description);
      feature.set('diveType', this.featureCoords[index].diveType);
      this.vectorLayer.getSource().addFeature(feature);
    }
  }
}



