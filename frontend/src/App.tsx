import CoastalMap from "./components/CoastalMap";
import { useMemo, useState } from "react";
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

const navItems = [
  { label: "Mission Control", icon: Crosshair },
  { label: "Detection", icon: Eye },
  { label: "Drift Forecast", icon: Waves },
  { label: "Priority Zones", icon: AlertTriangle },
  { label: "Incidents", icon: Radio },
  { label: "Field Verification", icon: ShieldCheck },
];

function App() {
  const [activeNav, setActiveNav] = useState("Mission Control");

  const [selectedIncident, setSelectedIncident] =
    useState<Incident | null>(incidents[0]);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const highPriorityCount = useMemo(
    () => incidents.filter((incident) => incident.priority >= 80).length,
    [],
  );

  const pendingVerificationCount = useMemo(
    () =>
      incidents.filter(
        (incident) =>
          incident.status === "Detected" ||
          incident.status === "Verified",
      ).length,
    [],
  );

  const forecastTrackCount = useMemo(
    () => incidents.filter((incident) => incident.forecast.length > 0).length,
    [],
  );

  return (
    <div className="min-h-screen bg-[#06131c] text-slate-100">
      <div className="flex min-h-screen">

        {/* ========================================================= */}
        {/* SIDEBAR */}
        {/* ========================================================= */}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-[270px] flex-col border-r border-white/10 bg-[#071923] transition-transform duration-300 lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 py-6">

            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Operations
            </div>

            <nav className="space-y-1">

              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeNav === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveNav(item.label)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      active
                        ? "bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/10"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />

                    <span>{item.label}</span>

                    {active && (
                      <ChevronRight className="ml-auto h-4 w-4 text-cyan-300" />
                    )}
                  </button>
                );
              })}

            </nav>
          </div>

          <div className="mt-auto border-t border-white/10 p-4">

            <div className="rounded-xl border border-amber-300/10 bg-amber-300/[0.04] p-4">

              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-amber-300" />

                <span className="text-xs font-semibold text-amber-200">
                  DEMO ENVIRONMENT
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                Prototype data is simulated. Live satellite, ocean-current and
                weather feeds can be connected in the production layer.
              </p>
            </div>

            <button className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-400 hover:bg-white/5">
              <Settings className="h-4 w-4" />
              Settings
            </button>

          </div>
        </aside>

        {/* ========================================================= */}
        {/* MAIN */}
        {/* ========================================================= */}

        <main className="min-w-0 flex-1">

          {/* HEADER */}

          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#071923]/90 px-4 backdrop-blur-xl sm:px-6">

            <div className="flex items-center gap-3">

              <button
                className="rounded-lg border border-white/10 p-2 lg:hidden"
                onClick={() => setSidebarOpen(true)}
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

              <button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white">
                <Search className="h-4 w-4" />
              </button>

            </div>

          </header>

          <section className="space-y-5 p-4 sm:p-6">

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
                    <span className="text-cyan-400">→</span>{" "}
                    FORECAST{" "}
                    <span className="text-cyan-400">→</span>{" "}
                    DECIDE{" "}
                    <span className="text-cyan-400">→</span>{" "}
                    ACT

                  </h2>

                  <p className="mt-2 max-w-2xl text-sm text-slate-400">
                    Monitor potential marine debris, forecast movement,
                    identify priority zones and support field response.
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
            {/* STATS */}
            {/* ===================================================== */}

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

              <StatCard
                label="Active detections"
                value={String(incidents.length).padStart(2, "0")}
                sub="Last 24 hours"
                icon={Eye}
              />

              <StatCard
                label="High priority"
                value={String(highPriorityCount).padStart(2, "0")}
                sub="Requires attention"
                icon={AlertTriangle}
                danger
              />

              <StatCard
                label="Forecast tracks"
                value={String(forecastTrackCount).padStart(2, "0")}
                sub="6–48 hour window"
                icon={Compass}
              />

              <StatCard
                label="Pending verification"
                value={String(pendingVerificationCount).padStart(2, "0")}
                sub="Field review"
                icon={ShieldCheck}
              />

            </div>

            {/* ===================================================== */}
            {/* MAP + INCIDENT DETAILS */}
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

                <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">

                  <MapControl
                    label="Detections"
                    icon={<Eye className="h-4 w-4" />}
                  />

                  <MapControl
                    label="Priority"
                    icon={<AlertTriangle className="h-4 w-4" />}
                  />

                  <MapControl
                    label="Forecast"
                    icon={<Waves className="h-4 w-4" />}
                  />

                </div>

                {/* REAL LEAFLET MAP */}

                <div className="absolute inset-0">
                  <CoastalMap
                    incidents={incidents}
                    selectedIncident={selectedIncident}
                    onSelectIncident={setSelectedIncident}
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

              {/* =================================================== */}
              {/* INCIDENT INTELLIGENCE PANEL */}
              {/* =================================================== */}

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071923]">

                <div className="border-b border-white/10 px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Selected incident
                      </div>

                      <h3 className="mt-1 text-base font-semibold text-white">
                        {selectedIncident?.id ?? "—"}
                      </h3>

                    </div>

                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-1 text-[9px] font-bold text-amber-300">
                      DEMO
                    </span>

                  </div>

                </div>

                {selectedIncident && (

                  <div className="space-y-5 p-5">

                    {/* INCIDENT HEADER */}

                    <div>

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <div className="text-sm font-medium text-white">
                            {selectedIncident.name}
                          </div>

                          <div className="mt-1 text-xs text-slate-500">
                            {selectedIncident.location}
                          </div>

                        </div>

                        <RiskBadge
                          level={selectedIncident.riskLevel}
                        />

                      </div>

                    </div>

                    {/* DETECTION INTELLIGENCE */}

<div>

  <SectionTitle
    icon={<Eye className="h-4 w-4" />}
    title="AI detection intelligence"
  />

  {/* AI CONFIDENCE */}

  <div className="mt-3 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">

    <div className="flex items-end justify-between">

      <div>

        <div className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
          AI detection confidence
        </div>

        <div className="mt-1 text-2xl font-semibold text-cyan-300">
          {(selectedIncident.confidence * 100).toFixed(0)}%
        </div>

      </div>

      <div
        className={`rounded-full border px-2 py-1 text-[9px] font-semibold ${
          selectedIncident.confidence >= 0.9
            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300"
            : selectedIncident.confidence >= 0.75
              ? "border-amber-300/20 bg-amber-300/10 text-amber-300"
              : "border-red-300/20 bg-red-300/10 text-red-300"
        }`}
      >
        {selectedIncident.confidence >= 0.9
          ? "HIGH CONFIDENCE"
          : selectedIncident.confidence >= 0.75
            ? "MODERATE CONFIDENCE"
            : "LOW CONFIDENCE"}
      </div>

    </div>

    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">

      <div
        className={`h-full rounded-full transition-all ${
          selectedIncident.confidence >= 0.9
            ? "bg-cyan-400"
            : selectedIncident.confidence >= 0.75
              ? "bg-amber-400"
              : "bg-red-400"
        }`}
        style={{
          width: `${selectedIncident.confidence * 100}%`,
        }}
      />

    </div>

    <div className="mt-2 flex justify-between text-[9px] text-slate-600">
      <span>AI model confidence</span>
      <span>
        {(selectedIncident.confidence * 100).toFixed(0)} / 100
      </span>
    </div>

  </div>

  {/* DETECTION ATTRIBUTES */}

  <div className="mt-3 grid grid-cols-2 gap-2">

    <Detail label="Debris density">
      {selectedIncident.density}
    </Detail>

    <Detail label="Debris type">
      {selectedIncident.debrisType}
    </Detail>

    <Detail label="Estimated area">
      {selectedIncident.estimatedArea}
    </Detail>

    <Detail label="Detection source">
      {selectedIncident.detectionSource}
    </Detail>

    <Detail label="Detected">
      {selectedIncident.detectedAgo}
    </Detail>

    <Detail label="Detection ID">
      {selectedIncident.id}
    </Detail>

  </div>

  {/* AI ASSESSMENT */}

  <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">

    <div className="flex items-center gap-2">

      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10">

        <Crosshair className="h-3.5 w-3.5 text-cyan-300" />

      </div>

      <div>

        <div className="text-[10px] font-semibold text-slate-200">
          AI detection assessment
        </div>

        <div className="text-[9px] text-slate-600">
          Automated interpretation
        </div>

      </div>

    </div>

    <p className="mt-3 text-[10px] leading-5 text-slate-500">

      The detection model identifies a{" "}

      <span className="font-medium text-slate-300">
        {selectedIncident.density.toLowerCase()}-density
      </span>{" "}

      debris signature classified as{" "}

      <span className="font-medium text-slate-300">
        {selectedIncident.debrisType.toLowerCase()}
      </span>
      . The estimated affected area is{" "}

      <span className="font-medium text-slate-300">
        {selectedIncident.estimatedArea}
      </span>{" "}

      with a model confidence of{" "}

      <span className="font-medium text-cyan-300">
        {(selectedIncident.confidence * 100).toFixed(0)}%
      </span>
      .

    </p>

  </div>

</div>

                    {/* ENVIRONMENT */}

                    <div>

                      <SectionTitle
                        icon={<MapPinned className="h-4 w-4" />}
                        title="Environmental context"
                      />

                      <div className="mt-3 grid grid-cols-2 gap-2">

                        <Detail label="Coastal proximity">
                          {selectedIncident.coastalProximity}
                        </Detail>

                        <Detail label="Habitat">
                          {selectedIncident.habitat}
                        </Detail>

                        <Detail label="Sensitivity">
                          {selectedIncident.sensitivity}
                        </Detail>

                        <Detail label="Status">
                          {selectedIncident.status}
                        </Detail>

                      </div>

                    </div>

                    {/* PRIORITY */}

                    <div>

                      <SectionTitle
                        icon={<AlertTriangle className="h-4 w-4" />}
                        title="Decision intelligence"
                      />

                      <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">

                        <div className="flex items-end justify-between">

                          <div>

                            <div className="text-[9px] uppercase tracking-wider text-slate-500">
                              Priority score
                            </div>

                            <div
                              className={`mt-1 text-3xl font-semibold ${
                                selectedIncident.priority >= 80
                                  ? "text-red-300"
                                  : selectedIncident.priority >= 60
                                    ? "text-amber-300"
                                    : "text-cyan-300"
                              }`}
                            >
                              {selectedIncident.priority}
                              <span className="text-sm text-slate-600">
                                /100
                              </span>
                            </div>

                          </div>

                          <RiskBadge
                            level={selectedIncident.riskLevel}
                          />

                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">

                          <div
                            className={`h-full rounded-full ${
                              selectedIncident.priority >= 80
                                ? "bg-red-400"
                                : selectedIncident.priority >= 60
                                  ? "bg-amber-400"
                                  : "bg-cyan-400"
                            }`}
                            style={{
                              width: `${selectedIncident.priority}%`,
                            }}
                          />

                        </div>

                      </div>

                      <div className="mt-3 rounded-xl border border-amber-300/10 bg-amber-300/[0.03] p-3">

                        <div className="flex items-center gap-2 text-[10px] font-semibold text-amber-200">

                          <AlertTriangle className="h-3.5 w-3.5" />

                          Why this incident matters

                        </div>

                        <p className="mt-2 text-[10px] leading-5 text-slate-500">
                          {selectedIncident.priorityRationale}
                        </p>

                      </div>

                    </div>

                    {/* DRIFT FORECAST */}

                    <div>

                      <SectionTitle
                        icon={<Waves className="h-4 w-4" />}
                        title="Drift forecast"
                      />

                      <div className="mt-3 space-y-2">

                        {selectedIncident.forecast.map((point, index) => (

                          <div
                            key={point.time}
                            className="relative flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                          >

                            {index < selectedIncident.forecast.length - 1 && (
                              <div className="absolute left-[18px] top-[32px] h-5 w-px bg-cyan-300/20" />
                            )}

                            <div className="relative z-10 flex h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.5)]" />

                            <div className="w-8 text-[10px] font-semibold text-cyan-300">
                              {point.time}
                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="text-[10px] text-slate-300">
                                {point.label}
                              </div>

                              <div className="mt-0.5 text-[9px] text-slate-600">
                                {point.distance} projected • {point.direction}
                              </div>

                            </div>

                            <div className="text-[9px] text-slate-600">
                              DEMO
                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* RECOMMENDATION */}

                    <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">

                      <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                        Recommended action
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-300">
                        {selectedIncident.recommendedAction}
                      </p>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-2">

                      <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-semibold text-[#03131b] hover:bg-cyan-300">

                        <ShieldCheck className="h-4 w-4" />

                        Verify

                      </button>

                      <button className="rounded-lg border border-white/10 px-3 py-2.5 text-xs text-slate-400 hover:border-cyan-300/20 hover:text-white">
                        Details
                      </button>

                    </div>

                  </div>

                )}

              </div>

            </div>

            {/* ===================================================== */}
            {/* INCIDENT TABLE */}
            {/* ===================================================== */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071923]">

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div>

                  <h3 className="text-sm font-semibold">
                    Active incidents
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-500">
                    AI-assisted prototype detections requiring monitoring
                    or verification
                  </p>

                </div>

                <button className="flex items-center gap-2 text-xs text-cyan-300 hover:text-cyan-200">

                  View all

                  <ChevronRight className="h-3.5 w-3.5" />

                </button>

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

                    {incidents.map((incident) => (

                      <tr
                        key={incident.id}
                        onClick={() => setSelectedIncident(incident)}
                        className={`cursor-pointer text-xs transition hover:bg-white/[0.025] ${
                          selectedIncident?.id === incident.id
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

                          {(incident.confidence * 100).toFixed(0)}%

                        </td>

                        <td className="px-5 py-4 text-slate-400">

                          {incident.density}

                        </td>

                        <td className="px-5 py-4">

                          <span
                            className={
                              incident.priority >= 80
                                ? "font-semibold text-red-300"
                                : incident.priority >= 60
                                  ? "font-semibold text-amber-300"
                                  : "text-cyan-300"
                            }
                          >
                            {incident.priority}
                          </span>

                        </td>

                        <td className="px-5 py-4">

                          <RiskBadge
                            level={incident.riskLevel}
                            compact
                          />

                        </td>

                        <td className="px-5 py-4 text-slate-400">

                          {incident.coastalProximity}

                        </td>

                        <td className="px-5 py-4">

                          <span className="inline-flex items-center gap-1.5 text-slate-400">

                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                incident.status === "Cleanup scheduled"
                                  ? "bg-emerald-400"
                                  : incident.status === "Verified"
                                    ? "bg-cyan-400"
                                    : "bg-amber-400"
                              }`}
                            />

                            {incident.status}

                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* ===================================================== */}
            {/* DEMO DISCLOSURE */}
            {/* ===================================================== */}

            <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-white/[0.015] p-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-3">

                <Database className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />

                <div>

                  <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                    Prototype intelligence layer
                  </div>

                  <p className="mt-1 max-w-3xl text-[10px] leading-5 text-slate-600">
                    Detection confidence, drift projections and priority
                    scores shown here are simulated for the hackathon
                    prototype. Production deployment would connect validated
                    computer-vision models, satellite imagery, ocean-current
                    data, weather inputs and field verification records.
                  </p>

                </div>

              </div>

              <div className="shrink-0 rounded-full border border-amber-300/10 bg-amber-300/[0.04] px-3 py-1.5 text-[9px] font-semibold tracking-wider text-amber-300">
                SIMULATED DATA
              </div>

            </div>

          </section>

        </main>

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
}: {
  label: string;
  value: string;
  sub: string;
  icon: typeof Eye;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#071923] p-4">

      <div className="flex items-start justify-between">

        <div>

          <div className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
            {label}
          </div>

          <div
            className={`mt-2 text-2xl font-semibold ${
              danger ? "text-red-300" : "text-white"
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
            danger ? "text-red-300" : "text-cyan-300"
          }`}
        />

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
  children: React.ReactNode;
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
  icon: React.ReactNode;
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
    High: "border-amber-300/10 bg-amber-300/[0.05] text-amber-300",
    Critical: "border-red-300/10 bg-red-300/[0.05] text-red-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${
        compact ? "px-2 py-1" : "px-2.5 py-1.5"
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
/* MAP CONTROL */
/* =============================================================== */

function MapControl({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#071923]/90 px-3 py-2 text-[10px] text-slate-400 backdrop-blur hover:border-cyan-300/20 hover:text-white">

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

      <span className={`h-2 w-2 rounded-full ${color}`} />

      {label}

    </span>
  );
}

export default App;