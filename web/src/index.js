import { Viewer, createWorldTerrainAsync, Cesium3DTileset } from "cesium";
import TileStyleManager from "./js/TileStyleManager.js";
import { accessToken } from "./js/CesiumConfig.js";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";

Ion.defaultAccessToken = accessToken;

const viewer = new Viewer("cesiumContainer", {
  terrainProvider: await createWorldTerrainAsync(),
});

const tileset = await Cesium3DTileset.fromUrl(
  "http://127.0.0.1:8000/data/tileset.json"
);
viewer.scene.primitives.add(tileset);

const GJSON = "http://127.0.0.1:8000/data/geojson"

viewer.dataSources.add(GeoJsonDataSource.load(
  GJSON,
  {
    stroke: Color.RED
  }
));


await viewer.zoomTo(tileset);

const styleManager = new TileStyleManager(tileset);
styleManager.terrainHeightStyle();

document
  .getElementById("btnterrain")
  .addEventListener("click", () => styleManager.terrainHeightStyle());

document
  .getElementById("btnpipe")
  .addEventListener("click", () => styleManager.pipeTypeStyle());
