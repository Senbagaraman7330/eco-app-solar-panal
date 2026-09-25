export interface SiteContent {
  home: {
    hero: {
      headline: string;
      subheadline: string;
      description: string;
      stats: string[];
      ctas: string[];
    };
    energySolutions: {
      title: string;
      description: string;
      targetSectors: string[];
    };
    coreSolutions: {
      solarEpc: string;
      onGrid: string;
      offGrid: string;
      hybrid: string;
      bess: string;
    };
    whyChooseUs: {
      heading: string;
      description: string;
      processFlow: string;
      supportingNote: string;
    };
    finalCta: {
      headline: string;
      body: string;
      button: string;
    };
  };
  aboutUs: {
    hero: {
      headline: string;
      body: string;
    };
    mission: {
      headline: string;
      body: string;
    };
    approach: {
      headline: string;
      steps: string[];
    };
  };
  solarEpc: {
    hero: {
      headline: string;
      subhead: string;
      description: string;
    };
    deliverables: {
      projectDevelopment: string;
      engineeringDesign: string;
      procurement: string;
      constructionInstallation: string;
      testingCommissioning: string;
      operationsMaintenance: string;
    };
  };
  onGrid: {
    hero: {
      headline: string;
      subhead: string;
      description: string;
    };
    howItWorks: string;
    idealFor: string;
    keyBenefits: string[];
  };
  offGrid: {
    hero: {
      headline: string;
      subhead: string;
      description: string;
    };
    howItWorks: string;
    idealApplications: string;
  };
  hybrid: {
    hero: {
      headline: string;
      subhead: string;
      description: string;
    };
    whyHybrid: string[];
    bestFor: string;
  };
  bess: {
    hero: {
      headline: string;
      subhead: string;
      valueProposition: string;
      cta: string;
    };
    whyBusinessesNeedBess: {
      corePrinciple: string;
      withoutStorage: string;
      withStorage: string;
    };
    howBessWorks: string[];
    components: string[];
    applications: string[];
    safetyArchitecture: string;
    designProcess: string[];
    finalCta: {
      headline: string;
      subhead: string;
      button: string;
    };
  };
  contactUs: {
    hero: {
      headline: string;
      description: string;
    };
    formFields: {
      name: string;
      company: string;
      phoneNumber: string;
      email: string;
      location: string;
      connectedLoad: string;
      monthlyConsumption: string;
      solarRequirement: string;
      bessRequirement: string;
      message: string;
      ctaButton: string;
    };
  };
}

export const siteContent: SiteContent = {
  home: {
    hero: {
      headline: "Powering Businesses With Smarter Solar & Energy Storage",
      subheadline: "Solar EPC. Battery Energy Storage. Reliable Power. Engineered for Performance.",
      description: "From rooftop solar systems to MW-scale solar plants and advanced battery energy storage solutions, we design, execute and support energy systems built around your power requirements.",
      stats: [
        "3+ Years of Solar Project Experience",
        "KW to MW-Scale Projects",
        "End-to-End EPC & O&M"
      ],
      ctas: [
        "Get a Free Energy Assessment",
        "Talk to an Energy Expert"
      ]
    },
    energySolutions: {
      title: "Solar Power That Works for Your Energy Goals",
      description: "Every business has a different energy profile. Your solar system should be designed around your consumption, load pattern, available space and operating requirements.",
      targetSectors: [
        "Industries & Manufacturing Units",
        "Commercial Buildings",
        "Hospitals",
        "Educational Institutions",
        "Warehouses",
        "Large Facilities",
        "Residential Applications",
        "Utility-Scale Solar Projects"
      ]
    },
    coreSolutions: {
      solarEpc: "From engineering and procurement to installation, commissioning and O&M, we manage your solar project from concept to completion.",
      onGrid: "Generate power from solar and use the grid as part of your energy ecosystem.",
      offGrid: "Designed for locations where reliable grid access is limited or energy independence is a priority.",
      hybrid: "Combine solar, battery storage and grid power for greater flexibility and backup capability.",
      bess: "Store energy when it is available and use it when it delivers the greatest operational or economic value."
    },
    whyChooseUs: {
      heading: "Engineering Before Equipment",
      description: "We don't start with a product. We start with your energy requirement.",
      processFlow: "Energy Assessment → System Design → Engineering → Procurement → Installation → Commissioning → O&M",
      supportingNote: "Turnkey EPC model backed by an experienced project workforce."
    },
    finalCta: {
      headline: "Ready to Build a Smarter Energy System?",
      body: "Tell us your connected load, monthly consumption and energy requirements. Our team will help identify the right combination of solar, storage and backup power.",
      button: "Get Your Energy Assessment"
    }
  },
  aboutUs: {
    hero: {
      headline: "Engineering a Cleaner, More Reliable Energy Future",
      body: "Eco Apps Solutions is a turnkey solar solutions provider with more than 12 years of experience executing KW and MW-scale solar power projects in India. We bring together project development, engineering, procurement, construction, operations, maintenance and government liaisoning under one integrated approach."
    },
    mission: {
      headline: "Make Clean Energy Practical, Reliable & Cost-Effective",
      body: "Our objective is to develop cost-efficient alternatives to conventional energy sources while delivering professionally engineered renewable energy systems."
    },
    approach: {
      headline: "One Partner. One Integrated Energy Journey.",
      steps: [
        "01 — Understand: We study your energy consumption, load profile, site and operating requirements.",
        "02 — Engineer: Our technical team develops a system around your actual energy requirements.",
        "03 — Execute: We manage procurement, installation, construction and commissioning.",
        "04 — Optimize: We monitor system performance and provide long-term maintenance support."
      ]
    }
  },
  solarEpc: {
    hero: {
      headline: "End-to-End Solar EPC Solutions",
      subhead: "From Concept to Commissioning — We Engineer the Complete Solar Project.",
      description: "Our EPC approach covers the complete project lifecycle, allowing customers to work with a single technical partner from project development through long-term operations and maintenance."
    },
    deliverables: {
      projectDevelopment: "Site assessment, feasibility analysis and project planning.",
      engineeringDesign: "System sizing, electrical design, equipment selection and project engineering.",
      procurement: "Quality-focused sourcing and evaluation of project components.",
      constructionInstallation: "Professional installation and project execution.",
      testingCommissioning: "System testing, commissioning and project handover.",
      operationsMaintenance: "Long-term support to maintain consistent and reliable operation."
    }
  },
  onGrid: {
    hero: {
      headline: "On-Grid Solar Systems",
      subhead: "Generate Solar Power. Reduce Grid Dependency. Optimize Energy Costs.",
      description: "An on-grid solar system connects your PV installation to the electricity grid. Solar power is used by the connected loads, while surplus generation can be exported to the grid subject to applicable regulations and metering arrangements."
    },
    howItWorks: "Solar Panels → DC Power → On-Grid Inverter → AC Power → Building Loads (Surplus exports to grid; deficit drawn from grid seamlessly).",
    idealFor: "Factories, Commercial Buildings, Hospitals, Schools & Colleges, Offices, Warehouses, Institutions, Homes.",
    keyBenefits: [
      "Reduce dependence on conventional grid electricity",
      "Generate clean electricity on-site",
      "Make productive use of rooftop/open space",
      "Reduce daytime electricity consumption from the grid",
      "Potentially export surplus generation, subject to applicable regulations",
      "Scalable from smaller installations to larger commercial and industrial systems"
    ]
  },
  offGrid: {
    hero: {
      headline: "Off-Grid Solar Systems",
      subhead: "Power Where the Grid Can't Reach.",
      description: "Off-grid solar systems operate independently of the utility grid by combining solar generation with battery storage. They are particularly useful for remote locations and applications where grid availability is limited or unreliable."
    },
    howItWorks: "Solar Panels → Charge Controller / Hybrid System → Battery Storage → Inverter → Loads",
    idealApplications: "Remote Facilities, Rural Locations, Agricultural Applications, Remote Monitoring Stations, Isolated Buildings, Critical Loads, Locations with unreliable grid supply."
  },
  hybrid: {
    hero: {
      headline: "Hybrid Solar Systems",
      subhead: "Solar + Battery + Grid — One Intelligent Energy Ecosystem.",
      description: "A hybrid solar system combines solar generation and battery storage while remaining connected to the electricity grid. This allows energy to be generated from solar, stored for later use and supplemented by grid power when required."
    },
    whyHybrid: [
      "Use Solar When Available: Generate clean power during solar hours.",
      "Store Excess Energy: Capture surplus generation instead of allowing it to go unused.",
      "Use Stored Energy When Needed: Discharge stored energy based on your operating requirements.",
      "Maintain Grid Connectivity: Use grid power when solar and storage cannot meet demand."
    ],
    bestFor: "Businesses that need solar savings, energy storage, backup capability, better energy flexibility, and reduced grid dependency."
  },
  bess: {
    hero: {
      headline: "Store Energy. Shift Power. Control Your Energy.",
      subhead: "Advanced Battery Energy Storage Systems for Commercial, Industrial & Renewable Energy Applications.",
      valueProposition: "Electricity doesn't always have the same value at the time it is generated and the time it is needed. A Battery Energy Storage System (BESS) allows electricity generated from solar or supplied by the grid to be stored and dispatched when required. Power when you need it. Energy when it matters.",
      cta: "Design My BESS Solution"
    },
    whyBusinessesNeedBess: {
      corePrinciple: "Solar Generates When the Sun Shines. Your Business Doesn't Stop When the Sun Sets.",
      withoutStorage: "Solar Generation → Immediate Consumption → Surplus / Curtailment",
      withStorage: "Solar Generation → Load + Battery Charging → Stored Energy → Later Discharge"
    },
    howBessWorks: [
      "01. Charge: Energy from solar or the grid enters the BESS through a bidirectional Power Conversion System (PCS).",
      "02. Store: Battery modules store electrical energy while the BMS monitors state of charge, battery condition, and thermal metrics.",
      "03. Manage: The EMS determines when the system charges, discharges, remains on standby, or interacts with the grid.",
      "04. Discharge: Stored DC energy is converted into AC power through the PCS and supplied to the load or grid.",
      "05. Protect: BMS, electrical protection, thermal management, and fire safety systems work together to safeguard the installation."
    ],
    components: [
      "Battery System: Energy storage core containing cells, modules, and racks (LFP chemistry).",
      "PCS (Power Conversion System): Converts AC to DC (charging) and DC to AC (discharging).",
      "BMS (Battery Management System): Cell-level parameter monitoring and safe operation management.",
      "EMS (Energy Management System): Logic controller setting automated dispatch and tariff strategies.",
      "Thermal Management: Precision HVAC/liquid cooling maintaining optimal cell temperatures.",
      "Protection & Safety: Multi-tier electrical isolation, deflagration venting, and fire suppression.",
      "Communication & Monitoring: Cloud telemetry, remote SCADA, and operational dispatch control."
    ],
    applications: [
      "1. Peak Shaving: Reduce peak demand drawn from the grid during high-tariff windows.",
      "2. Load Shifting: Store energy during low-demand periods; discharge during expensive operating hours.",
      "3. Solar Energy Storage: Maximize self-consumption and eliminate daytime curtailment.",
      "4. Renewable Energy Integration: Smooth PV generation curves against intermittency.",
      "5. Backup & Resilience: Emergency instantaneous black-start power to critical loads.",
      "6. Microgrid Support: Localized generation-demand balancing alongside solar and generators.",
      "7. EV Charging Support: Buffer the grid against high-KW EV charger spikes."
    ],
    safetyArchitecture: "BMS logic, cell-level monitoring, over/under-voltage protection, over-temperature cutoff, short-circuit protection, thermal runaway isolation, fire detection/aerosol suppression, and emergency stop (EPO).",
    designProcess: [
      "Step 1 — Energy Audit: Understand consumption profile and historical demand logs.",
      "Step 2 — Load Analysis: Identify peak demand spikes, critical loads, and operating schedules.",
      "Step 3 — Solar Analysis: Evaluate existing or projected solar generation curves.",
      "Step 4 — Storage Sizing: Determine exact Power (kW) and Energy (kWh) capacity needs.",
      "Step 5 — Operating Strategy: Program peak shaving, arbitrage, backup, or solar self-consumption.",
      "Step 6 — System Design: Integrate battery racks, PCS, BMS, EMS, and balance of system (BOS).",
      "Step 7 — Installation & Commissioning: Execute civil footing, electrical tie-in, and testing.",
      "Step 8 — Monitoring & O&M: 24/7 cloud telemetry tracking and lifecycle maintenance."
    ],
    finalCta: {
      headline: "Your Energy Doesn't Have to Follow the Grid.",
      subhead: "Store it. Shift it. Optimize it.",
      button: "Get a BESS"
    }
  },
  contactUs: {
    hero: {
      headline: "Let's Design Your Energy Solution.",
      description: "Whether you're planning a new solar project, upgrading an existing system or exploring battery energy storage, our team can help you evaluate the right solution."
    },
    formFields: {
      name: "Full Name",
      company: "Company / Facility Name",
      phoneNumber: "Contact Phone Number",
      email: "Business Email Address",
      location: "Project Location (City, State)",
      connectedLoad: "Sanctioned Load (KW / KVA)",
      monthlyConsumption: "Average Monthly Consumption (Units / kWh)",
      solarRequirement: "Dropdown (On-Grid / Off-Grid / Hybrid / MW Ground Mount / Exploring)",
      bessRequirement: "Dropdown (Peak Shaving / DG Offset / ToD Arbitrage / Microgrid / None)",
      message: "Tell us about your project or available rooftop/land area",
      ctaButton: "Request a Consultation"
    }
  }
};
