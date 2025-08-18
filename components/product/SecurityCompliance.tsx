import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'SOC 2 Type II Certified',
      description: 'Independent validation of our security controls and data protection practices with annual audits.'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256 encryption with secure key management.'
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'GDPR and CCPA compliant with data minimization, consent management, and right to deletion.'
    },
    {
      icon: CheckCircle,
      title: 'Regular Security Audits',
      description: 'Quarterly penetration testing and vulnerability assessments by third-party security firms.'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'GDPR Compliant',
    'CCPA Ready',
    'ISO 27001',
    'PCI DSS Level 1',
    'HIPAA Compatible'
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your customer data is protected by industry-leading security measures and compliance standards that meet enterprise requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent size={24} className="text-[#FF7626]" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-8">
            Certified & Compliant
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <p className="text-sm font-medium text-slate-900 text-center">
                  {standard}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-200 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Our Security Promise
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We never share, sell, or use your customer data for any purpose other than providing our service. 
            Your data remains yours, and we provide full transparency and control over how it's used.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;