import { motion } from 'motion/react';
import { TrendingUp, Shield, Clock, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { StatsCounter } from '../StatsCounter';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OutcomesPage() {
  const outcomes = [
    {
      icon: Clock,
      title: 'Faster Loan Approvals',
      description: 'Average approval time reduced from 7 days to 30 minutes',
      improvement: '99.7%',
      color: 'text-[#2E8B57]',
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Zero fraudulent transactions through blockchain verification',
      improvement: '100%',
      color: 'text-[#E6C200]',
    },
    {
      icon: Users,
      title: 'Financial Inclusion',
      description: 'Extended credit access to previously unbanked rural population',
      improvement: '85%',
      color: 'text-[#2E8B57]',
    },
    {
      icon: DollarSign,
      title: 'Reduced Interest Rates',
      description: 'Average interest rate decreased from 36% to 12%',
      improvement: '67%',
      color: 'text-[#E6C200]',
    },
  ];

  const impactMetrics = [
    { label: 'Loans Processed', value: 5000, suffix: '+', progress: 85 },
    { label: 'Rural Borrowers Served', value: 3500, suffix: '+', progress: 75 },
    { label: 'Total Funds Disbursed', value: 250, prefix: '₹', suffix: 'Cr', progress: 90 },
    { label: 'Lenders Onboarded', value: 1200, suffix: '+', progress: 80 },
    { label: 'Average Response Time', value: 30, suffix: ' mins', progress: 95 },
    { label: 'Customer Satisfaction', value: 4.8, suffix: '/5', progress: 96 },
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      location: 'Tumkur, Karnataka',
      role: 'Farmer',
      image: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=2E8B57&color=fff&size=200',
      quote:
        'RuralConnect helped me get a loan for my farming equipment in just 30 minutes. The blockchain system made everything transparent and trustworthy.',
    },
    {
      name: 'Priya Sharma',
      location: 'Mysore, Karnataka',
      role: 'Dairy Business Owner',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=E6C200&color=fff&size=200',
      quote:
        'As a lender, I feel secure knowing all transactions are recorded on blockchain. The returns are fair and the platform is incredibly transparent.',
    },
    {
      name: 'Suresh Reddy',
      location: 'Hassan, Karnataka',
      role: 'Agricultural Entrepreneur',
      image: 'https://ui-avatars.com/api/?name=Suresh+Reddy&background=2E8B57&color=fff&size=200',
      quote:
        'The flexible repayment aligned with harvest seasons is a game-changer. No more stress about monthly payments during off-season.',
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
              Outcomes & Impact
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Transforming rural lending with measurable results and real-world impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Key Outcomes
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Measurable improvements across all metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center flex-shrink-0">
                      <outcome.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-[#1B1B1B]" style={{ fontSize: '1.5rem' }}>
                        {outcome.title}
                      </h3>
                      <p className="text-[#1B1B1B]/60 mb-3">{outcome.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`${outcome.color}`}
                          style={{ fontSize: '2rem', fontWeight: 700 }}
                        >
                          {outcome.improvement}
                        </span>
                        <span className="text-[#1B1B1B]/50" style={{ fontSize: '0.875rem' }}>
                          improvement
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Impact Metrics
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Real numbers demonstrating our platform's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white hover:shadow-lg transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="mb-4">
                    <div className="text-[#1B1B1B]/60 mb-2" style={{ fontSize: '0.875rem' }}>
                      {metric.label}
                    </div>
                    <div className="text-[#2E8B57]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                      <StatsCounter
                        end={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </div>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Success Stories
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Hear from borrowers and lenders who've benefited from RuralConnect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-white to-[#2E8B57]/5 hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#2E8B57]"
                    />
                    <div>
                      <h4 className="text-[#1B1B1B]" style={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-[#1B1B1B]/60" style={{ fontSize: '0.875rem' }}>
                        {testimonial.role}
                      </p>
                      <p className="text-[#2E8B57]" style={{ fontSize: '0.75rem' }}>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#1B1B1B]/70 italic">"{testimonial.quote}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Growth */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B57] to-[#E6C200]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-white" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Driving Sustainable Rural Growth
              </h2>
              <div className="space-y-4">
                {[
                  'Empowering 10,000+ rural families by 2026',
                  'Reducing dependency on informal lenders',
                  'Promoting financial literacy in villages',
                  'Supporting agricultural entrepreneurship',
                  'Creating digital-first rural economy',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-white" style={{ fontSize: '1.125rem' }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659260230290-6726a48df2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjIzNTI2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agricultural growth"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
