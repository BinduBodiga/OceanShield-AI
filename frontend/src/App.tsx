import CoastalMap from "./components/CoastalMap";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
  AlertTriangle,
  ChevronRight,
  CircleDot,
  Compass,
  Crosshair,
  Database,
  Eye,
  MapPinned,
  Menu,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  Waves,
  X,
} from "lucide-react";

import type { Incident } from "./types/incident";

/* =============================================================== */
/* INCIDENT DATA */
/* =============================================================== */

const incidents: Incident[] = [
  {
    id: "OS-001",
    name: "Coastal Debris Cluster",
    location: "Kochi Coastal Sector",
    latitude: 9.97,
    longitude: 76.27,
    confidence: 0.94,
    density: "High",
    priority: 91,
    sensitivity: "Mangrove / Estuary",
    status: "Detected",
    debrisType: "Mixed plastic debris",
    estimatedArea: "2.8 km²",
    coastalProximity: "3.4 km",
    habitat: "Mangrove / Estuary",
    detectionSource: "Satellite simulation",
    detectedAgo: "14 min ago",
    riskLevel: "Critical",
    priorityRationale:
      "High-confidence detection combined with high debris density and close proximity to a sensitive mangrove-estuary ecosystem.",
    recommendedAction:
      "Verify immediately and prepare a coastal cleanup response.",
    forecast: [
      {
        time: "6h",
        label: "Initial movement",
        distance: "1.8 km",
        direction: "SE",
      },
      {
        time: "12h",
        label: "Drift expansion",
        distance: "4.2 km",
        direction: "SE",
      },
      {
        time: "24h",
        label: "Accumulation risk",
        distance: "8.7 km",
        direction: "SSE",
      },
      {
        time: "48h",
        label: "Projected zone",
        distance: "15.1 km",
        direction: "SSE",
      },
    ],
  },

  {
    id: "OS-002",
    name: "Floating Debris Patch",
    location: "Alappuzha Sector",
    latitude: 9.49,
    longitude: 76.33,
    confidence: 0.87,
    density: "Medium",
    priority: 76,
    sensitivity: "Coastal Wetland",
    status: "Verified",
    debrisType: "Floating plastic fragments",
    estimatedArea: "1.9 km²",
    coastalProximity: "6.2 km",
    habitat: "Coastal Wetland",
    detectionSource: "Satellite simulation",
    detectedAgo: "39 min ago",
    riskLevel: "High",
    priorityRationale:
      "Moderate debris density is elevated by the site's wetland sensitivity and increasing movement toward the coastline.",
    recommendedAction:
      "Maintain monitoring and coordinate field verification.",
    forecast: [
      {
        time: "6h",
        label: "Initial movement",
        distance: "1.2 km",
        direction: "SW",
      },
      {
        time: "12h",
        label: "Drift expansion",
        distance: "3.1 km",
        direction: "SW",
      },
      {
        time: "24h",
        label: "Accumulation risk",
        distance: "6.4 km",
        direction: "WSW",
      },
      {
        time: "48h",
        label: "Projected zone",
        distance: "11.8 km",
        direction: "WSW",
      },
    ],
  },

  {
    id: "OS-003",
    name: "Offshore Accumulation",
    location: "Kollam Coastal Sector",
    latitude: 8.89,
    longitude: 76.59,
    confidence: 0.79,
    density: "Medium",
    priority: 68,
    sensitivity: "Open Ocean",
    status: "Detected",
    debrisType: "Floating plastic packaging",
    estimatedArea: "3.6 km²",
    coastalProximity: "11.7 km",
    habitat: "Open Ocean",
    detectionSource: "Satellite simulation",
    detectedAgo: "1 hr 12 min ago",
    riskLevel: "Moderate",
    priorityRationale:
      "The detection has moderate confidence and density, but its offshore position currently lowers immediate coastal exposure.",
    recommendedAction:
      "Continue tracking and reassess accumulation probability within 24 hours.",
    forecast: [
      {
        time: "6h",
        label: "Initial movement",
        distance: "2.4 km",
        direction: "E",
      },
      {
        time: "12h",
        label: "Drift expansion",
        distance: "5.0 km",
        direction: "ENE",
      },
      {
        time: "24h",
        label: "Accumulation risk",
        distance: "9.6 km",
        direction: "ENE",
      },
      {
        time: "48h",
        label: "Projected zone",
        distance: "16.4 km",
        direction: "NE",
      },
    ],
  },

  {
    id: "OS-004",
    name: "Drifting Debris Zone",
    location: "Kanyakumari Sector",
    latitude: 8.08,
    longitude: 77.55,
    confidence: 0.91,
    density: "High",
    priority: 84,
    sensitivity: "Coastal Ecosystem",
    status: "Cleanup scheduled",
    debrisType: "Mixed plastic and fishing waste",
    estimatedArea: "2.3 km²",
    coastalProximity: "2.7 km",
    habitat: "Coastal Ecosystem",
    detectionSource: "Satellite simulation",
    detectedAgo: "2 hr 06 min ago",
    riskLevel: "High",
    priorityRationale:
      "High debris density and strong detection confidence indicate significant accumulation potential near a sensitive coastal ecosystem.",
    recommendedAction:
      "Cleanup operation scheduled. Confirm field team readiness.",
    forecast: [
      {
        time: "6h",
        label: "Initial movement",
        distance: "1.4 km",
        direction: "NW",
      },
      {
        time: "12h",
        label: "Drift expansion",
        distance: "3.6 km",
        direction: "NW",
      },
      {
        time: "24h",
        label: "Accumulation risk",
        distance: "7.2 km",
        direction: "NNW",
      },
      {
        time: "48h",
        label: "Projected zone",
        distance: "12.9 km",
        direction: "NNW",
      },
    ],
  },

  {
    id: "OS-005",
    name: "Potential Plastic Accumulation",
    location: "Thoothukudi Sector",
    latitude: 8.76,
    longitude: 78.13,
    confidence: 0.72,
    density: "Low",
    priority: 54,
    sensitivity: "Marine Habitat",
    status: "Detected",
    debrisType: "Small plastic fragments",
    estimatedArea: "1.1 km²",
    coastalProximity: "9.8 km",
    habitat: "Marine Habitat",
    detectionSource: "Satellite simulation",
    detectedAgo: "3 hr 18 min ago",
    riskLevel: "Low",
    priorityRationale:
      "Lower detection confidence and debris density currently indicate limited immediate risk, but continued monitoring is recommended.",
    recommendedAction:
      "Keep under observation and verify if density increases.",
    forecast: [
      {
        time: "6h",
        label: "Initial movement",
        distance: "0.9 km",
        direction: "N",
      },
      {
        time: "12h",
        label: "Drift expansion",
        distance: "2.2 km",
        direction: "NNE",
      },
      {
        time: "24h",
        label: "Accumulation risk",
        distance: "4.8 km",
        direction: "NE",
      },
      {
        time: "48h",
        label: "Projected zone",
        distance: "8.5 km",
        direction: "NE",
      },
    ],
  },
];

/* =============================================================== */
/* NAVIGATION */
/* =============================================================== */

const navItems = [
  {
    label: "Mission Control",
    icon: Crosshair,
  },
  {
    label: "Detection",
    icon: Eye,
  },
  {
    label: "Drift Forecast",
    icon: Waves,
  },
  {
    label: "Priority Zones",
    icon: AlertTriangle,
  },
  {
    label: "Incidents",
    icon: Radio,
  },
  {
    label: "Field Verification",
    icon: ShieldCheck,
  },
];

/* =============================================================== */
/* APP */
/* =============================================================== */

function App() {
  const [activeNav, setActiveNav] = useState("Mission Control");

  const [selectedIncident, setSelectedIncident] =
    useState<Incident | null>(incidents[0]);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [incidentStatuses, setIncidentStatuses] = useState<
    Record<string, Incident["status"]>
  >(() =>
    Object.fromEntries(
      incidents.map((incident) => [incident.id, incident.status]),
    ) as Record<string, Incident["status"]>,
  );

  /* ============================================================= */
  /* STATUS MANAGEMENT */
  /* ============================================================= */

  const updateIncidentStatus = (
    incidentId: string,
    status: Incident["status"],
  ) => {
    setIncidentStatuses((current) => ({
      ...current,
      [incidentId]: status,
    }));
  };

  const getIncidentStatus = (incident: Incident) =>
    incidentStatuses[incident.id] ?? incident.status;

  /* ============================================================= */
  /* COUNTS */
  /* ============================================================= */

  const highPriorityCount = useMemo(
    () =>
      incidents.filter(
        (incident) => incident.priority >= 80,
      ).length,
    [],
  );

  const pendingVerificationCount = useMemo(
    () =>
      incidents.filter((incident) => {
        const status =
          incidentStatuses[incident.id] ??
          incident.status;

        return (
          status === "Detected" ||
          status === "Verified"
        );
      }).length,
    [incidentStatuses],
  );

  const forecastTrackCount = useMemo(
    () =>
      incidents.filter(
        (incident) =>
          incident.forecast.length > 0,
      ).length,
    [],
  );

  /* ============================================================= */
  /* NAVIGATION HELPER */
/* ============================================================= */

  const navigateTo = (page: string) => {
    setActiveNav(page);
    setSidebarOpen(false);
  };

  /* ============================================================= */
  /* RENDER */
/* ============================================================= */

  return (
    <div className="min-h-screen bg-[#06131c] text-slate-100">

      <div className="flex min-h-screen">

        {/* ===================================================== */}
        {/* SIDEBAR */}
        {/* ===================================================== */}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-[270px] flex-col border-r border-white/10 bg-[#071923] transition-transform duration-300 lg:relative lg:translate-x-0 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* LOGO */}

          <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">

              <Waves className="h-6 w-6 text-cyan-300" />

            </div>

            <div>

              <div className="text-sm font-bold tracking-[0.18em] text-white">
                OCEANSHIELD
              </div>

              <div className="text-[10px] tracking-[0.24em] text-cyan-300/70">
                COASTAL INTELLIGENCE
              </div>

            </div>

            <button
              className="ml-auto lg:hidden"
              onClick={() =>
                setSidebarOpen(false)
              }
            >

              <X className="h-5 w-5" />

            </button>

          </div>

          {/* NAVIGATION */}

          <div className="px-4 py-6">

            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Operations
            </div>

            <nav className="space-y-1">

              {navItems.map((item) => {

                const Icon = item.icon;

                const active =
                  activeNav === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() =>
                      navigateTo(item.label)
                    }
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      active
                        ? "bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/10"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >

                    <Icon className="h-4 w-4" />

                    <span>
                      {item.label}
                    </span>

                    {active && (
                      <ChevronRight className="ml-auto h-4 w-4 text-cyan-300" />
                    )}

                  </button>
                );

              })}

            </nav>

          </div>

          {/* SIDEBAR FOOTER */}

          <div className="mt-auto border-t border-white/10 p-4">

            <div className="rounded-xl border border-amber-300/10 bg-amber-300/[0.04] p-4">

              <div className="flex items-center gap-2">

                <Database className="h-4 w-4 text-amber-300" />

                <span className="text-xs font-semibold text-amber-200">
                  DEMO ENVIRONMENT
                </span>

              </div>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                Prototype data is simulated. Live
                satellite, ocean-current and weather
                feeds can be connected in the production
                layer.
              </p>

            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-400 hover:bg-white/5"
            >

              <Settings className="h-4 w-4" />

              Settings

            </button>

          </div>

        </aside>

        {/* ===================================================== */}
        {/* MAIN */}
        {/* ===================================================== */}

        <main className="min-w-0 flex-1">

          {/* HEADER */}

          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#071923]/90 px-4 backdrop-blur-xl sm:px-6">

            <div className="flex items-center gap-3">

              <button
                className="rounded-lg border border-white/10 p-2 lg:hidden"
                onClick={() =>
                  setSidebarOpen(true)
                }
              >

                <Menu className="h-5 w-5" />

              </button>

              <div>

                <div className="flex items-center gap-2">

                  <h1 className="text-sm font-semibold text-white sm:text-base">
                    {activeNav}
                  </h1>

                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-amber-300">
                    DEMO DATA
                  </span>

                </div>

                <p className="hidden text-[11px] text-slate-500 sm:block">
                  From satellite pixels to coastal action
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="hidden items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/5 px-3 py-2 sm:flex">

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

                <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                  System operational
                </span>

              </div>

              <button
                type="button"
                className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"
              >

                <Search className="h-4 w-4" />

              </button>

            </div>

          </header>

          {/* ===================================================== */}
          {/* CONTENT */}
          {/* ===================================================== */}

          <section className="space-y-5 p-4 sm:p-6">

            {activeNav === "Mission Control" && (
              <MissionControl
                incidents={incidents}
                selectedIncident={selectedIncident}
                setSelectedIncident={
                  setSelectedIncident
                }
                highPriorityCount={
                  highPriorityCount
                }
                forecastTrackCount={
                  forecastTrackCount
                }
                pendingVerificationCount={
                  pendingVerificationCount
                }
                getIncidentStatus={
                  getIncidentStatus
                }
                navigateTo={navigateTo}
                updateIncidentStatus={
                  updateIncidentStatus
                }
              />
            )}

            {activeNav === "Detection" && (
              <DetectionView
                incidents={incidents}
                selectedIncident={
                  selectedIncident
                }
                setSelectedIncident={
                  setSelectedIncident
                }
              />
            )}

            {activeNav === "Drift Forecast" && (
              <DriftForecastView
                incidents={incidents}
                selectedIncident={
                  selectedIncident
                }
                setSelectedIncident={
                  setSelectedIncident
                }
              />
            )}

            {activeNav === "Priority Zones" && (
              <PriorityZonesView
                incidents={incidents}
                selectedIncident={
                  selectedIncident
                }
                setSelectedIncident={
                  setSelectedIncident
                }
              />
            )}

            {activeNav === "Incidents" && (
              <IncidentsView
                incidents={incidents}
                selectedIncident={
                  selectedIncident
                }
                setSelectedIncident={
                  setSelectedIncident
                }
                getIncidentStatus={
                  getIncidentStatus
                }
              />
            )}

            {activeNav === "Field Verification" && (
              <FieldVerificationView
                incidents={incidents}
                selectedIncident={
                  selectedIncident
                }
                setSelectedIncident={
                  setSelectedIncident
                }
                getIncidentStatus={
                  getIncidentStatus
                }
                updateIncidentStatus={
                  updateIncidentStatus
                }
              />
            )}

          </section>

        </main>

      </div>

    </div>
  );
}

/* =============================================================== */
/* MISSION CONTROL */
/* =============================================================== */

function MissionControl({
  incidents,
  selectedIncident,
  setSelectedIncident,
  highPriorityCount,
  forecastTrackCount,
  pendingVerificationCount,
  getIncidentStatus,
  navigateTo,
  updateIncidentStatus,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
  highPriorityCount: number;
  forecastTrackCount: number;
  pendingVerificationCount: number;
  getIncidentStatus: (
    incident: Incident,
  ) => Incident["status"];
  navigateTo: (page: string) => void;
  updateIncidentStatus: (
    id: string,
    status: Incident["status"],
  ) => void;
}) {
  return (
    <>

      {/* ===================================================== */}
      {/* MISSION BANNER */}
      {/* ===================================================== */}

      <div className="overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-r from-cyan-400/[0.08] via-transparent to-blue-500/[0.06] p-5">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">

              <CircleDot className="h-3 w-3" />

              Coastal intelligence mission

            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">

              SEE{" "}
              <span className="text-cyan-400">
                →
              </span>{" "}
              FORECAST{" "}
              <span className="text-cyan-400">
                →
              </span>{" "}
              DECIDE{" "}
              <span className="text-cyan-400">
                →
              </span>{" "}
              ACT

            </h2>

            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Monitor potential marine debris,
              forecast movement, identify priority zones
              and support field response.
            </p>

          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-3">

            <MapPinned className="h-5 w-5 text-cyan-300" />

            <div>

              <div className="text-[10px] uppercase tracking-wider text-slate-500">
                Active region
              </div>

              <div className="text-sm font-medium text-white">
                Kerala → Tamil Nadu
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* CLICKABLE STATS */}
      {/* ===================================================== */}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

        <StatCard
          label="Active detections"
          value={String(
            incidents.length,
          ).padStart(2, "0")}
          sub="Last 24 hours"
          icon={Eye}
          onClick={() =>
            navigateTo("Detection")
          }
        />

        <StatCard
          label="High priority"
          value={String(
            highPriorityCount,
          ).padStart(2, "0")}
          sub="Requires attention"
          icon={AlertTriangle}
          danger
          onClick={() =>
            navigateTo("Priority Zones")
          }
        />

        <StatCard
          label="Forecast tracks"
          value={String(
            forecastTrackCount,
          ).padStart(2, "0")}
          sub="6–48 hour window"
          icon={Compass}
          onClick={() =>
            navigateTo("Drift Forecast")
          }
        />

        <StatCard
          label="Pending verification"
          value={String(
            pendingVerificationCount,
          ).padStart(2, "0")}
          sub="Field review"
          icon={ShieldCheck}
          onClick={() =>
            navigateTo("Field Verification")
          }
        />

      </div>

      {/* ===================================================== */}
      {/* MAP + INCIDENT */}
      {/* ===================================================== */}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">

        {/* MAP */}

        <div className="relative min-h-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#071923]">

          <div className="absolute left-4 top-4 z-10">

            <div className="rounded-xl border border-white/10 bg-[#071923]/90 px-4 py-3 shadow-2xl backdrop-blur">

              <div className="flex items-center gap-2">

                <Radio className="h-4 w-4 text-cyan-300" />

                <span className="text-xs font-semibold">
                  Coastal Intelligence Map
                </span>

              </div>

              <div className="mt-1 text-[10px] text-slate-500">
                SIMULATED OPERATIONAL VIEW
              </div>

            </div>

          </div>

          {/* CLICKABLE MAP CONTROLS */}

          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">

            <MapControl
              label="Detections"
              icon={
                <Eye className="h-4 w-4" />
              }
              onClick={() =>
                navigateTo("Detection")
              }
            />

            <MapControl
              label="Priority"
              icon={
                <AlertTriangle className="h-4 w-4" />
              }
              onClick={() =>
                navigateTo("Priority Zones")
              }
            />

            <MapControl
              label="Forecast"
              icon={
                <Waves className="h-4 w-4" />
              }
              onClick={() =>
                navigateTo("Drift Forecast")
              }
            />

          </div>

          <div className="absolute inset-0">

            <CoastalMap
              incidents={incidents}
              selectedIncident={
                selectedIncident
              }
              onSelectIncident={
                setSelectedIncident
              }
            />

          </div>

          <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-[#071923]/90 px-4 py-3 text-[10px] backdrop-blur">

            <Legend
              color="bg-red-400"
              label="High priority"
            />

            <Legend
              color="bg-cyan-400"
              label="Detection"
            />

            <Legend
              color="bg-cyan-200"
              label="Forecast path"
            />

          </div>

          <div className="absolute bottom-4 right-4 z-10 rounded-lg border border-white/10 bg-[#071923]/90 px-3 py-2 text-[9px] text-slate-500 backdrop-blur">
            DEMO / SIMULATED GEOSPATIAL DATA
          </div>

        </div>

        {/* INCIDENT PANEL */}

        <IncidentPanel
          incident={selectedIncident}
          getIncidentStatus={
            getIncidentStatus
          }
          updateIncidentStatus={
            updateIncidentStatus
          }
          setSelectedIncident={
            setSelectedIncident
          }
        />

      </div>

      {/* ===================================================== */}
      {/* INCIDENT TABLE */}
      {/* ===================================================== */}

      <IncidentTable
        incidents={incidents}
        selectedIncident={
          selectedIncident
        }
        setSelectedIncident={
          setSelectedIncident
        }
        getIncidentStatus={
          getIncidentStatus
        }
      />

    </>
  );
}

/* =============================================================== */
/* DETECTION VIEW */
/* =============================================================== */

function DetectionView({
  incidents,
  selectedIncident,
  setSelectedIncident,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
}) {
  return (
    <>

      <PageHeader
        eyebrow="AI DETECTION"
        title="Detection Intelligence"
        description="Review satellite-derived debris detections and inspect model confidence."
        icon={<Eye className="h-5 w-5" />}
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_390px]">

        <div className="rounded-2xl border border-white/10 bg-[#071923] p-5">

          <div className="mb-5 flex items-center justify-between">

            <div>

              <h3 className="text-sm font-semibold">
                Detected debris signatures
              </h3>

              <p className="mt-1 text-[10px] text-slate-500">
                AI-assisted simulated satellite detections
              </p>

            </div>

            <span className="rounded-full border border-cyan-300/10 bg-cyan-300/5 px-3 py-1 text-[9px] text-cyan-300">
              {incidents.length} DETECTIONS
            </span>

          </div>

          <div className="space-y-2">

            {incidents.map((incident) => (

              <button
                key={incident.id}
                type="button"
                onClick={() =>
                  setSelectedIncident(
                    incident,
                  )
                }
                className={`w-full rounded-xl border p-4 text-left transition ${
                  selectedIncident?.id ===
                  incident.id
                    ? "border-cyan-300/30 bg-cyan-300/[0.05]"
                    : "border-white/5 bg-white/[0.02] hover:border-cyan-300/10"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <div className="text-xs font-semibold text-white">
                      {incident.id}
                    </div>

                    <div className="mt-1 text-[10px] text-slate-500">
                      {incident.name}
                    </div>

                  </div>

                  <div className="text-right">

                    <div className="text-lg font-semibold text-cyan-300">
                      {(incident.confidence * 100).toFixed(0)}%
                    </div>

                    <div className="text-[9px] uppercase text-slate-600">
                      confidence
                    </div>

                  </div>

                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">

                  <MiniMetric
                    label="Density"
                    value={incident.density}
                  />

                  <MiniMetric
                    label="Area"
                    value={incident.estimatedArea}
                  />

                  <MiniMetric
                    label="Source"
                    value="Satellite"
                  />

                </div>

              </button>

            ))}

          </div>

        </div>

        <IncidentPanel
          incident={selectedIncident}
          getIncidentStatus={(incident) =>
            incident.status
          }
          updateIncidentStatus={() => {}}
          setSelectedIncident={
            setSelectedIncident
          }
          readOnly
        />

      </div>

    </>
  );
}

/* =============================================================== */
/* DRIFT FORECAST VIEW */
/* =============================================================== */

function DriftForecastView({
  incidents,
  selectedIncident,
  setSelectedIncident,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
}) {
  return (
    <>

      <PageHeader
        eyebrow="FORECAST ENGINE"
        title="Drift Forecast Intelligence"
        description="Inspect simulated 6–48 hour debris movement projections."
        icon={<Waves className="h-5 w-5" />}
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_390px]">

        <div className="rounded-2xl border border-white/10 bg-[#071923] p-5">

          <div className="mb-5">

            <h3 className="text-sm font-semibold">
              Forecast tracks
            </h3>

            <p className="mt-1 text-[10px] text-slate-500">
              Select an incident to inspect its projected trajectory
            </p>

          </div>

          <div className="space-y-4">

            {incidents.map((incident) => {

              const finalPoint =
                incident.forecast[
                  incident.forecast.length - 1
                ];

              return (
                <button
                  key={incident.id}
                  type="button"
                  onClick={() =>
                    setSelectedIncident(
                      incident,
                    )
                  }
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedIncident?.id ===
                    incident.id
                      ? "border-cyan-300/30 bg-cyan-300/[0.05]"
                      : "border-white/5 bg-white/[0.02] hover:border-cyan-300/10"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <div className="text-xs font-semibold text-white">
                        {incident.id}
                      </div>

                      <div className="mt-1 text-[10px] text-slate-500">
                        {incident.location}
                      </div>

                    </div>

                    <div className="text-right">

                      <div className="text-sm font-semibold text-cyan-300">
                        {finalPoint?.distance}
                      </div>

                      <div className="text-[9px] text-slate-600">
                        {finalPoint?.direction} · 48H
                      </div>

                    </div>

                  </div>

                  <div className="mt-4 flex gap-1">

                    {incident.forecast.map(
                      (point) => (
                        <div
                          key={point.time}
                          className="flex-1"
                        >

                          <div className="h-1.5 rounded-full bg-cyan-400/20">

                            <div
                              className="h-full rounded-full bg-cyan-400"
                              style={{
                                width: `${Math.min(
                                  100,
                                  (parseFloat(
                                    point.distance,
                                  ) /
                                    Math.max(
                                      1,
                                      parseFloat(
                                        finalPoint?.distance ??
                                          "1",
                                      ),
                                    )) *
                                    100,
                                )}%`,
                              }}
                            />

                          </div>

                          <div className="mt-1 text-center text-[8px] text-slate-600">
                            {point.time}
                          </div>

                        </div>
                      ),
                    )}

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        <ForecastPanel
          incident={selectedIncident}
        />

      </div>

    </>
  );
}

/* =============================================================== */
/* PRIORITY ZONES */
/* =============================================================== */

function PriorityZonesView({
  incidents,
  selectedIncident,
  setSelectedIncident,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
}) {
  const priorityIncidents = [...incidents].sort(
    (a, b) => b.priority - a.priority,
  );

  return (
    <>

      <PageHeader
        eyebrow="DECISION INTELLIGENCE"
        title="Priority Zones"
        description="Rank coastal debris incidents using confidence, density, exposure and habitat sensitivity."
        icon={
          <AlertTriangle className="h-5 w-5" />
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_390px]">

        <div className="rounded-2xl border border-white/10 bg-[#071923] p-5">

          <div className="mb-5">

            <h3 className="text-sm font-semibold">
              Priority ranking
            </h3>

            <p className="mt-1 text-[10px] text-slate-500">
              Highest response priority appears first
            </p>

          </div>

          <div className="space-y-3">

            {priorityIncidents.map(
              (incident, index) => (

                <button
                  key={incident.id}
                  type="button"
                  onClick={() =>
                    setSelectedIncident(
                      incident,
                    )
                  }
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedIncident?.id ===
                    incident.id
                      ? "border-cyan-300/30 bg-cyan-300/[0.05]"
                      : "border-white/5 bg-white/[0.02] hover:border-cyan-300/10"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-400/10 text-xs font-bold text-red-300">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="text-xs font-semibold text-white">
                        {incident.id}
                      </div>

                      <div className="mt-1 truncate text-[10px] text-slate-500">
                        {incident.name}
                      </div>

                    </div>

                    <div className="text-right">

                      <div
                        className={`text-2xl font-semibold ${
                          incident.priority >= 80
                            ? "text-red-300"
                            : incident.priority >=
                                60
                              ? "text-amber-300"
                              : "text-cyan-300"
                        }`}
                      >
                        {incident.priority}
                      </div>

                      <div className="text-[8px] uppercase text-slate-600">
                        priority
                      </div>

                    </div>

                  </div>

                  <div className="mt-4 h-1.5 rounded-full bg-white/5">

                    <div
                      className={`h-full rounded-full ${
                        incident.priority >= 80
                          ? "bg-red-400"
                          : incident.priority >=
                              60
                            ? "bg-amber-400"
                            : "bg-cyan-400"
                      }`}
                      style={{
                        width: `${incident.priority}%`,
                      }}
                    />

                  </div>

                </button>

              ),
            )}

          </div>

        </div>

        <PriorityPanel
          incident={selectedIncident}
        />

      </div>

    </>
  );
}

/* =============================================================== */
/* INCIDENTS VIEW */
/* =============================================================== */

function IncidentsView({
  incidents,
  selectedIncident,
  setSelectedIncident,
  getIncidentStatus,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
  getIncidentStatus: (
    incident: Incident,
  ) => Incident["status"];
}) {
  return (
    <>

      <PageHeader
        eyebrow="INCIDENT MANAGEMENT"
        title="Incidents"
        description="Review all detected coastal debris incidents and operational states."
        icon={<Radio className="h-5 w-5" />}
      />

      <IncidentTable
        incidents={incidents}
        selectedIncident={
          selectedIncident
        }
        setSelectedIncident={
          setSelectedIncident
        }
        getIncidentStatus={
          getIncidentStatus
        }
      />

    </>
  );
}

/* =============================================================== */
/* FIELD VERIFICATION */
/* =============================================================== */

function FieldVerificationView({
  incidents,
  selectedIncident,
  setSelectedIncident,
  getIncidentStatus,
  updateIncidentStatus,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
  getIncidentStatus: (
    incident: Incident,
  ) => Incident["status"];
  updateIncidentStatus: (
    id: string,
    status: Incident["status"],
  ) => void;
}) {
  return (
    <>

      <PageHeader
        eyebrow="FIELD OPERATIONS"
        title="Field Verification"
        description="Move incidents through the operational verification and cleanup workflow."
        icon={<ShieldCheck className="h-5 w-5" />}
      />

      <div className="grid gap-5 lg:grid-cols-2">

        {incidents.map((incident) => {

          const status =
            getIncidentStatus(incident);

          return (
            <div
              key={incident.id}
              className="rounded-2xl border border-white/10 bg-[#071923] p-5"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <div className="text-xs font-semibold text-white">
                    {incident.id}
                  </div>

                  <div className="mt-1 text-[10px] text-slate-500">
                    {incident.location}
                  </div>

                </div>

                <StatusBadge
                  status={status}
                />

              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">

                <Detail
                  label="Priority"
                >
                  {incident.priority}/100
                </Detail>

                <Detail
                  label="Risk"
                >
                  {incident.riskLevel}
                </Detail>

                <Detail
                  label="Proximity"
                >
                  {incident.coastalProximity}
                </Detail>

                <Detail
                  label="Habitat"
                >
                  {incident.habitat}
                </Detail>

              </div>

              <div className="mt-5">

                <div className="mb-2 flex justify-between text-[9px]">

                  <span className="uppercase tracking-wider text-slate-600">
                    Workflow progress
                  </span>

                  <span className="text-slate-400">
                    {status}
                  </span>

                </div>

                <div className="h-1.5 rounded-full bg-white/5">

                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all"
                    style={{
                      width:
                        status ===
                        "Detected"
                          ? "25%"
                          : status ===
                              "Verified"
                            ? "50%"
                            : status ===
                                "Cleanup scheduled"
                              ? "75%"
                              : "100%",
                    }}
                  />

                </div>

              </div>

              <div className="mt-5 flex gap-2">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedIncident(
                      incident,
                    )
                  }
                  className="flex-1 rounded-lg border border-white/10 px-3 py-2.5 text-xs text-slate-300 hover:border-cyan-300/30 hover:text-white"
                >
                  Inspect
                </button>

                {status === "Detected" && (
                  <button
                    type="button"
                    onClick={() =>
                      updateIncidentStatus(
                        incident.id,
                        "Verified",
                      )
                    }
                    className="flex-1 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-cyan-300"
                  >
                    Verify
                  </button>
                )}

                {status === "Verified" && (
                  <button
                    type="button"
                    onClick={() =>
                      updateIncidentStatus(
                        incident.id,
                        "Cleanup scheduled",
                      )
                    }
                    className="flex-1 rounded-lg bg-amber-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-amber-300"
                  >
                    Schedule
                  </button>
                )}

                {status ===
                  "Cleanup scheduled" && (
                  <button
                    type="button"
                    onClick={() =>
                      updateIncidentStatus(
                        incident.id,
                        "Resolved",
                      )
                    }
                    className="flex-1 rounded-lg bg-emerald-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-emerald-300"
                  >
                    Resolve
                  </button>
                )}

                {status ===
                  "Resolved" && (
                  <div className="flex flex-1 items-center justify-center rounded-lg border border-emerald-300/10 bg-emerald-300/5 px-3 py-2.5 text-xs font-semibold text-emerald-300">
                    ✓ Resolved
                  </div>
                )}

              </div>

            </div>
          );
        })}

      </div>

      {selectedIncident && (
        <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.02] p-5">

          <div className="flex items-center gap-2">

            <MapPinned className="h-4 w-4 text-cyan-300" />

            <span className="text-xs font-semibold">
              Selected field target
            </span>

          </div>

          <p className="mt-2 text-xs text-slate-400">
            {selectedIncident.id} ·{" "}
            {selectedIncident.location}
          </p>

        </div>
      )}

    </>
  );
}

/* =============================================================== */
/* INCIDENT PANEL */
/* =============================================================== */

function IncidentPanel({
  incident,
  getIncidentStatus,
  updateIncidentStatus,
  setSelectedIncident,
  readOnly = false,
}: {
  incident: Incident | null;
  getIncidentStatus: (
    incident: Incident,
  ) => Incident["status"];
  updateIncidentStatus: (
    id: string,
    status: Incident["status"],
  ) => void;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
  readOnly?: boolean;
}) {
  if (!incident) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#071923] p-5">
        <div className="text-sm text-slate-500">
          Select an incident
        </div>
      </div>
    );
  }

  const status =
    getIncidentStatus(incident);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071923]">

      <div className="border-b border-white/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Selected incident
            </div>

            <h3 className="mt-1 text-base font-semibold text-white">
              {incident.id}
            </h3>

          </div>

          <StatusBadge status={status} />

        </div>

      </div>

      <div className="space-y-5 p-5">

        <div>

          <div className="flex items-start justify-between gap-3">

            <div>

              <div className="text-sm font-medium text-white">
                {incident.name}
              </div>

              <div className="mt-1 text-xs text-slate-500">
                {incident.location}
              </div>

            </div>

            <RiskBadge
              level={incident.riskLevel}
            />

          </div>

        </div>

        {/* CONFIDENCE */}

        <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">

          <div className="text-[9px] uppercase tracking-wider text-slate-500">
            AI detection confidence
          </div>

          <div className="mt-1 text-2xl font-semibold text-cyan-300">
            {(incident.confidence * 100).toFixed(
              0,
            )}
            %
          </div>

          <div className="mt-3 h-2 rounded-full bg-white/5">

            <div
              className="h-full rounded-full bg-cyan-400"
              style={{
                width: `${incident.confidence * 100}%`,
              }}
            />

          </div>

        </div>

        {/* DETAILS */}

        <div>

          <SectionTitle
            icon={<Eye className="h-4 w-4" />}
            title="Detection intelligence"
          />

          <div className="mt-3 grid grid-cols-2 gap-2">

            <Detail label="Density">
              {incident.density}
            </Detail>

            <Detail label="Debris type">
              {incident.debrisType}
            </Detail>

            <Detail label="Estimated area">
              {incident.estimatedArea}
            </Detail>

            <Detail label="Source">
              {incident.detectionSource}
            </Detail>

            <Detail label="Detected">
              {incident.detectedAgo}
            </Detail>

            <Detail label="Proximity">
              {incident.coastalProximity}
            </Detail>

          </div>

        </div>

        {/* PRIORITY */}

        <div>

          <SectionTitle
            icon={
              <AlertTriangle className="h-4 w-4" />
            }
            title="Decision intelligence"
          />

          <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">

            <div className="text-[9px] uppercase tracking-wider text-slate-500">
              Priority score
            </div>

            <div
              className={`mt-1 text-3xl font-semibold ${
                incident.priority >= 80
                  ? "text-red-300"
                  : incident.priority >=
                      60
                    ? "text-amber-300"
                    : "text-cyan-300"
              }`}
            >
              {incident.priority}
              <span className="text-sm text-slate-600">
                /100
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white/5">

              <div
                className={`h-full rounded-full ${
                  incident.priority >= 80
                    ? "bg-red-400"
                    : incident.priority >=
                        60
                      ? "bg-amber-400"
                      : "bg-cyan-400"
                }`}
                style={{
                  width: `${incident.priority}%`,
                }}
              />

            </div>

            <p className="mt-3 text-[10px] leading-5 text-slate-500">
              {incident.priorityRationale}
            </p>

          </div>

        </div>

        {/* FORECAST */}

        <ForecastPanel
          incident={incident}
        />

        {/* ACTION */}

        <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">

          <div className="text-[9px] font-semibold uppercase tracking-wider text-cyan-300">
            Recommended action
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-300">
            {incident.recommendedAction}
          </p>

        </div>

        {/* WORKFLOW */}

        {!readOnly && (
          <div className="rounded-xl border border-emerald-300/10 bg-emerald-300/[0.03] p-4">

            <div className="flex items-center justify-between">

              <div>

                <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                  Field response
                </div>

                <div className="mt-1 text-[10px] text-slate-500">
                  Operational workflow
                </div>

              </div>

              <ShieldCheck className="h-4 w-4 text-emerald-300" />

            </div>

            <div className="mt-4">

              <div className="mb-2 flex justify-between text-[9px]">

                <span className="uppercase tracking-wider text-slate-600">
                  Current status
                </span>

                <span className="font-semibold text-slate-300">
                  {status}
                </span>

              </div>

              <div className="h-1.5 rounded-full bg-white/5">

                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                  style={{
                    width:
                      status ===
                      "Detected"
                        ? "25%"
                        : status ===
                            "Verified"
                          ? "50%"
                          : status ===
                              "Cleanup scheduled"
                            ? "75%"
                            : "100%",
                  }}
                />

              </div>

            </div>

            <div className="mt-4">

              {status === "Detected" && (
                <button
                  type="button"
                  onClick={() =>
                    updateIncidentStatus(
                      incident.id,
                      "Verified",
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-cyan-300"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Verify Detection
                </button>
              )}

              {status === "Verified" && (
                <button
                  type="button"
                  onClick={() =>
                    updateIncidentStatus(
                      incident.id,
                      "Cleanup scheduled",
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-amber-300"
                >
                  <MapPinned className="h-4 w-4" />
                  Schedule Cleanup
                </button>
              )}

              {status ===
                "Cleanup scheduled" && (
                <button
                  type="button"
                  onClick={() =>
                    updateIncidentStatus(
                      incident.id,
                      "Resolved",
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-emerald-300"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Mark Resolved
                </button>
              )}

              {status ===
                "Resolved" && (
                <div className="rounded-lg border border-emerald-300/10 bg-emerald-300/[0.04] px-3 py-2.5 text-center text-[10px] font-semibold text-emerald-300">
                  ✓ Incident resolved
                </div>
              )}

            </div>

          </div>
        )}

        {/* ACTIONS */}

        <div className="flex gap-2">

          <button
            type="button"
            onClick={() =>
              setSelectedIncident(
                incident,
              )
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-cyan-300"
          >

            <Eye className="h-4 w-4" />

            Focus Incident

          </button>

          <button
            type="button"
            className="rounded-lg border border-white/10 px-3 py-2.5 text-xs text-slate-400 hover:border-cyan-300/20 hover:text-white"
          >
            Details
          </button>

        </div>

      </div>

    </div>
  );
}

/* =============================================================== */
/* INCIDENT TABLE */
/* =============================================================== */

function IncidentTable({
  incidents,
  selectedIncident,
  setSelectedIncident,
  getIncidentStatus,
}: {
  incidents: Incident[];
  selectedIncident: Incident | null;
  setSelectedIncident: (
    incident: Incident | null,
  ) => void;
  getIncidentStatus: (
    incident: Incident,
  ) => Incident["status"];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071923]">

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div>

          <h3 className="text-sm font-semibold">
            Active incidents
          </h3>

          <p className="mt-1 text-[10px] text-slate-500">
            AI-assisted prototype detections
            requiring monitoring or verification
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px] text-left">

          <thead className="border-b border-white/5 text-[9px] uppercase tracking-wider text-slate-600">

            <tr>

              <th className="px-5 py-3">
                Incident
              </th>

              <th className="px-5 py-3">
                Confidence
              </th>

              <th className="px-5 py-3">
                Density
              </th>

              <th className="px-5 py-3">
                Priority
              </th>

              <th className="px-5 py-3">
                Risk
              </th>

              <th className="px-5 py-3">
                Proximity
              </th>

              <th className="px-5 py-3">
                Status
              </th>

            </tr>

          </thead>

          <tbody className="divide-y divide-white/5">

            {incidents.map((incident) => {

              const status =
                getIncidentStatus(
                  incident,
                );

              return (
                <tr
                  key={incident.id}
                  onClick={() =>
                    setSelectedIncident(
                      incident,
                    )
                  }
                  className={`cursor-pointer text-xs transition hover:bg-white/[0.025] ${
                    selectedIncident?.id ===
                    incident.id
                      ? "bg-cyan-300/[0.03]"
                      : ""
                  }`}
                >

                  <td className="px-5 py-4">

                    <div className="font-medium text-slate-200">
                      {incident.id}
                    </div>

                    <div className="mt-1 text-[10px] text-slate-600">
                      {incident.location}
                    </div>

                  </td>

                  <td className="px-5 py-4 text-slate-400">
                    {(incident.confidence * 100).toFixed(
                      0,
                    )}
                    %
                  </td>

                  <td className="px-5 py-4 text-slate-400">
                    {incident.density}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={
                        incident.priority >=
                        80
                          ? "font-semibold text-red-300"
                          : incident.priority >=
                              60
                            ? "font-semibold text-amber-300"
                            : "text-cyan-300"
                      }
                    >
                      {incident.priority}
                    </span>

                  </td>

                  <td className="px-5 py-4">

                    <RiskBadge
                      level={
                        incident.riskLevel
                      }
                      compact
                    />

                  </td>

                  <td className="px-5 py-4 text-slate-400">
                    {incident.coastalProximity}
                  </td>

                  <td className="px-5 py-4">

                    <StatusBadge
                      status={status}
                    />

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

/* =============================================================== */
/* FORECAST PANEL */
/* =============================================================== */

function ForecastPanel({
  incident,
}: {
  incident: Incident | null;
}) {
  if (!incident) return null;

  const finalPoint =
    incident.forecast[
      incident.forecast.length - 1
    ];

  return (
    <div>

      <SectionTitle
        icon={
          <Waves className="h-4 w-4" />
        }
        title="Drift forecast intelligence"
      />

      <div className="mt-3 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">

        <div className="flex items-start justify-between">

          <div>

            <div className="text-[9px] uppercase tracking-wider text-slate-500">
              Projected movement
            </div>

            <div className="mt-1 text-lg font-semibold text-white">
              {finalPoint?.distance}
            </div>

            <div className="text-[9px] text-slate-500">
              Maximum projected displacement ·
              48h
            </div>

          </div>

          <div className="rounded-lg border border-cyan-300/10 bg-cyan-300/[0.05] px-3 py-2 text-right">

            <div className="text-[9px] uppercase text-slate-500">
              Direction
            </div>

            <div className="mt-1 text-sm font-semibold text-cyan-300">
              {finalPoint?.direction}
            </div>

          </div>

        </div>

      </div>

      <div className="mt-3 space-y-2">

        {incident.forecast.map(
          (point) => (
            <div
              key={point.time}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-10 items-center justify-center rounded-lg bg-cyan-300/5 text-[10px] font-bold text-cyan-300">
                  {point.time}
                </div>

                <div className="flex-1">

                  <div className="text-[10px] font-medium text-slate-200">
                    {point.label}
                  </div>

                  <div className="mt-1 text-[9px] text-slate-600">
                    {point.distance} · Direction{" "}
                    {point.direction}
                  </div>

                </div>

              </div>

            </div>
          ),
        )}

      </div>

    </div>
  );
}

/* =============================================================== */
/* PRIORITY PANEL */
/* =============================================================== */

function PriorityPanel({
  incident,
}: {
  incident: Incident | null;
}) {
  if (!incident) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#071923] p-5">

      <SectionTitle
        icon={
          <AlertTriangle className="h-4 w-4" />
        }
        title="Priority intelligence"
      />

      <div className="mt-4 text-center">

        <div className="text-[9px] uppercase tracking-wider text-slate-500">
          Priority score
        </div>

        <div
          className={`mt-2 text-5xl font-semibold ${
            incident.priority >= 80
              ? "text-red-300"
              : incident.priority >=
                  60
                ? "text-amber-300"
                : "text-cyan-300"
          }`}
        >
          {incident.priority}
        </div>

        <div className="text-[9px] text-slate-600">
          OUT OF 100
        </div>

      </div>

      <div className="mt-5 h-2 rounded-full bg-white/5">

        <div
          className={`h-full rounded-full ${
            incident.priority >= 80
              ? "bg-red-400"
              : incident.priority >=
                  60
                ? "bg-amber-400"
                : "bg-cyan-400"
          }`}
          style={{
            width: `${incident.priority}%`,
          }}
        />

      </div>

      <div className="mt-5 space-y-3">

        <Detail label="Detection confidence">
          {(incident.confidence * 100).toFixed(
            0,
          )}
          %
        </Detail>

        <Detail label="Debris density">
          {incident.density}
        </Detail>

        <Detail label="Coastal exposure">
          {incident.coastalProximity}
        </Detail>

        <Detail label="Habitat sensitivity">
          {incident.sensitivity}
        </Detail>

      </div>

      <div className="mt-4 rounded-xl border border-amber-300/10 bg-amber-300/[0.03] p-4">

        <div className="flex items-center gap-2 text-[10px] font-semibold text-amber-200">

          <AlertTriangle className="h-3.5 w-3.5" />

          Why this incident matters

        </div>

        <p className="mt-2 text-[10px] leading-5 text-slate-500">
          {incident.priorityRationale}
        </p>

      </div>

    </div>
  );
}

/* =============================================================== */
/* PAGE HEADER */
/* =============================================================== */

function PageHeader({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-cyan-300/10 bg-gradient-to-r from-cyan-400/[0.08] via-transparent to-blue-500/[0.06] p-5">

      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
          {icon}
        </div>

        <div>

          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
            {eyebrow}
          </div>

          <h2 className="mt-1 text-2xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}

/* =============================================================== */
/* STAT CARD */
/* =============================================================== */

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  danger = false,
  onClick,
}: {
  label: string;
  value: string;
  sub: string;
  icon: typeof Eye;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-white/10 bg-[#071923] p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.03] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] focus:outline-none focus:ring-1 focus:ring-cyan-300/40"
    >

      <div className="flex items-start justify-between">

        <div>

          <div className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
            {label}
          </div>

          <div
            className={`mt-2 text-2xl font-semibold ${
              danger
                ? "text-red-300"
                : "text-white"
            }`}
          >
            {value}
          </div>

          <div className="mt-1 text-[10px] text-slate-600">
            {sub}
          </div>

        </div>

        <Icon
          className={`h-4 w-4 ${
            danger
              ? "text-red-300"
              : "text-cyan-300"
          }`}
        />

      </div>

      <div className="mt-3 text-[9px] font-medium uppercase tracking-wider text-cyan-300/50">
        Open intelligence →
      </div>

    </button>
  );
}

/* =============================================================== */
/* MINI METRIC */
/* =============================================================== */

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">

      <div className="text-[8px] uppercase tracking-wider text-slate-600">
        {label}
      </div>

      <div className="mt-1 truncate text-[10px] font-medium text-slate-300">
        {value}
      </div>

    </div>
  );
}

/* =============================================================== */
/* DETAIL */
/* =============================================================== */

function Detail({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">

      <div className="text-[9px] uppercase tracking-wider text-slate-600">
        {label}
      </div>

      <div className="mt-1 text-xs font-medium text-slate-300">
        {children}
      </div>

    </div>
  );
}

/* =============================================================== */
/* SECTION TITLE */
/* =============================================================== */

function SectionTitle({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <span className="text-cyan-300">
        {icon}
      </span>

      <span className="text-xs font-semibold text-slate-200">
        {title}
      </span>

    </div>
  );
}

/* =============================================================== */
/* RISK BADGE */
/* =============================================================== */

function RiskBadge({
  level,
  compact = false,
}: {
  level: Incident["riskLevel"];
  compact?: boolean;
}) {
  const styles = {
    Low: "border-cyan-300/10 bg-cyan-300/[0.05] text-cyan-300",

    Moderate:
      "border-slate-300/10 bg-slate-300/[0.05] text-slate-300",

    High:
      "border-amber-300/10 bg-amber-300/[0.05] text-amber-300",

    Critical:
      "border-red-300/10 bg-red-300/[0.05] text-red-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${
        compact
          ? "px-2 py-1"
          : "px-2.5 py-1.5"
      } text-[9px] font-semibold uppercase tracking-wider ${styles[level]}`}
    >

      <span
        className={`h-1.5 w-1.5 rounded-full ${
          level === "Critical"
            ? "bg-red-400"
            : level === "High"
              ? "bg-amber-400"
              : level === "Moderate"
                ? "bg-slate-400"
                : "bg-cyan-400"
        }`}
      />

      {level}

    </span>
  );
}

/* =============================================================== */
/* STATUS BADGE */
/* =============================================================== */

function StatusBadge({
  status,
}: {
  status: Incident["status"];
}) {
  const styles =
    status === "Resolved"
      ? "border-emerald-300/10 bg-emerald-300/5 text-emerald-300"
      : status === "Cleanup scheduled"
        ? "border-amber-300/10 bg-amber-300/5 text-amber-300"
        : status === "Verified"
          ? "border-cyan-300/10 bg-cyan-300/5 text-cyan-300"
          : "border-white/10 bg-white/5 text-slate-400";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[9px] font-semibold ${styles}`}
    >

      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      {status}

    </span>
  );
}

/* =============================================================== */
/* MAP CONTROL */
/* =============================================================== */

function MapControl({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#071923]/90 px-3 py-2 text-[10px] text-slate-400 backdrop-blur transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-white"
    >

      <span className="flex h-3.5 w-3.5 items-center justify-center text-cyan-300">
        {icon}
      </span>

      {label}

    </button>
  );
}

/* =============================================================== */
/* LEGEND */
/* =============================================================== */

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <span className="flex items-center gap-2 text-slate-400">

      <span
        className={`h-2 w-2 rounded-full ${color}`}
      />

      {label}

    </span>
  );
}

/* =============================================================== */
/* EXPORT */
/* =============================================================== */

export default App;