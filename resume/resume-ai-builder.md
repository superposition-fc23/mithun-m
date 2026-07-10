# Mithun Manjunath
**AI Builder: Platform Architecture · APIs & Data Models · RAG/Voice AI**

Seattle, WA · mithun2389@gmail.com · +1 734-277-8735 · LinkedIn: https://www.linkedin.com/in/mithunmanjunath · GitHub: https://github.com/superposition-fc23

---

## Summary

AI builder and platform engineer with 10 years shipping products from 0 to 1 to 10 at seed to Series E startups, 5 of them bootstrapping a SaaS company. I own the API and data-model layer that lets one platform serve multiple products instead of one-off integrations, and I treat latency, reliability, and infra cost as one tradeoff surface, not three separate goals. The last three years have been about building reliable AI products end to end, a production RAG copilot at DevRev and a real-time voice AI agent at MSPbots taken solo from prototype to alpha monetization, both backed by evals, harness engineering, and observability I built myself. I write Python daily, from those production systems to hands-on machine learning and computer vision projects (spatiotemporal action spotting, robot manipulation, LLM unlearning) at UW.

## Technical Skills

- **Languages:** Python, C++, SQL, JavaScript/TypeScript
- **ML / DL:** PyTorch, scikit-learn, NumPy/Pandas, OpenCV
- **LLM / Agents:** LangChain, RAG, multi-agent orchestration, prompt engineering, semantic search
- **Voice AI:** Deepgram, Twilio, real-time pipelines, endpointing / turn-taking
- **Platform / APIs:** REST API design, data modeling, webhook & connector architecture, multi-tenant systems, microservices
- **Evals & Observability:** Deepeval, Langfuse, F1/AUC-ROC, golden datasets, shadow eval
- **Computer Vision:** YOLO, ByteTrack, Transformers, LSTM/RNN, DQN
- **Data / Infra:** ETL, MongoDB, Redis, ELK, real-time engines, AWS/GCP/Azure, Docker
- **Product:** 0 to 1, PRDs, pricing & unit economics, GTM, prioritization

## Experience

### MSPbots: AI Product Manager / Builder
*Apr 2026 - Jun 2026 · Remote*
B2B SaaS for managed service providers · 500+ customers

- Selected the production voice pipeline over 4 candidates via controlled load testing, Deepgram+Twilio at **P50 378ms / P95 437ms** (46% headroom on the 800ms SLA); modeled unit economics against Deepgram STT/TTS and Azure GPT inference cost to price 7x cheaper than the incumbent.
- Designed a PSA-agnostic intake data model and integration layer (ConnectWise, Autotask, Halo) so one voice pipeline plugged into any MSP's ticketing backend without bespoke integration work; rewrote the skill/prompt harness **637 to 274 lines** with quality up.
- Authored a 20-metric eval framework (3-tier: offline to shadow to online) and a 7-field ticket-creation failsafe via codebase analysis, **100% ticket reliability** even on sub-3s disconnects; shipped Python pipelines (ClickUp/Fathom/HubSpot via MCP) powering GTM dashboards.
- Took AI Ticket Intake from prototype to **alpha monetization in about 8 weeks**, growing the pipeline from 3 design partners to 35+ prospects.

### DevRev: Product Lead
*Nov 2022 - Mar 2024 · SF Bay Area / Bangalore*
OneCRM platform: Support, Build, and Grow unified on one system-of-record, now 6B+ API calls/year platform-wide (DevRev, 2025) · Series A ($85M seed)

- Partnered with the AI engineering lead on the API and data-model architecture unifying Support, Build, and Grow on one system-of-record, pressure-testing the design against product requirements and customer workflows.
- Architected a production RAG system (LangChain, MongoDB, hybrid + self-query retrieval) serving 10K+ queries/day at under 3s, lifting deflection from **40% to 90%** for 50+ enterprise customers.
- Shipped a DNN ticket classifier (K-means + NGBoost) routing 10K+ tickets/day at **F1 0.83**, saving 15 support hours/day; designed multi-agent LLM orchestration cutting repetitive PM work 60%.
- Led 10 PMs spanning Support, Build, Grow, and Platform across the US, Slovenia, and India; launched and scaled the Build product line to its first 50 mid-sized and enterprise customers.

### Xoxoday: VP, Product & Engineering
*Nov 2020 - Nov 2022 · Bangalore*
Incentive & commission management platform · Series C ($53M revenue)

- Architected a multi-source, real-time compute platform (Python, SQL, AWS, Redis; ETL via Azure Data Factory) processing **2B+ transactions at 99% reliability** for 5M+ users across 50 enterprise customers, with a connector marketplace unifying incentive computation across the web dashboard and mobile app.
- Built a low-code, tree-based dynamic formula builder (custom expression-evaluation engine) so non-technical users compose complex incentive logic in-browser, cutting enterprise implementation time **70%**.
- Owned product strategy and a 2-year roadmap shaped by 100+ mid-size and enterprise customer interviews and competitive positioning; partnered with sales to close strategic accounts.
- Recruited and led a 35-person org (5 PMs, 3 TPMs, 5 analysts); cut infrastructure cost 30% while holding 99% reliability, and presented quarterly business reviews to the C-suite and board.

### Shoptree: Co-founder, Product & Technology
*Jan 2015 - Nov 2019 · Bangalore*
POS & supply-chain SaaS · bootstrapped startup

- Designed a single data model spanning POS, 5-level multi-echelon inventory, and payments so restaurants could run billing, stock, and supply chain on one platform instead of stitching together point solutions.
- Architected a REST API marketplace and webhook layer (8+ integrations across payment terminals, delivery platforms, and POS hardware) with custom hardware SDKs bridging iOS/Android to card terminals and thermal printers, cutting merchant implementation time **70%**.
- Built an offline-first architecture holding **99% uptime** and sub-13s checkout on 2G networks, leaning on client-side compute so billing stayed robust through outages.
- Bootstrapped the product **0 to $1M revenue** and 300+ mid-sized and enterprise customers in 18 months, with no external funding; shipped v2.0 cutting churn 14% to 7% and lifting ARPU 30%.

## Selected Projects

**Soccer Action Spotting (CV):** *PyTorch · YOLO · ByteTrack · Transformer*
- CV pipeline on 90-min videos: **0.54 mAP / 66% val accuracy** across 162K frames; custom temporal Transformer beat the LSTM baseline.
- Novel optimizations cut compute 70% (feature caching, frame filtering) for M1-GPU / resource-constrained deployment.

**Obstacle-Aware Trajectory Planning (Robotics):** *ROS · MoveIt · OMPL RRTConnect*
- Collision-free grasping on a Kinova Gen3 Lite arm; 100% sim success and **98% pre-grasp** over 56 physical trials (sim-to-real).

**Machine Unlearning for LLMs (Privacy ML):** *LoRA · Phi-2 · Llama-2*
- Gradient-ascent vs gradient-difference unlearning; verbatim memorization to 0 with utility preserved, probed via membership-inference.

## Education

**University of Washington**: Dual Master's, Computer Engineering & Information Systems
Expected Dec 2026 · GPA 3.81 · Seattle, WA
Coursework: Computer Vision, Deep Learning, Advanced Statistical Learning, IT Strategy

**PES Institute of Technology, India**: B.E., Computer Engineering · 2010
