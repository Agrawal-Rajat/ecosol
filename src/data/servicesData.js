const servicesData = [
    {
        slug: "power-system-analysis",
        title: "Power System Analysis",
        heroText:
            "Advanced electrical network modeling and system performance studies to ensure stability, safety, and operational efficiency across generation, transmission, distribution, and industrial power systems.",

        overview:
            "Modern power systems require detailed analytical evaluation to ensure stability, safety, and operational efficiency. Our engineers perform advanced simulation-based studies to evaluate electrical network performance across generation, transmission, distribution, and industrial power systems.",

        scope: [
            "Load flow and power network analysis",
            "Short circuit and fault level studies",
            "Motor starting and transient stability studies",
            "Harmonic analysis and power quality assessment",
            "Contingency and reliability studies",
            "Reactive power optimization and voltage stability studies"
        ],

        deliverables: [
            "Detailed engineering study reports",
            "Simulation models and system analysis results",
            "Technical recommendations for system optimization",
            "Network performance and risk assessment documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory", "PSCAD", "Paladin DesignBase"],

        standards: ["IEC", "IEEE"],

        industries: [
            "Utilities",
            "Industrial Power Systems",
            "Energy Infrastructure",
            "Manufacturing",
            "Power Transmission & Distribution"
        ]
    },

    {
        slug: "electromagnetic-analysis",
        title: "Electromagnetic Analysis",
        heroText:
            "Electromagnetic interference and high voltage system interaction studies to evaluate electrical infrastructure impact on nearby equipment, pipelines, and communication systems.",

        overview:
            "High-voltage electrical infrastructure can create electromagnetic interactions that impact nearby equipment, pipelines, and communication systems. Our electromagnetic analysis services help identify and mitigate these risks through advanced simulation and engineering evaluation.",

        scope: [
            "Electromagnetic interference (EMI) analysis",
            "Conductive and inductive coupling studies",
            "Transmission line interaction analysis",
            "Lightning and switching transient analysis",
            "High-frequency and low-frequency EM field modeling"
        ],

        deliverables: [
            "Electromagnetic risk assessment reports",
            "EM field simulation models",
            "Interference mitigation recommendations",
            "Compliance documentation and technical validation"
        ],

        tools: ["CDEGS", "PSCAD", "Advanced EM modeling tools"],

        standards: ["IEC", "IEEE"],

        industries: [
            "Transmission Utilities",
            "Pipeline Infrastructure",
            "Telecommunications",
            "Industrial Power Systems",
            "Energy Infrastructure"
        ]
    },

    {
        slug: "grounding-analysis",
        title: "Grounding Analysis",
        heroText:
            "Electrical earthing and ground potential safety engineering services to ensure personnel protection and reliable fault current dissipation.",

        overview:
            "Grounding systems are critical for personnel safety and reliable fault current dissipation in electrical installations. Our engineers design and analyze grounding systems to ensure compliance with safety standards and operational reliability.",

        scope: [
            "Soil resistivity analysis and multilayer modeling",
            "Substation grounding grid design",
            "Step and touch voltage analysis",
            "Ground potential rise (GPR) studies",
            "Lightning protection grounding evaluation"
        ],

        deliverables: [
            "Grounding system design reports",
            "Step and touch voltage calculations",
            "Earthing layout drawings and design validation",
            "Safety compliance verification reports"
        ],

        tools: ["CDEGS", "Grounding simulation software"],

        standards: ["IEC", "IEEE"],

        industries: [
            "Substations",
            "Power Plants",
            "Industrial Facilities",
            "Energy Infrastructure",
            "Transmission Networks"
        ]
    },

    {
        slug: "power-system-protection-study",
        title: "Power System Protection Study",
        heroText:
            "Protection coordination, relay setting review, and fault level analysis to improve the safety and reliability of electrical power systems.",

        overview:
            "Power system protection studies ensure that electrical networks respond correctly to faults and abnormal operating conditions. Our engineers evaluate protective devices, coordination settings, and fault behavior to support safe and reliable system operation.",

        scope: [
            "Protection relay coordination studies",
            "Fault level and short-circuit analysis",
            "Relay setting review and validation",
            "Protection device selectivity assessment",
            "System safety and reliability analysis"
        ],

        deliverables: [
            "Protection coordination reports",
            "Fault analysis and relay setting recommendations",
            "Single-line protection diagrams",
            "Engineering review documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory", "PSCAD"],

        standards: ["IEC", "IEEE", "NFPA"],

        industries: [
            "Utilities",
            "Industrial Power Systems",
            "Substations",
            "Energy Infrastructure"
        ]
    },

    {
        slug: "solar-power-plant-engineering",
        title: "Solar Power Plant Engineering",
        heroText:
            "Integrated engineering support for solar power plants, including electrical layout development, grid interconnection, and construction-ready design documentation.",

        overview:
            "Solar power plant engineering combines electrical design, system integration, and project execution support to deliver efficient and compliant renewable energy facilities. We develop engineering packages that support planning, procurement, and installation.",

        scope: [
            "Plant electrical layout development",
            "DC and AC system design",
            "Grid interconnection studies",
            "Equipment sizing and cable routing",
            "Construction-ready engineering packages"
        ],

        deliverables: [
            "Solar plant engineering drawings",
            "Electrical design and routing documentation",
            "Interconnection and system analysis reports",
            "Project execution support documents"
        ],

        tools: ["AutoCAD Electrical", "ETAP", "PVsyst"],

        standards: ["IEC", "IEEE", "MNRE"],

        industries: [
            "Solar Developers",
            "Renewable Energy EPCs",
            "Utilities",
            "Industrial Renewable Projects"
        ]
    },

    {
        slug: "engineering-software-capabilities",
        title: "Engineering Software Capabilities",
        heroText:
            "Advanced digital simulation tools used globally for electrical engineering modeling, system analysis, and infrastructure design.",

        overview:
            "Our engineering services are supported by industry-leading simulation and modeling platforms used globally in power system design and analysis. These tools enable accurate modeling of electrical networks and infrastructure systems.",

        scope: [
            "Electrical network simulation and modeling",
            "Power system stability and network analysis",
            "Electromagnetic transient analysis",
            "Grounding and electromagnetic interference modeling",
            "Industrial power system engineering studies"
        ],
        // scope: [],


        deliverables: [
            "Digital system models and engineering simulations",
            "Electrical study reports and validation results",
            "Simulation datasets and engineering documentation"
        ],

        tools: [
            "ETAP",
            "DIgSILENT PowerFactory",
            "PSCAD",
            "CDEGS",
            "Paladin DesignBase"
        ],

        standards: ["IEC", "IEEE"],

        industries: [
            "Engineering Consultancies",
            "Utilities",
            "Industrial Facilities",
            "Energy Infrastructure",
            "Power Generation"
        ]
    },

    {
        slug: "detail-design-engineering",
        title: "Detail Design Engineering",
        heroText:
            "Complete electrical engineering design services for substations, power plants, and industrial electrical infrastructure.",

        overview:
            "Detailed engineering transforms conceptual electrical designs into executable construction-ready documentation. Our engineering team provides comprehensive design solutions for substations, power plants, and industrial electrical systems.",

        scope: [
            "Electrical Single Line Diagram, Protection & Metering Diagrams",
            "Electrical Load List",
            "Electrical Equipment Sizing Calculations - Generator Set, Transformer, HT/LT Cable, DC Charger, AC UPS System, Battery, Switchgear",
            "Electrical System Design Calculation - Earthing, Lightening, Illumination",
            "Layout Engineering - Substation, Field Equipment, Earthing and Lightening, Lighting and Small Power"
        ],

        deliverables: [
            "Engineering drawings and design documentation",
            "Electrical load calculations and equipment specifications",
            "Cable schedules and electrical layout plans",
            "Construction-ready engineering packages"
        ],

        tools: ["International Electrical Codes"],

        standards: ["IEC", "IEEE", "NEC"],

        industries: [
            "Power Plants",
            "Substations",
            "Industrial Facilities",
            "Manufacturing Plants",
            "Energy Infrastructure"
        ]
    },

    {
        slug: "procurement-assistance",
        title: "Procurement Assistance",
        heroText:
            "Technical procurement support services for electrical infrastructure projects to ensure equipment reliability and vendor compliance.",

        overview:
            "Selecting the right electrical equipment and vendors is essential for project reliability and long-term operational performance. Our procurement support services ensure that equipment specifications, vendor proposals, and procurement decisions align with engineering requirements.",

        scope: [
            "Preparation of technical specifications and RFQ documentation",
            "Vendor prequalification and technical bid evaluation",
            "Vendor proposal analysis and compliance review",
            "Post Order Vendor Document Review",
            "Equipment performance comparison and recommendation"
        ],

        deliverables: [
            "Technical bid evaluation reports",
            "Vendor comparison matrices",
            "Procurement technical specifications",
            "Equipment selection recommendations"
        ],

        tools: ["Engineering procurement documentation tools"],

        standards: ["IEC", "IEEE"],

        industries: [
            "Power Infrastructure Projects",
            "Utilities",
            "Industrial Facilities",
            "Energy Developers",
            "Engineering EPC Contractors"
        ]
    },

    {
        slug: "third-party-inspection",
        title: "Third Party Inspection",
        heroText:
            "Independent electrical equipment inspection and quality verification services for manufacturing and installation stages.",

        overview:
            "Independent inspection ensures that electrical equipment meets project specifications, quality standards, and regulatory requirements before installation and commissioning.",

        scope: [
            "Factory inspection of transformers, switchgear, and control systems",
            "Factory Acceptance Test (FAT) witnessing",
            "Manufacturing quality verification",
            "Installation and site inspection support"
        ],

        deliverables: [
            "Inspection reports and compliance verification",
            "FAT witnessing reports and validation documentation",
            "Non-conformance and corrective action reports",
            "Equipment quality certification documentation"
        ],

        tools: ["Inspection and testing equipment"],

        standards: ["IEC Testing Standards", "IEEE Equipment Standards", "Industrial QA Protocols"],

        industries: [
            "Electrical Equipment Manufacturers",
            "Utilities",
            "Industrial Infrastructure",
            "Energy Projects",
            "Engineering EPC Contractors"
        ]
    }
];

export default servicesData;