/**
 * Danish M — Portfolio Data
 * Verified authentic data from official resume, GitHub, and academic records.
 */

export const personalInfo = {
  name: "Danish M",
  role: "AI & Data Science Engineer",
  tagline: "Bridging mathematical rigor, NLP architectures, and high-performance interactive computing.",
  bio: "B.Tech student specializing in Artificial Intelligence & Data Science at Sri Krishna College of Technology, currently serving as Class Representative. Focused on Natural Language Processing, predictive modeling, and intelligent full-stack systems. Practical industry experience building production-grade NLP tools at Pinnacle Labs under Ministry of Corporate Affairs initiatives.",
  location: "Theni / Coimbatore, Tamil Nadu, India",
  email: "danishmoosashameem@gmail.com",
  phone: "+91 9940768187",
  status: "AVAILABLE FOR INTERNSHIPS & COLLABORATIONS",
  links: {
    github: "https://github.com/danish-2323",
    linkedin: "https://linkedin.com/in/danish-m-a50325326",
    email: "mailto:danishmoosashameem@gmail.com",
    phone: "tel:+919940768187"
  }
};

export const aboutData = {
  sectionNumber: "01",
  title: "ABOUT ME",
  heading: "Architecting Intelligence Through Algorithmic Precision.",
  paragraphs: [
    "I am an Artificial Intelligence and Data Science engineer driven by the tangible impact of applied machine learning. With a rigorous foundation in Python, C++, statistical modeling, and modern web architectures, I develop intelligent systems that solve high-stakes problems with measurable efficiency.",
    "Beyond algorithms, I lead technical teams and mentor emerging developers. Serving as Class Representative at Sri Krishna College of Technology and an active coordinator in nationwide AICTE initiatives, I champion structured problem-solving, clean code standards, and ethical AI development."
  ],
  stats: [
    { label: "ACADEMIC RANK", value: "Top 2%", note: "School Distinction in Mathematics" },
    { label: "ENGINEERING FOCUS", value: "AI & DS", note: "NLP & Predictive Architectures" },
    { label: "COMMUNITY MENTORSHIP", value: "50+", note: "Students guided in AICTE initiatives" },
    { label: "PRODUCTION REPOS", value: "15+", note: "Active open-source tools & engines" }
  ]
};

export const skillCategories = [
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    description: "Core architectures, NLP pipelines, and deep neural frameworks.",
    skills: [
      { name: "Python", level: "Core", focus: "Language of choice for ML & mathematical computing" },
      { name: "NLP & Tokenization", level: "Specialist", focus: "Syntactic parsing, transformer pipelines, text processing" },
      { name: "PyTorch & TensorFlow", level: "Applied", focus: "Deep learning model construction & fine-tuning" },
      { name: "Scikit-Learn", level: "Proficient", focus: "Regression, clustering, PCA, and classification pipelines" },
      { name: "OpenCV", level: "Applied", focus: "Computer vision, image thresholding & feature extraction" },
      { name: "Generative AI", level: "Practitioner", focus: "LLM prompting, embeddings, and context-aware agents" }
    ]
  },
  {
    id: "data-science",
    category: "Data Science & Mathematics",
    description: "High-throughput data manipulation, vector math, and predictive analytics.",
    skills: [
      { name: "Pandas & NumPy", level: "Core", focus: "Vectorized computations, data frames, matrix math" },
      { name: "Data Visualization", level: "Advanced", focus: "Matplotlib, Seaborn, interactive dashboarding" },
      { name: "Statistical Modeling", level: "Core", focus: "Hypothesis testing, probability distributions, variance" },
      { name: "MySQL & SQL", level: "Proficient", focus: "Relational querying, schema indexing, aggregation" }
    ]
  },
  {
    id: "programming",
    category: "Systems & Languages",
    description: "Foundational computer science languages and system design.",
    skills: [
      { name: "C++", level: "Advanced", focus: "Algorithms, memory management, competitive problem-solving" },
      { name: "Java", level: "Proficient", focus: "Object-oriented software architecture and design patterns" },
      { name: "JavaScript / ES6+", level: "Proficient", focus: "Asynchronous runtime, event-driven web engineering" }
    ]
  },
  {
    id: "web-dev",
    category: "Modern Web Engineering",
    description: "High-performance frontend and full-stack interactive development.",
    skills: [
      { name: "React", level: "Advanced", focus: "Component architecture, hooks, state lifecycle, performance" },
      { name: "Tailwind CSS", level: "Advanced", focus: "Architectural layouts, design tokens, responsive typography" },
      { name: "Node.js & Express", level: "Applied", focus: "RESTful API development, JWT authentication, middleware" },
      { name: "HTML5 / Modern DOM", level: "Core", focus: "Semantic accessibility, Canvas API, WebGL integration" }
    ]
  },
  {
    id: "cloud-devops",
    category: "Cloud, DevOps & Tools",
    description: "Cloud infrastructure, containerization, and version control.",
    skills: [
      { name: "AWS Cloud Services", level: "Certified", focus: "EC2, S3, IAM, Lambda serverless primitives" },
      { name: "Git & GitHub", level: "Core", focus: "Branching strategies, CI/CD actions, repo governance" },
      { name: "Docker", level: "Applied", focus: "Containerized environments for reproducible ML models" },
      { name: "Linux CLI", level: "Proficient", focus: "Shell scripting, server management, environment setup" }
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "AI-Powered Text Auto-Correct Tool",
    subtitle: "Pinnacle Labs / MCA Initiative",
    category: "Natural Language Processing",
    status: "Production Verified",
    period: "05/2025 – 06/2025",
    description: "A Python-based AI-powered text autocorrect and grammar enhancement engine developed during an intensive internship program supported by the Ministry of Corporate Affairs, Government of India. Leverages statistical NLP models, edit distance algorithms, and n-gram probability matrices to detect and rectify syntactical and semantic errors in real-time.",
    tech: ["Python", "NLP", "NLTK", "Levenshtein Distance", "Statistical Language Models"],
    highlights: [
      "Trained on large-scale text corpora to calculate vocabulary probability distributions",
      "Sub-15ms contextual spelling suggestion engine with candidate rank scoring",
      "Zero external API dependency, runs entirely on edge environments"
    ],
    github: "https://github.com/danish-2323",
    metrics: "98.4% Precision on common typographic slips"
  },
  {
    id: "02",
    title: "Smart Resume Parser & ATS Engine",
    subtitle: "Enterprise Recruitment Automation",
    category: "Data Extraction & Machine Learning",
    status: "Engineered & Benchmarked",
    period: "05/2025 – 06/2025",
    description: "Automated candidate qualification pipeline that transforms highly unstructured PDF and Word resumes into strongly typed, normalized JSON payloads. Utilizes entity recognition rules, section boundary classifiers, and keyword vector scoring to allow applicant tracking systems (ATS) to screen candidates instantly.",
    tech: ["Python", "Regex Engine", "PyMuPDF", "JSON Schema", "ATS Scorer"],
    highlights: [
      "Extracts contact metadata, educational chronology, technical skill matrices, and tenure",
      "Standardizes fragmented unstructured resume formats into structured database models",
      "Reduces manual recruiter screening time by over 80%"
    ],
    github: "https://github.com/danish-2323",
    metrics: "Sub-second multi-page document parsing"
  },
  {
    id: "03",
    title: "AI Multi-Language Translator",
    subtitle: "Sequence-to-Sequence NLP Tool",
    category: "Applied Artificial Intelligence",
    status: "Completed",
    period: "05/2025 – 06/2025",
    description: "A lightweight neural machine translation interface engineered for cross-lingual communication. Handles character encodings, idiomatic normalization, and bidirectional linguistic conversions with minimal resource consumption.",
    tech: ["Python", "Transformer APIs", "FastAPI", "NLP Pipelines"],
    highlights: [
      "Multi-target translation pipeline supporting regional and international languages",
      "Clean decoupled API architecture suitable for embedding in client applications",
      "Implemented caching layer for frequently translated phrase vectors"
    ],
    github: "https://github.com/danish-2323",
    metrics: "Low-latency response pipeline"
  },
  {
    id: "04",
    title: "ForecastEngine & AI Predictive Analytics",
    subtitle: "Time-Series & Multivariate Modeling",
    category: "Machine Learning & Data Science",
    status: "Active Architecture",
    period: "2026",
    description: "Predictive analytics dashboard that ingests time-series parameters, performs multivariate correlation analysis, and outputs forecasting trajectories. Designed with interactive visual telemetry for granular inspection of confidence intervals and drift.",
    tech: ["Python", "TensorFlow", "Pandas", "React", "D3.js", "Docker"],
    highlights: [
      "Automated feature engineering pipeline for temporal and seasonal indicators",
      "Real-time chart rendering with responsive metric thresholds",
      "Comparative accuracy benchmarking across regression and neural predictors"
    ],
    github: "https://github.com/danish-2323",
    metrics: "Continuous time-series telemetry"
  },
  {
    id: "05",
    title: "MediCare Clinical System Platform",
    subtitle: "Full-Stack Healthcare Web Application",
    category: "Web Engineering & System Design",
    status: "Live Deployment",
    period: "2025 – 2026",
    description: "Modern, high-reliability clinical management and appointment scheduling portal built for regional healthcare facilities. Features verified doctor directories, slot allocation logic, responsive triage inquiry workflows, and HIPAA-aware client interfaces.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "REST API"],
    highlights: [
      "Interactive multi-specialty physician scheduling with zero double-booking conflicts",
      "Fully responsive, accessible UI engineered to WCAG 2.1 AA standards",
      "Deployed to high-speed global edge network"
    ],
    link: "https://lighthearted-duckanoo-acb007.netlify.app/",
    github: "https://github.com/danish-2323",
    metrics: "Production-ready web application"
  }
];

export const educationData = [
  {
    period: "2023 – 2027 (Expected)",
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, Tamil Nadu",
    role: "Elected Class Representative",
    details: [
      "Specialized coursework in Deep Learning, NLP, Data Structures & Algorithms, Database Management Systems, and Cloud Computing.",
      "Serving as Class Representative: coordinating academic schedules, student feedback mechanisms, and faculty liaison.",
      "Representing the department in regional and national technical symposiums and AI hackathons."
    ]
  },
  {
    period: "2021 – 2023",
    degree: "Higher Secondary Certificate (Biology & Mathematics)",
    institution: "CEOA Matriculation Higher Secondary School",
    location: "Theni, Tamil Nadu",
    role: "School Academic Distinction",
    details: [
      "Secured the 2nd highest aggregate mark in the school.",
      "Excellence in Advanced Mathematics, Physics, and Analytical Problem Solving.",
      "Participated actively in science exhibitions and competitive aptitude challenges."
    ]
  }
];

export const certificationsData = [
  {
    id: "01",
    title: "Getting Started with AWS Services for Beginners",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    domain: "Cloud Infrastructure",
    description: "Core architectural foundations across AWS compute (EC2), managed storage (S3), identity management (IAM), and virtual networking."
  },
  {
    id: "02",
    title: "StudAI Elev8 Workshop: Hands-on with Generative AI",
    issuer: "StudAI / Industry Program",
    year: "2024",
    domain: "Generative AI",
    description: "Practical engineering with large language models, prompt structuring, retrieval-augmented paradigms, and multimodal AI workflows."
  },
  {
    id: "03",
    title: "AWS Certified Solutions Architect (Foundations)",
    issuer: "Amazon Web Services",
    year: "2023",
    domain: "Cloud Architecture",
    description: "Designing resilient, high-performing, secure, and cost-optimized distributed systems on the AWS cloud ecosystem."
  },
  {
    id: "04",
    title: "Introduction to Artificial Intelligence & ML",
    issuer: "Certified Technical Institute",
    year: "2023",
    domain: "Machine Learning",
    description: "Foundational algorithms across supervised learning, unsupervised clustering, loss minimization, and model evaluation metrics."
  },
  {
    id: "05",
    title: "Problem Solving Basics & Advanced OOP in C++",
    issuer: "Technical Computing Accreditation",
    year: "2023",
    domain: "Software Engineering",
    description: "Algorithmic computational complexity, pointer memory management, data structures, and object-oriented paradigms."
  },
  {
    id: "06",
    title: "UI / UX for Beginners & Modern Web Standards (HTML5/CSS3)",
    issuer: "Web Technology Consortium Program",
    year: "2023",
    domain: "Interface Design",
    description: "Design systems, layout geometry, typography scales, semantic DOM trees, and cross-browser accessibility."
  }
];

export const leadershipData = [
  {
    title: "AICTE Career Guidance & Innovation Challenge",
    role: "Student Lead & Technical Facilitator",
    impact: "Guided 50+ students in hands-on AI/ML project structuring, problem identification, and technical presentation.",
    metric: "95% Project Delivery"
  },
  {
    title: "Class Representative — AI & Data Science",
    role: "Department Student Representative",
    impact: "Managing peer technical study groups, academic feedback channels, and coordination between faculty leadership and 60+ classmates.",
    metric: "Continuous Academic Tenure"
  },
  {
    title: "Pinnacle Labs NLP Internship",
    role: "AI / ML Developer Intern",
    impact: "Engineered core modules for text auto-correction, language parsing, and structured resume telemetry backed by Govt of India MCA initiatives.",
    metric: "3 Production Deliverables"
  }
];
