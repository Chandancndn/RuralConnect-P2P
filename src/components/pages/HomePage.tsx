import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Users, Leaf, TrendingUp, Lock, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { StatsCounter } from '../StatsCounter';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { value: 67, suffix: '%', label: 'Rural Adults Excluded', icon: Users },
    { value: 36, suffix: '%', label: 'Informal Interest Rates', icon: TrendingUp },
    { value: 0, label: 'Intermediaries', icon: Shield },
    { value: 100, suffix: '%', label: 'Blockchain Verified', icon: Lock },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Blockchain-backed transactions ensure complete transparency and security',
    },
    {
      icon: Zap,
      title: 'Instant Approvals',
      description: 'Automated smart contracts enable faster loan sanctioning and disbursement',
    },
    {
      icon: Leaf,
      title: 'Seasonal Flexibility',
      description: 'Repayment cycles aligned with agricultural seasons and harvest times',
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Monitor every transaction and repayment on an immutable ledger',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 via-white to-[#E6C200]/10">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#2E8B57] rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8B57]/10 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-[#2E8B57]" />
              <span className="text-[#2E8B57]" style={{ fontSize: '0.875rem' }}>
                Blockchain-Enabled P2P Lending
              </span>
            </div>

            <h1
              className="mb-6 text-[#1B1B1B] max-w-4xl mx-auto"
              style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}
            >
              RuralConnect P2P
            </h1>

            <p
              className="text-[#1B1B1B]/70 mb-8 max-w-2xl mx-auto"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              Empowering Rural India Through Trustless Lending
            </p>

            <p className="text-[#1B1B1B]/60 mb-12 max-w-3xl mx-auto">
              Connect rural borrowers directly with lenders through a secure, transparent, and
              automated peer-to-peer blockchain system that supports biometric verification, asset
              tokenization, and flexible repayments aligned with agricultural cycles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-[#2E8B57] to-[#E6C200] text-white px-8 py-6 gap-2 hover:opacity-90"
                style={{ fontSize: '1.125rem' }}
              >
                Borrow Money
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-[#2E8B57] text-[#2E8B57] px-8 py-6 gap-2 hover:bg-[#2E8B57] hover:text-white"
                style={{ fontSize: '1.125rem' }}
              >
                Invest in Rural Loans
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#E6C200] mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700 }} className="mb-2 text-[#E6C200]">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Why Choose RuralConnect?
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Revolutionary blockchain technology meets rural lending needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-[#1B1B1B]">{benefit.title}</h3>
                  <p className="text-[#1B1B1B]/60">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B57] to-[#E6C200]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-white" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Ready to Transform Rural Lending?
              </h2>
              <p className="text-white/90 mb-8" style={{ fontSize: '1.125rem' }}>
                Join thousands of borrowers and lenders who are already part of the blockchain
                revolution in rural finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-[#2E8B57] px-8 py-6 gap-2 hover:bg-white/90"
                  style={{ fontSize: '1.125rem' }}
                >
                  Join as Borrower
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="border-white text-white px-8 py-6 gap-2 hover:bg-white/10"
                  style={{ fontSize: '1.125rem' }}
                >
                  Join as Lender
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610433605854-32371a7aa495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGZhcm1lciUyMGluZGlhfGVufDF8fHx8MTc2MjM1MjY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rural farmer"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
