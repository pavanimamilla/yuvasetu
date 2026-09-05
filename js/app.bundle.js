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
        id: 'usr_std_ravi',
        email: 'ravi.kumar@yuvasetu.edu',
        password: 'Password@123',
        role: 'student',
        createdAt: '2026-08-10'
      },
      {
        id: 'usr_std_priya',
        email: 'priya.sharma@yuvasetu.edu',
        password: 'Password@123',
        role: 'student',
        createdAt: '2026-08-15'
      },
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

    student_profiles: [
      {
        id: 'prof_std_ravi',
        user_id: 'usr_std_ravi',
        name: 'Ravi Kumar',
        email: 'ravi.kumar@yuvasetu.edu',
        phone: '+91 98765 11223',
        college_code: 'AIT-BLR-101',
        college_name: 'Apex Institute of Technology',
        branch: 'Information Technology',
        year: '3rd Year',
        cgpa: '8.7',
        career_goal: 'Full Stack Developer',
        preferred_roles: ['Frontend Developer', 'Full Stack Developer'],
        skills: [],
        certifications: 'AWS Certified Cloud Practitioner, Meta Frontend Certificate',
        projects: 'E-Commerce Microservices, AI Resume Keyword Matcher',
        resume_name: 'Ravi_Kumar_Resume_2026.pdf',
        location: 'Bangalore, Karnataka, India',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        profile_completion: 80
      },
      {
        id: 'prof_std_priya',
        user_id: 'usr_std_priya',
        name: 'Priya Sharma',
        email: 'priya.sharma@yuvasetu.edu',
        phone: '+91 98765 44556',
        college_code: 'AIT-BLR-101',
        college_name: 'Apex Institute of Technology',
        branch: 'Computer Science',
        year: '4th Year',
        cgpa: '9.2',
        career_goal: 'AI/ML Engineer',
        preferred_roles: ['AI/ML Engineer', 'Data Scientist'],
        skills: [],
        certifications: 'DeepLearning.AI TensorFlow Developer, Google Data Analytics',
        projects: 'Predictive Medical Diagnostic Network, Real-Time Audio Emotion Classifier',
        resume_name: 'Priya_Sharma_ML_2026.pdf',
        location: 'New Delhi, India',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        profile_completion: 85
      }
    ],

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

    applications: [
      {
        id: 'app_ravi_1',
        student_user_id: 'usr_std_ravi',
        opportunity_id: 'int_nexa_1',
        type: 'Internship',
        company_user_id: 'usr_comp_nexa',
        company: 'NexaTech Labs',
        role: 'Frontend Development Intern',
        applied_date: '2026-08-28',
        status: 'Applied',
        match_score: 92,
        next_step: 'Application under recruiter review'
      }
    ],

    student_skills: [],

    student_assessments: [],

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
          if (parsed.users && parsed.student_profiles && parsed.college_profiles && parsed.student_skills !== undefined) {
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

  // --- 3. CAREER LEVEL BENCHMARKS & SKILL SCORING LOGIC ---
  const CAREER_SKILL_REQUIREMENTS = {
    'Software Developer': {
      'Python': 'Advanced',
      'Java': 'Advanced',
      'SQL': 'Intermediate',
      'JavaScript': 'Intermediate',
      'Git': 'Intermediate'
    },
    'Frontend Developer': {
      'JavaScript': 'Advanced',
      'React': 'Advanced',
      'HTML/CSS': 'Advanced',
      'TypeScript': 'Intermediate',
      'Git': 'Intermediate'
    },
    'Full Stack Developer': {
      'JavaScript': 'Advanced',
      'React': 'Advanced',
      'SQL': 'Intermediate',
      'Node.js': 'Advanced',
      'Git': 'Intermediate'
    },
    'Data Analyst': {
      'SQL': 'Advanced',
      'Python': 'Intermediate',
      'Excel': 'Advanced',
      'Statistics': 'Intermediate'
    },
    'AI/ML Engineer': {
      'Python': 'Advanced',
      'SQL': 'Intermediate',
      'Machine Learning': 'Advanced',
      'Math/Algorithms': 'Advanced'
    }
  };

  const LEVEL_RANK = {
    'None': 0,
    'Not Assessed': 0,
    'Beginner': 1,
    'Basic': 2,
    'Intermediate': 3,
    'Advanced': 4,
    'Expert': 5
  };

  function calculateSkillLevel(percentage) {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 75) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    if (percentage >= 40) return 'Basic';
    return 'Beginner';
  }

  // --- 4. COMPREHENSIVE SKILL QUESTION BANKS (UP TO 25 QUESTIONS EACH) ---
  const SKILL_QUESTION_BANKS = {
    python: [
      { id: 'py_01', topic: 'Variables & Types', question: 'Which of the following data types is immutable in Python?', options: ['List', 'Dictionary', 'Tuple', 'Set'], correct: 2 },
      { id: 'py_02', topic: 'Operators', question: 'What is the output of `print(2 ** 3 ** 2)` in Python?', options: ['64', '512', '36', '256'], correct: 1 },
      { id: 'py_03', topic: 'Conditionals', question: 'What does the `elif` keyword stand for in Python?', options: ['else if', 'else in function', 'element if', 'execute loop if'], correct: 0 },
      { id: 'py_04', topic: 'Loops', question: 'What keyword terminates a loop immediately before its completion condition is met?', options: ['continue', 'break', 'pass', 'exit'], correct: 1 },
      { id: 'py_05', topic: 'Functions & Scope', question: 'How do you define a function that accepts an arbitrary number of keyword arguments?', options: ['def func(*args):', 'def func(**kwargs):', 'def func(&kwargs):', 'def func($args):'], correct: 1 },
      { id: 'py_06', topic: 'Lists/Tuples/Dicts', question: 'Which method removes and returns the last element from a Python list?', options: ['list.remove()', 'list.delete()', 'list.pop()', 'list.shift()'], correct: 2 },
      { id: 'py_07', topic: 'Lists/Tuples/Dicts', question: 'What is the time complexity of searching for a key in a Python dictionary on average?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], correct: 2 },
      { id: 'py_08', topic: 'Strings & Slicing', question: 'What does `"Python"[::-1]` evaluate to?', options: ['Python', 'nohtyP', 'P', 'IndexError'], correct: 1 },
      { id: 'py_09', topic: 'Exception Handling', question: 'Which block in Python always executes regardless of whether an exception occurred or not?', options: ['catch', 'finally', 'ensure', 'always'], correct: 1 },
      { id: 'py_10', topic: 'Exception Handling', question: 'How do you manually raise an exception in Python?', options: ['throw Exception("error")', 'raise Exception("error")', 'trigger Exception("error")', 'fire Exception("error")'], correct: 1 },
      { id: 'py_11', topic: 'OOP & Classes', question: 'What is the purpose of the `__init__` method in a Python class?', options: ['To initialize and construct a new object instance', 'To destroy an object', 'To create static methods', 'To import parent packages'], correct: 0 },
      { id: 'py_12', topic: 'OOP & Classes', question: 'How is inheritance implemented in Python class definitions?', options: ['class Child extends Parent:', 'class Child(Parent):', 'class Child inherits Parent:', 'class Child: Parent:'], correct: 1 },
      { id: 'py_13', topic: 'OOP & Classes', question: 'What does the `self` parameter represent in Python class methods?', options: ['The class definition itself', 'The current instance of the class', 'A pointer to the global scope', 'A copy of the constructor parameters'], correct: 1 },
      { id: 'py_14', topic: 'Modules', question: 'Which built-in module provides support for mathematical operations and constants like pi and sqrt?', options: ['sys', 'math', 'os', 'num'], correct: 1 },
      { id: 'py_15', topic: 'Modules', question: 'What does `if __name__ == "__main__":` do in a script?', options: ['Checks if the script is imported as a library', 'Executes code only when the script is run directly from the CLI', 'Verifies that Python 3 is running', 'Compiles the file to bytecode'], correct: 1 },
      { id: 'py_16', topic: 'Problem Solving', question: 'What is the output of `[x * 2 for x in range(5) if x % 2 == 0]`?', options: ['[0, 4, 8]', '[0, 2, 4]', '[2, 4, 6]', '[0, 2, 4, 6, 8]'], correct: 0 },
      { id: 'py_17', topic: 'Problem Solving', question: 'What will `bool([])` evaluate to in Python?', options: ['True', 'False', 'None', 'SyntaxError'], correct: 1 },
      { id: 'py_18', topic: 'Strings & Slicing', question: 'Which method splits a string into a list using a specified delimiter?', options: ['string.divide()', 'string.split()', 'string.partition()', 'string.tokenize()'], correct: 1 },
      { id: 'py_19', topic: 'Variables & Types', question: 'What is the difference between `is` and `==` in Python?', options: ['`is` checks value equality, `==` checks identity', '`is` checks memory identity, `==` checks value equality', 'They are strictly identical synonyms', '`is` is only valid for strings'], correct: 1 },
      { id: 'py_20', topic: 'Problem Solving', question: 'What is a Python generator and how does it return values?', options: ['A function that uses `yield` to return values lazily one at a time', 'A compiled C extension', 'A thread worker pool', 'A lambda function that caches memory'], correct: 0 }
    ],

    java: [
      { id: 'jv_01', topic: 'Syntax & Variables', question: 'Which of the following is NOT a primitive data type in Java?', options: ['int', 'boolean', 'String', 'char'], correct: 2 },
      { id: 'jv_02', topic: 'Syntax & Variables', question: 'What is the default value of an uninitialized boolean instance field in Java?', options: ['true', 'false', 'null', '0'], correct: 1 },
      { id: 'jv_03', topic: 'Operators & Conditions', question: 'What does the `instanceof` operator in Java test?', options: ['Object memory size', 'Whether an object is an instance of a specified class or interface', 'Whether two primitives are equal', 'Variable scope'], correct: 1 },
      { id: 'jv_04', topic: 'Loops & Arrays', question: 'How is array length accessed in Java?', options: ['array.length()', 'array.length', 'array.size()', 'array.count'], correct: 1 },
      { id: 'jv_05', topic: 'Methods & Memory', question: 'Where are Java object instances allocated in memory?', options: ['Call Stack', 'Heap Memory', 'Register', 'Hard Disk'], correct: 1 },
      { id: 'jv_06', topic: 'Classes & Objects', question: 'Which access modifier makes a member accessible only within its own class?', options: ['protected', 'package-private', 'public', 'private'], correct: 3 },
      { id: 'jv_07', topic: 'OOP Principles', question: 'Which OOP principle allows a subclass to provide a specific implementation of a method declared in its superclass?', options: ['Method Overriding', 'Method Overloading', 'Encapsulation', 'Abstraction'], correct: 0 },
      { id: 'jv_08', topic: 'OOP Principles', question: 'Which keyword prevents a class from being subclassed in Java?', options: ['static', 'final', 'sealed', 'const'], correct: 1 },
      { id: 'jv_09', topic: 'Inheritance & Interfaces', question: 'Can a Java class implement multiple interfaces?', options: ['Yes', 'No, only one', 'Only if they are abstract', 'Only up to two'], correct: 0 },
      { id: 'jv_10', topic: 'Inheritance & Interfaces', question: 'What keyword is used by a subclass to call the superclass constructor?', options: ['this()', 'super()', 'parent()', 'base()'], correct: 1 },
      { id: 'jv_11', topic: 'Collections Framework', question: 'Which collection implementation maintains elements in ascending sorted order?', options: ['HashSet', 'ArrayList', 'TreeSet', 'LinkedList'], correct: 2 },
      { id: 'jv_12', topic: 'Collections Framework', question: 'Which interface represents key-value mappings in the Java Collections Framework?', options: ['Collection', 'List', 'Map', 'Set'], correct: 2 },
      { id: 'jv_13', topic: 'Exception Handling', question: 'What is the base superclass of all exceptions and errors in Java?', options: ['java.lang.Exception', 'java.lang.Throwable', 'java.lang.Error', 'java.lang.RuntimeException'], correct: 1 },
      { id: 'jv_14', topic: 'Exception Handling', question: 'Which of the following is an unchecked (runtime) exception?', options: ['IOException', 'SQLException', 'NullPointerException', 'ClassNotFoundException'], correct: 2 },
      { id: 'jv_15', topic: 'Problem Solving', question: 'What is the output of `String a = "hello"; String b = new String("hello"); System.out.println(a == b);`?', options: ['true', 'false', 'Compile Error', 'NullPointer'], correct: 1 },
      { id: 'jv_16', topic: 'Problem Solving', question: 'How do you check for content equality between two Strings in Java?', options: ['string1 == string2', 'string1.equals(string2)', 'string1.isEqual(string2)', 'string1.compare(string2)'], correct: 1 },
      { id: 'jv_17', topic: 'Methods & Memory', question: 'What happens when garbage collection runs in the Java Virtual Machine?', options: ['Unused objects on the heap with no live references are reclaimed', 'Stack frames are deleted', 'Classes are unloaded', 'Compiler compiles bytecode'], correct: 0 },
      { id: 'jv_18', topic: 'Classes & Objects', question: 'What is a static method in Java?', options: ['A method tied to class definitions rather than object instances', 'A method that cannot be modified', 'A method that executes asynchronously', 'A thread worker'], correct: 0 }
    ],

    sql: [
      { id: 'sql_01', topic: 'SELECT & WHERE', question: 'Which SQL clause is used to filter records based on specified conditions?', options: ['ORDER BY', 'FILTER BY', 'WHERE', 'GROUP BY'], correct: 2 },
      { id: 'sql_02', topic: 'SELECT & WHERE', question: 'How do you select all distinct/unique values from a column named `city`?', options: ['SELECT UNIQUE city FROM students', 'SELECT DISTINCT city FROM students', 'SELECT DIFFERENT city FROM students', 'SELECT EXCLUSIVE city FROM students'], correct: 1 },
      { id: 'sql_03', topic: 'ORDER BY & LIMIT', question: 'Which keyword sorts SQL query results in descending order?', options: ['ASC', 'DESC', 'DOWN', 'BOTTOM'], correct: 1 },
      { id: 'sql_04', topic: 'GROUP BY & HAVING', question: 'Which clause is used to filter grouped data created by a `GROUP BY` clause?', options: ['WHERE', 'HAVING', 'FILTER', 'CONDITION'], correct: 1 },
      { id: 'sql_05', topic: 'Aggregate Functions', question: 'Which SQL function returns the number of rows matching the query criteria?', options: ['SUM()', 'COUNT()', 'TOTAL()', 'LEN()'], correct: 1 },
      { id: 'sql_06', topic: 'Aggregate Functions', question: 'What does the `AVG(score)` aggregate function calculate?', options: ['Total sum', 'Arithmetic mean', 'Median', 'Standard deviation'], correct: 1 },
      { id: 'sql_07', topic: 'JOINs', question: 'Which JOIN returns all rows from the left table and matched records from the right table?', options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'], correct: 1 },
      { id: 'sql_08', topic: 'JOINs', question: 'What is returned by an `INNER JOIN` between two tables?', options: ['All rows from both tables', 'Only matching rows that satisfy the join condition', 'All rows from the first table only', 'A cartesian product'], correct: 1 },
      { id: 'sql_09', topic: 'Subqueries', question: 'What is a subquery in SQL?', options: ['A query nested inside another SQL statement', 'A table partition', 'An index definition', 'A database trigger'], correct: 0 },
      { id: 'sql_10', topic: 'Constraints & Keys', question: 'What constraint ensures that all values in a column are distinct and not null?', options: ['FOREIGN KEY', 'PRIMARY KEY', 'CHECK', 'DEFAULT'], correct: 1 },
      { id: 'sql_11', topic: 'Constraints & Keys', question: 'What key establishes a relationship referencing a primary key in another table?', options: ['CANDIDATE KEY', 'FOREIGN KEY', 'COMPOSITE KEY', 'SUPER KEY'], correct: 1 },
      { id: 'sql_12', topic: 'Database Concepts', question: 'What does the ACID property `A` stand for in relational transactions?', options: ['Accuracy', 'Atomicity', 'Authentication', 'Availability'], correct: 1 },
      { id: 'sql_13', topic: 'Query Problem Solving', question: 'How do you find students whose names start with the letter "R"?', options: ['WHERE name LIKE "R%"', 'WHERE name = "R*"', 'WHERE name CONTAINS "R"', 'WHERE name IN ("R")'], correct: 0 },
      { id: 'sql_14', topic: 'Query Problem Solving', question: 'What is the purpose of the `COALESCE(val1, val2)` function?', options: ['Returns the first non-null expression from the list', 'Concatenates two strings', 'Calculates standard deviation', 'Converts data types'], correct: 0 },
      { id: 'sql_15', topic: 'Database Concepts', question: 'What is the primary benefit of creating an index on a frequently queried column?', options: ['Reduces disk usage', 'Significantly speeds up SELECT queries', 'Guarantees encryption', 'Enforces business rules'], correct: 1 },
      { id: 'sql_16', topic: 'ORDER BY & LIMIT', question: 'Which clause limits the maximum number of rows returned by a query in PostgreSQL/MySQL?', options: ['TOP', 'LIMIT', 'MAXROWS', 'STOP'], correct: 1 },
      { id: 'sql_17', topic: 'SELECT & WHERE', question: 'How do you select records where a column value is NULL?', options: ['WHERE col = NULL', 'WHERE col IS NULL', 'WHERE col EQUALS NULL', 'WHERE col == NULL'], correct: 1 }
    ],

    javascript: [
      { id: 'js_01', topic: 'Variables & Scope', question: 'What is the difference between `let` and `var` in JavaScript?', options: ['`let` is block-scoped, `var` is function-scoped', '`var` is block-scoped, `let` is function-scoped', 'They have identical scoping rules', '`let` is global only'], correct: 0 },
      { id: 'js_02', topic: 'Data Types', question: 'What is the result of `typeof null` in JavaScript?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2 },
      { id: 'js_03', topic: 'Functions & Closures', question: 'What is a closure in JavaScript?', options: ['A function combined with references to its lexical surrounding state', 'A method to close browser tabs', 'A syntax error handler', 'A JSON parser'], correct: 0 },
      { id: 'js_04', topic: 'Arrays & Objects', question: 'Which array method creates a new array populated with the results of calling a provided function on every element?', options: ['forEach', 'map', 'filter', 'reduce'], correct: 1 },
      { id: 'js_05', topic: 'ES6+ Features', question: 'What does the spread operator `...` do when applied to an array?', options: ['Spreads elements into individual values', 'Sorts array elements', 'Filters falsy values', 'Reverses items'], correct: 0 },
      { id: 'js_06', topic: 'Promises & Async/Await', question: 'What state is a Promise in when it has neither been resolved nor rejected?', options: ['pending', 'fulfilled', 'settled', 'waiting'], correct: 0 },
      { id: 'js_07', topic: 'DOM & Events', question: 'What method is used to attach an event listener to an HTML element?', options: ['element.listen()', 'element.addEventListener()', 'element.on()', 'element.attach()'], correct: 1 },
      { id: 'js_08', topic: 'Error Handling', question: 'Which block catches errors thrown inside a `try` statement?', options: ['except', 'catch', 'rescue', 'fail'], correct: 1 },
      { id: 'js_09', topic: 'Problem Solving', question: 'What is the output of `[] + []` in JavaScript?', options: ['"" (empty string)', '[]', 'NaN', 'undefined'], correct: 0 },
      { id: 'js_10', topic: 'ES6+ Features', question: 'How do you extract properties from an object into distinct variables in ES6?', options: ['Object Destructuring', 'Object Slicing', 'Property Casting', 'Reflection'], correct: 0 },
      { id: 'js_11', topic: 'Promises & Async/Await', question: 'What does an `async` function always return implicitly?', options: ['A Promise', 'An Object', 'A Generator', 'A Callback'], correct: 0 },
      { id: 'js_12', topic: 'Problem Solving', question: 'What will `0 == "0"` and `0 === "0"` return respectively?', options: ['true, false', 'false, false', 'true, true', 'false, true'], correct: 0 },
      { id: 'js_13', topic: 'Arrays & Objects', question: 'Which method returns `true` if at least one element in an array passes the implemented test?', options: ['every()', 'some()', 'includes()', 'find()'], correct: 1 },
      { id: 'js_14', topic: 'DOM & Events', question: 'What does `event.stopPropagation()` prevent?', options: ['Form submission', 'Further propagation of the current event in the capturing and bubbling phases', 'Default browser actions', 'Network requests'], correct: 1 },
      { id: 'js_15', topic: 'Variables & Scope', question: 'What is hoisting in JavaScript?', options: ['Variables and function declarations are moved to top of scope during compilation', 'Asynchronous file uploads', 'Garbage collection cycle', 'HTTP request optimization'], correct: 0 }
    ],

    react: [
      { id: 'rc_01', topic: 'Components & Props', question: 'What is JSX in React?', options: ['A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language', 'A state management library'], correct: 0 },
      { id: 'rc_02', topic: 'Components & Props', question: 'Are props mutable inside child components in React?', options: ['Yes, child components can freely modify props', 'No, props are strictly read-only (immutable)', 'Only if passed through context', 'Only in class components'], correct: 1 },
      { id: 'rc_03', topic: 'State & useState', question: 'Which Hook is used to add reactive local state to a functional component?', options: ['useEffect', 'useState', 'useReducer', 'useRef'], correct: 1 },
      { id: 'rc_04', topic: 'Lifecycle & useEffect', question: 'How do you make `useEffect` run ONLY once when a component mounts?', options: ['Pass an empty dependency array `[]` as the second argument', 'Omit the second argument', 'Pass `null` as second argument', 'Use `useMount()` hook'], correct: 0 },
      { id: 'rc_05', topic: 'Conditional Rendering', question: 'Which operator is commonly used for inline conditional rendering of a JSX element?', options: ['&& (Logical AND)', '?? (Nullish Coalescing)', '|| (Logical OR)', '== (Loose Equality)'], correct: 0 },
      { id: 'rc_06', topic: 'Lists & Keys', question: 'Why must a unique `key` prop be provided when rendering lists of elements in React?', options: ['To apply CSS styles', 'To help React identify which items have changed, added, or removed for efficient reconciliation', 'To encrypt list data', 'To bind click handlers'], correct: 1 },
      { id: 'rc_07', topic: 'State & useState', question: 'What is the correct way to update state that depends on the previous state value?', options: ['setCount(count + 1)', 'setCount(prev => prev + 1)', 'count = count + 1', 'this.count++'], correct: 1 },
      { id: 'rc_08', topic: 'Lifecycle & useEffect', question: 'How do you clean up side effects (like subscriptions or timers) in `useEffect`?', options: ['Return a cleanup function from the effect callback', 'Call `useEffect.cleanup()`', 'Use a `try...finally` block', 'React automatically clears all side effects'], correct: 0 },
      { id: 'rc_09', topic: 'State Management', question: 'What React Hook provides direct mutable reference to a DOM element or persistent value without triggering re-render?', options: ['useRef', 'useMemo', 'useCallback', 'useContext'], correct: 0 },
      { id: 'rc_10', topic: 'State Management', question: 'What is prop drilling in React applications?', options: ['Passing data through multiple intermediate components that do not need it themselves', 'Optimizing props with memoization', 'Validating props with TypeScript', 'Mutating parent state'], correct: 0 },
      { id: 'rc_11', topic: 'Performance', question: 'Which Hook memoizes the result of a computationally expensive calculation?', options: ['useCallback', 'useMemo', 'useRef', 'useState'], correct: 1 },
      { id: 'rc_12', topic: 'Performance', question: 'Which Hook returns a memoized version of a callback function that only changes if dependencies change?', options: ['useCallback', 'useMemo', 'useEffect', 'useReducer'], correct: 0 }
    ],

    c: [
      { id: 'c_01', topic: 'Syntax & Types', question: 'Which format specifier is used with `printf` to print an integer in C?', options: ['%s', '%d', '%f', '%c'], correct: 1 },
      { id: 'c_02', topic: 'Pointers & Memory', question: 'What operator is used to obtain the memory address of a variable in C?', options: ['*', '&', '->', '%'], correct: 1 },
      { id: 'c_03', topic: 'Pointers & Memory', question: 'What does dereferencing a pointer using `*ptr` do?', options: ['Returns the address stored in ptr', 'Accesses the value stored at the address ptr points to', 'Deallocates the memory', 'Multiplies ptr'], correct: 1 },
      { id: 'c_04', topic: 'Pointers & Memory', question: 'Which library function allocates uninitialized dynamic memory on the heap in C?', options: ['malloc()', 'calloc()', 'alloc()', 'new'], correct: 0 },
      { id: 'c_05', topic: 'Pointers & Memory', question: 'Which function must be called to release dynamically allocated heap memory to avoid leaks?', options: ['free()', 'delete()', 'release()', 'clear()'], correct: 0 },
      { id: 'c_06', topic: 'Arrays & Strings', question: 'How are strings represented in the C language?', options: ['As a built-in `String` object', 'As a null-terminated (`\\0`) array of characters', 'As an array of integers', 'As dynamic vectors'], correct: 1 },
      { id: 'c_07', topic: 'Structs & Unions', question: 'Which operator is used to access members of a structure through a pointer?', options: ['. (dot)', '-> (arrow)', ':: (scope)', ': (colon)'], correct: 1 },
      { id: 'c_08', topic: 'Control Flow', question: 'What happens if a `break` statement is omitted in a C `switch` case block?', options: ['Compile Error', 'Execution falls through into the subsequent case', 'Program aborts', 'Loop exits'], correct: 1 },
      { id: 'c_09', topic: 'Preprocessor', question: 'What does the `#include <stdio.h>` directive do?', options: ['Copies the contents of standard I/O header into the source before compilation', 'Executes standard I/O', 'Creates a DLL', 'Links object files'], correct: 0 },
      { id: 'c_10', topic: 'Problem Solving', question: 'What is the size of `char` in C standard?', options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'], correct: 0 }
    ],

    html_css: [
      { id: 'hc_01', topic: 'Semantic Tags', question: 'Which HTML5 semantic element is best suited for wrapping independent, self-contained content?', options: ['<div>', '<article>', '<span>', '<section>'], correct: 1 },
      { id: 'hc_02', topic: 'Box Model', question: 'In the standard CSS Box Model, what components make up the total element space?', options: ['Content + Padding + Border + Margin', 'Content + Border + Margin', 'Width + Height only', 'Padding + Border only'], correct: 0 },
      { id: 'hc_03', topic: 'Flexbox', question: 'In CSS Flexbox, which property aligns items along the cross-axis?', options: ['justify-content', 'align-items', 'flex-direction', 'align-content'], correct: 1 },
      { id: 'hc_04', topic: 'Flexbox', question: 'In CSS Flexbox, which property defines the main axis alignment?', options: ['justify-content', 'align-items', 'flex-wrap', 'gap'], correct: 0 },
      { id: 'hc_05', topic: 'CSS Grid', question: 'Which CSS property defines the number and sizes of columns in a grid container?', options: ['grid-template-columns', 'grid-columns', 'grid-auto-flow', 'column-count'], correct: 0 },
      { id: 'hc_06', topic: 'Specificity', question: 'Which CSS selector has the highest specificity?', options: ['Element selector (p)', 'Class selector (.card)', 'ID selector (#hero)', 'Universal selector (*)'], correct: 2 },
      { id: 'hc_07', topic: 'Responsive Design', question: 'What is the purpose of the `@media` rule in CSS?', options: ['To load video and audio files', 'To apply distinct styles based on screen resolution, viewport width, or device type', 'To link external fonts', 'To animate layout properties'], correct: 1 },
      { id: 'hc_08', topic: 'Forms', question: 'Which attribute in an `<input>` tag ensures the user must fill the field before form submission?', options: ['validate="true"', 'required', 'mandatory', 'checked'], correct: 1 },
      { id: 'hc_09', topic: 'Accessibility', question: 'What attribute should always be provided on `<img>` tags for screen-reader accessibility?', options: ['title', 'alt', 'caption', 'role'], correct: 1 },
      { id: 'hc_10', topic: 'Box Model', question: 'What does `box-sizing: border-box;` do in CSS?', options: ['Includes padding and border in the element’s total specified width and height', 'Removes all margins', 'Renders 3D border', 'Hides overflow content'], correct: 0 }
    ],

    general: [
      { id: 'gn_01', topic: 'Data Structures', question: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?', options: ['Queue', 'Stack', 'Linked List', 'Binary Tree'], correct: 1 },
      { id: 'gn_02', topic: 'Data Structures', question: 'Which data structure operates on a First-In, First-Out (FIFO) principle?', options: ['Stack', 'Queue', 'Hash Table', 'Heap'], correct: 1 },
      { id: 'gn_03', topic: 'Algorithms', question: 'What is the worst-case time complexity of standard Binary Search on a sorted array of size n?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], correct: 1 },
      { id: 'gn_04', topic: 'Git Version Control', question: 'Which Git command creates and switches to a new local branch named `feature`?', options: ['git checkout -b feature', 'git branch -new feature', 'git switch -c feature', 'Both A and C are correct'], correct: 3 },
      { id: 'gn_05', topic: 'Git Version Control', question: 'What command stages modified files to prepare them for a commit in Git?', options: ['git stage', 'git add', 'git push', 'git save'], correct: 1 },
      { id: 'gn_06', topic: 'REST APIs', question: 'Which HTTP method is idempotent and used to retrieve representation of a resource?', options: ['POST', 'GET', 'PATCH', 'CONNECT'], correct: 1 },
      { id: 'gn_07', topic: 'REST APIs', question: 'Which HTTP response status code indicates that a resource was successfully created on the server?', options: ['200 OK', '201 Created', '204 No Content', '301 Moved'], correct: 1 },
      { id: 'gn_08', topic: 'System Design', question: 'What is the primary role of a Load Balancer in distributed web architecture?', options: ['Encrypt user passwords', 'Distribute incoming network traffic across multiple healthy application servers', 'Store user cache', 'Run unit tests'], correct: 1 },
      { id: 'gn_09', topic: 'Algorithms', question: 'What is the average time complexity of finding an element in a balanced Hash Map?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correct: 0 },
      { id: 'gn_10', topic: 'Problem Solving', question: 'What does DRY stand for in software engineering best practices?', options: ['Don\'t Repeat Yourself', 'Do Run Yearly', 'Direct Route Yield', 'Database Relational Yield'], correct: 0 }
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
    register(role, email, password, profileFields) {
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

  // --- 7. TOP NAVBAR (CLEANED OF MENTOR & DEMO SWITCHERS) ---
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

          <!-- User Profile & Auth CTAs -->
          <div class="flex items-center gap-2 sm:gap-3">
            ${user ? `
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

  // --- 8. SIDEBAR COMPONENT (UPDATED PORTAL NAVIGATION) ---
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
        { path: '#/student/assessment', label: 'Skill Assessment', icon: 'sparkles', badge: 'Verified' },
        { path: '#/student/skill-gap', label: 'Skill Gap', icon: 'bar-chart-2' },
        { path: '#/student/roadmap', label: 'Recommended Roadmap', icon: 'map', badge: 'AI Path' },
        { path: '#/student/jobs', label: 'Recommended Job Roles', icon: 'briefcase' },
        { path: '#/student/internships', label: 'Recommended Internships', icon: 'compass' },
        { path: '#/student/applications', label: 'Applications', icon: 'send' }
      ],
      college: [
        { path: '#/college/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { path: '#/college/profile', label: 'Campus Profile', icon: 'school' },
        { path: '#/college/students', label: 'Students Roster', icon: 'users' },
        { path: '#/college/training', label: 'Training Programs', icon: 'award' }
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
              <a href="${item.path}" class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${isActive ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'}">
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
          <div class="p-2 bg-slate-50 rounded-xl text-xs">
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

  // --- 10. REAL STUDENT REGISTRATION & AUTH (MANDATORY COLLEGE CODE) ---
  function renderStudentAuth(isRegister = false) {
    setTimeout(() => {
      document.getElementById('tab-signin')?.addEventListener('click', () => { window.location.hash = '#/student/login'; });
      document.getElementById('tab-register')?.addEventListener('click', () => { window.location.hash = '#/student/register'; });

      // Sign In Form
      document.getElementById('student-signin-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const pass = document.getElementById('signin-password').value;
        const res = auth.login('student', email, pass);
        if (res.success) {
          showToast('Welcome back!', `Signed in as ${res.profile?.name || email}.`, 'success');
          window.location.hash = '#/student/dashboard';
        } else {
          showToast('Authentication Failed', res.message, 'error');
        }
      });

      // Quick test account switcher (Ravi Kumar & Priya Sharma)
      document.getElementById('signin-ravi-btn')?.addEventListener('click', () => {
        auth.switchAccount('usr_std_ravi');
        showToast('Signed in as Ravi Kumar', 'Student profile loaded from database (College: AIT-BLR-101).', 'info');
        window.location.hash = '#/student/dashboard';
      });
      document.getElementById('signin-priya-btn')?.addEventListener('click', () => {
        auth.switchAccount('usr_std_priya');
        showToast('Signed in as Priya Sharma', 'Student profile loaded from database (College: AIT-BLR-101).', 'info');
        window.location.hash = '#/student/dashboard';
      });

      // Comprehensive Real Registration Form with Mandatory College Code
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
          location
        });

        if (res.success) {
          showToast('Account Created!', `Welcome to YuvaSetu, ${name}! Mapped to College Code: ${collegeCode.toUpperCase()}.`, 'success');
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

          <!-- Sign In Form -->
          <form id="student-signin-form" class="${isRegister ? 'hidden' : 'space-y-4 text-xs'}">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Email Address *</label>
              <input type="email" id="signin-email" placeholder="student@university.edu" value="ravi.kumar@yuvasetu.edu" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Password *</label>
              <input type="password" id="signin-password" value="Password@123" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs flex items-center justify-center gap-2">Sign In to Student Dashboard</button>

            <!-- Test Accounts Quick Switcher -->
            <div class="pt-3 border-t border-slate-100 text-center">
              <span class="text-[11px] text-slate-400 block mb-2 font-medium">Quick Test Sign-In (Database Accounts):</span>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" id="signin-ravi-btn" class="py-2 px-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 text-left">
                  <div class="text-[11px] font-bold">Ravi Kumar (Student A)</div>
                  <div class="text-[9px] text-indigo-500 font-normal">Code: AIT-BLR-101 · IT</div>
                </button>
                <button type="button" id="signin-priya-btn" class="py-2 px-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl border border-purple-200 text-left">
                  <div class="text-[11px] font-bold">Priya Sharma (Student B)</div>
                  <div class="text-[9px] text-purple-500 font-normal">Code: AIT-BLR-101 · CSE</div>
                </button>
              </div>
            </div>
          </form>

          <!-- Registration Form with Mandatory College Code -->
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
              <input type="text" id="reg-college-code" required placeholder="e.g. AIT-BLR-101 or ABC123" class="w-full px-3 py-2 bg-white border border-indigo-200 font-bold text-indigo-900 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none uppercase" />
              <p class="text-[10px] text-indigo-600 mt-1">This code connects you directly to your college portal and private campus training.</p>
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
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="AI/ML Engineer">AI/ML Engineer</option>
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

            <button type="submit" class="w-full py-3 rounded-xl font-bold btn-glow text-xs mt-3">Register Student & Save to Database</button>
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

  // --- 13. STUDENT DASHBOARD (ISOLATED REAL DATA) ---
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
    const applications = db.find('applications', a => a.student_user_id === studentUser.id);
    const assessments = db.find('student_assessments', a => a.student_user_id === studentUser.id);
    const hasAssessments = assessments.length > 0;
    const avgScore = hasAssessments ? Math.round(assessments.reduce((acc, a) => acc + (a.score || 0), 0) / assessments.length) : null;

    const myTrainings = db.find('training_programs', t => (t.college_code || '').toUpperCase() === (profile?.college_code || '').toUpperCase());

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="glass-card bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <img src="${profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/30 shadow-md" />
              <div>
                <div class="flex items-center gap-2">
                  <h1 class="text-2xl sm:text-3xl font-black tracking-tight">${profile?.name || 'Student'}</h1>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">Student Account</span>
                </div>
                <p class="text-indigo-200 text-xs sm:text-sm mt-0.5">
                  ${profile?.college_name || 'College'} · Code: <strong class="text-white">${profile?.college_code || 'N/A'}</strong> · Goal: <strong class="text-cyan-300">${profile?.career_goal || 'Software Developer'}</strong>
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <a href="#/student/profile" class="px-4 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5">
                <i data-lucide="user" class="w-4 h-4 text-indigo-600"></i>
                <span>My Profile</span>
              </a>
              <a href="#/student/assessment" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 border border-white/20">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                <span>${hasAssessments ? 'Take Skill Test' : 'Start Skill Test'}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${renderStatCard('Academic Record', profile?.cgpa || 'N/A', `${profile?.branch || 'Branch'} · ${profile?.year || ''}`, 'award', 'Verified Academic Score', 'text-indigo-600')}
          ${renderStatCard('Verified Skills', `${verifiedSkills.length} / ${skills.length}`, `${skills.length - verifiedSkills.length} Assessment Pending`, 'zap', null, 'text-cyan-600')}
          ${renderStatCard('Applications', `${applications.length}`, `${applications.filter(a => a.status === 'Accepted').length} Accepted Offers`, 'send', 'Live recruiter pipeline', 'text-purple-600')}
          ${hasAssessments
            ? renderStatCard('Average Skill Score', `${avgScore}%`, `${assessments.length} Test(s) Completed`, 'sparkles', calculateSkillLevel(avgScore), 'text-emerald-600')
            : renderStatCard('Skill Assessment', 'Not Assessed', '0 Tests Completed', 'sparkles', 'Pending evaluation', 'text-slate-400')
          }
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="space-y-6 lg:col-span-1">
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-bold text-slate-800">Profile & College Code</h3>
                <span class="text-xs font-bold text-indigo-600">${profile?.profile_completion || 80}%</span>
              </div>
              <div class="flex items-center gap-5 my-3">
                ${renderCircularProgress(profile?.profile_completion || 80, 96, 9, '#4f46e5')}
                <div class="text-xs text-slate-500 space-y-1">
                  <div class="text-emerald-600 font-medium">✓ College: ${profile?.college_code}</div>
                  <div class="text-emerald-600 font-medium">✓ Career: ${profile?.career_goal}</div>
                  <div class="text-slate-400">○ Resume: ${profile?.resume_name || 'Uploaded'}</div>
                </div>
              </div>
              <a href="#/student/profile" class="mt-4 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-indigo-600 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 border border-slate-200">
                View & Edit Profile →
              </a>
            </div>

            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-sm font-bold text-slate-800">My Skills</h3>
                <a href="#/student/skills" class="text-xs font-bold text-indigo-600 hover:underline">Manage Skills</a>
              </div>
              <div class="flex flex-wrap gap-2">
                ${skills.length > 0 ? skills.map(s => `
                  <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                    <span>${s.name}</span>
                    <span class="text-[10px] ${s.assessed && s.percentage !== null ? 'text-emerald-700 bg-emerald-100/70' : 'text-amber-700 bg-amber-100/70'} font-bold px-1.5 py-0.5 rounded">
                      ${s.assessed && s.percentage !== null ? `${s.percentage}% (${s.level})` : 'Not Assessed'}
                    </span>
                  </div>
                `).join('') : `
                  <div class="text-xs text-slate-400 py-3">No skills added yet. <a href="#/student/skills" class="text-indigo-600 font-bold hover:underline">Add skills →</a></div>
                `}
              </div>
            </div>

            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-sm font-bold text-slate-800">Campus Training</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">${profile?.college_code}</span>
              </div>
              <div class="space-y-2.5">
                ${myTrainings.length > 0 ? myTrainings.map(t => `
                  <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-xs">
                    <p class="font-bold text-purple-950">${t.name}</p>
                    <p class="text-[11px] text-purple-700 mt-0.5">Trainer: ${t.trainer} · ${t.duration}</p>
                  </div>
                `).join('') : `
                  <p class="text-xs text-slate-400">No active campus trainings posted for your college code yet.</p>
                `}
              </div>
            </div>
          </div>

          <div class="space-y-6 lg:col-span-2">
            <div class="glass-card bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Personalized Career Journey</span>
                <h3 class="text-lg font-bold text-white mt-0.5">Recommended Roadmap for ${profile?.career_goal || 'Software Developer'}</h3>
                <p class="text-xs text-slate-300 mt-1">Generated from your verified skill levels and diagnosed gap matrix</p>
              </div>
              <a href="#/student/roadmap" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap">View Full Roadmap →</a>
            </div>

            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-bold text-slate-800">My Applications Status</h3>
                <a href="#/student/applications" class="text-xs font-bold text-indigo-600 hover:underline">Full Pipeline</a>
              </div>
              <div class="divide-y divide-slate-100">
                ${applications.length > 0 ? applications.map(app => `
                  <div class="py-3 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div class="font-bold text-slate-800">${app.role}</div>
                      <div class="text-slate-400 text-[11px]">${app.company} · Applied: ${app.applied_date}</div>
                      <div class="text-[11px] text-slate-500 mt-0.5">${app.next_step}</div>
                    </div>
                    <div>
                      ${app.status === 'Accepted'
                        ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✓ Accepted</span>'
                        : app.status === 'Rejected'
                          ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">✕ Rejected</span>'
                          : '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">⏳ Waiting for Recruiter Response</span>'
                      }
                    </div>
                  </div>
                `).join('') : `
                  <div class="py-6 text-center text-slate-400 text-xs">
                    No active applications submitted yet. <a href="#/student/internships" class="text-indigo-600 font-bold hover:underline">Browse campus openings →</a>
                  </div>
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
        const updatedName = document.getElementById('ep-name').value.trim();
        const updatedPhone = document.getElementById('ep-phone').value.trim();
        const updatedCollegeCode = document.getElementById('ep-college-code').value.trim().toUpperCase();
        const updatedCollege = document.getElementById('ep-college').value.trim();
        const updatedBranch = document.getElementById('ep-branch').value.trim();
        const updatedYear = document.getElementById('ep-year').value;
        const updatedCgpa = document.getElementById('ep-cgpa').value.trim();
        const updatedGoal = document.getElementById('ep-goal').value.trim();
        const updatedLocation = document.getElementById('ep-loc').value.trim();
        const updatedCerts = document.getElementById('ep-certs').value.trim();
        const updatedProjects = document.getElementById('ep-projects').value.trim();

        if (!updatedCollegeCode) {
          showToast('Validation Error', 'College Code cannot be blank.', 'warning');
          return;
        }

        const updatedProf = auth.updateStudentProfile(studentUser.id, {
          name: updatedName,
          phone: updatedPhone,
          college_code: updatedCollegeCode,
          college_name: updatedCollege,
          branch: updatedBranch,
          year: updatedYear,
          cgpa: updatedCgpa,
          career_goal: updatedGoal,
          preferred_roles: [updatedGoal],
          location: updatedLocation,
          certifications: updatedCerts,
          projects: updatedProjects,
          profile_completion: 90
        });

        if (updatedProf) {
          showToast('Profile Saved!', `Updated profile details and mapped to College Code: ${updatedCollegeCode}.`, 'success');
          handleRoute();
        }
      });
    }, 10);

    return `
      <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <img src="${profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/20" />
            <div>
              <h1 class="text-2xl font-black text-slate-900">${profile?.name}</h1>
              <p class="text-xs text-slate-500">${profile?.email} · ${profile?.phone || 'No phone added'}</p>
              <div class="flex items-center gap-2 mt-2">
                <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  College Code: ${profile?.college_code}
                </span>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                  Goal: ${profile?.career_goal || 'Software Developer'}
                </span>
              </div>
            </div>
          </div>

          <div class="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
            <span class="text-[10px] uppercase font-bold text-indigo-900 block">Current CGPA</span>
            <span class="text-2xl font-black text-indigo-600">${profile?.cgpa || 'N/A'}</span>
          </div>
        </div>

        <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div>
              <h3 class="text-base font-bold text-slate-900">Edit Real Student Profile</h3>
              <p class="text-xs text-slate-400">Values are stored in the database and connect you with your college portal</p>
            </div>
            <span class="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <i data-lucide="database" class="w-3.5 h-3.5"></i> Database Connected
            </span>
          </div>

          <form id="edit-profile-form" class="space-y-4 text-xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name</label>
                <input type="text" id="ep-name" value="${profile?.name || ''}" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Email (Account ID)</label>
                <input type="email" value="${profile?.email || ''}" disabled class="w-full px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-indigo-950 mb-1">College Code * (Mandatory)</label>
                <input type="text" id="ep-college-code" value="${profile?.college_code || ''}" required class="w-full px-3 py-2.5 bg-indigo-50/50 border border-indigo-200 font-bold text-indigo-900 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none uppercase" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">College Name</label>
                <input type="text" id="ep-college" value="${profile?.college_name || ''}" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Course / Branch</label>
                <input type="text" id="ep-branch" value="${profile?.branch || ''}" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Year of Study</label>
                <select id="ep-year" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <option value="1st Year" ${profile?.year === '1st Year' ? 'selected' : ''}>1st Year</option>
                  <option value="2nd Year" ${profile?.year === '2nd Year' ? 'selected' : ''}>2nd Year</option>
                  <option value="3rd Year" ${profile?.year === '3rd Year' ? 'selected' : ''}>3rd Year</option>
                  <option value="4th Year" ${profile?.year === '4th Year' ? 'selected' : ''}>4th Year</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">CGPA</label>
                <input type="text" id="ep-cgpa" value="${profile?.cgpa || ''}" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Primary Career Goal</label>
                <select id="ep-goal" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <option value="Software Developer" ${profile?.career_goal === 'Software Developer' ? 'selected' : ''}>Software Developer</option>
                  <option value="Frontend Developer" ${profile?.career_goal === 'Frontend Developer' ? 'selected' : ''}>Frontend Developer</option>
                  <option value="Full Stack Developer" ${profile?.career_goal === 'Full Stack Developer' ? 'selected' : ''}>Full Stack Developer</option>
                  <option value="Data Analyst" ${profile?.career_goal === 'Data Analyst' ? 'selected' : ''}>Data Analyst</option>
                  <option value="AI/ML Engineer" ${profile?.career_goal === 'AI/ML Engineer' ? 'selected' : ''}>AI/ML Engineer</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" id="ep-phone" value="${profile?.phone || ''}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Certifications</label>
                <input type="text" id="ep-certs" value="${profile?.certifications || ''}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Key Projects</label>
                <input type="text" id="ep-projects" value="${profile?.projects || ''}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Location</label>
              <input type="text" id="ep-loc" value="${profile?.location || ''}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>

            <div class="pt-4 flex justify-end gap-3">
              <a href="#/student/dashboard" class="px-5 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">Cancel</a>
              <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl font-bold flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4"></i>
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  // --- 15. STUDENT SKILLS SYSTEM (UNASSESSED BY DEFAULT, ASSESSMENT MANDATORY) ---
  function renderStudentSkills() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const skills = db.find('student_skills', s => s.student_user_id === studentUser.id);

    function openAddSkillModal() {
      const modalContent = `
        <div class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Select Skill *</label>
            <select id="modal-skill-name" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="SQL">SQL</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="C">C / C++</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Git">Git & Algorithms</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Category</label>
            <select id="modal-skill-category" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Database">Database</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Core Engineering">Core Engineering</option>
            </select>
          </div>
          <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 leading-relaxed">
            <p class="font-bold flex items-center gap-1.5 text-amber-800">
              <i data-lucide="shield-alert" class="w-4 h-4"></i> Verification Requirement
            </p>
            <p class="text-[11px] mt-1 text-amber-700">
              In accordance with YuvaSetu verified standards, newly added skills start with status <strong>"Assessment Required"</strong>. You must complete the skill test to calculate and display your verified percentage and skill level.
            </p>
          </div>
        </div>
      `;
      showModal('Add New Skill', modalContent, `
        <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-xs text-slate-600 hover:text-slate-900">Cancel</button>
        <button type="button" id="modal-save-skill" class="btn-glow px-5 py-2 font-bold text-xs rounded-xl">Add Skill</button>
      `);

      document.getElementById('modal-save-skill')?.addEventListener('click', () => {
        const name = document.getElementById('modal-skill-name').value;
        const category = document.getElementById('modal-skill-category').value;

        const exists = skills.some(s => s.name.toLowerCase() === name.toLowerCase());
        if (exists) {
          showToast('Skill Exists', `${name} is already in your skills list.`, 'warning');
          return;
        }

        db.insert('student_skills', {
          id: `sk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          student_user_id: studentUser.id,
          name: name,
          category: category,
          level: 'Not Assessed',
          assessed: false,
          status: 'Assessment Required',
          percentage: null,
          score: null,
          assessed_at: null
        });

        closeModal();
        showToast('Skill Added!', `${name} added. Complete the assessment to earn your verified score.`, 'success');
        handleRoute();
      });
    }

    setTimeout(() => {
      document.getElementById('add-skill-modal-btn')?.addEventListener('click', openAddSkillModal);
      document.getElementById('empty-add-skill-btn')?.addEventListener('click', openAddSkillModal);

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
      <div class="space-y-6 animate-fade-in">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div>
            <h1 class="text-2xl font-black text-slate-900">My Skills & Verification</h1>
            <p class="text-xs text-slate-500 mt-1">Skills require completion of objective skill-specific tests to display verified scores</p>
          </div>
          <button id="add-skill-modal-btn" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Add Skill</span>
          </button>
        </div>

        ${skills.length === 0 ? `
          <div class="glass-card bg-white p-10 sm:p-14 rounded-3xl border border-slate-100 shadow-sm text-center max-w-lg mx-auto my-6">
            <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
              ⚡
            </div>
            <h3 class="text-lg font-black text-slate-800">No skills added yet</h3>
            <p class="text-xs text-slate-500 mt-2 mb-6 leading-relaxed max-w-sm mx-auto">
              Add technical skills to your profile and complete their corresponding tests to earn verified credentials.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button id="empty-add-skill-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Skill
              </button>
            </div>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${skills.map(s => {
              const isVerified = s.assessed && s.percentage !== null;
              return `
                <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-all">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${s.category || 'Technical'}</span>
                        <h4 class="text-base font-bold text-slate-900 mt-0.5">${s.name}</h4>
                      </div>
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${isVerified ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                        ${isVerified ? '✓ Verified' : '⏳ Assessment Required'}
                      </span>
                    </div>

                    ${isVerified ? `
                      <div class="my-4">
                        <div class="flex justify-between items-center mb-1 text-xs font-semibold">
                          <span class="text-slate-600">Verified Score</span>
                          <span class="font-black text-indigo-600">${s.percentage}%</span>
                        </div>
                        ${renderProgressBar(s.percentage, '', 'bg-emerald-600')}
                        <div class="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                          <span>Level: <strong class="text-slate-800">${s.level}</strong></span>
                          <span>Verified: ${s.assessed_at || 'Recently'}</span>
                        </div>
                      </div>
                    ` : `
                      <div class="p-3.5 bg-amber-50/70 border border-amber-100 rounded-xl my-4 text-xs text-amber-900">
                        <div class="font-bold flex items-center gap-1 text-amber-800">
                          <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-600"></i>
                          <span>Status: Assessment Required</span>
                        </div>
                        <p class="text-[11px] text-amber-700 mt-1">Verified score is not available. Take the objective test to verify your proficiency.</p>
                      </div>
                    `}
                  </div>

                  <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs gap-2">
                    <span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold">${s.level || 'Not Assessed'}</span>
                    <div class="flex items-center gap-2">
                      <a href="#/student/assessment?skill=${encodeURIComponent(s.name)}" class="${isVerified ? 'px-3 py-1.5 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700' : 'btn-glow px-3 py-1.5'} font-bold rounded-lg transition-colors text-[11px] flex items-center gap-1">
                        <i data-lucide="${isVerified ? 'refresh-cw' : 'sparkles'}" class="w-3 h-3"></i>
                        <span>${isVerified ? 'Retake Test' : 'Take Assessment'}</span>
                      </a>
                      <button class="delete-skill-btn text-slate-400 hover:text-rose-600 p-1 text-xs" data-id="${s.id}" title="Remove Skill">
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

  // --- 16. INTERACTIVE SKILL ASSESSMENT ENGINE ---
  let activeAssessment = null;

  function initAssessmentSession(studentUserId, skillName) {
    const bankKey = resolveSkillBankKey(skillName);
    const fullBank = SKILL_QUESTION_BANKS[bankKey] || SKILL_QUESTION_BANKS.general;

    const targetCount = Math.min(Math.max(fullBank.length >= 15 ? 15 : fullBank.length, 12), 20);

    const shuffledBank = [...fullBank].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledBank.slice(0, targetCount).map((q, idx) => {
      const originalOptions = [...q.options];
      const correctText = originalOptions[q.correct];
      const shuffledOptions = [...originalOptions].sort(() => 0.5 - Math.random());
      const newCorrectIndex = shuffledOptions.indexOf(correctText);

      return {
        id: q.id,
        qNumber: idx + 1,
        topic: q.topic,
        question: q.question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex
      };
    });

    activeAssessment = {
      id: `asst_session_${Date.now()}`,
      student_user_id: studentUserId,
      skillName: skillName,
      questions: selectedQuestions,
      answers: {},
      currentIndex: 0,
      startedAt: Date.now()
    };

    return activeAssessment;
  }

  function evaluateAssessmentSubmission(session) {
    const questions = session.questions;
    let correctCount = 0;
    const topicBreakdown = {};

    questions.forEach(q => {
      const studentChoice = session.answers[q.id];
      const isCorrect = studentChoice !== undefined && studentChoice === q.correctIndex;
      if (isCorrect) correctCount++;

      if (!topicBreakdown[q.topic]) {
        topicBreakdown[q.topic] = { total: 0, correct: 0 };
      }
      topicBreakdown[q.topic].total += 1;
      if (isCorrect) topicBreakdown[q.topic].correct += 1;
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const calculatedLevel = calculateSkillLevel(percentage);

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

    const previousAttempts = db.find('student_assessments', a => a.student_user_id === session.student_user_id && a.skill_name.toLowerCase() === session.skillName.toLowerCase());
    const attemptNumber = previousAttempts.length + 1;

    const assessmentRecord = {
      id: `asst_${Date.now()}`,
      student_user_id: session.student_user_id,
      skill_name: session.skillName,
      attempt_number: attemptNumber,
      total_questions: totalQuestions,
      correct_answers: correctCount,
      score: percentage,
      level: calculatedLevel,
      created_at: new Date().toISOString().split('T')[0],
      topic_breakdown: topicBreakdown,
      diagnostic: {
        strong_areas: strongAreas,
        needs_improvement: needsImprovement,
        summary: summaryText
      }
    };

    db.insert('student_assessments', assessmentRecord);

    const existingSkill = db.findOne('student_skills', s => s.student_user_id === session.student_user_id && s.name.toLowerCase() === session.skillName.toLowerCase());
    if (existingSkill) {
      db.update('student_skills', existingSkill.id, {
        assessed: true,
        status: 'Verified',
        percentage: percentage,
        score: percentage,
        level: calculatedLevel,
        assessed_at: new Date().toISOString().split('T')[0]
      });
    } else {
      db.insert('student_skills', {
        id: `sk_${Date.now()}`,
        student_user_id: session.student_user_id,
        name: session.skillName,
        category: 'Technical',
        level: calculatedLevel,
        assessed: true,
        status: 'Verified',
        percentage: percentage,
        score: percentage,
        assessed_at: new Date().toISOString().split('T')[0]
      });
    }

    return assessmentRecord;
  }

  function renderStudentAssessment() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    let requestedSkill = urlParams.get('skill');
    const isRetake = urlParams.get('retake') === '1';

    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    if (!requestedSkill) {
      requestedSkill = studentSkills.length > 0 ? studentSkills[0].name : 'Python';
    }

    if (isRetake || !activeAssessment || activeAssessment.student_user_id !== studentUser.id || (activeAssessment.skillName || '').toLowerCase() !== requestedSkill.toLowerCase()) {
      initAssessmentSession(studentUser.id, requestedSkill);
    }

    const session = activeAssessment;
    const currentQ = session.questions[session.currentIndex];
    const totalQ = session.questions.length;
    const progressPercent = Math.round(((session.currentIndex + 1) / totalQ) * 100);
    const selectedAnswer = session.answers[currentQ.id];

    setTimeout(() => {
      document.querySelectorAll('.assessment-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const optIdx = parseInt(e.currentTarget.dataset.optindex, 10);
          session.answers[currentQ.id] = optIdx;
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
        const answeredCount = Object.keys(session.answers).length;
        if (answeredCount < totalQ) {
          const confirmSubmit = window.confirm(`You have answered ${answeredCount} of ${totalQ} questions. Are you sure you want to submit?`);
          if (!confirmSubmit) return;
        }

        const result = evaluateAssessmentSubmission(session);
        activeAssessment = null;
        showToast('Assessment Complete!', `Verified Score: ${result.score}% (${result.level}).`, 'success');
        window.location.hash = `#/student/assessment-result?id=${result.id}`;
      });

      document.getElementById('asst-skill-select')?.addEventListener('change', (e) => {
        const newSkill = e.target.value;
        activeAssessment = null;
        window.location.hash = `#/student/assessment?skill=${encodeURIComponent(newSkill)}`;
      });
    }, 10);

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Skill Test</span>
              <h1 class="text-xl font-black text-slate-900">${requestedSkill} Assessment</h1>
            </div>
            <p class="text-xs text-slate-500 mt-1">Multi-topic objective evaluation (15–20 questions per attempt)</p>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs font-semibold text-slate-500">Switch Skill:</label>
            <select id="asst-skill-select" class="text-xs font-bold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              ${['Python', 'Java', 'SQL', 'JavaScript', 'React', 'C', 'HTML/CSS', 'Git'].map(sk => `
                <option value="${sk}" ${sk.toLowerCase() === requestedSkill.toLowerCase() ? 'selected' : ''}>${sk}</option>
              `).join('')}
            </select>
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
                <button id="asst-next-btn" class="px-5 py-2.5 rounded-xl btn-glow text-xs font-bold flex items-center gap-1.5">
                  <span>Next Question</span> →
                </button>
              ` : `
                <button id="asst-submit-btn" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/20">
                  <i data-lucide="check-circle" class="w-4 h-4"></i>
                  <span>Submit Assessment</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 17. AI DIAGNOSTIC ASSESSMENT RESULT & TOPIC ANALYSIS ---
  function renderStudentAssessmentResult() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const asstId = urlParams.get('id');

    const assessments = db.find('student_assessments', a => a.student_user_id === studentUser.id);
    const assessment = asstId ? db.findOne('student_assessments', a => a.id === asstId) : (assessments.length > 0 ? assessments[0] : null);

    if (!assessment) {
      return `
        <div class="max-w-md mx-auto my-12 text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 animate-fade-in">
          <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">📊</div>
          <h3 class="text-lg font-bold text-slate-800">No Assessment Record Found</h3>
          <p class="text-xs text-slate-500">Take an objective skill test to view your AI diagnostic and verified score.</p>
          <a href="#/student/assessment" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold inline-block">Take Assessment Now</a>
        </div>
      `;
    }

    const breakdown = assessment.topic_breakdown || {};
    const topics = Object.keys(breakdown);
    const accuracies = topics.map(t => breakdown[t].accuracy);

    setTimeout(() => {
      if (topics.length > 0) {
        createRadarChart('assessment-radar-canvas', topics, accuracies, 'Topic Accuracy (%)');
      }
    }, 20);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="glass-card bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between sm:items-center gap-6">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-2">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
              <span>Verified AI Diagnostic Result</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-white">${assessment.skill_name} Competency Assessment</h1>
            <p class="text-xs text-slate-300 mt-1">
              Attempt #${assessment.attempt_number} · Evaluated: ${assessment.created_at} · ${assessment.correct_answers} / ${assessment.total_questions} Correct
            </p>
          </div>
          <div class="text-left sm:text-right bg-white/10 sm:bg-transparent p-4 sm:p-0 rounded-2xl">
            <span class="text-4xl sm:text-5xl font-black text-indigo-400">${assessment.score}%</span>
            <div class="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wider">Level: ${assessment.level}</div>
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
                    : `<span class="text-xs text-slate-400">Keep practicing to build your first 70%+ topic mastery.</span>`
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

            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <a href="#/student/assessment?skill=${encodeURIComponent(assessment.skill_name)}" class="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Retake Test
              </a>
              <a href="#/student/skill-gap" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
                <span>View Skill Gap</span> →
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 18. SKILL ANALYSIS & CAREER LEVEL GAP ---
  function renderStudentSkillGap() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);

    const careerGoal = profile?.career_goal || 'Software Developer';
    const roleRequirements = CAREER_SKILL_REQUIREMENTS[careerGoal] || CAREER_SKILL_REQUIREMENTS['Software Developer'];

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

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Skill Gap Analysis</h1>
            <p class="text-xs text-slate-500 mt-1">
              Target Career: <strong class="text-indigo-600">${careerGoal}</strong> · Verified level evaluated against industry benchmark
            </p>
          </div>
          <a href="#/student/roadmap" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold self-start sm:self-auto">
            View Recommended Roadmap →
          </a>
        </div>

        <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 border-b border-slate-100">
              <tr>
                <th class="py-3.5 px-6 font-bold text-slate-700">Skill</th>
                <th class="py-3.5 px-6 font-bold text-slate-700">Current Level</th>
                <th class="py-3.5 px-6 font-bold text-slate-700">Required Level</th>
                <th class="py-3.5 px-6 font-bold text-slate-700">Gap Evaluation</th>
                <th class="py-3.5 px-6 font-bold text-slate-700 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${gapRows.map(g => `
                <tr>
                  <td class="py-4 px-6 font-bold text-slate-900">${g.skill}</td>
                  <td class="py-4 px-6">
                    <span class="font-semibold text-slate-800">${g.currentLevel}</span>
                    ${g.currentScore !== null ? `<span class="text-[10px] text-slate-400 ml-1">(${g.currentScore}%)</span>` : ''}
                  </td>
                  <td class="py-4 px-6 font-semibold text-indigo-700">${g.requiredLevel}</td>
                  <td class="py-4 px-6">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${g.gapBadge}">${g.gapText}</span>
                  </td>
                  <td class="py-4 px-6 text-right">
                    <a href="#/student/assessment?skill=${encodeURIComponent(g.skill)}" class="text-indigo-600 font-bold hover:underline">
                      ${g.isAssessed ? 'Retake Test' : 'Take Test'} →
                    </a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- 19. RECOMMENDED ROADMAP (REPLACING LEARNING RESOURCES) ---
  function renderStudentRoadmap() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'student') {
      window.location.hash = '#/student/login';
      return '';
    }

    const studentUser = authState.user;
    const profile = authState.profile;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser.id);
    const careerGoal = profile?.career_goal || 'Software Developer';
    const roleRequirements = CAREER_SKILL_REQUIREMENTS[careerGoal] || CAREER_SKILL_REQUIREMENTS['Software Developer'];

    const milestones = [];

    // 1. High gap skills
    Object.keys(roleRequirements).forEach(skill => {
      const matched = studentSkills.find(s => s.name.toLowerCase() === skill.toLowerCase());
      const level = matched && matched.assessed ? matched.level : 'Not Assessed';
      const rank = LEVEL_RANK[level] || 0;
      const reqRank = LEVEL_RANK[roleRequirements[skill]] || 3;

      if (rank < reqRank) {
        milestones.push({
          step: milestones.length + 1,
          title: `Elevate ${skill} to ${roleRequirements[skill]}`,
          category: 'Skill Elevation',
          desc: `Current level is ${level}. Complete practical scenarios and pass the ${skill} objective assessment to reach ${roleRequirements[skill]}.`,
          actionLabel: `Take ${skill} Assessment`,
          actionLink: `#/student/assessment?skill=${encodeURIComponent(skill)}`
        });
      }
    });

    // 2. Unassessed skills added by student
    studentSkills.filter(s => !s.assessed).forEach(s => {
      milestones.push({
        step: milestones.length + 1,
        title: `Verify ${s.name} Competency`,
        category: 'Assessment Pending',
        desc: `You have added ${s.name} to your profile. Complete the objective test to earn verified credentials.`,
        actionLabel: `Take ${s.name} Test`,
        actionLink: `#/student/assessment?skill=${encodeURIComponent(s.name)}`
      });
    });

    // 3. Project milestone
    milestones.push({
      step: milestones.length + 1,
      title: `Build a Full-Scale ${careerGoal} Portfolio Project`,
      category: 'Portfolio Development',
      desc: `Implement an end-to-end repository demonstrating skills in ${Object.keys(roleRequirements).slice(0, 3).join(', ')}.`,
      actionLabel: 'Update Profile Projects',
      actionLink: '#/student/profile'
    });

    // 4. Internship milestone
    milestones.push({
      step: milestones.length + 1,
      title: 'Apply for Verified Campus Internships',
      category: 'Industry Application',
      desc: 'Browse partner openings matching your verified technical credentials and submit applications.',
      actionLabel: 'Explore Internships',
      actionLink: '#/student/internships'
    });

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Dynamic AI Plan</span>
              <h1 class="text-2xl font-black text-slate-900">Recommended Roadmap</h1>
            </div>
            <p class="text-xs text-slate-500 mt-1">Tailored for: <strong class="text-indigo-600">${careerGoal}</strong></p>
          </div>
          <a href="#/student/skill-gap" class="px-4 py-2 border border-slate-200 text-xs font-bold rounded-xl text-slate-700 hover:bg-slate-50 self-start sm:self-auto">
            View Skill Gap Matrix
          </a>
        </div>

        <div class="space-y-4">
          ${milestones.map(m => `
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-200 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0">
                  ${m.step}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-bold text-slate-900">${m.title}</h3>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${m.category}</span>
                  </div>
                  <p class="text-xs text-slate-500 mt-1">${m.desc}</p>
                </div>
              </div>
              <a href="${m.actionLink}" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold self-start sm:self-auto whitespace-nowrap">
                ${m.actionLabel} →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- 20. RECOMMENDED JOB ROLES (DISTINGUISHING CLAIMED VS VERIFIED SKILLS) ---
  function renderStudentJobRoles() {
    const authState = auth.getCurrentUser();
    const studentUser = authState?.user;
    const studentSkills = db.find('student_skills', s => s.student_user_id === studentUser?.id);
    const jobs = db.data.jobs || [];
    const myApps = db.find('applications', a => a.student_user_id === studentUser?.id);

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
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
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
              <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
                    ${existingApp.status === 'Accepted' ? `
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
    const studentUser = authState?.user;
    const myApps = db.find('applications', a => a.student_user_id === studentUser?.id);

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
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Recommended Internships</h1>
            <p class="text-xs text-slate-500 mt-1">Verified opportunities directly from partner industry recruiters</p>
          </div>
        </div>

        <div class="space-y-4">
          ${internships.map(item => {
            const existingApp = myApps.find(a => a.opportunity_id === item.id);
            return `
              <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="flex items-start gap-4">
                  <img src="${item.logo}" class="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-100" />
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
                    ${existingApp.status === 'Accepted' ? `
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
    const studentUser = authState?.user;
    const apps = db.find('applications', a => a.student_user_id === studentUser?.id);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Application Pipeline</h1>
          <p class="text-xs text-slate-500 mt-1">Live recruitment pipeline synchronized with Industry Recruiter decisions</p>
        </div>

        <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          ${apps.length > 0 ? apps.map(a => `
            <div class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <h4 class="font-bold text-sm text-slate-900">${a.role}</h4>
                <p class="text-slate-500 mt-0.5">${a.company} · Applied on: ${a.applied_date}</p>
                <p class="text-[11px] text-slate-400 mt-1">Latest Status Note: ${a.next_step}</p>
              </div>
              <div>
                ${a.status === 'Accepted'
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

  // --- 23. COLLEGE DASHBOARD & SCOPED COHORT FILTERING (COLLEGE CODE) ---
  function renderCollegeDashboard() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'college') {
      window.location.hash = '#/college/login';
      return '';
    }

    const collegeUser = authState.user;
    const profile = authState.profile;
    const collegeCode = (profile?.college_code || '').trim().toUpperCase();

    const myStudents = db.find('student_profiles', s => (s.college_code || '').trim().toUpperCase() === collegeCode);
    const myStudentUserIds = myStudents.map(s => s.user_id);
    const myAssessments = db.find('student_assessments', a => myStudentUserIds.includes(a.student_user_id));
    const avgScore = myAssessments.length > 0 ? Math.round(myAssessments.reduce((acc, a) => acc + (a.score || 0), 0) / myAssessments.length) : 75;

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="glass-card bg-purple-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 class="text-2xl sm:text-3xl font-black text-white">${profile?.college_name || 'College Dashboard'}</h1>
            <p class="text-xs text-purple-200 mt-1">
              Admin: <strong class="text-white">${profile?.admin_name}</strong> · College Code: <strong class="text-yellow-300 font-mono">${collegeCode}</strong> · ${profile?.location}
            </p>
          </div>
          <a href="#/college/students" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold self-start sm:self-auto">
            View My Students (${myStudents.length})
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          ${renderStatCard('Enrolled Students', myStudents.length, `Code: ${collegeCode}`, 'users', 'Verified Cohort', 'text-purple-600')}
          ${renderStatCard('Assessed', myAssessments.length, 'Skill tests passed', 'sparkles', 'Verified tests', 'text-indigo-600')}
          ${renderStatCard('Avg Skill Score', `${avgScore}%`, 'Institutional mean', 'award', 'Competency score', 'text-cyan-600')}
          ${renderStatCard('Active Trainings', db.find('training_programs', t => (t.college_code || '').toUpperCase() === collegeCode).length, 'Campus bootcamps', 'book-open', 'Campus courses', 'text-emerald-600')}
        </div>

        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-800">Students Belonging to College Code "${collegeCode}"</h3>
            <span class="text-xs text-slate-400">Strictly isolated to your institution</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th class="py-3 px-4 font-bold text-slate-700">Name</th>
                  <th class="py-3 px-4 font-bold text-slate-700">Branch & Year</th>
                  <th class="py-3 px-4 font-bold text-slate-700">CGPA</th>
                  <th class="py-3 px-4 font-bold text-slate-700">Career Goal</th>
                  <th class="py-3 px-4 font-bold text-slate-700">Assessment Status</th>
                  <th class="py-3 px-4 font-bold text-slate-700">Verified Skills</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${myStudents.length > 0 ? myStudents.map(s => {
                  const studentSkills = db.find('student_skills', sk => sk.student_user_id === s.user_id);
                  const verifiedSkills = studentSkills.filter(sk => sk.assessed && sk.percentage !== null);
                  return `
                    <tr>
                      <td class="py-3.5 px-4 font-bold text-slate-900">${s.name}</td>
                      <td class="py-3.5 px-4">${s.branch} (${s.year})</td>
                      <td class="py-3.5 px-4 font-bold text-indigo-600">${s.cgpa}</td>
                      <td class="py-3.5 px-4">${s.career_goal || 'Software Developer'}</td>
                      <td class="py-3.5 px-4">
                        ${verifiedSkills.length > 0
                          ? `<span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">✓ Assessed (${verifiedSkills.length})</span>`
                          : `<span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-amber-50 text-amber-700 border border-amber-200">○ Unassessed</span>`
                        }
                      </td>
                      <td class="py-3.5 px-4">
                        <div class="flex flex-wrap gap-1">
                          ${verifiedSkills.length > 0
                            ? verifiedSkills.map(sk => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">${sk.name} ${sk.percentage}%</span>`).join('')
                            : `<span class="text-slate-400 text-[11px]">No skill tests completed</span>`
                          }
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('') : `
                  <tr>
                    <td colspan="6" class="py-6 text-center text-slate-400">No students registered with College Code "${collegeCode}" yet.</td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function renderCollegeStudents() {
    const authState = auth.getCurrentUser();
    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
    const myStudents = db.find('student_profiles', s => (s.college_code || '').trim().toUpperCase() === collegeCode);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Campus Student Directory</h1>
            <p class="text-xs text-slate-500 mt-1">Displaying students registered with College Code: <strong class="text-purple-700 font-mono">${collegeCode}</strong></p>
          </div>
        </div>

        <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 border-b border-slate-100">
              <tr>
                <th class="py-3 px-6 font-bold text-slate-700">Student Name</th>
                <th class="py-3 px-6 font-bold text-slate-700">Branch & Year</th>
                <th class="py-3 px-6 font-bold text-slate-700">CGPA</th>
                <th class="py-3 px-6 font-bold text-slate-700">Career Goal</th>
                <th class="py-3 px-6 font-bold text-slate-700">Assessment Status</th>
                <th class="py-3 px-6 font-bold text-slate-700">Verified Skills & Scores</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${myStudents.length > 0 ? myStudents.map(s => {
                const studentSkills = db.find('student_skills', sk => sk.student_user_id === s.user_id);
                const verifiedSkills = studentSkills.filter(sk => sk.assessed && sk.percentage !== null);
                return `
                  <tr>
                    <td class="py-4 px-6 font-bold text-slate-900">
                      <div>${s.name}</div>
                      <div class="text-[10px] text-slate-400 font-mono">${s.email}</div>
                    </td>
                    <td class="py-4 px-6">${s.branch} (${s.year})</td>
                    <td class="py-4 px-6 font-bold text-indigo-600">${s.cgpa}</td>
                    <td class="py-4 px-6">${s.career_goal || 'Software Developer'}</td>
                    <td class="py-4 px-6">
                      ${verifiedSkills.length > 0
                        ? `<span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">✓ Assessed (${verifiedSkills.length})</span>`
                        : `<span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-amber-50 text-amber-700 border border-amber-200">○ Unassessed</span>`
                      }
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex flex-wrap gap-1.5">
                        ${verifiedSkills.length > 0
                          ? verifiedSkills.map(sk => `
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              ${sk.name} ${sk.percentage}% (${sk.level})
                            </span>
                          `).join('')
                          : `<span class="text-slate-400 text-[11px]">No assessments completed yet</span>`
                        }
                      </div>
                    </td>
                  </tr>
                `;
              }).join('') : `
                <tr><td colspan="6" class="py-8 text-center text-slate-400">No students registered with College Code "${collegeCode}" yet.</td></tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderCollegeTraining() {
    const authState = auth.getCurrentUser();
    const collegeUser = authState?.user;
    const collegeCode = (authState?.profile?.college_code || '').trim().toUpperCase();
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

        showToast('Training Created!', `Training "${name}" mapped to College Code ${collegeCode}.`, 'success');
        handleRoute();
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Campus Training Programs</h1>
            <p class="text-xs text-slate-500 mt-1">Trainings mapped to College Code <strong class="text-purple-700 font-mono">${collegeCode}</strong> (visible only to your students)</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-1 glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 class="text-sm font-bold text-slate-800 mb-3">Launch New Bootcamp</h3>
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
                <label class="block font-bold mb-1">Instructor / Trainer *</label>
                <input type="text" id="tr-trainer" required placeholder="e.g. Prof. Vivek Sharma" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold mb-1">Duration *</label>
                <input type="text" id="tr-duration" required placeholder="e.g. 6 Weeks" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <button type="submit" class="btn-glow w-full py-2.5 rounded-xl font-bold mt-2">Publish Training for ${collegeCode}</button>
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
                No trainings published for code "${collegeCode}" yet.
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
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h1 class="text-2xl font-black text-slate-900">${profile?.college_name}</h1>
          <p class="text-xs text-slate-500">Institutional Profile & Accreditation Details</p>
          <div class="p-4 bg-purple-50 rounded-xl border border-purple-100 space-y-2 text-xs">
            <div><strong>Unique College Code:</strong> <span class="font-mono font-bold text-purple-900 text-sm">${profile?.college_code}</span></div>
            <div><strong>Admin Officer:</strong> ${profile?.admin_name} (${profile?.email})</div>
            <div><strong>Contact Phone:</strong> ${profile?.phone}</div>
            <div><strong>Campus Location:</strong> ${profile?.location}</div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 24. INDUSTRY / COMPANY DASHBOARD, JOB POSTING & APPLICATION REVIEW ---
  function renderCompanyDashboard() {
    const authState = auth.getCurrentUser();
    if (!authState || authState.user.role !== 'company') {
      window.location.hash = '#/company/login';
      return '';
    }

    const companyUser = authState.user;
    const profile = authState.profile;
    const myJobs = db.find('jobs', j => j.company_user_id === companyUser.id);
    const myInternships = db.find('internships', i => i.company_user_id === companyUser.id);
    const myApplications = db.find('applications', a => a.company_user_id === companyUser.id || a.company === profile?.company_name);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="glass-card bg-cyan-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 class="text-2xl sm:text-3xl font-black text-white">${profile?.company_name}</h1>
            <p class="text-xs text-cyan-200 mt-1">Recruiter: <strong class="text-white">${profile?.recruiter_name}</strong> · ${profile?.industry} · ${profile?.location}</p>
          </div>
          <div class="flex gap-2">
            <a href="#/company/jobs/create" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold">Post Job Opening</a>
            <a href="#/company/applications" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold">Review Applications</a>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          ${renderStatCard('Active Jobs', myJobs.length, 'Campus openings', 'briefcase', 'Published', 'text-cyan-600')}
          ${renderStatCard('Internships', myInternships.length, 'College drives', 'compass', 'Fast-track', 'text-indigo-600')}
          ${renderStatCard('Applications', myApplications.length, 'Review queue', 'inbox', `${myApplications.filter(a => a.status === 'Accepted').length} Accepted`, 'text-purple-600')}
          ${renderStatCard('Student Pool', db.data.student_profiles.length, 'Verified profiles', 'users', 'All campuses', 'text-emerald-600')}
        </div>

        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-800">Recent Campus Postings</h3>
            <a href="#/company/jobs/create" class="text-xs font-bold text-cyan-600 hover:underline">+ New Posting</a>
          </div>
          <div class="space-y-3">
            ${myJobs.map(j => `
              <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h4 class="font-bold text-slate-900">${j.title}</h4>
                  <p class="text-slate-500">${j.type} · ${j.location} · ${j.salary}</p>
                  <p class="text-[11px] text-cyan-700 font-semibold mt-1">Required Skills: ${(j.required_skills || []).join(', ')}</p>
                </div>
                <span class="font-bold text-cyan-700">${j.applicants_count || 0} Candidates</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderCompanyCreateJob() {
    const authState = auth.getCurrentUser();
    const companyUser = authState?.user;
    const profile = authState?.profile;

    setTimeout(() => {
      document.getElementById('post-job-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('pj-title').value.trim();
        const type = document.getElementById('pj-type').value;
        const salary = document.getElementById('pj-salary').value.trim();
        const location = document.getElementById('pj-loc').value.trim();
        const skillsRaw = document.getElementById('pj-skills').value.trim();
        const desc = document.getElementById('pj-desc').value.trim();

        if (!skillsRaw) {
          showToast('Validation Error', 'Required Skills block is mandatory.', 'warning');
          return;
        }

        const requiredSkills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

        db.insert('jobs', {
          id: `job_${Date.now()}`,
          company_user_id: companyUser.id,
          company: profile?.company_name || 'Enterprise',
          title,
          type,
          location,
          salary,
          required_skills: requiredSkills,
          description: desc,
          applicants_count: 0
        });

        showToast('Job Published!', `${title} with ${requiredSkills.length} required skills is now active.`, 'success');
        window.location.hash = '#/company/dashboard';
      });
    }, 10);

    return `
      <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Post Job Opening</h1>
          <p class="text-xs text-slate-500 mt-1">Publish to YuvaSetu student talent pool with required competency benchmarks</p>
        </div>

        <form id="post-job-form" class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-xs">
          <div>
            <label class="block font-bold mb-1">Job Title *</label>
            <input type="text" id="pj-title" required placeholder="e.g. Associate Backend Engineer" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>

          <div class="p-3 bg-cyan-50/60 border border-cyan-100 rounded-2xl">
            <label class="block font-bold text-cyan-950 mb-1">Required Skills * <span class="text-rose-500">(Mandatory)</span></label>
            <input type="text" id="pj-skills" required placeholder="e.g. Python, SQL, Git, React (comma separated)" class="w-full px-3 py-2 bg-white border border-cyan-200 rounded-xl font-medium" />
            <p class="text-[10px] text-cyan-700 mt-1">Candidates are matched and ranked by verified assessment scores in these specific skills.</p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold mb-1">Employment Type</label>
              <select id="pj-type" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                <option value="Full-Time">Full-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div>
              <label class="block font-bold mb-1">Salary Range</label>
              <input type="text" id="pj-salary" required placeholder="e.g. ₹10 - ₹16 LPA" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block font-bold mb-1">Location</label>
            <input type="text" id="pj-loc" required placeholder="e.g. Bangalore, India" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>

          <div>
            <label class="block font-bold mb-1">Job Description</label>
            <textarea id="pj-desc" rows="3" required placeholder="Describe responsibilities and requirements..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
          </div>

          <button type="submit" class="btn-glow w-full py-3 rounded-xl font-bold text-xs">Publish Job Opening to Database</button>
        </form>
      </div>
    `;
  }

  function renderCompanyCreateInternship() {
    const authState = auth.getCurrentUser();
    const companyUser = authState?.user;
    const profile = authState?.profile;

    setTimeout(() => {
      document.getElementById('post-intern-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('pi-title').value.trim();
        const stipend = document.getElementById('pi-stipend').value.trim();
        const duration = document.getElementById('pi-duration').value.trim();
        const location = document.getElementById('pi-loc').value.trim();
        const skillsRaw = document.getElementById('pi-skills').value.trim();
        const desc = document.getElementById('pi-desc').value.trim();

        if (!skillsRaw) {
          showToast('Validation Error', 'Required Skills block is mandatory for internship posting.', 'warning');
          return;
        }

        const requiredSkills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

        db.insert('internships', {
          id: `int_${Date.now()}`,
          company_user_id: companyUser.id,
          company: profile?.company_name || 'Enterprise',
          logo: profile?.logo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
          title,
          stipend,
          duration,
          location,
          required_skills: requiredSkills,
          description: desc
        });

        showToast('Internship Published!', `${title} with ${requiredSkills.length} required skills is now active.`, 'success');
        window.location.hash = '#/company/dashboard';
      });
    }, 10);

    return `
      <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">Post Internship Opening</h1>
          <p class="text-xs text-slate-500 mt-1">Publish campus internship opportunities with mandatory required skills</p>
        </div>

        <form id="post-intern-form" class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-xs">
          <div>
            <label class="block font-bold mb-1">Internship Role Title *</label>
            <input type="text" id="pi-title" required placeholder="e.g. Full Stack Development Intern" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>

          <div class="p-3 bg-cyan-50/60 border border-cyan-100 rounded-2xl">
            <label class="block font-bold text-cyan-950 mb-1">Required Skills * <span class="text-rose-500">(Mandatory)</span></label>
            <input type="text" id="pi-skills" required placeholder="e.g. React, JavaScript, SQL (comma separated)" class="w-full px-3 py-2 bg-white border border-cyan-200 rounded-xl font-medium" />
            <p class="text-[10px] text-cyan-700 mt-1">Students will be matched based on verified assessments in these skills.</p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold mb-1">Monthly Stipend *</label>
              <input type="text" id="pi-stipend" required placeholder="e.g. ₹35,000 / mo" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold mb-1">Duration *</label>
              <input type="text" id="pi-duration" required placeholder="e.g. 6 Months" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block font-bold mb-1">Location</label>
            <input type="text" id="pi-loc" required placeholder="e.g. Bangalore / Hybrid" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>

          <div>
            <label class="block font-bold mb-1">Internship Overview</label>
            <textarea id="pi-desc" rows="3" required placeholder="Describe responsibilities and day-to-day work..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
          </div>

          <button type="submit" class="btn-glow w-full py-3 rounded-xl font-bold text-xs">Publish Internship to Database</button>
        </form>
      </div>
    `;
  }

  function renderCompanyApplications() {
    const authState = auth.getCurrentUser();
    const companyUser = authState?.user;
    const profile = authState?.profile;

    const myApplications = db.find('applications', a => a.company_user_id === companyUser?.id || a.company === profile?.company_name);

    setTimeout(() => {
      document.querySelectorAll('.recruiter-accept-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const appId = e.currentTarget.dataset.id;
          db.update('applications', appId, {
            status: 'Accepted',
            next_step: 'Accepted: Candidate invited to technical interview round.'
          });
          showToast('Candidate Accepted!', 'Application status updated to Accepted. Student notified in their pipeline.', 'success');
          handleRoute();
        });
      });

      document.querySelectorAll('.recruiter-reject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const appId = e.currentTarget.dataset.id;
          db.update('applications', appId, {
            status: 'Rejected',
            next_step: 'Application rejected by recruiter.'
          });
          showToast('Candidate Rejected', 'Application marked as Rejected in the database.', 'info');
          handleRoute();
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-slate-900">Candidate Applications Review</h1>
            <p class="text-xs text-slate-500 mt-1">Review student applications, inspect verified scores, and manage hiring decisions</p>
          </div>
        </div>

        <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
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
                  <p class="text-xs text-slate-500 mt-1">Applied for: <strong class="text-cyan-700">${app.role}</strong> · ${app.applied_date}</p>
                  
                  <div class="flex flex-wrap items-center gap-1.5 mt-2">
                    <span class="text-[11px] font-bold text-slate-400">Verified Skills:</span>
                    ${verifiedSkills.length > 0 ? verifiedSkills.map(s => `
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ${s.name} (${s.percentage}%)
                      </span>
                    `).join('') : '<span class="text-[10px] text-slate-400">No verified assessments yet</span>'}
                  </div>

                  <div class="mt-2 text-xs">
                    <span class="text-slate-400">Current Status:</span>
                    <strong class="${app.status === 'Accepted' ? 'text-emerald-600' : app.status === 'Rejected' ? 'text-rose-600' : 'text-amber-600'}">${app.status}</strong>
                    <span class="text-slate-400 text-[11px] ml-1">(${app.next_step})</span>
                  </div>
                </div>

                <div class="flex items-center gap-2 self-start md:self-auto">
                  ${app.status !== 'Accepted' ? `
                    <button class="recruiter-accept-btn px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors" data-id="${app.id}">
                      Accept Application
                    </button>
                  ` : `
                    <span class="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">✓ Accepted</span>
                  `}

                  ${app.status !== 'Rejected' ? `
                    <button class="recruiter-reject-btn px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-colors" data-id="${app.id}">
                      Reject Application
                    </button>
                  ` : `
                    <span class="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 font-bold text-xs border border-rose-200">✕ Rejected</span>
                  `}
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-8 text-center text-slate-400 text-xs">
              No applications submitted to your job/internship postings yet.
            </div>
          `}
        </div>
      </div>
    `;
  }

  function renderCompanyCandidateMatching() {
    const students = db.data.student_profiles || [];

    setTimeout(() => {
      document.querySelectorAll('.shortlist-candidate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const candidateName = e.currentTarget.dataset.name;
          showToast('Candidate Shortlisted', `Added ${candidateName} to your candidate shortlist pipeline.`, 'success');
        });
      });
    }, 10);

    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h1 class="text-2xl font-black text-slate-900">AI Candidate Matching</h1>
          <p class="text-xs text-slate-500 mt-1">Autonomous candidate matching scored against real registered student profiles</p>
        </div>
        <div class="space-y-4">
          ${students.map(s => {
            const verifiedSkills = db.find('student_skills', sk => sk.student_user_id === s.user_id && sk.assessed);
            return `
              <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="flex items-center gap-5">
                  ${renderCircularProgress(s.cgpa >= 9.0 ? 94 : 85, 76, 7, '#06b6d4')}
                  <div>
                    <h3 class="text-base font-bold text-slate-900">${s.name}</h3>
                    <p class="text-xs text-slate-500">${s.college_name} (Code: ${s.college_code}) · ${s.branch} · <strong>CGPA: ${s.cgpa}</strong></p>
                    <div class="flex flex-wrap gap-1 mt-1.5">
                      ${verifiedSkills.length > 0 ? verifiedSkills.map(sk => `
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          ${sk.name} (${sk.percentage}%)
                        </span>
                      `).join('') : '<span class="text-[10px] text-slate-400">Assessments Pending</span>'}
                    </div>
                  </div>
                </div>
                <button class="shortlist-candidate-btn btn-glow px-4 py-2 rounded-xl text-xs font-bold" data-name="${s.name}">
                  Shortlist Candidate
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // --- 25. ROUTER & CONTROLLER (CLEANED OF MENTOR & REMOVED SECTIONS) ---
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

    // Company Views
    '#/company/dashboard': renderCompanyDashboard,
    '#/company/jobs/create': renderCompanyCreateJob,
    '#/company/internships/create': renderCompanyCreateInternship,
    '#/company/candidates': renderCompanyCandidateMatching,
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
