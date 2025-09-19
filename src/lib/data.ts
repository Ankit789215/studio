import {
  Book,
  Briefcase,
  Calculator,
  Camera,
  Code,
  FlaskConical,
  Heart,
  Landmark,
  Mic,
  Palette,
  PenTool,
  Scale,
  Atom,
  TestTube2,
  Dna,
  Globe,
  Wallet,
  Building2,
  BarChart3,
  User,
  DollarSign,
  TrendingUp,
  Video,
  Users,
  Award,
  Building,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';


export const quizQuestions = [
  {
    id: 'q1',
    question: 'Which of these activities do you enjoy the most?',
    options: [
      { id: 'a', text: 'Solving complex puzzles or math problems.' },
      { id: 'b', text: 'Writing stories, poems, or articles.' },
      { id: 'c', text: 'Conducting experiments or learning about nature.' },
      { id: 'd', text: 'Creating art, music, or designs.' },
      { id: 'e', text: 'Organizing events or managing a team project.' },
    ],
  },
  {
    id: 'q2',
    question: 'When faced with a problem, you are more likely to:',
    options: [
      { id: 'a', text: 'Analyze it logically and find a systematic solution.' },
      { id: 'b', text: 'Think about how it affects people and their emotions.' },
      { id: 'c', text: 'Experiment with different approaches to see what works.' },
      { id: 'd', 'text': 'A studio or open space that encourages creativity.' },
      { id: 'e', text: 'Develop a plan and delegate tasks to solve it efficiently.' },
    ],
  },
  {
    id: 'q3',
    question: 'Which school subjects do you find most interesting?',
    options: [
      { id: 'a', text: 'Mathematics or Computer Science.' },
      { id: 'b', text: 'History, Literature, or Social Studies.' },
      { id: 'c', text: 'Physics, Chemistry, or Biology.' },
      { id: 'd', text: 'Art, Music, or Drama.' },
      { id: 'e', text: 'Economics or Business Studies.' },
    ],
  },
  {
    id: 'q4',
    question: 'What kind of work environment sounds most appealing to you?',
    options: [
      { id: 'a', text: 'A structured environment focused on data and accuracy.' },
      { id: 'b', text: 'A collaborative setting where I can help and interact with others.' },
      { id: 'c', text: 'A laboratory or field setting for research and discovery.' },
      { id: 'd', text: 'A studio or open space that encourages creativity.' },
      { id: 'e', text: 'A corporate office with clear goals and growth opportunities.' },
    ],
  },
  {
    id: 'q5',
    question: 'You are most proud of your ability to:',
    options: [
      { id: 'a', text: 'Think critically and solve logical challenges.' },
      { id: 'b', text: 'Communicate effectively and understand others.' },
      { id: 'c', 'text': 'Be curious, observant, and detail-oriented.' },
      { id: 'd', text: 'Imagine and express new ideas.' },
      { id: 'e', text: 'Be organized, responsible, and a natural leader.' },
    ],
  },
];


export type Course = {
  id: string;
  name: string;
  stream: 'Science' | 'Commerce' | 'Arts';
  icon: LucideIcon;
  description: string;
  careerPaths: {
    name: string;
    icon: LucideIcon;
  }[];
  furtherStudies: string[];
  govExams: string[];
  careerGrowth: string;
  packages: {
    entry: string;
    experienced: string;
  };
  videos: string[];
  topCompanies: string[];
  topPeople: {
    name: string;
    story: string;
  }[];
};

export const courses: Course[] = [
  {
    id: 'bsc-physics',
    name: 'B.Sc. in Physics',
    stream: 'Science',
    icon: Atom,
    description: 'Explore the fundamental principles of the universe, from quantum mechanics to cosmology.',
    careerPaths: [
      { name: 'Research Scientist', icon: TestTube2 },
      { name: 'Data Analyst', icon: BarChart3 },
      { name: 'Teacher/Professor', icon: Book },
      { name: 'Technical Writer', icon: PenTool },
    ],
    furtherStudies: ['M.Sc. in Physics', 'Ph.D. in Astrophysics', 'MCA'],
    govExams: ['UPSC Civil Services', 'SSC CGL', 'DRDO Scientist'],
    careerGrowth: "With a strong foundation in physics, you can transition into roles in data science, engineering, or academia. Continuous learning and specialization are key to career progression.",
    packages: {
      entry: "₹4-7 Lakhs",
      experienced: "₹12-25+ Lakhs"
    },
    videos: ["https://www.youtube.com/watch?v=A-tA0A-N_dI"],
    topCompanies: ["ISRO", "DRDO", "TCS", "Wipro", "Accenture"],
    topPeople: [
      {
        name: "Dr. C.V. Raman",
        story: "A Nobel laureate in Physics for his work on light scattering. His relentless curiosity and dedication to research from a young age led him to groundbreaking discoveries."
      }
    ]
  },
  {
    id: 'bsc-chemistry',
    name: 'B.Sc. in Chemistry',
    stream: 'Science',
    icon: TestTube2,
    description: 'Study the composition, structure, properties, and change of matter.',
    careerPaths: [
        { name: 'Chemist', icon: FlaskConical },
        { name: 'Pharmacist', icon: Heart },
        { name: 'Quality Control Manager', icon: Scale },
        { name: 'Food Scientist', icon: Dna },
    ],
    furtherStudies: ['M.Sc. in Chemistry', 'MBA in Pharma Management', 'Forensic Science'],
    govExams: ['FCI Manager', 'State PSC', 'Bank PO'],
    careerGrowth: "Opportunities abound in pharmaceuticals, manufacturing, and R&D. A Master's degree can lead to senior research positions.",
    packages: {
      entry: "₹3-6 Lakhs",
      experienced: "₹10-20 Lakhs"
    },
    videos: ["https://www.youtube.com/watch?v=rdjqA7yQv4I"],
    topCompanies: ["Cipla", "Dr. Reddy's Labs", "Sun Pharma", "Nestle", "Hindustan Unilever"],
    topPeople: [
      {
        name: "Venkatraman Ramakrishnan",
        story: "A Nobel laureate in Chemistry, he pursued his passion for science across disciplines, starting with physics and eventually making seminal contributions to structural biology."
      }
    ]
  },
  {
    id: 'bsc-math',
    name: 'B.Sc. in Mathematics',
    stream: 'Science',
    icon: Dna,
    description: 'Develop analytical and problem-solving skills through the study of numbers, structure, and space.',
    careerPaths: [
        { name: 'Actuary', icon: Calculator },
        { name: 'Statistician', icon: BarChart3 },
        { name: 'Data Scientist', icon: Code },
        { name: 'Financial Analyst', icon: Wallet },
    ],
    furtherStudies: ['M.Sc. in Mathematics', 'MCA', 'M.Sc. in Data Science', 'Actuarial Science'],
    govExams: ['Indian Statistical Service', 'RBI Grade B', 'UPSC CSE'],
    careerGrowth: "A degree in mathematics opens doors to high-demand fields like data science, finance, and software development. Specializing in areas like machine learning can lead to rapid growth.",
    packages: {
        entry: "₹5-9 Lakhs",
        experienced: "₹15-40+ Lakhs"
    },
    videos: ["https://www.youtube.com/watch?v=N5vJSNXz7yQ"],
    topCompanies: ["Goldman Sachs", "JP Morgan", "Google", "Microsoft", "Deloitte"],
    topPeople: [
        {
            name: "Srinivasa Ramanujan",
            story: "A self-taught mathematical genius who made extraordinary contributions to number theory. His journey from a clerk in Madras to a Fellow of the Royal Society is a story of pure passion and dedication."
        }
    ]
  },
  {
    id: 'bcom',
    name: 'B.Com. (Bachelor of Commerce)',
    stream: 'Commerce',
    icon: Briefcase,
    description: 'Gain a strong foundation in accounting, finance, economics, and business management.',
    careerPaths: [
      { name: 'Accountant', icon: Calculator },
      { name: 'Financial Analyst', icon: BarChart3 },
      { name: 'Banker', icon: Landmark },
      { name: 'Tax Consultant', icon: Scale },
    ],
    furtherStudies: ['M.Com', 'MBA', 'Chartered Accountancy (CA)', 'Company Secretary (CS)'],
    govExams: ['RBI Grade B', 'SEBI Grade A', 'IBPS PO'],
    careerGrowth: "Professional certifications like CA or an MBA can significantly accelerate career growth, leading to roles like CFO or financial controller.",
    packages: {
      entry: "₹3-6 Lakhs (Varies with certifications)",
      experienced: "₹10-30+ Lakhs"
    },
    videos: ["https://www.youtube.com/watch?v=J_30nS2z2x0"],
    topCompanies: ["Deloitte", "EY", "ICICI Bank", "HDFC Bank", "KPMG"],
    topPeople: [
      {
        name: "Kumar Mangalam Birla",
        story: "An eminent industrialist who took over the Aditya Birla Group at a young age. A Chartered Accountant by qualification, he transformed the group into a global conglomerate through strategic vision and financial acumen."
      }
    ]
  },
  {
    id: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    stream: 'Commerce',
    icon: Building2,
    description: 'Develop leadership and management skills for the corporate world.',
    careerPaths: [
        { name: 'HR Manager', icon: User },
        { name: 'Marketing Manager', icon: Mic },
        { name: 'Operations Manager', icon: Briefcase },
        { name: 'Business Consultant', icon: Building2 },
    ],
    furtherStudies: ['MBA', 'PGDM', 'Masters in Management'],
    govExams: ['UPSC', 'SSC CGL', 'Bank Manager'],
    careerGrowth: "A BBA is a stepping stone to an MBA. With an MBA from a top institution, you can aim for leadership positions in multinational corporations within a few years.",
    packages: {
      entry: "₹4-7 Lakhs",
      experienced: "₹15-50+ Lakhs (Post-MBA)"
    },
    videos: ["https://www.youtube.com/watch?v=I_gHq3L71-8"],
    topCompanies: ["Hindustan Unilever", "Procter & Gamble", "McKinsey & Company", "Boston Consulting Group"],
    topPeople: [
      {
        name: "Indra Nooyi",
        story: "Former CEO of PepsiCo, she started her career in India and climbed the corporate ladder with her sharp business insights and leadership skills. She pursued an MBA from IIM Calcutta and a Master's from Yale."
      }
    ]
  },
  {
    id: 'ba-history',
    name: 'B.A. in History',
    stream: 'Arts',
    icon: Landmark,
    description: 'Understand the past to make sense of the present, studying events, societies, and cultures.',
    careerPaths: [
      { name: 'Archaeologist', icon: PenTool },
      { name: 'Museum Curator', icon: Palette },
      { name: 'Journalist', icon: Mic },
      { name: 'Archivist', icon: Book },
    ],
    furtherStudies: ['M.A. in History', 'Ph.D. in History', 'Museology', 'Journalism'],
    govExams: ['UPSC Civil Services', 'State PSC', 'Archaeological Survey of India'],
    careerGrowth: "While not always linear, a history degree hones analytical and writing skills valued in civil services, journalism, and law. A Master's or PhD is essential for academic careers.",
    packages: {
      entry: "₹3-5 Lakhs",
      experienced: "Varies greatly by field (Govt. pay scales or media industry standards)"
    },
    videos: ["https://www.youtube.com/watch?v=v2o_S_N6_Wk"],
    topCompanies: ["Archaeological Survey of India", "National Museum", "The Hindu Group", "Times of India"],
    topPeople: [
      {
        name: "Ramachandra Guha",
        story: "A renowned historian and writer, he chose to study history to understand the complexities of modern India. His deep research and compelling storytelling have made him a leading public intellectual."
      }
    ]
  },
  {
    id: 'ba-sociology',
    name: 'B.A. in Sociology',
    stream: 'Arts',
    icon: Globe,
    description: 'Analyze human society, social relationships, and cultural phenomena.',
    careerPaths: [
        { name: 'Social Worker', icon: Heart },
        { name: 'Policy Analyst', icon: Scale },
        { name: 'Market Research Analyst', icon: BarChart3 },
        { name: 'HR Specialist', icon: User },
    ],
    furtherStudies: ['M.A. in Sociology', 'MSW (Master of Social Work)', 'Public Policy'],
    govExams: ['UPSC', 'State Social Welfare Dept. jobs'],
    careerGrowth: "A sociology degree provides critical thinking skills useful in HR, market research, and social work. Advanced degrees can lead to roles in policy-making and international development.",
    packages: {
      entry: "₹3-6 Lakhs",
      experienced: "₹8-18 Lakhs"
    },
    videos: ["https://www.youtube.com/watch?v=ylXVn-s1z2Y"],
    topCompanies: ["Nielsen", "Kantar", "GiveIndia", "Pratham Education Foundation"],
    topPeople: [
      {
        name: "Gail Omvedt",
        story: "An American-born Indian sociologist and human rights activist, she dedicated her life to anti-caste movements and farmers' rights in India, using her academic knowledge to fuel social change."
      }
    ]
  },
];


export type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  courses: string[];
  eligibility: string;
  medium: string[];
  facilities: string[];
  lat: number;
  lon: number;
};

export const colleges: College[] = [
    {
      id: 'gc-delhi',
      name: 'Government College, New Delhi',
      city: 'New Delhi',
      state: 'Delhi',
      courses: ['B.Sc. in Physics', 'B.Com.', 'B.A. in History', 'B.A. in Sociology'],
      eligibility: 'Min. 55% in 12th Grade',
      medium: ['English', 'Hindi'],
      facilities: ['Hostel', 'Lab', 'Library', 'Internet'],
      lat: 28.6139,
      lon: 77.2090
    },
    {
      id: 'gc-mumbai',
      name: 'State College, Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      courses: ['B.Sc. in Chemistry', 'B.Com.', 'BBA', 'B.Sc. in Mathematics'],
      eligibility: 'Min. 60% in 12th Grade + Entrance Test',
      medium: ['English', 'Marathi'],
      facilities: ['Lab', 'Library', 'Internet'],
      lat: 19.0760,
      lon: 72.8777
    },
    {
      id: 'gc-kolkata',
      name: 'Presidency University, Kolkata',
      city: 'Kolkata',
      state: 'West Bengal',
      courses: ['B.Sc. in Physics', 'B.Sc. in Chemistry', 'B.A. in History', 'B.A. in Sociology'],
      eligibility: 'Merit-based admission',
      medium: ['English', 'Bengali'],
      facilities: ['Hostel', 'Lab', 'Library', 'Canteen'],
      lat: 22.5726,
      lon: 88.3639
    },
    {
        id: 'gc-chennai',
        name: 'Loyola College, Chennai',
        city: 'Chennai',
        state: 'Tamil Nadu',
        courses: ['B.Sc. in Mathematics', 'B.Com.', 'BBA', 'B.A. in Sociology'],
        eligibility: 'Min. 60% in 12th Grade',
        medium: ['English', 'Tamil'],
        facilities: ['Library', 'Sports Complex', 'Internet'],
        lat: 13.0827,
        lon: 80.2707
    },
    {
        id: 'gc-bangalore',
        name: 'St. Joseph\'s College, Bangalore',
        city: 'Bangalore',
        state: 'Karnataka',
        courses: ['B.Sc. in Physics', 'B.Sc. in Chemistry', 'B.Sc. in Mathematics', 'B.Com.', 'BBA'],
        eligibility: 'Min. 50% in 12th Grade + Interview',
        medium: ['English'],
        facilities: ['Hostel', 'Lab', 'Library', 'Auditorium'],
        lat: 12.9716,
        lon: 77.5946
    }
  ];
  

  export type TimelineEvent = {
    id: string;
    date: string;
    title: string;
    description: string;
    category: 'Admissions' | 'Scholarships' | 'Exams';
    details: string;
  };
  
  export const timelineEvents: TimelineEvent[] = [
    {
      id: 'event-1',
      date: '2024-08-01',
      title: 'Delhi University UG Admissions Open',
      description: 'Online application portal for undergraduate courses at Delhi University opens today.',
      category: 'Admissions',
      details: 'The Common Seat Allocation System (CSAS) portal will be open for registration. Students must fill in their personal details, academic scores, and upload necessary documents. The deadline for Phase 1 is August 31st.'
    },
    {
      id: 'event-2',
      date: '2024-08-15',
      title: 'National Scholarship Portal Applications Deadline',
      description: 'Last day to apply for various central government scholarships through the NSP.',
      category: 'Scholarships',
      details: 'Ensure all documents, including income certificate, caste certificate (if applicable), and bonafide student certificate from your institution, are uploaded. Late applications will not be accepted.'
    },
    {
      id: 'event-3',
      date: '2024-09-05',
      title: 'State Common Entrance Test (CET)',
      description: 'The entrance exam for state government colleges will be conducted today.',
      category: 'Exams',
      details: 'The exam will be held in two shifts: 9 AM - 12 PM and 2 PM - 5 PM. Remember to bring your admit card and a valid photo ID. Electronic devices are strictly prohibited.'
    },
    {
      id: 'event-4',
      date: '2024-09-20',
      title: 'Mumbai University First Merit List',
      description: 'The first merit list for UG admissions will be declared.',
      category: 'Admissions',
      details: 'The merit list will be published on the official university website and on the notice boards of individual colleges. Selected students must complete the admission formalities within three working days.'
    },
    {
        id: 'event-5',
        date: '2024-10-10',
        title: 'INSPIRE Scholarship Application Window',
        description: 'Applications open for the Innovation in Science Pursuit for Inspired Research (INSPIRE) scholarship.',
        category: 'Scholarships',
        details: 'This scholarship is for students pursuing basic and natural sciences. Eligibility requires being in the top 1% of your 12th-grade board exams. The scholarship offers ₹80,000 per year.'
    },
    {
      id: 'event-6',
      date: '2024-11-15',
      title: 'UPSC Civil Services (Prelims) Exam',
      description: 'Preliminary examination for entry into the civil services of India.',
      category: 'Exams',
      details: 'The exam consists of two objective-type papers (General Studies and CSAT). CSAT is a qualifying paper. The exam is held across various centers in India.'
    },
    {
      id: 'event-7',
      date: '2024-11-30',
      title: 'IIM CAT Exam',
      description: 'Common Admission Test for admission into Indian Institutes of Management.',
      category: 'Exams',
      details: 'A computer-based test that assesses quantitative ability, verbal ability, reading comprehension, and data interpretation. Scores are used by over 100 business schools in India.'
    },
    {
      id: 'event-8',
      date: '2024-12-15',
      title: 'Kishore Vaigyanik Protsahan Yojana (KVPY) Results',
      description: 'Results for the KVPY fellowship aptitude test will be announced.',
      category: 'Scholarships',
      details: 'The results will be available on the official KVPY website. Selected students will be called for an interview, which is the final stage of the selection process.'
    },
    {
      id: 'event-9',
      date: '2025-01-10',
      title: 'IIT-JEE (Main) - Session 1',
      description: 'First session of the Joint Entrance Examination for engineering admissions.',
      category: 'Exams',
      details: 'This is one of the two sessions for the JEE Main exam. Students can appear in one or both sessions. The best of the two scores will be considered for ranking.'
    },
    {
      id: 'event-10',
      date: '2025-02-01',
      title: 'Jawaharlal Nehru University (JNU) PG Admissions',
      description: 'Application portal for postgraduate courses at JNU opens.',
      category: 'Admissions',
      details: 'Admission is based on the JNU Entrance Examination (JNUEE). The application form, prospectus, and other details will be available on the JNU website.'
    }
  ];

    
