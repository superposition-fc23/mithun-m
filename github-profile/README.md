<div align="center">

<img src="./assets/header.svg" width="100%" alt="Mithun Manjunath, AI Product Manager and Builder. An animated product loop from customer signal to prototype, evals, and production." />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&pause=1200&color=0D9488&center=true&vCenter=true&width=760&lines=AI+Product+Manager+who+writes+the+code;Voice+AI+agents%2C+prototype+to+revenue+in+8+weeks;RAG+copilots+backed+by+evals+and+observability;0+to+1+to+10%2C+across+five+startups" alt="AI Product Manager who writes the code. Voice AI agents, prototype to revenue in 8 weeks. RAG copilots backed by evals and observability. 0 to 1 to 10, across five startups." />
</a>

[![Portfolio](https://img.shields.io/badge/Explore_my_portfolio-0B1416?style=flat-square&logo=googlechrome&logoColor=5EEAD4)](https://superposition-fc23.github.io/mithun-m/)
[![LinkedIn](https://img.shields.io/badge/Connect_on_LinkedIn-0D9488?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mithunmanjunath)
[![Email](https://img.shields.io/badge/mithun2389%40gmail.com-1F3437?style=flat-square&logo=gmail&logoColor=white)](mailto:mithun2389@gmail.com)

</div>

## I build AI products, then figure out how they earn their keep

I am an AI product manager with ten years of taking products from 0 to 1 to 10 at seed to Series E startups, including five years bootstrapping my own SaaS company to $1M. I own the whole arc: the customer problem, the data model underneath, the evals that make the product trustworthy, and the pricing and go-to-market that turn it into revenue.

The last three years have been about reliable AI in production: a **RAG copilot that lifted deflection from 40% to 90%** at DevRev, and a **real-time voice AI agent taken from prototype to paying customers in about 8 weeks** at MSPbots. I write the Python myself, and a dual master's at the University of Washington in computer vision, deep learning, and robotics keeps that engineering honest.

| DISCOVER | BUILD | SHIP |
|:---|:---|:---|
| 300+ customer interviews, jobs to be done, pricing and unit economics | Voice and RAG pipelines, platform data models, APIs, rapid prototypes in code | Three-tier evals, observability, reliability gates, GTM that converts |

## Selected impact

| Outcome | What changed |
|:---|:---|
| **40% to 90%** support deflection | Led a production RAG copilot (LangChain, MongoDB, hybrid and self-query retrieval) for 50+ enterprise customers at 10K+ queries a day, under 3s |
| **8 weeks** prototype to alpha revenue | Owned a voice AI ticket-intake agent end to end: picked Deepgram + Twilio over 4 architectures at **P50 378ms**, priced it 7x below the incumbent, grew 3 design partners to 35+ prospects |
| **100%** ticket reliability | Wrote a 20-metric, three-tier eval framework and a fallback chain so even a sub-3s hang-up still files a ticket; cut the prompt harness from 637 to 274 lines with quality up |
| **2B+** transactions at 99% reliability | Architected a real-time incentive compute platform (Python, SQL, AWS, Redis) for 5M+ users, with infra cost down 30% |
| **70%** faster enterprise onboarding | Built a low-code, tree-based formula builder so non-technical users compose their own payout logic |
| **0 to $1M**, bootstrapped | Co-founded an offline-first POS that bills on 2G networks; 300+ customers in 18 months, churn cut from 14% to 7% |

## How I think about AI products

Reliability earns trust, not features. The real MVP of a voice agent was two features done extremely well, not ten done halfway.

Measurement is a prerequisite, not a follow-up. I instrument the pipeline and write the evals before there is traffic to measure, and I treat latency, reliability, and cost as one tradeoff surface. And the bottleneck is almost never the model: it is the data, the retrieval, and the labels around it.

That is the loop I like running: **customer signal · prototype · evals · production · repeat**.

## Hands-on AI work

The engineering is how I stay grounded. These are built by hand, end to end.

| Project | What it does | Result |
|:---|:---|:---|
| [**Freight Exceptions Copilot**](https://github.com/superposition-fc23/freight-exceptions-copilot) <br><sub>Agentic AI · [live demo](https://superposition-fc23.github.io/freight-exceptions-copilot/)</sub> | A self-serve exceptions board for a freight forwarder's customers, taken from a 45-minute AI-assisted product case to a working stack: playbook RAG (LlamaIndex, Chroma), an XGBoost router between Claude Sonnet and Haiku, a deterministic guard, and quote-level citation checks in a LangGraph pipeline, with an ops kill switch per exception type | Retrieval recall@3 **1.00**, MRR 0.90; the end-to-end eval caught a source-conflict gap, and the guard took outcome accuracy from 0.857 to **1.00** |
| [**Soccer Action Spotting**](https://github.com/superposition-fc23/Soccer_action_spotting) <br><sub>Computer vision</sub> | YOLOv8 detection, ByteTrack tracking, and a temporal Transformer spotting actions across full 90-minute matches | **0.54 mAP** over 162K frames; beat the LSTM baseline; feature caching cut compute 40% so it trains on a laptop GPU |
| [**Obstacle-Aware Trajectory Planning**](https://github.com/superposition-fc23/Obstacle-aware-trajectory-planning) <br><sub>Robotics</sub> | Collision-free grasping on a Kinova Gen3 Lite arm with ROS, MoveIt, and OMPL RRTConnect | Joint-space planning took success from 40% to **100% in sim**, **98%** across 56 physical trials |
| [**Machine Unlearning for LLMs**](https://github.com/superposition-fc23/machine-unlearning-for-llms) <br><sub>Privacy-preserving ML</sub> | Gradient ascent vs gradient difference unlearning with LoRA on Phi-2 and Llama-2-7B | Verbatim memorization to **0** with utility preserved, verified by membership inference |

## Toolkit

**AI, LLMs, and voice**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![RAG](https://img.shields.io/badge/RAG_%26_Multi--agent-0D9488?style=flat-square)
![Claude](https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=anthropic&logoColor=white)
![Deepgram](https://img.shields.io/badge/Deepgram-13EF93?style=flat-square&logoColor=black)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat-square&logo=twilio&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-1F3437?style=flat-square)

**Evals and observability**

![Deepeval](https://img.shields.io/badge/Deepeval-4B32C3?style=flat-square)
![Langfuse](https://img.shields.io/badge/Langfuse-0A0A0A?style=flat-square)
![LLM as Judge](https://img.shields.io/badge/LLM--as--Judge-0D9488?style=flat-square)
![Weights & Biases](https://img.shields.io/badge/Weights_%26_Biases-FFBE00?style=flat-square&logo=weightsandbiases&logoColor=black)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)

**ML, vision, and robotics**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![LoRA](https://img.shields.io/badge/LoRA_fine--tuning-5F7A77?style=flat-square)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![YOLO](https://img.shields.io/badge/YOLOv8-111F68?style=flat-square)
![ROS](https://img.shields.io/badge/ROS-22314E?style=flat-square&logo=ros&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)

**Platform and infrastructure**

![SQL](https://img.shields.io/badge/SQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square)
![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square)

**Product**

![Strategy](https://img.shields.io/badge/0_to_1_strategy-0B1416?style=flat-square)
![Pricing](https://img.shields.io/badge/Pricing_%26_unit_economics-0B1416?style=flat-square)
![GTM](https://img.shields.io/badge/GTM_%26_experimentation-0B1416?style=flat-square)
![Leadership](https://img.shields.io/badge/Team_leadership-0B1416?style=flat-square)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

## Foundations

- **Dual Master's, Computer Engineering & Information Systems**, University of Washington (GPA 3.81)
- **B.E., Computer Engineering**, PES Institute of Technology

I treated grad school as a deliberate reset optimized for information gain: computer vision, deep learning, robot manipulation, privacy-preserving ML, and quantum algorithms, alongside IT strategy. Off the clock I grow 48,000 plants in 200 sq ft with fish, and practice reinforcement learning on my cat, Mittens.

<div align="center">

### The portfolio has the full story

[**See the case studies: problem, solution, result, and what I learned**](https://superposition-fc23.github.io/mithun-m/)

<sub>Building scalable AI across apps, multimodal, infra, and robotics.</sub>

</div>
