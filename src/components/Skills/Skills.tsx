import { useEffect, useRef } from 'react';
import { Brain, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python (NumPy, Pandas)', level: 85, icon: Brain },
      { name: 'MERN Stack', level: 80, icon: Code2 },
      { name: 'SQL', level: 88, icon: Brain },
      { name: 'React & Tailwind CSS', level: 82, icon: Code2 }
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach(() => {
      // Animation code
    });

    barsRef.current.forEach(() => {
      // Animation code
    });
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl" />
                <div className="relative bg-background-lighter/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      const barIndex = categoryIndex * 4 + skillIndex;

                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <div className={`p-1 rounded mr-2 bg-gradient-to-br ${category.color} bg-opacity-20`}>
                                <SkillIcon className="w-4 h-4" />
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
                                ref={el => barsRef.current[barIndex] = el}
                                data-level={skill.level}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transform -translate-x-full`}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
