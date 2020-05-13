import { all, delay, call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";
import * as utils from "./utils";

const posts = [
  {
    id: 94231,
    lastUpdated: "2020-05-11",
    startDate: "Oct 2015",
    description:
      "Demonstration of an Multidisciplinary Design Analysis and Optimization (MDAO) Process for Vertical Lift Vehicles challenge is to overcome the current practice of a serial design approach using single-discipline optimization, NASA will develop and demonstrate a streamlined, integrated, multi-disciplinary optimization process of consistent fidelity for conceptual design of Vertical Takeoff and Landing (VTOL) aircraft. ",
    title:
      "Demonstration of an  Multidisciplinary Design Analysis and Optimization (MDAO) Process for Vertical Lift Vehicles",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94231",
  },
  {
    id: 17436,
    lastUpdated: "2020-05-07",
    startDate: "Oct 2014",
    description:
      "The ICI mission concept provides a new approach for investigating&nbsp;unique planetary atmosphere&nbsp;in a thorough manner which will greatly increase our scientific knowledge of planets. The ICI mission concept is to provide a means to analyze the environments at multiple locations and altitudes to determine its constituents and behaviors.",
    title: "In-depth Composition Investigation",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/17436",
  },
  {
    id: 93992,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "We will provide actuation for JPL's light-weight and robust passive tensegrity lander, and develop simplified actuation based on either traction motors or payload-based actuation for JPL lander. We will develop minimal actuation topology and control using NTRT (NASA Tensegrity Robotics Toolkit), and evaluate how each actuation pattern performs based on the pattern's weight, size, control complexity, and achievable positioning from random initial orientations. We would then propose further development and funding through either the NASA Innovative Advanced Concepts program (NIAC), or by incorporating into a multi-year Game Changing Development (GCD) program that we hope to start up in FY18.",
    title:
      "Development of a Lightweight Mobility System for a Passive Tensegrity Lander",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93992",
  },
  {
    id: 94016,
    lastUpdated: "2020-05-01",
    startDate: "Aug 2017",
    description:
      "Using the compliant materials and distributed fluid actuation employed in soft robotics, I propose a thin and conformal actuator to be integrated with controllable adhesives. In section 10.1.4 of the NASA Technology Area (TA) Roadmap the need for hierarchical compliance, in controllable adhesives, to conform to irregular and uneven surfaces is well established. Soft robotics offers a highly promising solution to this problem due to inherent compliance, global load distribution, and conformal properties. However, soft robotic designs are often not regarded as suitable space technology candidates because they typically employ elastomeric materials, use pressure differentials for actuation, and do not guarantee precise movement or positioning. By using the hierarchical compliance and load distribution possible with soft robotics, for which the material and design methodologies will have to be validated for space application, my proposed soft robotic actuator should have the ability to substantially aid on-orbit gripping technologies. By developing an actuator for integration with controllable dry adhesives, I offer a solution to a direct technology pull from NASA in regard to surface conformity of controllable adhesives, while also addressing the more fundamental question of how to apply advances in the field of soft robotics to broader space applications.  The core technology I propose is a thin fluid elastomer actuator optimized to aid controllable dry adhesives by generating preload, increasing load distribution, and most importantly, by conforming to a broad range of surface geometries. Fluidic elastomer actuators have a sealed internal cavity and can be used to generate motion by varying internal fluid pressure. The actuator can be directed to move with a specific motion by configuring the design and geometry of the internal chambers and the encapsulating elastomer layers. Thus, with a non-uniform stiffness, the actuator can be designed to extend, bend, or twist. A key property of elastomer actuators is that if in contact with a foreign object, actuator deformation patterns change due to the low stiffness of the actuator relative to the object. This property poses tremendous potential for controllable dry adhesives. By making a thin and highly conformal elastomer actuator pad, designed for use with such adhesives, it is possible to make an actuator that will conform to irregular surface geometries. My initial prototypes conform well to commonly found hardware and surfaces.   Based on the property of elastomer actuators to conform to surrounding objects, their ability to generate preload with axial extension, and their distributed loading patterns, my hypothesis is that elastomeric actuators will enable dry adhesives to maintain adhesion on irregular surface geometries, such as those found on spacecraft. Specifically, I seek to use soft robotic optimization and modeling techniques to maximize and predict surface contact and adhesive force of the proposed actuator and integrated dry adhesives. As I develop prototypes, I will test this hypothesis in three ways. I will compare adhesive strength with and without an elastomer actuator, on flat surfaces, to ensure load distribution and preload properties are maintained. I will measure adhesive strength on a broad set of space-relevant irregular surfaces, such as MLI sheeting, surfaces with bolt heads, corners, and compound curves, and compare the adhesion to the baseline established for flat surfaces. Finally, I will show that this technology addresses complicated space tasks by grasping tumbling objects in two dimensions on air bearing platforms and in three dimensions with parabolic flight.",
    title:
      "Extending Controllable Adhesive Technologies to Irregular Surfaces with Soft Robotic Actuation",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94016",
  },
  {
    id: 88582,
    lastUpdated: "2020-05-01",
    startDate: "Aug 2016",
    description:
      "The goal is to developing a miniaturized shortwave infrared (SWIR) spectrometer that is based on quantum dot absorptive filter array. The important features of the spectrometer are: small form-factor for portability, robustness due to absence of expensive and fragile dispersive optics, and quick acquisition due to the multiplexed filter array from which any arbitrary spectrum can be detected without scanning and be deconvoluted using a sophisticated algorithm. Different batches of quantum dots will be used as a unique filter and deposited on a solid substrate as an array. The filtered spectrum is recorded by the SWIR camera as an intensity profile and translated into a meaningful spectrum via reconstruction algorithm. The miniaturized quantum dot spectrometer can be used in environments where the form-factor of the spectrometer and fast acquisition capability is crucial, such as space applications.",
    title:
      "Developing Quantum Dot Absorptive Filter Array based Miniaturized Spectrometer for Space Applications",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/88582",
  },
  {
    id: 94089,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Use of inorganic nanoparticles which have been recently explored for therapeutic purposes in the treatment of oxidative stress disorder, cancer and heart diseases due to their strong free radical scavenging capacity (anti-oxidant).#Candidate nanoparticles include Al2TiO5, CeO2, etc.#Selected inorganic nanoparticles have been proven to show excellent free radical scavenging capabilities.#Synthesis of nanocomposite (cyanate ester, bismaleimide, etc.) incorporated with nanoparticles and fibers.#Space environment resistant property is characterized under high energy radiation exposure (high energy proton, electron, UV, vacuum, etc.) via collaboration (MSFC).",
    title: "Bio-Inspired Space Environment-Resistant Polymer Composite",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94089",
  },
  {
    id: 95699,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Spectrometers are powerful tools that are widely used in chemical and biological sensing, material characterization, and analysis of astronomical objects. The development of a high-resolution on-chip spectrometer could enable compact, versatile, energy-efficient spectroscopy for portable sensors as well as increasing lab-on-chip functionality. However, integrated spectrometers based on gratings require large footprints, while the ones based on holography have limited sensitivity. In this program, we aim to address these critical challenges by leveraging the newly emerging metasurface technology. Our goal is to build an ultra-compact on-chip integrated spectrometer with high resolution, high sensitivity, and a small footprint via integration of optical metasurfaces and integrated waveguides. The spectrometer will be fully compatible with the current photonic integrated circuits. The proposed approach will be validated through electromagnetic theory, full-wave simulations, and experimental demonstration of nanofabricated devices. The technology will allow us to develop miniaturized spectroscopy for a new variety of lab-on-chip applications, integrated photonic sensors, and wearable optical devices. ",
    title:
      "Ultra-compact On-chip Integrated Spectrometers based on Metasurfaces",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95699",
  },
  {
    id: 93863,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "We will integrate a microheater as an on-chip in-situ annealing functional block into the unused backside of the COTS chip. The radiation degradation will be monitored, and the microheater will be triggered, as needed, to anneal out the defects. Next steps include submitting a NIAC and GCDP proposal.",
    title: "Self-Healing Electronics for Deep Space Missions",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93863",
  },
  {
    id: 95508,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2018",
    description:
      'This proposed effort builds on a 2017 CIF/IRAD titled Safe Crew Abort and Recovery for Ascent and Descent at the Moon and Mars that presented a reusable transportation system concept known as Hercules that validated the conceptual capability to perform safe crew aborts at both the moon (during descent and ascent phases) and at Mars (during ascent, entry, descent and landing phases). The Hercules vehicle concept, developed initially to support Mars landings, now supports a range of mission segments including Earth launch, cis-lunar operations, lunar landings, interplanetary transfer between Earth and Mars, and at Mars as a single-stage reusable lander. The commonality of the vehicle structure and configuration across a range of missions with increasing capability beyond Earth orbit provides a low cost development strategy that can initiate in the near term to support cis-lunar and lunar landing operations while buying down the risk of future missions supporting Mars. In addition, key technologies and capabilities needed for many beyond low-Earth orbit missions are proven in the near term using the Hercules platform by flying low cost, low risk missions at Earth and in cis-Lunar space. These technologies include several "system-level" capabilities that are at or near Technology Readiness Level (TRL) 5 or 6 but lack the system development and demonstration in relevant environments to cross the proverbial technology "valley of death". This includes technologies and capabilities such as: 1) demonstration of large-scale EDL, 2) demonstration of aerocapture; 3) demonstration of cryogenic propellant management and long-duration propellant storage; and 4) demonstration of cryogenic propellant resupply.\\nIdea Description\\n     Today, optimization of vehicle performance for each mission segment drives NASA to procure unique systems for each segment. While optimal from a mass performance and near-term affordability standpoint, these systems often neglect or give lip-service to the risk mitigation, crew safety, and long-term affordability attributes of the architecture when viewed not as a single mission but as a long-term campaign. Hercules\' reusable, commonality-driven design in support of a long-term settlement campaign strategy allows design and operations risks to be mitigated/retired in the near-term while long-term affordability and risk benefits are realized through demonstrated reusability and crew safety. This strategy is extremely important to NASA and commercial enterprises interested in economic development of the moon and space. If successful, the common Hercules vehicle platform will enable both NASA (science, exploration and settlement) and industry (economic development) goals over several decades.',
    title:
      "Reusable, Aeroassisted Orbit Transfer Vehicle Development that Mitigates Mars Transportation System Risks",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95508",
  },
  {
    id: 95630,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2018",
    description:
      "The PI would like to performing material testing and analyses to quantify the level of conservative associated with using static loads analyses for dyanmic load requirements to provide evidence to advocate for a new philosophy of dyanmic loads assessment.",
    title: "Revolutionary Methods to Reduce Conservatism in Design Loads",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95630",
  },
  {
    id: 93895,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Scheduled maintenance is inefficient and costly with no ability to take into account actual hardware degradation. The goal of this project is to develop a generic cost-effective embodiment that is relatively independent of the type of physical equipment being monitored by employing machine learning for prognostics monitoring. Prototype units will be developed with embedded novel machine learning algorithms for cryogenic equipment in the engine test complex as pilot demonstration systems. Energy harvesting technologies will also be integrated to further demonstrate low powered energy harvesting health monitoring capabilities.   ",
    title:
      "Embedded and Distributed Machine Learning for Prognostics Monitoring",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93895",
  },
  {
    id: 95683,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2018",
    description:
      "The approach is to determine requirements for contamination levels on the collector cone wall, in connection with the effect of incoming ice particle, which, upon collision & shattering, free\\npotential contaminants present on the cone wall. The impact of the roughness of the cone's surfaces will be assessed on the effectiveness of collector cleaning/sanitation protocols.",
    title:
      "Collector Contamination Requirements for Life Detection in Enceladus' Icy Plumes",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95683",
  },
  {
    id: 94114,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Develop PL&HA technologies for infusion into 2020's robotic science missions and with a path for follow-on infusion into precursor and human Moon or Mars missions. Develop a multi-mission PL&HA Requirements Matrix for a suite of prioritized destinations. Develop sensors, avionics, algorithms and approaches that achieve these requirements. Test PL&HA systems in hardware-based simulations and onboard terrestrial vehicles to assess performance, advance TRL and foster mission infusion.",
    title: "Safe & Precise Landing Integrated Capabilities Evolution",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94114",
  },
  {
    id: 94112,
    lastUpdated: "2020-05-01",
    startDate: "Aug 2016",
    description:
      "With lithium-ion battery technology reaching its theoretical specific energy limit, electric vehicles, unmanned aerial vehicles, spacecraft and spacesuits alike require a breakthrough battery electrochemistry to unlock new range and capabilities. Among the beyond Li-ion \u009d battery chemistries studied to date, the nonaqueous lithium-oxygen battery has the highest theoretical specific energy. Critical scientific challenges prevent the realization of this high specific energy, however, including the insulating nature of the electrochemical discharge product, lithium peroxide. As lithium peroxide forms in the battery, it passivates the battery cathode, leading to low ultimate cell capacities. As a graduate student researcher at the University of California, Berkeley, I recently published work on the ability of an appropriately selected anion to increase solubility of the electrochemical intermediate to lithium peroxide formation, lithium superoxide (LiO2), by lowering the free energy of the lithium cation (Li+) in solution. I showed this increase in lithium superoxide solubility enhanced a different lithium peroxide growth mechanism, circumventing the passivation issue and increasing battery capacity. The effect of anion-induced solubility is limited, however, by the already low free energy of Li+ in solution. As a next step, I hypothesize that the addition of appropriately selected non-Li alkali metal cations to the electrolyte in nonaqueous lithium-oxygen batteries will enhance LiO2 solubility more so than the anions I previously studied by lowering the free energy of O2- in solution, resulting in a larger increase in battery capacity. To test this hypothesis, I plan to build laboratory-scale lithium-oxygen batteries containing electrolytes with and without non-Li alkali metal cations, and characterize battery capacity via galvanostatic cycling, lithium peroxide growth via scanning electron microscopy, and lithium superoxide solubility via nuclear magnetic resonance spectroscopy. ",
    title:
      "Electrolyte Engineering Toward Increasing Nonaqueous Lithium-Oxygen Battery Capacity",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94112",
  },
  {
    id: 95658,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2018",
    description:
      "WDM has been used for transmission over fiber optics, but not for deep space communications. NASA currently uses only single wavelength optical transmission. Optical WDM communication is more suitable for high data rate transmission with a lower complexity optical receiver, and it reduces the load on signal processing while enabling parallel processing. If we apply this technology to WDMA, a simultaneous communication can be provided between a constellation of CubeSats and an Earth station. The proposed technical approach provides a new architectural capability compared to the present state-of-the-art optical communication systems utilized by NASA.\\n",
    title:
      "Wavelength Division Multiplexing with 2-D PPM for Optical Space Communications",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95658",
  },
  {
    id: 93891,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "To incorporate the (1x24) optical switches into the FOSS unit architecture, research will be conducted into establishing communication and synchronization between the optical switches, peripheral sensors and accompanying data acquisition system, sweeping laser and the data management system. # The optical switches will cycle through sensing fibers periodically until an event is triggered. The use of peripheral sensors will provide feedback to the optical switches to intelligently interrogate sensing fibers of interest temporarily, then resume periodic switching. The use of optical switches will also allow for a redundant interrogation path by allowing interrogation from two ends of a sensing fiber. In the event where a sensing fiber is damaged, the fiber could be examined from two ends to recover data that may otherwise have been lost. Redundancy may be critical for certain research vehicles, and is currently unobtainable with the current system architecture.",
    title:
      "Structural Health Monitoring utilizing an Automated Optical Fiber Switching Network",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93891",
  },
  {
    id: 95623,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2018",
    description:
      "The team will design and produce experiments to determine the effectiveness of electrospraying water with dissolved nutrients (fertilizer) on multiple surfaces including plant roots. The experiments will be based on the initial results from Comsol multiphysics models, New Ideas Challenge/Kickstart results and decades of research in electrostatics and botany by the Electrostatics Surface Physics Lab (KSC), Ed Law (U of Georgia), Ken Giles (UC Davis) and Hazel Wetzstein (Purdue). We will accelerate development time by repurposing an existing UC Davis lab experiment used for electrostatic control of pesticide and pollen delivery. Key technical challenges: control of droplet size, charge and velocity to deliver the appropriate amount of water for each root structure.",
    title: "Electrolyte with Ultra-High Salt Concentration",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95623",
  },
  {
    id: 88644,
    lastUpdated: "2020-05-01",
    startDate: "Aug 2016",
    description:
      "High substrate costs, as well as weight, typically play a major role in the high costs of multijunction space solar cell production and deployment. III-V/Si multijunction structures provide a potential solution to this through the use of an exceptionally inexpensive (and lightweight) substrate that also serves as an active cell component, combined with a III-V semiconductor stack tailored to space PV needs to provide high efficiency. Already, GaP/Si has been demonstrated in MBE and MOCVD growth modes, with dual junction cells for terrestrial application under development.  This proposed work seeks to generate optimized III-V/Si structures for space power generation. Using prior knowledge of terrestrial photovoltaics efforts in III-V/Si technology, my goal is to adapt these dual junction (and ultimately triple junction) devices for space deployment via tailoring the bandgaps of the III-V component(s) for optimized AM0 absorption, and addressing radiation hardness issues with silicon. With the right composition of GaAsyP1-y and (AlzGa1-z)xIn1-xP alloys on silicon, maximum efficiencies under AM0 are calculated to be ~41% and ~45% for the dual and triple junction cells respectively.  A significant part of this optimization process will involve investigation of metamorphic materials required to join the GaP lattice constant to the targeted GaAsyP1-y and (AlzGa1-z)xIn1-xP alloys, enabling the optimum composition/bandgaps for dual junction and triple junction devices. Metamorphic materials encompass many forms of crystalline defects which, above certain levels, greatly hinder device performance and effectiveness. Aside from normal characterization methods, including: photoluminescence spectroscopy (PL), Hall mobility, high-resolution triple-axis X-ray diffraction (XRD), and transport measurements (I-V, C-V, etc.), I will use a novel characterization technique, electron channeling contrast imaging (ECCI), to quantify defect populations and behaviors within these metamorphic materials. This work, being traditionally performed in plan-view TEM, will be significantly expedited due to the use of ECCI, which requires minimal sample preparation and avoids destroying a device. Thus, it will allow a less hindered development of defect mitigated metamorphic materials, allowing devices to more closely approach their theoretical efficiencies.  A supporting task of this research will also be to optimize the GaP/Si bottom cell for space deployment. Radiation hardness remains an issue, though I will investigate the potential benefits and demerits of utilizing thin-Si to mitigate these issues. Radiation studies will be used to understand how to design the Si bottom cell around these potential problems.  Another part of this research will be focused on device growth via MBE and MOCVD, first demonstrating space-optimized dual junction III-V/Si cells, and later developing triple junction cells. Holistic device design will be guided by physics-based modeling using technology computer aided design (TCAD) software. Individual components and entire devices will be modeled using up-to-date empirical materials properties data, dislocation aspects garnered from the metamorphic material characterization, and full testing results (e.g. DIV, LIV, QE, etc.) in an iterative developmental cycle, resulting in the realization of dual and triple junction III-V/Si photovoltaics optimized to efficiently generate solar power in space, while keeping costs of production and deployment low.",
    title: "Development of III-V/Si Multijunction Space Photovoltaics",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/88644",
  },
  {
    id: 94050,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Safety incidents, including injuries, property damage and mission failures, cost NASA and contractors thousands of dollars in direct and indirect costs. This project seeks to define, develop and test an algorithm(s) that will use hazard identification data as input to predict when and where there is a high probability of a safety incident occurring so that resources and attention can be appropriately matched based to the priority of concern.",
    title: "Prediction of Safety Incidents",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94050",
  },
  {
    id: 93922,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Currently challenges in facility maintenance and in implementing facility modifications/upgrades (e.g., rocket engine test stands) can be found in gaps in fully understanding the data collected about a facility due to use of multiple separate databases and inaccurate and inefficient processes further introducing errors in data. This project will explore a way to template those processes through the use of augmented reality (AR) and virtual reality (VR) technologies to improve efficiencies and accuracies in interpreting facilities for modifications and adaptations to keep pace with the rapidly evolving engine test needs of the center.      ",
    title: "Development of AR/VR Capabilities for Facility and Mission Support",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93922",
  },
  {
    id: 93197,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "The research plan includes combining terrain relative navigation with an optical camera with local map (hazard relative navigation) wih a LiDAR. We will investigate how to integrate both optical nav schemes whether it is the transition from one to the other or combining them. The funds for increasing lab fidelity will be spend on an automotive car LiDAR fr better local terrain mapping indoors (and outdoors), and a high fidelity mock terrain surface to test algorithms. The results of this project will help SPLICE, which is NASA's precision landing technology development project for the next 2 years at least. ",
    title: "Onboard Adaptive Safe Site Identification System",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93197",
  },
  {
    id: 93987,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "1) Creating techniques for 3D printing electroluminescent devices for incorporation into printed electronics devices (i.e. displays, signage, indicator lights)#2) Reformulating/Optimizing inks to create devices ideal for overhead lighting (potential for future use as light source in printed habitats)",
    title: "3D printed Electroluminescent Light Panels - FY18",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/93987",
  },
  {
    id: 95602,
    lastUpdated: "2020-05-01",
    startDate: "Jan 2018",
    description:
      "Several probing missions of various types to near Earth small bodies and asteroids have been conducted and proven to have great scientific return. These include flybys, such as Mariner 9, simple rendezvous such as NEAR-Shoemaker and Dawn, sample return such as Hayabusa, and lander/impactor such as Rosetta. Such missions have set space exploration milestones, captured the public’s attention, and paved the way for ambitious future projects in the likes of asteroid capture and even mining for resources.  Remote, human-supervised navigation and guidance for these future missions is a real challenge owing to the large distances from the Earth, Evolved spacecraft probes with increased autonomous on-board relative navigation and guidance capabilities can reduce the time and manpower required for the characterization and the subsequent navigation phases in deep space missions, thus reducing mission cost and complexity. We propose to develop, test and implement the necessary theories and algorithms for inspection, geometric reconstruction and tracking of a small celestial body (e.g., asteroid) in space, using different sensor modalities, including both passive sensors (visual light and infrared cameras) and time-of-flight (TOF) 3D active sensors such as flash-LiDARs. Traditional localization and shape reconstruction methods developed primarily for ground robots need to be modified in order to address the environmental challenges encountered in space (e.g., illumination conditions, absence of background inertial feature points), as well as spacecraft onboard restrictions (limited power, fuel, and computational resources). The proposed algorithms will advance the state-of-the-art in autonomous small body navigation and maneuvering for a broad class of future small celestial body missions, including remote characterization, sample return, resource utilization, etc. ",
    title:
      "Autonomous Multi-Spectral Relative Navigation, Active Localization, and Motion Planning in the Vicinity of an Asteroid",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95602",
  },
  {
    id: 94093,
    lastUpdated: "2020-05-01",
    startDate: "Aug 2017",
    description:
      "Robotic manipulation has wide applications both on Earth and in space. Dexterous manipulators have been carefully designed to assist astronauts with dangerous and time-consuming tasks. Nonprehensile manipulation considers other forms of manipulation besides dexterous manipulation, greatly expanding the number of actions that robots can perform.  Planning for nonprehensile motions is particularly interesting because such algorithms can even be deployed on robots that were not designed specifically to perform manipulation tasks. This can endow planetary rovers, such as the KRex rover testbed at NASA Ames, with actions such as pushing and toppling that allow them to actively interact with their environment, in addition to passively exploring it. These interactions could someday be used to prepare for a crew's arrival by clearing rocks or filling holes from a potential base site on the moon or Mars.  When planning for these nonprehensile manipulation tasks, robots must be robust to different sources of uncertainty. The initial pose estimate of the object being manipulated will be noisy and the result of taking an action will not be known exactly. Incorporating sensor feedback would enable robots to reliably perform tasks despite this uncertainty. Developing planning algorithms that incorporate sensor feedback to produce efficient and robust nonprehensile motions under uncertainty is the main focus of this proposal.",
    title: "Closed-loop physics-based manipulation under uncertainty",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/94093",
  },
  {
    id: 95592,
    lastUpdated: "2020-05-01",
    startDate: "Oct 2017",
    description:
      "Efficient communications systems and effective computing techniques are crucial to ensure the success of each NASA mission. Considering the disrupted and wireless nature, efficient space communications require the improved automation, environment-awareness, and intelligence. To meet this requirement, this project intends to develop a resilient networking and computing paradigm (RNCP) that consists of two essential parts: (1) a secure and decentralized computing infrastructure and (2) a data-driven cognitive networking management architecture. Furthermore, we will evaluate the performance of our proposed RNCP in various space communication environments.",
    title:
      "A Resilient Networking and Computing Paradigm for NASA Space Exploration ",
    favorite: false,
    selected: false,
    url: "https://techport.nasa.gov/view/95592",
  },
];
/** WATCHERS * */
function* getPost() {
  yield put(actions.setLoader({ loading: true }));

  try {
    const serviceProjects = {
      method: "get",
      service: `${api.NASA_TECHPORT_URL}?api_key=${api.AUTH_KEY}`,
    };

    /*const {
      projects: { projects },
    } = yield call(api.request, serviceProjects);
    const projectsId = utils.parseProjectById(projects);
    console.log(projectsId);

    const projectCalls = projectsId.map((id) => {
      const service = {
        method: "get",
        service: `${api.NASA_TECHPORT_URL}/${id}?api_key=${api.AUTH_KEY}`,
      };
      return call(api.request, service);
    });

    // I have to create chunks since the service sent me a 429 error "too many request".
    const [chunk1, chuck2, chunk3, chunk4, chunk5] = utils.splitToChunks(
      projectCalls,
      5
    );
    let response = [];
    response = [...(yield all(chunk1))];
    response = [...response, ...(yield all(chuck2))];
    response = [...response, ...(yield all(chunk3))];
    response = [...response, ...(yield all(chunk4))];
    response = [...response, ...(yield all(chunk5))];

    const posts = utils.parseProjects(response);*/
    console.log("projects", posts);

    yield put(actions.setPosts({ posts }));
    yield put(actions.setLoader({ loading: false }));
  } catch (error) {
    console.log(error);
    yield put(actions.setLoader({ loading: false }));
  }
}

export default function* () {
  yield takeLatest(actionTypes.GET_POSTS, getPost);
}
