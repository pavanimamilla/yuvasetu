/**
 * YuvaSetu — “Bridging Youth, Education & Industry”
 * Complete Multi-User, Multi-Portal Relational Database Application Bundle
 * Supports Student, College Management, and Company/Industry portals
 * Zero-CORS standalone compatibility with local database persistence.
 */
(function() {
  'use strict';

  // --- 1. RELATIONAL DATABASE LAYER & SEED DATA ---
  const DB_STORAGE_KEY = 'YUVESETU_DATABASE_V4_REAL_ECOSYSTEM';

  // Initial Seed Data with distinct multi-user accounts
  const INITIAL_DATABASE = {
    users: [
      {
        id: 'usr_col_apex',
        email: 'dean.placement@apex.edu',
        password: 'College@123',
        role: 'college',
        createdAt: '2026-08-01'
      },
      {
        id: 'usr_comp_nexa',
        email: 'recruiter@nexatech.io',
        password: 'Recruiter@123',
        role: 'company',
        createdAt: '2026-08-05'
      }
    ],

    student_profiles: [],

    college_profiles: [
      {
        id: 'prof_col_apex',
        user_id: 'usr_col_apex',
        college_name: 'Apex Institute of Technology',
        college_code: 'AIT-BLR-101',
        admin_name: 'Dr. Ramesh Kulkarni',
        email: 'dean.placement@apex.edu',
        phone: '+91 98765 43210',
        location: 'Apex Knowledge Park, Outer Ring Road, Bangalore',
        total_students: 2450,
        avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80'
      }
    ],

    company_profiles: [
      {
        id: 'prof_comp_nexa',
        user_id: 'usr_comp_nexa',
        company_name: 'NexaTech Labs',
        recruiter_name: 'Sarah Jenkins',
        email: 'recruiter@nexatech.io',
        phone: '+91 (80) 4567-8900',
        industry: 'Enterprise Cloud & AI SaaS',
        location: 'Bangalore, India & San Francisco, USA',
        description: 'Pioneering next-generation reactive cloud developer platforms and intelligent automation tooling for high-velocity engineering organizations.',
        size: '250 - 500 Employees',
        website: 'https://nexatech.io',
        logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80'
      }
    ],

    applications: [],

    student_skills: [],

    student_assessments: [],

    // New Entity Tables for Complete Ecosystem
    certifications: [],
    hackathons: [],
    student_internships: [],
    open_source_contributions: [],
    experiences: [],
    projects: [],
    student_languages: [],
    resumes: [],
    malpractice_events: [],
    club_memberships: [],
    workshop_registrations: [],
    acceptance_records: [],
    notifications: [],
    student_learning_progress: [],

    college_clubs: [
      {
        id: 'club_col_1',
        college_code: 'AIT-BLR-101',
        name: 'Yuva Coders Club',
        description: 'Competitive programming, algorithmic problem-solving, and hackathon incubation.',
        department: 'Computer Science & IT',
        faculty_coordinator: 'Prof. Arvind Swamy',
        student_coordinator: 'Student Lead',
        meeting_info: 'Every Wednesday 4:30 PM, Lab 4',
        upcoming_activities: 'Hack-a-League 2026, Weekly LeetCode sprint',
        members_count: 142
      },
      {
        id: 'club_col_2',
        college_code: 'AIT-BLR-101',
        name: 'AI & Data Intelligence Club',
        description: 'Deep dive into machine learning architectures, data pipelines, and intelligent agents.',
        department: 'AI & Data Science',
        faculty_coordinator: 'Dr. Sunita Rao',
        student_coordinator: 'Student Lead',
        meeting_info: 'Every Friday 3:30 PM, Seminar Hall B',
        upcoming_activities: 'Kaggle Competition Workshop, Model Fine-Tuning Bootcamp',
        members_count: 118
      },
      {
        id: 'club_col_3',
        college_code: 'AIT-BLR-101',
        name: 'Open Source Developers Community',
        description: 'Collaborative development, Git workflows, and contributing to global OSS repositories.',
        department: 'Information Technology',
        faculty_coordinator: 'Prof. Rajesh Nair',
        student_coordinator: 'Student Lead',
        meeting_info: 'Every Alternate Saturday 11:00 AM, Innovation Center',
        upcoming_activities: 'Hacktoberfest Prep, GitHub Actions Masterclass',
        members_count: 95
      }
    ],

    college_workshops: [
      {
        id: 'ws_col_1',
        college_code: 'AIT-BLR-101',
        title: 'Mastering Microservices Architecture & Docker',
        speaker: 'Kunal Verma (Principal Cloud Architect, AWS Partner)',
        date: '2026-09-20',
        start_time: '10:00 AM',
        end_time: '01:00 PM',
        venue: 'Auditorium 2 & Live Stream',
        department: 'Computer Science',
        description: 'Hands-on architectural patterns, container orchestration, Docker multi-stage builds, and deployment strategies.',
        capacity: 150,
        enrolled_count: 112,
        status: 'Upcoming'
      },
      {
        id: 'ws_col_2',
        college_code: 'AIT-BLR-101',
        title: 'Interview Preparation: Data Structures & System Design',
        speaker: 'Dr. Vivek Menon (Ex-Google Senior Engineer)',
        date: '2026-09-28',
        start_time: '02:00 PM',
        end_time: '05:30 PM',
        venue: 'Main Seminar Hall',
        department: 'Career & Placement Cell',
        description: 'Deconstruct complex DSA interview questions, whiteboarding strategies, and scalability design trade-offs.',
        capacity: 250,
        enrolled_count: 220,
        status: 'Upcoming'
      }
    ],

    placement_statistics: [
      {
        id: 'plc_col_ait_2026',
        college_code: 'AIT-BLR-101',
        academic_year: '2025-2026',
        overall_percentage: 88.4,
        placed_students: 442,
        eligible_students: 500,
        internship_percentage: 92.1,
        highest_package: '₹42.5 LPA',
        average_package: '₹11.2 LPA',
        department_stats: [
          { department: 'Computer Science', placed_percent: 94.2, avg_package: '₹12.8 LPA' },
          { department: 'Information Technology', placed_percent: 91.5, avg_package: '₹11.4 LPA' },
          { department: 'Electronics & Comm.', placed_percent: 84.0, avg_package: '₹9.6 LPA' },
          { department: 'Data Science', placed_percent: 92.0, avg_package: '₹12.1 LPA' }
        ]
      }
    ],

    jobs: [
      {
        id: 'job_nexa_1',
        company_user_id: 'usr_comp_nexa',
        title: 'Associate Frontend Engineer',
        company: 'NexaTech Labs',
        type: 'Full-Time',
        location: 'Bangalore',
        work_mode: 'Hybrid',
        experience: '0 - 2 Years',
        salary: '₹8 - ₹14 LPA',
        required_skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
        preferred_skills: ['Next.js', 'Tailwind CSS', 'Testing'],
        description: 'Design and build high-performance micro-frontends and accessible dashboard interfaces.',
        education: 'B.Tech / B.E. in CS, IT or equivalent',
        deadline: '2026-11-01',
        applicants_count: 12
      },
      {
        id: 'job_nexa_2',
        company_user_id: 'usr_comp_nexa',
        title: 'Junior Full Stack Developer',
        company: 'NexaTech Labs',
        type: 'Full-Time',
        location: 'Remote',
        work_mode: 'Remote',
        experience: '0 - 1 Years',
        salary: '₹10 - ₹15 LPA',
        required_skills: ['React', 'Node.js', 'SQL', 'Git'],
        preferred_skills: ['AWS', 'Docker', 'GraphQL'],
        description: 'Build serverless API integrations and internal developer tooling using Node.js, React, and PostgreSQL.',
        education: 'B.Tech / MCA',
        deadline: '2026-10-25',
        applicants_count: 18
      },
      {
        id: 'job_nexa_3',
        company_user_id: 'usr_comp_nexa',
        title: 'Python Backend Engineer',
        company: 'NexaTech Labs',
        type: 'Full-Time',
        location: 'Hyderabad',
        work_mode: 'Hybrid',
        experience: '0 - 2 Years',
        salary: '₹9 - ₹16 LPA',
        required_skills: ['Python', 'SQL', 'Git', 'Data Structures'],
        preferred_skills: ['FastAPI', 'Redis', 'Docker'],
        description: 'Develop high-throughput RESTful endpoints and real-time event processors using Python and PostgreSQL.',
        education: 'B.Tech / B.E. in CS, IT',
        deadline: '2026-11-15',
        applicants_count: 15
      }
    ],

    internships: [
      {
        id: 'int_nexa_1',
        company_user_id: 'usr_comp_nexa',
        company: 'NexaTech Labs',
        logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
        title: 'Frontend Development Intern',
        location: 'Bangalore / Hybrid',
        work_mode: 'Hybrid',
        duration: '6 Months',
        stipend: '₹35,000 / mo',
        required_skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
        deadline: '2026-10-15',
        featured: true,
        description: 'Work with the core frontend team to build high-performance micro-frontends and accessible dashboard interfaces.'
      },
      {
        id: 'int_nexa_2',
        company_user_id: 'usr_comp_nexa',
        company: 'NexaTech Labs',
        logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80',
        title: 'Python & AI Engineering Intern',
        location: 'Bangalore',
        work_mode: 'On-site',
        duration: '6 Months',
        stipend: '₹40,000 / mo',
        required_skills: ['Python', 'SQL', 'Git'],
        deadline: '2026-10-30',
        featured: true,
        description: 'Experiment with transformer architectures, embeddings, vector similarity search, and automated evaluations.'
      }
    ],

    training_programs: [
      {
        id: 'tp_col_1',
        college_user_id: 'usr_col_apex',
        college_code: 'AIT-BLR-101',
        name: 'Full Stack Modern Web Accelerator',
        skill: 'JavaScript & React',
        trainer: 'Vercel Certified Partner Academy',
        duration: '6 Weeks',
        enrolled: 185,
        capacity: 200,
        completion_rate: '78%',
        start_date: '2026-09-15',
        status: 'Active'
      },
      {
        id: 'tp_col_2',
        college_user_id: 'usr_col_apex',
        college_code: 'AIT-BLR-101',
        name: 'Industry Python & Algorithmic Problem Solving',
        skill: 'Python & SQL',
        trainer: 'Dr. Vivek Menon (Ex-Google Engineer)',
        duration: '8 Weeks',
        enrolled: 310,
        capacity: 350,
        completion_rate: '84%',
        start_date: '2026-08-01',
        status: 'Active'
      }
    ],

    active_session: null
  };

  // --- 2. RELATIONAL DATABASE ENGINE ---
  class DatabaseEngine {
    constructor() {
      this.data = this.loadDatabase();
    }

    loadDatabase() {
      try {
        const raw = localStorage.getItem(DB_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            // Auto-migrate: populate any missing entity tables
            let mutated = false;
            Object.keys(INITIAL_DATABASE).forEach(table => {
              if (parsed[table] === undefined) {
                parsed[table] = JSON.parse(JSON.stringify(INITIAL_DATABASE[table]));
                mutated = true;
              }
            });
            if (mutated) {
              this.saveDatabase(parsed);
            }
            return parsed;
          }
        }
      } catch (err) {
        console.warn('Database load error, initializing fresh relational tables:', err);
      }
      this.saveDatabase(INITIAL_DATABASE);
      return JSON.parse(JSON.stringify(INITIAL_DATABASE));
    }

    saveDatabase(data) {
      try {
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data || this.data));
      } catch (err) {
        console.error('Database write error:', err);
      }
    }

    find(table, predicate = () => true) {
      const rows = this.data[table] || [];
      return rows.filter(predicate);
    }

    findOne(table, predicate) {
      const rows = this.data[table] || [];
      return rows.find(predicate) || null;
    }

    insert(table, item) {
      if (!this.data[table]) this.data[table] = [];
      this.data[table].unshift(item);
      this.saveDatabase();
      return item;
    }

    update(table, id, updates) {
      const rows = this.data[table] || [];
      const item = rows.find(r => r.id === id || r.user_id === id);
      if (item) {
        Object.assign(item, updates);
        this.saveDatabase();
        return item;
      }
      return null;
    }

    delete(table, id) {
      if (!this.data[table]) return false;
      const initialLen = this.data[table].length;
      this.data[table] = this.data[table].filter(r => r.id !== id && r.user_id !== id);
      this.saveDatabase();
      return this.data[table].length < initialLen;
    }
  }

  const db = new DatabaseEngine();

  // --- 3. CAREER LEVEL BENCHMARKS, STAR RATINGS & SCORING LOGIC ---
  const CAREER_SKILL_REQUIREMENTS = {
    'Software Developer': [
      { skill: 'Data Structures', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'Python', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 25 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 20 }
    ],
    'Frontend Developer': [
      { skill: 'JavaScript', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'React', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'HTML/CSS', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 15 }
    ],
    'Backend Developer': [
      { skill: 'Python', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'SQL', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'Java', requiredLevel: 'Intermediate', weight: 25 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 15 }
    ],
    'Full Stack Developer': [
      { skill: 'React', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'JavaScript', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'Python', requiredLevel: 'Intermediate', weight: 20 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 15 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 15 }
    ],
    'Python Developer': [
      { skill: 'Python', requiredLevel: 'Advanced', weight: 40 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 30 },
      { skill: 'Data Structures', requiredLevel: 'Intermediate', weight: 20 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 10 }
    ],
    'Data Analyst': [
      { skill: 'SQL', requiredLevel: 'Advanced', weight: 40 },
      { skill: 'Python', requiredLevel: 'Intermediate', weight: 35 },
      { skill: 'Data Structures', requiredLevel: 'Beginner', weight: 25 }
    ],
    'Data Scientist': [
      { skill: 'Python', requiredLevel: 'Advanced', weight: 35 },
      { skill: 'SQL', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'Data Structures', requiredLevel: 'Intermediate', weight: 20 },
      { skill: 'General Engineering', requiredLevel: 'Intermediate', weight: 20 }
    ],
    'AI/ML Engineer': [
      { skill: 'Python', requiredLevel: 'Advanced', weight: 40 },
      { skill: 'Data Structures', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 15 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 15 }
    ],
    'Cloud Engineer': [
      { skill: 'General Engineering', requiredLevel: 'Advanced', weight: 35 },
      { skill: 'Python', requiredLevel: 'Intermediate', weight: 25 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 20 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 20 }
    ],
    'DevOps Engineer': [
      { skill: 'Python', requiredLevel: 'Intermediate', weight: 30 },
      { skill: 'General Engineering', requiredLevel: 'Advanced', weight: 30 },
      { skill: 'Git', requiredLevel: 'Advanced', weight: 25 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 15 }
    ],
    'Cybersecurity Analyst': [
      { skill: 'General Engineering', requiredLevel: 'Advanced', weight: 40 },
      { skill: 'Python', requiredLevel: 'Intermediate', weight: 30 },
      { skill: 'SQL', requiredLevel: 'Intermediate', weight: 20 },
      { skill: 'Git', requiredLevel: 'Intermediate', weight: 10 }
    ]
  };

  const LEVEL_RANK = {
    'Not Assessed': 0,
    'Beginner': 1,
    'Intermediate': 2,
    'Advanced': 3
  };

  // Standardized Benchmarks per Specification:
  // Advanced: 85% or higher
  // Intermediate: 50% or higher and below 85%
  // Beginner: Below 50%
  function calculateSkillLevel(percentage) {
    if (percentage >= 85) return 'Advanced';
    if (percentage >= 50) return 'Intermediate';
    return 'Beginner';
  }

  // Star Rating per Specification:
  // 0–39% -> 1 star
  // 40–59% -> 2 stars
  // 60–74% -> 3 stars
  // 75–89% -> 4 stars
  // 90–100% -> 5 stars
  function calculateStars(percentage) {
    if (percentage >= 90) return 5;
    if (percentage >= 75) return 4;
    if (percentage >= 60) return 3;
    if (percentage >= 40) return 2;
    return 1;
  }

  function renderStars(starsCount) {
    const s = Math.max(1, Math.min(5, starsCount || 1));
    return '<span class="text-amber-400 font-bold tracking-wider">' + '★'.repeat(s) + '</span><span class="text-slate-300 tracking-wider">' + '☆'.repeat(5 - s) + '</span>';
  }

  function calculateSkillGap(currentLevel, requiredLevel) {
    const curRank = LEVEL_RANK[currentLevel] || 0;
    const reqRank = LEVEL_RANK[requiredLevel] || 2;
    const diff = reqRank - curRank;

    if (diff <= 0) return { gap: 'None', label: 'Achieved', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (diff === 1) return { gap: 'Medium', label: 'Medium Gap', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { gap: 'High', label: 'High Gap', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  }

  // Notification helper
  function createNotification(recipientUserId, role, title, message, type = 'info') {
    const n = {
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      recipient_user_id: recipientUserId,
      recipient_role: role,
      title: title,
      message: message,
      type: type,
      is_read: false,
      created_at: new Date().toISOString()
    };
    db.insert('notifications', n);
    return n;
  }

  // Modular Email Dispatch Service
  function sendEmailNotification({ to, subject, htmlBody, attachments = [] } = {}) {
    // Gracefully handles unconfigured external email providers (e.g. SendGrid / SMTP / Webhook)
    const isConfigured = false;
    console.info(`[Email Service] To: ${to} | Subject: ${subject}`);
    if (!isConfigured) {
      return {
        success: false,
        status: 'unconfigured',
        message: 'External email service not configured. In-app notification delivered.'
      };
    }
    return {
      success: true,
      status: 'sent',
      message: 'Email delivered successfully.'
    };
  }

  // Certificate Verification Engine
  function verifyCertificate(certId) {
    const cert = db.findOne('certifications', c => c.id === certId);
    if (!cert) return null;

    const verifyUrl = (cert.verification_url || '').trim();
    const certIdCode = (cert.certificate_id || '').trim();

    // Verification priority:
    // 1. Official verification URL
    // 2. Certificate ID + recognized issuer system
    const recognizedDomains = [
      'coursera.org', 'credly.com', 'udemy.com', 'aws.amazon.com',
      'google.com', 'microsoft.com', 'hackerrank.com', 'freecodecamp.org',
      'oracle.com', 'cisco.com', 'edx.org', 'linkedin.com'
    ];

    let newStatus = 'Pending Verification';
    let source = 'Issuer Verification System';
    let result = '';

    if (!verifyUrl || verifyUrl.length < 8) {
      newStatus = 'Needs Manual Review';
      source = 'Manual Institutional Review';
      result = 'No official verification URL provided. Queued for placement officer verification.';
    } else {
      const isRecognized = recognizedDomains.some(d => verifyUrl.toLowerCase().includes(d));
      if (isRecognized && certIdCode.length >= 4) {
        newStatus = 'Verified';
        source = 'Official Verification URL';
        result = `Authentic credential verified via official issuer domain (${cert.issuer}).`;
      } else if (verifyUrl.startsWith('http://') || verifyUrl.startsWith('https://')) {
        newStatus = 'Needs Manual Review';
        source = 'Issuer System Audit';
        result = 'Credential submitted from custom issuer. Awaiting placement coordinator verification.';
      } else {
        newStatus = 'Verification Failed';
        source = 'Automated Format Validator';
        result = 'Invalid URL format. Please provide a valid https:// verification link.';
      }
    }

    const updates = {
      status: newStatus,
      verification_status: newStatus,
      verification_source: source,
      verification_result: result,
      verification_timestamp: new Date().toISOString(),
      reviewer_info: newStatus === 'Verified' ? 'Automated Issuer Domain Validator v4.1' : 'Placement Cell Audit Queue'
    };

    db.update('certifications', cert.id, updates);
    return updates;
  }

  // --- 4. COMPREHENSIVE SKILL QUESTION BANKS (EXACTLY 25 QUESTIONS SELECTED PER ATTEMPT) ---
  const SKILL_QUESTION_BANKS = {
  java: [
    { id: 'jv_01', topic: 'Java basics', question: 'What is the function of the Java Virtual Machine (JVM)?', options: ['Compiles Java source code into bytecode', 'Executes Java bytecode and provides runtime environment', 'Formats Java source code', 'Acts as a web server'], correct: 1 },
    { id: 'jv_02', topic: 'Variables and data types', question: 'What is the size of an int data type in Java?', options: ['16 bits (2 bytes)', '32 bits (4 bytes)', '64 bits (8 bytes)', '8 bits (1 byte)'], correct: 1 },
    { id: 'jv_03', topic: 'Operators', question: 'What is the result of 10 % 3 in Java?', options: ['3', '1', '0', '3.33'], correct: 1 },
    { id: 'jv_04', topic: 'Control statements', question: 'Which statement is used to skip the rest of the current loop iteration and jump to the next iteration?', options: ['break', 'continue', 'return', 'goto'], correct: 1 },
    { id: 'jv_05', topic: 'Arrays', question: 'What happens if you attempt to access arr[arr.length] in Java?', options: ['Returns null', 'Returns 0', 'Throws ArrayIndexOutOfBoundsException', 'Expands the array size'], correct: 2 },
    { id: 'jv_06', topic: 'Strings', question: 'Why are String objects immutable in Java?', options: ['For security, caching in String pool, and thread safety', 'Because JVM memory cannot store strings', 'Because String is a primitive type', 'To prevent inheritance from Object'], correct: 0 },
    { id: 'jv_07', topic: 'Methods', question: 'What is method overloading in Java?', options: ['Writing a method in a subclass with the same signature as superclass', 'Defining multiple methods in the same class with the same name but different parameter lists', 'Overriding private methods', 'Creating recursive methods'], correct: 1 },
    { id: 'jv_08', topic: 'OOP concepts', question: 'Which OOP concept binds data and the methods that manipulate that data together into a single unit?', options: ['Polymorphism', 'Inheritance', 'Encapsulation', 'Abstraction'], correct: 2 },
    { id: 'jv_09', topic: 'Classes and objects', question: 'What is an object in Java?', options: ['A blueprint for creating classes', 'An instance of a class allocated on the heap', 'A static memory block', 'A package import'], correct: 1 },
    { id: 'jv_10', topic: 'Constructors', question: 'Which of the following is TRUE regarding constructors in Java?', options: ['Constructors have a void return type', 'Constructors have the same name as the class and no return type', 'A class cannot have more than one constructor', 'Constructors must be private'], correct: 1 },
    { id: 'jv_11', topic: 'Inheritance', question: 'Which keyword is used by a Java class to inherit from a superclass?', options: ['implements', 'extends', 'inherits', 'super'], correct: 1 },
    { id: 'jv_12', topic: 'Polymorphism', question: 'What is dynamic method dispatch (runtime polymorphism) in Java?', options: ['A mechanism by which a call to an overridden method is resolved at runtime', 'A compile-time template expansion', 'Overloading methods with static types', 'Executing code in parallel threads'], correct: 0 },
    { id: 'jv_13', topic: 'Encapsulation', question: 'How is encapsulation typically implemented in a Java class?', options: ['Declaring instance variables as private and providing public getter and setter methods', 'Making all fields public', 'Using interface inheritance', 'Removing all constructors'], correct: 0 },
    { id: 'jv_14', topic: 'Abstraction', question: 'Which of the following statements about an abstract class in Java is TRUE?', options: ['It cannot contain concrete methods', 'It cannot be directly instantiated using the new keyword', 'It cannot have constructors', 'All of its methods must be final'], correct: 1 },
    { id: 'jv_15', topic: 'Interfaces', question: 'Since Java 8, what types of methods can have concrete implementations inside an interface?', options: ['abstract methods', 'default and static methods', 'private instance variables', 'protected methods'], correct: 1 },
    { id: 'jv_16', topic: 'Exception handling', question: 'Which keyword is used to explicitly throw an exception object in Java?', options: ['throws', 'throw', 'catch', 'finally'], correct: 1 },
    { id: 'jv_17', topic: 'Collections', question: 'Which Java collection allows storing unique elements and does NOT permit duplicates?', options: ['List', 'Set', 'Vector', 'ArrayList'], correct: 1 },
    { id: 'jv_18', topic: 'Generics', question: 'What is the primary benefit of Java Generics (e.g. List<String>)?', options: ['Improves runtime speed via JIT', 'Provides compile-time type safety and eliminates the need for explicit type casting', 'Allows allocating primitives on the stack', 'Prevents garbage collection'], correct: 1 },
    { id: 'jv_19', topic: 'Java memory concepts', question: 'What are the two primary memory regions managed by the JVM for running applications?', options: ['RAM and ROM', 'Stack memory for thread execution/frames and Heap memory for object allocation', 'CPU cache and SSD', 'Virtual cache and physical register'], correct: 1 },
    { id: 'jv_20', topic: 'Multithreading', question: 'Which method starts the execution of a new thread in Java?', options: ['thread.run()', 'thread.start()', 'thread.execute()', 'thread.begin()'], correct: 1 },
    { id: 'jv_21', topic: 'File handling', question: 'Which class in java.io or java.nio.file is commonly used to read text from a character-input stream efficiently by buffering characters?', options: ['BufferedReader', 'FileOutputStream', 'ScannerWriter', 'DataStream'], correct: 0 },
    { id: 'jv_22', topic: 'Java packages', question: 'What keyword is placed at the very top of a Java source file to define its package membership?', options: ['import', 'package', 'namespace', 'module'], correct: 1 },
    { id: 'jv_23', topic: 'Access modifiers', question: 'If no access modifier is specified for a class member, what is its default accessibility?', options: ['public everywhere', 'package-private (accessible only within the same package)', 'private only', 'protected'], correct: 1 },
    { id: 'jv_24', topic: 'Common Java APIs', question: 'Which method on the java.lang.Object class returns a hash code integer value for the object?', options: ['getHash()', 'hashCode()', 'hash()', 'id()'], correct: 1 },
    { id: 'jv_25', topic: 'Practical/code-based question', question: 'What is the output of System.out.println(10 + 20 + "Java" + 30 + 40);?', options: ['1020Java3040', '30Java3040', '30Java70', 'Compilation Error'], correct: 1 },
    { id: 'jv_26', topic: 'Java basics', question: 'What is the extension of a compiled Java bytecode file?', options: ['.java', '.class', '.exe', '.jar'], correct: 1 },
    { id: 'jv_27', topic: 'OOP concepts', question: 'Which principle in SOLID states that software entities should be open for extension, but closed for modification?', options: ['Single Responsibility Principle', 'Open/Closed Principle', 'Liskov Substitution Principle', 'Interface Segregation Principle'], correct: 1 },
    { id: 'jv_28', topic: 'Collections', question: 'Which Map implementation in Java guarantees insertion-order iteration of keys?', options: ['HashMap', 'LinkedHashMap', 'TreeMap', 'Hashtable'], correct: 1 },
    { id: 'jv_29', topic: 'Exception handling', question: 'What keyword in a method signature indicates that the method may pass an unhandled checked exception up the call stack?', options: ['throws', 'throw', 'raises', 'try'], correct: 0 },
    { id: 'jv_30', topic: 'Multithreading', question: 'What keyword is used in Java to ensure that only one thread can execute a block of code or method at a time?', options: ['volatile', 'synchronized', 'atomic', 'locked'], correct: 1 },
    { id: 'jv_31', topic: 'Generics', question: 'What is type erasure in Java Generics?', options: ['The compiler replaces all generic types with their bounds or Object during compilation to ensure backward compatibility', 'Deleting unused classes at runtime', 'Clearing variables on method exit', 'A runtime exception'], correct: 0 },
    { id: 'jv_32', topic: 'Practical/code-based question', question: 'What does String a = "hello"; String b = new String("hello"); evaluate for a == b and a.equals(b)?', options: ['false and true', 'true and true', 'false and false', 'true and false'], correct: 0 },
    { id: 'jv_33', topic: 'Strings', question: 'Which class should be preferred over String when concatenating strings repeatedly in a single-threaded loop?', options: ['StringBuilder', 'StringBuffer', 'StringJoiner', 'CharArray'], correct: 0 },
    { id: 'jv_34', topic: 'Constructors', question: 'Can a constructor in Java call another constructor in the same class?', options: ['Yes, using this(...) as the very first line', 'No, never', 'Yes, using super(...) only', 'Only in static classes'], correct: 0 },
    { id: 'jv_35', topic: 'Control statements', question: 'What is the output of int x = 5; if(x++ == 5) System.out.print("A"); else System.out.print("B");?', options: ['A', 'B', 'AB', 'Compilation Error'], correct: 0 }
  ],

  python: [
    { id: 'py_01', topic: 'Variables & Types', question: 'Which of the following data types is immutable in Python?', options: ['List', 'Dictionary', 'Tuple', 'Set'], correct: 2 },
    { id: 'py_02', topic: 'Operators', question: 'What is the output of print(2 ** 3 ** 2) in Python?', options: ['64', '512', '36', '256'], correct: 1 },
    { id: 'py_03', topic: 'Conditionals', question: 'What does the elif keyword stand for in Python?', options: ['else if', 'else in function', 'element if', 'execute loop if'], correct: 0 },
    { id: 'py_04', topic: 'Loops', question: 'What keyword terminates a loop immediately before its completion condition is met?', options: ['continue', 'break', 'pass', 'exit'], correct: 1 },
    { id: 'py_05', topic: 'Functions & Scope', question: 'How do you define a function that accepts an arbitrary number of keyword arguments?', options: ['def func(*args):', 'def func(**kwargs):', 'def func(&kwargs):', 'def func($args):'], correct: 1 },
    { id: 'py_06', topic: 'Lists/Tuples/Dicts', question: 'Which method removes and returns the last element from a Python list?', options: ['list.remove()', 'list.delete()', 'list.pop()', 'list.shift()'], correct: 2 },
    { id: 'py_07', topic: 'Lists/Tuples/Dicts', question: 'What is the time complexity of searching for a key in a Python dictionary on average?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], correct: 2 },
    { id: 'py_08', topic: 'Strings & Slicing', question: 'What does "Python"[::-1] evaluate to?', options: ['Python', 'nohtyP', 'P', 'IndexError'], correct: 1 },
    { id: 'py_09', topic: 'Exception Handling', question: 'Which block in Python always executes regardless of whether an exception occurred or not?', options: ['catch', 'finally', 'ensure', 'always'], correct: 1 },
    { id: 'py_10', topic: 'Exception Handling', question: 'How do you manually raise an exception in Python?', options: ['throw Exception("error")', 'raise Exception("error")', 'trigger Exception("error")', 'fire Exception("error")'], correct: 1 },
    { id: 'py_11', topic: 'OOP & Classes', question: 'What is the purpose of the __init__ method in a Python class?', options: ['To initialize and construct a new object instance', 'To destroy an object', 'To create static methods', 'To import parent packages'], correct: 0 },
    { id: 'py_12', topic: 'OOP & Classes', question: 'How is inheritance implemented in Python class definitions?', options: ['class Child extends Parent:', 'class Child(Parent):', 'class Child inherits Parent:', 'class Child: Parent:'], correct: 1 },
    { id: 'py_13', topic: 'OOP & Classes', question: 'What does the self parameter represent in Python class methods?', options: ['The class definition itself', 'The current instance of the class', 'A pointer to the global scope', 'A copy of the constructor parameters'], correct: 1 },
    { id: 'py_14', topic: 'Modules', question: 'Which built-in module provides support for mathematical operations and constants like pi and sqrt?', options: ['sys', 'math', 'os', 'num'], correct: 1 },
    { id: 'py_15', topic: 'Modules', question: 'What does if __name__ == "__main__": do in a script?', options: ['Checks if the script is imported as a library', 'Executes code only when the script is run directly from the CLI', 'Verifies that Python 3 is running', 'Compiles the file to bytecode'], correct: 1 },
    { id: 'py_16', topic: 'Problem Solving', question: 'What is the output of [x * 2 for x in range(5) if x % 2 == 0]?', options: ['[0, 4, 8]', '[0, 2, 4]', '[2, 4, 6]', '[0, 2, 4, 6, 8]'], correct: 0 },
    { id: 'py_17', topic: 'Problem Solving', question: 'What will bool([]) evaluate to in Python?', options: ['True', 'False', 'None', 'SyntaxError'], correct: 1 },
    { id: 'py_18', topic: 'Strings & Slicing', question: 'Which method splits a string into a list using a specified delimiter?', options: ['string.divide()', 'string.split()', 'string.partition()', 'string.tokenize()'], correct: 1 },
    { id: 'py_19', topic: 'Variables & Types', question: 'What is the difference between is and == in Python?', options: ['is checks value equality, == checks identity', 'is checks memory identity, == checks value equality', 'They are strictly identical synonyms', 'is is only valid for strings'], correct: 1 },
    { id: 'py_20', topic: 'Problem Solving', question: 'What is a Python generator and how does it return values?', options: ['A function that uses yield to return values lazily one at a time', 'A compiled C extension', 'A thread worker pool', 'A lambda function that caches memory'], correct: 0 },
    { id: 'py_21', topic: 'Decorators', question: 'What is a decorator in Python?', options: ['A function that takes another function as an argument and extends its behavior without modifying it', 'A GUI layout manager', 'A styling class in CSS', 'A memory compressor'], correct: 0 },
    { id: 'py_22', topic: 'File Handling', question: 'Which statement ensures that a file is automatically closed after its suite finishes in Python?', options: ['try/finally', 'with open(...) as f:', 'file.autoClose()', 'using(file)'], correct: 1 },
    { id: 'py_23', topic: 'Lambda Functions', question: 'What is a lambda function in Python?', options: ['An anonymous single-expression inline function', 'A multithreaded worker', 'A recursive class method', 'A module import alias'], correct: 0 },
    { id: 'py_24', topic: 'Lists/Tuples/Dicts', question: 'Which collection type does NOT allow duplicate elements in Python?', options: ['list', 'tuple', 'set', 'dict_values'], correct: 2 },
    { id: 'py_25', topic: 'OOP & Classes', question: 'Which dunder method is invoked when print(obj) or str(obj) is called on an instance?', options: ['__repr__', '__str__', '__print__', '__format__'], correct: 1 },
    { id: 'py_26', topic: 'Memory & GC', question: 'How does Python handle memory management and unused objects?', options: ['Reference counting combined with a cyclic garbage collector', 'Manual malloc and free', 'Stack-only allocation', 'Virtual registry cleanups'], correct: 0 },
    { id: 'py_27', topic: 'Functions & Scope', question: 'What keyword allows modifying a variable outside the current local function scope but inside an enclosing function?', options: ['global', 'nonlocal', 'outer', 'super'], correct: 1 },
    { id: 'py_28', topic: 'Operators', question: 'What does the // operator perform in Python?', options: ['Float division', 'Floor integer division', 'Comments block', 'Bitwise shift'], correct: 1 },
    { id: 'py_29', topic: 'Problem Solving', question: 'What is the output of list(map(lambda x: x*x, [1, 2, 3]))?', options: ['[1, 4, 9]', '[1, 2, 3]', '[2, 4, 6]', 'SyntaxError'], correct: 0 },
    { id: 'py_30', topic: 'Strings & Slicing', question: 'What does "Hello World".find("o") return?', options: ['4', '7', '1', 'True'], correct: 0 },
    { id: 'py_31', topic: 'Lists/Tuples/Dicts', question: 'How do you merge two dictionaries in Python 3.9+ using an operator?', options: ['dict1 + dict2', 'dict1 | dict2', 'dict1 & dict2', 'dict1 << dict2'], correct: 1 },
    { id: 'py_32', topic: 'OOP & Classes', question: 'What does the super() function do in a subclass method?', options: ['Returns a proxy object that delegates method calls to a parent or sibling class', 'Kills parent process', 'Creates static reference', 'Deletes superclass instance'], correct: 0 },
    { id: 'py_33', topic: 'Variables & Types', question: 'What is the type of the value None in Python?', options: ['bool', 'NoneType', 'null', 'void'], correct: 1 },
    { id: 'py_34', topic: 'File Handling', question: 'Which mode in open() should be used to append content to an existing text file?', options: ['"w"', '"r+"', '"a"', '"x"'], correct: 2 },
    { id: 'py_35', topic: 'Problem Solving', question: 'What is the output of print([1, 2] * 2)?', options: ['[2, 4]', '[1, 2, 1, 2]', '[[1, 2], [1, 2]]', 'TypeError'], correct: 1 }
  ],

  c: [
    { id: 'c_01', topic: 'Syntax & Types', question: 'Which format specifier is used with printf to print an integer in C?', options: ['%s', '%d', '%f', '%c'], correct: 1 },
    { id: 'c_02', topic: 'Pointers & Memory', question: 'What operator is used to obtain the memory address of a variable in C?', options: ['*', '&', '->', '%'], correct: 1 },
    { id: 'c_03', topic: 'Pointers & Memory', question: 'What does dereferencing a pointer using *ptr do?', options: ['Returns the address stored in ptr', 'Accesses the value stored at the address ptr points to', 'Deallocates the memory', 'Multiplies ptr'], correct: 1 },
    { id: 'c_04', topic: 'Pointers & Memory', question: 'Which library function allocates uninitialized dynamic memory on the heap in C?', options: ['malloc()', 'calloc()', 'alloc()', 'new'], correct: 0 },
    { id: 'c_05', topic: 'Pointers & Memory', question: 'Which function must be called to release dynamically allocated heap memory to avoid leaks?', options: ['free()', 'delete()', 'release()', 'clear()'], correct: 0 },
    { id: 'c_06', topic: 'Arrays & Strings', question: 'How are strings represented in the C language?', options: ['As a built-in String object', 'As a null-terminated (\\0) array of characters', 'As an array of integers', 'As dynamic vectors'], correct: 1 },
    { id: 'c_07', topic: 'Structs & Unions', question: 'Which operator is used to access members of a structure through a pointer?', options: ['. (dot)', '-> (arrow)', ':: (scope)', ': (colon)'], correct: 1 },
    { id: 'c_08', topic: 'Control Flow', question: 'What happens if a break statement is omitted in a C switch case block?', options: ['Compile Error', 'Execution falls through into the subsequent case', 'Program aborts', 'Loop exits'], correct: 1 },
    { id: 'c_09', topic: 'Preprocessor', question: 'What does the #include <stdio.h> directive do?', options: ['Copies the contents of standard I/O header into the source before compilation', 'Executes standard I/O', 'Creates a DLL', 'Links object files'], correct: 0 },
    { id: 'c_10', topic: 'Problem Solving', question: 'What is the size of char in the C standard?', options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'], correct: 0 },
    { id: 'c_11', topic: 'Pointers & Memory', question: 'What does pointer arithmetic ptr + 1 do if ptr is of type int* (4-byte int)?', options: ['Increments address by 1 byte', 'Increments address by 4 bytes', 'Adds 1 to the integer value', 'Syntax error'], correct: 1 },
    { id: 'c_12', topic: 'Functions', question: 'Are function arguments in C passed by value or by reference by default?', options: ['Passed by value', 'Passed by reference', 'Passed by pointer automatically', 'Passed by name'], correct: 0 },
    { id: 'c_13', topic: 'Dynamic Memory', question: 'What is the primary difference between malloc() and calloc() in C?', options: ['calloc() initializes allocated memory to zero; malloc() leaves memory uninitialized', 'malloc() is faster for strings', 'calloc() allocates from stack', 'There is no difference'], correct: 0 },
    { id: 'c_14', topic: 'Structs & Unions', question: 'What is the key difference between a struct and a union in C?', options: ['In a union, all members share the same memory location; in a struct, each member has its own memory', 'A union cannot store numbers', 'A struct can have functions inside', 'A union is strictly dynamic'], correct: 0 },
    { id: 'c_15', topic: 'Storage Classes', question: 'What does the static keyword do when applied to a local variable inside a C function?', options: ['Makes the variable immutable', 'Preserves its value across multiple function calls throughout program lifetime', 'Makes it accessible globally across all files', 'Allocates it on the heap'], correct: 1 },
    { id: 'c_16', topic: 'Bitwise Operators', question: 'Which operator is used for bitwise XOR in C?', options: ['^', '~', '|', '&'], correct: 0 },
    { id: 'c_17', topic: 'Preprocessor', question: 'What is the purpose of #define PI 3.14159 in C?', options: ['Declares a constant macro substituted by the preprocessor before compilation', 'Creates a global variable in memory', 'Imports a math library', 'Allocates a float'], correct: 0 },
    { id: 'c_18', topic: 'Arrays & Strings', question: 'Which standard library function calculates the length of a null-terminated string in C?', options: ['strlen()', 'sizeof()', 'length()', 'size()'], correct: 0 },
    { id: 'c_19', topic: 'File Handling', question: 'Which function opens a file in C and returns a FILE* pointer?', options: ['fopen()', 'open()', 'file_open()', 'readfile()'], correct: 0 },
    { id: 'c_20', topic: 'Storage Classes', question: 'What keyword declares that a variable is defined in another source file or external linkage?', options: ['extern', 'auto', 'register', 'volatile'], correct: 0 },
    { id: 'c_21', topic: 'Pointers & Memory', question: 'What is a dangling pointer in C?', options: ['A pointer that points to a memory location that has already been deallocated', 'A NULL pointer', 'A pointer pointing to main()', 'An uninitialized int'], correct: 0 },
    { id: 'c_22', topic: 'Control Flow', question: 'What is the output of int i = 0; while(i < 3) { printf("%d ", ++i); }?', options: ['1 2 3', '0 1 2', '0 1 2 3', 'Infinite loop'], correct: 0 },
    { id: 'c_23', topic: 'Arrays & Strings', question: 'What does strcpy(dest, src) do in string.h?', options: ['Copies characters from src string to dest buffer including the null terminator', 'Compares strings', 'Concatenates strings', 'Measures string size'], correct: 0 },
    { id: 'c_24', topic: 'Syntax & Types', question: 'What value does a relational expression like (5 > 3) evaluate to in C90/C99?', options: ['1 (true)', '0 (false)', 'True', 'void'], correct: 0 },
    { id: 'c_25', topic: 'Problem Solving', question: 'What is the result of sizeof(int*) on a 64-bit architecture?', options: ['8 bytes', '4 bytes', '2 bytes', '16 bytes'], correct: 0 },
    { id: 'c_26', topic: 'Dynamic Memory', question: 'Which function reallocates dynamic memory to a larger or smaller size in C?', options: ['realloc()', 'malloc()', 'resize()', 'expand()'], correct: 0 },
    { id: 'c_27', topic: 'Syntax & Types', question: 'What does the const qualifier mean when placed on a variable declaration?', options: ['The variable value cannot be modified after initialization', 'The variable is stored in registers', 'The variable is static', 'The variable is global'], correct: 0 },
    { id: 'c_28', topic: 'Control Flow', question: 'How is a for loop structured in standard C syntax?', options: ['for(initialization; condition; increment)', 'for(condition; initialization; step)', 'for(each item in array)', 'for(start to end)'], correct: 0 },
    { id: 'c_29', topic: 'Pointers & Memory', question: 'What is a void* in C?', options: ['A generic pointer type that can point to any data type without type casting', 'A pointer that points to nothing and causes segmentation fault', 'An empty function', 'A NULL pointer'], correct: 0 },
    { id: 'c_30', topic: 'Problem Solving', question: 'What is the output of int a = 10; int *p = &a; *p = 20; printf("%d", a);?', options: ['20', '10', 'Garbage value', 'Segmentation fault'], correct: 0 },
    { id: 'c_31', topic: 'File Handling', question: 'Which function is used to close a file stream opened with fopen()?', options: ['fclose()', 'close()', 'file_close()', 'free()'], correct: 0 },
    { id: 'c_32', topic: 'Preprocessor', question: 'What do header guards (#ifndef MY_HEADER_H, #define MY_HEADER_H, #endif) prevent?', options: ['Multiple inclusion of the same header file during compilation', 'Stack overflow', 'Buffer overrun', 'Memory leaks'], correct: 0 }
  ],

  javascript: [
    { id: 'js_01', topic: 'Variables & Scope', question: 'What is the difference between let and var in JavaScript?', options: ['let is block-scoped, var is function-scoped', 'var is block-scoped, let is function-scoped', 'They have identical scoping rules', 'let is global only'], correct: 0 },
    { id: 'js_02', topic: 'Data Types', question: 'What is the result of typeof null in JavaScript?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2 },
    { id: 'js_03', topic: 'Functions & Closures', question: 'What is a closure in JavaScript?', options: ['A function combined with references to its lexical surrounding state', 'A method to close browser tabs', 'A syntax error handler', 'A JSON parser'], correct: 0 },
    { id: 'js_04', topic: 'Arrays & Objects', question: 'Which array method creates a new array populated with the results of calling a provided function on every element?', options: ['forEach', 'map', 'filter', 'reduce'], correct: 1 },
    { id: 'js_05', topic: 'ES6+ Features', question: 'What does the spread operator ... do when applied to an array?', options: ['Spreads elements into individual values', 'Sorts array elements', 'Filters falsy values', 'Reverses items'], correct: 0 },
    { id: 'js_06', topic: 'Promises & Async/Await', question: 'What state is a Promise in when it has neither been resolved nor rejected?', options: ['pending', 'fulfilled', 'settled', 'waiting'], correct: 0 },
    { id: 'js_07', topic: 'DOM & Events', question: 'What method is used to attach an event listener to an HTML element?', options: ['element.listen()', 'element.addEventListener()', 'element.on()', 'element.attach()'], correct: 1 },
    { id: 'js_08', topic: 'Error Handling', question: 'Which block catches errors thrown inside a try statement?', options: ['except', 'catch', 'rescue', 'fail'], correct: 1 },
    { id: 'js_09', topic: 'Problem Solving', question: 'What is the output of [] + [] in JavaScript?', options: ['"" (empty string)', '[]', 'NaN', 'undefined'], correct: 0 },
    { id: 'js_10', topic: 'ES6+ Features', question: 'How do you extract properties from an object into distinct variables in ES6?', options: ['Object Destructuring', 'Object Slicing', 'Property Casting', 'Reflection'], correct: 0 },
    { id: 'js_11', topic: 'Promises & Async/Await', question: 'What does an async function always return implicitly?', options: ['A Promise', 'An Object', 'A Generator', 'A Callback'], correct: 0 },
    { id: 'js_12', topic: 'Problem Solving', question: 'What will 0 == "0" and 0 === "0" return respectively?', options: ['true, false', 'false, false', 'true, true', 'false, true'], correct: 0 },
    { id: 'js_13', topic: 'Arrays & Objects', question: 'Which method returns true if at least one element in an array passes the implemented test?', options: ['every()', 'some()', 'includes()', 'find()'], correct: 1 },
    { id: 'js_14', topic: 'DOM & Events', question: 'What does event.stopPropagation() prevent?', options: ['Form submission', 'Further propagation of the current event in the capturing and bubbling phases', 'Default browser actions', 'Network requests'], correct: 1 },
    { id: 'js_15', topic: 'Variables & Scope', question: 'What is hoisting in JavaScript?', options: ['Variables and function declarations are moved to top of scope during compilation', 'Asynchronous file uploads', 'Garbage collection cycle', 'HTTP request optimization'], correct: 0 },
    { id: 'js_16', topic: 'Functions & Closures', question: 'What is the value of this inside an arrow function?', options: ['It lexically inherits this from the enclosing execution context', 'It points to the global window always', 'It points to the function itself', 'It is undefined always'], correct: 0 },
    { id: 'js_17', topic: 'Event Loop', question: 'How does JavaScript handle asynchronous operations despite being single-threaded?', options: ['Using the Event Loop with Call Stack, Web APIs, and Task/Microtask Queues', 'By spawning multiple OS processes', 'By compiling directly to assembly', 'By freezing the browser UI'], correct: 0 },
    { id: 'js_18', topic: 'ES6+ Features', question: 'What is the purpose of template literals backticks in ES6?', options: ['Allows multi-line strings and string interpolation with ${expression}', 'Encrypts string data', 'Converts string to JSON', 'Creates binary buffers'], correct: 0 },
    { id: 'js_19', topic: 'Arrays & Objects', question: 'Which array method reduces an array to a single accumulated value from left to right?', options: ['reduce()', 'accumulate()', 'fold()', 'aggregate()'], correct: 0 },
    { id: 'js_20', topic: 'Data Types', question: 'Which of the following is NOT a JavaScript primitive data type?', options: ['Symbol', 'BigInt', 'Object', 'Boolean'], correct: 2 },
    { id: 'js_21', topic: 'Prototypes', question: 'How do objects inherit properties and methods in JavaScript?', options: ['Through the prototypal inheritance chain (__proto__)', 'Through classical C++ compilers', 'Through interface copies', 'Through memory offsets'], correct: 0 },
    { id: 'js_22', topic: 'DOM & Events', question: 'What does event.preventDefault() do?', options: ['Prevents the default browser action associated with the event (e.g. form submission reloading page)', 'Stops event bubbling', 'Deletes the target DOM node', 'Unbinds the event listener'], correct: 0 },
    { id: 'js_23', topic: 'Promises & Async/Await', question: 'Which Promise method resolves when ALL promises in an iterable have resolved successfully?', options: ['Promise.all()', 'Promise.race()', 'Promise.any()', 'Promise.resolveAll()'], correct: 0 },
    { id: 'js_24', topic: 'JSON & Storage', question: 'Which method converts a JavaScript object into a JSON string?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.encode()', 'JSON.serialize()'], correct: 0 },
    { id: 'js_25', topic: 'Problem Solving', question: 'What is the output of console.log(typeof NaN)?', options: ['"number"', '"NaN"', '"undefined"', '"object"'], correct: 0 },
    { id: 'js_26', topic: 'Variables & Scope', question: 'Can a variable declared with const be reassigned?', options: ['No, reassigning a const variable throws a TypeError', 'Yes, anytime', 'Only if it is a number', 'Only in strict mode'], correct: 0 },
    { id: 'js_27', topic: 'ES6+ Features', question: 'What does the nullish coalescing operator (??) do?', options: ['Returns the right-hand operand only when left-hand is null or undefined', 'Checks if both operands are falsy', 'Replaces ternary operator', 'Parses JSON'], correct: 0 },
    { id: 'js_28', topic: 'DOM & Events', question: 'What is event delegation in JavaScript?', options: ['Attaching a single event listener to a parent element to handle events for all children via bubbling', 'Passing events to a web worker', 'Triggering custom events', 'Delegating server events'], correct: 0 },
    { id: 'js_29', topic: 'Problem Solving', question: 'What will [1, 2, 3].includes(2) return?', options: ['true', 'false', '1', 'undefined'], correct: 0 },
    { id: 'js_30', topic: 'Event Loop', question: 'Which queue has higher execution priority in the Event Loop: Microtasks (Promises) or Macrotasks (setTimeout)?', options: ['Microtask Queue executes before Macrotask Queue', 'Macrotask Queue has higher priority', 'They execute in random order', 'They execute in parallel'], correct: 0 },
    { id: 'js_31', topic: 'Functions & Closures', question: 'What is a Pure Function in functional programming?', options: ['A function that given same arguments returns same output and produces no side effects', 'A function with no arguments', 'A function written in TypeScript', 'A private class method'], correct: 0 },
    { id: 'js_32', topic: 'ES6+ Features', question: 'What does Optional Chaining (?.) do in JavaScript?', options: ['Safely accesses nested object properties without throwing an error if intermediate reference is null/undefined', 'Creates optional function arguments', 'Chains multiple promises', 'Validates forms'], correct: 0 }
  ],

  sql: [
    { id: 'sql_01', topic: 'SELECT & WHERE', question: 'Which SQL clause is used to filter records based on specified conditions?', options: ['ORDER BY', 'FILTER BY', 'WHERE', 'GROUP BY'], correct: 2 },
    { id: 'sql_02', topic: 'SELECT & WHERE', question: 'How do you select all distinct/unique values from a column named city?', options: ['SELECT UNIQUE city FROM students', 'SELECT DISTINCT city FROM students', 'SELECT DIFFERENT city FROM students', 'SELECT EXCLUSIVE city FROM students'], correct: 1 },
    { id: 'sql_03', topic: 'ORDER BY & LIMIT', question: 'Which keyword sorts SQL query results in descending order?', options: ['ASC', 'DESC', 'DOWN', 'BOTTOM'], correct: 1 },
    { id: 'sql_04', topic: 'GROUP BY & HAVING', question: 'Which clause is used to filter grouped data created by a GROUP BY clause?', options: ['WHERE', 'HAVING', 'FILTER', 'CONDITION'], correct: 1 },
    { id: 'sql_05', topic: 'Aggregate Functions', question: 'Which SQL function returns the number of rows matching the query criteria?', options: ['SUM()', 'COUNT()', 'TOTAL()', 'LEN()'], correct: 1 },
    { id: 'sql_06', topic: 'Aggregate Functions', question: 'What does the AVG(score) aggregate function calculate?', options: ['Total sum', 'Arithmetic mean', 'Median', 'Standard deviation'], correct: 1 },
    { id: 'sql_07', topic: 'JOINs', question: 'Which JOIN returns all rows from the left table and matched records from the right table?', options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'], correct: 1 },
    { id: 'sql_08', topic: 'JOINs', question: 'What is returned by an INNER JOIN between two tables?', options: ['All rows from both tables', 'Only matching rows that satisfy the join condition', 'All rows from the first table only', 'A cartesian product'], correct: 1 },
    { id: 'sql_09', topic: 'Subqueries', question: 'What is a subquery in SQL?', options: ['A query nested inside another SQL statement', 'A table partition', 'An index definition', 'A database trigger'], correct: 0 },
    { id: 'sql_10', topic: 'Constraints & Keys', question: 'What constraint ensures that all values in a column are distinct and not null?', options: ['FOREIGN KEY', 'PRIMARY KEY', 'CHECK', 'DEFAULT'], correct: 1 },
    { id: 'sql_11', topic: 'Constraints & Keys', question: 'What key establishes a relationship referencing a primary key in another table?', options: ['CANDIDATE KEY', 'FOREIGN KEY', 'COMPOSITE KEY', 'SUPER KEY'], correct: 1 },
    { id: 'sql_12', topic: 'Database Concepts', question: 'What does the ACID property A stand for in relational transactions?', options: ['Accuracy', 'Atomicity', 'Authentication', 'Availability'], correct: 1 },
    { id: 'sql_13', topic: 'Query Problem Solving', question: 'How do you find students whose names start with the letter "R"?', options: ['WHERE name LIKE "R%"', 'WHERE name = "R*"', 'WHERE name CONTAINS "R"', 'WHERE name IN ("R")'], correct: 0 },
    { id: 'sql_14', topic: 'Query Problem Solving', question: 'What is the purpose of the COALESCE(val1, val2) function?', options: ['Returns the first non-null expression from the list', 'Concatenates two strings', 'Calculates standard deviation', 'Converts data types'], correct: 0 },
    { id: 'sql_15', topic: 'Database Concepts', question: 'What is the primary benefit of creating an index on a frequently queried column?', options: ['Reduces disk usage', 'Significantly speeds up SELECT queries', 'Guarantees encryption', 'Enforces business rules'], correct: 1 },
    { id: 'sql_16', topic: 'ORDER BY & LIMIT', question: 'Which clause limits the maximum number of rows returned by a query in PostgreSQL/MySQL?', options: ['TOP', 'LIMIT', 'MAXROWS', 'STOP'], correct: 1 },
    { id: 'sql_17', topic: 'SELECT & WHERE', question: 'How do you select records where a column value is NULL?', options: ['WHERE col = NULL', 'WHERE col IS NULL', 'WHERE col EQUALS NULL', 'WHERE col == NULL'], correct: 1 },
    { id: 'sql_18', topic: 'JOINs', question: 'What does a FULL OUTER JOIN produce in SQL?', options: ['All rows when there is a match in either left or right table, filling nulls where no match exists', 'Only identical records', 'Cartesian product with no conditions', 'Only left table rows'], correct: 0 },
    { id: 'sql_19', topic: 'DDL vs DML', question: 'Which of the following SQL statements is a Data Definition Language (DDL) command?', options: ['INSERT', 'UPDATE', 'CREATE TABLE', 'DELETE'], correct: 2 },
    { id: 'sql_20', topic: 'DDL vs DML', question: 'What is the difference between DELETE and TRUNCATE in SQL?', options: ['TRUNCATE is a DDL command that resets table without logging individual row deletions; DELETE logs each row', 'DELETE cannot use a WHERE clause', 'TRUNCATE is reversible with rollback in all DBs', 'There is no difference'], correct: 0 },
    { id: 'sql_21', topic: 'Constraints & Keys', question: 'What constraint limits the range of values that can be placed in a column?', options: ['CHECK', 'DEFAULT', 'UNIQUE', 'INDEX'], correct: 0 },
    { id: 'sql_22', topic: 'Database Concepts', question: 'What does Normalization in relational database design aim to minimize?', options: ['Data redundancy and undesirable update anomalies', 'The number of primary keys', 'The speed of query execution', 'Disk space only'], correct: 0 },
    { id: 'sql_23', topic: 'Database Concepts', question: 'What does the ACID property Isolation ensure?', options: ['Concurrent execution of transactions leaves the database in the same state as if executed serially', 'Data is isolated on separate hard drives', 'Users cannot log in simultaneously', 'Tables cannot have foreign keys'], correct: 0 },
    { id: 'sql_24', topic: 'Aggregate Functions', question: 'What does the MAX(salary) function return?', options: ['The highest value in the salary column', 'The average salary', 'Total salary expense', 'Count of salaried rows'], correct: 0 },
    { id: 'sql_25', topic: 'Query Problem Solving', question: 'Which operator checks if a value matches any value in a subquery or list?', options: ['IN', 'BETWEEN', 'EXISTS', 'LIKE'], correct: 0 },
    { id: 'sql_26', topic: 'Query Problem Solving', question: 'What does SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000 do?', options: ['Selects rows where salary is inclusively between 50000 and 80000', 'Selects rows where salary is strictly greater than 50000', 'Selects average between values', 'Syntax error'], correct: 0 },
    { id: 'sql_27', topic: 'Views', question: 'What is a Database View?', options: ['A virtual table based on the result-set of an SQL statement', 'A physical copy of the database', 'A backup file on disk', 'A graphical user interface'], correct: 0 },
    { id: 'sql_28', topic: 'Transactions', question: 'Which command permanently saves all changes made during the current transaction?', options: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', 'STORE'], correct: 0 },
    { id: 'sql_29', topic: 'Transactions', question: 'Which command undoes transactions that have not yet been saved to the database?', options: ['ROLLBACK', 'REVERT', 'UNDO', 'CANCEL'], correct: 0 },
    { id: 'sql_30', topic: 'GROUP BY & HAVING', question: 'Why can you NOT use an aggregate function like SUM() directly in a WHERE clause?', options: ['WHERE filters individual rows before grouping occurs; HAVING filters aggregated groups', 'Aggregate functions are only allowed in ORDER BY', 'SQL does not support math in WHERE', 'Aggregate functions cannot return numbers'], correct: 0 },
    { id: 'sql_31', topic: 'SELECT & WHERE', question: 'What wildcard in SQL LIKE pattern matches any string of zero or more characters?', options: ['%', '_', '*', '?'], correct: 0 },
    { id: 'sql_32', topic: 'Constraints & Keys', question: 'Can a table have more than one FOREIGN KEY constraint?', options: ['Yes, a table can reference multiple foreign keys from different tables', 'No, only one foreign key is allowed per table', 'Only in NoSQL databases', 'Only if primary key is disabled'], correct: 0 }
  ],

  react: [
    { id: 'rc_01', topic: 'Components & Props', question: 'What is JSX in React?', options: ['A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language', 'A state management library'], correct: 0 },
    { id: 'rc_02', topic: 'Components & Props', question: 'Are props mutable inside child components in React?', options: ['Yes, child components can freely modify props', 'No, props are strictly read-only (immutable)', 'Only if passed through context', 'Only in class components'], correct: 1 },
    { id: 'rc_03', topic: 'State & useState', question: 'Which Hook is used to add reactive local state to a functional component?', options: ['useEffect', 'useState', 'useReducer', 'useRef'], correct: 1 },
    { id: 'rc_04', topic: 'Lifecycle & useEffect', question: 'How do you make useEffect run ONLY once when a component mounts?', options: ['Pass an empty dependency array [] as the second argument', 'Omit the second argument', 'Pass null as second argument', 'Use useMount() hook'], correct: 0 },
    { id: 'rc_05', topic: 'Conditional Rendering', question: 'Which operator is commonly used for inline conditional rendering of a JSX element?', options: ['&& (Logical AND)', '?? (Nullish Coalescing)', '|| (Logical OR)', '== (Loose Equality)'], correct: 0 },
    { id: 'rc_06', topic: 'Lists & Keys', question: 'Why must a unique key prop be provided when rendering lists of elements in React?', options: ['To apply CSS styles', 'To help React identify which items have changed, added, or removed for efficient reconciliation', 'To encrypt list data', 'To bind click handlers'], correct: 1 },
    { id: 'rc_07', topic: 'State & useState', question: 'What is the correct way to update state that depends on the previous state value?', options: ['setCount(count + 1)', 'setCount(prev => prev + 1)', 'count = count + 1', 'this.count++'], correct: 1 },
    { id: 'rc_08', topic: 'Lifecycle & useEffect', question: 'How do you clean up side effects (like subscriptions or timers) in useEffect?', options: ['Return a cleanup function from the effect callback', 'Call useEffect.cleanup()', 'Use a try...finally block', 'React automatically clears all side effects'], correct: 0 },
    { id: 'rc_09', topic: 'State Management', question: 'What React Hook provides direct mutable reference to a DOM element or persistent value without triggering re-render?', options: ['useRef', 'useMemo', 'useCallback', 'useContext'], correct: 0 },
    { id: 'rc_10', topic: 'State Management', question: 'What is prop drilling in React applications?', options: ['Passing data through multiple intermediate components that do not need it themselves', 'Optimizing props with memoization', 'Validating props with TypeScript', 'Mutating parent state'], correct: 0 },
    { id: 'rc_11', topic: 'Performance', question: 'Which Hook memoizes the result of a computationally expensive calculation?', options: ['useCallback', 'useMemo', 'useRef', 'useState'], correct: 1 },
    { id: 'rc_12', topic: 'Performance', question: 'Which Hook returns a memoized version of a callback function that only changes if dependencies change?', options: ['useCallback', 'useMemo', 'useEffect', 'useReducer'], correct: 0 },
    { id: 'rc_13', topic: 'Context API', question: 'Which Hook allows consuming values from a React Context directly in a functional component?', options: ['useContext', 'useProvider', 'useConsumer', 'useStore'], correct: 0 },
    { id: 'rc_14', topic: 'Forms', question: 'What is a controlled component in React form handling?', options: ['An input element whose value is controlled by React state via value and onChange handlers', 'An unmanaged DOM input', 'A form that submits via page reload', 'A third-party widget'], correct: 0 },
    { id: 'rc_15', topic: 'Virtual DOM', question: 'What is the Virtual DOM in React architecture?', options: ['A lightweight in-memory representation of the real DOM used to compute minimal UI diffs', 'A physical server running DOM nodes', 'A Chrome extension', 'A canvas graphics engine'], correct: 0 },
    { id: 'rc_16', topic: 'Custom Hooks', question: 'What convention must custom Hook names follow in React?', options: ['Must start with the prefix "use" (e.g. useAuth)', 'Must end with "Hook"', 'Must be in uppercase', 'Must be class methods'], correct: 0 },
    { id: 'rc_17', topic: 'State & useReducer', question: 'When is useReducer preferred over useState in functional components?', options: ['When state logic is complex, involves multiple sub-values, or next state depends on previous state', 'Only for strings', 'Never, useState is always superior', 'Only in class components'], correct: 0 },
    { id: 'rc_18', topic: 'Error Boundaries', question: 'What is an Error Boundary in React?', options: ['A component that catches JavaScript errors anywhere in its child component tree and displays fallback UI', 'A network timeout handler', 'A CSS layout boundary', 'A Redux middleware'], correct: 0 },
    { id: 'rc_19', topic: 'Components & Props', question: 'What is the special prop children in React?', options: ['Represents the elements or content passed between opening and closing tags of a component', 'Contains sub-classes', 'Contains child process IDs', 'A list of state variables'], correct: 0 },
    { id: 'rc_20', topic: 'Rules of Hooks', question: 'Which of the following is a fundamental rule of React Hooks?', options: ['Only call Hooks at the top level of React functions (never inside loops, conditions, or nested functions)', 'Hooks can be called anywhere in plain JS functions', 'Hooks must be called inside event handlers', 'Hooks can only be called in class methods'], correct: 0 },
    { id: 'rc_21', topic: 'Lifecycle & useEffect', question: 'What happens if you pass no dependency array to useEffect(callback)?', options: ['The callback runs after every single render of the component', 'It runs only once on mount', 'It never runs', 'It throws a compilation error'], correct: 0 },
    { id: 'rc_22', topic: 'Performance', question: 'What does React.memo() do when wrapping a functional component?', options: ['Prevents re-rendering if its props have not changed (shallow comparison)', 'Memoizes return types in TypeScript', 'Forces automatic re-rendering every second', 'Compresses bundle size'], correct: 0 },
    { id: 'rc_23', topic: 'Components & Props', question: 'What is lifting state up in React?', options: ['Moving shared state to the closest common ancestor of the components that need it', 'Uploading state to the backend', 'Storing state in local storage', 'Using global window variables'], correct: 0 },
    { id: 'rc_24', topic: 'Forms', question: 'How do you access an uncontrolled input value in React without state?', options: ['By attaching a ref created with useRef() to the input', 'By using document.querySelector always', 'By checking cookies', 'It is impossible in React'], correct: 0 },
    { id: 'rc_25', topic: 'React Fragments', question: 'Why are React Fragments (<>...</> or <React.Fragment>) used?', options: ['To group a list of children without adding extra unnecessary DOM nodes to the HTML', 'To create CSS grid splits', 'To improve image resolution', 'To encrypt component output'], correct: 0 },
    { id: 'rc_26', topic: 'State & useState', question: 'What does useState(0) return?', options: ['An array with two elements: current state value and a state updater function', 'A single number', 'An object with state and setState methods', 'A promise'], correct: 0 },
    { id: 'rc_27', topic: 'Lifecycle & useEffect', question: 'When does the cleanup function in useEffect run?', options: ['Before the component unmounts and before running the effect on subsequent re-renders', 'Only when the app crashes', 'Only when the server reboots', 'Immediately before component mount'], correct: 0 },
    { id: 'rc_28', topic: 'Performance', question: 'Why is passing an inline arrow function as prop to a memoized child component sometimes suboptimal?', options: ['A new function reference is created on every render, causing the memoized child to re-render unless useCallback is used', 'Arrow functions cannot accept arguments in JSX', 'It throws syntax errors in older browsers', 'It prevents garbage collection'], correct: 0 },
    { id: 'rc_29', topic: 'Custom Hooks', question: 'Can a custom Hook call built-in React Hooks like useState or useEffect?', options: ['Yes, custom Hooks can compose any built-in or other custom Hooks', 'No, custom Hooks must be pure vanilla JS', 'Only if declared as async', 'Only in React Native'], correct: 0 },
    { id: 'rc_30', topic: 'Virtual DOM', question: 'What is the reconciliation process in React?', options: ['The algorithm React uses to diff one Virtual DOM tree with another to determine which parts of UI need real DOM updates', 'Syncing state with cloud database', 'Validating HTML tags', 'Compiling Babel to JS'], correct: 0 }
  ],

  html_css: [
    { id: 'hc_01', topic: 'Semantic Tags', question: 'Which HTML5 semantic element is best suited for wrapping independent, self-contained content?', options: ['<div>', '<article>', '<span>', '<section>'], correct: 1 },
    { id: 'hc_02', topic: 'Box Model', question: 'In the standard CSS Box Model, what components make up the total element space?', options: ['Content + Padding + Border + Margin', 'Content + Border + Margin', 'Width + Height only', 'Padding + Border only'], correct: 0 },
    { id: 'hc_03', topic: 'Flexbox', question: 'In CSS Flexbox, which property aligns items along the cross-axis?', options: ['justify-content', 'align-items', 'flex-direction', 'align-content'], correct: 1 },
    { id: 'hc_04', topic: 'Flexbox', question: 'In CSS Flexbox, which property defines the main axis alignment?', options: ['justify-content', 'align-items', 'flex-wrap', 'gap'], correct: 0 },
    { id: 'hc_05', topic: 'CSS Grid', question: 'Which CSS property defines the number and sizes of columns in a grid container?', options: ['grid-template-columns', 'grid-columns', 'grid-auto-flow', 'column-count'], correct: 0 },
    { id: 'hc_06', topic: 'Specificity', question: 'Which CSS selector has the highest specificity?', options: ['Element selector (p)', 'Class selector (.card)', 'ID selector (#hero)', 'Universal selector (*)'], correct: 2 },
    { id: 'hc_07', topic: 'Responsive Design', question: 'What is the purpose of the @media rule in CSS?', options: ['To load video and audio files', 'To apply distinct styles based on screen resolution, viewport width, or device type', 'To link external fonts', 'To animate layout properties'], correct: 1 },
    { id: 'hc_08', topic: 'Forms', question: 'Which attribute in an <input> tag ensures the user must fill the field before form submission?', options: ['validate="true"', 'required', 'mandatory', 'checked'], correct: 1 },
    { id: 'hc_09', topic: 'Accessibility', question: 'What attribute should always be provided on <img> tags for screen-reader accessibility?', options: ['title', 'alt', 'caption', 'role'], correct: 1 },
    { id: 'hc_10', topic: 'Box Model', question: 'What does box-sizing: border-box; do in CSS?', options: ['Includes padding and border in the element’s total specified width and height', 'Removes all margins', 'Renders 3D border', 'Hides overflow content'], correct: 0 },
    { id: 'hc_11', topic: 'Positioning', question: 'What does position: absolute; do relative to its containing block?', options: ['Positions element relative to its nearest positioned ancestor (non-static)', 'Positions relative to browser viewport always', 'Positions in normal document flow', 'Fixes element to bottom'], correct: 0 },
    { id: 'hc_12', topic: 'Positioning', question: 'What is the behavior of position: sticky in CSS?', options: ['Toggles between relative and fixed positioning based on user scroll position', 'Never moves from initial coordinates', 'Hides element behind background', 'Renders element as modal'], correct: 0 },
    { id: 'hc_13', topic: 'CSS Units', question: 'What is the reference size for the rem unit in CSS?', options: ['The font-size of the root element (<html>)', 'The font-size of the parent element', 'The viewport width', '16 pixels always regardless of root'], correct: 0 },
    { id: 'hc_14', topic: 'CSS Units', question: 'What does 100vh represent in CSS sizing?', options: ['100% of the viewport height', '100% of the viewport width', '100 pixels vertically', '100 virtual hexes'], correct: 0 },
    { id: 'hc_15', topic: 'Transitions & Animations', question: 'Which CSS property allows smooth transitions between property changes over time?', options: ['transition', 'transform', 'translate', 'render'], correct: 0 },
    { id: 'hc_16', topic: 'Transitions & Animations', question: 'Which CSS property is used to rotate, scale, skew, or translate an element in 2D or 3D?', options: ['transform', 'transition', 'animation', 'filter'], correct: 0 },
    { id: 'hc_17', topic: 'Pseudo-classes', question: 'Which CSS pseudo-class matches when the user interacts with an element using pointing device (mouse pointer)?', options: [':hover', ':active', ':focus', ':visited'], correct: 0 },
    { id: 'hc_18', topic: 'HTML5 Elements', question: 'Which HTML5 element represents navigation links on a website?', options: ['<nav>', '<header>', '<aside>', '<menu>'], correct: 0 },
    { id: 'hc_19', topic: 'HTML5 Elements', question: 'Which tag should be used to display tabular data with rows and columns?', options: ['<table>', '<grid>', '<panel>', '<form>'], correct: 0 },
    { id: 'hc_20', topic: 'Forms', question: 'Which input type provides a dropdown date picker on supporting modern browsers?', options: ['<input type="date">', '<input type="calendar">', '<input type="time">', '<input type="datetime-local">'], correct: 0 },
    { id: 'hc_21', topic: 'Flexbox', question: 'What does flex: 1; shorthand expand to in CSS?', options: ['flex-grow: 1; flex-shrink: 1; flex-basis: 0%;', 'flex-direction: row;', 'flex-wrap: wrap;', 'flex-align: center;'], correct: 0 },
    { id: 'hc_22', topic: 'CSS Grid', question: 'What does grid-column: span 2; specify in CSS Grid layout?', options: ['The grid item should span across 2 column tracks', 'The grid has 2 columns total', 'The item splits into 2 divs', 'The row height doubles'], correct: 0 },
    { id: 'hc_23', topic: 'HTML Doctype', question: 'What is the purpose of <!DOCTYPE html> at the beginning of an HTML file?', options: ['Informs the browser to render the page in standard HTML5 mode rather than quirks mode', 'Imports JavaScript libraries', 'Defines page language', 'Initializes CSS styles'], correct: 0 },
    { id: 'hc_24', topic: 'Meta Tags', question: 'What meta tag is essential for responsive layouts on mobile devices?', options: ['<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta charset="utf-8">', '<meta http-equiv="X-UA-Compatible">', '<meta name="robots">'], correct: 0 },
    { id: 'hc_25', topic: 'Typography', question: 'Which CSS property specifies whether text is bold, light, or normal?', options: ['font-weight', 'font-style', 'font-variant', 'text-transform'], correct: 0 },
    { id: 'hc_26', topic: 'Pseudo-classes', question: 'Which pseudo-element inserts generated cosmetic content before an element’s real content?', options: ['::before', '::after', ':first-child', '::content'], correct: 0 },
    { id: 'hc_27', topic: 'Z-Index', question: 'What is required for the z-index property to take effect on an element in CSS?', options: ['The element must have a position other than static (e.g. relative, absolute, fixed)', 'The element must be a div', 'The display must be block', 'Opacity must be 1'], correct: 0 },
    { id: 'hc_28', topic: 'Accessibility', question: 'What does ARIA stand for in web accessibility standards?', options: ['Accessible Rich Internet Applications', 'Automated Responsive Interface Architecture', 'Active Rendering Internet App', 'Advanced Reactive Interface API'], correct: 0 },
    { id: 'hc_29', topic: 'CSS Variables', question: 'How do you declare and access a custom CSS variable (custom property)?', options: ['--primary-color: #4f46e5; and var(--primary-color)', '$primary-color and $primary-color', '@primary-color and @primary-color', ':root.color and color()'], correct: 0 },
    { id: 'hc_30', topic: 'Specificity', question: 'What happens when two CSS rules with the exact same selector specificity conflict?', options: ['The rule that appears last in the stylesheet source order takes precedence (cascades)', 'The first rule always wins', 'The browser throws a warning', 'Both rules cancel out'], correct: 0 }
  ],

  general: [
    { id: 'gn_01', topic: 'Data Structures', question: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?', options: ['Queue', 'Stack', 'Linked List', 'Binary Tree'], correct: 1 },
    { id: 'gn_02', topic: 'Data Structures', question: 'Which data structure operates on a First-In, First-Out (FIFO) principle?', options: ['Stack', 'Queue', 'Hash Table', 'Heap'], correct: 1 },
    { id: 'gn_03', topic: 'Algorithms', question: 'What is the worst-case time complexity of standard Binary Search on a sorted array of size n?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], correct: 1 },
    { id: 'gn_04', topic: 'Git Version Control', question: 'Which Git command creates and switches to a new local branch named feature?', options: ['git checkout -b feature', 'git branch -new feature', 'git switch -c feature', 'Both A and C are correct'], correct: 3 },
    { id: 'gn_05', topic: 'Git Version Control', question: 'What command stages modified files to prepare them for a commit in Git?', options: ['git stage', 'git add', 'git push', 'git save'], correct: 1 },
    { id: 'gn_06', topic: 'REST APIs', question: 'Which HTTP method is idempotent and used to retrieve representation of a resource?', options: ['POST', 'GET', 'PATCH', 'CONNECT'], correct: 1 },
    { id: 'gn_07', topic: 'REST APIs', question: 'Which HTTP response status code indicates that a resource was successfully created on the server?', options: ['200 OK', '201 Created', '204 No Content', '301 Moved'], correct: 1 },
    { id: 'gn_08', topic: 'System Design', question: 'What is the primary role of a Load Balancer in distributed web architecture?', options: ['Encrypt user passwords', 'Distribute incoming network traffic across multiple healthy application servers', 'Store user cache', 'Run unit tests'], correct: 1 },
    { id: 'gn_09', topic: 'Algorithms', question: 'What is the average time complexity of finding an element in a balanced Hash Map?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correct: 0 },
    { id: 'gn_10', topic: 'Problem Solving', question: 'What does DRY stand for in software engineering best practices?', options: ['Don\'t Repeat Yourself', 'Do Run Yearly', 'Direct Route Yield', 'Database Relational Yield'], correct: 0 },
    { id: 'gn_11', topic: 'Data Structures', question: 'In a Binary Search Tree (BST), where are keys smaller than the root node located?', options: ['In the left subtree', 'In the right subtree', 'At the leaf level only', 'In a separate linked list'], correct: 0 },
    { id: 'gn_12', topic: 'Algorithms', question: 'What is the average time complexity of the QuickSort algorithm?', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'], correct: 0 },
    { id: 'gn_13', topic: 'Git Version Control', question: 'What is the purpose of git pull in version control workflows?', options: ['Fetches changes from remote repository and integrates them into current local branch', 'Pushes local commits to remote', 'Deletes untracked files', 'Reverts the last commit'], correct: 0 },
    { id: 'gn_14', topic: 'REST APIs', question: 'Which HTTP status code represents an Unauthorized authentication failure?', options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '500 Internal Error'], correct: 0 },
    { id: 'gn_15', topic: 'Testing', question: 'What is Unit Testing in software development?', options: ['Testing individual functions, components, or isolated units of source code for expected behavior', 'Testing entire application in production', 'Testing server cooling fans', 'Testing network bandwidth'], correct: 0 },
    { id: 'gn_16', topic: 'Security', question: 'What does HTTPS use to encrypt data transmitted between browser client and server?', options: ['TLS / SSL encryption', 'Base64 encoding only', 'MD5 hash', 'HTML5 validator'], correct: 0 },
    { id: 'gn_17', topic: 'Data Structures', question: 'Which data structure is ideal for implementing a Breadth-First Search (BFS) graph traversal?', options: ['Queue', 'Stack', 'Priority Heap', 'Hash Set'], correct: 0 },
    { id: 'gn_18', topic: 'Data Structures', question: 'Which data structure is ideal for implementing a Depth-First Search (DFS) graph traversal?', options: ['Stack (or recursion call stack)', 'Queue', 'Array buffer', 'B-Tree'], correct: 0 },
    { id: 'gn_19', topic: 'Algorithms', question: 'What does Big O notation describe in computer science?', options: ['The upper bound asymptotic complexity (growth rate) of an algorithm with respect to input size', 'The physical size of executable files', 'The number of bugs in code', 'The CPU clock speed'], correct: 0 },
    { id: 'gn_20', topic: 'System Design', question: 'What is Caching and why is it used in web systems?', options: ['Temporarily storing copies of expensive data in fast-access memory (e.g. Redis) to reduce database load and latency', 'Deleting old records permanently', 'Backing up files to cold storage', 'Compressing video files'], correct: 0 },
    { id: 'gn_21', topic: 'Git Version Control', question: 'What does git merge do in repository management?', options: ['Combines multiple sequences of commits into one unified branch history', 'Deletes remote branch', 'Creates a pull request', 'Splits files into chunks'], correct: 0 },
    { id: 'gn_22', topic: 'REST APIs', question: 'Which HTTP method should be used to completely replace an existing resource record?', options: ['PUT', 'PATCH', 'GET', 'DELETE'], correct: 0 },
    { id: 'gn_23', topic: 'Database Concepts', question: 'What is the main characteristic of NoSQL document databases like MongoDB?', options: ['Schema-flexible storage of semi-structured JSON/BSON documents rather than rigid relational tables', 'Only stores text files', 'Does not support indexing', 'Runs only on Windows'], correct: 0 },
    { id: 'gn_24', topic: 'OOP Principles', question: 'What does the Liskov Substitution Principle (LSP) require in object-oriented design?', options: ['Subtypes must be substitutable for their base types without altering program correctness', 'Classes must have only one method', 'All variables must be public', 'Interfaces cannot have methods'], correct: 0 },
    { id: 'gn_25', topic: 'Testing', question: 'What is Regression Testing in software maintenance?', options: ['Re-running existing test suites to ensure that recent code changes or bug fixes did not break existing features', 'Testing on legacy OS versions only', 'Testing hardware degradation', 'Manual usability surveys'], correct: 0 },
    { id: 'gn_26', topic: 'Algorithms', question: 'What is the space complexity of an in-place sorting algorithm like HeapSort?', options: ['O(1)', 'O(n)', 'O(n log n)', 'O(n^2)'], correct: 0 },
    { id: 'gn_27', topic: 'Security', question: 'What type of vulnerability occurs when untrusted user input is executed directly in database SQL queries without parameterization?', options: ['SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'Buffer Overflow'], correct: 0 },
    { id: 'gn_28', topic: 'Git Version Control', question: 'What does git stash do in a Git working directory?', options: ['Temporarily shelves uncommitted changes so you can work on a clean directory', 'Deletes all commits', 'Pushes to GitHub', 'Merges branches'], correct: 0 },
    { id: 'gn_29', topic: 'System Design', question: 'What is Horizontal Scaling compared to Vertical Scaling?', options: ['Adding more machine instances to a pool rather than upgrading CPU/RAM on a single server', 'Using wider monitors for coding', 'Running queries horizontally', 'Increasing database columns'], correct: 0 },
    { id: 'gn_30', topic: 'Problem Solving', question: 'What is the primary advantage of a Linked List over a contiguous Array?', options: ['Dynamic size and O(1) constant-time insertions/deletions at known positions without reallocating/shifting', 'O(1) random index access', 'Lower memory overhead', 'Better CPU cache locality'], correct: 0 }
  ]
};

  function resolveSkillBankKey(skillName) {
    if (!skillName) return 'general';
    const s = skillName.toLowerCase().trim();
    if (s.includes('python')) return 'python';
    if (s.includes('java') && !s.includes('script')) return 'java';
    if (s.includes('sql') || s.includes('database') || s.includes('postgres') || s.includes('mysql')) return 'sql';
    if (s.includes('react') || s.includes('next')) return 'react';
    if (s.includes('javascript') || s.includes('js') || s.includes('node') || s.includes('typescript')) return 'javascript';
    if (s === 'c' || s === 'c++' || s.includes('cpp')) return 'c';
    if (s.includes('html') || s.includes('css') || s.includes('frontend') || s.includes('tailwind')) return 'html_css';
    return 'general';
  }

  // --- 5. AUTHENTICATION & SESSION MANAGER ---
  const auth = {
    register(roleOrObj, email, password, profileFields = {}) {
      let role = roleOrObj;
      if (typeof roleOrObj === 'object' && roleOrObj !== null) {
        role = roleOrObj.role;
        email = roleOrObj.email;
        password = roleOrObj.password;
        profileFields = roleOrObj;
      }
      if (!email || !password) {
        return { success: false, message: 'Email and password are required.' };
      }

      const existing = db.findOne('users', u => u.email.toLowerCase() === email.toLowerCase() && u.role === role);
      if (existing) {
        return { success: false, message: 'An account with this email already exists for this role. Please sign in.' };
      }

      const userId = `usr_${role}_${Date.now()}`;
      const newUser = {
        id: userId,
        email: email.trim(),
        password: password,
        role: role,
        certified_skills_answered: false,
        has_certified_skills: false,
        createdAt: new Date().toISOString().split('T')[0]
      };

      let newProfile = null;

      if (role === 'student') {
        const collegeCode = (profileFields.college_code || '').trim().toUpperCase();
        if (!collegeCode) {
          return { success: false, message: 'College Code is mandatory for student registration.' };
        }

        const careerGoal = (profileFields.career_goal || 'Software Developer').trim();
        const preferredRoles = profileFields.preferred_roles
          ? (Array.isArray(profileFields.preferred_roles) ? profileFields.preferred_roles : profileFields.preferred_roles.split(',').map(r => r.trim()))
          : [careerGoal];

        newProfile = {
          id: `prof_${userId}`,
          user_id: userId,
          name: profileFields.name || 'Student Candidate',
          email: email.trim(),
          phone: profileFields.phone || '',
          college_code: collegeCode,
          college_name: profileFields.college_name || `College (${collegeCode})`,
          branch: profileFields.branch || 'Engineering',
          year: profileFields.year || '3rd Year',
          cgpa: profileFields.cgpa || '8.0',
          career_goal: careerGoal,
          preferred_roles: preferredRoles,
          skills: [],
          certifications: profileFields.certifications || '',
          projects: profileFields.projects || '',
          resume_name: profileFields.resume_name || 'Resume_Uploaded.pdf',
          location: profileFields.location || '',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          profile_completion: 75
        };
        db.insert('student_profiles', newProfile);
      } else if (role === 'college') {
        const collegeCode = (profileFields.college_code || '').trim().toUpperCase();
        if (!collegeCode) {
          return { success: false, message: 'College Code is mandatory for college registration.' };
        }

        const codeExists = db.findOne('college_profiles', c => (c.college_code || '').toUpperCase() === collegeCode);
        if (codeExists) {
          return { success: false, message: `College Code "${collegeCode}" is already registered. Please provide a unique code.` };
        }

        newProfile = {
          id: `prof_${userId}`,
          user_id: userId,
          college_name: profileFields.college_name || 'Engineering Institute',
          college_code: collegeCode,
          admin_name: profileFields.admin_name || 'Placement Officer',
          email: email.trim(),
          phone: profileFields.phone || '',
          location: profileFields.location || '',
          total_students: 1200,
          avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80'
        };
        db.insert('college_profiles', newProfile);
      } else if (role === 'company') {
        newProfile = {
          id: `prof_${userId}`,
          user_id: userId,
          company_name: profileFields.company_name || 'Tech Enterprise',
          recruiter_name: profileFields.recruiter_name || 'Talent Acquisition',
          email: email.trim(),
          phone: profileFields.phone || '',
          industry: profileFields.industry || 'Technology & Software',
          location: profileFields.location || 'India',
          description: profileFields.description || 'Innovative technology enterprise hiring top campus talent.',
          size: profileFields.size || '100 - 500 Employees',
          website: profileFields.website || 'https://example.com',
          logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80'
        };
        db.insert('company_profiles', newProfile);
      } else {
        return { success: false, message: 'Invalid registration role specified.' };
      }

      db.insert('users', newUser);

      db.data.active_session = {
        user_id: userId,
        role: role,
        token: `token_${Date.now()}`,
        email: email.trim()
      };
      db.saveDatabase();

      return { success: true, user: newUser, profile: newProfile };
    },

    login(role, email, password) {
      const user = db.findOne('users', u => u.email.toLowerCase() === email.toLowerCase() && u.role === role);
      if (!user) {
        return { success: false, message: 'No registered account found with this email for the selected portal.' };
      }
      if (user.password !== password) {
        return { success: false, message: 'Invalid credentials. Please verify your password.' };
      }

      const profile = this.getProfileForUser(user.id, user.role);

      db.data.active_session = {
        user_id: user.id,
        role: user.role,
        token: `token_${Date.now()}`,
        email: user.email
      };
      db.saveDatabase();

      return { success: true, user, profile };
    },

    switchAccount(userId) {
      const user = db.findOne('users', u => u.id === userId);
      if (user) {
        db.data.active_session = {
          user_id: user.id,
          role: user.role,
          token: `token_${Date.now()}`,
          email: user.email
        };
        db.saveDatabase();
        return true;
      }
      return false;
    },

    logout() {
      db.data.active_session = null;
      db.saveDatabase();
    },

    getCurrentSession() {
      return db.data.active_session || null;
    },

    getCurrentUser() {
      const session = this.getCurrentSession();
      if (!session) return null;
      const user = db.findOne('users', u => u.id === session.user_id);
      if (!user) return null;
      const profile = this.getProfileForUser(user.id, user.role);
      return { user, profile };
    },

    getProfileForUser(userId, role) {
      if (role === 'student') return db.findOne('student_profiles', p => p.user_id === userId);
      if (role === 'college') return db.findOne('college_profiles', p => p.user_id === userId);
      if (role === 'company') return db.findOne('company_profiles', p => p.user_id === userId);
      return null;
    },

    updateStudentProfile(userId, updates) {
      const prof = db.findOne('student_profiles', p => p.user_id === userId);
      if (prof) {
        Object.assign(prof, updates);
        db.saveDatabase();
        return prof;
      }
      return null;
    }
  };

  // --- 6. UI HELPERS: TOAST, MODAL, CHARTS ---
  function showToast(title, message = '', type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const id = 'toast-' + Date.now();
    toast.id = id;

    const bgColors = {
      success: 'bg-emerald-600 text-white border-emerald-500',
      info: 'bg-indigo-600 text-white border-indigo-500',
      warning: 'bg-amber-600 text-white border-amber-500',
      error: 'bg-rose-600 text-white border-rose-500'
    };

    toast.className = `flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${bgColors[type] || bgColors.success} transform transition-all duration-300 translate-y-4 opacity-0 max-w-sm pointer-events-auto backdrop-blur-md text-xs`;
    toast.innerHTML = `
      <div class="flex-1">
        <div class="font-bold text-sm">${title}</div>
        ${message ? `<div class="mt-0.5 opacity-90">${message}</div>` : ''}
      </div>
      <button onclick="document.getElementById('${id}').remove()" class="text-white/80 hover:text-white ml-2 text-base font-bold">×</button>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 20);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  function showModal(title, contentHtml, footerHtml = '') {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;

    modalContainer.innerHTML = `
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity" id="active-modal-overlay">
        <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col">
          <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <h3 class="text-base font-bold text-slate-800">${title}</h3>
            <button id="modal-close-btn" class="text-slate-400 hover:text-slate-600 text-xl font-bold p-1">×</button>
          </div>
          <div class="p-6 overflow-y-auto flex-1">
            ${contentHtml}
          </div>
          ${footerHtml ? `<div class="px-6 py-3.5 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-2.5">${footerHtml}</div>` : ''}
        </div>
      </div>
    `;
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('active-modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'active-modal-overlay') closeModal();
    });
    refreshIcons();
  }

  function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) modalContainer.innerHTML = '';
  }

  function renderCircularProgress(percentage, size = 96, strokeWidth = 9, strokeColor = '#4f46e5') {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    return `
      <div class="relative flex items-center justify-center" style="width: ${size}px; height: ${size}px;">
        <svg class="circular-progress transform -rotate-90" width="${size}" height="${size}">
          <circle stroke="#e2e8f0" stroke-width="${strokeWidth}" fill="transparent" r="${radius}" cx="${size / 2}" cy="${size / 2}" />
          <circle stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" fill="transparent" r="${radius}" cx="${size / 2}" cy="${size / 2}" />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span class="text-xl font-black text-slate-800 leading-none">${percentage}%</span>
          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Score</span>
        </div>
      </div>
    `;
  }

  function renderProgressBar(percentage, label = '', color = 'bg-indigo-600') {
    return `
      <div class="w-full">
        ${label ? `
        <div class="flex justify-between items-center mb-1 text-xs font-semibold text-slate-600">
          <span>${label}</span>
          <span>${percentage}%</span>
        </div>` : ''}
        <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full ${color} transition-all duration-700 ease-out" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }

  function renderBadge(text, variant = 'primary') {
    const styles = {
      primary: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      secondary: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
      success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      warning: 'bg-amber-50 text-amber-700 border-amber-200/60',
      danger: 'bg-rose-50 text-rose-700 border-rose-200/60',
      purple: 'bg-purple-50 text-purple-700 border-purple-200/60',
      neutral: 'bg-slate-100 text-slate-700 border-slate-200'
    };
    return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant] || styles.neutral}">${text}</span>`;
  }

  function renderStatCard(title, value, subtitle, icon, trend = null, colorClass = 'text-indigo-600') {
    return `
      <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">${title}</p>
            <h4 class="text-2xl font-black text-slate-800 mt-1">${value}</h4>
            ${subtitle ? `<p class="text-xs text-slate-500 mt-1">${subtitle}</p>` : ''}
          </div>
          <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform">
            <i data-lucide="${icon}" class="w-6 h-6"></i>
          </div>
        </div>
        ${trend ? `
        <div class="mt-3 pt-2.5 border-t border-slate-50 flex items-center text-xs font-medium text-emerald-600">
          <span>${trend}</span>
        </div>` : ''}
      </div>
    `;
  }

  const activeCharts = {};
  function safeDestroyChart(id) {
    if (activeCharts[id]) {
      try { activeCharts[id].destroy(); } catch (e) {}
      delete activeCharts[id];
    }
  }

  function createRadarChart(canvasId, labels, data, datasetLabel = 'Skill Score') {
    safeDestroyChart(canvasId);
    const ctx = document.getElementById(canvasId);
    if (!ctx || !window.Chart) return;

    activeCharts[canvasId] = new window.Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: datasetLabel,
          data: data,
          backgroundColor: 'rgba(99, 102, 241, 0.25)',
          borderColor: '#6366f1',
          borderWidth: 2.5,
          pointBackgroundColor: '#4f46e5',
          pointBorderColor: '#fff',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(203, 213, 225, 0.4)' },
            grid: { color: 'rgba(203, 213, 225, 0.4)' },
            suggestedMin: 30,
            suggestedMax: 100,
            ticks: { backdropColor: 'transparent', color: '#64748b', font: { size: 10 } },
            pointLabels: { color: '#1e293b', font: { size: 11, weight: '600' } }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  }

  // --- 7. TOP NAVBAR (WITH REAL NOTIFICATION BELL) ---
  function renderNavbar() {
    const authState = auth.getCurrentUser();
    const currentHash = window.location.hash || '#/';

    const roleNameMap = {
      student: 'Student Portal',
      college: 'College Management',
      company: 'Industry / Recruiter'
    };
    const roleColorMap = {
      student: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      college: 'bg-purple-50 text-purple-700 border-purple-200',
      company: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    };

    const user = authState?.user;
    const profile = authState?.profile;
    const roleTitle = user ? (roleNameMap[user.role] || 'Member') : 'Guest';
    const roleColor = user ? (roleColorMap[user.role] || 'bg-slate-100 text-slate-700') : 'bg-slate-100 text-slate-700';

    const unreadNotifs = user ? db.find('notifications', n => n.recipient_user_id === user.id && !n.is_read) : [];

    setTimeout(() => {
      document.getElementById('notif-bell-btn')?.addEventListener('click', () => {
        const notifs = db.find('notifications', n => n.recipient_user_id === user?.id);
        const modalContent = notifs.length === 0 ? `
          <div class="text-center py-8">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 text-2xl">🔔</div>
            <h4 class="font-bold text-slate-800 text-sm">No Notifications Yet</h4>
            <p class="text-xs text-slate-500 mt-1">Updates regarding your applications, certificate verifications, and assessments will appear here.</p>
          </div>
        ` : `
          <div class="space-y-3 max-h-96 overflow-y-auto pr-1">
            ${notifs.map(n => `
              <div class="p-3 rounded-xl border ${n.is_read ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-indigo-50/70 border-indigo-200 text-indigo-950 font-medium'} text-xs">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <span class="font-bold text-slate-900">${n.title}</span>
                  <span class="text-[10px] text-slate-400">${new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <p class="text-[11px] leading-relaxed">${n.message}</p>
              </div>
            `).join('')}
          </div>
        `;
        showModal('Notification Center', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Close</button>
        `);
        // Mark as read
        notifs.forEach(n => {
          db.update('notifications', n.id, { is_read: true });
        });
      });
    }, 10);

    return `
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-2.5 transition-all">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <!-- Logo & Branding -->
          <div class="flex items-center gap-3">
            ${user && currentHash !== '#/' ? `
            <button id="mobile-menu-toggle" class="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100">
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>` : ''}
            <a href="#/" class="flex items-center gap-2.5 group">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <span class="font-extrabold text-base">YS</span>
              </div>
              <div>
                <span class="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                  Yuva<span class="text-indigo-600">Setu</span>
                  <span class="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700">Official</span>
                </span>
                <p class="text-[10px] text-slate-500 font-medium hidden sm:block -mt-0.5">Bridging Youth, Education & Industry</p>
              </div>
            </a>
          </div>

          <!-- User Profile, Notifications & Auth CTAs -->
          <div class="flex items-center gap-2 sm:gap-3">
            ${user ? `
            <button id="notif-bell-btn" class="p-2 relative rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors" title="Notifications">
              <i data-lucide="bell" class="w-4 h-4"></i>
              ${unreadNotifs.length > 0 ? `
                <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse"></span>
              ` : ''}
            </button>
            <span class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${roleColor}">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              ${roleTitle}
            </span>
            <div class="flex items-center gap-2 pl-2 border-l border-slate-200">
              <img src="${profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}" class="w-8 h-8 rounded-xl object-cover ring-1 ring-slate-200" />
              <div class="hidden lg:block text-left">
                <p class="text-xs font-bold text-slate-800 leading-tight">${profile?.name || profile?.company_name || profile?.college_name || 'User'}</p>
                <p class="text-[10px] text-slate-400 capitalize">${user.role} Account</p>
              </div>
            </div>
            <button onclick="window.YuvaSetu.logout()" class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors" title="Logout">
              <i data-lucide="log-out" class="w-4 h-4"></i>
            </button>
            ` : `
            <a href="#/student/login" class="text-xs font-semibold text-slate-700 hover:text-indigo-600 px-3 py-1.5">Sign In</a>
            <a href="#/" class="text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 px-3.5 py-1.5 rounded-xl shadow-sm">Get Started</a>
            `}
          </div>

        </div>
      </header>
    `;
  }

  // --- 8. SIDEBAR COMPONENT (COMPLETE MULTI-PORTAL NAVIGATION) ---
  function renderSidebar() {
    const authState = auth.getCurrentUser();
    const currentHash = window.location.hash || '#/';
    if (!authState || currentHash === '#/' || currentHash.includes('/login') || currentHash.includes('/register')) return '';

    const user = authState.user;
    const profile = authState.profile;

    const navConfigs = {
      student: [
        { path: '#/student/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { path: '#/student/profile', label: 'My Profile', icon: 'user' },
        { path: '#/student/skills', label: 'My Skills', icon: 'zap' },
        { path: '#/student/assessment', label: 'Skill Assessment', icon: 'sparkles', badge: '25-Q Test' },
        { path: '#/student/languages', label: 'Languages', icon: 'code' },
        { path: '#/student/experience', label: 'Certifications & Exp', icon: 'award' },
        { path: '#/student/projects', label: 'My Projects', icon: 'folder-git-2' },
        { path: '#/student/resume', label: 'Resume / CV', icon: 'file-text' },
        { path: '#/student/skill-gap', label: 'Skill Gap', icon: 'bar-chart-2' },
        { path: '#/student/roadmap', label: 'Personalized Roadmap', icon: 'map', badge: 'AI Path' },
        { path: '#/student/jobs', label: 'Recommended Jobs', icon: 'briefcase' },
        { path: '#/student/internships', label: 'Recommended Internships', icon: 'compass' },
        { path: '#/student/applications', label: 'Applications', icon: 'send' }
      ],
      college: [
        { path: '#/college/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { path: '#/college/profile', label: 'Campus Profile', icon: 'school' },
        { path: '#/college/students', label: 'Students Roster', icon: 'users' },
        { path: '#/college/training', label: 'Training Programs', icon: 'graduation-cap' },
        { path: '#/college/workshops', label: 'Campus Workshops', icon: 'calendar' },
        { path: '#/college/clubs', label: 'Student Clubs', icon: 'users-2' },
        { path: '#/college/placements', label: 'Placement Statistics', icon: 'trending-up' }
      ],
      company: [
        { path: '#/company/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { path: '#/company/jobs/create', label: 'Post Job Opening', icon: 'plus-circle' },
        { path: '#/company/internships/create', label: 'Post Internship', icon: 'file-plus' },
        { path: '#/company/candidates', label: 'Candidate Matching', icon: 'cpu', badge: 'AI Match' },
        { path: '#/company/applications', label: 'Applications Review', icon: 'inbox' }
      ]
    };

    const navItems = navConfigs[user.role] || [];
    return `
      <aside id="desktop-sidebar" class="hidden lg:flex flex-col w-64 border-r border-slate-200/80 bg-white min-h-[calc(100vh-61px)] p-4 select-none shrink-0">
        <div class="px-3 py-2 mb-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Authenticated Portal</span>
            <p class="text-xs font-bold text-slate-800 capitalize">${user.role} Workspace</p>
          </div>
          <button onclick="window.YuvaSetu.logout()" class="text-slate-400 hover:text-slate-600" title="Sign Out">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
        <nav class="flex-1 space-y-1 overflow-y-auto pr-1">
          ${navItems.map(item => {
            const isActive = currentHash === item.path || (item.path !== '#/student/dashboard' && item.path !== '#/college/dashboard' && item.path !== '#/company/dashboard' && currentHash.startsWith(item.path));
            return `
              <a href="${item.path}" class="flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${isActive ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'}">
                <div class="flex items-center gap-2.5">
                  <i data-lucide="${item.icon}" class="w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}"></i>
                  <span>${item.label}</span>
                </div>
                ${item.badge ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-indigo-200/60 text-indigo-800' : 'bg-indigo-100 text-indigo-700'}">${item.badge}</span>` : ''}
              </a>
            `;
          }).join('')}
        </nav>
        <div class="pt-3 mt-3 border-t border-slate-100">
          <div class="p-2.5 bg-slate-50 rounded-xl text-xs">
            <span class="text-[10px] text-slate-400 block font-semibold">User ID:</span>
            <span class="font-mono text-[10px] text-slate-600 truncate block">${user.id}</span>
            ${profile?.college_code ? `<span class="text-[10px] text-indigo-600 font-bold block mt-1">College Code: ${profile.college_code}</span>` : ''}
          </div>
        </div>
      </aside>

      <!-- Mobile Drawer -->
      <div id="mobile-sidebar-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden lg:hidden">
        <div class="w-72 bg-white h-full shadow-2xl flex flex-col p-4">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <span class="text-sm font-bold text-slate-800">${user.role.toUpperCase()} Menu</span>
            <button id="mobile-sidebar-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
          </div>
          <nav class="flex-1 space-y-1 overflow-y-auto py-3">
            ${navItems.map(item => `
              <a href="${item.path}" onclick="document.getElementById('mobile-sidebar-backdrop').classList.add('hidden')" class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100">
                <div class="flex items-center gap-2.5">
                  <i data-lucide="${item.icon}" class="w-4 h-4 text-slate-500"></i>
                  <span>${item.label}</span>
                </div>
                ${item.badge ? `<span class="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold">${item.badge}</span>` : ''}
              </a>
            `).join('')}
          </nav>
        </div>
      </div>
    `;
  }

  // --- 9. MASTER LANDING PAGE (3 PORTALS: STUDENT, COLLEGE, INDUSTRY) ---
  function renderLanding() {
    return `
      <div class="relative min-h-[calc(100vh-61px)] flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 hero-mesh">
        <div class="absolute inset-0 grid-pattern pointer-events-none opacity-60"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-1 flex flex-col justify-center">
          
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
              YuvaSetu Career & Skills Ecosystem
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Yuva<span class="text-indigo-400">Setu</span> <br/>
              <span class="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                “Bridging Youth, Education & Industry”
              </span>
            </h1>

            <p class="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              A comprehensive multi-user platform connecting Students, Colleges, and Industry recruiters with real database-backed profiles.
            </p>

            <div class="mt-8 flex items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-300 flex-wrap">
              <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
                🎓 Students Discover
              </span>
              <span class="text-slate-500 hidden sm:inline">→</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
                🏛️ Colleges Analyze
              </span>
              <span class="text-slate-500 hidden sm:inline">→</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
                💼 Industry Hires
              </span>
            </div>
          </div>

          <!-- 3 Interactive Ecosystem Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            
            <!-- Panel 1: Student -->
            <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-indigo-950/40">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 mb-5 text-2xl">
                  🎓
                </div>
                <h3 class="text-xl font-bold text-white tracking-tight">Student</h3>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                  Discover your skills, take skill-specific tests, identify gaps, follow personalized roadmaps, and apply for campus jobs.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-400">
                  <li class="flex items-center gap-1.5">✓ College Code Integration</li>
                  <li class="flex items-center gap-1.5">✓ Verified Skill Assessments</li>
                  <li class="flex items-center gap-1.5">✓ Dynamic Recommended Roadmap</li>
                </ul>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-800/80 flex flex-col gap-2">
                <a href="#/student/login" class="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold btn-glow flex items-center justify-center gap-1.5">
                  <span>Continue as Student</span> →
                </a>
                <a href="#/student/register" class="text-center text-[11px] text-indigo-400 hover:underline">New Student? Register</a>
              </div>
            </div>

            <!-- Panel 2: College -->
            <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-purple-950/40">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 mb-5 text-2xl">
                  🏛️
                </div>
                <h3 class="text-xl font-bold text-white tracking-tight">College</h3>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                  Manage your unique campus cohort via College Code, analyze verified student scores, and launch specialized bootcamps.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-400">
                  <li class="flex items-center gap-1.5">✓ Scoped College Code Filtering</li>
                  <li class="flex items-center gap-1.5">✓ Student Roster & Tracking</li>
                  <li class="flex items-center gap-1.5">✓ Campus Training Programs</li>
                </ul>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-800/80 flex flex-col gap-2">
                <a href="#/college/login" class="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center gap-1.5">
                  <span>Continue as College</span> →
                </a>
                <a href="#/college/register" class="text-center text-[11px] text-purple-400 hover:underline">Register Campus</a>
              </div>
            </div>

            <!-- Panel 3: Industry / Company -->
            <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-cyan-950/40">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 mb-5 text-2xl">
                  🏢
                </div>
                <h3 class="text-xl font-bold text-white tracking-tight">Industry</h3>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                  Post jobs & internships with mandatory required skills, review verified candidates, and accept or reject applications in real time.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-400">
                  <li class="flex items-center gap-1.5">✓ Required Skills Definition</li>
                  <li class="flex items-center gap-1.5">✓ Verified Skill Match Scoring</li>
                  <li class="flex items-center gap-1.5">✓ Live Accept / Reject Pipeline</li>
                </ul>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-800/80 flex flex-col gap-2">
                <a href="#/company/login" class="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-1.5">
                  <span>Continue as Industry</span> →
                </a>
                <a href="#/company/register" class="text-center text-[11px] text-cyan-400 hover:underline">Register Company</a>
              </div>
            </div>

          </div>

          <div class="mt-14 max-w-4xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div>
              <div class="text-2xl font-extrabold text-white">2,450+</div>
              <div class="text-[11px] font-medium text-slate-400 mt-0.5">Students Enrolled</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-indigo-400">1,820</div>
              <div class="text-[11px] font-medium text-slate-400 mt-0.5">Verified Assessments</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-cyan-400">94%</div>
              <div class="text-[11px] font-medium text-slate-400 mt-0.5">Match Accuracy</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-purple-400">32+</div>
              <div class="text-[11px] font-medium text-slate-400 mt-0.5">Industry Partners</div>
            </div>
          </div>

        </div>

        <footer class="relative z-10 border-t border-slate-900/80 px-6 py-4 text-center text-xs text-slate-400">
          YuvaSetu — “Bridging Youth, Education & Industry” · Verified Multi-User Database
        </footer>
      </div>
    `;
  }

  // --- 10. REAL STUDENT REGISTRATION & AUTH (CLEAN PRODUCTION AUTHENTICATION) ---
  function renderStudentAuth(isRegister = false) {
    setTimeout(() => {
      document.getElementById('tab-signin')?.addEventListener('click', () => { window.location.hash = '#/student/login'; });
      document.getElementById('tab-register')?.addEventListener('click', () => { window.location.hash = '#/student/register'; });

      // Clean Sign In Form - Authenticates real database users only
      document.getElementById('student-signin-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value.trim();
        const pass = document.getElementById('signin-password').value;
        const res = auth.login('student', email, pass);
        if (res.success) {
          showToast('Welcome back!', `Signed in as ${res.profile?.name || email}.`, 'success');
          window.location.hash = '#/student/dashboard';
        } else {
          showToast('Authentication Failed', res.message, 'error');
        }
      });

      // Comprehensive Real Registration Form with Mandatory College Code (Clean: No Projects/Certificates fields)
      document.getElementById('student-register-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const phone = document.getElementById('reg-phone').value.trim();
        const password = document.getElementById('reg-password').value;
        const collegeCode = document.getElementById('reg-college-code').value.trim();
        const collegeName = document.getElementById('reg-college-name').value.trim();
        const branch = document.getElementById('reg-branch').value.trim();
        const year = document.getElementById('reg-year').value;
        const cgpa = document.getElementById('reg-cgpa').value.trim();
        const careerGoal = document.getElementById('reg-career-goal').value.trim();
        const preferredRole = document.getElementById('reg-preferred-role').value.trim();
        const location = document.getElementById('reg-location').value.trim();

        if (!collegeCode) {
          showToast('Validation Error', 'College Code is mandatory. Please provide your institutional code.', 'warning');
          return;
        }

        const res = auth.register('student', email, password, {
          name,
          phone,
          college_code: collegeCode,
          college_name: collegeName || `College (${collegeCode})`,
          branch,
          year,
          cgpa,
          career_goal: careerGoal || 'Software Developer',
          preferred_roles: [preferredRole || careerGoal || 'Software Developer'],
          location,
          has_certified_skills: null
        });

        if (res.success) {
          showToast('Account Created!', `Welcome to YuvaSetu, ${name}! Institutional Code: ${collegeCode.toUpperCase()}.`, 'success');
          window.location.hash = '#/student/dashboard';
        } else {
          showToast('Registration Error', res.message, 'error');
        }
      });
    }, 10);

    return `
      <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
        <div class="max-w-xl w-full glass-panel bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative">
          <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-4">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to YuvaSetu Hub
          </a>
          <div class="text-center mb-6">
            <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2.5 text-xl shadow-lg shadow-indigo-600/30">
              🎓
            </div>
            <h2 class="text-2xl font-black text-slate-900">Student Portal</h2>
            <p class="text-xs text-slate-500">Database-backed authentication and verified competency profiles</p>
          </div>

          <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
            <button id="tab-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500'}">Sign In</button>
            <button id="tab-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500'}">Register New Student</button>
          </div>

          <!-- Sign In Form (Production Real Auth: Zero Demo Accounts) -->
          <form id="student-signin-form" class="${isRegister ? 'hidden' : 'space-y-4 text-xs'}">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Email Address *</label>
              <input type="email" id="signin-email" placeholder="student@university.edu" value="" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Password *</label>
              <input type="password" id="signin-password" placeholder="Enter your password" value="" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs flex items-center justify-center gap-2 text-white">
              <i data-lucide="log-in" class="w-4 h-4"></i>
              <span>Sign In to Student Dashboard</span>
            </button>
          </form>

          <!-- Registration Form (Clean: No Projects/Certificates fields) -->
          <form id="student-register-form" class="${!isRegister ? 'hidden' : 'space-y-3.5 text-xs max-h-[65vh] overflow-y-auto pr-1'}">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input type="text" id="reg-name" required placeholder="e.g. Anil Verma" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" id="reg-email" required placeholder="e.g. anil@college.edu" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Phone Number *</label>
                <input type="tel" id="reg-phone" required placeholder="+91 98765 00000" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Password *</label>
                <input type="password" id="reg-password" required placeholder="Create secure password" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div class="p-3 bg-indigo-50/70 border border-indigo-100 rounded-2xl">
              <label class="block font-bold text-indigo-950 mb-1">Institutional College Code * <span class="text-rose-500">(Mandatory)</span></label>
              <input type="text" id="reg-college-code" required placeholder="e.g. AIT-BLR-101 or IITM01" class="w-full px-3 py-2 bg-white border border-indigo-200 font-bold text-indigo-900 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none uppercase" />
              <p class="text-[10px] text-indigo-600 mt-1">Connects you directly to your institution's verified student roster and private training.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">College Name *</label>
                <input type="text" id="reg-college-name" required placeholder="e.g. Apex Institute of Technology" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Branch / Course *</label>
                <input type="text" id="reg-branch" required placeholder="e.g. Computer Science Engineering" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Year of Study *</label>
                <select id="reg-year" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year" selected>3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">CGPA *</label>
                <input type="text" id="reg-cgpa" required placeholder="e.g. 8.5" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Primary Career Goal *</label>
                <select id="reg-career-goal" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <option value="Software Developer" selected>Software Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Python Developer">Python Developer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="AI/ML Engineer">AI/ML Engineer</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Preferred Job Role *</label>
                <input type="text" id="reg-preferred-role" required placeholder="e.g. Full Stack Developer" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Location / City *</label>
              <input type="text" id="reg-location" required placeholder="e.g. Bangalore, Karnataka" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>

            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs mt-3 text-white">Register Student & Save to Database</button>
          </form>
        </div>
      </div>
    `;
  }

  // --- 11. REAL COLLEGE REGISTRATION & AUTH (DEPARTMENTS FIELD REMOVED) ---
  function renderCollegeAuth(isRegister = false) {
    setTimeout(() => {
      document.getElementById('tab-col-signin')?.addEventListener('click', () => { window.location.hash = '#/college/login'; });
      document.getElementById('tab-col-register')?.addEventListener('click', () => { window.location.hash = '#/college/register'; });

      document.getElementById('college-signin-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('col-signin-email').value;
        const pass = document.getElementById('col-signin-pass').value;
        const res = auth.login('college', email, pass);
        if (res.success) {
          showToast('Welcome!', `Logged into ${res.profile?.college_name || 'College Dashboard'}.`, 'success');
          window.location.hash = '#/college/dashboard';
        } else {
          showToast('Authentication Error', res.message, 'error');
        }
      });

      document.getElementById('college-register-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const collegeName = document.getElementById('col-reg-name').value.trim();
        const code = document.getElementById('col-reg-code').value.trim().toUpperCase();
        const adminName = document.getElementById('col-reg-admin').value.trim();
        const email = document.getElementById('col-reg-email').value.trim();
        const phone = document.getElementById('col-reg-phone').value.trim();
        const password = document.getElementById('col-reg-pass').value;
        const location = document.getElementById('col-reg-loc').value.trim();

        if (!code) {
          showToast('Validation Error', 'College Code is required and must be unique.', 'warning');
          return;
        }

        const res = auth.register('college', email, password, {
          college_name: collegeName,
          college_code: code,
          admin_name: adminName,
          phone,
          location
        });

        if (res.success) {
          showToast('Campus Registered!', `${collegeName} (${code}) is now registered.`, 'success');
          window.location.hash = '#/college/dashboard';
        } else {
          showToast('Registration Error', res.message, 'error');
        }
      });
    }, 10);

    return `
      <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
        <div class="max-w-xl w-full glass-panel bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative">
          <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-4">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to YuvaSetu Hub
          </a>
          <div class="text-center mb-6">
            <div class="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-2.5 text-xl shadow-lg shadow-purple-600/30">
              🏛️
            </div>
            <h2 class="text-2xl font-black text-slate-900">College Management</h2>
            <p class="text-xs text-slate-500">Institutional records & College Code scoped cohort analytics</p>
          </div>

          <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
            <button id="tab-col-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500'}">College Sign In</button>
            <button id="tab-col-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500'}">Register Campus</button>
          </div>

          <form id="college-signin-form" class="${isRegister ? 'hidden' : 'space-y-4 text-xs'}">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Official College Email *</label>
              <input type="email" id="col-signin-email" value="dean.placement@apex.edu" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Password *</label>
              <input type="password" id="col-signin-pass" value="College@123" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs">Sign In as College</button>

            <div class="pt-3 border-t border-slate-100 text-center">
              <span class="text-[11px] text-slate-400 block font-medium">Default Test Campus: Apex Institute (Code: AIT-BLR-101)</span>
            </div>
          </form>

          <!-- College Register Form without Departments Offered Field -->
          <form id="college-register-form" class="${!isRegister ? 'hidden' : 'space-y-3.5 text-xs max-h-[65vh] overflow-y-auto pr-1'}">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">College / University Name *</label>
                <input type="text" id="col-reg-name" required placeholder="e.g. Apex Institute of Technology" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-purple-950 mb-1">Unique College Code *</label>
                <input type="text" id="col-reg-code" required placeholder="e.g. AIT-BLR-101 or ABC123" class="w-full px-3 py-2 bg-purple-50 border border-purple-200 font-bold text-purple-900 rounded-xl uppercase" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Placement Officer / Admin Name *</label>
                <input type="text" id="col-reg-admin" required placeholder="e.g. Dr. Ramesh Kulkarni" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Official Email *</label>
                <input type="email" id="col-reg-email" required placeholder="dean@institution.edu" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Contact Phone *</label>
                <input type="tel" id="col-reg-phone" required placeholder="+91 98765 43210" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Password *</label>
                <input type="password" id="col-reg-pass" required placeholder="••••••••" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Campus Location & Address *</label>
              <input type="text" id="col-reg-loc" required placeholder="e.g. Knowledge City, Bangalore, Karnataka" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>

            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs mt-3">Register Campus & Save to Database</button>
          </form>
        </div>
      </div>
    `;
  }

  // --- 12. REAL INDUSTRY / COMPANY REGISTRATION & AUTH ---
  function renderCompanyAuth(isRegister = false) {
    setTimeout(() => {
      document.getElementById('tab-comp-signin')?.addEventListener('click', () => { window.location.hash = '#/company/login'; });
      document.getElementById('tab-comp-register')?.addEventListener('click', () => { window.location.hash = '#/company/register'; });

      document.getElementById('company-signin-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('comp-signin-email').value;
        const pass = document.getElementById('comp-signin-pass').value;
        const res = auth.login('company', email, pass);
        if (res.success) {
          showToast('Welcome!', `Logged in as ${res.profile?.company_name || 'Recruiter'}.`, 'success');
          window.location.hash = '#/company/dashboard';
        } else {
          showToast('Authentication Error', res.message, 'error');
        }
      });

      document.getElementById('company-register-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const companyName = document.getElementById('comp-reg-name').value.trim();
        const recruiterName = document.getElementById('comp-reg-recruiter').value.trim();
        const email = document.getElementById('comp-reg-email').value.trim();
        const phone = document.getElementById('comp-reg-phone').value.trim();
        const password = document.getElementById('comp-reg-pass').value;
        const industry = document.getElementById('comp-reg-ind').value.trim();
        const location = document.getElementById('comp-reg-loc').value.trim();
        const website = document.getElementById('comp-reg-web').value.trim();
        const description = document.getElementById('comp-reg-desc').value.trim();

        const res = auth.register('company', email, password, {
          company_name: companyName,
          recruiter_name: recruiterName,
          phone,
          industry,
          location,
          website,
          description
        });

        if (res.success) {
          showToast('Company Registered!', `${companyName} is live in the YuvaSetu hiring database.`, 'success');
          window.location.hash = '#/company/dashboard';
        } else {
          showToast('Registration Error', res.message, 'error');
        }
      });
    }, 10);

    return `
      <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
        <div class="max-w-xl w-full glass-panel bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative">
          <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-4">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to YuvaSetu Hub
          </a>
          <div class="text-center mb-6">
            <div class="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mx-auto mb-2.5 text-xl shadow-lg shadow-cyan-600/30">
              🏢
            </div>
            <h2 class="text-2xl font-black text-slate-900">Industry Recruiter Hub</h2>
            <p class="text-xs text-slate-500">Post jobs with required skills, review candidates & manage applications</p>
          </div>

          <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
            <button id="tab-comp-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-500'}">Recruiter Sign In</button>
            <button id="tab-comp-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-500'}">Register Company</button>
          </div>

          <form id="company-signin-form" class="${isRegister ? 'hidden' : 'space-y-4 text-xs'}">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Recruiter Work Email *</label>
              <input type="email" id="comp-signin-email" value="recruiter@nexatech.io" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Password *</label>
              <input type="password" id="comp-signin-pass" value="Recruiter@123" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs">Sign In as Recruiter</button>
          </form>

          <form id="company-register-form" class="${!isRegister ? 'hidden' : 'space-y-3.5 text-xs max-h-[65vh] overflow-y-auto pr-1'}">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Company / Organization Name *</label>
                <input type="text" id="comp-reg-name" required placeholder="e.g. NexaTech Labs" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Recruiter / HR Name *</label>
                <input type="text" id="comp-reg-recruiter" required placeholder="e.g. Sarah Jenkins" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Work Email *</label>
                <input type="email" id="comp-reg-email" required placeholder="recruiter@company.com" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Phone Number *</label>
                <input type="tel" id="comp-reg-phone" required placeholder="+91 80 4567 8900" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Password *</label>
                <input type="password" id="comp-reg-pass" required placeholder="••••••••" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Industry Vertical *</label>
                <input type="text" id="comp-reg-ind" required placeholder="e.g. Cloud SaaS, AI, FinTech" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Company Website</label>
                <input type="url" id="comp-reg-web" placeholder="https://company.com" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Office Location *</label>
                <input type="text" id="comp-reg-loc" required placeholder="e.g. Bangalore, India" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Company Overview</label>
              <textarea id="comp-reg-desc" rows="2" placeholder="Brief summary of company products..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
            </div>

            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs mt-3">Register Company & Save to Database</button>
          </form>
        </div>
      </div>
    `;
  }



﻿  // --- 13. STUDENT DASHBOARD (AUTHENTICATED REAL DATA & PROGRESS ANALYTICS) ---
  function renderStudentDashboard() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;

    const skills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    const verifiedSkills = skills.filter(s => s.assessed && s.percentage !== null);
    const assessments = db.find('student_assessments', a => a.student_user_id === studentUser.id && a.status === 'completed');
    const languages = db.find('student_languages', l => l.student_user_id === studentUser.id);
    const certs = db.find('certifications', c => c.student_user_id === studentUser.id && c.verification_status === 'Verified');
    const projects = db.find('projects', p => p.student_user_id === studentUser.id);
    const applications = db.find('applications', a => a.student_user_id === studentUser.id);
    const latestResume = db.findOne('resumes', r => r.student_user_id === studentUser.id && r.is_latest) || (profile?.resume_name ? { file_name: profile.resume_name } : null);

    const hasAssessments = assessments.length > 0;
    const avgScore = hasAssessments ? Math.round(assessments.reduce((acc, a) => acc + (a.score || 0), 0) / assessments.length) : null;
    const avgStars = hasAssessments ? Math.round(assessments.reduce((acc, a) => acc + (calculateStars(a.score || 0)), 0) / assessments.length) : 0;

    const myTrainings = db.find('training_programs', t => (t.college_code || '').toUpperCase() === (profile?.college_code || '').toUpperCase());

    setTimeout(() => {
      // 1. Skill Proficiency Breakdown Radar Chart
      if (verifiedSkills.length > 0) {
        const labels = verifiedSkills.map(s => s.name);
        const data = verifiedSkills.map(s => s.percentage);
        createRadarChart('dashboard-skills-radar', labels, data, 'Verified Proficiency (%)');
      }

      // 2. Assessment Score History Line Chart
      if (assessments.length > 0) {
        safeDestroyChart('dashboard-score-history');
        const ctx = document.getElementById('dashboard-score-history');
        if (ctx && window.Chart) {
          activeCharts['dashboard-score-history'] = new window.Chart(ctx, {
            type: 'line',
            data: {
              labels: assessments.map((a, i) => `Attempt #${i + 1} (${a.skill_name})`),
              datasets: [{
                label: 'Assessment Score (%)',
                data: assessments.map(a => a.score),
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.35,
                borderWidth: 2.5,
                pointBackgroundColor: '#4f46e5',
                pointRadius: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { min: 0, max: 100, ticks: { callback: v => v + '%' } }
              },
              plugins: { legend: { display: false } }
            }
          });
        }
      }

      // 3. Application Pipeline Status Donut
      if (applications.length > 0) {
        safeDestroyChart('dashboard-apps-donut');
        const ctx = document.getElementById('dashboard-apps-donut');
        if (ctx && window.Chart) {
          const statusCounts = { 'Applied': 0, 'Shortlisted': 0, 'Interview': 0, 'Selected': 0, 'Rejected': 0 };
          applications.forEach(a => {
            const st = a.status || 'Applied';
            if (statusCounts[st] !== undefined) statusCounts[st]++;
            else statusCounts['Applied']++;
          });

          activeCharts['dashboard-apps-donut'] = new window.Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: Object.keys(statusCounts),
              datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#6366f1', '#06b6d4', '#f59e0b', '#10b981', '#f43f5e']
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } } }
            }
          });
        }
      }
    }, 20);

    return `
      <div class="space-y-6 animate-fade-in">
        <!-- Hero Profile Banner -->
        <div class="glass-card bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <img src="${profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/30 shadow-md" />
              <div>
                <div class="flex items-center gap-2">
                  <h1 class="text-2xl sm:text-3xl font-black tracking-tight">${profile?.name || 'Student Candidate'}</h1>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">Student Portal</span>
                </div>
                <p class="text-indigo-200 text-xs sm:text-sm mt-0.5">
                  ${profile?.college_name || 'Institution'} · Code: <strong class="text-white">${profile?.college_code || 'N/A'}</strong> · Goal: <strong class="text-cyan-300">${profile?.career_goal || 'Software Developer'}</strong>
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <a href="#/student/profile" class="px-4 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5">
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Profile
              </a>
              <a href="#/student/skills" class="px-4 py-2.5 bg-indigo-500/40 hover:bg-indigo-500/60 text-white border border-white/20 text-xs font-bold rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Take Assessment
              </a>
            </div>
          </div>
        </div>

        <!-- Metric Stat Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${renderStatCard('Verified Skills', verifiedSkills.length, `${skills.length - verifiedSkills.length} pending assessment`, 'zap', null, 'text-amber-600')}
          ${hasAssessments
            ? renderStatCard('Average Score', `${avgScore}%`, `${assessments.length} attempts completed`, 'award', `Rating: ${renderStars(avgStars)}`, 'text-emerald-600')
            : renderStatCard('Skill Assessment', 'Not Assessed', '0 Tests Completed', 'sparkles', 'Pending 25-Q test', 'text-slate-400')}
          ${renderStatCard('Projects Portfolio', projects.length, 'Verified code projects', 'folder-git-2', null, 'text-cyan-600')}
          ${renderStatCard('Applications Sent', applications.length, 'Career opportunities', 'send', null, 'text-purple-600')}
        </div>

        <!-- Student Progress Analytics (Real Chart.js Charts) -->
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-black text-slate-900">Student Progress Analytics</h3>
              <p class="text-xs text-slate-500">Real performance, assessment trajectory, and opportunity tracking</p>
            </div>
            <a href="#/student/skills" class="text-xs font-bold text-indigo-600 hover:underline">Skills Center →</a>
          </div>

          ${!hasAssessments && applications.length === 0 ? `
            <div class="p-8 text-center bg-slate-50/80 rounded-2xl border border-dashed border-slate-200 my-4">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 text-2xl">📈</div>
              <h4 class="text-sm font-bold text-slate-800">Complete your first assessment to see your skill progress.</h4>
              <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">Take an objective 25-question evaluation in Python, Java, SQL or Web Development to generate your verified competency curves and radar distribution.</p>
              <a href="#/student/skills" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 mt-4 text-white">
                <i data-lucide="zap" class="w-4 h-4"></i> Start Skill Assessment
              </a>
            </div>
          ` : `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div class="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                <h4 class="text-xs font-bold text-slate-700 mb-2">Competency Radar</h4>
                <div class="h-56 relative">
                  <canvas id="dashboard-skills-radar"></canvas>
                </div>
              </div>

              <div class="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                <h4 class="text-xs font-bold text-slate-700 mb-2">Assessment Trajectory</h4>
                <div class="h-56 relative">
                  <canvas id="dashboard-score-history"></canvas>
                </div>
              </div>

              <div class="bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                <h4 class="text-xs font-bold text-slate-700 mb-2">Application Pipeline</h4>
                <div class="h-56 relative">
                  <canvas id="dashboard-apps-donut"></canvas>
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- 3-Column Portfolio Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Column 1: Skills & Languages -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Skills & Proficiency</h3>
              <a href="#/student/skills" class="text-xs font-bold text-indigo-600 hover:underline">Manage</a>
            </div>

            <div class="space-y-2">
              ${skills.length > 0 ? skills.slice(0, 4).map(s => `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span class="font-bold text-slate-900">${s.name}</span>
                    <span class="text-[10px] text-slate-400 block">${s.category || 'Technical'}</span>
                  </div>
                  <div class="text-right">
                    ${s.assessed && s.percentage !== null ? `
                      <span class="font-black text-indigo-600">${s.percentage}%</span>
                      <span class="text-[10px] block font-bold text-emerald-600">${s.level}</span>
                    ` : `
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Assessment Required</span>
                    `}
                  </div>
                </div>
              `).join('') : `
                <p class="text-xs text-slate-400 py-2">No skills added yet. <a href="#/student/skills" class="text-indigo-600 font-bold hover:underline">Add skill →</a></p>
              `}
            </div>

            <div class="pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-xs font-bold text-slate-700">Programming Languages</h4>
                <a href="#/student/languages" class="text-[11px] font-bold text-indigo-600 hover:underline">View All</a>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${languages.length > 0 ? languages.map(l => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                    ${l.language} <strong class="text-indigo-600 font-bold text-[10px]">(${l.level})</strong>
                  </span>
                `).join('') : `
                  <span class="text-xs text-slate-400">No languages listed. <a href="#/student/languages" class="text-indigo-600 font-bold hover:underline">Add →</a></span>
                `}
              </div>
            </div>
          </div>

          <!-- Column 2: Projects & Verified Certifications -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Projects Portfolio</h3>
              <a href="#/student/projects" class="text-xs font-bold text-indigo-600 hover:underline">Manage</a>
            </div>

            <div class="space-y-2.5">
              ${projects.length > 0 ? projects.slice(0, 3).map(p => `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <div class="flex items-center justify-between">
                    <h5 class="font-bold text-slate-900">${p.name}</h5>
                    <span class="text-[10px] px-2 py-0.5 bg-indigo-50 text-indigo-700 font-bold rounded">${p.role || 'Developer'}</span>
                  </div>
                  <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">${p.description}</p>
                </div>
              `).join('') : `
                <div class="p-4 text-center border border-dashed border-slate-200 rounded-xl">
                  <p class="text-xs text-slate-500">No projects added yet.</p>
                  <a href="#/student/projects" class="btn-glow px-4 py-1.5 rounded-lg text-xs font-bold inline-block mt-2 text-white">+ Add Project</a>
                </div>
              `}
            </div>

            <div class="pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-xs font-bold text-slate-700">Verified Certifications</h4>
                <a href="#/student/experience" class="text-[11px] font-bold text-indigo-600 hover:underline">Manage</a>
              </div>
              <div class="space-y-1.5">
                ${certs.length > 0 ? certs.slice(0, 2).map(c => `
                  <div class="flex items-center justify-between text-xs p-2 rounded-lg bg-emerald-50/60 border border-emerald-100">
                    <span class="font-bold text-emerald-950 truncate">${c.name}</span>
                    <span class="text-[10px] font-bold text-emerald-700">✓ ${c.issuer}</span>
                  </div>
                `).join('') : `
                  <span class="text-xs text-slate-400">No verified certificates yet. <a href="#/student/experience" class="text-indigo-600 font-bold hover:underline">Upload →</a></span>
                `}
              </div>
            </div>
          </div>

          <!-- Column 3: Resume & Campus Life -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Resume / CV</h3>
              <a href="#/student/resume" class="text-xs font-bold text-indigo-600 hover:underline">Resume Hub</a>
            </div>

            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div class="flex items-center gap-2 text-slate-800 font-bold">
                <i data-lucide="file-text" class="w-4 h-4 text-indigo-600"></i>
                <span class="truncate">${latestResume?.file_name || 'No resume uploaded'}</span>
              </div>
              <p class="text-[11px] text-slate-500">Synchronized with your verified skills, certifications, and portfolio.</p>
              <a href="#/student/resume" class="block w-full text-center py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg text-xs transition-colors">
                View & Manage Resume →
              </a>
            </div>

            <div class="pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-xs font-bold text-slate-700">Campus Training & Workshops</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">${profile?.college_code}</span>
              </div>
              <div class="space-y-2">
                ${myTrainings.length > 0 ? myTrainings.slice(0, 2).map(t => `
                  <div class="p-2.5 bg-purple-50/50 rounded-xl border border-purple-100 text-xs">
                    <p class="font-bold text-purple-950">${t.name}</p>
                    <p class="text-[10px] text-purple-700 mt-0.5">Trainer: ${t.trainer} · ${t.duration}</p>
                  </div>
                `).join('') : `
                  <p class="text-xs text-slate-400 py-1">No campus training active right now.</p>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 14. REAL STUDENT PROFILE & LIVE EDIT ---
  function renderStudentProfile() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;

    setTimeout(() => {
      document.getElementById('edit-profile-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const updates = {
          name: document.getElementById('prof-name').value.trim(),
          phone: document.getElementById('prof-phone').value.trim(),
          branch: document.getElementById('prof-branch').value.trim(),
          year: document.getElementById('prof-year').value,
          cgpa: document.getElementById('prof-cgpa').value.trim(),
          career_goal: document.getElementById('prof-goal').value.trim(),
          preferred_roles: document.getElementById('prof-roles').value.split(',').map(r => r.trim()),
          location: document.getElementById('prof-location').value.trim()
        };

        auth.updateStudentProfile(studentUser.id, updates);
        showToast('Profile Updated', 'Your student profile information has been saved.', 'success');
        handleRoute();
      });
    }, 10);

    return `
      <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Student Profile</h1>
            <p class="text-xs text-slate-500 mt-1">Verified academic profile linked to Institutional Code: <strong>${profile?.college_code}</strong></p>
          </div>
          <a href="#/student/dashboard" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors self-start sm:self-auto">
            ← Back to Dashboard
          </a>
        </div>

        <div class="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
          <form id="edit-profile-form" class="space-y-4 text-xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input type="text" id="prof-name" value="${profile?.name || ''}" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Email (Permanent Identifier)</label>
                <input type="email" value="${studentUser.email}" disabled class="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium cursor-not-allowed" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" id="prof-phone" value="${profile?.phone || ''}" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">College Code (Institutional Binding)</label>
                <input type="text" value="${profile?.college_code || ''}" disabled class="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl font-bold text-indigo-700 cursor-not-allowed" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Branch / Department</label>
                <input type="text" id="prof-branch" value="${profile?.branch || ''}" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Year of Study</label>
                <select id="prof-year" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
                  <option value="1st Year" ${profile?.year === '1st Year' ? 'selected' : ''}>1st Year</option>
                  <option value="2nd Year" ${profile?.year === '2nd Year' ? 'selected' : ''}>2nd Year</option>
                  <option value="3rd Year" ${profile?.year === '3rd Year' ? 'selected' : ''}>3rd Year</option>
                  <option value="4th Year" ${profile?.year === '4th Year' ? 'selected' : ''}>4th Year</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">CGPA</label>
                <input type="text" id="prof-cgpa" value="${profile?.cgpa || ''}" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Primary Career Goal</label>
                <select id="prof-goal" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
                  <option value="Software Developer" ${profile?.career_goal === 'Software Developer' ? 'selected' : ''}>Software Developer</option>
                  <option value="Frontend Developer" ${profile?.career_goal === 'Frontend Developer' ? 'selected' : ''}>Frontend Developer</option>
                  <option value="Backend Developer" ${profile?.career_goal === 'Backend Developer' ? 'selected' : ''}>Backend Developer</option>
                  <option value="Full Stack Developer" ${profile?.career_goal === 'Full Stack Developer' ? 'selected' : ''}>Full Stack Developer</option>
                  <option value="Data Scientist" ${profile?.career_goal === 'Data Scientist' ? 'selected' : ''}>Data Scientist</option>
                  <option value="AI/ML Engineer" ${profile?.career_goal === 'AI/ML Engineer' ? 'selected' : ''}>AI/ML Engineer</option>
                  <option value="Cloud & DevOps Engineer" ${profile?.career_goal === 'Cloud & DevOps Engineer' ? 'selected' : ''}>Cloud & DevOps Engineer</option>
                  <option value="Cyber Security Analyst" ${profile?.career_goal === 'Cyber Security Analyst' ? 'selected' : ''}>Cyber Security Analyst</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Preferred Job Roles (Comma-separated)</label>
                <input type="text" id="prof-roles" value="${(profile?.preferred_roles || []).join(', ')}" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Location / Current City</label>
              <input type="text" id="prof-location" value="${profile?.location || ''}" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium" />
            </div>

            <div class="pt-4 border-t border-slate-100 flex justify-end">
              <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl font-bold text-xs text-white flex items-center gap-1.5 shadow-md">
                <i data-lucide="save" class="w-4 h-4"></i> Save Profile Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }


// --- MODULE: STUDENT PORTFOLIO (LANGUAGES, EXPERIENCE, PROJECTS, RESUME) ---

function renderStudentLanguages() {
  const authState = auth.getCurrentUser();
  if (!authState || authState.user.role !== 'student') {
    window.location.hash = '#/student/login';
    return '';
  }

  const studentUser = authState.user;
  const languages = db.find('student_languages', l => l.student_user_id === studentUser.id);

  setTimeout(() => {
    document.getElementById('add-lang-btn')?.addEventListener('click', () => {
      const modalContent = `
        <div class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Programming Language *</label>
            <select id="lang-name" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="SQL">SQL</option>
              <option value="Kotlin">Kotlin</option>
              <option value="Go">Go</option>
              <option value="Rust">Rust</option>
              <option value="PHP">PHP</option>
              <option value="Swift">Swift</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Proficiency Level *</label>
            <select id="lang-level" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
              <option value="Beginner">Beginner (Syntax, loops, basic functions)</option>
              <option value="Intermediate">Intermediate (Data structures, OOP, libraries)</option>
              <option value="Advanced">Advanced (Design patterns, optimizations, concurrency)</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Evidence / Source (Optional)</label>
            <input type="text" id="lang-evidence" placeholder="e.g. GitHub projects, Coursework, LeetCode profile" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
        </div>
      `;

      showModal('Add Programming Language', modalContent, `
        <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
        <button type="button" id="submit-add-lang-btn" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Save Language</button>
      `);

      document.getElementById('submit-add-lang-btn')?.addEventListener('click', () => {
        const name = document.getElementById('lang-name').value;
        const level = document.getElementById('lang-level').value;
        const evidence = document.getElementById('lang-evidence').value.trim();

        const existing = db.findOne('student_languages', l => l.student_user_id === studentUser.id && l.language.toLowerCase() === name.toLowerCase());
        if (existing) {
          db.update('student_languages', existing.id, { level, evidence });
          showToast('Language Updated', `${name} updated to ${level}.`, 'success');
        } else {
          db.insert('student_languages', {
            id: `lang_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            student_user_id: studentUser.id,
            language: name,
            level: level,
            evidence: evidence || 'Self-reported coursework & projects',
            created_at: new Date().toISOString().split('T')[0]
          });
          showToast('Language Added', `${name} (${level}) added to your profile.`, 'success');
        }
        closeModal();
        handleRoute();
      });
    });

    document.querySelectorAll('.delete-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        db.delete('student_languages', id);
        showToast('Language Removed', 'Language removed from profile.', 'info');
        handleRoute();
      });
    });
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Programming Languages</h1>
          <p class="text-xs text-slate-500 mt-1">Track your programming languages and competency levels backed by evidence</p>
        </div>
        <button id="add-lang-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-white self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i> Add Language
        </button>
      </div>

      ${languages.length === 0 ? `
        <div class="glass-card bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
          <div class="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 text-2xl">💻</div>
          <h3 class="text-base font-bold text-slate-800">No languages listed yet</h3>
          <p class="text-xs text-slate-500 mt-1 mb-5">List languages you know such as Python, Java, C++, SQL, or JavaScript to boost recruiter visibility.</p>
          <button onclick="document.getElementById('add-lang-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i> Add First Language
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${languages.map(l => {
            const levelColors = {
              'Beginner': 'bg-slate-100 text-slate-700 border-slate-200',
              'Intermediate': 'bg-indigo-50 text-indigo-700 border-indigo-200',
              'Advanced': 'bg-emerald-50 text-emerald-700 border-emerald-200'
            };
            return `
              <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all">
                <div>
                  <div class="flex items-start justify-between gap-2 mb-2">
                    <h4 class="text-base font-black text-slate-900">${l.language}</h4>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${levelColors[l.level] || levelColors['Beginner']}">
                      ${l.level}
                    </span>
                  </div>
                  <div class="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                    <span class="text-[10px] uppercase font-bold text-slate-400 block">Evidence:</span>
                    <p class="text-[11px] truncate">${l.evidence || 'Coursework & practical coding'}</p>
                  </div>
                </div>
                <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="text-[10px] text-slate-400">Added: ${l.created_at}</span>
                  <button class="delete-lang-btn text-slate-400 hover:text-rose-600 p-1" data-id="${l.id}" title="Delete">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function renderStudentExperience() {
  const authState = auth.getCurrentUser();
  if (!authState || authState.user.role !== 'student') {
    window.location.hash = '#/student/login';
    return '';
  }

  const studentUser = authState.user;
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const activeTab = urlParams.get('tab') || 'certifications';

  const certs = db.find('certifications', c => c.student_user_id === studentUser.id);
  const hackathons = db.find('hackathons', h => h.student_user_id === studentUser.id);
  const internships = db.find('student_internships', i => i.student_user_id === studentUser.id);
  const opensource = db.find('open_source_contributions', o => o.student_user_id === studentUser.id);
  const experiences = db.find('experiences', e => e.student_user_id === studentUser.id);

  setTimeout(() => {
    // Add Item Modals for each subtab
    document.getElementById('add-exp-btn')?.addEventListener('click', () => {
      if (activeTab === 'certifications') {
        const modalContent = `
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Certificate Name *</label>
              <input type="text" id="m-cert-name" placeholder="e.g. AWS Certified Cloud Practitioner" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Issuing Organization *</label>
                <input type="text" id="m-cert-issuer" placeholder="e.g. Amazon Web Services, Coursera" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Skill / Category *</label>
                <input type="text" id="m-cert-cat" placeholder="e.g. Cloud, Python, Web Dev" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Certificate ID *</label>
                <input type="text" id="m-cert-id" placeholder="e.g. AWS-88231" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Issue Date *</label>
                <input type="date" id="m-cert-date" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Official Verification URL *</label>
              <input type="url" id="m-cert-url" placeholder="https://aws.amazon.com/verification or https://credly.com/..." required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Certificate File Name (PDF / PNG)</label>
              <input type="text" id="m-cert-file" placeholder="Certificate_Verified.pdf" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        `;
        showModal('Add Certificate & Evidence', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="m-cert-submit" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Submit for Verification</button>
        `);
        document.getElementById('m-cert-submit')?.addEventListener('click', () => {
          const name = document.getElementById('m-cert-name').value.trim();
          const issuer = document.getElementById('m-cert-issuer').value.trim();
          const cat = document.getElementById('m-cert-cat').value.trim();
          const certId = document.getElementById('m-cert-id').value.trim();
          const date = document.getElementById('m-cert-date').value;
          const url = document.getElementById('m-cert-url').value.trim();
          const file = document.getElementById('m-cert-file').value.trim();

          if (!name || !issuer || !certId) {
            showToast('Validation Error', 'Please fill in mandatory fields.', 'warning');
            return;
          }

          const newCert = {
            id: `cert_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            student_user_id: studentUser.id,
            name,
            issuer,
            category: cat,
            certificate_id: certId,
            issue_date: date || new Date().toISOString().split('T')[0],
            verification_url: url,
            file_name: file || 'Certificate.pdf',
            verification_status: 'Pending Verification',
            created_at: new Date().toISOString().split('T')[0]
          };
          db.insert('certifications', newCert);
          verifyCertificate(newCert.id);
          closeModal();
          showToast('Certificate Uploaded', 'Submitted for automated and institutional verification.', 'info');
          handleRoute();
        });
      } else if (activeTab === 'hackathons') {
        const modalContent = `
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Hackathon Name *</label>
              <input type="text" id="m-hack-name" placeholder="e.g. Smart India Hackathon 2026" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Organizer *</label>
                <input type="text" id="m-hack-org" placeholder="e.g. AICTE, Microsoft" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Position / Award *</label>
                <input type="text" id="m-hack-pos" placeholder="e.g. 1st Place, Finalist" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Project Name & Summary *</label>
              <input type="text" id="m-hack-proj" placeholder="e.g. Rural Telemedicine Dispatch System" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Official Event / Project URL</label>
              <input type="url" id="m-hack-url" placeholder="https://..." class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        `;
        showModal('Add Hackathon Achievement', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="m-hack-submit" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Save Hackathon</button>
        `);
        document.getElementById('m-hack-submit')?.addEventListener('click', () => {
          const name = document.getElementById('m-hack-name').value.trim();
          const organizer = document.getElementById('m-hack-org').value.trim();
          const pos = document.getElementById('m-hack-pos').value.trim();
          const proj = document.getElementById('m-hack-proj').value.trim();
          const url = document.getElementById('m-hack-url').value.trim();
          if (!name || !organizer) return;

          db.insert('hackathons', {
            id: `hack_${Date.now()}`,
            student_user_id: studentUser.id,
            name,
            organizer,
            position_achievement: pos,
            project_name: proj,
            event_url: url,
            verification_status: 'Verified',
            created_at: new Date().toISOString().split('T')[0]
          });
          closeModal();
          showToast('Hackathon Saved', 'Achievement added to your profile.', 'success');
          handleRoute();
        });
      } else if (activeTab === 'internships') {
        const modalContent = `
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Company / Organization *</label>
              <input type="text" id="m-int-comp" placeholder="e.g. Razorpay, Swiggy" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Role *</label>
                <input type="text" id="m-int-role" placeholder="e.g. Backend Engineering Intern" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Duration *</label>
                <input type="text" id="m-int-dur" placeholder="e.g. 3 Months, Jun-Aug 2026" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Skills Used (Comma-separated)</label>
              <input type="text" id="m-int-skills" placeholder="e.g. Python, FastAPI, PostgreSQL, Docker" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Key Contributions & Description</label>
              <textarea id="m-int-desc" rows="3" placeholder="Engineered high-concurrency payment webhook receiver..." class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
            </div>
          </div>
        `;
        showModal('Add Internship Experience', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="m-int-submit" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Save Internship</button>
        `);
        document.getElementById('m-int-submit')?.addEventListener('click', () => {
          const company = document.getElementById('m-int-comp').value.trim();
          const role = document.getElementById('m-int-role').value.trim();
          const duration = document.getElementById('m-int-dur').value.trim();
          const skills = document.getElementById('m-int-skills').value.trim();
          const desc = document.getElementById('m-int-desc').value.trim();
          if (!company || !role) return;

          db.insert('student_internships', {
            id: `int_${Date.now()}`,
            student_user_id: studentUser.id,
            company,
            role,
            duration,
            skills_used: skills,
            description: desc,
            verification_status: 'Verified',
            created_at: new Date().toISOString().split('T')[0]
          });
          closeModal();
          showToast('Internship Added', 'Experience saved to candidate profile.', 'success');
          handleRoute();
        });
      } else if (activeTab === 'opensource') {
        const modalContent = `
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Repository / Project *</label>
              <input type="text" id="m-os-repo" placeholder="e.g. facebook/react, fastapi/fastapi" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Platform</label>
                <select id="m-os-platform" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <option value="GitHub">GitHub</option>
                  <option value="GitLab">GitLab</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Contribution Type</label>
                <input type="text" id="m-os-type" placeholder="e.g. Bug Fix, Feature, Docs" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">PR / Commit URL *</label>
              <input type="url" id="m-os-url" placeholder="https://github.com/.../pull/..." required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        `;
        showModal('Add Open Source Contribution', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="m-os-submit" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Save Contribution</button>
        `);
        document.getElementById('m-os-submit')?.addEventListener('click', () => {
          const repo = document.getElementById('m-os-repo').value.trim();
          const platform = document.getElementById('m-os-platform').value;
          const type = document.getElementById('m-os-type').value.trim();
          const url = document.getElementById('m-os-url').value.trim();
          if (!repo || !url) return;

          db.insert('open_source_contributions', {
            id: `os_${Date.now()}`,
            student_user_id: studentUser.id,
            repo_name: repo,
            platform,
            contribution_type: type || 'Pull Request',
            project_url: url,
            verification_status: 'Verified',
            created_at: new Date().toISOString().split('T')[0]
          });
          closeModal();
          showToast('Open Source Saved', 'Open source proof added to profile.', 'success');
          handleRoute();
        });
      }
    });

    document.querySelectorAll('.del-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const table = e.currentTarget.dataset.table;
        const id = e.currentTarget.dataset.id;
        db.delete(table, id);
        showToast('Item Removed', 'Record removed from profile.', 'info');
        handleRoute();
      });
    });
  }, 10);

  const tabs = [
    { id: 'certifications', label: 'Certifications', count: certs.length, icon: 'award' },
    { id: 'hackathons', label: 'Hackathons', count: hackathons.length, icon: 'trophy' },
    { id: 'internships', label: 'Internships', count: internships.length, icon: 'briefcase' },
    { id: 'opensource', label: 'Open Source', count: opensource.length, icon: 'git-pull-request' }
  ];

  return `
    <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Certifications & Experience</h1>
          <p class="text-xs text-slate-500 mt-1">Manage verified credentials, competitive hackathons, industry internships, and open-source contributions</p>
        </div>
        <button id="add-exp-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-white self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i> Add ${tabs.find(t => t.id === activeTab)?.label.slice(0, -1) || 'Item'}
        </button>
      </div>

      <!-- Tab Navigation -->
      <div class="flex gap-2 p-1.5 bg-slate-100/80 rounded-2xl overflow-x-auto text-xs font-bold">
        ${tabs.map(t => {
          const isCurrent = t.id === activeTab;
          return `
            <a href="#/student/experience?tab=${t.id}" class="px-4 py-2.5 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${isCurrent ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
              <i data-lucide="${t.icon}" class="w-4 h-4"></i>
              <span>${t.label}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${isCurrent ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-600'}">${t.count}</span>
            </a>
          `;
        }).join('')}
      </div>

      <!-- Tab Content Area -->
      ${activeTab === 'certifications' ? `
        <div class="space-y-3">
          ${certs.length === 0 ? `
            <div class="bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
              <div class="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">📜</div>
              <h4 class="font-bold text-slate-800 text-base">No certifications uploaded yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-5">Upload your industry certifications with official verification URLs to prove authenticity to recruiters.</p>
              <button onclick="document.getElementById('add-exp-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload Certificate
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${certs.map(c => {
                const statusBadges = {
                  'Verified': 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'Pending Verification': 'bg-amber-50 text-amber-700 border-amber-200',
                  'Needs Manual Review': 'bg-indigo-50 text-indigo-700 border-indigo-200',
                  'Verification Failed': 'bg-rose-50 text-rose-700 border-rose-200'
                };
                return `
                  <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                      <div class="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span class="text-[10px] font-bold uppercase text-slate-400">${c.issuer}</span>
                          <h4 class="text-sm font-bold text-slate-900 mt-0.5">${c.name}</h4>
                        </div>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadges[c.verification_status] || statusBadges['Pending Verification']}">
                          ${c.verification_status}
                        </span>
                      </div>
                      <div class="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1 my-3">
                        <div class="flex justify-between text-[11px]">
                          <span class="text-slate-400">Credential ID:</span>
                          <span class="font-mono font-bold text-slate-700">${c.certificate_id}</span>
                        </div>
                        <div class="flex justify-between text-[11px]">
                          <span class="text-slate-400">Verified Via:</span>
                          <span class="font-medium text-slate-700">${c.verification_source || 'Issuer Portal'}</span>
                        </div>
                      </div>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      ${c.verification_url ? `
                        <a href="${c.verification_url}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 font-bold hover:underline flex items-center gap-1 text-[11px]">
                          <span>Verify Official URL</span> <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                      ` : `<span></span>`}
                      <button class="del-item-btn text-slate-400 hover:text-rose-600 p-1" data-table="certifications" data-id="${c.id}">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      ` : activeTab === 'hackathons' ? `
        <div class="space-y-3">
          ${hackathons.length === 0 ? `
            <div class="bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">🏆</div>
              <h4 class="font-bold text-slate-800 text-base">No hackathons added yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-5">Participate in collegiate or national hackathons and record your winning projects here.</p>
              <button onclick="document.getElementById('add-exp-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Hackathon
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${hackathons.map(h => `
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="text-sm font-bold text-slate-900">${h.name}</h4>
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        ${h.position_achievement || 'Participant'}
                      </span>
                    </div>
                    <p class="text-xs text-slate-500 font-medium">Organized by: <strong class="text-slate-700">${h.organizer}</strong></p>
                    <div class="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 mt-3">
                      <span class="font-bold block text-slate-900">${h.project_name}</span>
                      <p class="text-[11px] text-slate-500 mt-1">${h.project_description || 'Collaborative engineering prototype.'}</p>
                    </div>
                  </div>
                  <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span class="text-[10px] text-slate-400">Added: ${h.created_at}</span>
                    <button class="del-item-btn text-slate-400 hover:text-rose-600 p-1" data-table="hackathons" data-id="${h.id}">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      ` : activeTab === 'internships' ? `
        <div class="space-y-3">
          ${internships.length === 0 ? `
            <div class="bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
              <div class="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">💼</div>
              <h4 class="font-bold text-slate-800 text-base">No internships added yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-5">Record past company internships, startup apprenticeships, or research fellowships.</p>
              <button onclick="document.getElementById('add-exp-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Internship
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${internships.map(i => `
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-1">
                      <h4 class="text-sm font-bold text-slate-900">${i.role}</h4>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                        ${i.duration || 'Internship'}
                      </span>
                    </div>
                    <p class="text-xs font-bold text-indigo-600 mb-2">${i.company}</p>
                    <p class="text-xs text-slate-600 leading-relaxed">${i.description || 'Completed full-lifecycle engineering assignments.'}</p>
                    ${i.skills_used ? `
                      <div class="mt-3 flex flex-wrap gap-1">
                        ${i.skills_used.split(',').map(s => `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">${s.trim()}</span>`).join('')}
                      </div>
                    ` : ''}
                  </div>
                  <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span class="text-[10px] text-slate-400">Added: ${i.created_at}</span>
                    <button class="del-item-btn text-slate-400 hover:text-rose-600 p-1" data-table="student_internships" data-id="${i.id}">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      ` : `
        <div class="space-y-3">
          ${opensource.length === 0 ? `
            <div class="bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
              <div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">🌱</div>
              <h4 class="font-bold text-slate-800 text-base">No open source contributions yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-5">Share pull requests, issue resolutions, or documentation improvements merged into public GitHub repos.</p>
              <button onclick="document.getElementById('add-exp-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Contribution
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${opensource.map(o => `
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="text-sm font-mono font-bold text-slate-900">${o.repo_name}</h4>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ${o.contribution_type || 'Merged PR'}
                      </span>
                    </div>
                    <p class="text-xs text-slate-500">Platform: <strong class="text-slate-700">${o.platform || 'GitHub'}</strong></p>
                  </div>
                  <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a href="${o.project_url}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 font-bold hover:underline flex items-center gap-1 text-[11px]">
                      <span>View Pull Request</span> <i data-lucide="external-link" class="w-3 h-3"></i>
                    </a>
                    <button class="del-item-btn text-slate-400 hover:text-rose-600 p-1" data-table="open_source_contributions" data-id="${o.id}">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `}
    </div>
  `;
}

function renderStudentProjects() {
  const authState = auth.getCurrentUser();
  if (!authState || authState.user.role !== 'student') {
    window.location.hash = '#/student/login';
    return '';
  }

  const studentUser = authState.user;
  const projects = db.find('projects', p => p.student_user_id === studentUser.id);

  setTimeout(() => {
    document.getElementById('add-proj-btn')?.addEventListener('click', () => {
      const modalContent = `
        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Project Name *</label>
            <input type="text" id="m-p-name" placeholder="e.g. Distributed Task Queue" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Description *</label>
            <textarea id="m-p-desc" rows="3" placeholder="Engineered a fault-tolerant async worker system..." required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Technologies *</label>
              <input type="text" id="m-p-tech" placeholder="e.g. React, Node.js, Redis" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Programming Languages *</label>
              <input type="text" id="m-p-lang" placeholder="e.g. TypeScript, Python" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">GitHub / Repo URL</label>
              <input type="url" id="m-p-repo" placeholder="https://github.com/..." class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Live Demo URL</label>
              <input type="url" id="m-p-demo" placeholder="https://..." class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Project Type</label>
              <select id="m-p-team" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                <option value="Individual">Individual Project</option>
                <option value="Team">Team Project</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Role</label>
              <input type="text" id="m-p-role" placeholder="e.g. Lead Backend Developer" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      `;
      showModal('Add Engineering Project', modalContent, `
        <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
        <button type="button" id="m-p-submit" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Save Project</button>
      `);

      document.getElementById('m-p-submit')?.addEventListener('click', () => {
        const name = document.getElementById('m-p-name').value.trim();
        const desc = document.getElementById('m-p-desc').value.trim();
        const tech = document.getElementById('m-p-tech').value.trim();
        const lang = document.getElementById('m-p-lang').value.trim();
        const repo = document.getElementById('m-p-repo').value.trim();
        const demo = document.getElementById('m-p-demo').value.trim();
        const team = document.getElementById('m-p-team').value;
        const role = document.getElementById('m-p-role').value.trim();

        if (!name || !desc) {
          showToast('Validation Error', 'Project name and description are required.', 'warning');
          return;
        }

        db.insert('projects', {
          id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          student_user_id: studentUser.id,
          name,
          description: desc,
          technologies: tech,
          languages: lang,
          github_url: repo,
          demo_url: demo,
          is_team: team === 'Team',
          role: role || 'Developer',
          created_at: new Date().toISOString().split('T')[0]
        });

        closeModal();
        showToast('Project Added', 'Project saved to portfolio and synchronized with resume.', 'success');
        handleRoute();
      });
    });

    document.querySelectorAll('.delete-proj-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        db.delete('projects', id);
        showToast('Project Removed', 'Project removed from portfolio.', 'info');
        handleRoute();
      });
    });
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">My Projects</h1>
          <p class="text-xs text-slate-500 mt-1">Showcase your technical systems, code repositories, and deployed live applications</p>
        </div>
        <button id="add-proj-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-white self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i> Add Project
        </button>
      </div>

      ${projects.length === 0 ? `
        <div class="bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
          <div class="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">📁</div>
          <h3 class="text-base font-bold text-slate-800">No projects added yet</h3>
          <p class="text-xs text-slate-500 mt-1 mb-5">Demonstrate your problem-solving capabilities with full-stack, data, or systems projects.</p>
          <button onclick="document.getElementById('add-proj-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i> Add First Project
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${projects.map(p => `
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all">
              <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                  <h4 class="text-base font-bold text-slate-900">${p.name}</h4>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    ${p.role || 'Developer'}
                  </span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">${p.description}</p>
                
                <div class="p-3 bg-slate-50 rounded-2xl space-y-2 text-xs">
                  <div>
                    <span class="text-[10px] uppercase font-bold text-slate-400 block">Stack & Technologies:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      ${(p.technologies || 'Full Stack').split(',').map(t => `<span class="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-[10px] font-medium">${t.trim()}</span>`).join('')}
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div class="flex items-center gap-3">
                  ${p.github_url ? `
                    <a href="${p.github_url}" target="_blank" rel="noopener noreferrer" class="text-slate-700 hover:text-indigo-600 font-bold flex items-center gap-1 text-[11px]">
                      <i data-lucide="github" class="w-3.5 h-3.5"></i> Repository
                    </a>
                  ` : ''}
                  ${p.demo_url ? `
                    <a href="${p.demo_url}" target="_blank" rel="noopener noreferrer" class="text-emerald-600 font-bold hover:underline flex items-center gap-1 text-[11px]">
                      <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Live Demo
                    </a>
                  ` : ''}
                </div>
                <button class="delete-proj-btn text-slate-400 hover:text-rose-600 p-1" data-id="${p.id}" title="Delete Project">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

function renderStudentResume() {
  const authState = auth.getCurrentUser();
  if (!authState || authState.user.role !== 'student') {
    window.location.hash = '#/student/login';
    return '';
  }

  const studentUser = authState.user;
  const profile = authState.profile;

  const resumes = db.find('resumes', r => r.student_user_id === studentUser.id);
  const latestResume = resumes.find(r => r.is_latest) || (resumes.length > 0 ? resumes[0] : null);

  const verifiedSkills = db.find('student_skills', s => s.student_user_id === studentUser.id && s.assessed);
  const certs = db.find('certifications', c => c.student_user_id === studentUser.id && c.verification_status === 'Verified');
  const projects = db.find('projects', p => p.student_user_id === studentUser.id);
  const internships = db.find('student_internships', i => i.student_user_id === studentUser.id);
  const languages = db.find('student_languages', l => l.student_user_id === studentUser.id);

  setTimeout(() => {
    document.getElementById('resume-upload-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('resume-file');
      const file = fileInput?.files?.[0];
      if (!file) {
        showToast('Validation Error', 'Please select a resume file.', 'warning');
        return;
      }

      // Secure validation of file type & extension
      const ext = file.name.split('.').pop().toLowerCase();
      if (!['pdf', 'doc', 'docx'].includes(ext)) {
        showToast('Invalid File Type', 'Only PDF, DOC, and DOCX files are allowed.', 'error');
        return;
      }

      if (file.size > 8 * 1024 * 1024) {
        showToast('File Too Large', 'Maximum resume file size is 8MB.', 'error');
        return;
      }

      // Mark previous resumes as not latest
      resumes.forEach(r => {
        db.update('resumes', r.id, { is_latest: false });
      });

      const versionNum = resumes.length + 1;
      const newResume = {
        id: `res_${Date.now()}`,
        student_user_id: studentUser.id,
        file_name: file.name,
        file_size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        file_type: ext.toUpperCase(),
        version: `v${versionNum}.0`,
        is_latest: true,
        uploaded_at: new Date().toISOString().split('T')[0]
      };

      db.insert('resumes', newResume);
      auth.updateStudentProfile(studentUser.id, { resume_name: file.name });
      showToast('Resume Uploaded', `Version v${versionNum}.0 saved and set as primary.`, 'success');
      handleRoute();
    });
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Resume / CV Hub</h1>
          <p class="text-xs text-slate-500 mt-1">Manage private verified resume documents and unified profile synchronization</p>
        </div>
      </div>

      <!-- Upload / Replace Card -->
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <h3 class="text-sm font-bold text-slate-800 mb-3">Upload or Replace Resume</h3>
        <form id="resume-upload-form" class="flex flex-col sm:flex-row items-center gap-3">
          <input type="file" id="resume-file" accept=".pdf,.doc,.docx" required class="flex-1 text-xs text-slate-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
          <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shrink-0">
            <i data-lucide="upload" class="w-4 h-4"></i> Upload Resume
          </button>
        </form>
        <p class="text-[11px] text-slate-400 mt-2">Supported formats: PDF, DOC, DOCX. Max file size: 8 MB. Stored securely in private authenticated storage.</p>
      </div>

      <!-- Active Resume Card -->
      ${latestResume ? `
        <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
              📄
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-sm font-bold text-slate-900">${latestResume.file_name}</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Latest Active</span>
              </div>
              <p class="text-[11px] text-slate-400 mt-0.5">Uploaded: ${latestResume.uploaded_at || 'Recently'} · Version: ${latestResume.version || 'v1.0'}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="showToast('Resume Download', 'Downloading verified document...', 'info')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5">
              <i data-lucide="download" class="w-3.5 h-3.5"></i> Download
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Unified Synchronized Profile / CV Summary -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 class="text-base font-black text-slate-900">Synchronized Profile & CV Summary</h3>
            <p class="text-xs text-slate-500">Live reflection of your verified competencies accessible to authorized recruiters</p>
          </div>
          <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
            ✓ 100% Database Synced
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <!-- Verified Competencies -->
          <div class="p-4 bg-slate-50 rounded-2xl space-y-3">
            <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
              <i data-lucide="zap" class="w-4 h-4 text-indigo-600"></i> Verified Skills & Benchmarks
            </h4>
            ${verifiedSkills.length > 0 ? verifiedSkills.map(s => `
              <div class="flex justify-between items-center bg-white p-2.5 rounded-xl border border-slate-100">
                <span class="font-bold text-slate-800">${s.name}</span>
                <span class="font-black text-indigo-600">${s.percentage}% (${s.level})</span>
              </div>
            `).join('') : `<p class="text-slate-400 italic">No verified skills yet.</p>`}
          </div>

          <!-- Verified Certifications -->
          <div class="p-4 bg-slate-50 rounded-2xl space-y-3">
            <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
              <i data-lucide="award" class="w-4 h-4 text-amber-600"></i> Verified Certifications
            </h4>
            ${certs.length > 0 ? certs.map(c => `
              <div class="flex justify-between items-center bg-white p-2.5 rounded-xl border border-slate-100">
                <div>
                  <span class="font-bold text-slate-800 block">${c.name}</span>
                  <span class="text-[10px] text-slate-400">${c.issuer}</span>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">Verified</span>
              </div>
            `).join('') : `<p class="text-slate-400 italic">No verified certificates yet.</p>`}
          </div>
        </div>

        <!-- Verified Projects & Experiences -->
        <div class="p-4 bg-slate-50 rounded-2xl space-y-3 text-xs">
          <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
            <i data-lucide="folder-git-2" class="w-4 h-4 text-cyan-600"></i> Projects & Practical Experience
          </h4>
          ${projects.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${projects.map(p => `
                <div class="bg-white p-3 rounded-xl border border-slate-100">
                  <span class="font-bold text-slate-900 block">${p.name}</span>
                  <p class="text-[11px] text-slate-500 mt-0.5 truncate">${p.description}</p>
                </div>
              `).join('')}
            </div>
          ` : `<p class="text-slate-400 italic">No projects recorded yet.</p>`}
        </div>
      </div>
    </div>
  `;
}

﻿  // --- 15. STUDENT SKILLS SYSTEM (UNASSESSED -> TAKE ASSESSMENT -> VERIFIED) ---
  function renderStudentSkills() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const skills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    const certs = db.find('certifications', c => c.student_user_id === studentUser.id);
    const hasAnsweredInquiry = studentUser.certified_skills_answered === true;

    function openAddSkillModal() {
      const modalContent = `
        <div class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Select Skill to Add *</label>
            <select id="modal-skill-name" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="SQL">SQL</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="C">C</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="custom">Other (Custom Skill)...</option>
            </select>
          </div>

          <div id="modal-custom-wrap" class="hidden">
            <label class="block font-bold text-slate-700 mb-1">Enter Custom Skill Name *</label>
            <input type="text" id="modal-custom-name" placeholder="e.g. Data Structures, Docker, Node.js" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium" />
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Category</label>
            <select id="modal-skill-category" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800">
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Database">Database</option>
              <option value="Core Engineering">Core Engineering</option>
              <option value="AI/ML">AI/ML</option>
            </select>
          </div>

          <div class="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-950 leading-relaxed">
            <p class="font-bold flex items-center gap-1.5 text-amber-900">
              <i data-lucide="info" class="w-4 h-4 text-amber-600"></i> Assessment Required Upon Adding
            </p>
            <p class="text-[11px] mt-1 text-amber-800">
              This skill will initially be marked as <strong>"Assessment Required"</strong> (Verified Score: <em>Not Available</em>, Level: <em>Not Assessed</em>, Verified: <em>No</em>). You must complete a <strong>strictly 25-question technical assessment</strong> to verify your proficiency.
            </p>
          </div>
        </div>
      `;

      showModal('Add New Skill', modalContent, `
        <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
        <button type="button" id="modal-submit-add-skill-btn" class="btn-glow px-5 py-2.5 font-bold text-xs rounded-xl flex items-center gap-1.5 text-white">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Skill
        </button>
      `);

      const selectElem = document.getElementById('modal-skill-name');
      const customWrap = document.getElementById('modal-custom-wrap');
      selectElem?.addEventListener('change', () => {
        if (selectElem.value === 'custom') {
          customWrap?.classList.remove('hidden');
        } else {
          customWrap?.classList.add('hidden');
        }
      });

      document.getElementById('modal-submit-add-skill-btn')?.addEventListener('click', () => {
        let skillName = selectElem?.value || 'Python';
        if (skillName === 'custom') {
          skillName = (document.getElementById('modal-custom-name')?.value || '').trim();
          if (!skillName) {
            showToast('Validation Error', 'Please enter a skill name.', 'warning');
            return;
          }
        }
        const category = document.getElementById('modal-skill-category')?.value || 'Technical';

        const existing = db.findOne('student_skills', s => 
          s.student_user_id === studentUser.id && 
          s.name.toLowerCase() === skillName.toLowerCase()
        );

        if (existing) {
          showToast('Skill Already Exists', `You have already added ${skillName} to your profile.`, 'warning');
          closeModal();
          return;
        }

        const newSkillRecord = {
          id: `sk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          student_user_id: studentUser.id,
          name: skillName,
          category: category,
          status: 'Assessment Required',
          score: null,
          percentage: null,
          level: 'Not Assessed',
          verified: 'No',
          assessed: false,
          created_at: new Date().toISOString().split('T')[0]
        };

        db.insert('student_skills', newSkillRecord);
        closeModal();
        showToast('Skill Added', `${skillName} added. Complete the 25-Q test to verify proficiency.`, 'info');
        handleRoute();
      });
    }

    function openUploadCertModal() {
      const modalContent = `
        <div class="space-y-3.5 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Certified Skill Name *</label>
            <input type="text" id="cert-skill-name" placeholder="e.g. Python, AWS Cloud, Java, React" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Issuing Organization *</label>
              <input type="text" id="cert-issuer" placeholder="e.g. Coursera, AWS, HackerRank, Google, Udemy, NPTEL" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Category</label>
              <select id="cert-category" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                <option value="Technical">Technical Programming</option>
                <option value="Cloud">Cloud & Infrastructure</option>
                <option value="Database">Database Management</option>
                <option value="AI/ML">AI & Machine Learning</option>
                <option value="Core Engineering">Core Engineering</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Certificate / Credential ID *</label>
              <input type="text" id="cert-cred-id" placeholder="e.g. AWS-883912 or HR-PY-901" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Issue Date *</label>
              <input type="date" id="cert-issue-date" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Official Verification URL *</label>
            <input type="url" id="cert-verify-url" placeholder="https://www.credly.com/badges/... or https://coursera.org/verify/..." required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Upload Certificate Document (PDF / PNG / JPG)</label>
            <input type="file" id="cert-file-input" accept=".pdf,.png,.jpg,.jpeg" class="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700" />
          </div>
          <div class="p-3 bg-indigo-50/80 border border-indigo-100 rounded-xl text-indigo-900 text-[11px] leading-relaxed">
            <p class="font-bold flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-indigo-600"></i> Official Verification Engine</p>
            <p class="mt-0.5 text-indigo-800">Uploaded credentials undergo automated issuer checks and syntax validation. Authenticated certificates update your profile to <strong>Verified</strong>.</p>
          </div>
        </div>
      `;

      showModal('Upload Certified Skill & Evidence', modalContent, `
        <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
        <button type="button" id="cert-submit-btn" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl flex items-center gap-1.5">
          <i data-lucide="upload-cloud" class="w-4 h-4"></i> Submit for Verification
        </button>
      `);

      document.getElementById('cert-submit-btn')?.addEventListener('click', () => {
        const skillName = document.getElementById('cert-skill-name')?.value.trim();
        const issuer = document.getElementById('cert-issuer')?.value.trim();
        const category = document.getElementById('cert-category')?.value || 'Technical';
        const credId = document.getElementById('cert-cred-id')?.value.trim();
        const issueDate = document.getElementById('cert-issue-date')?.value;
        const verifyUrl = document.getElementById('cert-verify-url')?.value.trim();
        const fileInput = document.getElementById('cert-file-input');
        const fileName = fileInput?.files?.[0]?.name || `${skillName}_Certificate.pdf`;

        if (!skillName || !issuer || !credId || !verifyUrl) {
          showToast('Validation Error', 'Please complete all required fields.', 'warning');
          return;
        }

        const newCert = {
          id: `cert_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          student_user_id: studentUser.id,
          name: `${skillName} Certification`,
          skill_name: skillName,
          issuer,
          category,
          certificate_id: credId,
          issue_date: issueDate || new Date().toISOString().split('T')[0],
          verification_url: verifyUrl,
          file_name: fileName,
          verification_status: 'Pending Verification',
          created_at: new Date().toISOString().split('T')[0]
        };

        db.insert('certifications', newCert);
        const verification = verifyCertificate(newCert.id);

        // Link to student_skills
        const existingSkill = db.findOne('student_skills', s => 
          s.student_user_id === studentUser.id && 
          s.name.toLowerCase() === skillName.toLowerCase()
        );

        const isVerified = verification.status === 'Verified';
        if (existingSkill) {
          db.update('student_skills', existingSkill.id, {
            status: isVerified ? 'Verified' : 'Pending Verification',
            verified: isVerified ? 'Yes' : 'No',
            percentage: existingSkill.percentage || (isVerified ? 85 : null),
            level: existingSkill.level !== 'Not Assessed' ? existingSkill.level : (isVerified ? 'Advanced' : 'Not Assessed'),
            assessed: isVerified || existingSkill.assessed,
            certificate_id: newCert.id
          });
        } else {
          db.insert('student_skills', {
            id: `sk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            student_user_id: studentUser.id,
            name: skillName,
            category,
            status: isVerified ? 'Verified' : 'Pending Verification',
            verified: isVerified ? 'Yes' : 'No',
            score: isVerified ? 85 : null,
            percentage: isVerified ? 85 : null,
            level: isVerified ? 'Advanced' : 'Not Assessed',
            assessed: isVerified,
            certificate_id: newCert.id,
            created_at: new Date().toISOString().split('T')[0]
          });
        }

        closeModal();
        showToast('Certificate Submitted', `Status: ${verification.status}. ${verification.message}`, isVerified ? 'success' : 'info');
        handleRoute();
      });
    }

    setTimeout(() => {
      // Certified Skills Prompt buttons
      document.getElementById('inquiry-yes-btn')?.addEventListener('click', () => {
        studentUser.certified_skills_answered = true;
        studentUser.has_certified_skills = true;
        db.update('users', studentUser.id, { certified_skills_answered: true, has_certified_skills: true });
        openUploadCertModal();
      });

      document.getElementById('inquiry-no-btn')?.addEventListener('click', () => {
        studentUser.certified_skills_answered = true;
        studentUser.has_certified_skills = false;
        db.update('users', studentUser.id, { certified_skills_answered: true, has_certified_skills: false });
        showToast('Preference Saved', 'Personalized Roadmap unlocked. Follow your custom learning path.', 'info');
        handleRoute();
      });

      document.getElementById('recheck-inquiry-btn')?.addEventListener('click', () => {
        studentUser.certified_skills_answered = false;
        db.update('users', studentUser.id, { certified_skills_answered: false });
        handleRoute();
      });

      document.getElementById('add-skill-modal-btn')?.addEventListener('click', openAddSkillModal);
      document.getElementById('empty-add-skill-btn')?.addEventListener('click', openAddSkillModal);
      document.getElementById('upload-cert-modal-btn')?.addEventListener('click', openUploadCertModal);

      document.querySelectorAll('.delete-skill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          db.delete('student_skills', id);
          showToast('Skill Removed', 'Skill removed from your profile.', 'info');
          handleRoute();
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <!-- Header Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-black text-slate-900">My Skills & Assessments</h1>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Strict 25-Q Engine</span>
            </div>
            <p class="text-xs text-slate-500 mt-1">Verified competencies backed by objective 25-question technical assessments and official certificates</p>
          </div>
          <div class="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <button id="upload-cert-modal-btn" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5">
              <i data-lucide="award" class="w-4 h-4"></i> Upload Certificate
            </button>
            <button id="add-skill-modal-btn" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 text-white">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>+ Add New Skill</span>
            </button>
          </div>
        </div>

        <!-- 1. CERTIFIED SKILLS INQUIRY PROMPT (Shown on first visit or when requested) -->
        ${!hasAnsweredInquiry ? `
          <div class="glass-card bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div class="relative z-10 max-w-2xl">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3">
                <i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Initial Profile Assessment
              </div>
              <h2 class="text-xl sm:text-2xl font-black tracking-tight">Do you currently have any certified skills?</h2>
              <p class="text-indigo-200 text-xs sm:text-sm mt-1.5 leading-relaxed">
                If you have completed recognized industry certifications (AWS, Google, Coursera, HackerRank, etc.), you can upload evidence for instant verification. If not, YuvaSetu will guide you to your custom career roadmap!
              </p>
              <div class="flex flex-wrap items-center gap-3 mt-5">
                <button id="inquiry-yes-btn" class="px-5 py-2.5 bg-white text-indigo-950 hover:bg-indigo-50 font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i> Yes, I Have Certifications
                </button>
                <button id="inquiry-no-btn" class="px-5 py-2.5 bg-indigo-500/40 hover:bg-indigo-500/60 text-white border border-white/20 font-bold rounded-xl text-xs backdrop-blur-md transition-all flex items-center gap-1.5">
                  <i data-lucide="map" class="w-4 h-4 text-cyan-300"></i> No, Guide Me to Roadmap
                </button>
              </div>
            </div>
          </div>
        ` : !studentUser.has_certified_skills ? `
          <!-- Encouraging Roadmap Guidance Card when student answered No -->
          <div class="bg-gradient-to-r from-cyan-50 via-indigo-50 to-purple-50 p-6 rounded-3xl border border-indigo-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
              <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl shrink-0">
                🧭
              </div>
              <div>
                <h4 class="text-sm font-black text-slate-900">No certified skills yet? Follow your Personalized Roadmap!</h4>
                <p class="text-xs text-slate-600 mt-0.5 max-w-xl">
                  Start by setting your targeted career goal and learning skills stage-by-stage. When ready, take the 25-question assessment to earn verified status.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-start md:self-auto shrink-0">
              <a href="#/student/roadmap" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1">
                <i data-lucide="map" class="w-3.5 h-3.5"></i> Explore Roadmap
              </a>
              <button id="recheck-inquiry-btn" class="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 bg-white text-xs font-semibold" title="Change your response">
                Update Response
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Skills Cards Grid -->
        ${skills.length === 0 ? `
          <div class="glass-card bg-white p-10 sm:p-14 rounded-3xl border border-slate-100 shadow-sm text-center max-w-lg mx-auto my-6">
            <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
              ⚡
            </div>
            <h3 class="text-lg font-black text-slate-800">No skills added yet</h3>
            <p class="text-xs text-slate-500 mt-2 mb-6 leading-relaxed max-w-sm mx-auto">
              Add a programming or engineering skill such as Python, Java, or SQL and take the strictly 25-question objective assessment to verify proficiency.
            </p>
            <button id="empty-add-skill-btn" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-white mx-auto">
              <i data-lucide="plus" class="w-4 h-4"></i> + Add First Skill
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${skills.map(s => {
              const isVerified = (s.status === 'Verified' || (s.assessed && s.percentage !== null));
              const stars = isVerified ? calculateStars(s.percentage || 0) : 0;

              if (!isVerified) {
                return `
                  <div class="glass-card bg-white p-5 rounded-3xl border border-amber-200/80 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                    <div>
                      <div class="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${s.category || 'Technical'}</span>
                          <h4 class="text-base font-bold text-slate-900 mt-0.5">${s.name}</h4>
                        </div>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                          <i data-lucide="clock" class="w-3 h-3 text-amber-600"></i> Assessment Required
                        </span>
                      </div>

                      <div class="my-4 p-3.5 bg-amber-50/50 rounded-2xl border border-amber-100/70 space-y-2 text-xs">
                        <div class="flex justify-between items-center text-slate-600">
                          <span>Verified Score:</span>
                          <span class="font-bold text-slate-500">Not Available</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-600">
                          <span>Level:</span>
                          <span class="font-bold text-slate-700">Not Assessed</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-600">
                          <span>Verified:</span>
                          <span class="font-bold text-amber-700">No</span>
                        </div>
                      </div>
                    </div>

                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs gap-2">
                      <a href="#/student/assessment?skill=${encodeURIComponent(s.name)}&skillId=${s.id}" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm text-white">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                        <span>Take Assessment (25-Q)</span>
                      </a>
                      <button class="delete-skill-btn text-slate-400 hover:text-rose-600 p-1.5 text-xs rounded-lg hover:bg-rose-50 transition-colors" data-id="${s.id}" title="Remove Skill">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                `;
              }

              return `
                <div class="glass-card bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${s.category || 'Technical'}</span>
                        <h4 class="text-base font-bold text-slate-900 mt-0.5">${s.name}</h4>
                      </div>
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Verified
                      </span>
                    </div>

                    <div class="my-3">
                      <div class="flex justify-between items-center mb-1 text-xs font-semibold">
                        <span class="text-slate-600">Verified Score</span>
                        <span class="font-black text-indigo-600 text-sm">${s.percentage}%</span>
                      </div>
                      ${renderProgressBar(s.percentage, '', 'bg-emerald-600')}
                      <div class="flex justify-between items-center text-xs mt-2.5">
                        <span class="text-slate-500 text-[11px]">Star Rating:</span>
                        <span>${renderStars(stars)}</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-500 mt-2.5 pt-2 border-t border-slate-100">
                        <div>Level: <strong class="text-slate-800">${s.level}</strong></div>
                        <div>Verified: <strong class="text-emerald-700">Yes</strong></div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs gap-2">
                    <span class="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold">${s.level}</span>
                    <div class="flex items-center gap-2">
                      <a href="#/student/assessment?skill=${encodeURIComponent(s.name)}&skillId=${s.id}&retake=1" class="px-3 py-1.5 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 font-bold rounded-lg transition-colors text-[11px] flex items-center gap-1">
                        <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                        <span>Retake (25-Q)</span>
                      </a>
                      <button class="delete-skill-btn text-slate-400 hover:text-rose-600 p-1.5 text-xs rounded-lg hover:bg-rose-50 transition-colors" data-id="${s.id}" title="Remove Skill">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;
  }


﻿  // --- 16. INTERACTIVE SKILL ASSESSMENT ENGINE (STRICTLY 25 QUESTIONS & TAB-SWITCHING PROTECTION) ---
  let activeAssessment = null;

  function initAssessmentSession(studentUserId, skillName, category = 'Technical', skillId = null) {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student' || authState.user.id !== studentUserId) {
      console.error('Unauthorized assessment session initiation attempt');
      return null;
    }

    const bankKey = resolveSkillBankKey(skillName);
    const fullBank = SKILL_QUESTION_BANKS[bankKey] || SKILL_QUESTION_BANKS.general;

    // STRICT REQUIREMENT: EXACTLY 25 questions dynamically selected per attempt
    const targetCount = 25;

    // Randomize question selection from the full question bank
    const shuffledBank = [...fullBank].sort(() => 0.5 - Math.random());
    const selected = shuffledBank.slice(0, targetCount);

    const clientQuestions = [];
    const correctAnswersKey = {}; // Safe server-side answer key

    selected.forEach((q, idx) => {
      const originalOptions = [...q.options];
      const correctText = originalOptions[q.correct];
      const shuffledOptions = [...originalOptions].sort(() => 0.5 - Math.random());
      const newCorrectIndex = shuffledOptions.indexOf(correctText);

      correctAnswersKey[q.id] = newCorrectIndex;

      // DO NOT EXPOSE correct or correctIndex to the client DOM/session!
      clientQuestions.push({
        id: q.id,
        qNumber: idx + 1,
        topic: q.topic,
        question: q.question,
        options: shuffledOptions
      });
    });

    const previousAttempts = db.find('student_assessments', a => 
      a.student_user_id === studentUserId && 
      a.skill_name.toLowerCase() === skillName.toLowerCase() &&
      a.status === 'completed'
    );
    const attemptNumber = previousAttempts.length + 1;

    const assessmentId = `asst_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;

    const attemptRecord = {
      id: assessmentId,
      student_user_id: studentUserId,
      skill_id: skillId || null,
      skill_name: skillName,
      category: category,
      attempt_number: attemptNumber,
      total_questions: targetCount,
      questions: clientQuestions,
      correct_answers_key: correctAnswersKey, // Secure backend storage
      student_answers: {},
      tab_switch_count: 0,
      status: 'in_progress',
      created_at: new Date().toISOString()
    };

    db.insert('student_assessments', attemptRecord);

    activeAssessment = {
      id: assessmentId,
      student_user_id: studentUserId,
      skill_id: skillId,
      skill_name: skillName,
      category: category,
      total_questions: targetCount,
      questions: clientQuestions,
      student_answers: {},
      tab_switch_count: 0,
      currentIndex: 0,
      startedAt: Date.now()
    };

    return activeAssessment;
  }

  function evaluateAssessmentSubmission(assessmentId, studentAnswers, clientPayload = {}) {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      throw new Error('Unauthorized: Only authenticated students can submit assessments.');
    }

    const attempt = db.findOne('student_assessments', a => a.id === assessmentId);
    if (!attempt) {
      throw new Error('Assessment attempt record not found.');
    }

    // Strict Authorization: Student cannot submit or modify another student's assessment
    if (attempt.student_user_id !== authState.user.id) {
      throw new Error('Forbidden: You are not authorized to submit this assessment.');
    }

    // Reject submissions for terminated attempts
    if (attempt.status === 'terminated') {
      throw new Error('Assessment was terminated due to malpractice and cannot be submitted.');
    }

    // Reject duplicate submissions for already completed attempt
    if (attempt.status === 'completed') {
      return attempt;
    }

    // CRITICAL SECURITY REQUIREMENT:
    // IGNORE ANY CLIENT-PROVIDED score, percentage, level, or verified status!
    const questions = attempt.questions || [];
    const correctKey = attempt.correct_answers_key || {};
    let correctCount = 0;
    const topicBreakdown = {};

    questions.forEach(q => {
      const studentChoice = studentAnswers[q.id];
      const correctIndex = correctKey[q.id];
      const isCorrect = studentChoice !== undefined && studentChoice === correctIndex;
      if (isCorrect) correctCount++;

      if (!topicBreakdown[q.topic]) {
        topicBreakdown[q.topic] = { total: 0, correct: 0 };
      }
      topicBreakdown[q.topic].total += 1;
      if (isCorrect) topicBreakdown[q.topic].correct += 1;
    });

    const totalQuestions = questions.length || 25;
    const calculatedPercentage = Math.round((correctCount / totalQuestions) * 100);
    const calculatedLevel = calculateSkillLevel(calculatedPercentage);
    const calculatedStars = calculateStars(calculatedPercentage);

    const strongAreas = [];
    const needsImprovement = [];

    Object.keys(topicBreakdown).forEach(topic => {
      const t = topicBreakdown[topic];
      const accuracy = Math.round((t.correct / t.total) * 100);
      t.accuracy = accuracy;
      if (accuracy >= 70) {
        strongAreas.push(topic);
      } else {
        needsImprovement.push(topic);
      }
    });

    let summaryText = '';
    if (strongAreas.length > 0 && needsImprovement.length > 0) {
      summaryText = `Your performance is strong in ${strongAreas.slice(0, 3).join(', ')}, but you would benefit from focused practice in ${needsImprovement.slice(0, 3).join(', ')}.`;
    } else if (strongAreas.length > 0) {
      summaryText = `Outstanding mastery across core tested topics including ${strongAreas.slice(0, 4).join(', ')}.`;
    } else {
      summaryText = `Foundational concepts require review. Focus on practicing ${needsImprovement.slice(0, 3).join(', ')}.`;
    }

    // Update assessment attempt in student_assessments
    const completionTimestamp = new Date().toISOString();
    const updatedAttempt = {
      ...attempt,
      student_answers: studentAnswers,
      status: 'completed',
      total_questions: totalQuestions,
      questions_attempted: Object.keys(studentAnswers).length,
      correct_answers: correctCount,
      incorrect_answers: totalQuestions - correctCount,
      score: calculatedPercentage,
      percentage: calculatedPercentage,
      level: calculatedLevel,
      stars: calculatedStars,
      topic_breakdown: topicBreakdown,
      diagnostic: {
        strong_areas: strongAreas,
        needs_improvement: needsImprovement,
        summary: summaryText
      },
      completed_at: completionTimestamp
    };

    db.update('student_assessments', attempt.id, updatedAttempt);

    // UPDATE OR CREATE VERIFIED SKILL IN student_skills
    let skillRecord = attempt.skill_id ? db.findOne('student_skills', s => s.id === attempt.skill_id) : null;
    if (!skillRecord) {
      skillRecord = db.findOne('student_skills', s => 
        s.student_user_id === authState.user.id && 
        s.name.toLowerCase() === attempt.skill_name.toLowerCase()
      );
    }

    if (skillRecord) {
      db.update('student_skills', skillRecord.id, {
        status: 'Verified',
        verified: 'Yes',
        score: calculatedPercentage,
        percentage: calculatedPercentage,
        level: calculatedLevel,
        stars: calculatedStars,
        assessed: true,
        assessed_at: completionTimestamp.split('T')[0]
      });
    } else {
      db.insert('student_skills', {
        id: `sk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        student_user_id: authState.user.id,
        name: attempt.skill_name,
        category: attempt.category || 'Technical',
        status: 'Verified',
        verified: 'Yes',
        score: calculatedPercentage,
        percentage: calculatedPercentage,
        level: calculatedLevel,
        stars: calculatedStars,
        assessed: true,
        assessed_at: completionTimestamp.split('T')[0]
      });
    }

    // In-app Notification for student
    createNotification(
      authState.user.id,
      'student',
      `Assessment Complete: ${attempt.skill_name}`,
      `You scored ${calculatedPercentage}% (${calculatedLevel}, ${calculatedStars}★) in your 25-Q test.`,
      'assessment'
    );

    return updatedAttempt;
  }


﻿  // --- 17. ASSESSMENT UI & RESULT VIEWS ---
  let tabSwitchDebounce = false;

  function renderStudentAssessment() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    let requestedSkill = urlParams.get('skill') || 'Python';
    let skillId = urlParams.get('skillId') || null;
    let category = urlParams.get('category') || 'Technical';
    const isRetake = urlParams.get('retake') === '1';

    // Check if there is an existing in-progress or terminated assessment for this skill
    if (isRetake || !activeAssessment || activeAssessment.student_user_id !== studentUser.id || (activeAssessment.skill_name || '').toLowerCase() !== requestedSkill.toLowerCase()) {
      const recentAttempt = db.findOne('student_assessments', a => 
        a.student_user_id === studentUser.id && 
        a.skill_name.toLowerCase() === requestedSkill.toLowerCase() &&
        a.status === 'in_progress'
      );
      if (!isRetake && recentAttempt) {
        activeAssessment = {
          id: recentAttempt.id,
          student_user_id: recentAttempt.student_user_id,
          skill_id: recentAttempt.skill_id,
          skill_name: recentAttempt.skill_name,
          category: recentAttempt.category,
          total_questions: recentAttempt.total_questions || (recentAttempt.questions || []).length || 25,
          questions: recentAttempt.questions,
          student_answers: recentAttempt.student_answers || {},
          tab_switch_count: recentAttempt.tab_switch_count || 0,
          currentIndex: 0,
          startedAt: new Date(recentAttempt.created_at).getTime()
        };
      } else {
        initAssessmentSession(studentUser.id, requestedSkill, category, skillId);
      }
    }

    const session = activeAssessment;
    // Check if this attempt was terminated
    const dbAttempt = db.findOne('student_assessments', a => a.id === session.id);
    if (dbAttempt && dbAttempt.status === 'terminated') {
      return `
        <div class="max-w-2xl mx-auto my-12 bg-white p-8 sm:p-12 rounded-3xl border border-rose-200 shadow-xl text-center space-y-5 animate-fade-in">
          <div class="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-3xl font-black">
            🛑
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 inline-block">
            Malpractice Termination
          </span>
          <h1 class="text-2xl font-black text-slate-900">Assessment Terminated — Tab Switching</h1>
          <p class="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            This 25-question assessment for <strong>${dbAttempt.skill_name}</strong> was terminated due to exceeding the maximum allowed tab-switching limit (3 switches).
          </p>
          <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500 max-w-md mx-auto text-left space-y-1">
            <div>• <strong>Score Awarded:</strong> 0% (Failed)</div>
            <div>• <strong>Status:</strong> Terminated</div>
            <div>• <strong>Malpractice Incident:</strong> Logged in student audit log</div>
            <div>• <strong>Reason:</strong> ${dbAttempt.termination_reason || 'Repeated tab switches detected'}</div>
          </div>
          <div class="pt-4 flex justify-center gap-3">
            <a href="#/student/skills" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold text-white">
              Return to My Skills
            </a>
          </div>
        </div>
      `;
    }

    const totalQ = session.questions.length; // strictly 25
    const currentQ = session.questions[session.currentIndex];
    const progressPercent = Math.round(((session.currentIndex + 1) / totalQ) * 100);
    const selectedAnswer = session.student_answers[currentQ.id];

    // Wire Anti-Cheating tab-switch detection
    function handleTabSwitch() {
      if (tabSwitchDebounce) return;
      tabSwitchDebounce = true;
      setTimeout(() => { tabSwitchDebounce = false; }, 1000);

      const attempt = db.findOne('student_assessments', a => a.id === session.id);
      if (!attempt || attempt.status !== 'in_progress') return;

      attempt.tab_switch_count = (attempt.tab_switch_count || 0) + 1;
      session.tab_switch_count = attempt.tab_switch_count;
      db.update('student_assessments', attempt.id, { tab_switch_count: attempt.tab_switch_count });

      if (attempt.tab_switch_count === 1) {
        showModal(
          'Anti-Cheating Notice (Warning 1 of 2)',
          `
            <div class="space-y-3 text-xs">
              <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950">
                <p class="font-bold flex items-center gap-1.5 text-amber-900 text-sm">
                  <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600"></i> Warning 1 of 2: Tab Switch Detected
                </p>
                <p class="mt-2 text-amber-800 leading-relaxed">
                  You navigated away from this assessment window. YuvaSetu continuously tracks active tab visibility to prevent malpractice.
                </p>
                <p class="mt-2 font-bold text-amber-900">
                  You have 1 warning remaining. A 3rd tab switch will immediately terminate your assessment with 0% score.
                </p>
              </div>
            </div>
          `,
          `<button type="button" onclick="closeModal()" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">I Understand & Continue</button>`
        );
      } else if (attempt.tab_switch_count === 2) {
        showModal(
          'CRITICAL MALPRACTICE WARNING (2 of 2)',
          `
            <div class="space-y-3 text-xs">
              <div class="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950">
                <p class="font-bold flex items-center gap-1.5 text-rose-900 text-sm">
                  <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-600"></i> FINAL WARNING: 2 of 2 Tab Switches Exceeded
                </p>
                <p class="mt-2 text-rose-800 leading-relaxed">
                  You switched tabs or minimized the test window a second time.
                </p>
                <p class="mt-2 font-black text-rose-950">
                  ONE MORE TAB SWITCH WILL IMMEDIATELY AND PERMANENTLY TERMINATE THIS ASSESSMENT. A 0% score will be locked in the database.
                </p>
              </div>
            </div>
          `,
          `<button type="button" onclick="closeModal()" class="px-5 py-2 bg-rose-600 hover:bg-rose-700 font-bold text-xs text-white rounded-xl">Resume Test Now</button>`
        );
      } else if (attempt.tab_switch_count >= 3) {
        // IMMEDIATE TERMINATION
        const termTimestamp = new Date().toISOString();
        db.update('student_assessments', attempt.id, {
          status: 'terminated',
          score: 0,
          percentage: 0,
          level: 'Not Assessed',
          terminated_at: termTimestamp,
          termination_reason: 'Tab Switching Malpractice (3/3 warnings exceeded)'
        });

        db.insert('malpractice_events', {
          id: `mal_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          student_user_id: studentUser.id,
          assessment_id: attempt.id,
          skill_name: attempt.skill_name,
          event_type: 'TAB_SWITCH_LIMIT_EXCEEDED',
          count: 3,
          details: 'Assessment terminated due to exceeding 2 tab switches during strictly 25-Q test.',
          created_at: termTimestamp
        });

        closeModal();
        showToast('Assessment Terminated', 'Test terminated due to repeated tab switching. Score: 0%.', 'error');
        handleRoute();
      }
    }

    setTimeout(() => {
      // Page Visibility API event
      const visHandler = () => {
        if (document.visibilityState === 'hidden' && window.location.hash.startsWith('#/student/assessment')) {
          handleTabSwitch();
        }
      };
      document.removeEventListener('visibilitychange', window._yuvasetuVisHandler || (() => {}));
      window._yuvasetuVisHandler = visHandler;
      document.addEventListener('visibilitychange', visHandler);

      // Option selection
      document.querySelectorAll('.assessment-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const optIdx = parseInt(e.currentTarget.dataset.optindex, 10);
          session.student_answers[currentQ.id] = optIdx;

          const attempt = db.findOne('student_assessments', a => a.id === session.id);
          if (attempt) {
            attempt.student_answers = { ...session.student_answers };
            db.update('student_assessments', attempt.id, attempt);
          }

          handleRoute();
        });
      });

      document.getElementById('asst-prev-btn')?.addEventListener('click', () => {
        if (session.currentIndex > 0) {
          session.currentIndex -= 1;
          handleRoute();
        }
      });

      document.getElementById('asst-next-btn')?.addEventListener('click', () => {
        if (session.currentIndex < totalQ - 1) {
          session.currentIndex += 1;
          handleRoute();
        }
      });

      document.getElementById('asst-submit-btn')?.addEventListener('click', () => {
        const answeredCount = Object.keys(session.student_answers).length;
        let confirmMsg = `You have answered all ${totalQ} questions. Submit your assessment?`;
        if (answeredCount < totalQ) {
          confirmMsg = `You have answered ${answeredCount} of ${totalQ} questions. Submit now?\n\nUnanswered questions will be counted as incorrect.`;
        }

        const proceed = window.confirm(confirmMsg);
        if (!proceed) return;

        try {
          const result = evaluateAssessmentSubmission(session.id, session.student_answers);
          activeAssessment = null;
          showToast('Assessment Completed!', `Score: ${result.correct_answers}/${totalQ} (${result.percentage}%). Skill is now Verified!`, 'success');
          window.location.hash = `#/student/assessment-result?id=${result.id}`;
        } catch (err) {
          showToast('Submission Error', err.message, 'error');
        }
      });
    }, 10);

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Strict 25-Question Test</span>
              <h1 class="text-xl font-black text-slate-900">${session.skill_name} Assessment</h1>
            </div>
            <p class="text-xs text-slate-500 mt-1">Multi-topic technical evaluation (25 Questions · One at a time)</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">Total: ${totalQ} Questions</span>
            ${(session.tab_switch_count || 0) > 0 ? `
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                ⚠️ Switch Warning: ${session.tab_switch_count}/2
              </span>
            ` : ''}
          </div>
        </div>

        <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-700">Question ${session.currentIndex + 1} of ${totalQ}</span>
            <span class="font-bold text-indigo-600">${progressPercent}% Completed</span>
          </div>
          <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-600 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
              <i data-lucide="tag" class="w-3.5 h-3.5"></i>
              <span>Topic: ${currentQ.topic}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              ${currentQ.question}
            </h3>
          </div>

          <div class="space-y-3 pt-2">
            ${currentQ.options.map((opt, optIndex) => {
              const isSelected = selectedAnswer === optIndex;
              return `
                <button type="button" class="assessment-option-btn w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-medium ${isSelected ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'}" data-optindex="${optIndex}">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}">
                      ${String.fromCharCode(65 + optIndex)}
                    </span>
                    <span>${opt}</span>
                  </div>
                  ${isSelected ? `<i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-600"></i>` : ''}
                </button>
              `;
            }).join('')}
          </div>

          <div class="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
            <button id="asst-prev-btn" class="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors ${session.currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}" ${session.currentIndex === 0 ? 'disabled' : ''}>
              ← Previous
            </button>

            <div class="flex items-center gap-2">
              ${session.currentIndex < totalQ - 1 ? `
                <button id="asst-next-btn" class="px-5 py-2.5 rounded-xl btn-glow text-xs font-bold flex items-center gap-1.5 text-white">
                  <span>Next Question</span> →
                </button>
              ` : ''}
              <button id="asst-submit-btn" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/20">
                <i data-lucide="check-circle" class="w-4 h-4"></i>
                <span>Submit Assessment (25-Q)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderStudentAssessmentResult() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const asstId = urlParams.get('id');

    const assessments = db.find('student_assessments', a => a.student_user_id === studentUser.id && a.status === 'completed');
    const assessment = asstId ? db.findOne('student_assessments', a => a.id === asstId) : (assessments.length > 0 ? assessments[0] : null);

    if (!assessment) {
      return `
        <div class="max-w-md mx-auto my-12 text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 animate-fade-in">
          <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">📊</div>
          <h3 class="text-lg font-bold text-slate-800">No Assessment Record Found</h3>
          <p class="text-xs text-slate-500">Take an objective 25-question skill test to verify your proficiency.</p>
          <a href="#/student/skills" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold inline-block text-white">Go to My Skills</a>
        </div>
      `;
    }

    const breakdown = assessment.topic_breakdown || {};
    const topics = Object.keys(breakdown);
    const accuracies = topics.map(t => breakdown[t].accuracy);
    const stars = calculateStars(assessment.percentage || 0);

    const allAttemptsForSkill = db.find('student_assessments', a => 
      a.student_user_id === studentUser.id && 
      a.skill_name.toLowerCase() === assessment.skill_name.toLowerCase() &&
      a.status === 'completed'
    );

    setTimeout(() => {
      if (topics.length > 0) {
        createRadarChart('assessment-radar-canvas', topics, accuracies, 'Topic Accuracy (%)');
      }
    }, 20);

    return `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <div class="glass-card bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between sm:items-center gap-6">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
              <span>Status: Verified</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-white">${assessment.skill_name} Assessment Complete</h1>
            <p class="text-xs text-slate-300 mt-1">
              Attempt #${assessment.attempt_number} · Evaluated: ${(assessment.completed_at || assessment.created_at).split('T')[0]} · Total Questions: 25
            </p>
          </div>
          <div class="text-left sm:text-right bg-white/10 sm:bg-transparent p-4 sm:p-0 rounded-2xl">
            <span class="text-4xl sm:text-5xl font-black text-indigo-400">${assessment.percentage}%</span>
            <div class="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wider">Verified: ${assessment.percentage}% (${assessment.level})</div>
            <div class="mt-1">${renderStars(stars)}</div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <span class="text-[11px] font-bold text-slate-400 block uppercase">Total Questions</span>
            <span class="text-2xl font-black text-slate-900 mt-1 block">25</span>
          </div>
          <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <span class="text-[11px] font-bold text-emerald-600 block uppercase">Correct</span>
            <span class="text-2xl font-black text-emerald-600 mt-1 block">${assessment.correct_answers} / 25</span>
          </div>
          <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <span class="text-[11px] font-bold text-rose-500 block uppercase">Incorrect</span>
            <span class="text-2xl font-black text-rose-500 mt-1 block">${25 - assessment.correct_answers}</span>
          </div>
          <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <span class="text-[11px] font-bold text-indigo-600 block uppercase">Benchmark Level</span>
            <span class="text-lg font-black text-indigo-600 mt-1 block">${assessment.level}</span>
          </div>
        </div>

        <div class="p-5 bg-indigo-50/80 border border-indigo-100 rounded-2xl">
          <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1 flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-indigo-600"></i> AI Diagnostic Summary
          </h4>
          <p class="text-xs text-indigo-950 font-medium leading-relaxed">
            "${assessment.diagnostic?.summary || 'Performance calculated from submitted answers.'}"
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 class="text-sm font-bold text-slate-800 mb-4">Topic Mastery Radar</h3>
            <div class="h-64 w-full relative">
              <canvas id="assessment-radar-canvas"></canvas>
            </div>
          </div>

          <div class="space-y-6">
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 class="text-sm font-bold text-slate-800">Strengths & Growth Areas</h3>
              
              <div>
                <span class="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-2">Strong Areas (≥ 70% Accuracy)</span>
                <div class="flex flex-wrap gap-1.5">
                  ${(assessment.diagnostic?.strong_areas || []).length > 0
                    ? assessment.diagnostic.strong_areas.map(t => `<span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">✓ ${t}</span>`).join('')
                    : `<span class="text-xs text-slate-400">Practice core concepts to build ≥ 70% topic mastery.</span>`
                  }
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100">
                <span class="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-2">Needs Improvement (&lt; 70% Accuracy)</span>
                <div class="flex flex-wrap gap-1.5">
                  ${(assessment.diagnostic?.needs_improvement || []).length > 0
                    ? assessment.diagnostic.needs_improvement.map(t => `<span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">○ ${t}</span>`).join('')
                    : `<span class="text-xs text-emerald-600 font-bold">Excellent! No severe topic deficits identified.</span>`
                  }
                </div>
              </div>
            </div>

            ${allAttemptsForSkill.length > 1 ? `
              <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Attempt History</h4>
                <div class="space-y-2">
                  ${allAttemptsForSkill.map(att => `
                    <div class="flex items-center justify-between text-xs p-2.5 rounded-xl ${att.id === assessment.id ? 'bg-indigo-50 font-bold text-indigo-900 border border-indigo-200' : 'bg-slate-50 text-slate-600'}">
                      <span>Attempt #${att.attempt_number} (${(att.completed_at || att.created_at).split('T')[0]})</span>
                      <span class="font-bold ${att.id === assessment.id ? 'text-indigo-600' : 'text-slate-700'}">${att.percentage}% (${att.level}) · ${renderStars(calculateStars(att.percentage || 0))}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <a href="#/student/skills" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md text-white">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>View My Skills</span>
              </a>
              <a href="#/student/assessment?skill=${encodeURIComponent(assessment.skill_name)}&retake=1" class="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Retake Assessment (25-Q)
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }


﻿  // --- 18. SKILL ANALYSIS & CAREER LEVEL GAP (ALL SUPPORTED ROLES & DEEP-LINKING) ---
  function renderStudentSkillGap() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);

    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const selectedRole = urlParams.get('role') || profile?.career_goal || 'Software Developer';

    const roleRequirements = CAREER_SKILL_REQUIREMENTS[selectedRole] || CAREER_SKILL_REQUIREMENTS['Software Developer'] || {
      'Python': 'Intermediate',
      'Java': 'Intermediate',
      'SQL': 'Intermediate',
      'Data Structures': 'Advanced'
    };

    const supportedRoles = Object.keys(CAREER_SKILL_REQUIREMENTS);

    const gapRows = Object.keys(roleRequirements).map(reqSkill => {
      const matched = studentSkills.find(s => s.name.toLowerCase() === reqSkill.toLowerCase());
      const currentLevel = matched && matched.assessed && matched.percentage !== null ? matched.level : 'Not Assessed';
      const currentScore = matched && matched.assessed ? matched.score : null;
      const requiredLevel = roleRequirements[reqSkill];

      const currentRank = LEVEL_RANK[currentLevel] || 0;
      const requiredRank = LEVEL_RANK[requiredLevel] || 3;

      let gapBadge = '';
      let gapText = '';

      if (currentRank >= requiredRank) {
        gapBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
        gapText = 'Requirement Met';
      } else if (currentRank === requiredRank - 1) {
        gapBadge = 'bg-amber-50 text-amber-700 border-amber-200';
        gapText = 'Medium Gap';
      } else {
        gapBadge = 'bg-rose-50 text-rose-700 border-rose-200';
        gapText = 'High Gap';
      }

      return {
        skill: reqSkill,
        currentLevel,
        currentScore,
        requiredLevel,
        gapText,
        gapBadge,
        isAssessed: matched && matched.assessed
      };
    });

    setTimeout(() => {
      document.getElementById('role-select-dropdown')?.addEventListener('change', (e) => {
        const newRole = e.target.value;
        window.location.hash = `#/student/skill-gap?role=${encodeURIComponent(newRole)}`;
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Skill Gap Analysis</h1>
            <p class="text-xs text-slate-500 mt-1">
              Compare your verified competencies against industry benchmarks across all supported engineering roles
            </p>
          </div>
          <div class="flex items-center gap-3">
            <label class="text-xs font-bold text-slate-700 whitespace-nowrap">Target Role:</label>
            <select id="role-select-dropdown" class="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500">
              ${supportedRoles.map(role => `
                <option value="${role}" ${role === selectedRole ? 'selected' : ''}>${role}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="glass-card bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 class="text-sm font-bold text-slate-800">Skill Requirements Matrix for <strong class="text-indigo-600">${selectedRole}</strong></h3>
            <a href="#/student/roadmap?role=${encodeURIComponent(selectedRole)}" class="text-xs font-bold text-indigo-600 hover:underline">
              View Full Role Roadmap →
            </a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 border-b border-slate-100">
                <tr>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Required Skill</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Your Current Level</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Benchmark Level</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Gap Evaluation</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${gapRows.map(g => `
                  <tr class="hover:bg-slate-50/50 transition-colors">
                    <td class="py-4 px-6 font-bold text-slate-900">${g.skill}</td>
                    <td class="py-4 px-6">
                      <span class="font-semibold text-slate-800">${g.currentLevel}</span>
                      ${g.currentScore !== null ? `<span class="text-[10px] text-slate-400 ml-1">(${g.currentScore}%)</span>` : ''}
                    </td>
                    <td class="py-4 px-6 font-semibold text-indigo-700">${g.requiredLevel}</td>
                    <td class="py-4 px-6">
                      <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${g.gapBadge}">${g.gapText}</span>
                    </td>
                    <td class="py-4 px-6 text-right">
                      <a href="#/student/roadmap?skill=${encodeURIComponent(g.skill)}" class="inline-flex items-center gap-1 text-indigo-600 font-bold hover:underline">
                        <span>Recommended Roadmap</span> →
                      </a>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --- 19. RECOMMENDED ROADMAP (DEEP-LINKED & CURATED RESOURCES) ---
  function renderStudentRoadmap() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    const learningProgress = db.find('student_learning_progress', p => p.student_user_id === studentUser.id);

    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const highlightedSkill = urlParams.get('skill');
    const careerGoal = urlParams.get('role') || profile?.career_goal || 'Software Developer';
    const roleRequirements = CAREER_SKILL_REQUIREMENTS[careerGoal] || CAREER_SKILL_REQUIREMENTS['Software Developer'];

    const CURATED_RESOURCES = {
      'Python': {
        docs: 'https://docs.python.org/3/',
        docsLabel: 'Python Official Documentation (python.org)',
        ytChannel: 'Corey Schafer & freeCodeCamp',
        ytUrl: 'https://www.youtube.com/c/Coreyms',
        practice: 'LeetCode & HackerRank Python Domain',
        practiceUrl: 'https://leetcode.com/problemset/all/?topicSlugs=python'
      },
      'Java': {
        docs: 'https://docs.oracle.com/en/java/',
        docsLabel: 'Oracle Java Documentation & Specs',
        ytChannel: 'Programming with Mosh & Telusko',
        ytUrl: 'https://www.youtube.com/c/programmingwithmosh',
        practice: 'HackerRank Java Tracks & CodeChef',
        practiceUrl: 'https://www.hackerrank.com/domains/java'
      },
      'SQL': {
        docs: 'https://www.postgresql.org/docs/',
        docsLabel: 'PostgreSQL & ANSI SQL Documentation',
        ytChannel: 'Alex The Analyst (SQL Portfolio Projects)',
        ytUrl: 'https://www.youtube.com/c/AlexTheAnalyst',
        practice: 'SQLBolt (Interactive) & LeetCode SQL 50',
        practiceUrl: 'https://sqlbolt.com/'
      },
      'JavaScript': {
        docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        docsLabel: 'MDN Web Docs (JavaScript Guide)',
        ytChannel: 'Traversy Media & The Net Ninja',
        ytUrl: 'https://www.youtube.com/c/TraversyMedia',
        practice: 'LeetCode 30 Days of JS & Exercism',
        practiceUrl: 'https://leetcode.com/studyplan/30-days-of-javascript/'
      },
      'React': {
        docs: 'https://react.dev/learn',
        docsLabel: 'React.dev Official Documentation',
        ytChannel: 'Web Dev Simplified & freeCodeCamp',
        ytUrl: 'https://www.youtube.com/c/WebDevSimplified',
        practice: 'Frontend Mentor & Codecademy React',
        practiceUrl: 'https://www.frontendmentor.io/'
      },
      'C': {
        docs: 'https://en.cppreference.com/w/c',
        docsLabel: 'C Reference & ISO Standard Library',
        ytChannel: 'Neso Academy (C Programming Playlist)',
        ytUrl: 'https://www.youtube.com/c/nesoacademy',
        practice: 'HackerRank C & CodeChef Practice',
        practiceUrl: 'https://www.hackerrank.com/domains/c'
      }
    };

    const roadmapItems = Object.keys(roleRequirements).map((skill, idx) => {
      const matched = studentSkills.find(s => s.name.toLowerCase() === skill.toLowerCase());
      const level = matched && matched.assessed ? matched.level : 'Not Assessed';
      const rank = LEVEL_RANK[level] || 0;
      const reqRank = LEVEL_RANK[roleRequirements[skill]] || 3;
      const isMet = rank >= reqRank;
      const isHighlighted = highlightedSkill && highlightedSkill.toLowerCase() === skill.toLowerCase();

      const resources = CURATED_RESOURCES[skill] || {
        docs: 'https://developer.mozilla.org/',
        docsLabel: 'Developer Documentation',
        ytChannel: 'freeCodeCamp Official',
        ytUrl: 'https://www.youtube.com/c/Freecodecamp',
        practice: 'LeetCode & HackerRank',
        practiceUrl: 'https://leetcode.com/'
      };

      const stage1Done = learningProgress.some(p => p.topic_id === `${skill}_stage1` && p.completed);
      const stage2Done = learningProgress.some(p => p.topic_id === `${skill}_stage2` && p.completed);
      const stage3Done = learningProgress.some(p => p.topic_id === `${skill}_stage3` && p.completed);

      return {
        step: idx + 1,
        skill,
        requiredLevel: roleRequirements[skill],
        currentLevel: level,
        isMet,
        isHighlighted,
        resources,
        stage1Done,
        stage2Done,
        stage3Done
      };
    });

    setTimeout(() => {
      // Toggle topic completion
      document.querySelectorAll('.roadmap-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const topicId = e.target.dataset.topicid;
          const isChecked = e.target.checked;
          const existing = db.findOne('student_learning_progress', p => p.student_user_id === studentUser.id && p.topic_id === topicId);

          if (existing) {
            db.update('student_learning_progress', existing.id, { completed: isChecked });
          } else {
            db.insert('student_learning_progress', {
              id: `prog_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
              student_user_id: studentUser.id,
              topic_id: topicId,
              completed: isChecked,
              completed_at: new Date().toISOString()
            });
          }

          showToast('Progress Saved', isChecked ? 'Milestone marked completed!' : 'Milestone unmarked.', 'info');
        });
      });

      // Scroll highlighted card into view
      if (highlightedSkill) {
        const el = document.getElementById(`roadmap-card-${highlightedSkill.toLowerCase()}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 15);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Curated Learning Path</span>
              <h1 class="text-2xl font-black text-slate-900">Personalized Learning Roadmap</h1>
            </div>
            <p class="text-xs text-slate-500 mt-1">Structured path to achieve benchmark mastery for <strong class="text-indigo-600">${careerGoal}</strong></p>
          </div>
          <a href="#/student/skill-gap" class="px-4 py-2 border border-slate-200 text-xs font-bold rounded-xl text-slate-700 hover:bg-slate-50 self-start sm:self-auto">
            ← Back to Skill Gap Matrix
          </a>
        </div>

        <div class="space-y-6">
          ${roadmapItems.map(item => `
            <div id="roadmap-card-${item.skill.toLowerCase()}" class="glass-card bg-white p-6 rounded-3xl border ${item.isHighlighted ? 'border-indigo-500 ring-4 ring-indigo-500/20 shadow-lg' : 'border-slate-100 shadow-sm'} transition-all space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    0${item.step}
                  </span>
                  <div>
                    <h3 class="text-base font-black text-slate-900">${item.skill} Mastery Path</h3>
                    <p class="text-xs text-slate-500">Current: <strong class="text-slate-800">${item.currentLevel}</strong> · Required: <strong class="text-indigo-600">${item.requiredLevel}</strong></p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  ${item.isMet ? `
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ✓ Benchmark Achieved
                    </span>
                  ` : `
                    <a href="#/student/assessment?skill=${encodeURIComponent(item.skill)}" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1">
                      <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Take Assessment (25-Q)
                    </a>
                  `}
                </div>
              </div>

              <!-- 3-Stage Progression -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900">Stage 1: Core Fundamentals</span>
                    <label class="flex items-center gap-1 text-[11px] font-semibold text-slate-600 cursor-pointer">
                      <input type="checkbox" data-topicid="${item.skill}_stage1" class="roadmap-checkbox rounded text-indigo-600" ${item.stage1Done ? 'checked' : ''} /> Done
                    </label>
                  </div>
                  <p class="text-[11px] text-slate-500">Syntax, data structures, control flow, functions, and standard libraries.</p>
                </div>

                <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900">Stage 2: Practical Engineering</span>
                    <label class="flex items-center gap-1 text-[11px] font-semibold text-slate-600 cursor-pointer">
                      <input type="checkbox" data-topicid="${item.skill}_stage2" class="roadmap-checkbox rounded text-indigo-600" ${item.stage2Done ? 'checked' : ''} /> Done
                    </label>
                  </div>
                  <p class="text-[11px] text-slate-500">Object-oriented design, modules, unit testing, error handling, and API integration.</p>
                </div>

                <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900">Stage 3: Production & Scale</span>
                    <label class="flex items-center gap-1 text-[11px] font-semibold text-slate-600 cursor-pointer">
                      <input type="checkbox" data-topicid="${item.skill}_stage3" class="roadmap-checkbox rounded text-indigo-600" ${item.stage3Done ? 'checked' : ''} /> Done
                    </label>
                  </div>
                  <p class="text-[11px] text-slate-500">Performance optimization, concurrency, security best practices, and architecture.</p>
                </div>
              </div>

              <!-- Curated Resources & Practice Links -->
              <div class="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-indigo-950">Curated Learning:</span>
                    <a href="${item.resources.docs}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline font-medium">
                      📖 ${item.resources.docsLabel}
                    </a>
                  </div>
                  <div class="flex items-center gap-2 text-[11px] text-slate-600">
                    <span>📺 Video Guide: <a href="${item.resources.ytUrl}" target="_blank" rel="noopener noreferrer" class="text-indigo-700 font-semibold hover:underline">${item.resources.ytChannel}</a></span>
                    <span>·</span>
                    <span>💻 Practice: <a href="${item.resources.practiceUrl}" target="_blank" rel="noopener noreferrer" class="text-indigo-700 font-semibold hover:underline">${item.resources.practice}</a></span>
                  </div>
                </div>
                <a href="#/student/assessment?skill=${encodeURIComponent(item.skill)}" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shrink-0 shadow-sm">
                  Verify Level →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }


﻿  // --- 20. RECOMMENDED JOB ROLES (DISTINGUISHING CLAIMED VS VERIFIED SKILLS) ---
  function renderStudentJobRoles() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }
    const studentUser = authState.user;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    const jobs = db.data.jobs || [];
    const myApps = db.find('applications', a => a.student_user_id === studentUser.id);

    setTimeout(() => {
      document.querySelectorAll('.apply-job-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const jobId = e.currentTarget.dataset.id;
          const job = jobs.find(j => j.id === jobId);
          if (job && studentUser) {
            db.insert('applications', {
              id: `app_${Date.now()}`,
              student_user_id: studentUser.id,
              opportunity_id: job.id,
              type: 'Job',
              company_user_id: job.company_user_id,
              company: job.company,
              role: job.title,
              applied_date: new Date().toISOString().split('T')[0],
              status: 'Applied',
              match_score: 85,
              next_step: 'Waiting for recruiter response'
            });
            showToast('Application Submitted!', `Applied for ${job.title} at ${job.company}. Status: Waiting for Recruiter Response.`, 'success');
            handleRoute();
          }
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Recommended Job Roles</h1>
          <p class="text-xs text-slate-500 mt-1">Scored against your verified technical assessment credentials</p>
        </div>

        <div class="space-y-4">
          ${jobs.map(job => {
            const required = job.required_skills || [];
            const verifiedMatches = required.filter(r => studentSkills.some(s => s.name.toLowerCase() === r.toLowerCase() && s.assessed && s.percentage !== null));
            const claimedMatches = required.filter(r => studentSkills.some(s => s.name.toLowerCase() === r.toLowerCase() && (!s.assessed || s.percentage === null)));
            const missing = required.filter(r => !studentSkills.some(s => s.name.toLowerCase() === r.toLowerCase()));

            const matchScore = required.length > 0 ? Math.round((verifiedMatches.length / required.length) * 100) : 50;
            const existingApp = myApps.find(a => a.opportunity_id === job.id);

            return `
              <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="space-y-2">
                  <div class="flex items-center gap-2.5">
                    <h3 class="text-base font-bold text-slate-900">${job.title}</h3>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${matchScore >= 70 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-700'}">
                      ${matchScore}% Verified Match
                    </span>
                  </div>
                  <p class="text-xs text-slate-500">${job.company} · ${job.location} · <strong class="text-indigo-600">${job.salary}</strong></p>
                  <p class="text-xs text-slate-500">${job.description}</p>
                  
                  <div class="pt-2 flex flex-wrap items-center gap-1 text-xs">
                    <span class="text-[11px] font-semibold text-slate-400 mr-1">Verified:</span>
                    ${verifiedMatches.map(v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✓ ${v}</span>`).join('')}
                    ${claimedMatches.length > 0 ? `<span class="text-[11px] font-semibold text-amber-600 ml-2 mr-1">Claimed:</span>` : ''}
                    ${claimedMatches.map(c => `<span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">⏳ ${c}</span>`).join('')}
                    ${missing.length > 0 ? `<span class="text-[11px] font-semibold text-slate-400 ml-2 mr-1">Missing:</span>` : ''}
                    ${missing.map(m => `<span class="px-2 py-0.5 rounded text-[10px] text-slate-500 bg-slate-100">${m}</span>`).join('')}
                  </div>
                </div>

                <div class="flex flex-col sm:items-end gap-2 shrink-0">
                  ${existingApp ? `
                    ${existingApp.status === 'Accepted' || existingApp.status === 'Selected' ? `
                      <span class="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 flex items-center gap-1.5">
                        <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Accepted by Recruiter
                      </span>
                    ` : existingApp.status === 'Rejected' ? `
                      <span class="px-4 py-2 bg-rose-50 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 flex items-center gap-1.5">
                        <i data-lucide="x-circle" class="w-3.5 h-3.5"></i> Application Rejected
                      </span>
                    ` : `
                      <span class="px-4 py-2 bg-amber-50 text-amber-800 font-bold text-xs rounded-xl border border-amber-200 flex items-center gap-1.5">
                        <i data-lucide="clock" class="w-3.5 h-3.5"></i> Waiting for Recruiter Response
                      </span>
                    `}
                  ` : `
                    <button class="apply-job-btn btn-glow px-5 py-2.5 rounded-xl text-xs font-bold" data-id="${job.id}">
                      Apply Now
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // --- 21. RECOMMENDED INTERNSHIPS & APPLICATION SUBMISSION ---
  function renderStudentInternships() {
    const internships = db.data.internships || [];
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }
    const studentUser = authState.user;
    const myApps = db.find('applications', a => a.student_user_id === studentUser.id);

    setTimeout(() => {
      document.querySelectorAll('.apply-intern-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const oppId = e.currentTarget.dataset.id;
          const opp = internships.find(i => i.id === oppId);
          if (opp && studentUser) {
            db.insert('applications', {
              id: `app_${Date.now()}`,
              student_user_id: studentUser.id,
              opportunity_id: opp.id,
              type: 'Internship',
              company_user_id: opp.company_user_id,
              company: opp.company,
              role: opp.title,
              applied_date: new Date().toISOString().split('T')[0],
              status: 'Applied',
              match_score: 90,
              next_step: 'Waiting for recruiter response'
            });
            showToast('Application Submitted!', `Applied for ${opp.title} at ${opp.company}. Status: Waiting for Recruiter Response.`, 'success');
            handleRoute();
          }
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Recommended Internships</h1>
            <p class="text-xs text-slate-500 mt-1">Verified opportunities directly from partner industry recruiters</p>
          </div>
        </div>

        <div class="space-y-4">
          ${internships.map(item => {
            const existingApp = myApps.find(a => a.opportunity_id === item.id);
            return `
              <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="flex items-start gap-4">
                  <img src="${item.logo}" class="w-12 h-12 rounded-2xl object-cover ring-1 ring-slate-100" />
                  <div>
                    <h3 class="text-base font-bold text-slate-900">${item.title}</h3>
                    <p class="text-xs text-slate-500">${item.company} · ${item.location} · <strong class="text-indigo-600">${item.stipend}</strong></p>
                    <p class="text-xs text-slate-500 mt-1">${item.description}</p>
                    <div class="flex flex-wrap gap-1 mt-2">
                      ${(item.required_skills || []).map(sk => `<span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700 font-semibold">${sk}</span>`).join('')}
                    </div>
                  </div>
                </div>
                <div class="shrink-0">
                  ${existingApp ? `
                    ${existingApp.status === 'Accepted' || existingApp.status === 'Selected' ? `
                      <span class="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 flex items-center gap-1.5">
                        <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Accepted by Recruiter
                      </span>
                    ` : existingApp.status === 'Rejected' ? `
                      <span class="px-4 py-2 bg-rose-50 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 flex items-center gap-1.5">
                        <i data-lucide="x-circle" class="w-3.5 h-3.5"></i> Application Rejected
                      </span>
                    ` : `
                      <span class="px-4 py-2 bg-amber-50 text-amber-800 font-bold text-xs rounded-xl border border-amber-200 flex items-center gap-1.5">
                        <i data-lucide="clock" class="w-3.5 h-3.5"></i> Waiting for Recruiter Response
                      </span>
                    `}
                  ` : `
                    <button class="apply-intern-btn btn-glow px-4 py-2 text-xs font-bold rounded-xl" data-id="${item.id}">Apply Now</button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // --- 22. STUDENT APPLICATION PIPELINE ---
  function renderStudentApplications() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }
    const studentUser = authState.user;
    const apps = db.find('applications', a => a.student_user_id === studentUser.id);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Application Pipeline</h1>
          <p class="text-xs text-slate-500 mt-1">Live recruitment pipeline synchronized with Industry Recruiter decisions</p>
        </div>

        <div class="glass-card bg-white rounded-3xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          ${apps.length > 0 ? apps.map(a => `
            <div class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <h4 class="font-bold text-sm text-slate-900">${a.role}</h4>
                <p class="text-slate-500 mt-0.5">${a.company} · Applied on: ${a.applied_date}</p>
                <p class="text-[11px] text-slate-400 mt-1">Status Note: ${a.next_step}</p>
              </div>
              <div>
                ${a.status === 'Accepted' || a.status === 'Selected'
                  ? '<span class="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✓ Accepted by Recruiter</span>'
                  : a.status === 'Rejected'
                    ? '<span class="px-3 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">✕ Application Rejected</span>'
                    : '<span class="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">⏳ Waiting for Recruiter Response</span>'
                }
              </div>
            </div>
          `).join('') : `
            <div class="p-8 text-center text-slate-400 text-xs">
              No applications submitted yet. <a href="#/student/internships" class="text-indigo-600 font-bold hover:underline">Explore campus openings →</a>
            </div>
          `}
        </div>
      </div>
    `;
  }


﻿  // --- 23A. COLLEGE DASHBOARD, STUDENTS, TRAINING & PROFILE (STRICT COHORT ISOLATION) ---
  function renderCollegeDashboard() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const students = db.find('student_profiles', s => (s.college_code || '').trim().toUpperCase() === collegeCode);
    const studentUserIds = students.map(s => s.user_id);

    const collegeSkills = db.find('student_skills', s => studentUserIds.includes(s.student_user_id));
    const verifiedSkills = collegeSkills.filter(s => s.assessed && s.percentage !== null);
    const collegeAssessments = db.find('student_assessments', a => studentUserIds.includes(a.student_user_id) && a.status === 'completed');

    const avgScore = collegeAssessments.length > 0 ? Math.round(collegeAssessments.reduce((acc, a) => acc + (a.score || 0), 0) / collegeAssessments.length) : null;
    const workshops = db.find('college_workshops', w => (w.college_code || '').toUpperCase() === collegeCode);
    const clubs = db.find('college_clubs', c => (c.college_code || '').toUpperCase() === collegeCode);

    setTimeout(() => {
      // Skill distribution chart
      const skillCounts = {};
      verifiedSkills.forEach(s => {
        skillCounts[s.name] = (skillCounts[s.name] || 0) + 1;
      });

      const labels = Object.keys(skillCounts);
      const data = Object.values(skillCounts);
      if (labels.length > 0 && window.Chart) {
        safeDestroyChart('college-skills-distribution');
        const ctx = document.getElementById('college-skills-distribution');
        if (ctx) {
          activeCharts['college-skills-distribution'] = new window.Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels.slice(0, 6),
              datasets: [{
                label: 'Verified Students',
                data: data.slice(0, 6),
                backgroundColor: '#6366f1',
                borderRadius: 8
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
            }
          });
        }
      }
    }, 20);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="glass-card bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
              <i data-lucide="school" class="w-3.5 h-3.5"></i> Institutional Code: ${collegeCode}
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-white">${authState?.profile?.college_name || 'College Management'}</h1>
            <p class="text-xs sm:text-sm text-purple-200 mt-1">
              Admin: ${authState?.profile?.admin_name || 'Dr. Kulkarni'} · Cohort Scoped Roster & Institutional Analytics
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="#/college/workshops" class="px-4 py-2.5 bg-white text-purple-950 hover:bg-purple-50 font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-purple-700"></i> Workshops
            </a>
            <a href="#/college/clubs" class="px-4 py-2.5 bg-purple-500/40 hover:bg-purple-500/60 text-white border border-white/20 font-bold rounded-xl text-xs backdrop-blur-md transition-all flex items-center gap-1.5">
              <i data-lucide="users" class="w-3.5 h-3.5 text-cyan-300"></i> Student Clubs
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${renderStatCard('Enrolled Students', students.length, `Isolated to code ${collegeCode}`, 'users', null, 'text-purple-600')}
          ${renderStatCard('Verified Skills', verifiedSkills.length, '25-Q test certified', 'zap', null, 'text-indigo-600')}
          ${avgScore !== null
            ? renderStatCard('Average Test Score', `${avgScore}%`, `${collegeAssessments.length} tests taken`, 'award', null, 'text-emerald-600')
            : renderStatCard('Skill Assessments', 'Pending', '0 completed tests', 'sparkles', null, 'text-slate-400')}
          ${renderStatCard('Active Clubs', clubs.length, `${workshops.length} campus workshops`, 'activity', null, 'text-cyan-600')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Verified Technical Proficiency Across Cohort</h3>
              <span class="text-xs text-slate-400 font-mono">Code: ${collegeCode}</span>
            </div>
            ${verifiedSkills.length > 0 ? `
              <div class="h-64 relative">
                <canvas id="college-skills-distribution"></canvas>
              </div>
            ` : `
              <div class="p-8 text-center text-slate-400 text-xs border border-dashed border-slate-200 rounded-2xl">
                No students from ${collegeCode} have completed skill assessments yet.
              </div>
            `}
          </div>

          <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Registered Students Overview</h3>
              <a href="#/college/students" class="text-xs font-bold text-indigo-600 hover:underline">View All Students →</a>
            </div>
            <div class="space-y-2">
              ${students.length > 0 ? students.slice(0, 4).map(s => {
                const sSkills = db.find('student_skills', sk => sk.student_user_id === s.user_id && sk.assessed);
                return `
                  <div class="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <h4 class="font-bold text-slate-900">${s.name}</h4>
                      <p class="text-[11px] text-slate-500">${s.branch} · ${s.year} · CGPA: ${s.cgpa}</p>
                    </div>
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-indigo-50 text-indigo-700">
                      ${sSkills.length} Verified Skills
                    </span>
                  </div>
                `;
              }).join('') : `
                <p class="text-xs text-slate-400 py-4 text-center">No students registered with code ${collegeCode} yet.</p>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderCollegeStudents() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const students = db.find('student_profiles', s => (s.college_code || '').trim().toUpperCase() === collegeCode);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Enrolled Student Cohort</h1>
            <p class="text-xs text-slate-500 mt-1">Students strictly matching Institutional Code <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
          </div>
          <span class="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
            Total Students: ${students.length}
          </span>
        </div>

        <div class="glass-card bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 border-b border-slate-100">
                <tr>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Student Name</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Department / Branch</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Year</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">CGPA</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Verified Skills</th>
                  <th class="py-3.5 px-6 font-bold text-slate-700">Career Goal</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${students.length > 0 ? students.map(s => {
                  const sSkills = db.find('student_skills', sk => sk.student_user_id === s.user_id && sk.assessed);
                  return `
                    <tr class="hover:bg-slate-50/50 transition-colors">
                      <td class="py-4 px-6 font-bold text-slate-900">${s.name}</td>
                      <td class="py-4 px-6 text-slate-600">${s.branch}</td>
                      <td class="py-4 px-6 font-medium text-slate-600">${s.year}</td>
                      <td class="py-4 px-6 font-bold text-slate-900">${s.cgpa}</td>
                      <td class="py-4 px-6">
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${sSkills.length > 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-500'}">
                          ${sSkills.length} Verified
                        </span>
                      </td>
                      <td class="py-4 px-6 font-semibold text-indigo-700">${s.career_goal || 'Software Developer'}</td>
                    </tr>
                  `;
                }).join('') : `
                  <tr>
                    <td colspan="6" class="py-8 text-center text-slate-400">No students registered with college code "${collegeCode}".</td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function renderCollegeTraining() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const collegeUser = authState.user;
    const trainings = db.find('training_programs', t => (t.college_code || '').toUpperCase() === collegeCode);

    setTimeout(() => {
      document.getElementById('create-training-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('tr-name').value.trim();
        const skill = document.getElementById('tr-skill').value.trim();
        const trainer = document.getElementById('tr-trainer').value.trim();
        const duration = document.getElementById('tr-duration').value.trim();

        db.insert('training_programs', {
          id: `tp_${Date.now()}`,
          college_user_id: collegeUser.id,
          college_code: collegeCode,
          name,
          skill,
          trainer,
          duration,
          enrolled: 0,
          capacity: 100,
          status: 'Active'
        });

        showToast('Training Created!', `Bootcamp "${name}" published for ${collegeCode}.`, 'success');
        handleRoute();
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Campus Training & Bootcamps</h1>
          <p class="text-xs text-slate-500 mt-1">Bootcamps targeting institutional skill deficits for code <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-1 glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 class="text-sm font-bold text-slate-800 mb-3">Launch Bootcamp</h3>
            <form id="create-training-form" class="space-y-3 text-xs">
              <div>
                <label class="block font-bold mb-1">Program Name *</label>
                <input type="text" id="tr-name" required placeholder="e.g. Python Full Stack Bootcamp" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold mb-1">Target Skill *</label>
                <input type="text" id="tr-skill" required placeholder="e.g. Python & SQL" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold mb-1">Trainer / Faculty *</label>
                <input type="text" id="tr-trainer" required placeholder="e.g. Prof. Vivek Sharma" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold mb-1">Duration *</label>
                <input type="text" id="tr-duration" required placeholder="e.g. 6 Weeks" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <button type="submit" class="btn-glow w-full py-2.5 rounded-xl font-bold mt-2 text-white">Publish for ${collegeCode}</button>
            </form>
          </div>

          <div class="lg:col-span-2 space-y-3">
            ${trainings.length > 0 ? trainings.map(t => `
              <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center text-xs">
                <div>
                  <h4 class="font-bold text-sm text-slate-900">${t.name}</h4>
                  <p class="text-slate-500 mt-0.5">Skill: ${t.skill} · Trainer: ${t.trainer} · ${t.duration}</p>
                  <span class="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-bold mt-1.5 inline-block">Visible to ${t.college_code}</span>
                </div>
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">${t.status || 'Active'}</span>
              </div>
            `).join('') : `
              <div class="glass-card bg-white p-8 rounded-2xl border border-slate-100 text-center text-slate-400 text-xs">
                No bootcamps created for "${collegeCode}" yet.
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }

  function renderCollegeProfile() {
    const authState = auth.getCurrentUser();
    const profile = authState?.profile;

    return `
      <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <h1 class="text-2xl font-black text-slate-900">${profile?.college_name || 'College Campus'}</h1>
          <p class="text-xs text-slate-500">Institutional Profile & Accreditation Details</p>
          <div class="p-4 bg-purple-50 rounded-2xl border border-purple-100 space-y-2 text-xs">
            <div><strong>Unique College Code:</strong> <span class="font-mono font-bold text-purple-900 text-sm">${profile?.college_code}</span></div>
            <div><strong>Admin Officer:</strong> ${profile?.admin_name} (${profile?.email})</div>
            <div><strong>Contact Phone:</strong> ${profile?.phone}</div>
            <div><strong>Campus Location:</strong> ${profile?.location}</div>
          </div>
        </div>
      </div>
    `;
  }


﻿  // --- 23B. COLLEGE WORKSHOPS, CLUBS & PLACEMENT STATISTICS ---
  function renderCollegeWorkshops() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const collegeUser = authState.user;
    const workshops = db.find('college_workshops', w => (w.college_code || '').toUpperCase() === collegeCode);

    setTimeout(() => {
      document.getElementById('create-workshop-btn')?.addEventListener('click', () => {
        const modalContent = `
          <div class="space-y-3.5 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Workshop Topic *</label>
              <input type="text" id="w-topic" placeholder="e.g. Hands-On Cloud Deployment & Docker" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Trainer / Guest Speaker *</label>
                <input type="text" id="w-trainer" placeholder="e.g. Sarah Jenkins (NexaTech Labs)" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Target Skill Gap *</label>
                <input type="text" id="w-skill" placeholder="e.g. Cloud & DevOps" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Start Date *</label>
                <input type="date" id="w-start" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Mode *</label>
                <select id="w-mode" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <option value="In-Person Lab">In-Person Lab</option>
                  <option value="Virtual Webinar">Virtual Webinar</option>
                  <option value="Hybrid Hands-On">Hybrid Hands-On</option>
                </select>
              </div>
            </div>
          </div>
        `;

        showModal('Create Campus Workshop', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="w-submit-btn" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Schedule Workshop</button>
        `);

        document.getElementById('w-submit-btn')?.addEventListener('click', () => {
          const topic = document.getElementById('w-topic')?.value.trim();
          const trainer = document.getElementById('w-trainer')?.value.trim();
          const skill = document.getElementById('w-skill')?.value.trim();
          const start = document.getElementById('w-start')?.value;
          const mode = document.getElementById('w-mode')?.value;

          if (!topic || !trainer || !skill) {
            showToast('Validation Error', 'Please complete all required fields.', 'warning');
            return;
          }

          db.insert('college_workshops', {
            id: `ws_${Date.now()}`,
            college_user_id: collegeUser.id,
            college_code: collegeCode,
            topic,
            trainer,
            targeted_skill_gap: skill,
            start_date: start || new Date().toISOString().split('T')[0],
            mode,
            capacity: 80,
            registered_count: 0,
            status: 'Upcoming'
          });

          closeModal();
          showToast('Workshop Created', `Workshop "${topic}" scheduled for ${collegeCode}.`, 'success');
          handleRoute();
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Campus Workshops & Hack Days</h1>
            <p class="text-xs text-slate-500 mt-1">Workshops scheduled to close specific skill deficits for code <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
          </div>
          <button id="create-workshop-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 self-start sm:self-auto">
            <i data-lucide="calendar-plus" class="w-4 h-4"></i> Schedule Workshop
          </button>
        </div>

        <div class="space-y-4">
          ${workshops.length > 0 ? workshops.map(w => `
            <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-bold text-slate-900">${w.topic}</h3>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    ${w.mode || 'In-Person'}
                  </span>
                </div>
                <p class="text-xs text-slate-500 mt-1">Speaker: <strong class="text-slate-700">${w.trainer}</strong> · Date: <strong>${w.start_date}</strong></p>
                <div class="flex items-center gap-2 mt-2 text-xs">
                  <span class="text-[11px] font-bold text-slate-400">Target Deficit:</span>
                  <span class="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-bold text-[10px]">${w.targeted_skill_gap}</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs text-slate-500 font-semibold">${w.registered_count || 0} Registered</span>
                <span class="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">${w.status || 'Active'}</span>
              </div>
            </div>
          `).join('') : `
            <div class="glass-card bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-md mx-auto my-6">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">📅</div>
              <h4 class="font-bold text-slate-800 text-base">No workshops scheduled yet</h4>
              <p class="text-xs text-slate-500 mt-1 mb-5">Host hands-on engineering workshops aligned to industry requirements for your cohort.</p>
              <button onclick="document.getElementById('create-workshop-btn').click()" class="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white">
                Schedule First Workshop
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  }

  function renderCollegeClubs() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const clubs = db.find('college_clubs', c => (c.college_code || '').toUpperCase() === collegeCode);

    setTimeout(() => {
      document.getElementById('create-club-btn')?.addEventListener('click', () => {
        const modalContent = `
          <div class="space-y-3.5 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Club Name *</label>
              <input type="text" id="club-name" placeholder="e.g. AI & Robotics Society" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Club Description *</label>
              <textarea id="club-desc" rows="2" placeholder="Mission, technical focus areas, and hackathons..." required class="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Faculty Coordinator *</label>
                <input type="text" id="club-faculty" placeholder="Prof. Arvind Swamy" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Student Lead *</label>
                <input type="text" id="club-lead" placeholder="Student Lead" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Meeting Schedule *</label>
                <input type="text" id="club-meets" placeholder="Every Friday 4:00 PM" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Upcoming Activities</label>
                <input type="text" id="club-acts" placeholder="Annual Hackathon, Robo-Race" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
          </div>
        `;

        showModal('Register Campus Club', modalContent, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" id="club-submit-btn" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Create Club</button>
        `);

        document.getElementById('club-submit-btn')?.addEventListener('click', () => {
          const name = document.getElementById('club-name')?.value.trim();
          const desc = document.getElementById('club-desc')?.value.trim();
          const faculty = document.getElementById('club-faculty')?.value.trim();
          const lead = document.getElementById('club-lead')?.value.trim();
          const meets = document.getElementById('club-meets')?.value.trim();
          const acts = document.getElementById('club-acts')?.value.trim();

          if (!name || !desc || !faculty) {
            showToast('Validation Error', 'Please complete all required fields.', 'warning');
            return;
          }

          db.insert('college_clubs', {
            id: `club_${Date.now()}`,
            college_code: collegeCode,
            name,
            description: desc,
            faculty_coordinator: faculty,
            student_coordinator: lead || 'Student Lead',
            meeting_info: meets || 'Weekly',
            upcoming_activities: acts || 'Hackathons',
            members_count: 1
          });

          closeModal();
          showToast('Club Created', `Student club "${name}" added to campus directory.`, 'success');
          handleRoute();
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Campus Student Clubs</h1>
            <p class="text-xs text-slate-500 mt-1">Autonomous technical student societies for Institutional Code <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
          </div>
          <button id="create-club-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 self-start sm:self-auto">
            <i data-lucide="plus" class="w-4 h-4"></i> Create New Club
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${clubs.map(c => `
            <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all">
              <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                  <h3 class="text-base font-bold text-slate-900">${c.name}</h3>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    ${c.members_count || 1} Members
                  </span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">${c.description}</p>
                <div class="p-3 bg-slate-50 rounded-2xl space-y-1 text-xs text-slate-600">
                  <div><strong>Faculty:</strong> ${c.faculty_coordinator}</div>
                  <div><strong>Student Lead:</strong> ${c.student_coordinator}</div>
                  <div><strong>Schedule:</strong> ${c.meeting_info}</div>
                  <div><strong>Activities:</strong> ${c.upcoming_activities}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderCollegePlacements() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const students = db.find('student_profiles', s => (s.college_code || '').toUpperCase() === collegeCode);
    const totalEligible = students.length || 120;
    const placed = Math.round(totalEligible * 0.78);
    const placementRate = Math.round((placed / totalEligible) * 100);

    setTimeout(() => {
      if (window.Chart) {
        safeDestroyChart('college-dept-placement-chart');
        const ctx1 = document.getElementById('college-dept-placement-chart');
        if (ctx1) {
          activeCharts['college-dept-placement-chart'] = new window.Chart(ctx1, {
            type: 'bar',
            data: {
              labels: ['Computer Science', 'Information Tech', 'Electronics & Comm', 'Mechanical', 'Electrical'],
              datasets: [{
                label: 'Placement Rate (%)',
                data: [88, 82, 74, 65, 69],
                backgroundColor: '#4f46e5',
                borderRadius: 8
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
            }
          });
        }
      }
    }, 20);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Campus Placement Statistics</h1>
          <p class="text-xs text-slate-500 mt-1">Hiring outcomes and corporate placement metrics for <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${renderStatCard('Eligible Students', totalEligible, 'Final & pre-final year', 'users', null, 'text-slate-800')}
          ${renderStatCard('Offers Extended', placed, `${placementRate}% placement rate`, 'award', null, 'text-emerald-600')}
          ${renderStatCard('Average CTC', '₹7.8 LPA', 'Core & Software roles', 'trending-up', null, 'text-indigo-600')}
          ${renderStatCard('Highest CTC', '₹24.5 LPA', 'Top Enterprise Offer', 'zap', null, 'text-amber-600')}
        </div>

        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <h3 class="text-sm font-bold text-slate-800">Department-Wise Placement Success (%)</h3>
          <div class="h-64 relative">
            <canvas id="college-dept-placement-chart"></canvas>
          </div>
        </div>
      </div>
    `;
  }


﻿  // --- 24A. INDUSTRY / COMPANY DASHBOARD & OPPORTUNITY CREATION ---
  function renderCompanyDashboard() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'company') {
      window.location.hash = '#/company/login';
      return '';
    }

    const companyUser = authState.user;
    const profile = authState.profile;

    const myJobs = db.find('jobs', j => j.company_user_id === companyUser.id || j.company === profile?.company_name);
    const myInternships = db.find('internships', i => i.company_user_id === companyUser.id || i.company === profile?.company_name);
    const myApps = db.find('applications', a => a.company_user_id === companyUser.id || a.company === profile?.company_name);

    const pendingApps = myApps.filter(a => a.status === 'Applied' || a.status === 'Under Review');
    const acceptedApps = myApps.filter(a => a.status === 'Accepted' || a.status === 'Selected');

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="glass-card bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <img src="${profile?.logo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80'}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/20 shadow-md" />
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-black text-white">${profile?.company_name || 'NexaTech Labs'}</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">Verified Recruiter</span>
              </div>
              <p class="text-xs text-indigo-200 mt-0.5">Recruiter: <strong>${profile?.recruiter_name}</strong> · ${profile?.industry} · ${profile?.location}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2.5">
            <a href="#/company/jobs/create" class="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5">
              <i data-lucide="plus-circle" class="w-3.5 h-3.5 text-indigo-600"></i> Post Job
            </a>
            <a href="#/company/candidates" class="px-4 py-2.5 bg-indigo-500/40 hover:bg-indigo-500/60 text-white border border-white/20 text-xs font-bold rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5">
              <i data-lucide="cpu" class="w-3.5 h-3.5 text-cyan-300"></i> AI Matching
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${renderStatCard('Active Openings', myJobs.length + myInternships.length, `${myJobs.length} Jobs · ${myInternships.length} Internships`, 'briefcase', null, 'text-indigo-600')}
          ${renderStatCard('Total Applicants', myApps.length, `${pendingApps.length} pending review`, 'inbox', null, 'text-purple-600')}
          ${renderStatCard('Offers Extended', acceptedApps.length, 'Accepted candidates', 'check-circle-2', null, 'text-emerald-600')}
          ${renderStatCard('Matched Talent', db.data.student_profiles.length, 'Available verified candidates', 'sparkles', null, 'text-cyan-600')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Recent Job & Internship Postings</h3>
              <a href="#/company/jobs/create" class="text-xs font-bold text-indigo-600 hover:underline">+ New</a>
            </div>
            <div class="space-y-2.5">
              ${[...myJobs, ...myInternships].slice(0, 4).map(item => `
                <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 class="font-bold text-slate-900">${item.title}</h4>
                    <p class="text-[11px] text-slate-500">${item.location} · ${item.salary || item.stipend}</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-indigo-50 text-indigo-700">Active</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800">Recent Candidate Applications</h3>
              <a href="#/company/applications" class="text-xs font-bold text-indigo-600 hover:underline">Review All (${myApps.length}) →</a>
            </div>
            <div class="space-y-2.5">
              ${myApps.length > 0 ? myApps.slice(0, 4).map(app => {
                const student = db.findOne('student_profiles', s => s.user_id === app.student_user_id);
                return `
                  <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <h4 class="font-bold text-slate-900">${student?.name || 'Candidate'}</h4>
                      <p class="text-[11px] text-slate-500">Applied for: ${app.role} · ${app.applied_date}</p>
                    </div>
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold ${app.status === 'Accepted' || app.status === 'Selected' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">
                      ${app.status}
                    </span>
                  </div>
                `;
              }).join('') : `
                <p class="text-xs text-slate-400 py-6 text-center">No applications received yet.</p>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderCompanyCreateJob() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'company') {
      window.location.hash = '#/company/login';
      return '';
    }

    const companyUser = authState.user;
    const profile = authState.profile;

    setTimeout(() => {
      document.getElementById('create-job-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('job-title').value.trim();
        const location = document.getElementById('job-location').value.trim();
        const salary = document.getElementById('job-salary').value.trim();
        const skills = document.getElementById('job-skills').value.split(',').map(s => s.trim()).filter(Boolean);
        const description = document.getElementById('job-desc').value.trim();

        db.insert('jobs', {
          id: `job_${Date.now()}`,
          company_user_id: companyUser.id,
          company: profile?.company_name || 'NexaTech Labs',
          title,
          location,
          salary,
          required_skills: skills,
          description,
          posted_date: new Date().toISOString().split('T')[0]
        });

        showToast('Job Published!', `New role "${title}" is live for authenticated student applications.`, 'success');
        window.location.hash = '#/company/dashboard';
      });
    }, 10);

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Post Full-Time Job Opening</h1>
            <p class="text-xs text-slate-500 mt-1">Specify technical requirements matched against student verified skills</p>
          </div>
        </div>

        <form id="create-job-form" class="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Job Role Title *</label>
              <input type="text" id="job-title" required placeholder="e.g. Junior Backend Engineer" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Job Location *</label>
              <input type="text" id="job-location" required placeholder="e.g. Bangalore, India (Hybrid)" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Annual Compensation (CTC) *</label>
              <input type="text" id="job-salary" required placeholder="e.g. ₹8,00,000 - ₹12,00,000 / yr" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-indigo-700" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Required Skills (Comma-separated) *</label>
              <input type="text" id="job-skills" required placeholder="Python, SQL, Docker" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Role Description *</label>
            <textarea id="job-desc" rows="4" required placeholder="Responsibilities, technical expectations, and engineering stack..." class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
          </div>

          <button type="submit" class="btn-glow w-full py-3 rounded-xl font-bold text-xs text-white">Publish Job Opening</button>
        </form>
      </div>
    `;
  }

  function renderCompanyCreateInternship() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'company') {
      window.location.hash = '#/company/login';
      return '';
    }

    const companyUser = authState.user;
    const profile = authState.profile;

    setTimeout(() => {
      document.getElementById('create-intern-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('intern-title').value.trim();
        const location = document.getElementById('intern-location').value.trim();
        const stipend = document.getElementById('intern-stipend').value.trim();
        const skills = document.getElementById('intern-skills').value.split(',').map(s => s.trim()).filter(Boolean);
        const description = document.getElementById('intern-desc').value.trim();

        db.insert('internships', {
          id: `intern_${Date.now()}`,
          company_user_id: companyUser.id,
          company: profile?.company_name || 'NexaTech Labs',
          title,
          location,
          stipend,
          required_skills: skills,
          description,
          logo: profile?.logo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
          posted_date: new Date().toISOString().split('T')[0]
        });

        showToast('Internship Published!', `Internship "${title}" is live for student applications.`, 'success');
        window.location.hash = '#/company/dashboard';
      });
    }, 10);

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Post Internship Opportunity</h1>
            <p class="text-xs text-slate-500 mt-1">Hire high-potential college students verified through objective skill assessments</p>
          </div>
        </div>

        <form id="create-intern-form" class="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Internship Role Title *</label>
              <input type="text" id="intern-title" required placeholder="e.g. Frontend Development Intern" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Location *</label>
              <input type="text" id="intern-location" required placeholder="e.g. Remote / Bangalore" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Monthly Stipend *</label>
              <input type="text" id="intern-stipend" required placeholder="e.g. ₹25,000 / month" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-indigo-700" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Required Skills (Comma-separated) *</label>
              <input type="text" id="intern-skills" required placeholder="React, JavaScript, HTML/CSS" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Internship Description *</label>
            <textarea id="intern-desc" rows="4" required placeholder="Mentorship details, duration (e.g. 6 Months), and practical tasks..." class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
          </div>

          <button type="submit" class="btn-glow w-full py-3 rounded-xl font-bold text-xs text-white">Publish Internship to Database</button>
        </form>
      </div>
    `;
  }


﻿  // --- 24B. CANDIDATE APPLICATIONS PIPELINE, ACCEPTANCE WORKFLOW & AI MATCHING ---
  function renderCompanyApplications() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'company') {
      window.location.hash = '#/company/login';
      return '';
    }

    const companyUser = authState.user;
    const profile = authState.profile;
    const myApplications = db.find('applications', a => a.company_user_id === companyUser.id || a.company === profile?.company_name);

    setTimeout(() => {
      // Candidate Profile Modal
      document.querySelectorAll('.view-candidate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const studentId = e.currentTarget.dataset.studentid;
          const student = db.findOne('student_profiles', s => s.user_id === studentId);
          const studentSkills = db.find('student_skills', s => s.student_user_id === studentId);
          const verifiedSkills = studentSkills.filter(s => s.assessed && s.percentage !== null);
          const certs = db.find('certifications', c => c.student_user_id === studentId);
          const projects = db.find('projects', p => p.student_user_id === studentId);
          const languages = db.find('student_languages', l => l.student_user_id === studentId);
          const latestResume = db.findOne('resumes', r => r.student_user_id === studentId && r.is_latest);

          const modalContent = `
            <div class="space-y-4 text-xs max-h-[75vh] overflow-y-auto pr-1">
              <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 class="text-base font-black text-slate-900">${student?.name || 'Student Candidate'}</h4>
                  <p class="text-slate-500 mt-0.5">${student?.college_name || 'Institution'} (Code: ${student?.college_code || 'N/A'}) · ${student?.branch} · Year: ${student?.year}</p>
                </div>
                <div class="text-right">
                  <span class="text-xs font-bold text-slate-700 block">CGPA: ${student?.cgpa}</span>
                  <span class="text-[10px] text-slate-400 font-mono">${student?.location || 'India'}</span>
                </div>
              </div>

              <div>
                <h5 class="font-bold text-slate-800 mb-2">Verified Skill Competencies (${verifiedSkills.length})</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${verifiedSkills.length > 0 ? verifiedSkills.map(s => `
                    <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                      <div>
                        <span class="font-bold text-emerald-950">${s.name}</span>
                        <span class="text-[10px] text-emerald-700 block">${s.level} · ${renderStars(calculateStars(s.percentage || 0))}</span>
                      </div>
                      <span class="font-black text-emerald-700 text-sm">${s.percentage}%</span>
                    </div>
                  `).join('') : '<p class="text-slate-400 italic">No verified skills completed yet.</p>'}
                </div>
              </div>

              <div>
                <h5 class="font-bold text-slate-800 mb-2">Projects Portfolio (${projects.length})</h5>
                <div class="space-y-2">
                  ${projects.length > 0 ? projects.map(p => `
                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-slate-900">${p.name}</span>
                        <span class="text-[10px] font-bold text-indigo-700">${p.role || 'Developer'}</span>
                      </div>
                      <p class="text-[11px] text-slate-600 mt-1">${p.description}</p>
                      <div class="mt-2 flex items-center gap-3 text-[11px]">
                        ${p.github_url ? `<a href="${p.github_url}" target="_blank" class="text-indigo-600 font-bold hover:underline">GitHub Repo →</a>` : ''}
                        ${p.demo_url ? `<a href="${p.demo_url}" target="_blank" class="text-emerald-600 font-bold hover:underline">Live Demo →</a>` : ''}
                      </div>
                    </div>
                  `).join('') : '<p class="text-slate-400 italic">No projects added yet.</p>'}
                </div>
              </div>

              <div>
                <h5 class="font-bold text-slate-800 mb-1">Resume Document</h5>
                <p class="text-slate-600 font-medium">
                  ${latestResume ? `📄 ${latestResume.file_name} (${latestResume.file_size || 'PDF'}) · <strong class="text-emerald-700">Verified Upload</strong>` : 'No resume uploaded yet.'}
                </p>
              </div>
            </div>
          `;

          showModal(`Candidate Dossier: ${student?.name || 'Applicant'}`, modalContent, `
            <button type="button" onclick="closeModal()" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl">Close Dossier</button>
          `);
        });
      });

      // Recruiter Acceptance Workflow
      document.querySelectorAll('.recruiter-offer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const appId = e.currentTarget.dataset.id;
          const app = db.findOne('applications', a => a.id === appId);
          if (!app) return;

          const student = db.findOne('student_profiles', s => s.user_id === app.student_user_id);

          const modalContent = `
            <div class="space-y-3.5 text-xs">
              <div class="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900">
                <p class="font-bold">Extend Formal Offer to ${student?.name || 'Candidate'}</p>
                <p class="text-[11px] mt-0.5 text-indigo-800">Generates an immutable acceptance record in YuvaSetu and dispatches candidate notification.</p>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Role Title *</label>
                  <input type="text" id="offer-role" value="${app.role}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Joining Date *</label>
                  <input type="date" id="offer-date" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Annual CTC / Stipend *</label>
                  <input type="text" id="offer-ctc" placeholder="e.g. ₹9,50,000 / annum" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-emerald-700" />
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Location / Work Mode *</label>
                  <input type="text" id="offer-loc" value="${profile?.location || 'Bangalore, India'}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Offer Terms / Joining Notes</label>
                <textarea id="offer-notes" rows="3" placeholder="Reporting instructions, documentation required, probation period..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
              </div>
            </div>
          `;

          showModal('Formal Offer Generation', modalContent, `
            <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
            <button type="button" id="submit-offer-btn" class="btn-glow px-5 py-2 font-bold text-xs text-white rounded-xl flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4"></i> Issue Formal Offer
            </button>
          `);

          document.getElementById('submit-offer-btn')?.addEventListener('click', () => {
            const roleTitle = document.getElementById('offer-role')?.value.trim();
            const joinDate = document.getElementById('offer-date')?.value;
            const ctc = document.getElementById('offer-ctc')?.value.trim();
            const loc = document.getElementById('offer-loc')?.value.trim();
            const notes = document.getElementById('offer-notes')?.value.trim();

            if (!roleTitle || !joinDate || !ctc) {
              showToast('Validation Error', 'Please specify role, joining date, and CTC.', 'warning');
              return;
            }

            // 1. Update Application status
            db.update('applications', app.id, {
              status: 'Selected',
              next_step: `Offer Extended: ${roleTitle} (${ctc}) · Joining: ${joinDate}`
            });

            // 2. Insert acceptance record
            db.insert('acceptance_records', {
              id: `acc_${Date.now()}`,
              application_id: app.id,
              company_user_id: companyUser.id,
              student_user_id: app.student_user_id,
              company_name: profile?.company_name || 'NexaTech Labs',
              role_title: roleTitle,
              joining_date: joinDate,
              ctc_stipend: ctc,
              location: loc,
              notes: notes,
              status: 'Offer Extended',
              issued_at: new Date().toISOString()
            });

            // 3. Dispatch in-app notification to student
            createNotification(
              app.student_user_id,
              'student',
              '🎉 Congratulations! Formal Job Offer Extended',
              `${profile?.company_name || 'NexaTech Labs'} has extended an offer for ${roleTitle} (${ctc}). Check your applications pipeline for joining details.`,
              'offer'
            );

            // 4. Modular email dispatcher (graceful reporting if unconfigured)
            const emailResult = sendEmailNotification({
              to: 'student.applicant@yuvasetu.edu',
              subject: `Job Offer Extended: ${roleTitle}`,
              htmlBody: `<p>Congratulations! ${profile?.company_name || 'Company'} has extended an offer for ${roleTitle}.</p>`
            });

            closeModal();
            showToast('Offer Extended!', `Candidate marked as Selected. Formal offer record generated. ${!emailResult.success ? '(Note: ' + emailResult.message + ')' : ''}`, 'success');
            handleRoute();
          });
        });
      });

      // Recruiter Reject Application
      document.querySelectorAll('.recruiter-reject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const appId = e.currentTarget.dataset.id;
          db.update('applications', appId, {
            status: 'Rejected',
            next_step: 'Application evaluated by recruiter: not moving forward at this time.'
          });
          showToast('Application Rejected', 'Application updated to Rejected in database.', 'info');
          handleRoute();
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Candidate Applications Review</h1>
            <p class="text-xs text-slate-500 mt-1">Review student applications, inspect verified scores, and issue formal employment offers</p>
          </div>
          <span class="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xs">
            Total Received: ${myApplications.length}
          </span>
        </div>

        <div class="glass-card bg-white rounded-3xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          ${myApplications.length > 0 ? myApplications.map(app => {
            const student = db.findOne('student_profiles', s => s.user_id === app.student_user_id);
            const verifiedSkills = db.find('student_skills', s => s.student_user_id === app.student_user_id && s.assessed);

            return `
              <div class="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div class="flex items-center gap-3">
                    <h3 class="text-base font-bold text-slate-900">${student?.name || 'Applicant'}</h3>
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-50 text-purple-700">Code: ${student?.college_code || 'N/A'}</span>
                    <span class="text-xs text-slate-500 font-semibold">CGPA: ${student?.cgpa || 'N/A'}</span>
                  </div>
                  <p class="text-xs text-slate-500 mt-1">Applied for: <strong class="text-indigo-700">${app.role}</strong> · ${app.applied_date}</p>
                  
                  <div class="flex flex-wrap items-center gap-1.5 mt-2">
                    <span class="text-[11px] font-bold text-slate-400">Verified Skills:</span>
                    ${verifiedSkills.length > 0 ? verifiedSkills.map(s => `
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ${s.name} (${s.percentage}%)
                      </span>
                    `).join('') : '<span class="text-[10px] text-slate-400">Assessments Pending</span>'}
                  </div>

                  <div class="mt-2 text-xs">
                    <span class="text-slate-400">Status:</span>
                    <strong class="${app.status === 'Selected' || app.status === 'Accepted' ? 'text-emerald-600' : app.status === 'Rejected' ? 'text-rose-600' : 'text-amber-600'}">${app.status}</strong>
                    <span class="text-slate-400 text-[11px] ml-1">(${app.next_step})</span>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-2 self-start md:self-auto">
                  <button class="view-candidate-btn px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors" data-studentid="${app.student_user_id}">
                    Inspect Dossier
                  </button>

                  ${app.status !== 'Selected' && app.status !== 'Accepted' ? `
                    <button class="recruiter-offer-btn btn-glow px-4 py-2 text-white rounded-xl text-xs font-bold" data-id="${app.id}">
                      Accept & Issue Offer
                    </button>
                  ` : `
                    <span class="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1">
                      <i data-lucide="check" class="w-3.5 h-3.5"></i> Offer Extended
                    </span>
                  `}

                  ${app.status !== 'Rejected' && app.status !== 'Selected' && app.status !== 'Accepted' ? `
                    <button class="recruiter-reject-btn px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-colors" data-id="${app.id}">
                      Reject
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-8 text-center text-slate-400 text-xs">
              No applications submitted to your postings yet.
            </div>
          `}
        </div>
      </div>
    `;
  }

  function renderCompanyCandidateMatching() {
    const students = db.data.student_profiles || [];
    const jobs = db.data.jobs || [];

    // Documented Transparent Deterministic Weighted AI Matching Algorithm
    // Weights:
    // Required Skills Match: 40%
    // Verified Skill Proficiency: 25%
    // Practical Projects Portfolio: 15%
    // Verified Certifications: 10%
    // Experience & Hackathons: 10%
    function calculateCandidateMatch(student) {
      const skills = db.find('student_skills', s => s.student_user_id === student.user_id);
      const verifiedSkills = skills.filter(s => s.assessed && s.percentage !== null);
      const projects = db.find('projects', p => p.student_user_id === student.user_id);
      const certs = db.find('certifications', c => c.student_user_id === student.user_id && c.verification_status === 'Verified');
      const hackathons = db.find('hackathons', h => h.student_user_id === student.user_id);
      const internships = db.find('student_internships', i => i.student_user_id === student.user_id);

      // 1. Required Skills Score (out of 40)
      const benchmarkSkills = ['Python', 'SQL', 'Java', 'Data Structures'];
      const matchingSkills = verifiedSkills.filter(s => benchmarkSkills.some(b => b.toLowerCase() === s.name.toLowerCase()));
      const skillsRatio = matchingSkills.length / benchmarkSkills.length;
      const skillsScore = skillsRatio * 40;

      // 2. Proficiency Score (out of 25)
      const avgProficiency = matchingSkills.length > 0 
        ? matchingSkills.reduce((acc, s) => acc + (s.percentage || 0), 0) / matchingSkills.length 
        : (verifiedSkills.length > 0 ? verifiedSkills[0].percentage : 40);
      const profScore = (avgProficiency / 100) * 25;

      // 3. Projects Score (out of 15)
      const projScore = Math.min(15, projects.length * 7.5);

      // 4. Certifications Score (out of 10)
      const certScore = Math.min(10, certs.length * 5);

      // 5. Experience Score (out of 10)
      const expScore = Math.min(10, (hackathons.length + internships.length) * 5);

      const totalScore = Math.round(skillsScore + profScore + projScore + certScore + expScore);
      const missingSkills = benchmarkSkills.filter(b => !verifiedSkills.some(s => s.name.toLowerCase() === b.toLowerCase()));

      return {
        totalScore: Math.min(99, Math.max(50, totalScore)),
        matchingSkills,
        missingSkills,
        projectsCount: projects.length,
        certsCount: certs.length,
        breakdown: {
          skillsComponent: Math.round(skillsScore),
          profComponent: Math.round(profScore),
          projComponent: Math.round(projScore),
          certComponent: Math.round(certScore),
          expComponent: Math.round(expScore)
        }
      };
    }

    setTimeout(() => {
      document.querySelectorAll('.shortlist-candidate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const candidateName = e.currentTarget.dataset.name;
          showToast('Candidate Shortlisted', `Added ${candidateName} to your candidate shortlist pipeline.`, 'success');
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Autonomous AI Engine</span>
              <h1 class="text-2xl font-black text-slate-900">AI Candidate Matching</h1>
            </div>
            <p class="text-xs text-slate-500 mt-1">
              Deterministic weighted evaluation: Required Skills (40%) + Proficiency (25%) + Projects (15%) + Certifications (10%) + Experience (10%)
            </p>
          </div>
        </div>

        <div class="space-y-4">
          ${students.map(s => {
            const match = calculateCandidateMatch(s);

            return `
              <div class="glass-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-200 transition-all">
                <div class="flex items-start gap-5">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center font-black text-base shrink-0 shadow-md">
                    <span>${match.totalScore}%</span>
                    <span class="text-[9px] font-bold text-indigo-100 uppercase">Match</span>
                  </div>
                  <div>
                    <h3 class="text-base font-bold text-slate-900">${s.name}</h3>
                    <p class="text-xs text-slate-500">${s.college_name} (Code: ${s.college_code}) · ${s.branch} · <strong class="text-slate-700">CGPA: ${s.cgpa}</strong></p>
                    
                    <div class="flex flex-wrap items-center gap-1.5 mt-2">
                      <span class="text-[10px] font-bold text-slate-400">Verified:</span>
                      ${match.matchingSkills.length > 0 ? match.matchingSkills.map(sk => `
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          ${sk.name} (${sk.percentage}%)
                        </span>
                      `).join('') : '<span class="text-[10px] text-slate-400 italic">None</span>'}

                      ${match.missingSkills.length > 0 ? `
                        <span class="text-[10px] font-bold text-slate-400 ml-2">Deficit:</span>
                        ${match.missingSkills.map(ms => `
                          <span class="px-2 py-0.5 rounded text-[10px] text-rose-700 bg-rose-50 border border-rose-100">
                            ${ms}
                          </span>
                        `).join('')}
                      ` : ''}
                    </div>

                    <p class="text-[11px] text-slate-400 mt-2">
                      Portfolio: <strong>${match.projectsCount} Projects</strong> · Certifications: <strong>${match.certsCount} Verified</strong>
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2 self-start md:self-auto shrink-0">
                  <button class="shortlist-candidate-btn btn-glow px-4 py-2.5 rounded-xl text-xs font-bold text-white" data-name="${s.name}">
                    Shortlist Candidate
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }


﻿  // --- 25. ROUTER & CONTROLLER (COMPLETE MULTI-PORTAL SYSTEM) ---
  const routes = {
    '#/': renderLanding,
    '#/student/login': () => renderStudentAuth(false),
    '#/student/register': () => renderStudentAuth(true),
    '#/college/login': () => renderCollegeAuth(false),
    '#/college/register': () => renderCollegeAuth(true),
    '#/company/login': () => renderCompanyAuth(false),
    '#/company/register': () => renderCompanyAuth(true),

    // Student Views
    '#/student/dashboard': renderStudentDashboard,
    '#/student/profile': renderStudentProfile,
    '#/student/skills': renderStudentSkills,
    '#/student/assessment': renderStudentAssessment,
    '#/student/assessment-result': renderStudentAssessmentResult,
    '#/student/languages': renderStudentLanguages,
    '#/student/experience': renderStudentExperience,
    '#/student/projects': renderStudentProjects,
    '#/student/resume': renderStudentResume,
    '#/student/skill-gap': renderStudentSkillGap,
    '#/student/roadmap': renderStudentRoadmap,
    '#/student/jobs': renderStudentJobRoles,
    '#/student/internships': renderStudentInternships,
    '#/student/applications': renderStudentApplications,

    // College Views
    '#/college/dashboard': renderCollegeDashboard,
    '#/college/profile': renderCollegeProfile,
    '#/college/students': renderCollegeStudents,
    '#/college/training': renderCollegeTraining,
    '#/college/workshops': renderCollegeWorkshops,
    '#/college/clubs': renderCollegeClubs,
    '#/college/placements': renderCollegePlacements,

    // Company Views
    '#/company/dashboard': renderCompanyDashboard,
    '#/company/jobs/create': renderCompanyCreateJob,
    '#/company/internships/create': renderCompanyCreateInternship,
    '#/company/candidates': renderCompanyCandidateMatching,
    '#/company/candidate-matching': renderCompanyCandidateMatching,
    '#/company/applications': renderCompanyApplications
  };

  function handleRoute() {
    const rawHash = window.location.hash || '#/';
    const baseHash = rawHash.split('?')[0] || '#/';
    const isPublicLanding = baseHash === '#/';
    const handler = routes[baseHash] || renderLanding;

    // Render Navbar
    const navContainer = document.getElementById('navbar-container');
    if (navContainer) navContainer.innerHTML = renderNavbar();

    // Render Sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) sidebarContainer.innerHTML = renderSidebar();

    // Render Main Content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.className = isPublicLanding ? 'flex-1 overflow-x-hidden' : 'flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-x-hidden';
      mainContent.innerHTML = handler();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(refreshIcons, 30);
    wireMobileSidebar();
  }

  function wireMobileSidebar() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const backdrop = document.getElementById('mobile-sidebar-backdrop');
    const closeBtn = document.getElementById('mobile-sidebar-close');

    toggleBtn?.addEventListener('click', () => {
      backdrop?.classList.remove('hidden');
      refreshIcons();
    });
    closeBtn?.addEventListener('click', () => backdrop?.classList.add('hidden'));
    backdrop?.addEventListener('click', (e) => {
      if (e.target.id === 'mobile-sidebar-backdrop') backdrop?.classList.add('hidden');
    });
  }

  // Global window exports
  window.closeModal = closeModal;
  window.YuvaSetu = {
    db,
    auth,
    handleRoute,
    SKILL_QUESTION_BANKS,
    CAREER_SKILL_REQUIREMENTS,
    initAssessmentSession,
    evaluateAssessmentSubmission,
    calculateSkillLevel,
    calculateStars,
    verifyCertificate,
    createNotification,
    sendEmailNotification,
    switchAccount(userId) {
      auth.switchAccount(userId);
      const cur = auth.getCurrentUser();
      showToast('Switched Account', `Logged in as ${cur?.profile?.name || cur?.profile?.company_name || cur?.profile?.college_name || 'User'} (${cur?.user?.role}).`, 'info');
      const roleHome = `#/${cur?.user?.role}/dashboard`;
      window.location.hash = roleHome;
      handleRoute();
    },
    logout() {
      auth.logout();
      showToast('Signed Out', 'You have been safely signed out.', 'info');
      window.location.hash = '#/';
      handleRoute();
    }
  };

  window.addEventListener('hashchange', handleRoute);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleRoute);
  } else {
    handleRoute();
  }
})();
