export const roadmapPhases = [
  {
    phase: 1,
    title: "Python Foundations",
    reason: "Why: Required to write scripts and understand tools",
    topics: [
      "Python syntax and indentation",
      "Variables and data types",
      "Strings",
      "Input and output",
      "Conditional statements",
      "Loops",
      "Functions",
      "Lists, tuples, sets, dictionaries",
      "Exception handling"
    ]
  },
  {
    phase: 2,
    title: "Python for System Interaction",
    reason: "Why: Security work interacts heavily with the OS",
    topics: [
      "File handling (read/write)",
      "OS interaction (os, sys modules)",
      "Environment variables",
      "Path handling",
      "Basic scripting mindset"
    ]
  },
  {
    phase: 3,
    title: "Package Management",
    reason: "Why: Security tools depend on libraries",
    topics: [
      "pip",
      "Virtual environments",
      "Dependency management"
    ]
  },
  {
    phase: 4,
    title: "Networking Fundamentals",
    reason: "Why: Cybersecurity is built on networks",
    topics: [
      "TCP/IP basics",
      "HTTP and HTTPS",
      "DNS basics",
      "Socket programming",
      "Network requests using Python"
    ]
  },
  {
    phase: 5,
    title: "Data Structures (Security-Oriented)",
    reason: "Why: Efficient parsing and detection logic",
    topics: [
      "Lists and dictionaries (deep usage)",
      "Sets",
      "Queues",
      "Hash tables",
      "Basic recursion"
    ]
  },
  {
    phase: 6,
    title: "Advanced Python for Security",
    reason: "Why: Used in scanning, detection, automation",
    topics: [
      "List comprehensions",
      "Regular expressions (regex)",
      "Generators",
      "Lambda functions",
      "Decorators (basic understanding)",
      "Multithreading concepts"
    ]
  },
  {
    phase: 7,
    title: "Web Security & Automation",
    reason: "Why: Most attacks target web systems",
    topics: [
      "Web scraping concepts",
      "Headers, cookies, sessions",
      "Authentication flows",
      "Rate limiting concepts",
      "Automation for security tasks"
    ]
  },
  {
    phase: 8,
    title: "Ethical Hacking with Python",
    reason: "Why: Offensive security skills",
    topics: [
      "Port scanning concepts",
      "Banner grabbing",
      "Password attack simulations (educational only)",
      "Network packet analysis",
      "Legal and ethical usage emphasis"
    ]
  },
  {
    phase: 9,
    title: "Cryptography Basics",
    reason: "Why: Protecting data is core to security",
    topics: [
      "Hashing concepts",
      "Encryption concepts",
      "Symmetric vs asymmetric encryption",
      "Digital signatures",
      "Secure password handling"
    ]
  },
  {
    phase: 10,
    title: "Malware & Threat Analysis (Intro)",
    reason: "Why: Understanding attacks improves defense",
    topics: [
      "File analysis basics",
      "Obfuscation concepts",
      "Static vs dynamic analysis",
      "Malware behavior understanding"
    ]
  },
  {
    phase: 11,
    title: "Security Testing & Automation",
    reason: "Why: Professional security workflows",
    topics: [
      "Writing security scripts",
      "Fuzzing concepts",
      "Automated testing",
      "Security workflow automation"
    ]
  }
];

export const careerPaths = [
  {
    title: "SOC Analyst (Blue Team)",
    description: "Monitors logs, alerts, and incidents",
    focusAreas: ["Networking", "Python scripting", "Automation", "Threat Analysis"],
    icon: "soc" as const,
    teamType: "blue" as const
  },
  {
    title: "Penetration Tester (Ethical Hacker)",
    description: "Finds vulnerabilities before attackers",
    focusAreas: ["Networking", "Web Security", "Ethical Hacking", "Python automation"],
    icon: "pentest" as const,
    teamType: "red" as const
  },
  {
    title: "Cybersecurity Engineer",
    description: "Designs and secures systems",
    focusAreas: ["Python", "Networking", "Cryptography", "Automation", "Testing"],
    icon: "engineer" as const,
    teamType: "neutral" as const
  },
  {
    title: "Malware Analyst",
    description: "Analyzes malicious software behavior",
    focusAreas: ["Python", "Malware Analysis", "Cryptography", "System internals"],
    icon: "malware" as const,
    teamType: "blue" as const
  },
  {
    title: "Incident Response Analyst",
    description: "Handles live cyber incidents",
    focusAreas: ["Python scripting", "Networking", "Threat Analysis", "Automation"],
    icon: "incident" as const,
    teamType: "blue" as const
  },
  {
    title: "Cloud Security Engineer",
    description: "Secures cloud environments",
    focusAreas: ["Networking", "Automation", "Security testing", "Cryptography"],
    icon: "cloud" as const,
    teamType: "neutral" as const
  },
  {
    title: "GRC Analyst (Governance, Risk & Compliance)",
    description: "Policy, compliance, and risk assessment",
    focusAreas: ["Fundamentals", "Security concepts", "Testing", "Documentation"],
    icon: "grc" as const,
    teamType: "neutral" as const
  },
  {
    title: "Digital Forensics Analyst",
    description: "Investigates cybercrime evidence",
    focusAreas: ["File systems", "OS concepts", "Malware analysis", "Python automation"],
    icon: "forensics" as const,
    teamType: "blue" as const
  },
  {
    title: "Application Security Engineer (AppSec)",
    description: "Secures software during development",
    focusAreas: ["Web security", "Secure coding", "Testing", "Automation"],
    icon: "appsec" as const,
    teamType: "neutral" as const
  },
  {
    title: "Security Automation Engineer",
    description: "Builds automated security workflows",
    focusAreas: ["Python scripting", "APIs", "Automation", "Testing"],
    icon: "automation" as const,
    teamType: "neutral" as const
  },
  {
    title: "Threat Intelligence Analyst",
    description: "Tracks attacker behavior and trends",
    focusAreas: ["Networking", "Malware analysis", "Automation", "Data analysis"],
    icon: "threat" as const,
    teamType: "blue" as const
  },
  {
    title: "Red Team Operator",
    description: "Simulates advanced attacks",
    focusAreas: ["Ethical hacking", "Networking", "Python automation", "Web security"],
    icon: "redteam" as const,
    teamType: "red" as const
  },
  {
    title: "Blue Team Engineer",
    description: "Defends systems proactively",
    focusAreas: ["Monitoring", "Automation", "Threat analysis", "Python scripting"],
    icon: "blueteam" as const,
    teamType: "blue" as const
  }
];
