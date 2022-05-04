import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import "./GIS.css";

interface IProps {
  basemap?: __esri.MapProperties["basemap"];
  center: __esri.MapViewProperties["center"];
  zoom?: __esri.MapViewProperties["zoom"];
}

export default function GIS({
  basemap = "topo-vector",
  center,
  zoom = 10,
}: IProps) {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({ basemap });

      const view = new MapView({
        map,
        center,
        zoom,
        container: mapDiv.current,
      });

      const searchWidget = new Search({ view });
      view.ui.add(searchWidget, "top-right");
    }
  }, [basemap, center, zoom]);

  return <div id="gisDiv" ref={mapDiv}></div>;
}
