export const roleCategories = [
    {
        id: 'admin-support',
        name: 'Admin Support',
        positions: [
            {
                title: 'Virtual Assistant',
                juniorRate: 4,
                seniorRate: 5,
                juniorFeatures: ['Email Management', 'Calendar Scheduling', 'Data Entry', 'Basic Research'],
                seniorFeatures: ['Project Coordination', 'Client Communication', 'Advanced Research', 'Process Optimization'],
                tools: ['📧', '📅', '📊', '💼'],
                highlight: false
            },
            {
                title: 'Admin Assistant',
                juniorRate: 4,
                seniorRate: 5,
                juniorFeatures: ['Document Preparation', 'File Organization', 'Basic Bookkeeping', 'Phone Support'],
                seniorFeatures: ['Executive Support', 'Meeting Coordination', 'Report Generation', 'Database Management'],
                tools: ['📄', '🗂️', '📞', '💻'],
                highlight: false
            },
            {
                title: 'Executive Assistant',
                juniorRate: 5,
                seniorRate: 6,
                juniorFeatures: ['Schedule Management', 'Travel Booking', 'Expense Tracking', 'Meeting Notes'],
                seniorFeatures: ['Strategic Planning Support', 'Stakeholder Management', 'Complex Travel Arrangements', 'Confidential Document Handling'],
                tools: ['✈️', '💼', '📈', '🔒'],
                highlight: true
            },
            {
                title: 'Customer Support Rep',
                juniorRate: 4,
                seniorRate: 5,
                juniorFeatures: ['Email Support', 'Ticket Management', 'FAQ Responses', 'Basic Troubleshooting'],
                seniorFeatures: ['Complex Issue Resolution', 'Customer Success', 'Team Training', 'Process Improvement'],
                tools: ['💬', '🎫', '📞', '⭐'],
                highlight: false
            },
            {
                title: 'Data Entry Clerk',
                juniorRate: 3,
                seniorRate: 4,
                juniorFeatures: ['Data Input', 'Quality Checks', 'Basic Excel', 'File Management'],
                seniorFeatures: ['Data Analysis', 'Advanced Excel', 'Database Management', 'Automation Scripts'],
                tools: ['⌨️', '📊', '🗃️', '✅'],
                highlight: false
            }
        ]
    },
    {
        id: 'sales-marketing',
        name: 'Sales & Marketing',
        positions: [
            {
                title: 'Digital Strategist',
                juniorRate: 11,
                seniorRate: 14,
                juniorFeatures: ['Campaign Planning', 'Social Media Strategy', 'Content Calendar', 'Basic Analytics'],
                seniorFeatures: ['Multi-Channel Strategy', 'ROI Optimization', 'Advanced Analytics', 'Team Leadership'],
                tools: ['📱', '📊', '🎯', '📈'],
                highlight: false
            },
            {
                title: 'SEO Specialist',
                juniorRate: 11,
                seniorRate: 14,
                juniorFeatures: ['Keyword Research', 'On-Page SEO', 'Content Optimization', 'Basic Link Building'],
                seniorFeatures: ['Technical SEO', 'Advanced Analytics', 'Strategy Development', 'Team Training'],
                tools: ['🔍', '📈', '🔗', '⚙️'],
                highlight: true
            },
            {
                title: 'Social Media Manager',
                juniorRate: 11,
                seniorRate: 14,
                juniorFeatures: ['Content Posting', 'Community Management', 'Basic Design', 'Engagement Tracking'],
                seniorFeatures: ['Strategy Development', 'Influencer Partnerships', 'Crisis Management', 'Advanced Analytics'],
                tools: ['📱', '🎨', '📊', '💬'],
                highlight: false
            },
            {
                title: 'Content Writer',
                juniorRate: 9,
                seniorRate: 12,
                juniorFeatures: ['Blog Writing', 'SEO Content', 'Social Posts', 'Basic Editing'],
                seniorFeatures: ['Content Strategy', 'Technical Writing', 'Editorial Leadership', 'Brand Voice Development'],
                tools: ['✍️', '📝', '🔍', '📚'],
                highlight: false
            },
            {
                title: 'Email Marketer',
                juniorRate: 9,
                seniorRate: 13,
                juniorFeatures: ['Campaign Setup', 'List Management', 'Basic Automation', 'Performance Tracking'],
                seniorFeatures: ['Advanced Automation', 'A/B Testing', 'Segmentation Strategy', 'Conversion Optimization'],
                tools: ['📧', '🎯', '📊', '🔄'],
                highlight: false
            }
        ]
    },
    {
        id: 'creative-design',
        name: 'Creative & Design',
        positions: [
            {
                title: 'Graphic Designer',
                juniorRate: 12,
                seniorRate: 15,
                juniorFeatures: ['Social Media Graphics', 'Basic Branding', 'Photo Editing', 'Template Design'],
                seniorFeatures: ['Brand Identity', 'Art Direction', 'Print Design', 'Design Systems'],
                tools: ['🎨', '✏️', '🖼️', '💡'],
                highlight: false
            },
            {
                title: 'Video Editor',
                juniorRate: 12,
                seniorRate: 17,
                juniorFeatures: ['Basic Editing', 'Color Correction', 'Audio Sync', 'Social Media Videos'],
                seniorFeatures: ['Advanced Effects', 'Motion Graphics', 'Color Grading', 'Multi-Cam Editing'],
                tools: ['🎬', '🎞️', '🎨', '🔊'],
                highlight: true
            },
            {
                title: 'UI/UX Designer',
                juniorRate: 14,
                seniorRate: 18,
                juniorFeatures: ['Wireframing', 'Prototyping', 'Basic User Research', 'Design Systems'],
                seniorFeatures: ['User Research', 'Information Architecture', 'Usability Testing', 'Design Leadership'],
                tools: ['🎨', '📱', '🖥️', '🔍'],
                highlight: false
            }
        ]
    },
    {
        id: 'it-development',
        name: 'IT & Development',
        positions: [
            {
                title: 'Full-Stack Developer',
                juniorRate: 18,
                seniorRate: 28,
                juniorFeatures: ['React/Vue', 'Node.js', 'REST APIs', 'Git'],
                seniorFeatures: ['System Architecture', 'Microservices', 'DevOps', 'Team Leadership'],
                tools: ['⚛️', '🟢', '🗄️', '🔧'],
                highlight: true
            },
            {
                title: 'Front-End Developer',
                juniorRate: 16,
                seniorRate: 19,
                juniorFeatures: ['HTML/CSS/JS', 'React', 'Responsive Design', 'Git'],
                seniorFeatures: ['Advanced React', 'Performance Optimization', 'Testing', 'Mentoring'],
                tools: ['⚛️', '🎨', '📱', '⚡'],
                highlight: false
            },
            {
                title: 'Back-End Developer',
                juniorRate: 18,
                seniorRate: 24,
                juniorFeatures: ['Node.js/Python', 'Database Design', 'REST APIs', 'Authentication'],
                seniorFeatures: ['System Design', 'Scalability', 'Security', 'Cloud Architecture'],
                tools: ['🟢', '🐍', '🗄️', '☁️'],
                highlight: false
            },
            {
                title: 'Data Scientist',
                juniorRate: 18,
                seniorRate: 16,
                juniorFeatures: ['Python', 'Data Analysis', 'Basic ML', 'Visualization'],
                seniorFeatures: ['Advanced ML', 'Deep Learning', 'Big Data', 'Model Deployment'],
                tools: ['🐍', '📊', '🤖', '📈'],
                highlight: false
            }
        ]
    },
    {
        id: 'finance',
        name: 'Finance',
        positions: [
            {
                title: 'Bookkeeper',
                juniorRate: 10,
                seniorRate: 14,
                juniorFeatures: ['Data Entry', 'Invoicing', 'Basic Reconciliation', 'Expense Tracking'],
                seniorFeatures: ['Full Cycle Bookkeeping', 'Financial Reports', 'Tax Preparation', 'Multi-Entity Management'],
                tools: ['💰', '📊', '🧾', '📈'],
                highlight: false
            },
            {
                title: 'Accountant',
                juniorRate: 14,
                seniorRate: 18,
                juniorFeatures: ['General Ledger', 'Account Reconciliation', 'Financial Statements', 'Payroll'],
                seniorFeatures: ['Tax Strategy', 'Audit Management', 'Financial Analysis', 'Compliance'],
                tools: ['📊', '💼', '📈', '🔍'],
                highlight: true
            },
            {
                title: 'Financial Analyst',
                juniorRate: 18,
                seniorRate: 28,
                juniorFeatures: ['Financial Modeling', 'Data Analysis', 'Report Generation', 'Forecasting'],
                seniorFeatures: ['Strategic Planning', 'Investment Analysis', 'Risk Assessment', 'Executive Reporting'],
                tools: ['📈', '💹', '📊', '🎯'],
                highlight: false
            }
        ]
    },
    {
        id: 'operations',
        name: 'Operations',
        positions: [
            {
                title: 'Project Manager',
                juniorRate: 14,
                seniorRate: 18,
                juniorFeatures: ['Task Management', 'Team Coordination', 'Status Reporting', 'Basic Planning'],
                seniorFeatures: ['Strategic Planning', 'Stakeholder Management', 'Risk Management', 'Budget Control'],
                tools: ['📋', '👥', '📊', '⏱️'],
                highlight: true
            },
            {
                title: 'Operations Manager',
                juniorRate: 14,
                seniorRate: 18,
                juniorFeatures: ['Process Documentation', 'Team Support', 'Basic Analytics', 'Quality Control'],
                seniorFeatures: ['Process Optimization', 'Strategic Planning', 'Team Leadership', 'Performance Management'],
                tools: ['⚙️', '📈', '👥', '🎯'],
                highlight: false
            },
            {
                title: 'Business Analyst',
                juniorRate: 14,
                seniorRate: 18,
                juniorFeatures: ['Requirements Gathering', 'Documentation', 'Data Analysis', 'User Stories'],
                seniorFeatures: ['Strategic Analysis', 'Process Improvement', 'Stakeholder Management', 'Change Management'],
                tools: ['📊', '📝', '🔍', '💡'],
                highlight: false
            }
        ]
    }
];
