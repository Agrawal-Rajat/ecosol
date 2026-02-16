const servicesData = [
    {
        slug: "power-system-studies",
        title: "Power System Studies",
        heroText:
            "Comprehensive power system analysis to ensure reliability, safety, and optimal performance of electrical networks across utility and industrial installations.",

        overview:
            "Ecosol provides detailed power system studies to evaluate system behavior under normal and fault conditions. Our studies support safe, reliable, and standards-compliant operation of electrical networks.",

        scope: [
            "Load Flow Studies",
            "Short Circuit Analysis",
            "Transient Stability Studies",
            "Motor Starting Studies",
            "Harmonic Analysis",
            "Reactive Power Optimization"
        ],

        deliverables: [
            "Technical Study Report",
            "System Modeling Files",
            "Protection Coordination Curves",
            "Single Line Diagram Updates",
            "Compliance Documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory", "PSCAD"],

        standards: ["IEEE", "IEC", "NFPA"],

        industries: [
            "Utilities",
            "Oil & Gas",
            "Manufacturing",
            "Renewables",
            "Infrastructure"
        ]
    },

    {
        slug: "protection-relay-systems",
        title: "Protection & Relay Systems",
        heroText:
            "Design, evaluation, and optimization of protection and relay systems to safeguard electrical assets and ensure coordinated fault clearance.",

        overview:
            "Ecosol delivers protection coordination and relay engineering services to enhance system reliability and ensure safe isolation of faults in compliance with international standards.",

        scope: [
            "Protection Coordination Studies",
            "Relay Selection & Configuration",
            "CT/PT Evaluation",
            "Substation Protection Design",
            "Retrofit & Upgrade Studies"
        ],

        deliverables: [
            "Protection Coordination Report",
            "Relay Settings Documentation",
            "Time-Current Curves",
            "Protection Philosophy Documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEEE", "IEC", "NFPA"],

        industries: [
            "Utilities",
            "Oil & Gas",
            "Petrochemicals",
            "Industrial Plants"
        ]
    },

    {
        slug: "arc-flash-safety",
        title: "Arc Flash & Electrical Safety Studies",
        heroText:
            "Electrical safety assessments to identify arc flash hazards and implement mitigation measures in compliance with international standards.",

        overview:
            "Ecosol conducts arc flash and electrical safety studies to quantify incident energy levels and recommend mitigation measures for personnel safety and regulatory compliance.",

        scope: [
            "Arc Flash Calculations",
            "Incident Energy Analysis",
            "Mitigation Recommendations",
            "Labeling Requirements",
            "Electrical Safety Review"
        ],

        deliverables: [
            "Arc Flash Study Report",
            "Incident Energy Labels",
            "Mitigation Recommendations",
            "Compliance Documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEEE 1584", "NFPA 70E", "IEC"],

        industries: [
            "Oil & Gas",
            "Petrochemicals",
            "Utilities",
            "Manufacturing"
        ]
    },

    {
        slug: "grounding-emi",
        title: "Grounding & EMI Analysis",
        heroText:
            "Advanced grounding and electromagnetic interference analysis to ensure personnel safety, equipment protection, and system integrity.",

        overview:
            "Ecosol provides high-voltage grounding design and EMI analysis services to ensure system stability, regulatory compliance, and safe operation under fault conditions.",

        scope: [
            "High Voltage Grounding Design",
            "Soil Resistivity Modeling",
            "Touch & Step Voltage Analysis",
            "EMI Studies",
            "Lightning Protection Analysis"
        ],

        deliverables: [
            "Grounding Design Report",
            "Soil Resistivity Analysis",
            "EMI Assessment Documentation",
            "Compliance Certification Support"
        ],

        tools: ["CDEGS"],

        standards: ["IEEE", "IEC"],

        industries: [
            "Substations",
            "Power Plants",
            "Industrial Facilities",
            "Infrastructure"
        ]
    },

    {
        slug: "power-generation-substations",
        title: "Power Generation & Substations",
        heroText:
            "Electrical design and engineering services for power generation facilities and substations across all voltage levels.",

        overview:
            "Ecosol supports detailed electrical engineering for power generation facilities and substations including layout design, system studies, and protection coordination.",

        scope: [
            "Power Plant Electrical Design",
            "AIS/GIS Substation Engineering",
            "Switchyard Layouts",
            "Equipment Sizing & Specifications",
            "Protection & Control Schemes"
        ],

        deliverables: [
            "Single Line Diagrams",
            "Electrical Layout Drawings",
            "Technical Specifications",
            "Design Calculation Reports"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEEE", "IEC", "BS"],

        industries: [
            "Utilities",
            "Independent Power Producers",
            "Industrial Generation"
        ]
    },

    {
        slug: "power-automation",
        title: "Power Automation (SCADA & Grid Islanding)",
        heroText:
            "Design and engineering of power automation systems to enhance operational visibility, control, and system reliability.",

        overview:
            "Ecosol provides engineering consultancy for electrical automation systems including SCADA architecture and grid islanding schemes to improve operational resilience.",

        scope: [
            "Electrical SCADA Design",
            "Load Shedding Schemes",
            "Grid Islanding Studies",
            "Automation Architecture Definition",
            "Integration Planning"
        ],

        deliverables: [
            "Automation Architecture Documentation",
            "Control Philosophy Documentation",
            "Load Shedding Scheme Reports"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEEE", "IEC"],

        industries: [
            "Utilities",
            "Power Plants",
            "Industrial Networks"
        ]
    },

    {
        slug: "renewable-energy",
        title: "Renewable Energy Engineering",
        heroText:
            "Engineering consultancy services for utility-scale and distributed renewable energy projects with strong focus on solar power systems.",

        overview:
            "Ecosol provides engineering support for renewable energy projects including grid integration studies and detailed electrical design for solar and hybrid systems.",

        scope: [
            "Solar PV Electrical Design",
            "Feasibility & Concept Engineering",
            "Grid Integration Studies",
            "Hybrid & Storage Integration",
            "Solar Manufacturing Plant Engineering"
        ],

        deliverables: [
            "Grid Integration Study Report",
            "Electrical Design Documentation",
            "System Modeling Files",
            "Technical Specifications"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEEE", "IEC"],

        industries: [
            "Renewable Energy Developers",
            "Utilities",
            "Industrial Clients"
        ]
    },

    {
        slug: "industrial-electrification",
        title: "Industrial Electrification",
        heroText:
            "Electrical engineering services for complex industrial facilities across multiple process industries.",

        overview:
            "Ecosol delivers industrial electrical engineering services including distribution design, hazardous area considerations, and compliance-based system planning.",

        scope: [
            "Industrial Power Distribution Design",
            "Hazardous Area Support",
            "Equipment Selection & Specifications",
            "Electrical Layout Development",
            "Standards Compliance Assessment"
        ],

        deliverables: [
            "Electrical Distribution Drawings",
            "Calculation Reports",
            "Equipment Specifications",
            "Compliance Documentation"
        ],

        tools: ["ETAP", "DIgSILENT PowerFactory"],

        standards: ["IEC", "IEEE", "NEC", "BS"],

        industries: [
            "Oil & Gas",
            "Petrochemicals",
            "Cement",
            "Steel",
            "Process Industries"
        ]
    }
];

export default servicesData;