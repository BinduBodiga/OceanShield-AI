# OceanShield-AI
AI-powered coastal intelligence platform for marine debris detection, drift forecasting, priority assessment, and field response.
# 🌊 OceanShield AI

### From Satellite Pixels to Coastal Action

**OceanShield AI** is an AI-assisted coastal intelligence platform designed to support marine debris detection, drift forecasting, priority analysis, and field response.

> **SEE → FORECAST → DECIDE → ACT**

---

## 🚀 How It Works

OceanShield AI follows a four-stage intelligence workflow:

### 1. SEE
Detect potential marine debris from satellite imagery and assign confidence scores.

### 2. FORECAST
Estimate possible debris movement using ocean conditions such as currents and wind patterns.

### 3. DECIDE
Calculate priority levels using factors such as debris density, coastal proximity, detection confidence, and ecological sensitivity.

### 4. ACT
Convert identified incidents into actionable field workflows such as verification, cleanup scheduling, and resolution.

---

## ✨ Features

- 🗺️ Interactive GIS-based coastal dashboard
- 🛰️ Marine debris detection visualization
- 🌊 Drift forecast and trajectory visualization
- 🚨 High-priority incident identification
- 📊 Coastal risk and incident analytics
- 📍 Geo-referenced incident tracking
- ✅ Incident verification workflow
- 🧮 Transparent priority scoring
- 📈 Detection and response statistics
- 🔌 API-ready architecture for future ML integration

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Maps | Leaflet, React Leaflet |
| Icons | Lucide React |
| State Management | TanStack Query |
| Backend | FastAPI, Python |
| Data Validation | Pydantic |
| Database | SQLite |
| API | REST / JSON |
| Spatial Data | GeoJSON |

---

## 🏗️ Architecture

OceanShield AI follows a modular frontend–backend architecture.

'''text
                    OCEANSHIELD AI
                           │
                           ▼
              ┌───────────────────────┐
              │   React Frontend      │
              │                       │
              │ Dashboard             │
              │ GIS Map               │
              │ Incidents             │
              │ Analytics             │
              └───────────┬───────────┘
                          │
                     HTTP / JSON
                          │
                          ▼
              ┌───────────────────────┐
              │    FastAPI Backend    │
              │                       │
              │ API Routes            │
              │ Detection Service     │
              │ Drift Forecast        │
              │ Priority Scoring      │
              │ Incident Management   │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │      Data Layer       │
              │                       │
              │ SQLite / GeoJSON      │
              └───────────────────────┘




---

## Data Flow
User
 ↓
React Dashboard
 ↓
TanStack Query
 ↓
FastAPI REST API
 ↓
Service Layer
 ↓
Database / GeoJSON
 ↓
API Response
 ↓
Dashboard Visualization

---

##📁 Project Structure

OceanShield-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── data/
│   └── requirements.txt
│
├── data/
├── models/
├── docs/
└── README.md

---


##💻 Frontend

The current application provides an interactive coastal intelligence dashboard containing:

Mission overview
Detection intelligence
Drift forecast information
Priority analysis
Incident management
Coastal map visualization
Verification and response status
---


##📊 Current Project Status

Current stage: Frontend prototype / hackathon implementation

The current version demonstrates the core dashboard experience and intelligence workflow using prototype/demo data.

Future versions can integrate:

Real satellite imagery
Computer vision detection models
Ocean and weather APIs
Real-time drift prediction
Advanced geospatial analytics
Production database
Automated field-response workflows
---


##⚠️ Disclaimer

OceanShield AI is currently a prototype.

The displayed detection, forecasting, and priority information may use simulated or demonstration data and should not be treated as real environmental monitoring data.

---


##👩‍💻 Author

Bindu Bodiga

B.Tech – Computer Science & Data Science

GitHub: @BinduBodiga

LinkedIn: Bindu Bodiga
