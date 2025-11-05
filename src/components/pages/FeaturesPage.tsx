import { motion } from 'motion/react';
import {
  Shield,
  Fingerprint,
  FileText,
  Users,
  Zap,
  Calendar,
  Database,
  Bell,
} from 'lucide-react';
import { Card } from '../ui/card';

export function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Secure ID Verification',
      description: 'SHA-256 hashing with Aadhaar and DigiLocker integration',
      details: [
        'Document encryption using SHA-256',
        'Aadhaar-based identity verification',
        'DigiLocker API integration for document retrieval',
        'Immutable blockchain storage of hashed credentials',
      ],
      gradient: 'from-[#2E8B57] to-[#228B57]',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description: 'CNN-based facial recognition with cosine similarity scoring',
      details: [
        'Convolutional Neural Network for face detection',
        'Cosine similarity algorithm for matching',
        'Multi-factor authentication support',
        'Real-time verification under 3 seconds',
      ],
      gradient: 'from-[#228B57] to-[#1E7D4D]',
    },
    {
      icon: FileText,
      title: 'Loan Application & Tokenization',
      description: 'Digital asset tokenization and blockchain hash storage',
      details: [
        'Agricultural asset digitization',
        'ERC-721 token standard for unique assets',
        'Smart contract-based ownership verification',
        'Transparent collateral valuation',
      ],
      gradient: 'from-[#1E7D4D] to-[#2E8B57]',
    },
    {
      icon: Users,
      title: 'Lender-Borrower Matching',
      description: 'Enhanced Gale-Shapley algorithm for optimal pairing',
      details: [
        'Risk-based borrower profiling',
        'Lender preference matching',
        'Interest rate optimization',
        'Automated matching in real-time',
      ],
      gradient: 'from-[#2E8B57] to-[#E6C200]',
    },
    {
      icon: Zap,
      title: 'Automated Loan Management',
      description: 'Smart contracts with Loan FSM (Finite State Machine) model',
      details: [
        'Automatic loan disbursement',
        'State-based workflow management',
        'Conditional transaction execution',
        'Zero human intervention required',
      ],
      gradient: 'from-[#E6C200] to-[#D4AF37]',
    },
    {
      icon: Calendar,
      title: 'Flexible Repayments',
      description: 'Seasonal and partial repayment states',
      details: [
        'Aligned with agricultural cycles',
        'Harvest-based repayment schedules',
        'Partial payment acceptance',
        'Penalty-free grace periods',
      ],
      gradient: 'from-[#D4AF37] to-[#E6C200]',
    },
    {
      icon: Database,
      title: 'Blockchain Transactions',
      description: 'Bank integration with blockchain logging',
      details: [
        'Integration with major banks',
        'Real-time transaction recording',
        'Immutable audit trail',
        'Cross-border payment support',
      ],
      gradient: 'from-[#E6C200] to-[#2E8B57]',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Event-based alerts and updates',
      details: [
        'Automated repayment reminders',
        'Loan status notifications',
        'Smart contract trigger alerts',
        'Multi-channel delivery (SMS, Email, App)',
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
              Features & Methodology
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Comprehensive blockchain-powered features for secure and transparent lending
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57] group">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-[#1B1B1B]" style={{ fontSize: '1.5rem' }}>
                        {feature.title}
                      </h3>
                      <p className="text-[#2E8B57]" style={{ fontSize: '0.875rem' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] mt-2 flex-shrink-0" />
                        <p className="text-[#1B1B1B]/60" style={{ fontSize: '0.875rem' }}>
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Loan Processing Timeline
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              From application to disbursement in record time
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2E8B57] via-[#E6C200] to-[#2E8B57] transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  time: '0-5 mins',
                  title: 'Application Submission',
                  description: 'Complete online application with document upload',
                },
                {
                  time: '5-10 mins',
                  title: 'Identity Verification',
                  description: 'Biometric authentication and KYC completion',
                },
                {
                  time: '10-15 mins',
                  title: 'Credit Assessment',
                  description: 'AI-powered risk analysis and matching',
                },
                {
                  time: '15-20 mins',
                  title: 'Smart Contract Creation',
                  description: 'Automated contract deployment on blockchain',
                },
                {
                  time: '20-30 mins',
                  title: 'Fund Disbursement',
                  description: 'Direct transfer to borrower account',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="p-6 inline-block bg-white border-[#2E8B57]/20 hover:border-[#2E8B57] hover:shadow-lg transition-all">
                      <div className="text-[#2E8B57]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                        {step.time}
                      </div>
                      <h3 className="text-[#1B1B1B] my-2" style={{ fontSize: '1.25rem' }}>
                        {step.title}
                      </h3>
                      <p className="text-[#1B1B1B]/60">{step.description}</p>
                    </Card>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                    <span className="text-white" style={{ fontWeight: 700 }}>
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
