import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  User, GraduationCap, Briefcase, Award, 
  BookOpen, Code, Database, Brain,
  Mail, Phone, MapPin, Calendar,
  ExternalLink, Download, School,
  TrendingUp, Target, Globe, Users
} from 'lucide-react';

const educationData = [
  {
    degree: 'Master Of Computer Application (MCA)',
    institution: "Bharati Vidyapeeth's Institute of Management and Information Technology",
    location: 'Belapur, Navi Mumbai',
    period: '2025 - 2027',
    status: 'Pursuing',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    highlights: [
      'Specialization in AI & Machine Learning',
      'Advanced Database Systems',
      'Cloud Computing',
      'Research Methodology'
    ]
  },
  {
    degree: 'Bachelor of Science In Information Technology (Bsc.IT)',
    institution: 'Westen College of Commerce and Business Management',
    location: 'Sanpada, Navi Mumbai',
    period: '2022 - 2025',
    status: 'CGPA: 8.23',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Database Management Systems',
      'Web Technologies',
      'Software Engineering',
      'Data Structures & Algorithms'
    ]
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Bharati Vidyapeeth Prashala and Junior College',
    location: 'Belapur, Navi Mumbai',
    period: '2020 - 2022',
    status: 'Percentage: 67.33%',
    icon: School,
    color: 'from-green-500 to-emerald-500',
    highlights: [
      'Computer Science Focus',
      'Mathematics & Statistics',
      'Science Stream'
    ]
  },
  {
    degree: 'Secondary School',
    institution: 'Nutan Marathi Vidyalaya',
    location: 'Nerul, Navi Mumbai',
    period: 'June 2020',
    status: 'Percentage: 83.20%',
    icon: Award,
    color: 'from-orange-500 to-yellow-500',
    highlights: [
      'Foundation in Computer Basics',
      'Mathematics Excellence',
      'Science Projects'
    ]
  }
];

const technicalSkills = {
  'Languages & Frameworks': [
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'MERN Stack', level: 80, icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'SQL', level: 88, icon: Database, color: 'from-purple-500 to-pink-500' },
    { name: 'React & Tailwind', level: 82, icon: Code, color: 'from-orange-500 to-red-500' }
  ],
  'Data Science & MLOps': [
    { name: 'Machine Learning', level: 80, icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Data Science', level: 78, icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { name: 'MLOps', level: 75, icon: Brain, color: 'from-green-500 to-emerald-500' },
    { name: 'CI/CD Pipelines', level: 72, icon: Target, color: 'from-orange-500 to-yellow-500' }
  ],
  'Tools & Platforms': [
    { name: 'Git & GitHub', level: 85, icon: BookOpen, color: 'from-gray-700 to-gray-900' },
    { name: 'Docker', level: 70, icon: Briefcase, color: 'from-blue-600 to-blue-700' },
    { name: 'AWS', level: 68, icon: Globe, color: 'from-orange-500 to-yellow-500' },
    { name: 'REST APIs', level: 80, icon: Users, color: 'from-green-500 to-emerald-500' }
  ]
};

const personalInfo = {
  contact: [
    { icon: Phone, label: 'Phone', value: '+91 93073 66418' },
    { icon: Mail, label: 'Email', value: 'susmitnaik14@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Nerul, Navi Mumbai' },
    { icon: Calendar, label: 'Availability', value: 'Open to Opportunities' }
  ],
  quickFacts: [
    'Passionate about AI/ML Research',
    'Strong Database Fundamentals',
    'Full-Stack Development Experience',
    'Continuous Learning Mindset'
  ]
};

export default function Profile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const educationCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate education cards
    educationCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate skill bars
    skillBarsRef.current.forEach((bar, index) => {
      if (!bar) return;

      const skillLevel = bar.dataset.level ? parseInt(bar.dataset.level) : 0;
      
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${skillLevel}%`,
          duration: 1.5,
          delay: 0.5 + (index * 0.05),
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar.parentElement,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate section title
    gsap.fromTo('.profile-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="profile" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="profile-title text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Profile</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MCA aspirant specializing in Database Management, Machine Learning, and Full-Stack Development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Contact */}
          <div className="space-y-8">
            {/* Personal Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Susmit Naik</h3>
                  <p className="text-primary font-medium">MCA Aspirant & AI Enthusiast</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  {personalInfo.contact.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center">
                        <div className="p-2 rounded-lg bg-gray-800/50 mr-3">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Facts */}
                <div className="border-t border-gray-800 pt-6">
                  <h4 className="text-lg font-bold mb-4">Quick Facts</h4>
                  <ul className="space-y-2">
                    {personalInfo.quickFacts.map((fact, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Resume Button */}
                <button className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Summary Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 mr-3">
                    <BookOpen className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Summary</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  A motivated MCA student with strong skills in Database Management and a keen interest 
                  in Machine Learning and Artificial Intelligence. Proficient in Python with hands-on 
                  experience in popular libraries, along with solid SQL understanding. Experienced in 
                  web technologies including MERN stack, with a passion for learning and applying 
                  emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Education */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mr-4">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, index) => {
                  const Icon = edu.icon;
                  
                  return (
                    <div
                      key={index}
                      ref={el => educationCardsRef.current[index] = el}
                      className="group relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary z-10">
                        <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-primary to-secondary opacity-75" />
                      </div>

                      {/* Education card */}
                      <div className="ml-8">
                        <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
                          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                            <div className="mb-4 md:mb-0">
                              <div className="flex items-center mb-2">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${edu.color} bg-opacity-20 mr-3`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold">{edu.degree}</h4>
                              </div>
                              <p className="text-primary font-medium">{edu.institution}</p>
                              <p className="text-gray-400 text-sm">{edu.location}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-300 font-medium">{edu.period}</div>
                              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-br ${edu.color} bg-opacity-20 inline-block mt-2`}>
                                {edu.status}
                              </div>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="border-t border-gray-800 pt-4">
                            <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Focus Areas:</h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mr-4">
                  <Code className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Technical Expertise</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                  <div key={category} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl" />
                    <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
                      <h4 className="text-lg font-bold mb-4">{category}</h4>
                      <div className="space-y-4">
                        {skills.map((skill, skillIndex) => {
                          const Icon = skill.icon;
                          const barIndex = categoryIndex * 4 + skillIndex;
                          
                          return (
                            <div key={skillIndex} className="group/skill">
                              <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                  <div className={`p-1 rounded mr-2 bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-primary font-mono font-bold text-lg">
                                  {skill.level}%
                                </span>
                              </div>
                              
                              <div className="relative">
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <div 
                                    ref={el => skillBarsRef.current[barIndex] = el}
                                    data-level={skill.level}
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform -translate-x-full`}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Career Goals */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mr-3">
                  <Target className="w-5 h-5 text-purple-500" />
                </div>
                <h4 className="text-lg font-bold">Career Goals</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>Specialize in AI/ML Engineering</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  <span>Master Database Architecture</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Contribute to Open Source AI Projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Learning Approach */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mr-3">
                  <Brain className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="text-lg font-bold">Learning Approach</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>Project-Based Learning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  <span>Continuous Skill Upgradation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Community Collaboration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Current Focus */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 mr-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="text-lg font-bold">Current Focus</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>MCA Entrance Preparation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  <span>Advanced Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Database Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:susmitnaik14@gmail.com"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}