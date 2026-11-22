import { useState, useEffect, type FormEvent } from 'react';
import AnimatedItem from './components/AnimatedItem';
import AnimatedSection from './components/AnimatedSection';
import {
  Mail, FileText, ArrowUpRight, Menu, X, Database, BarChart3, Code2, Cpu,
  Sparkles, ExternalLink, CheckCircle2, AlertCircle, Send, Globe, Radio,
  BookOpen, ChevronRight, Zap, Layers, Terminal, Server, Layout, PieChart,
  Brain, Wrench, Users,
} from 'lucide-react';
import { FaGithub as Github, FaInstagram as Instagram } from 'react-icons/fa';

/* ============================================================
   TYPES
   ============================================================ */
interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  tools: string[];
  overview?: string;
  objective?: string;
  dataset?: string;
  methodology?: string[];
  results?: Record<string, string>;
  contribution?: string;
  note?: string;
  forecastScope?: string;
  githubUrl?: string;
  liveUrl?: string;
  behanceUrl?: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  gpa: string;
  category: string;
  description: string;
  file: string;
}

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
}

/* ============================================================
   CONSTANTS
   ============================================================ */
const WHATSAPP_NUMBER = '6285974372381';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Internship', href: '#bmkg-flagship' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace('#', ''));

const CATEGORIES = [
  'All Projects',
  'Data Analytics & Visualization',
  'Machine Learning & Statistical Modeling',
  'Dashboard Development',
  'Data Engineering',
  'NLP & Text Mining',
  'Software Development',
  'UI/UX & Digital Projects',
];

const SHINY_URL = 'https://cintiyanareswari.shinyapps.io/BMKG_Shiny/';
const GITHUB_URL = 'https://github.com/cintiyaagustinnareswari';
const BEHANCE_URL = 'https://www.behance.net/cintiyanareswa';
const INSTAGRAM_URL = 'https://www.instagram.com/cintiya_nrs/';
const EMAIL = 'cintiyanareswari@gmail.com';

const SHINY_MODULES = [
  'Overview', 'Rainfall', 'Air Temperature', 'Humidity',
  'Wind Speed', 'Solar Radiation', 'Air Pressure', 'Clustering Analysis',
];

const SKILLS_PROGRAMMING = [
  { name: 'Python', icon: Code2 },
  { name: 'R', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'PostgreSQL', icon: Server },
];

const SKILLS_ANALYTICS = [
  'Data Cleaning', 'Data Wrangling', 'ETL Pipeline', 'Data Warehouse',
  'EDA', 'Statistical Analysis', 'Machine Learning', 'NLP', 'Time Series',
];

const SKILLS_VISUALIZATION = [
  { name: 'R Shiny', icon: Layout },
  { name: 'Tableau', icon: PieChart },
  { name: 'Looker Studio', icon: BarChart3 },
  { name: 'FastAPI', icon: Zap },
  { name: 'Pandas', icon: Layers },
  { name: 'Scikit-learn', icon: Wrench },
  { name: 'Figma', icon: Sparkles },
];

const SKILLS_SOFT = [
  'Public Speaking', 'Kepemimpinan', 'Kerja Sama Tim',
  'Komunikatif', 'Problem Solving', 'Analytical Thinking',
];

/* ============================================================
   DATA
   ============================================================ */
const projects: Project[] = [
  {
    id: 'xray-classification',
    title: 'X-ray Bone Fracture Classification via Feature Fusion',
    category: 'Machine Learning & Statistical Modeling',
    year: '2026',
    featured: true,
    tools: ['Python', 'GLCM', 'LBP', 'SVM', 'ANN', 'BNN', 'Scikit-learn'],
    overview: 'A comparative experiment on classifying bone fractures from medical X-ray images using spatial texture extraction and neural classifiers.',
    objective: 'Compare GLCM, LBP, and Feature Fusion for extracting image texture features and evaluate comparative classification accuracy.',
    dataset: 'Bone Fracture Detection dataset from Kaggle comprising 2,060 preprocessed digital radiography X-ray images.',
    methodology: [
      'Image preprocessing: Resizing to uniform dimension and grayscale conversion.',
      'Contrast enhancement via Contrast Limited Adaptive Histogram Equalization (CLAHE).',
      'Noise reduction using Median Blur and Gaussian Blur filters.',
      'Extracted spatial relationships via Gray Level Co-occurrence Matrix (GLCM).',
      'Extracted micro-textures via Local Binary Pattern (LBP).',
      'Fused GLCM and LBP feature vectors into a unified feature representation matrix.',
      'Trained and benchmarked SVM, ANN, and BNN classifiers.',
    ],
    results: {
      bestAccuracy: '72.29% (ANN with Feature Fusion)',
      precision: '75.80%',
      recall: '72.29%',
      f1Score: '71.72%',
    },
    contribution: 'Designed the complete feature fusion pipeline, extracted spatial texture metrics, and executed comparative model benchmarks.',
    note: 'Academic predictive experiment, not a clinically validated medical diagnostic tool.',
    githubUrl: `${GITHUB_URL}/klasifikasi-fraktur-xray-glcm-lbp`,
  },
  {
    id: 'arima-forecasting',
    title: 'Sales Revenue Forecasting Using ARIMA',
    category: 'Data Analytics & Visualization',
    year: '2026',
    featured: true,
    tools: ['Python', 'Pandas', 'Statsmodels', 'ARIMA', 'ADF Test', 'Seaborn'],
    overview: 'An analysis and forecasting project using historical retail sales revenue data to identify underlying trends and project future revenue trajectories.',
    objective: 'Build a statistical time-series model to forecast short-term revenue and evaluate variance across weekly sales aggregation.',
    dataset: 'Global Retail Sales Dataset from Kaggle covering 5,000 retail transactions (2023–2025) aggregated into 130 weekly time-series observations.',
    methodology: [
      'Cleaned raw transaction logs and aggregated metrics into weekly revenue totals.',
      'Handled extreme outliers using Interquartile Range (IQR) bounds.',
      'Divided series into an 80:20 train-test split.',
      'Tested stationarity using Augmented Dickey-Fuller (ADF) test.',
      'Analyzed Autocorrelation (ACF) and Partial Autocorrelation (PACF) plots.',
      'Compared candidate ARIMA models using Akaike Information Criterion (AIC).',
      'Evaluated residual independence using Ljung-Box diagnostic tests.',
    ],
    results: {
      bestModel: 'ARIMA(1,0,1)',
      aic: '2,512.303',
      mae: '38,649.69',
      rmse: '50,108.36',
      mape: '24.89%',
      ljungBoxP: '0.730 (Residuals behave as white noise)',
    },
    forecastScope: '12-week forward revenue forecast capturing short-term baseline trends.',
    contribution: 'Executed complete time-series preparation, stationarity testing, model selection, and forecast diagnostic evaluations.',
    githubUrl: `${GITHUB_URL}/prediksi-penjualan-time-series-arima`,
  },
  {
    id: 'bmkg-weather',
    title: 'BMKG Banyuwangi Weather Analysis & Regime Clustering Dashboard',
    category: 'Dashboard Development',
    year: '2026',
    featured: true,
    tools: ['Python', 'R Shiny', 'K-Means', 'Plotly', 'Pandas', 'Stats'],
    overview: 'An interactive meteorological dashboard designed to explore historical weather observations from BMKG Banyuwangi between 2021 and 2025.',
    objective: 'Transform raw atmospheric logs into interactive analytical visual modules supporting weather regime exploration.',
    dataset: '1,826 daily meteorological observation records (Jan 1, 2021 – Dec 31, 2025) covering air temperature, rainfall, humidity, wind speed, solar radiation, and pressure.',
    methodology: [
      'Data cleaning and filtering of missing observation parameters using Python Pandas.',
      'Exploratory time series analysis across temperature extremes and precipitation frequencies.',
      'K-Means clustering to classify local weather regimes and microclimate patterns.',
      'Engineered an 8-module interactive web portal deployed on shinyapps.io using R Shiny and Plotly.',
    ],
    results: {
      deployedApp: 'Active R Shiny Portal with 8 parameter analysis modules.',
      totalRecords: '1,826 daily observation records processed.',
    },
    contribution: 'Data Analyst Intern & Dashboard Developer at Stasiun Meteorologi Kelas II BMKG Banyuwangi.',
    liveUrl: SHINY_URL,
    githubUrl: GITHUB_URL,
  },
  {
    id: 'lyrics-nlp',
    title: 'Song Lyrics Analysis & Genre Classification',
    category: 'NLP & Text Mining',
    year: '2026',
    featured: false,
    tools: ['Python', 'NLTK', 'TF-IDF', 'Linear SVM', 'LDA', 'BeautifulSoup', 'Gensim'],
    overview: 'An NLP project exploring linguistic patterns in song lyrics, classifying music genres, and modeling latent topics.',
    objective: 'Scrape lyric text data, clean textual features, fit TF-IDF vectorizers, and evaluate Linear SVM genre classification.',
    dataset: 'Training dataset containing labeled lyrics across 10 music genres, plus an evaluation dataset of 51 scraped lyric records.',
    methodology: [
      'Scraped web lyrics using Python Requests and BeautifulSoup.',
      'Executed text normalization: lowercasing, punctuation stripping, and stopword removal.',
      'Performed tokenization and lemmatization using NLTK.',
      'Constructed unigram and bigram TF-IDF feature matrices.',
      'Trained Linear Support Vector Machines (SVM) for multi-class genre prediction.',
      'Extracted latent topics using Latent Dirichlet Allocation (LDA) via Gensim.',
    ],
    results: {
      keyFinding: 'Successfully extracted dominant thematic word clusters across music genres using LDA topic modeling.',
    },
    contribution: 'Designed web scraper, preprocessed unstructured text, and evaluated genre classification models.',
    githubUrl: `${GITHUB_URL}/song-lyrics-analysis-genre-classification`,
  },
  {
    id: 'social-stress',
    title: 'Social Media Stress Prediction via Machine Learning',
    category: 'Machine Learning & Statistical Modeling',
    year: '2026',
    featured: false,
    tools: ['Python', 'Random Forest', 'Logistic Regression', 'RobustScaler', 'Scikit-learn'],
    overview: 'An academic machine learning project classifying stress and non-stress categories based on linguistic and social features.',
    objective: 'Compare classification performance between Logistic Regression and Random Forest models on social media text features.',
    dataset: 'Kaggle Stress Analysis dataset containing approximately 2,838 annotated social media entries.',
    methodology: [
      'Data cleaning and exploratory analysis of linguistic indicators.',
      'Feature selection and feature scaling via RobustScaler.',
      'Trained Logistic Regression (Unscaled and Robust Scaled) and Random Forest classifiers.',
      'Evaluated accuracy metrics and conducted feature importance analysis.',
    ],
    results: {
      logisticRegression: '77.1% accuracy',
      randomForest: '77.8% accuracy (Best Performing Model)',
    },
    contribution: 'Executed EDA, feature preprocessing, model training, and performance comparison.',
    note: 'Academic predictive modeling experiment, not a clinical mental health diagnostic tool.',
    githubUrl: `${GITHUB_URL}/prediksi-stres-media-sosial-ml`,
  },
  {
    id: 'student-burnout',
    title: 'Student Burnout Risk Analysis & Classification',
    category: 'Machine Learning & Statistical Modeling',
    year: '2026',
    featured: false,
    tools: ['Python', 'Random Forest', 'SVM', 'SMOTE', 'Imbalanced-learn', 'Scikit-learn'],
    overview: 'An academic classification experiment evaluating student burnout risk levels using academic, psychological, and lifestyle indicators.',
    objective: 'Address class imbalance and compare tuned SVM vs. Random Forest models to accurately predict student burnout vulnerability.',
    dataset: 'Student Mental Health and Burnout Dataset (500,000 sampled observation rows).',
    methodology: [
      'Conducted data understanding, leakage checks, and exploratory sampling.',
      'Applied SMOTE oversampling to rectify class imbalance.',
      'Constructed baseline and hyperparameter-tuned Support Vector Machine (SVM) and Random Forest models.',
      'Evaluated Accuracy and Macro F1-Scores.',
    ],
    results: {
      svmBaseline: '81.86% accuracy | 0.5845 F1-Macro',
      rfTuned: '83.84% accuracy | 0.6849 F1-Macro (Best Performing Model)',
    },
    contribution: 'Managed data sampling, oversampling pipeline, hyperparameter tuning, and metric evaluation.',
    note: 'Academic classification experiment, not a clinical diagnosis tool.',
    githubUrl: GITHUB_URL,
  },
  {
    id: 'data-warehouse-olap',
    title: 'Global Superstore Data Warehouse & PostgreSQL OLAP',
    category: 'Data Engineering',
    year: '2026',
    featured: false,
    tools: ['PostgreSQL', 'SQL', 'ETL', 'Star Schema', 'Atoti', 'Python'],
    overview: 'A data warehouse and OLAP project built on Global Superstore order data to analyze how discounts affect retail profitability.',
    objective: 'Architect an enterprise Data Warehouse and multidimensional OLAP cube to evaluate retail discount profitability.',
    dataset: 'Global Superstore transactional order logs spanning international retail branches.',
    methodology: [
      'Designed dimensional Star Schema architecture in PostgreSQL.',
      'Constructed Python ETL staging scripts for data integration.',
      'Built interactive OLAP cubes in Atoti to drill down on profit margin impacts.',
    ],
    results: {
      architecture: 'Star Schema Data Warehouse in PostgreSQL with interactive Atoti OLAP multidimensional analysis.',
    },
    contribution: 'Data Warehouse Architect & ETL Developer.',
    githubUrl: GITHUB_URL,
  },
  {
    id: 'dtmf-fft',
    title: 'DTMF Signal Tone Detection Using FFT',
    category: 'Machine Learning & Statistical Modeling',
    year: '2025',
    featured: false,
    tools: ['Python', 'FFT', 'FIR Bandpass Filter', 'SciPy', 'Matplotlib'],
    overview: 'An audio signal analysis project implementing Dual-Tone Multi-Frequency (DTMF) tone detection using Fast Fourier Transform.',
    objective: 'Filter audio noise and detect dual keypad frequencies via frequency-domain spectral analysis.',
    dataset: 'DTMF telephone keypad audio recordings.',
    methodology: [
      'Applied FIR bandpass filtering for noise reduction.',
      'Executed envelope and threshold-based signal segmentation.',
      'Converted time-domain signals to frequency domain using FFT.',
      'Evaluated Rectangular, Hamming, and Hann window functions.',
    ],
    results: {
      spectralAccuracy: 'Accurate identification of low (697-941 Hz) and high (1209-1477 Hz) frequency pairs.',
    },
    contribution: 'Signal Analytics Developer.',
    githubUrl: `${GITHUB_URL}/pengolahan-sinyal-digital-dtmf`,
  },
  {
    id: 'sea-food-security',
    title: 'Southeast Asia Food Security Analysis',
    category: 'Data Analytics & Visualization',
    year: '2025',
    featured: false,
    tools: ['Python', 'K-Means', 'Log Transform', 'StandardScaler', 'Scikit-learn'],
    overview: 'An analytical project exploring food security indicators across eight Southeast Asian countries between 2000 and 2021.',
    objective: 'Group regional nations based on agricultural land area, food production index, and per-capita caloric availability.',
    dataset: 'Regional agricultural and nutritional metrics (2000–2021) compiled across 8 countries.',
    methodology: [
      'Data cleaning and integration across regional sources.',
      'Applied log transformation and StandardScaler scaling.',
      'Evaluated Spearman correlations between agricultural indicators.',
      'Determined cluster k using Elbow Method and Silhouette Scores.',
      'Constructed K-Means regional vulnerability tiers.',
    ],
    results: {
      clusterTiers: 'High Security (Thailand, Philippines), Medium (Indonesia, Malaysia, Myanmar), Lower (Vietnam, Cambodia, Timor-Leste).',
    },
    contribution: 'Lead Data Analyst.',
    githubUrl: GITHUB_URL,
  },
  {
    id: 'farmaseek-trie',
    title: 'FarmaSeek: Trie-Based Medicine Search Application',
    category: 'Software Development',
    year: '2025',
    featured: false,
    tools: ['Python', 'Trie Data Structure', 'Tkinter', 'NetworkX', 'Matplotlib'],
    overview: 'A Python desktop application for searching medicine information by prefix name or symptoms using custom Trie data structures.',
    objective: 'Implement prefix-based data structures to accelerate medicine and symptom query retrieval times.',
    dataset: 'Structured medicine catalog containing dosage and symptom mappings.',
    methodology: [
      'Built two custom Trie data structures for name and symptom prefix indexing.',
      'Engineered a Tkinter desktop GUI.',
      'Visualized Trie tree nodes using NetworkX and Matplotlib.',
    ],
    results: {
      searchEfficiency: 'Instant prefix search auto-completion.',
    },
    contribution: 'Desktop GUI & Algorithm Developer.',
    note: 'Medicine dataset is for programming demonstration only.',
    githubUrl: GITHUB_URL,
  },
  {
    id: 'jobinaja-uiux',
    title: 'JobinAja: Job Search Application UI/UX Design',
    category: 'UI/UX & Digital Projects',
    year: '2025',
    featured: false,
    tools: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
    overview: 'A user-centered mobile prototype for job and internship seekers featuring application tracking and company reviews.',
    objective: 'Solve navigation pain points for student job seekers through structured User-Centered Design (UCD).',
    dataset: 'User survey and interview insights from university job seekers.',
    methodology: [
      'Conducted user interviews and developed target user personas.',
      'Constructed low-fidelity wireframes and high-fidelity UI screens in Figma.',
      'Built interactive prototype links for usability evaluation.',
    ],
    results: {
      publishedCaseStudy: 'Detailed mobile UI design case study published on Behance.',
    },
    contribution: 'UI/UX Designer.',
    behanceUrl: 'https://www.behance.net/gallery/228875993/JobinAja-Job-Aplication',
  },
];

const certificates: Certificate[] = [
  {
    id: 'jagochamp',
    title: 'JagoCHAMP Data Analytics Mentee',
    issuer: 'AjakJago (JagoCHAMP Batch 4)',
    date: 'Desember 2024 – Februari 2025',
    gpa: '3.88 / 4.00 (Program GPA)',
    category: 'Data Analytics',
    description: 'Intensive 2-month bootcamp covering Python EDA, SQL querying, data wrangling, statistical analysis, visualization, and real-world analytics projects.',
    file: '/certificates/sertifikat%20ajak%20jago.jpg',
  },
  {
    id: 'excel-bootcamp',
    title: 'Microsoft Excel Intensive Bootcamp',
    issuer: 'Karirnex by PT Ebiz Karisma Internasional',
    date: '6, 8, 10, & 13 April 2026',
    gpa: 'Predicate: Expert',
    category: 'Data Analytics',
    description: 'Advanced data modeling, Pivot Tables, dynamic array formulas (XLOOKUP, INDEX/MATCH), Data Validation, VBA Macros, and mini project.',
    file: '/certificates/Sertifikat%20Excel%20Batch%207.pdf',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: '19 Juli 2026',
    gpa: 'Certified Completion',
    category: 'Cloud Computing',
    description: 'Foundational cloud architectural principles, AWS core security models, global infrastructure, IAM, and compute/storage services.',
    file: '/certificates/Sertif%20aws%20modul.pdf',
  },
];

const timelineItems: TimelineItem[] = [
  {
    id: 'bmkg-intern',
    role: 'Data Analyst Intern',
    organization: 'Stasiun Meteorologi Kelas II Banyuwangi — BMKG',
    period: 'Juni – Agustus 2026',
    category: 'Professional Internship',
    description: 'Processed historical meteorological observation data (1,826 daily records) using Python and engineered an 8-module interactive R Shiny dashboard for weather pattern exploration and K-Means clustering analysis.',
    highlights: [
      'Data Cleaning & EDA across temperature, rainfall, humidity, and pressure.',
      'Engineered an interactive R Shiny dashboard deployed on shinyapps.io.',
      'Applied K-Means clustering for local microclimate regime classification.',
    ],
  },
  {
    id: 'psdm-unesa',
    role: 'Anggota Divisi PSDM',
    organization: 'Protokoler Universitas Negeri Surabaya',
    period: 'Maret 2026 – Sekarang',
    category: 'Organizational Leadership',
    description: 'Contributed to member development, resource management, and organizational activity coordination for university ceremonial protocol.',
    highlights: [
      'Supported internal member capacity building workshops.',
      'Coordinated official university ceremonial protocols.',
    ],
  },
  {
    id: 'ground-handling',
    role: 'Anggota Divisi Ground Handling',
    organization: 'Festival Kebangsaan Gema Kampus',
    period: '8 – 9 Mei 2026',
    category: 'Event Operations',
    description: 'Coordinated ground-handling operations, logistics transportation, and talent/artist mobilization during the event.',
    highlights: [
      'Managed guest and talent mobility schedules.',
      'Executed ground-handling logistical coordination.',
    ],
  },
  {
    id: 'forsa-treasurer',
    role: 'Bendahara 1',
    organization: 'Forsa Festival 2026',
    period: 'Oktober 2025 – Januari 2026',
    category: 'Finance & Administration',
    description: 'Managed event budgeting, financial bookkeeping, real-time transaction tracking, and financial accountability reporting.',
    highlights: [
      'Formulated activity budget allocations.',
      'Delivered transparent financial audit reports.',
    ],
  },
  {
    id: 'pkkmb-facilitator',
    role: 'Sie. Fasilitator',
    organization: 'PKKMB Fakultas FMIPA UNESA',
    period: 'Agustus 2025',
    category: 'Student Mentorship',
    description: 'Served as a student mentor and facilitator during the faculty orientation program for new FMIPA UNESA undergraduates.',
    highlights: [
      'Guided new students through campus orientation.',
      'Facilitated academic adaptation sessions.',
    ],
  },
  {
    id: 'surabaya-mengajar',
    role: 'Teaching Volunteer',
    organization: 'Surabaya Mengajar (Kenjeran Area)',
    period: 'April – Mei 2025',
    category: 'Volunteering & Community Service',
    description: 'Participated in a community teaching volunteer program educating elementary school students in the Kenjeran area of Surabaya.',
    highlights: [
      'Taught foundational literacy and mathematics.',
      'Engaged in local community empowerment.',
    ],
  },
  {
    id: 'forsa-secretary',
    role: 'Sekretaris 1',
    organization: 'Forsa Campus Festival',
    period: 'Oktober 2024 – Februari 2025',
    category: 'Finance & Administration',
    description: 'Prepared official event correspondence, administrative reports, and organized physical and digital documentation archives.',
    highlights: [
      'Drafted administrative proposals and official letters.',
      'Maintained structured digital archives.',
    ],
  },
  {
    id: 'reloud-pr',
    role: 'Humas Inagurasi RELOUD 2024',
    organization: 'Program Studi Sains Data UNESA',
    period: 'Oktober 2024',
    category: 'Public Relations & Events',
    description: 'Participated actively in event planning and execution, including press releases and seminar promotion.',
    highlights: [
      'Coordinated public media coverage.',
      'Managed guest speaker communications.',
    ],
  },
];

/* ============================================================
   BEHANCE ICON
   ============================================================ */
const BehanceIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 7h-7v-2h7v2zm1.726 10.519c-.31.844-.827 1.543-1.551 2.098-.725.556-1.637.834-2.736.834-1.393 0-2.551-.432-3.473-1.297-.922-.865-1.383-2.074-1.383-3.627 0-1.48.432-2.678 1.297-3.594.865-.916 2.008-1.374 3.43-1.374 1.307 0 2.37.387 3.19 1.161.821.774 1.231 1.83 1.231 3.167 0 .193-.01.409-.03.648h-6.721c.076.716.35 1.282.822 1.698.473.416 1.077.624 1.813.624.58 0 1.054-.124 1.423-.372.368-.248.653-.611.854-1.089l1.835.725zm-2.083-4.403c-.043-.538-.255-.975-.636-1.311-.381-.336-.88-.504-1.497-.504-.6 0-1.096.168-1.488.504-.392.336-.632.773-.72 1.311h4.341zm-13.913 7.335h-7.73v-16.451h8.172c1.785 0 3.178.43 4.179 1.291.999.861 1.499 2.029 1.499 3.504 0 .992-.258 1.826-.774 2.502-.516.677-1.229 1.157-2.139 1.442 1.17.271 2.062.813 2.676 1.626.614.813.921 1.81.921 2.99 0 1.554-.51 2.784-1.53 3.69-1.02.906-2.443 1.359-4.27 1.359zm-4.73-13.666v3.834h4.743c.725 0 1.316-.168 1.774-.504.458-.336.687-.822.687-1.458 0-.649-.222-1.127-.665-1.434-.443-.308-1.034-.462-1.774-.462h-4.765zm0 6.471v4.403h5.279c.774 0 1.411-.193 1.912-.58.501-.387.752-.942.752-1.666 0-.712-.255-1.254-.764-1.626-.509-.373-1.171-.559-1.987-.559h-5.192z" />
  </svg>
);

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [expandedTimelineId, setExpandedTimelineId] = useState<string | null>('bmkg-intern');
  const [profileImage] = useState('/images/foto%20cintiya.jpg');

  // Form state
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({
    type: null,
    msg: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal: ESC key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = selectedProject || selectedCertificate ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, selectedCertificate]);

  // Active section on scroll (the last section whose top has passed the header)
  useEffect(() => {
    const handleScroll = () => {
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    projectFilter === 'All Projects' ? projects : projects.filter((p) => p.category === projectFilter);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({ type: 'error', msg: 'Harap isi seluruh kolom yang wajib diisi.' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({ type: 'success', msg: 'Membuka pesan WhatsApp langsung...' });
      const waMsg = encodeURIComponent(
        `Halo Cintiya, Saya ${formState.name} (${formState.email}).\n\nSubjek: ${formState.subject || 'Inquiry'}\nPesan: ${formState.message}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`, '_blank');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/cv%20cintiya%2011%20nov.pdf';
    link.download = 'CV-Cintiya-Agustin-Nareswari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const inputClass =
    'w-full px-3.5 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#3979B9] transition-colors font-normal';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#263244] font-sans antialiased selection:bg-[#3979B9] selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        html { scroll-behavior: smooth; }
        section[id], div[id="certificates"] { scroll-margin-top: 72px; }

        body, button, input, textarea {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }

        .elevated-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        @media (prefers-reduced-motion: no-preference) {
          .elevated-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 30px -10px rgba(36, 54, 75, 0.12);
          }
          .skill-chip {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .skill-chip:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px -4px rgba(57, 121, 185, 0.2);
          }
        }
      `}</style>

      {/* ================= 1. NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#A9CBE8]/30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#home" className="flex items-center space-x-3 group shrink-0">
            <span className="w-9 h-9 rounded-xl bg-[#24364B] text-[#F2C96D] flex items-center justify-center text-sm font-extrabold shadow-sm group-hover:scale-105 transition-transform">
              CN
            </span>
            <div>
              <span className="text-sm sm:text-base font-bold text-[#24364B] leading-none block">
                Cintiya Agustin Nareswari
              </span>
              <span className="text-[11px] text-[#3979B9] font-medium tracking-wide block mt-0.5">
                Data Science Undergraduate @ UNESA
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1 text-xs uppercase tracking-wider font-semibold">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all py-1.5 px-3 rounded-full ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-[#3979B9] text-white font-bold shadow-xs'
                    : 'text-[#263244]/70 hover:text-[#3979B9] hover:bg-[#A9CBE8]/20'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CV button */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-full bg-[#24364B] hover:bg-[#3979B9] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#F2C96D]" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#24364B] bg-[#F8FAFC] border border-[#A9CBE8]/40"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#A9CBE8]/40 px-6 py-5 space-y-2 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xs font-semibold text-[#24364B] py-2 px-3 rounded-lg hover:bg-[#A9CBE8]/20"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleDownloadCV();
              }}
              className="w-full mt-2 py-2.5 rounded-xl bg-[#24364B] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#F2C96D]" />
              <span>Download CV</span>
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* ================= 2. HERO ================= */}
        <AnimatedSection className="relative">
          <section
            id="home"
            className="pt-12 pb-16 md:pt-16 md:pb-24 bg-[#F8FAFC] border-b border-[#A9CBE8]/30"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left column */}
                <div className="lg:col-span-7 space-y-6">
                  <AnimatedItem direction="left" delay={0.2}>
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#A9CBE8]/25 text-[#24364B] border border-[#A9CBE8]/50 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#E99A65]" />
                      <span>DATA SCIENCE PORTFOLIO · S1 SAINS DATA UNESA · IPK 3.64 / 4.00</span>
                    </div>
                  </AnimatedItem>

                  <AnimatedItem direction="up" delay={0.4}>
                    <div className="space-y-2">
                      <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#24364B] leading-tight tracking-tight">
                        Cintiya Agustin <span className="text-[#3979B9]">Nareswari</span>
                      </h1>
                      <p className="text-base sm:text-xl font-bold text-[#E99A65]">
                        Data Science Undergraduate | Data Analytics | Machine Learning
                      </p>
                    </div>
                  </AnimatedItem>

                  <AnimatedItem direction="up" delay={0.6}>
                    <p className="text-[#263244]/80 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                      Mahasiswa S1 Sains Data Universitas Negeri Surabaya dengan fokus pada Data Analytics dan Data Science. Berpengalaman dalam exploratory data analysis, statistical modeling, machine learning, time series forecasting, data visualization, dan pengembangan dashboard interaktif.
                    </p>
                  </AnimatedItem>

                  <AnimatedItem direction="up" delay={0.8}>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-[#3979B9] hover:bg-[#24364B] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 group"
                      >
                        <span>EXPLORE MY WORK</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#F2C96D]" />
                      </a>

                      <button
                        onClick={handleDownloadCV}
                        className="px-6 py-3 rounded-full bg-[#FFFFFF] border-2 border-[#24364B] hover:bg-[#24364B] hover:text-white text-[#24364B] text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-[#3979B9]" />
                        <span>DOWNLOAD CV</span>
                      </button>
                    </div>
                  </AnimatedItem>

                  {/* Social profiles */}
                  <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#A9CBE8]/30 text-xs">
                    <span className="text-[#24364B] uppercase tracking-wider font-bold">PROFILES:</span>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#3979B9] flex items-center gap-1.5 font-semibold text-[#263244]/80 transition-colors">
                      <Github className="w-4 h-4 text-[#3979B9]" /> GitHub
                    </a>
                    <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#3979B9] flex items-center gap-1.5 font-semibold text-[#263244]/80 transition-colors">
                      <BehanceIcon className="w-4 h-4 text-[#3979B9]" /> Behance
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#E99A65] flex items-center gap-1.5 font-semibold text-[#263244]/80 transition-colors">
                      <Instagram className="w-4 h-4 text-[#E99A65]" /> Instagram
                    </a>
                    <a href={`mailto:${EMAIL}`} className="hover:text-[#3979B9] flex items-center gap-1.5 font-semibold text-[#263244]/80 transition-colors">
                      <Mail className="w-4 h-4 text-[#3979B9]" /> Email
                    </a>
                  </div>
                </div>

                {/* Right column: photo */}
                <div className="lg:col-span-4 lg:col-start-9 relative max-w-[420px] w-full justify-self-end">
                  <div className="relative rounded-2xl bg-white p-3.5 border border-[#A9CBE8]/40 shadow-md elevated-card">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#24364B] border border-[#A9CBE8]/30">
                      <img
                        src={profileImage}
                        alt="Cintiya Agustin Nareswari - Data Science Undergraduate"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24364B]/80 via-transparent to-transparent opacity-90" />

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="px-2.5 py-1 rounded-md bg-[#3979B9] text-[10px] font-bold tracking-wider uppercase inline-block mb-1 shadow-xs">
                          Data Scientist Candidate
                        </span>
                        <h3 className="text-base font-bold text-white">Cintiya Agustin Nareswari</h3>
                        <p className="text-xs text-[#A9CBE8]">S1 Sains Data · UNESA (IPK 3.64)</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs pt-3">
                      <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#A9CBE8]/30">
                        <span className="text-[#263244]/60 block text-[10px] uppercase font-semibold">MAGANG</span>
                        <span className="font-bold text-[#3979B9]">BMKG Banyuwangi</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#A9CBE8]/30">
                        <span className="text-[#263244]/60 block text-[10px] uppercase font-semibold">IPK AKADEMIK</span>
                        <span className="font-bold text-[#E99A65]">3.64 / 4.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ================= 3. ABOUT ================= */}
        <section id="about" className="py-20 border-b border-[#A9CBE8]/30 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs text-[#3979B9] tracking-widest uppercase font-bold block">ABOUT ME</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24364B]">
                  Analytical Interests & Data Approach
                </h2>
                <div className="w-12 h-1 bg-[#F2C96D] rounded-full" />
              </div>

              <div className="lg:col-span-8 space-y-5 text-[#263244] text-sm sm:text-base leading-relaxed font-normal">
                <div className="bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-[#A9CBE8]/40 shadow-xs space-y-3">
                  <p>
                    Mahasiswa S1 Sains Data Universitas Negeri Surabaya dengan fokus pada Data Analytics dan Data Science. Memiliki pengalaman penerapan pengolahan dan analisis data melalui program magang di BMKG serta berbagai proyek yang mencakup exploratory data analysis, statistical modeling, machine learning, time series forecasting, dan data visualization.
                  </p>
                  <p>
                    Menguasai Python, SQL, dan R, dengan pengalaman dalam pengembangan dashboard interaktif, pemodelan prediktif, serta implementasi data warehouse dan ETL. Berkomitmen mengembangkan solusi berbasis data melalui pendekatan analitis dan penerapan metode komputasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/40 elevated-card">
                    <span className="text-[#263244]/60 block uppercase text-[10px] mb-0.5 font-semibold">Program Studi</span>
                    <span className="font-bold text-[#24364B]">S1 Sains Data UNESA</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/40 elevated-card">
                    <span className="text-[#263244]/60 block uppercase text-[10px] mb-0.5 font-semibold">IPK Akademik</span>
                    <span className="font-bold text-[#3979B9]">3.64 / 4.00</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/40 elevated-card">
                    <span className="text-[#263244]/60 block uppercase text-[10px] mb-0.5 font-semibold">Lokasi</span>
                    <span className="font-bold text-[#24364B]">Surabaya, Indonesia</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#24364B] text-white shadow-xs elevated-card">
                    <span className="text-[#F2C96D] block uppercase text-[10px] mb-0.5 font-semibold">Ketersediaan</span>
                    <span className="font-bold text-white">Open to Internship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. BMKG FLAGSHIP ================= */}
        <section id="bmkg-flagship" className="py-20 bg-[#24364B] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-5 gap-4">
              <div>
                <span className="text-xs text-[#F2C96D] tracking-widest uppercase font-bold block mb-1">
                  FEATURED INTERNSHIP EXPERIENCE
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Data Analyst Intern — BMKG Banyuwangi
                </h2>
                <p className="text-[#A9CBE8] text-sm mt-1 max-w-2xl font-normal">
                  Stasiun Meteorologi Kelas II Banyuwangi (Juni – Agustus 2026)
                </p>
              </div>

              <a
                href={SHINY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#3979B9] hover:bg-[#E99A65] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2.5 shrink-0"
              >
                <Radio className="w-4 h-4 text-[#F2C96D]" />
                <span>EXPLORE LIVE BMKG DASHBOARD</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 shadow-sm">
                  <h3 className="text-lg font-bold text-[#F2C96D]">
                    Pengolahan & Analisis Data Meteorologi Historis
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9CBE8] leading-relaxed font-normal">
                    Mengolah dan menganalisis data meteorologi historis BMKG Banyuwangi (2021–2025) menggunakan Python, serta mengembangkan dashboard interaktif berbasis R Shiny untuk visualisasi pola cuaca, analisis clustering, dan penyajian insight otomatis.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/60 block text-[10px] font-semibold uppercase">CAKUPAN OBSERVASI</span>
                      <span className="font-bold text-[#E99A65] text-sm">1,826 Data Harian</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-white/60 block text-[10px] font-semibold uppercase">PERIODE</span>
                      <span className="font-bold text-[#A9CBE8] text-sm">2021 – 2025</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase text-[#F2C96D] tracking-wider font-bold">
                    8 Modul Analisis pada Portal R Shiny:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold">
                    {SHINY_MODULES.map((mod) => (
                      <span
                        key={mod}
                        className="px-3 py-2 rounded-xl bg-white/5 text-white text-center border border-white/10 hover:border-[#3979B9] transition-colors"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/5 border border-white/15 p-5 space-y-4 shadow-xl relative text-white elevated-card">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center space-x-2 text-xs text-[#A9CBE8]">
                      <Globe className="w-4 h-4 text-[#F2C96D]" />
                      <span className="truncate max-w-[200px]">shinyapps.io/BMKG_Shiny/</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E99A65]/20 text-[#E99A65] text-[10px] font-bold border border-[#E99A65]/40">
                      LIVE PORTAL
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#1E2B3C] p-4 border border-white/10 overflow-hidden">
                    <div className="flex justify-between items-center text-xs text-white/80 font-semibold mb-4">
                      <span>BMKG Weather Dashboard</span>
                      <span className="text-[#F2C96D]">Real Project</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/10 bg-white">
                      <img
                        src="/images/bmkg-dashboard.png"
                        alt="Dashboard Analisis Meteorologi Banyuwangi"
                        className="block w-full h-auto transition-transform duration-500 ease-out hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex justify-between text-[10px] text-white/60 border-t border-white/10 pt-3 mt-4 font-medium">
                      <span>1,826 Records</span>
                      <span>2021 – 2025</span>
                    </div>
                  </div>

                  <a
                    href={SHINY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 border border-white/15 transition-all"
                  >
                    <span>Buka Live Dashboard BMKG</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F2C96D]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. EXPERIENCE ================= */}
        <section id="experience" className="py-20 border-b border-[#A9CBE8]/30 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="mb-12">
              <span className="text-xs text-[#3979B9] tracking-widest uppercase font-bold block mb-1">
                CAREER & LEADERSHIP JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24364B]">
                Pengalaman Organisasi & Kerja
              </h2>
            </div>

            <div className="relative border-l-2 border-[#3979B9]/40 ml-3 sm:ml-6 space-y-6">
              {timelineItems.map((item, idx) => {
                const isExpanded = expandedTimelineId === item.id;
                const badgeStyle =
                  idx % 2 === 0
                    ? 'bg-[#A9CBE8]/25 text-[#24364B] border-[#A9CBE8]/50'
                    : 'bg-[#F2C96D]/20 text-[#24364B] border-[#F2C96D]/50';
                const toggle = () => setExpandedTimelineId(isExpanded ? null : item.id);

                return (
                  <div key={item.id} className="relative pl-6 sm:pl-8 group">
                    <div
                      onClick={toggle}
                      className={`absolute -left-[11px] top-2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-all border-2 bg-white ${
                        isExpanded
                          ? 'border-[#3979B9] bg-[#3979B9] text-white scale-110 shadow-xs'
                          : 'border-[#24364B]/40 group-hover:border-[#3979B9]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-[#F2C96D]' : 'bg-[#3979B9]'}`} />
                    </div>

                    <div
                      className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 elevated-card ${
                        isExpanded
                          ? 'bg-white border-[#3979B9] shadow-md'
                          : 'bg-white border-[#A9CBE8]/40 hover:border-[#3979B9]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase border ${badgeStyle}`}>
                            {item.category}
                          </span>
                          <span className="text-xs text-[#3979B9] font-bold">{item.period}</span>
                        </div>
                        <button
                          onClick={toggle}
                          className="text-xs text-[#3979B9] hover:underline flex items-center gap-1 font-bold self-start sm:self-auto"
                        >
                          <span>{isExpanded ? 'Sembunyikan Detail' : 'Tampilkan Detail'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-lg font-extrabold text-[#24364B]">{item.role}</h3>
                      <h4 className="text-xs text-[#263244]/60 font-semibold mb-2">{item.organization}</h4>

                      <p className="text-xs sm:text-sm text-[#263244]/80 leading-relaxed font-normal mb-2">
                        {item.description}
                      </p>

                      {isExpanded && (
                        <div className="pt-3 border-t border-[#A9CBE8]/30 mt-3 space-y-1.5 animate-in fade-in duration-200">
                          <span className="text-[10px] text-[#24364B] uppercase font-bold block mb-1">
                            Pencapaian & Tanggung Jawab Utama:
                          </span>
                          {item.highlights.map((hl) => (
                            <div key={hl} className="flex items-start space-x-2 text-xs text-[#263244]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3979B9] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= 6. PROJECTS ================= */}
        <section id="projects" className="py-20 border-b border-[#A9CBE8]/30 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs text-[#3979B9] tracking-widest uppercase font-bold block mb-1">
                  VERIFIED CASE STUDIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24364B]">
                  Proyek & Studi Kasus Data Science
                </h2>
                <p className="text-xs text-[#263244]/60 mt-1 font-normal">
                  Eksplorasi metodologi lengkap dan hasil akurasi model sebelum membuka repositori resmi.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 text-xs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-3 py-2 rounded-full font-bold transition-all ${
                      projectFilter === cat
                        ? 'bg-[#3979B9] text-white shadow-xs'
                        : 'bg-[#F8FAFC] text-[#263244]/70 border border-[#A9CBE8]/40 hover:bg-[#A9CBE8]/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 p-6 flex flex-col justify-between elevated-card group hover:border-[#3979B9]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#A9CBE8]/25 text-[#24364B] font-bold">
                        {p.category}
                      </span>
                      <span className="text-xs text-[#263244]/60 font-bold">{p.year}</span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#24364B] group-hover:text-[#3979B9] transition-colors mb-2 leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-[#263244]/80 text-xs leading-relaxed mb-4 font-normal line-clamp-3">
                      {p.overview}
                    </p>

                    {p.results?.bestAccuracy && (
                      <div className="mb-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/30">
                        <span className="text-[10px] text-[#3979B9] font-bold block uppercase mb-0.5">
                          Metrik Hasil Utama
                        </span>
                        <p className="text-xs text-[#24364B] font-extrabold">{p.results.bestAccuracy}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#F8FAFC] text-[#24364B] border border-[#A9CBE8]/30 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(p)}
                      className="w-full py-3 rounded-xl bg-[#24364B] hover:bg-[#3979B9] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#F2C96D]" />
                      <span>EXPLORE PROJECT</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 7. SKILLS + CERTIFICATES ================= */}
        <section id="skills" className="py-20 border-b border-[#A9CBE8]/30 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="mb-12">
              <span className="text-xs text-[#3979B9] tracking-widest uppercase font-bold block mb-1">
                TECHNICAL SKILL MAP & TOOLS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24364B]">
                Kemampuan & Alat Pengolahan Data
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Programming & Data */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 space-y-4 elevated-card hover:border-[#3979B9]">
                <div className="flex items-center space-x-3 pb-3 border-b border-[#A9CBE8]/30">
                  <Code2 className="w-5 h-5 text-[#3979B9]" />
                  <h3 className="text-xs font-extrabold uppercase text-[#24364B]">Programming & Data</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  {SKILLS_PROGRAMMING.map((s) => (
                    <span
                      key={s.name}
                      className="skill-chip px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 font-bold text-[#24364B] bg-[#A9CBE8]/20 border-[#A9CBE8]/50"
                    >
                      <s.icon className="w-3.5 h-3.5 text-[#3979B9]" />
                      <span>{s.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Analytics & Modeling */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 space-y-4 elevated-card hover:border-[#E99A65]">
                <div className="flex items-center space-x-3 pb-3 border-b border-[#A9CBE8]/30">
                  <Cpu className="w-5 h-5 text-[#E99A65]" />
                  <h3 className="text-xs font-extrabold uppercase text-[#24364B]">Analytics & Modeling</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  {SKILLS_ANALYTICS.map((s) => (
                    <span
                      key={s}
                      className="skill-chip px-2.5 py-1.5 rounded-lg bg-[#E99A65]/15 border border-[#E99A65]/40 text-[#24364B] font-bold flex items-center gap-1.5"
                    >
                      <Brain className="w-3.5 h-3.5 text-[#E99A65]" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Visualization */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 space-y-4 elevated-card hover:border-[#F2C96D]">
                <div className="flex items-center space-x-3 pb-3 border-b border-[#A9CBE8]/30">
                  <BarChart3 className="w-5 h-5 text-[#F2C96D]" />
                  <h3 className="text-xs font-extrabold uppercase text-[#24364B]">Visualization & Dashboards</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  {SKILLS_VISUALIZATION.map((s) => (
                    <span
                      key={s.name}
                      className="skill-chip px-2.5 py-1.5 rounded-lg bg-[#F2C96D]/20 border border-[#F2C96D]/50 text-[#24364B] font-bold flex items-center gap-1.5"
                    >
                      <s.icon className="w-3.5 h-3.5 text-[#24364B]" />
                      <span>{s.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft skills */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 space-y-4 elevated-card hover:border-[#3979B9]">
                <div className="flex items-center space-x-3 pb-3 border-b border-[#A9CBE8]/30">
                  <Users className="w-5 h-5 text-[#3979B9]" />
                  <h3 className="text-xs font-extrabold uppercase text-[#24364B]">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                  {SKILLS_SOFT.map((s) => (
                    <span
                      key={s}
                      className="skill-chip px-2.5 py-1.5 rounded-lg bg-[#A9CBE8]/20 border border-[#A9CBE8]/50 text-[#24364B] font-bold flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3979B9]" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div id="certificates">
              <span className="text-xs text-[#3979B9] tracking-widest uppercase font-bold block mb-4">
                VERIFIED CREDENTIALS
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#A9CBE8]/40 flex flex-col justify-between space-y-4 elevated-card hover:border-[#3979B9]"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#A9CBE8]/25 text-[#24364B] font-bold">
                          {cert.category}
                        </span>
                        <span className="text-xs text-[#3979B9] font-bold text-right">{cert.date}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#24364B]">{cert.title}</h3>

                      <p className="text-xs text-[#263244]/70 font-bold">
                        Penerbit: <span className="text-[#24364B]">{cert.issuer}</span>
                      </p>

                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/30">
                        <span className="text-[10px] text-[#3979B9] font-bold block uppercase">
                          Hasil Program / Nilai
                        </span>
                        <span className="text-xs text-[#24364B] font-extrabold">{cert.gpa}</span>
                      </div>

                      <p className="text-xs text-[#263244]/80 leading-relaxed font-normal">{cert.description}</p>
                    </div>

                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="w-full py-2.5 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/40 hover:bg-[#3979B9] hover:text-white text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <span>VIEW CERTIFICATE</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 8. CONTACT ================= */}
        <section id="contact" className="py-20 bg-[#24364B] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs text-[#F2C96D] tracking-widest uppercase font-bold block mb-1">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Mari Berdiskusi & Berkolaborasi.
                  </h2>
                  <p className="text-[#A9CBE8] text-xs sm:text-sm mt-2 font-normal leading-relaxed">
                    Terbuka untuk peluang magang, proyek analisis data, riset komputasi, dan diskusi teknis seputar Data Science.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1 text-xs">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#3979B9] transition-all flex items-center space-x-3.5 group"
                  >
                    <Mail className="w-4 h-4 text-[#F2C96D]" />
                    <div>
                      <span className="text-white/60 block uppercase text-[10px] font-semibold">Email Address</span>
                      <span className="text-white group-hover:text-[#F2C96D] font-bold text-xs">{EMAIL}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2C96D] transition-all flex items-center space-x-3.5 group"
                  >
                    <Send className="w-4 h-4 text-[#F2C96D]" />
                    <div>
                      <span className="text-white/60 block uppercase text-[10px] font-semibold">WhatsApp / Telepon</span>
                      <span className="text-white group-hover:text-[#F2C96D] font-bold text-xs">+62 859-7437-2381</span>
                    </div>
                  </a>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white transition-all flex items-center space-x-3.5 group"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <div>
                      <span className="text-white/60 block uppercase text-[10px] font-semibold">GitHub Profile</span>
                      <span className="text-white font-bold text-xs">github.com/cintiyaagustinnareswari</span>
                    </div>
                  </a>

                  <a
                    href={BEHANCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E99A65] transition-all flex items-center space-x-3.5 group"
                  >
                    <BehanceIcon className="w-4 h-4 text-[#E99A65]" />
                    <div>
                      <span className="text-white/60 block uppercase text-[10px] font-semibold">Behance Portfolio</span>
                      <span className="text-white font-bold text-xs">behance.net/cintiyanareswa</span>
                    </div>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E99A65] transition-all flex items-center space-x-3.5 group"
                  >
                    <Instagram className="w-4 h-4 text-[#E99A65]" />
                    <div>
                      <span className="text-white/60 block uppercase text-[10px] font-semibold">Instagram Profile</span>
                      <span className="text-white font-bold text-xs">@cintiya_nrs</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/15 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Kirim Pesan Langsung</h3>

                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs text-white/80 mb-1 font-semibold">Nama Lengkap *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Nama Anda"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-white/80 mb-1 font-semibold">Email *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="email@domain.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/80 mb-1 font-semibold">Subjek</label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Inquiry Magang / Data Science"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-white/80 mb-1 font-semibold">Pesan *</label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tuliskan rincian pesan Anda..."
                        className={inputClass}
                      />
                    </div>

                    {formStatus.msg && (
                      <div
                        className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                          formStatus.type === 'success'
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-200'
                            : 'bg-rose-500/20 border border-rose-400 text-rose-200'
                        }`}
                      >
                        {formStatus.type === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 shrink-0" />
                        )}
                        <span>{formStatus.msg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#3979B9] hover:bg-[#E99A65] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Memproses Pesan...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#F2C96D]" />
                          <span>KIRIM PESAN VIA WHATSAPP</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 bg-[#1E2B3C] border-t border-white/10 text-xs text-white/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-base font-bold text-white block">Cintiya Agustin Nareswari</span>
            <span className="text-[11px] text-[#A9CBE8] font-semibold">Data Science Undergraduate @ UNESA</span>
          </div>

          <p className="text-center text-xs text-white/70 font-normal">
            S1 Sains Data · Universitas Negeri Surabaya
          </p>

          <div className="flex items-center space-x-4 text-white/90 font-bold">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C96D] transition-colors">
              GitHub
            </a>
            <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C96D] transition-colors">
              Behance
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#E99A65] transition-colors">
              Instagram
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-[#F2C96D] transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-5 pt-4 border-t border-white/5 text-center text-[10px] text-white/40 font-medium">
          © {new Date().getFullYear()} Cintiya Agustin Nareswari. All rights reserved.
        </div>
      </footer>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#24364B]/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl bg-white border border-[#A9CBE8]/40 p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#263244] space-y-5"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] text-[#24364B] hover:bg-[#3979B9] hover:text-white transition-colors"
              aria-label="Tutup Dialog Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#A9CBE8]/25 text-[#24364B] font-bold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-[#263244]/60 font-bold">{selectedProject.year}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#24364B] pr-10">{selectedProject.title}</h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#263244] font-normal border-t border-b border-[#A9CBE8]/30 py-4">
              {selectedProject.overview && (
                <div>
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-1">1. RINGKASAN PROYEK</h4>
                  <p className="leading-relaxed">{selectedProject.overview}</p>
                </div>
              )}

              {selectedProject.objective && (
                <div>
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-1">2. TUJUAN</h4>
                  <p className="leading-relaxed">{selectedProject.objective}</p>
                </div>
              )}

              {selectedProject.dataset && (
                <div>
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-1">3. DATASET</h4>
                  <p className="leading-relaxed">{selectedProject.dataset}</p>
                </div>
              )}

              {selectedProject.methodology && (
                <div>
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-1">4. METODOLOGI</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    {selectedProject.methodology.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.results && (
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#A9CBE8]/30 space-y-1.5">
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold">5. HASIL & TEMUAN UTAMA</h4>
                  {Object.entries(selectedProject.results).map(([key, val]) => (
                    <div key={key} className="flex justify-between gap-4 text-xs">
                      <span className="text-[#263244]/60 uppercase">{key}:</span>
                      <span className="font-bold text-[#24364B] text-right">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.contribution && (
                <div>
                  <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-1">6. KONTRIBUSI SAYA</h4>
                  <p className="leading-relaxed">{selectedProject.contribution}</p>
                </div>
              )}

              <div>
                <h4 className="text-xs text-[#3979B9] uppercase font-bold mb-2">7. TEKNOLOGI & TOOLS</h4>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {selectedProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#24364B] border border-[#A9CBE8]/30 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.note && (
                <div className="p-3 rounded-xl bg-[#F2C96D]/15 border border-[#F2C96D]/50 text-[#24364B] text-xs font-mono">
                  <strong>Catatan:</strong> {selectedProject.note}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5 justify-end pt-1">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#3979B9] hover:bg-[#24364B] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  <Github className="w-4 h-4 text-[#F2C96D]" />
                  <span>LIHAT REPOSITORI GITHUB ↗</span>
                </a>
              )}

              {selectedProject.behanceUrl && (
                <a
                  href={selectedProject.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#24364B] hover:bg-[#3979B9] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  <BehanceIcon className="w-4 h-4 text-[#F2C96D]" />
                  <span>LIHAT DI BEHANCE ↗</span>
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#3979B9] hover:bg-[#E99A65] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  <Radio className="w-4 h-4 text-[#F2C96D]" />
                  <span>BUKA PORTAL LIVE R SHINY ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= CERTIFICATE MODAL ================= */}
      {selectedCertificate && (
        <div
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24364B]/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl bg-white border border-[#A9CBE8]/40 p-6 sm:p-7 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#263244]"
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] text-[#24364B] hover:bg-[#3979B9] hover:text-white transition-colors"
              aria-label="Tutup Preview Sertifikat"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#A9CBE8]/25 text-[#24364B] font-bold inline-block mb-2">
              {selectedCertificate.category}
            </span>

            <h3 className="text-lg font-bold text-[#24364B] mb-1.5 pr-10">{selectedCertificate.title}</h3>

            <p className="text-xs text-[#3979B9] font-bold mb-1">Penerbit: {selectedCertificate.issuer}</p>

            <p className="text-xs text-[#24364B] font-extrabold mb-3">Hasil Program: {selectedCertificate.gpa}</p>

            <p className="text-xs text-[#263244]/80 leading-relaxed font-normal mb-5">
              {selectedCertificate.description}
            </p>

            <div className="mb-5 overflow-hidden rounded-xl border border-[#A9CBE8]/40 bg-[#F8FAFC]">
              {selectedCertificate.file.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={selectedCertificate.file}
                  title={selectedCertificate.title}
                  className="w-full h-[450px]"
                />
              ) : (
                <img
                  src={selectedCertificate.file}
                  alt={selectedCertificate.title}
                  className="w-full max-h-[450px] object-contain"
                />
              )}
            </div>

            <div className="pt-3 border-t border-[#A9CBE8]/30 flex justify-end">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="px-5 py-2 rounded-full bg-[#3979B9] text-white text-xs font-bold uppercase tracking-wider"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
