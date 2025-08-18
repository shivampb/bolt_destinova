import { Database, Brain, Zap, Shield } from 'lucide-react';

const TechnicalArchitecture = () => {
  const architectureComponents = [
    {
      icon: Database,
      title: 'Data Integration Layer',
      description: 'Seamless connection to your eCommerce platform with real-time catalog sync',
      technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'Real-time sync']
    },
    {
      icon: Brain,
      title: 'AI Processing Engine',
      description: 'Advanced language models with product knowledge and conversation management',
      technologies: ['Large Language Models', 'Vector Embeddings', 'Intent Classification', 'Context Management']
    },
    {
      icon: Zap,
      title: 'Recommendation Engine',
      description: 'Machine learning algorithms for personalized product matching and ranking',
      technologies: ['Collaborative Filtering', 'Content-based Filtering', 'Deep Learning', 'Real-time Scoring']
    },
    {
      icon: Shield,
      title: 'Security & Scalability',
      description: 'Enterprise-grade infrastructure with global deployment and data protection',
      technologies: ['End-to-end Encryption', 'SOC 2 Compliance', 'Auto-scaling', 'Global CDN']
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built on Advanced AI Architecture
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our technical foundation combines cutting-edge AI with enterprise-grade infrastructure to deliver reliable, scalable product recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {architectureComponents.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
              >
                <div className="w-12 h-12 bg-[#FF7626] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {component.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {component.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {component.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-semibold mb-6 text-center">
            System Architecture Overview
          </h3>
          
          <div className="aspect-[16/9] bg-slate-800 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF7626]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain size={32} className="text-[#FF7626]" />
              </div>
              <p className="text-slate-300 font-medium">
                Technical Architecture Diagram
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Data Flow & AI Processing Pipeline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;