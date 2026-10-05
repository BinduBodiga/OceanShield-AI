export type IncidentStatus =
  | "Detected"
  | "Verified"
  | "Cleanup scheduled";

export type ForecastPoint = {
  time: string;
  label: string;
  distance: string;
  direction: string;
};

export type Incident = {
  id: string;
  name: string;
  location: string;

  latitude: number;
  longitude: number;

  confidence: number;
  density: "Low" | "Medium" | "High";
  priority: number;
  sensitivity: string;
  status: IncidentStatus;

  debrisType: string;
  estimatedArea: string;
  coastalProximity: string;
  habitat: string;

  detectionSource: string;
  detectedAgo: string;

  riskLevel: "Low" | "Moderate" | "High" | "Critical";

  priorityRationale: string;
  recommendedAction: string;

  forecast: ForecastPoint[];
};