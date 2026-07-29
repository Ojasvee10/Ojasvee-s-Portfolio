import {
  Code2, Server, Database, Cloud, Wrench,
  Brain, Bot, Sparkles, MessageSquare, Network, Layout,
  Lightbulb, Rocket, Layers, ShieldCheck, Gauge,
  Users, Heart, BookOpen, Target, Compass,
  Puzzle, GitBranch, Cpu, Boxes, Workflow,
  Trophy, Clock, CalendarDays, Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type TechItem = { name: string; icon: LucideIcon; color: string };
export type TechCategory = { title: string; icon: LucideIcon; items: TechItem[] };

export const techStack: TechCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'Python', icon: Code2, color: '#3B82F6' },
      { name: 'C++', icon: Code2, color: '#A855F7' },
      { name: 'C', icon: Code2, color: '#22D3EE' },
      { name: 'JavaScript', icon: Code2, color: '#86EFAC' },
      { name: 'SQL', icon: Code2, color: '#3B82F6' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'FastAPI', icon: Server, color: '#3B82F6' },
      { name: 'Flask', icon: Server, color: '#A855F7' },
      { name: 'Node.js', icon: Server, color: '#22D3EE' },
      { name: 'Express.js', icon: Server, color: '#86EFAC' },
      { name: 'REST APIs', icon: Server, color: '#3B82F6' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    items: [
      { name: 'React.js', icon: Layout, color: '#22D3EE' },
      { name: 'HTML', icon: Layout, color: '#86EFAC' },
      { name: 'CSS', icon: Layout, color: '#A855F7' },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    items: [
      { name: 'LLMs', icon: Brain, color: '#A855F7' },
      { name: 'Prompt Engineering', icon: MessageSquare, color: '#3B82F6' },
      { name: 'BERT', icon: Bot, color: '#22D3EE' },
      { name: 'NLP', icon: Network, color: '#86EFAC' },
      { name: 'OpenAI API', icon: Sparkles, color: '#A855F7' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    items: [
      { name: 'MySQL', icon: Database, color: '#3B82F6' },
      { name: 'MongoDB', icon: Database, color: '#86EFAC' },
      { name: 'SQLite', icon: Database, color: '#22D3EE' },
    ],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    items: [
      { name: 'AWS', icon: Cloud, color: '#A855F7' },
      { name: 'Google Cloud', icon: Cloud, color: '#22D3EE' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      { name: 'Git', icon: Wrench, color: '#A855F7' },
      { name: 'GitHub', icon: Wrench, color: '#86EFAC' },
      { name: 'Docker', icon: Wrench, color: '#22D3EE' },
      { name: 'Postman', icon: Wrench, color: '#3B82F6' },
      { name: 'VS Code', icon: Wrench, color: '#A855F7' },
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  accent: string;
  mockup: string;
  liveUrl: string | null;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'lumipsyche',
    name: 'Lumipsyche',
    tagline: 'AI Mental Health Platform',
    description:
      'An AI mental health platform powered by DistilBERT and FastAPI with 87% accuracy. Features JWT-authenticated REST APIs with conversational memory and a real-time AI chat interface built with React and FastAPI.',
    tags: ['DistilBERT', 'FastAPI', 'React', 'JWT', 'NLP'],
    metrics: [
      { label: 'Accuracy', value: '87%' },
      { label: 'Stack', value: 'FastAPI' },
    ],
    highlights: [
      'Developed using DistilBERT and FastAPI with 87% accuracy',
      'Built JWT-authenticated REST APIs with conversational memory',
      'Built a real-time AI chat platform using React and FastAPI',
    ],
    accent: '#A855F7',
    mockup:
      'https://images.pexels.com/photos/7108127/pexels-photo-7108127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: null,
    githubUrl: "https://github.com/Ojasvee10/LUMIPSYCHE_AI_THERAPIST",
  },
  {
    id: 'elderly-care',
    name: 'AI Elderly Care System',
    tagline: 'Fall Detection & Emergency Alerts',
    description:
      'An AI healthcare system achieving 92% fall detection accuracy. Integrated Twilio API for emergency SMS alerts within 8 seconds, and optimized SQLite queries to retrieve 500+ patient records in 0.3 seconds.',
    tags: ['Healthcare AI', 'Twilio', 'SQLite', 'OpenCV', 'Python'],
    metrics: [
      { label: 'Fall Detection', value: '92%' },
      { label: 'Alert Time', value: '8s' },
    ],
    highlights: [
      'Developed AI healthcare system with 92% fall detection accuracy',
      'Integrated Twilio API for emergency SMS alerts within 8 seconds',
      'Optimized SQLite queries to retrieve 500+ patient records in 0.3s',
    ],
    accent: '#22D3EE',
    mockup:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: null,
    githubUrl: "https://github.com/Ojasvee10/elderlycareai",
  },
  {
    id: 'virtual-mouse',
    name: 'AI Virtual Mouse',
    tagline: 'Gesture Recognition Interface',
    description:
      'A 30 FPS hand gesture recognition system using OpenCV and MediaPipe. Reduced RAM usage by 48% through optimized event queue management, enabling 15+ customizable gesture commands with 90% recognition accuracy.',
    tags: ['OpenCV', 'MediaPipe', 'Python', 'Computer Vision'],
    metrics: [
      { label: 'Accuracy', value: '90%' },
      { label: 'Frame Rate', value: '30 FPS' },
    ],
    highlights: [
      'Built 30 FPS hand gesture recognition with OpenCV and MediaPipe',
      'Reduced RAM usage by 48% via optimized event queue management',
      'Enabled 15+ customizable gesture commands with 90% accuracy',
    ],
    accent: '#86EFAC',
    mockup:
      'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: null,
    githubUrl: "https://github.com/Ojasvee10/ai_virtual_mouse",
  },
  {
    id: 'task-manager',
    name: 'Team Task Manager',
    tagline: 'Role-Based MERN Collaboration Platform',
    description:
      'A role-based team collaboration platform built on the MERN stack with secure JWT authentication. Designed scalable REST APIs improving workflow efficiency by 70%, deployed on Railway with MongoDB Atlas.',
    tags: ['MERN', 'JWT', 'MongoDB Atlas', 'Railway', 'REST APIs'],
    metrics: [
      { label: 'Efficiency', value: '+70%' },
      { label: 'Deploy', value: 'Railway' },
    ],
    highlights: [
      'Built role-based MERN platform with secure JWT authentication',
      'Designed scalable REST APIs improving workflow efficiency by 70%',
      'Deployed on Railway with MongoDB Atlas for cloud-hosted access',
    ],
    accent: '#3B82F6',
    mockup:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: "https://team-task-manager-five-taupe.vercel.app/",
    githubUrl: "https://github.com/Ojasvee10/team-task-manager",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: 'education' | 'project' | 'achievement';
  icon: LucideIcon;
};

export const timeline: TimelineItem[] = [
  {
    period: 'Dec 2022 – Jul 2026',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Pranveer Singh Institute of Technology (AKTU), Kanpur',
    description:
      'Focused on AI, backend engineering, and full-stack development while building production-grade AI applications and solving 350+ DSA problems across LeetCode, GeeksforGeeks, and HackerRank.',
    type: 'education',
    icon: Sparkles,
  },
  {
    period: 'Sep – Nov 2024',
    title: 'AI Virtual Mouse',
    org: 'Personal Project',
    description:
      'Built a 30 FPS hand gesture recognition system using OpenCV and MediaPipe. Reduced RAM usage by 48% and enabled 15+ gesture commands with 90% recognition accuracy.',
    type: 'project',
    icon: Bot,
  },
  {
    period: 'Jan – Apr 2025',
    title: 'AI-Powered Elderly Care System',
    org: 'Personal Project',
    description:
      'Developed an AI healthcare system with 92% fall detection accuracy. Integrated Twilio for emergency SMS alerts within 8 seconds and optimized SQLite for 500+ patient records.',
    type: 'project',
    icon: Brain,
  },
  {
    period: 'Jul – Nov 2025',
    title: 'Lumipsyche: AI Mental Health Platform',
    org: 'Personal Project',
    description:
      'Developed an AI mental health platform using DistilBERT and FastAPI with 87% accuracy. Built JWT-authenticated REST APIs with conversational memory and a real-time React chat UI.',
    type: 'project',
    icon: MessageSquare,
  },
  {
    period: 'Oct – Dec 2025',
    title: 'Team Task Manager',
    org: 'Personal Project',
    description:
      'Built a role-based MERN collaboration platform with JWT auth and REST APIs, improving workflow efficiency by 70%. Deployed on Railway with MongoDB Atlas.',
    type: 'project',
    icon: Server,
  },
];

export type Achievement = { title: string; subtitle: string; icon: LucideIcon; accent: string };

export const achievements: Achievement[] = [
  {
    title: '350+ DSA Problems',
    subtitle: 'LeetCode, GeeksforGeeks & HackerRank',
    icon: Code2,
    accent: '#3B82F6',
  },
  {
    title: 'Salesforce Agentblazer Champion',
    subtitle: 'Agentblazer champion badge',
    icon: Brain,
    accent: '#22D3EE',
  },
  {
    title: 'HackerRank Gold Badge',
    subtitle: 'Python problem solving',
    icon: Sparkles,
    accent: '#86EFAC',
  },
  {
    title: 'Infosys Springboard Pragati Cohort 3',
    subtitle: 'AI-driven projects under industry mentorship',
    icon: Network,
    accent: '#A855F7',
  },
  {
    title: 'Navrang Club Event Manager',
    subtitle: 'Increased event participation by 70%+',
    icon: MessageSquare,
    accent: '#3B82F6',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  detail: string;
  accent: string;
};

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    detail: 'AWS Cloud Practitioner Essentials — cloud architecture, core services, and deployment on AWS.',
    accent: '#3B82F6',
  },
  {
    name: 'OCI Associate',
    issuer: 'Oracle Cloud',
    detail: 'Oracle Cloud Infrastructure Associate — cloud-native compute, storage, and networking fundamentals.',
    accent: '#A855F7',
  },
  {
    name: 'Google Cloud',
    issuer: 'Google',
    detail: 'Google Cloud Essential Training — GCP compute, storage, and managed ML services.',
    accent: '#22D3EE',
  },
  {
    name: 'Generative AI',
    issuer: 'Microsoft / LinkedIn',
    detail: 'Career Essentials in Generative AI — LLM foundations, prompt engineering, and responsible AI.',
    accent: '#86EFAC',
  },
];

// ---- New brand sections ----

export type JourneyStep = { label: string; icon: LucideIcon; accent: string };

export const journey: JourneyStep[] = [
  { label: 'Started Computer Science', icon: Sparkles, accent: '#3B82F6' },
  { label: 'Learned Programming', icon: Code2, accent: '#A855F7' },
  { label: 'DSA', icon: Puzzle, accent: '#22D3EE' },
  { label: 'Web Development', icon: Layout, accent: '#86EFAC' },
  { label: 'Backend', icon: Server, accent: '#3B82F6' },
  { label: 'Machine Learning', icon: Brain, accent: '#A855F7' },
  { label: 'Artificial Intelligence', icon: Bot, accent: '#22D3EE' },
  { label: 'FastAPI', icon: Server, accent: '#86EFAC' },
  { label: 'React', icon: Layout, accent: '#3B82F6' },
  { label: 'Cloud', icon: Cloud, accent: '#A855F7' },
  { label: 'Building production-ready applications', icon: Rocket, accent: '#22D3EE' },
];

export type FeatureCard = { title: string; description: string; icon: LucideIcon; accent: string };

export const whyWorkWithMe: FeatureCard[] = [
  { title: 'Problem Solver', description: 'I treat constraints as design inputs. 350+ DSA problems taught me to decompose hard problems into clean, shippable pieces.', icon: Puzzle, accent: '#3B82F6' },
  { title: 'Clean Code', description: 'Readable, typed, tested. Code is read far more than it is written — I optimize for the next engineer, often future me.', icon: Code2, accent: '#A855F7' },
  { title: 'Fast Learner', description: 'From BERT to Twilio to Railway in a single project. I ramp on new stacks quickly because my fundamentals are solid.', icon: Zap, accent: '#22D3EE' },
  { title: 'AI Enthusiast', description: 'I care about AI that ships — fine-tuned models, RAG pipelines, and agents that quietly do real work behind great product.', icon: Brain, accent: '#86EFAC' },
  { title: 'Backend Architecture', description: 'Scalable REST APIs, auth, and data modeling with FastAPI, Node.js, and SQL/NoSQL — built to survive real traffic.', icon: Server, accent: '#3B82F6' },
  { title: 'Team Collaboration', description: 'Clear PRs, async-first communication, and documentation. I make the people around me more effective.', icon: Users, accent: '#A855F7' },
  { title: 'Product Thinking', description: 'I build features users feel, not just specs on a board. The model, the API, and the UI are one product.', icon: Compass, accent: '#22D3EE' },
  { title: 'Continuous Learning', description: '24+ certifications and counting. The field moves — I move with it, deliberately and often.', icon: BookOpen, accent: '#86EFAC' },
];

export type LearningItem = { name: string; icon: LucideIcon; accent: string };

export const currentlyLearning: LearningItem[] = [
  { name: 'AWS', icon: Cloud, accent: '#3B82F6' },
  { name: 'Docker', icon: Boxes, accent: '#22D3EE' },
  { name: 'System Design', icon: Workflow, accent: '#A855F7' },
  { name: 'Kubernetes', icon: Layers, accent: '#86EFAC' },
  { name: 'LLM Applications', icon: Brain, accent: '#A855F7' },
  { name: 'Cloud Architecture', icon: Server, accent: '#3B82F6' },
];

export type BeyondItem = { title: string; description: string; icon: LucideIcon; accent: string };

export const beyondCoding: BeyondItem[] = [
  { title: 'Solving DSA', description: 'A daily habit. LeetCode, GeeksforGeeks, HackerRank — patterns over memorization.', icon: Code2, accent: '#3B82F6' },
  { title: 'Exploring AI', description: 'Reading papers, running notebooks, breaking models to understand them.', icon: Brain, accent: '#A855F7' },
  { title: 'Reading About Technology', description: 'Engineering blogs, system design, and the occasional deep dive into how the giants build.', icon: BookOpen, accent: '#22D3EE' },
  { title: 'Building Side Projects', description: 'Ideas become repos. I ship small things often to stay sharp.', icon: Rocket, accent: '#86EFAC' },
  { title: 'Participating in Hackathons', description: 'Time-boxed building under pressure — where the best ideas usually show up.', icon: Trophy, accent: '#A855F7' },
  { title: 'Learning Modern Software Engineering', description: 'DevOps, observability, and the practices that make software survive contact with users.', icon: GitBranch, accent: '#3B82F6' },
  { title: 'Leadership Experience', description: 'Leading teams through ambiguity — setting direction, unblocking people, and shipping together.', icon: Users, accent: '#22D3EE' },
  { title: 'Event Management', description: 'Ran Navrang Club events for 500+ attendees, growing participation by 70%+.', icon: Heart, accent: '#86EFAC' },
];

export type PhilosophyPrinciple = { title: string; description: string; icon: LucideIcon; accent: string };

export const techPhilosophy: PhilosophyPrinciple[] = [
  { title: 'Scalable', description: 'Design for 10x the load you expect. The cheapest time to think about scale is before you need it.', icon: Gauge, accent: '#3B82F6' },
  { title: 'Reliable', description: 'Fail gracefully, observe everything, and never lose user data. Trust is earned in incidents.', icon: ShieldCheck, accent: '#A855F7' },
  { title: 'Simple', description: 'The simplest solution that works is usually the best one. Complexity is a cost, not a feature.', icon: Sparkles, accent: '#22D3EE' },
  { title: 'User-focused', description: 'Every technical decision is eventually a human experience. I build for the person on the other side.', icon: Heart, accent: '#86EFAC' },
  { title: 'Maintainable', description: 'Code that the next engineer can read, change, and trust. Tomorrow\'s maintainer is today\'s user.', icon: Wrench, accent: '#3B82F6' },
];

export type HireReason = { title: string; description: string; icon: LucideIcon; accent: string };

export const whyHireMe: HireReason[] = [
  { title: 'Fast Learner', description: 'Ramp on new stacks and domains quickly — fundamentals first, syntax second.', icon: Zap, accent: '#3B82F6' },
  { title: 'Strong Fundamentals', description: 'DSA, DBMS, OS, and networks — the layer beneath every framework.', icon: Layers, accent: '#A855F7' },
  { title: 'Builds Complete Applications', description: 'From model to API to UI to deployment. I own the whole arc.', icon: Rocket, accent: '#22D3EE' },
  { title: 'Interested in AI', description: 'Not a tourist — I fine-tune, prompt, and ship LLM features in production.', icon: Brain, accent: '#86EFAC' },
  { title: 'Backend Expertise', description: 'FastAPI, Node.js, auth, and data modeling that holds up under real traffic.', icon: Server, accent: '#3B82F6' },
  { title: 'Works Independently', description: 'Give me a problem and a deadline. I\'ll come back with a working solution.', icon: Target, accent: '#A855F7' },
  { title: 'Works in Teams', description: 'Clear communication, reviewable PRs, and a bias toward making others look good.', icon: Users, accent: '#22D3EE' },
  { title: 'Product Mindset', description: 'I care about outcomes, not output. Shipping the right thing beats shipping a lot.', icon: Compass, accent: '#86EFAC' },
];

export type FutureGoal = { title: string; description: string; icon: LucideIcon; accent: string };

export const futureGoals: FutureGoal[] = [
  { title: 'AI Engineering', description: 'Build LLM-powered systems that do real work — agents, RAG, and inference at scale.', icon: Brain, accent: '#A855F7' },
  { title: 'Backend Architecture', description: 'Design distributed systems that stay fast, reliable, and observable as they grow.', icon: Server, accent: '#3B82F6' },
  { title: 'Cloud Computing', description: 'Master AWS, Docker, and Kubernetes to ship and operate software confidently.', icon: Cloud, accent: '#22D3EE' },
  { title: 'Building Impactful Software', description: 'Work on products that matter to real people — healthcare, productivity, and access.', icon: Rocket, accent: '#86EFAC' },
  { title: 'Open Source', description: 'Give back to the tools I use and learn in public with the community.', icon: GitBranch, accent: '#3B82F6' },
];

export const funFacts = [
  { value: 350, suffix: '+', label: 'DSA Problems', icon: Code2, accent: '#3B82F6' },
  { value: 4, suffix: '+', label: 'Major AI Projects', icon: Rocket, accent: '#A855F7' },
  { value: 24, suffix: '+', label: 'Certifications', icon: Trophy, accent: '#22D3EE' },
  { value: 1000, suffix: '+', label: 'Hours Coding', icon: Clock, accent: '#86EFAC' },
  { value: 2022, suffix: '', label: 'Started Engineering', icon: CalendarDays, accent: '#A855F7' },
];

export const stats = [
  { value: 350, suffix: '+', label: 'DSA Problems' },
  { value: 4, suffix: '+', label: 'Major Projects' },
  { value: 24, suffix: '+', label: 'Certifications' },
  { value: 92, suffix: '%', label: 'Best AI Accuracy' },
];

export const aboutTraits = [
  'Software Engineer',
  'AI / ML Engineer',
  'Full Stack Developer',
  'FastAPI Specialist',
  'React Developer',
  'Problem Solver',
  '350+ DSA Problems',
  'Cloud Enthusiast',
];
