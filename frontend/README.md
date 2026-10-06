# 🌊 OceanShield AI

### From Satellite Pixels to Coastal Action

**OceanShield AI** is an interactive coastal intelligence dashboard designed to demonstrate how artificial intelligence, geospatial intelligence, drift forecasting, and decision-support systems can be combined to monitor and respond to marine plastic pollution.

The platform follows a simple operational pipeline:

> **SEE → FORECAST → DECIDE → ACT**

It transforms simulated marine-debris detections into actionable coastal intelligence by combining detection confidence, debris density, coastal proximity, habitat sensitivity, priority scoring, drift projections, and field-response workflows.

> ⚠️ **Prototype Notice:**
> OceanShield AI is currently a frontend prototype using simulated operational and geospatial data. It does not currently connect to live satellite imagery, real-time ocean-current APIs, weather feeds, or production machine-learning models.

---

## 🚀 Project Overview

Marine plastic pollution is difficult to monitor because debris can move continuously with ocean currents, wind, tides, and weather conditions.

OceanShield AI demonstrates a possible digital workflow for addressing this challenge:

1. **Detect** potential marine debris zones.
2. **Analyze** detection confidence and debris characteristics.
3. **Forecast** possible movement over time.
4. **Calculate** response priority.
5. **Identify** high-priority coastal zones.
6. **Verify** incidents through field operations.
7. **Schedule** cleanup and track incident resolution.

The goal is to move beyond simply displaying detected debris and instead provide a **decision-support interface for coastal response teams**.

---

# 🎯 Core Concept

## SEE

Identify potential marine debris using simulated detection intelligence.

The dashboard displays:

* Detection confidence
* Debris density
* Debris type
* Estimated affected area
* Detection source
* Detection timestamp
* Geographic location

---

## FORECAST

Estimate how detected debris could move across the ocean.

The prototype provides simulated:

* 6-hour movement
* 12-hour movement
* 24-hour movement
* 48-hour projected movement
* Displacement distance
* Movement direction
* Forecast progression

---

## DECIDE

Not every detected debris zone requires the same response.

OceanShield AI assigns a **priority score from 0–100** using simulated decision signals such as:

* AI detection confidence
* Debris density
* Coastal exposure
* Habitat sensitivity
* Risk level

This helps classify incidents into response categories such as:

* Critical Response
* High Priority
* Monitor

---

## ACT

The platform connects intelligence to an operational response workflow.

An incident can progress through stages such as:

```text
Detected
   ↓
Verified
   ↓
Cleanup Scheduled
   ↓
Resolved
```

This demonstrates how a coastal intelligence platform could support the transition from remote detection to field action.

---

# 🖥️ Dashboard Modules

### 1. Mission Control

Provides the main operational overview of the coastal region.

Displays:

* Active detections
* High-priority incidents
* Forecast tracks
* Pending verification
* Coastal intelligence map
* Selected incident intelligence
* Active incident table

---

### 2. Detection Intelligence

Provides detailed information about detected marine debris.

Includes:

* AI confidence score
* Confidence classification
* Debris density
* Debris type
* Estimated area
* Detection source
* Detection timestamp
* Automated detection assessment

---

### 3. Drift Forecast

Provides simulated movement projections.

Includes:

* Forecast horizon
* Maximum projected displacement
* Movement direction
* Forecast timeline
* Movement progression
* Operational interpretation

---

### 4. Priority Decision Intelligence

Explains why an incident receives its priority score.

Includes:

* Priority score
* Risk classification
* Detection confidence
* Debris density
* Coastal exposure
* Habitat sensitivity
* Explainable priority rationale

---

### 5. Priority Zones

Highlights areas requiring greater attention based on simulated priority intelligence.

The objective is to help response teams focus limited resources on locations where environmental and operational risk is highest.

---

### 6. Incidents

Provides an operational view of detected incidents.

Each incident contains information such as:

* Incident ID
* Location
* Confidence
* Density
* Priority
* Risk
* Coastal proximity
* Current status

Incidents can also be selected directly from the map or incident table.

---

### 7. Field Verification

Demonstrates how an incident can move through an operational response workflow.

Example:

```text
Detected
   ↓
Verify Detection
   ↓
Cleanup Scheduled
   ↓
Mark Resolved
```

The interface updates incident status dynamically within the frontend.

---

# 🗺️ Geospatial Intelligence

OceanShield AI includes an interactive coastal map powered by **Leaflet**.

The map allows users to:

* View simulated incident locations
* Select incidents
* Inspect incident intelligence
* Visualize coastal detection points
* Connect map selections with the intelligence panel

The prototype currently uses simulated coordinates representing coastal sectors across the Kerala → Tamil Nadu region.

---

# 📊 Example Incident Intelligence

Example simulated incident:

```text
Incident ID: OS-001
Location: Kochi Coastal Sector

Confidence: 94%
Density: High
Priority: 91/100
Risk: Critical
Estimated Area: 2.8 km²
Coastal Proximity: 3.4 km
Habitat: Mangrove / Estuary
```

The system can then provide:

```text
Detection
   ↓
Priority Assessment
   ↓
Drift Forecast
   ↓
Field Verification
   ↓
Cleanup Response
```

---

# ⚙️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React
* Leaflet
* React Leaflet

## Development Tools

* Node.js
* npm
* Git
* GitHub
* Visual Studio Code

---

# 🏗️ Project Structure

```text
OceanShield-AI/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── CoastalMap.tsx
│   │   │
│   │   ├── types/
│   │   │   └── incident.ts
│   │   │
│   │   ├── App.tsx
│   │   └── ...
│   │
│   ├── public/
│   │
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── ...
│
└── README.md
```

---

# 🔄 Application Workflow

The current frontend demonstrates the following workflow:

```text
Simulated Detection Data
          ↓
Detection Intelligence
          ↓
Confidence + Density Analysis
          ↓
Priority Decision
          ↓
Drift Forecast
          ↓
Priority Zone Identification
          ↓
Incident Management
          ↓
Field Verification
          ↓
Cleanup Scheduling
          ↓
Resolution
```

---

# 🧠 Explainable Decision Intelligence

One of the important goals of OceanShield AI is to avoid treating an AI-generated score as a black box.

Instead, the dashboard exposes the major signals contributing to the simulated priority decision.

For example:

```text
Detection Confidence
        +
Debris Density
        +
Coastal Exposure
        +
Habitat Sensitivity
        ↓
Priority Score
        ↓
Response Classification
```

This makes the intelligence easier for an operator to understand and act upon.

---

# 📱 Interactive Features

The dashboard includes interactive elements such as:

* Sidebar navigation
* Mission Control navigation
* Incident selection
* Interactive map markers
* Incident table selection
* Detection intelligence panels
* Priority intelligence
* Drift forecast timeline
* Dynamic incident status
* Field-response workflow
* Responsive layout
* Mobile sidebar navigation
* Interactive dashboard statistics

Selecting an incident updates the intelligence panel with the corresponding incident information.

---

# 🧪 Prototype Data

The current version uses simulated incidents such as:

```text
OS-001 — Coastal Debris Cluster
OS-002 — Floating Debris Patch
OS-003 — Offshore Accumulation
OS-004 — Drifting Debris Zone
OS-005 — Potential Plastic Accumulation
```

These records contain simulated:

* Geographic coordinates
* Detection confidence
* Debris density
* Priority score
* Risk level
* Environmental sensitivity
* Drift forecast
* Recommended response
* Incident status

This allows the frontend to demonstrate the complete operational workflow without requiring external APIs.

---

# 💻 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/OceanShield-AI.git
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## 2. Open the project

```bash
cd OceanShield-AI/frontend
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Start the development server

```bash
npm run dev
```

If PowerShell blocks `npm.ps1`, use:

```bash
npm.cmd run dev
```

---

## 5. Build for production

```bash
npm.cmd run build
```

A successful build generates the production files inside:

```text
frontend/dist/
```

---

# ✅ Production Build Status

The frontend has been successfully validated with a production build.

Example build output:

```text
vite building client environment for production...

✓ modules transformed
✓ built successfully
```

The generated production bundle is placed in:

```text
frontend/dist/
```

---

# 🌐 Current Deployment Status

OceanShield AI is currently a **frontend prototype**.

The application can be deployed as a static web application because the current implementation primarily consists of client-side React/TypeScript code.

However, the current prototype should not be described as a real-time operational system.

It currently does **not** have:

* Live satellite imagery
* Real-time ocean-current data
* Live weather feeds
* Production ML inference
* Real-time database
* User authentication
* Backend APIs
* Persistent incident storage
* Real field-team GPS tracking

These are planned production-layer capabilities.

---

# 🔮 Future Development

The prototype can be extended into a production-grade coastal intelligence platform.

## 1. Live Satellite Integration

Connect satellite imagery sources to automatically identify potential marine debris.

Potential future workflow:

```text
Satellite Imagery
       ↓
Image Preprocessing
       ↓
Computer Vision Model
       ↓
Debris Detection
```

---

## 2. Ocean Current & Weather Integration

Integrate:

* Ocean current data
* Wind conditions
* Wave information
* Tidal information
* Weather forecasts

These inputs can improve drift forecasting.

---

## 3. Machine Learning Pipeline

Replace simulated detection values with real ML predictions.

Possible pipeline:

```text
Satellite Image
      ↓
Computer Vision Model
      ↓
Debris Detection
      ↓
Confidence Score
      ↓
Geospatial Processing
      ↓
Priority Engine
```

---

## 4. Advanced Drift Prediction

A future version could combine:

```text
Ocean Currents
+
Wind
+
Waves
+
Tides
+
Historical Movement
```

to produce more realistic debris trajectories.

---

## 5. Backend & Database

A backend could provide:

* User authentication
* Incident storage
* Historical records
* API endpoints
* Model inference
* Field-team management
* Persistent status updates

---

## 6. Field Verification System

Future field teams could use a mobile application to:

* Receive assigned incidents
* Navigate to detection locations
* Upload photographs
* Confirm debris presence
* Record debris type
* Estimate actual affected area
* Update cleanup progress

---

## 7. Real-Time Operations

The final vision is a continuously updating coastal intelligence system:

```text
LIVE DATA
   ↓
DETECTION
   ↓
FORECAST
   ↓
PRIORITIZATION
   ↓
FIELD VERIFICATION
   ↓
CLEANUP
   ↓
FEEDBACK
   ↓
MODEL IMPROVEMENT
```

---

# 🔐 Data & Disclaimer

OceanShield AI currently uses simulated data for demonstration and development purposes.

The displayed:

* Detection confidence
* Priority scores
* Drift forecasts
* Risk classifications
* Geographic incident data

should not be interpreted as real environmental measurements or operational recommendations.

A production implementation would require validated data sources, scientific modelling, machine-learning validation, environmental expertise, and appropriate operational safeguards.

---

# 🎓 Project Purpose

OceanShield AI was developed as a practical exploration of how modern technologies can be combined to address an environmental challenge.

The project focuses on connecting:

**Artificial Intelligence + Geospatial Intelligence + Forecasting + Decision Support + Field Operations**

rather than building only a visualization dashboard.

The long-term objective is to demonstrate how technology can help transform environmental data into actionable coastal response.

---

# 👩‍💻 Author

**Bindu Bodiga**

B.Tech — Computer Science & Data Science

GitHub: [Add your GitHub profile here]

LinkedIn: https://linkedin.com/in/bindubodiga

---

# ⭐ Project Vision

> **From Satellite Pixels to Coastal Action.**

OceanShield AI aims to demonstrate a future where marine debris can be detected, its movement can be forecast, high-risk areas can be prioritized, and field teams can respond faster.

```text
SEE
 ↓
FORECAST
 ↓
DECIDE
 ↓
ACT
```

🌊 **OceanShield AI — Turning coastal intelligence into action.**
