export const parseProjectById = (projects) => {
  const bachProject = projects.splice(0, 15);
  return bachProject.map(({ id }) => id);
};

export const splitToChunks = (array, parts) => {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

const stripHtml = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");

export const parseProjects = (projects) => {
  return projects.map(
    ({ project: { id, lastUpdated, startDate, description, title } }) => ({
      id,
      lastUpdated,
      startDate,
      description: stripHtml(description),
      title: stripHtml(title),
      favorite: false,
      selected: false,
      url: `https://techport.nasa.gov/view/${id}`,
    })
  );
};

export const postsMock = [
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
];
