/**
 * Central State Store & Mock Data Repository with LocalStorage Persistence
 * Manages reactive data for Student, College, and Industry/Company workflows.
 */

const STORAGE_KEY = 'ECOSYSTEM_CAREER_AI_STORE_V1';

// Initial Mock Data
const INITIAL_DATA = {
  currentUser: {
    role: 'student', // 'student' | 'college' | 'company' | null
    id: 'std-1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@apex.edu',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    profileCompletion: 75,
    preferredRoles: ['Frontend Developer', 'Full Stack Developer', 'Software Engineer'],
    address: 'Bangalore, Karnataka, India'
  },

  // Student's current skills
  studentSkills: [
    { id: 's1', name: 'JavaScript', category: 'Frontend', level: 'Advanced', percentage: 85 },
    { id: 's2', name: 'React', category: 'Frontend', level: 'Advanced', percentage: 82 },
    { id: 's3', name: 'HTML/CSS', category: 'Frontend', level: 'Expert', percentage: 95 },
    { id: 's4', name: 'Python', category: 'Backend', level: 'Intermediate', percentage: 65 },
    { id: 's5', name: 'SQL', category: 'Database', level: 'Intermediate', percentage: 60 },
    { id: 's6', name: 'Git', category: 'DevOps', level: 'Advanced', percentage: 80 }
  ],

  // Job Role Benchmarks
  jobRoles: [
    {
      id: 'role-1',
      title: 'Frontend Developer',
      demand: 'Very High',
      avgSalary: '$75k - $110k',
      description: 'Build fast, responsive, and delightful user experiences using modern JavaScript frameworks and design systems.',
      requiredSkills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Redux', 'Tailwind CSS'],
      openings: 48
    },
    {
      id: 'role-2',
      title: 'Full Stack Developer',
      demand: 'High',
      avgSalary: '$85k - $130k',
      description: 'Architect and develop full end-to-end web applications covering browser client, server APIs, and databases.',
      requiredSkills: ['React', 'Node.js', 'JavaScript', 'SQL', 'MongoDB', 'REST APIs'],
      openings: 62
    },
    {
      id: 'role-3',
      title: 'Software Engineer',
      demand: 'High',
      avgSalary: '$80k - $125k',
      description: 'Design robust algorithmic systems, scalable architectures, and core platform software.',
      requiredSkills: ['Python', 'Data Structures', 'Git', 'SQL', 'Algorithms', 'System Design'],
      openings: 54
    },
    {
      id: 'role-4',
      title: 'AI/ML Engineer',
      demand: 'Extreme',
      avgSalary: '$95k - $150k',
      description: 'Develop intelligent systems, generative AI integrations, neural network models, and ML pipelines.',
      requiredSkills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'PyTorch', 'Data Structures'],
      openings: 39
    },
    {
      id: 'role-5',
      title: 'Cloud & DevOps Engineer',
      demand: 'High',
      avgSalary: '$90k - $140k',
      description: 'Automate CI/CD pipelines, manage Kubernetes clusters, and architect resilient cloud infrastructures.',
      requiredSkills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Git', 'CI/CD'],
      openings: 31
    },
    {
      id: 'role-6',
      title: 'Data Analyst',
      demand: 'Moderate',
      avgSalary: '$65k - $95k',
      description: 'Transform complex business datasets into actionable insights, dashboards, and predictive metrics.',
      requiredSkills: ['SQL', 'Python', 'Tableau', 'Excel', 'Statistics'],
      openings: 27
    },
    {
      id: 'role-7',
      title: 'UI/UX Designer',
      demand: 'High',
      avgSalary: '$70k - $105k',
      description: 'Create intuitive user journeys, wireframes, high-fidelity prototypes, and design systems.',
      requiredSkills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      openings: 22
    }
  ],

  // Internships
  internships: [
    {
      id: 'int-1',
      company: 'NexaTech Labs',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
      title: 'Frontend Development Intern',
      location: 'Bangalore / Hybrid',
      workMode: 'Hybrid',
      duration: '6 Months',
      stipend: '₹35,000 / mo',
      requiredSkills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      deadline: '2026-10-15',
      featured: true,
      description: 'Work with the core frontend team to build high-performance micro-frontends and accessible dashboard interfaces.'
    },
    {
      id: 'int-2',
      company: 'CloudScale AI',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80',
      title: 'Full Stack Engineering Intern',
      location: 'Remote',
      workMode: 'Remote',
      duration: '3 Months',
      stipend: '₹40,000 / mo',
      requiredSkills: ['React', 'Node.js', 'SQL', 'Git'],
      deadline: '2026-10-05',
      featured: true,
      description: 'Build serverless API integrations and internal developer tooling using Node.js, React, and PostgreSQL.'
    },
    {
      id: 'int-3',
      company: 'Veritas Security',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&auto=format&fit=crop&q=80',
      title: 'Python Backend Intern',
      location: 'Hyderabad',
      workMode: 'On-site',
      duration: '6 Months',
      stipend: '₹30,000 / mo',
      requiredSkills: ['Python', 'SQL', 'Git', 'REST APIs'],
      deadline: '2026-10-20',
      featured: false,
      description: 'Develop security compliance crawlers and telemetry processing microservices.'
    },
    {
      id: 'int-4',
      company: 'Aura Design Studios',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&auto=format&fit=crop&q=80',
      title: 'UI/UX Design Intern',
      location: 'Mumbai / Remote',
      workMode: 'Remote',
      duration: '4 Months',
      stipend: '₹28,000 / mo',
      requiredSkills: ['Figma', 'Wireframing', 'Prototyping'],
      deadline: '2026-09-30',
      featured: false,
      description: 'Collaborate with product managers to conduct user research, user journey mapping, and Figma prototypes.'
    },
    {
      id: 'int-5',
      company: 'DeepMind Analytics',
      logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&auto=format&fit=crop&q=80',
      title: 'Machine Learning Research Intern',
      location: 'Bangalore',
      workMode: 'On-site',
      duration: '6 Months',
      stipend: '₹50,000 / mo',
      requiredSkills: ['Python', 'Machine Learning', 'SQL'],
      deadline: '2026-10-30',
      featured: true,
      description: 'Experiment with transformer architectures, embeddings, and vector similarity search models.'
    }
  ],

  // Jobs created by industry
  jobs: [
    {
      id: 'job-1',
      title: 'Associate Frontend Engineer',
      company: 'NexaTech Labs',
      type: 'Full-Time',
      location: 'Bangalore',
      workMode: 'Hybrid',
      experience: '0 - 2 Years',
      salary: '₹8 - ₹12 LPA',
      requiredSkills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
      preferredSkills: ['Next.js', 'Tailwind CSS', 'Jest'],
      description: 'We are looking for an ambitious frontend engineer who is passionate about creating fluid user experiences.',
      education: 'B.Tech / B.E. in CS, IT or equivalent',
      deadline: '2026-11-01',
      applicantsCount: 42
    },
    {
      id: 'job-2',
      title: 'Junior Full Stack Developer',
      company: 'CloudScale AI',
      type: 'Full-Time',
      location: 'Remote',
      workMode: 'Remote',
      experience: '0 - 1 Years',
      salary: '₹10 - ₹14 LPA',
      requiredSkills: ['React', 'Node.js', 'SQL', 'Git'],
      preferredSkills: ['AWS', 'Docker', 'GraphQL'],
      description: 'Join our agile engineering team to scale cloud microservices and build responsive web applications.',
      education: 'B.Tech / MCA',
      deadline: '2026-10-25',
      applicantsCount: 58
    },
    {
      id: 'job-3',
      title: 'Graduate Software Engineer',
      company: 'Apex Global Technologies',
      type: 'Full-Time',
      location: 'Pune',
      workMode: 'On-site',
      experience: 'Fresher (2025/2026 Batch)',
      salary: '₹7 - ₹9 LPA',
      requiredSkills: ['Python', 'Data Structures', 'SQL', 'Git'],
      preferredSkills: ['Linux', 'Algorithms'],
      description: 'Comprehensive campus graduate program rotating across backend platforms, data analytics, and cloud ops.',
      education: 'B.Tech / M.Tech in CS / IT / ECE',
      deadline: '2026-10-18',
      applicantsCount: 115
    }
  ],

  // AI Assessment Questions
  assessmentQuestions: [
    {
      id: 'q1',
      category: 'Technical Skills',
      role: 'Frontend & General CS',
      question: 'What is the primary difference between `useMemo` and `useCallback` in React?',
      options: [
        'useMemo caches the function definition, while useCallback caches the return value.',
        'useMemo caches a computed value result, while useCallback caches a callback function instance.',
        'useMemo is used for asynchronous calls, while useCallback handles synchronous DOM state.',
        'There is no difference; they are syntactic aliases of each other.'
      ],
      correctIndex: 1,
      explanation: 'useMemo returns a memoized value, while useCallback returns a memoized callback function.'
    },
    {
      id: 'q2',
      category: 'Technical Skills',
      role: 'JavaScript Core',
      question: 'Which statement accurately describes the JavaScript Event Loop order of operations?',
      options: [
        'Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (setTimeout/setInterval)',
        'Macrotask Queue -> Call Stack -> Microtask Queue',
        'Microtask Queue -> Macrotask Queue -> Call Stack',
        'Promises are executed synchronously with setTimeout callbacks'
      ],
      correctIndex: 0,
      explanation: 'Microtasks (Promises) are processed immediately after the current call stack clears before macrotasks.'
    },
    {
      id: 'q3',
      category: 'Problem Solving',
      role: 'Data Structures & Algorithms',
      question: 'What is the average time complexity for searching an element in a Hash Table with good distribution?',
      options: ['O(log N)', 'O(N)', 'O(1)', 'O(N log N)'],
      correctIndex: 2,
      explanation: 'Hash tables offer O(1) average constant time lookup with optimal hash distribution.'
    },
    {
      id: 'q4',
      category: 'Technical Skills',
      role: 'Database & SQL',
      question: 'Which SQL clause is used to filter records aggregated by a GROUP BY statement?',
      options: ['WHERE', 'ORDER BY', 'HAVING', 'FILTER BY'],
      correctIndex: 2,
      explanation: 'HAVING filters aggregated groups, whereas WHERE filters individual rows before grouping.'
    },
    {
      id: 'q5',
      category: 'Problem Solving & Architecture',
      role: 'System Design',
      question: 'When implementing a stateless REST API with horizontal scaling, where should user session tokens ideally be verified?',
      options: [
        'In a single server memory array using local memory pointers',
        'Using cryptographic JWT signature validation or a centralized distributed cache (e.g., Redis)',
        'Hardcoded in the client browser cookie without signature checks',
        'Saved as flat text files in each worker node filesystem'
      ],
      correctIndex: 1,
      explanation: 'Stateless APIs use cryptographically signed tokens (like JWT) or distributed stores like Redis for multi-node parity.'
    },
    {
      id: 'q6',
      category: 'Role Readiness',
      role: 'Version Control & Workflow',
      question: 'Which Git workflow command creates a new feature branch and switches to it in a single step?',
      options: ['git branch -d feature', 'git checkout -b feature', 'git merge feature', 'git pull --branch feature'],
      correctIndex: 1,
      explanation: 'git checkout -b <branch> (or git switch -c <branch>) creates and immediately switches to that branch.'
    },
    {
      id: 'q7',
      category: 'Communication & Teamwork',
      role: 'Professional Skills',
      question: 'You discover a critical bug in production introduced by a teammate. What is the most constructive first action?',
      options: [
        'Blame the teammate publicly in the engineering Slack channel.',
        'Silently ignore it so you do not get involved in the issue.',
        'Communicate the issue clearly with reproduction steps, help propose a mitigation or rollback, and collaborate on a fix.',
        'Rewrite their entire codebase without informing the team.'
      ],
      correctIndex: 2,
      explanation: 'Constructive engineering culture emphasizes clear reproduction steps, rapid containment, and collaborative root-cause fix.'
    }
  ],

  // Student assessment results
  assessmentResult: {
    taken: true,
    overallScore: 78,
    maxScore: 100,
    date: '2026-09-02',
    categories: {
      technical: 82,
      problemSolving: 75,
      communication: 70,
      roleReadiness: 80
    },
    strongSkills: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
    skillsToImprove: ['Node.js', 'SQL', 'TypeScript', 'System Design']
  },

  // Student Applications
  applications: [
    {
      id: 'app-1',
      opportunityId: 'int-1',
      type: 'Internship',
      company: 'NexaTech Labs',
      role: 'Frontend Development Intern',
      appliedDate: '2026-08-28',
      status: 'Shortlisted',
      matchScore: 92,
      nextStep: 'Technical Interview on Sept 10'
    },
    {
      id: 'app-2',
      opportunityId: 'job-2',
      type: 'Job',
      company: 'CloudScale AI',
      role: 'Junior Full Stack Developer',
      appliedDate: '2026-08-20',
      status: 'Under Review',
      matchScore: 78,
      nextStep: 'Resume Screen by Hiring Manager'
    },
    {
      id: 'app-3',
      opportunityId: 'int-3',
      type: 'Internship',
      company: 'Veritas Security',
      role: 'Python Backend Intern',
      appliedDate: '2026-08-15',
      status: 'Interview',
      matchScore: 81,
      nextStep: 'Live Coding Assessment'
    }
  ],

  // Learning Resources
  learningResources: [
    {
      id: 'res-1',
      title: 'Full Stack Node.js & Express Architecture Masterclass',
      skill: 'Node.js',
      category: 'Courses',
      difficulty: 'Intermediate',
      duration: '14 Hours',
      rating: 4.8,
      type: 'Interactive Course',
      provider: 'Meta & Coursera',
      url: '#/student/resources',
      description: 'Master backend API design, asynchronous patterns, middleware security, and production deployments.'
    },
    {
      id: 'res-2',
      title: 'Advanced TypeScript: Generics, Utility Types & AST',
      skill: 'TypeScript',
      category: 'Tutorials',
      difficulty: 'Advanced',
      duration: '6 Hours',
      rating: 4.9,
      type: 'Video Tutorial',
      provider: 'Frontend Masters',
      url: '#/student/resources',
      description: 'Deep dive into TypeScript compiler options, complex type inference, and scalable enterprise React typing.'
    },
    {
      id: 'res-3',
      title: 'Relational Database Design & High-Performance SQL',
      skill: 'SQL',
      category: 'Documentation',
      difficulty: 'Intermediate',
      duration: '8 Hours',
      rating: 4.7,
      type: 'Hands-on Guide',
      provider: 'PostgreSQL Official Docs',
      url: '#/student/resources',
      description: 'Indexing strategies, query execution plans (EXPLAIN ANALYZE), transactions, and ACID principles.'
    },
    {
      id: 'res-4',
      title: 'Distributed System Design & Microservices for Beginners',
      skill: 'System Design',
      category: 'Projects',
      difficulty: 'Advanced',
      duration: '18 Hours',
      rating: 4.9,
      type: 'Project Blueprint',
      provider: 'MIT OpenCourseWare',
      url: '#/student/resources',
      description: 'Build an event-driven URL shortener and real-time chat with load balancers, caching, and message queues.'
    },
    {
      id: 'res-5',
      title: 'AWS Certified Cloud Practitioner & Docker Fundamentals',
      skill: 'Cloud Computing',
      category: 'Certifications',
      difficulty: 'Beginner',
      duration: '12 Hours',
      rating: 4.8,
      type: 'Certification Track',
      provider: 'AWS Training',
      url: '#/student/resources',
      description: 'Understand cloud computing concepts, VPCs, EC2, S3, IAM, and containerizing apps with Docker.'
    },
    {
      id: 'res-6',
      title: 'LeetCode 75 Curated Problem Solving & Algorithms',
      skill: 'Problem Solving',
      category: 'Practice',
      difficulty: 'Intermediate',
      duration: '25 Hours',
      rating: 4.9,
      type: 'Practice Sandbox',
      provider: 'AlgoDaily Labs',
      url: '#/student/resources',
      description: 'Master sliding window, two pointers, binary search, tree traversals, and dynamic programming.'
    }
  ],

  // College Admin Data
  collegeStats: {
    name: 'Apex Institute of Technology',
    adminName: 'Dr. Ramesh Kulkarni',
    adminEmail: 'dean.placement@apex.edu',
    totalStudents: 2450,
    studentsAssessed: 1820,
    averageSkillScore: 72,
    studentsWithGaps: 840,
    industryConnections: 32,
    departmentDistribution: [
      { name: 'Computer Science', count: 850, avgScore: 76 },
      { name: 'Information Tech', count: 620, avgScore: 74 },
      { name: 'Electronics & Comm', count: 540, avgScore: 68 },
      { name: 'Data Science & AI', count: 440, avgScore: 79 }
    ]
  },

  // College Students List
  collegeStudents: [
    {
      id: 'std-1',
      name: 'Rahul Sharma',
      department: 'Computer Science',
      year: '3rd Year',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Python'],
      skillScore: 78,
      careerRole: 'Frontend Developer',
      assessmentStatus: 'Completed',
      email: 'rahul.sharma@apex.edu',
      gaps: ['TypeScript', 'Node.js']
    },
    {
      id: 'std-2',
      name: 'Ananya Verma',
      department: 'Data Science & AI',
      year: '4th Year',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      skillScore: 91,
      careerRole: 'AI/ML Engineer',
      assessmentStatus: 'Completed',
      email: 'ananya.v@apex.edu',
      gaps: ['Docker', 'PyTorch']
    },
    {
      id: 'std-3',
      name: 'Priya Nair',
      department: 'Computer Science',
      year: '3rd Year',
      skills: ['React', 'Node.js', 'SQL', 'Git'],
      skillScore: 84,
      careerRole: 'Full Stack Developer',
      assessmentStatus: 'Completed',
      email: 'priya.nair@apex.edu',
      gaps: ['Kubernetes', 'AWS']
    },
    {
      id: 'std-4',
      name: 'Aditya Singh',
      department: 'Information Tech',
      year: '2nd Year',
      skills: ['C++', 'Python', 'Algorithms'],
      skillScore: 64,
      careerRole: 'Software Engineer',
      assessmentStatus: 'In Progress',
      email: 'aditya.s@apex.edu',
      gaps: ['Web Dev', 'Database', 'Git']
    },
    {
      id: 'std-5',
      name: 'Kavita Patel',
      department: 'Electronics & Comm',
      year: '4th Year',
      skills: ['Python', 'IoT', 'C', 'Embedded C'],
      skillScore: 72,
      careerRole: 'Embedded Systems',
      assessmentStatus: 'Completed',
      email: 'kavita.p@apex.edu',
      gaps: ['Cloud IoT', 'Linux']
    },
    {
      id: 'std-6',
      name: 'Sneha Roy',
      department: 'Data Science & AI',
      year: '3rd Year',
      skills: ['Python', 'SQL', 'Tableau', 'Pandas'],
      skillScore: 82,
      careerRole: 'Data Analyst',
      assessmentStatus: 'Completed',
      email: 'sneha.r@apex.edu',
      gaps: ['BigQuery', 'PowerBI']
    }
  ],

  // College Skill Gaps Report
  collegeSkillGaps: [
    {
      skill: 'Python & Data Structures',
      studentsNeedingImprovement: 620,
      gapLevel: 'High',
      departments: ['ECE', 'IT', 'Mechanical'],
      industryDemand: 'Very High',
      status: 'Action Needed'
    },
    {
      skill: 'Cloud Computing & AWS',
      studentsNeedingImprovement: 430,
      gapLevel: 'Medium',
      departments: ['CSE', 'IT'],
      industryDemand: 'Extreme',
      status: 'Action Needed'
    },
    {
      skill: 'Modern TypeScript & Next.js',
      studentsNeedingImprovement: 380,
      gapLevel: 'High',
      departments: ['CSE', 'IT'],
      industryDemand: 'High',
      status: 'Action Needed'
    },
    {
      skill: 'System Design & Scalability',
      studentsNeedingImprovement: 510,
      gapLevel: 'High',
      departments: ['CSE', 'Data Science'],
      industryDemand: 'High',
      status: 'Program Active'
    },
    {
      skill: 'DevOps & Docker Containers',
      studentsNeedingImprovement: 290,
      gapLevel: 'Medium',
      departments: ['IT', 'CSE'],
      industryDemand: 'High',
      status: 'Planned'
    }
  ],

  // College Training Programs
  trainingPrograms: [
    {
      id: 'tp-1',
      name: 'Full Stack Modern Web Accelerator',
      skill: 'TypeScript & Next.js',
      trainer: 'Vercel Certified Partner Academy',
      duration: '6 Weeks',
      enrolled: 185,
      capacity: 200,
      completionRate: '78%',
      startDate: '2026-09-15',
      status: 'Active'
    },
    {
      id: 'tp-2',
      name: 'Industry Python & Algorithmic Problem Solving',
      skill: 'Python & Algorithms',
      trainer: 'Dr. Vivek Menon (Ex-Google Engineer)',
      duration: '8 Weeks',
      enrolled: 310,
      capacity: 350,
      completionRate: '84%',
      startDate: '2026-08-01',
      status: 'Active'
    },
    {
      id: 'tp-3',
      name: 'Cloud Computing & Kubernetes Hands-On Bootcamp',
      skill: 'Cloud & DevOps',
      trainer: 'CloudNative India Labs',
      duration: '4 Weeks',
      enrolled: 140,
      capacity: 150,
      completionRate: '92%',
      startDate: '2026-07-10',
      status: 'Completed'
    },
    {
      id: 'tp-4',
      name: 'Applied Machine Learning & GenAI Systems',
      skill: 'Machine Learning',
      trainer: 'AI Research Consortium',
      duration: '10 Weeks',
      enrolled: 220,
      capacity: 250,
      completionRate: '65%',
      startDate: '2026-10-01',
      status: 'Upcoming'
    }
  ],

  // College Industry Connections
  industryConnections: [
    {
      id: 'ind-1',
      name: 'NexaTech Labs',
      industry: 'Software & Cloud SaaS',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
      openJobs: 4,
      openInternships: 3,
      hiringStatus: 'Actively Hiring',
      connectionStatus: 'Connected',
      pocEmail: 'campus-hiring@nexatech.io'
    },
    {
      id: 'ind-2',
      name: 'CloudScale AI',
      industry: 'Artificial Intelligence',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80',
      openJobs: 6,
      openInternships: 4,
      hiringStatus: 'Actively Hiring',
      connectionStatus: 'Connected',
      pocEmail: 'talent@cloudscale.ai'
    },
    {
      id: 'ind-3',
      name: 'Veritas Security Systems',
      industry: 'Cybersecurity & Defense',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&auto=format&fit=crop&q=80',
      openJobs: 2,
      openInternships: 2,
      hiringStatus: 'Shortlisting',
      connectionStatus: 'Connected',
      pocEmail: 'university@veritassecurity.com'
    },
    {
      id: 'ind-4',
      name: 'Apex Global Technologies',
      industry: 'Enterprise IT Solutions',
      logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&auto=format&fit=crop&q=80',
      openJobs: 15,
      openInternships: 8,
      hiringStatus: 'Campus Drive Scheduled',
      connectionStatus: 'Connected',
      pocEmail: 'campus@apexglobal.tech'
    }
  ],

  // Recruiter / Company Data
  companyProfile: {
    name: 'NexaTech Labs',
    email: 'recruiter@nexatech.io',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    industry: 'Enterprise Cloud & AI SaaS',
    website: 'https://nexatech.io',
    location: 'Bangalore, India & San Francisco, USA',
    size: '250 - 500 Employees',
    description: 'Pioneering next-generation reactive cloud developer platforms and intelligent automation tooling for high-velocity engineering organizations.',
    contact: '+91 (80) 4567-8900'
  },

  companyStats: {
    activeJobs: 12,
    activeInternships: 8,
    totalApplicants: 1240,
    shortlisted: 86,
    interviews: 34
  },

  // Company Candidates pool for AI Candidate Matching
  recruiterCandidates: [
    {
      id: 'cand-1',
      name: 'Rahul Sharma',
      role: 'Frontend Developer',
      college: 'Apex Institute of Technology',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      matchScore: 94,
      matchingSkills: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
      missingSkills: ['TypeScript'],
      experience: '1 Internship (CloudScale AI)',
      assessmentScore: 86,
      education: 'B.Tech CSE, 3rd Year',
      location: 'Bangalore',
      status: 'Shortlisted',
      notes: 'Strong React fundamentals and clean UI component architecture.'
    },
    {
      id: 'cand-2',
      name: 'Priya Nair',
      role: 'Frontend Developer',
      college: 'Apex Institute of Technology',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      matchScore: 88,
      matchingSkills: ['React', 'JavaScript', 'Tailwind CSS'],
      missingSkills: ['TypeScript', 'Testing (Jest)'],
      experience: 'Fresher (3 Projects)',
      assessmentScore: 84,
      education: 'B.Tech CSE, 3rd Year',
      location: 'Bangalore',
      status: 'Under Review',
      notes: 'Creative portfolio with multiple full-stack prototypes.'
    },
    {
      id: 'cand-3',
      name: 'Vikram Mehta',
      role: 'Frontend Developer',
      college: 'National Institute of Tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      matchScore: 82,
      matchingSkills: ['JavaScript', 'HTML/CSS', 'TypeScript'],
      missingSkills: ['React State Management'],
      experience: '6 Months Open Source Contributor',
      assessmentScore: 79,
      education: 'B.Tech IT, 4th Year',
      location: 'Pune',
      status: 'New',
      notes: 'Strong vanilla JavaScript and web performance optimization skills.'
    },
    {
      id: 'cand-4',
      name: 'Ananya Verma',
      role: 'AI/ML Engineer',
      college: 'Apex Institute of Technology',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      matchScore: 96,
      matchingSkills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      missingSkills: ['Docker Deployment'],
      experience: 'Research Assistant at AI Lab',
      assessmentScore: 92,
      education: 'B.Tech Data Science, 4th Year',
      location: 'Bangalore',
      status: 'Interview',
      notes: 'Published a paper on low-latency inference pipelines.'
    },
    {
      id: 'cand-5',
      name: 'Arjun Das',
      role: 'Full Stack Developer',
      college: 'Indian Institute of Information Tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      matchScore: 91,
      matchingSkills: ['Node.js', 'React', 'MongoDB', 'REST APIs'],
      missingSkills: ['Kubernetes'],
      experience: '1 Year Freelance Consultant',
      assessmentScore: 85,
      education: 'B.Tech CS, 4th Year',
      location: 'Remote',
      status: 'Shortlisted',
      notes: 'Built e-commerce backend handling 10k daily requests.'
    }
  ],

  // Recruiter Required Skills definition
  roleRequirements: [
    {
      id: 'req-1',
      role: 'Frontend Developer',
      required: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
      important: ['Tailwind CSS', 'Redux', 'Git'],
      preferred: ['Next.js', 'Jest / Cypress', 'Web Performance']
    },
    {
      id: 'req-2',
      role: 'Full Stack Developer',
      required: ['React', 'Node.js', 'SQL / NoSQL', 'RESTful APIs'],
      important: ['TypeScript', 'Git', 'Docker'],
      preferred: ['GraphQL', 'AWS / Cloud', 'CI/CD Pipelines']
    },
    {
      id: 'req-3',
      role: 'AI/ML Engineer',
      required: ['Python', 'Machine Learning', 'Linear Algebra & Stats', 'SQL'],
      important: ['PyTorch / TensorFlow', 'Data Structures', 'Git'],
      preferred: ['FastAPI', 'HuggingFace / LLMs', 'Docker']
    }
  ]
};

class Store {
  constructor() {
    this.subscribers = [];
    this.data = this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading from localStorage, using initial mock data', e);
    }
    this.saveToStorage(INITIAL_DATA);
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  saveToStorage(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data || this.data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.saveToStorage();
    for (const callback of this.subscribers) {
      try {
        callback(this.data);
      } catch (err) {
        console.error('Subscriber callback error:', err);
      }
    }
  }

  get() {
    return this.data;
  }

  // --- Auth Methods ---
  setCurrentUser(user) {
    this.data.currentUser = user;
    this.notify();
  }

  switchRole(role) {
    if (role === 'student') {
      this.data.currentUser = {
        role: 'student',
        id: 'std-1',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@apex.edu',
        department: 'Computer Science & Engineering',
        year: '3rd Year',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        profileCompletion: 75,
        preferredRoles: ['Frontend Developer', 'Full Stack Developer', 'Software Engineer'],
        address: 'Bangalore, Karnataka, India'
      };
    } else if (role === 'college') {
      this.data.currentUser = {
        role: 'college',
        id: 'col-1',
        name: 'Apex Institute of Technology',
        adminName: 'Dr. Ramesh Kulkarni',
        email: 'dean.placement@apex.edu',
        mobile: '+91 98765 43210',
        address: 'Apex Knowledge Park, Outer Ring Road, Bangalore',
        avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80'
      };
    } else if (role === 'company') {
      this.data.currentUser = {
        role: 'company',
        id: 'comp-1',
        name: 'NexaTech Labs',
        email: 'recruiter@nexatech.io',
        recruiterName: 'Sarah Jenkins',
        industry: 'Enterprise Cloud & AI SaaS',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
      };
    } else {
      this.data.currentUser = null;
    }
    this.notify();
  }

  // --- Student Skills Methods ---
  addStudentSkill(name, category = 'General', level = 'Intermediate', percentage = 65) {
    const existing = this.data.studentSkills.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      existing.level = level;
      existing.percentage = percentage;
    } else {
      this.data.studentSkills.push({
        id: 's-' + Date.now(),
        name,
        category,
        level,
        percentage
      });
    }
    this.notify();
  }

  removeStudentSkill(id) {
    this.data.studentSkills = this.data.studentSkills.filter(s => s.id !== id);
    this.notify();
  }

  updateSkillProficiency(id, level, percentage) {
    const skill = this.data.studentSkills.find(s => s.id === id);
    if (skill) {
      skill.level = level;
      skill.percentage = percentage;
      this.notify();
    }
  }

  // --- Assessment Submission ---
  submitAssessment(answers) {
    let score = 0;
    const questions = this.data.assessmentQuestions;
    let technicalCount = 0, technicalCorrect = 0;
    let problemCount = 0, problemCorrect = 0;
    let readinessCount = 0, readinessCorrect = 0;

    questions.forEach((q, idx) => {
      const isCorrect = answers[idx] === q.correctIndex;
      if (isCorrect) score++;

      if (q.category === 'Technical Skills') {
        technicalCount++;
        if (isCorrect) technicalCorrect++;
      } else if (q.category.includes('Problem')) {
        problemCount++;
        if (isCorrect) problemCorrect++;
      } else {
        readinessCount++;
        if (isCorrect) readinessCorrect++;
      }
    });

    const overall = Math.round((score / questions.length) * 100);
    this.data.assessmentResult = {
      taken: true,
      overallScore: overall,
      maxScore: 100,
      date: new Date().toISOString().split('T')[0],
      categories: {
        technical: technicalCount ? Math.round((technicalCorrect / technicalCount) * 100) : 80,
        problemSolving: problemCount ? Math.round((problemCorrect / problemCount) * 100) : 75,
        communication: 75,
        roleReadiness: readinessCount ? Math.round((readinessCorrect / readinessCount) * 100) : 85
      },
      strongSkills: ['JavaScript', 'React', 'HTML/CSS'],
      skillsToImprove: ['Node.js', 'TypeScript', 'SQL', 'System Design']
    };

    // Bump profile completion
    if (this.data.currentUser && this.data.currentUser.profileCompletion < 90) {
      this.data.currentUser.profileCompletion = 90;
    }

    this.notify();
    return this.data.assessmentResult;
  }

  // --- Opportunities & Applications ---
  applyToOpportunity(opportunity, type = 'Internship') {
    const existing = this.data.applications.find(a => a.opportunityId === opportunity.id);
    if (existing) {
      return { success: false, message: 'You have already applied for this role!' };
    }

    const newApp = {
      id: 'app-' + Date.now(),
      opportunityId: opportunity.id,
      type,
      company: opportunity.company,
      role: opportunity.title,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Applied',
      matchScore: opportunity.matchScore || 85,
      nextStep: 'Application submitted for screening'
    };

    this.data.applications.unshift(newApp);

    // Also add to recruiter candidates if NexaTech Labs
    this.data.recruiterCandidates.unshift({
      id: 'cand-' + Date.now(),
      name: this.data.currentUser.name || 'Rahul Sharma',
      role: opportunity.title,
      college: 'Apex Institute of Technology',
      avatar: this.data.currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      matchScore: opportunity.matchScore || 90,
      matchingSkills: this.data.studentSkills.map(s => s.name).slice(0, 4),
      missingSkills: ['TypeScript'],
      experience: 'Fresher / Projects',
      assessmentScore: this.data.assessmentResult.overallScore || 78,
      education: 'B.Tech CSE, 3rd Year',
      location: 'Bangalore',
      status: 'New',
      notes: 'Applied via Career Ecosystem Platform.'
    });

    this.notify();
    return { success: true, application: newApp };
  }

  // --- Recruiter Methods ---
  createJob(jobData) {
    const newJob = {
      id: 'job-' + Date.now(),
      title: jobData.title,
      company: this.data.companyProfile.name || 'NexaTech Labs',
      type: jobData.type || 'Full-Time',
      location: jobData.location || 'Bangalore',
      workMode: jobData.workMode || 'Hybrid',
      experience: jobData.experience || '0 - 2 Years',
      salary: jobData.salary || '₹8 - ₹14 LPA',
      requiredSkills: jobData.requiredSkills || ['React', 'JavaScript'],
      preferredSkills: jobData.preferredSkills || ['TypeScript', 'Git'],
      description: jobData.description || 'Exciting software engineering role at NexaTech Labs.',
      education: jobData.education || 'B.Tech / B.E.',
      deadline: jobData.deadline || '2026-11-30',
      applicantsCount: 0
    };

    this.data.jobs.unshift(newJob);
    this.data.companyStats.activeJobs++;
    this.notify();
    return newJob;
  }

  createInternship(internData) {
    const newIntern = {
      id: 'int-' + Date.now(),
      company: this.data.companyProfile.name || 'NexaTech Labs',
      logo: this.data.companyProfile.logo,
      title: internData.title,
      location: internData.location || 'Bangalore / Hybrid',
      workMode: internData.workMode || 'Hybrid',
      duration: internData.duration || '3 Months',
      stipend: internData.stipend || '₹30,000 / mo',
      requiredSkills: internData.requiredSkills || ['React', 'JavaScript'],
      deadline: internData.deadline || '2026-11-15',
      featured: true,
      description: internData.description || 'Hands-on industry engineering internship.'
    };

    this.data.internships.unshift(newIntern);
    this.data.companyStats.activeInternships++;
    this.notify();
    return newIntern;
  }

  updateCandidateStatus(candidateId, newStatus) {
    const cand = this.data.recruiterCandidates.find(c => c.id === candidateId);
    if (cand) {
      cand.status = newStatus;
      if (newStatus === 'Shortlisted') {
        this.data.companyStats.shortlisted++;
      } else if (newStatus === 'Interview') {
        this.data.companyStats.interviews++;
      }
      this.notify();
    }
  }

  // --- College Admin Methods ---
  createTrainingProgram(programData) {
    const newProg = {
      id: 'tp-' + Date.now(),
      name: programData.name,
      skill: programData.skill,
      trainer: programData.trainer || 'Industry Expert Mentor',
      duration: programData.duration || '4 Weeks',
      enrolled: 0,
      capacity: programData.capacity || 100,
      completionRate: '0%',
      startDate: programData.startDate || new Date().toISOString().split('T')[0],
      status: 'Upcoming'
    };

    this.data.trainingPrograms.unshift(newProg);
    this.notify();
    return newProg;
  }

  connectWithCompany(companyId) {
    const comp = this.data.industryConnections.find(c => c.id === companyId);
    if (comp) {
      comp.connectionStatus = 'Connected';
      this.data.collegeStats.industryConnections++;
      this.notify();
    }
  }

  // Reset store to initial demo state
  resetDemoData() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.saveToStorage();
    this.notify();
  }
}

export const store = new Store();
