import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  ExternalLink, Github,
  Brain, MessageSquare, Home,
  ShoppingCart, TrendingUp, ChevronRight, X
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'ml' | 'web' | 'analytics' | 'database';
  icon: any;
  color: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'EduBot - AI-Powered Learning Platform',
    description: 'Personalized learning platform with AI chatbot and real-time tracking',
    longDescription: 'A comprehensive learning platform featuring an intelligent AI chatbot for personalized education. Includes secure face and email authentication, real-time performance analytics, and a feature-rich admin dashboard for educators.',
    tags: ['MERN Stack', 'ML/NLP', 'Authentication', 'Real-time Analytics'],
    category: 'ml',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    features: [
      'AI-powered learning assistant',
      'Secure face & email authentication',
      'Real-time performance tracking',
      'Admin dashboard with analytics',
      'Personalized learning paths'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'OpenCV', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 2,
    title: 'SkillSync - Placement Preparation Platform',
    description: 'Resume analysis using ML/NLP with aptitude and learning modules',
    longDescription: 'A comprehensive placement preparation platform that analyzes resumes using ML/NLP algorithms. Includes aptitude tests, core subject modules, and a personalized dashboard for students to track their preparation progress.',
    tags: ['MERN Stack', 'ML/NLP', 'Resume Analysis', 'Aptitude Tests'],
    category: 'ml',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'ML-based resume analysis',
      'Aptitude test modules',
      'Core subject learning',
      'Progress tracking dashboard',
      'Interview preparation resources'
    ],
    tech: ['React', 'Express', 'MongoDB', 'Python', 'NLP', 'BERT'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Seafood Demand Forecast System',
    description: 'Data Science ML dashboard for demand forecasting and trend analysis',
    longDescription: 'A machine learning system for forecasting seafood demand using historical sales data. Implements time-series analysis and trend prediction algorithms to help businesses optimize inventory and reduce waste.',
    tags: ['Data Science', 'Machine Learning', 'Forecasting', 'Dashboard'],
    category: 'analytics',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Demand forecasting models',
      'Historical trend analysis',
      'Interactive dashboard',
      'Sales prediction algorithms',
      'Inventory optimization'
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Plotly', 'Flask', 'MySQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 4,
    title: 'UrbanNest - E-Commerce Furniture Website',
    description: 'Responsive MERN stack application with secure payments',
    longDescription: 'A full-featured e-commerce platform for furniture shopping. Features a responsive design, secure authentication, shopping cart system, payment gateway integration, and an admin dashboard for inventory management.',
    tags: ['MERN Stack', 'E-commerce', 'Payment Gateway', 'Responsive'],
    category: 'web',
    icon: ShoppingCart,
    color: 'from-orange-500 to-yellow-500',
    features: [
      'Responsive design',
      'Secure authentication',
      'Shopping cart system',
      'Payment gateway integration',
      'Admin dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 5,
    title: 'Property Valuation - NLP System',
    description: 'Property value prediction using real estate text data with BERT/GPT',
    longDescription: 'An NLP system that predicts property values by analyzing real estate descriptions and market data. Uses advanced models like BERT and GPT for text analysis and price prediction.',
    tags: ['Python', 'BERT', 'GPT', 'NLP', 'Real Estate'],
    category: 'ml',
    icon: Home,
    color: 'from-red-500 to-pink-500',
    features: [
      'Property value prediction',
      'Real estate text analysis',
      'BERT/GPT model implementation',
      'Market trend analysis',
      'Comparative market analysis'
    ],
    tech: ['Python', 'BERT', 'GPT', 'Pandas', 'Scikit-learn', 'Flask'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [selectedProject]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ml': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'web': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'analytics': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'database': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Real-world projects showcasing expertise in MERN Stack, AI/ML, and Data Analytics
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'ml', 'web', 'analytics'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent'
                    : 'border-gray-700 text-gray-400 hover:border-primary hover:text-primary'
                }`}
              >
                {cat === 'all' ? 'All Projects' : 
                 cat === 'ml' ? 'AI/ML Projects' :
                 cat === 'web' ? 'Web Development' : 'Data Analytics'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={project.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                      {project.category === 'ml' ? 'AI/ML' : 
                       project.category === 'web' ? 'Web Dev' : 
                       project.category === 'analytics' ? 'Data Analytics' : 'Database'}
                    </span>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-500 flex items-center">
                      View details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20 hover:bg-opacity-30 transition-all`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="relative bg-background rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.color}`}>
                      <selectedProject.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedProject.category)}`}>
                      {selectedProject.category === 'ml' ? 'AI/ML Project' : 
                       selectedProject.category === 'web' ? 'Web Development' : 
                       selectedProject.category === 'analytics' ? 'Data Analytics' : 'Database'}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-lg">{selectedProject.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Project Overview</h4>
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`p-1 rounded mr-3 bg-gradient-to-br ${selectedProject.color} bg-opacity-20 mt-1`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-background-lighter/30 rounded-xl border border-gray-800">
                <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProject.tech.map((tech, index) => (
                    <div key={index} className="text-center p-4 bg-gray-900/50 rounded-lg">
                      <div className="text-primary font-bold mb-1">{index + 1}</div>
                      <div className="text-sm text-gray-300">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}