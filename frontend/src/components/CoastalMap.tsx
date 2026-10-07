import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import type { Incident } from "../types/incident";
type CoastalMapProps = {
  incidents: Incident[];
  selectedIncident: Incident | null;
  onSelectIncident: (incident: Incident) => void;
};

function MapFocus({
  selectedIncident,
}: {
  selectedIncident: Incident | null;
}) {
  const map = useMap();

  if (selectedIncident) {
    map.flyTo(
      [selectedIncident.latitude, selectedIncident.longitude],
      8,
      {
        duration: 0.8,
      },
    );
  }

  return null;
}

function getPriorityColor(priority: number) {
  if (priority >= 80) return "#f87171";
  if (priority >= 60) return "#fbbf24";
  return "#22d3ee";
}

export default function CoastalMap({
  incidents,
  selectedIncident,
  onSelectIncident,
}: CoastalMapProps) {
  const center: [number, number] = [9.2, 77.1];

  /*
   * Prototype drift trajectory.
   * Later this will come from the backend drift prediction service.
   */
  const driftPath: [number, number][] = [
    [9.97, 76.27],
    [9.82, 76.34],
    [9.65, 76.42],
    [9.48, 76.52],
    [9.30, 76.61],
  ];

  return (
    <MapContainer
      center={center}
      zoom={7}
      scrollWheelZoom
      className="h-full min-h-[620px] w-full"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapFocus selectedIncident={selectedIncident} />

      {/* Simulated debris drift trajectory */}
      <Polyline
        positions={driftPath}
        pathOptions={{
          color: "#22d3ee",
          weight: 3,
          opacity: 0.75,
          dashArray: "8 8",
        }}
      />

      {/* Detection incidents */}
      {incidents.map((incident) => {
        const isSelected = selectedIncident?.id === incident.id;
        const priorityColor = getPriorityColor(incident.priority);

        return (
          <CircleMarker
            key={incident.id}
            center={[incident.latitude, incident.longitude]}
            radius={isSelected ? 11 : 8}
            pathOptions={{
              color: "#ffffff",
              weight: isSelected ? 3 : 2,
              fillColor: priorityColor,
              fillOpacity: 0.9,
            }}
            eventHandlers={{
              click: () => onSelectIncident(incident),
            }}
          >
            <Popup>
              <div className="min-w-[190px] font-sans">
                <div className="mb-2 text-sm font-bold">
                  {incident.id}
                </div>

                <div className="text-xs font-semibold">
                  {incident.name}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  {incident.location}
                </div>

                <div className="mt-3 space-y-1 text-xs">
                  <div>
                    Confidence:{" "}
                    <strong>
                      {(incident.confidence * 100).toFixed(0)}%
                    </strong>
                  </div>

                  <div>
                    Priority:{" "}
                    <strong>{incident.priority}/100</strong>
                  </div>

                  <div>
                    Density: <strong>{incident.density}</strong>
                  </div>

                  <div>
                    Status: <strong>{incident.status}</strong>
                  </div>
                </div>

                <div className="mt-3 border-t pt-2 text-[10px] text-gray-400">
                  DEMO / SIMULATED DATA
                </div>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}