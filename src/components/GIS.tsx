import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import "./GIS.css";

interface IProps {
  center: Array<number>;
  zoom: number;
}

export default function GIS({ center, zoom }: IProps) {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({ basemap: "topo-vector" });

      const view = new MapView({
        map,
        center,
        zoom,
        container: mapDiv.current,
      });

      const searchWidget = new Search({ view });
      view.ui.add(searchWidget, "top-right");
    }
  }, [center, zoom]);

  return <div id="gisDiv" ref={mapDiv}></div>;
}
