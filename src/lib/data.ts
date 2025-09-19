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
  Functions,
  Globe,
  Wallet,
  Building2,
  BarChart3
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
      { id: 'd', text: 'Brainstorm creative and unconventional ideas.' },
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
      { id: 'c', text: 'Be curious, observant, and detail-oriented.' },
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
  },
  {
    id: 'bsc-math',
    name: 'B.Sc. in Mathematics',
    stream: 'Science',
    icon: Functions,
    description: 'Develop analytical and problem-solving skills through the study of numbers, structure, and space.',
    careerPaths: [
        { name: 'Actuary', icon: Calculator },
        { name: 'Statistician', icon: BarChart3 },
        { name: 'Data Scientist', icon: Code },
        { name: 'Financial Analyst', icon: Wallet },
    ],
    furtherStudies: ['M.Sc. in Mathematics', 'MCA', 'M.Sc. in Data Science', 'Actuarial Science'],
    govExams: ['Indian Statistical Service', 'RBI Grade B', 'UPSC CSE'],
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
    }
  ];
  

  export type TimelineEvent = {
    id: string;
    date: string;
    title: string;
    description: string;
    category: 'Admissions' | 'Scholarships' | 'Exams';
  };
  
  export const timelineEvents: TimelineEvent[] = [
    {
      id: 'event-1',
      date: '2024-08-01',
      title: 'Delhi University UG Admissions Open',
      description: 'Online application portal for undergraduate courses at Delhi University opens today.',
      category: 'Admissions',
    },
    {
      id: 'event-2',
      date: '2024-08-15',
      title: 'National Scholarship Portal Applications',
      description: 'Last day to apply for various central government scholarships through the NSP.',
      category: 'Scholarships',
    },
    {
      id: 'event-3',
      date: '2024-09-05',
      title: 'State Common Entrance Test (CET)',
      description: 'The entrance exam for state government colleges will be conducted today.',
      category: 'Exams',
    },
    {
      id: 'event-4',
      date: '2024-09-20',
      title: 'Mumbai University First Merit List',
      description: 'The first merit list for UG admissions will be declared.',
      category: 'Admissions',
    },
    {
        id: 'event-5',
        date: '2024-10-10',
        title: 'INSPIRE Scholarship Application Window',
        description: 'Applications open for the Innovation in Science Pursuit for Inspired Research (INSPIRE) scholarship.',
        category: 'Scholarships',
      },
  ];
