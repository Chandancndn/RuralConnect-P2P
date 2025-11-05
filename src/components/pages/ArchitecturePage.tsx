import { motion } from 'motion/react';
import {
  UserCheck,
  Shield,
  FileCheck,
  Link2,
  Coins,
  BarChart3,
  CheckCircle,
  Code,
} from 'lucide-react';
import { Card } from '../ui/card';

export function ArchitecturePage() {
  const systemSteps = [
    {
      icon: UserCheck,
      title: 'Registration',
      description: 'User registration with role selection (Borrower/Lender)',
      color: 'from-[#2E8B57] to-[#228B57]',
    },
    {
      icon: Shield,
      title: 'KYC & Biometric',
      description: 'Aadhaar/DigiLocker integration + CNN facial recognition with cosine similarity',
      color: 'from-[#228B57] to-[#1E7D4D]',
    },
    {
      icon: FileCheck,
      title: 'Smart Contract',
      description: 'Automated deployment of loan smart contracts on blockchain',
      color: 'from-[#1E7D4D] to-[#2E8B57]',
    },
    {
      icon: Link2,
      title: 'Matching Algorithm',
      description: 'Enhanced Gale-Shapley algorithm for optimal lender-borrower pairing',
      color: 'from-[#2E8B57] to-[#E6C200]',
    },
    {
      icon: Coins,
      title: 'Asset Tokenization',
      description: 'Digital tokenization of agricultural assets as collateral',
      color: 'from-[#E6C200] to-[#D4AF37]',
    },
    {
      icon: BarChart3,
      title: 'Repayment Tracking',
      description: 'Blockchain-based immutable tracking of all repayments and transactions',
      color: 'from-[#D4AF37] to-[#E6C200]',
    },
    {
      icon: CheckCircle,
      title: 'Loan Closure',
      description: 'Automated loan completion and collateral release via smart contracts',
      color: 'from-[#E6C200] to-[#2E8B57]',
    },
  ];

  const techStack = [
    { category: 'Blockchain', items: ['Ethereum', 'Solidity', 'Web3.js', 'Ganache'] },
    { category: 'Security', items: ['SHA-256 Hashing', 'DigiLocker API', 'Aadhaar Integration'] },
    { category: 'AI/ML', items: ['CNN', 'TensorFlow', 'Cosine Similarity', 'Facial Recognition'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'TailwindCSS', 'Motion'] },
    { category: 'Algorithms', items: ['Enhanced Gale-Shapley', 'FSM Model', 'Smart Contracts'] },
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
              System Architecture
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              A comprehensive blockchain-based lending ecosystem built for rural India
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              System Flow
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              End-to-end process from registration to loan closure
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" style={{ position: 'absolute' }}>
                {systemSteps.map((_, index) => {
                  if (index < systemSteps.length - 1) {
                    const fromY = 200 + Math.floor(index / 3) * 300;
                    const toY = 200 + Math.floor((index + 1) / 3) * 300;
                    const fromX = 150 + (index % 3) * 350;
                    const toX = 150 + ((index + 1) % 3) * 350;
                    
                    return (
                      <motion.line
                        key={index}
                        x1={fromX}
                        y1={fromY}
                        x2={toX}
                        y2={toY}
                        stroke="#2E8B57"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {systemSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${step.color})` }} />
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#2E8B57]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                            STEP {index + 1}
                          </span>
                        </div>
                        <h3 className="mb-2 text-[#1B1B1B]" style={{ fontSize: '1.125rem' }}>
                          {step.title}
                        </h3>
                        <p className="text-[#1B1B1B]/60" style={{ fontSize: '0.875rem' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Technology Stack
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Cutting-edge technologies powering RuralConnect P2P
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white h-full hover:shadow-lg transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-[#2E8B57]" />
                    <h3 className="text-[#1B1B1B]" style={{ fontSize: '1.125rem' }}>
                      {tech.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#2E8B57]/10 to-[#E6C200]/10 text-[#1B1B1B]/70 rounded-full border border-[#2E8B57]/20"
                        style={{ fontSize: '0.875rem' }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Visualization */}
      <section className="py-20 bg-gradient-to-br from-[#1B1B1B] to-[#2E8B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Blockchain Network
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Distributed ledger ensuring transparency and security
            </p>
          </div>

          <div className="relative h-96 flex items-center justify-center overflow-hidden">
            {/* Animated Nodes */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#E6C200] shadow-lg flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(46, 139, 87, 0.5)',
                      '0 0 40px rgba(230, 194, 0, 0.8)',
                      '0 0 20px rgba(46, 139, 87, 0.5)',
                    ],
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link2 className="w-8 h-8 text-white" />
                </motion.div>
              );
            })}

            {/* Center Node */}
            <motion.div
              className="absolute w-24 h-24 rounded-2xl bg-gradient-to-br from-[#E6C200] to-[#2E8B57] shadow-2xl flex items-center justify-center"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                rotate: 360,
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            >
              <Shield className="w-12 h-12 text-white" />
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="#E6C200"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
