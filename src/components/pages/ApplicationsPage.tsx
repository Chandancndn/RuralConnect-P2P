import { motion } from 'motion/react';
import {
  Building2,
  Landmark,
  Tractor,
  Rocket,
  Shield,
  GraduationCap,
  Globe,
  HeartHandshake,
} from 'lucide-react';
import { Card } from '../ui/card';

export function ApplicationsPage() {
  const applications = [
    {
      icon: Building2,
      title: 'Digital Lending Platforms',
      description:
        'White-label blockchain lending infrastructure for fintech startups and digital banks',
      use_cases: [
        'P2P lending platforms',
        'NBFC digital operations',
        'Neobanking solutions',
        'Microfinance institutions',
      ],
      gradient: 'from-[#2E8B57] to-[#228B57]',
    },
    {
      icon: Landmark,
      title: 'Banking & Microfinance',
      description:
        'Integration with traditional banks and microfinance institutions for rural outreach',
      use_cases: [
        'Bank branch extensions',
        'Rural credit programs',
        'Self-help group (SHG) loans',
        'Priority sector lending',
      ],
      gradient: 'from-[#228B57] to-[#1E7D4D]',
    },
    {
      icon: Tractor,
      title: 'Rural & Agricultural Credit',
      description:
        'Specialized lending for farmers and agricultural businesses with seasonal flexibility',
      use_cases: [
        'Crop production loans',
        'Farm equipment financing',
        'Livestock credit',
        'Warehouse receipt loans',
      ],
      gradient: 'from-[#1E7D4D] to-[#2E8B57]',
    },
    {
      icon: Rocket,
      title: 'FinTech Startups',
      description:
        'Ready-to-deploy blockchain infrastructure for emerging financial technology companies',
      use_cases: [
        'Startup MVP development',
        'Investor demos',
        'Regulatory compliance',
        'Scalable architecture',
      ],
      gradient: 'from-[#2E8B57] to-[#E6C200]',
    },
    {
      icon: Shield,
      title: 'Government Schemes',
      description:
        'Implementation framework for government rural development and financial inclusion programs',
      use_cases: [
        'PM-KISAN integration',
        'PMFBY claim processing',
        'Direct benefit transfers',
        'Subsidy distribution',
      ],
      gradient: 'from-[#E6C200] to-[#D4AF37]',
    },
    {
      icon: HeartHandshake,
      title: 'NGO & Social Impact',
      description:
        'Transparent lending platform for non-profit organizations and impact investors',
      use_cases: [
        'Community development loans',
        'Women empowerment programs',
        'Social enterprise funding',
        'Impact measurement',
      ],
      gradient: 'from-[#D4AF37] to-[#E6C200]',
    },
    {
      icon: GraduationCap,
      title: 'Academic Research',
      description:
        'Open-source platform for blockchain and financial inclusion research studies',
      use_cases: [
        'PhD research projects',
        'Case study development',
        'Technology evaluation',
        'Publication references',
      ],
      gradient: 'from-[#E6C200] to-[#2E8B57]',
    },
    {
      icon: Globe,
      title: 'International Deployment',
      description:
        'Adaptable framework for rural lending in other developing economies',
      use_cases: [
        'Southeast Asian markets',
        'African rural finance',
        'Latin American cooperatives',
        'Cross-border remittances',
      ],
      gradient: 'from-[#2E8B57] to-[#228B57]',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B57]/10 via-white to-[#E6C200]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-6 text-[#1B1B1B]" style={{ fontSize: '3rem', fontWeight: 700 }}>
              Applications & Use Cases
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Versatile blockchain lending platform for diverse stakeholders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57] group relative overflow-hidden">
                  {/* Gradient Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.gradient}`}
                  />

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-[#1B1B1B]" style={{ fontSize: '1.5rem' }}>
                        {app.title}
                      </h3>
                      <p className="text-[#1B1B1B]/60">{app.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div
                      className="text-[#2E8B57] mb-3"
                      style={{ fontSize: '0.875rem', fontWeight: 600 }}
                    >
                      Key Use Cases:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {app.use_cases.map((use_case, ucIndex) => (
                        <div key={ucIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                          <span className="text-[#1B1B1B]/70" style={{ fontSize: '0.875rem' }}>
                            {use_case}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Integration Options
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Flexible deployment models for various organizational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'API Integration',
                description:
                  'RESTful APIs for seamless integration with existing systems',
                features: [
                  'Complete API documentation',
                  'Sandbox environment',
                  'Webhook support',
                  'Real-time data sync',
                ],
              },
              {
                title: 'White-Label Solution',
                description:
                  'Fully customizable platform with your branding',
                features: [
                  'Custom domain & branding',
                  'Configurable workflows',
                  'Multi-tenant architecture',
                  'Dedicated support',
                ],
              },
              {
                title: 'On-Premise Deployment',
                description:
                  'Self-hosted blockchain infrastructure for maximum control',
                features: [
                  'Private blockchain network',
                  'Full data sovereignty',
                  'Custom compliance rules',
                  'Enterprise security',
                ],
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white hover:shadow-lg transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <h3 className="mb-3 text-[#1B1B1B]" style={{ fontSize: '1.5rem' }}>
                    {option.title}
                  </h3>
                  <p className="text-[#1B1B1B]/60 mb-6">{option.description}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#2E8B57]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                        </div>
                        <span className="text-[#1B1B1B]/70" style={{ fontSize: '0.875rem' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B57] to-[#E6C200]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Ready to Implement RuralConnect?
            </h2>
            <p className="text-white/90 mb-8" style={{ fontSize: '1.125rem' }}>
              Contact our team to discuss how we can customize the platform for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#2E8B57] rounded-lg hover:bg-white/90 transition-all">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
