import {Component, OnInit} from '@angular/core';
import {MapService, TileLayer, tileLayers} from '../map.service';

@Component({
  selector: 'app-tile-layer',
  templateUrl: './tile-layer.component.html',
  styleUrls: ['./tile-layer.component.styl']
})
export class TileLayerComponent implements OnInit {

  selectedLayer: TileLayer = null;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.selectedLayer = this.mapService.getTileLayer();
    console.log('Selected: ', this.selectedLayer);
  }

  getTileLayers() {
    return tileLayers;
  }

  onChange() {
    console.log('Selected: ', this.selectedLayer);
    this.mapService.setTileLayer(this.selectedLayer);
  }
}
