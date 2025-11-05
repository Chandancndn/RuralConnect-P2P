import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Github, Linkedin } from 'lucide-react';
import { Card } from '../ui/card';
import { Avatar } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { teamMembers } from '../../data/team';
import chandanImg from '../../assets/chandan.png';
import druvaImg from '../../assets/druva.png';
import chiragImg from '../../assets/chirag.png';
import kethanImg from '../../assets/kethan.png';

export function AboutPage() {
  const objectives = [
    {
      icon: Target,
      title: 'Secure Document Verification',
      description: 'Blockchain-based SHA-256 hashing with Aadhaar and DigiLocker integration',
    },
    {
      icon: Users,
      title: 'Biometric Authentication',
      description: 'CNN-based facial recognition with cosine similarity for identity security',
    },
    {
      icon: Award,
      title: 'Asset Tokenization',
      description: 'Digital tokenization of agricultural assets for better credit access',
    },
    {
      icon: Eye,
      title: 'Automated Lifecycle',
      description: 'Smart contracts manage the entire loan sanctioning and repayment process',
    },
  ];

  const team = teamMembers;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2E8B57]/10 via-white to-[#E6C200]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-6 text-[#1B1B1B]" style={{ fontSize: '3rem', fontWeight: 700 }}>
              Our Mission
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Bridging the financial inclusion gap in rural India through blockchain technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1627530378771-431b55d4e467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzYyMzUyNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rural India"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-[#1B1B1B]" style={{ fontSize: '2rem', fontWeight: 700 }}>
                The Problem We're Solving
              </h2>
              <div className="space-y-4 text-[#1B1B1B]/70">
                <p>
                  In rural India, <strong className="text-[#2E8B57]">67% of adults</strong> remain
                  financially excluded from formal banking systems. Traditional lending often
                  involves:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2" />
                    <span>
                      Interest rates ranging from <strong>24-36%</strong> from informal lenders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2" />
                    <span>Lack of transparent documentation and verification systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2" />
                    <span>Limited access to credit due to insufficient collateral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2" />
                    <span>Misalignment between repayment schedules and agricultural cycles</span>
                  </li>
                </ul>
                <p className="pt-4">
                  RuralConnect P2P addresses these challenges by leveraging blockchain technology to
                  create a <strong className="text-[#2E8B57]">trustless, transparent, and
                  efficient</strong> lending ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Our Objectives
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Building a comprehensive solution for rural financial inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white hover:shadow-xl transition-all border-[#2E8B57]/20 hover:border-[#2E8B57]">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center flex-shrink-0">
                      <objective.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-[#1B1B1B]" style={{ fontSize: '1.25rem' }}>
                        {objective.title}
                      </h3>
                      <p className="text-[#1B1B1B]/60">{objective.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Meet Our Team
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Dedicated professionals bringing blockchain innovation to rural finance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all border-[#2E8B57]/20 hover:border-[#2E8B57] group">
                  <div className="mb-4 relative">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#2E8B57]/20 transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-1 text-[#1B1B1B] font-semibold">{member.name}</h3>
                  <p className="text-[#2E8B57] mb-3" style={{ fontSize: '0.875rem' }}>
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2E8B57] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2E8B57] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-[#2E8B57]/5 to-[#E6C200]/5 border-[#2E8B57]/20">
            <div className="text-center">
              <p className="text-[#1B1B1B]/70 mb-2">Under the guidance of</p>
              <h3 className="text-[#1B1B1B]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Dr. K G Manjunath
              </h3>
              <p className="text-[#2E8B57]">Faculty Advisor</p>
              <p className="text-[#1B1B1B]/60 mt-2" style={{ fontSize: '0.875rem' }}>
                Siddaganga Institute of Technology, Tumkur
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
