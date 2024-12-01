import { pipeType, terrainHeight } from "./SymbolConditions.js";
import { Cesium3DTileStyle } from "cesium";
import chroma from "chroma-js";

export default class TileStyleManager {
  constructor(tileset) {
    this.tileset = tileset;
  }

  applyStyle = (conditions) => {
    const style = new Cesium3DTileStyle({
      color: {
        conditions: conditions,
      },
    });

    this.tileset.style = style;
  };

  generateColors = (numColors) => {
    return chroma.scale("Spectral").mode("lab").colors(numColors);
  };

  terrainHeightStyle = () => {
    const numConditions = terrainHeight.conditions.length;
    const colors = this.generateColors(numConditions);

    const terrainConditions = terrainHeight.conditions.map((condition, index) => [
      "${TerrainHeight} > " + condition.height,
      "color('" + colors[index] + "')"
    ]);

    terrainConditions.push(["true", "color('gray')"]);

    this.applyStyle(terrainConditions);
  };

  pipeTypeStyle = () => {
    const numFeatures = pipeType.features.length;
    const colors = this.generateColors(numFeatures);

    const colorConditions = pipeType.features.map((feature, index) => [
      "Number(${pipeType}) === " + feature.value,
      "color('" + colors[index] + "')"
    ]);

    colorConditions.push(["true", "color('gray')"]);

    this.applyStyle(colorConditions);
  };
}
