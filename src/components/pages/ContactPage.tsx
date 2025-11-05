import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, User, DollarSign, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [borrowerForm, setBorrowerForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    loanAmount: '',
    purpose: '',
    landSize: '',
  });

  const [lenderForm, setLenderForm] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    riskPreference: '',
    duration: '',
  });

  const handleBorrowerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! Our team will contact you within 24 hours.');
    setBorrowerForm({
      name: '',
      email: '',
      phone: '',
      location: '',
      loanAmount: '',
      purpose: '',
      landSize: '',
    });
  };

  const handleLenderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration successful! We will verify your details and get back to you.');
    setLenderForm({
      name: '',
      email: '',
      phone: '',
      investmentAmount: '',
      riskPreference: '',
      duration: '',
    });
  };

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
              Join RuralConnect
            </h1>
            <p className="text-[#1B1B1B]/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Start your journey as a borrower or lender today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="borrower" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="borrower" className="data-[state=active]:bg-[#2E8B57] data-[state=active]:text-white">
                Borrower Registration
              </TabsTrigger>
              <TabsTrigger value="lender" className="data-[state=active]:bg-[#2E8B57] data-[state=active]:text-white">
                Lender Registration
              </TabsTrigger>
            </TabsList>

            {/* Borrower Form */}
            <TabsContent value="borrower">
              <Card className="p-8 border-[#2E8B57]/20">
                <form onSubmit={handleBorrowerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="borrower-name">Full Name *</Label>
                      <Input
                        id="borrower-name"
                        placeholder="Enter your full name"
                        value={borrowerForm.name}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="borrower-email">Email Address *</Label>
                      <Input
                        id="borrower-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={borrowerForm.email}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="borrower-phone">Phone Number *</Label>
                      <Input
                        id="borrower-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={borrowerForm.phone}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="borrower-location">Village/Town *</Label>
                      <Input
                        id="borrower-location"
                        placeholder="Your location"
                        value={borrowerForm.location}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, location: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="borrower-amount">Loan Amount Required (₹) *</Label>
                      <Input
                        id="borrower-amount"
                        type="number"
                        placeholder="50000"
                        value={borrowerForm.loanAmount}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, loanAmount: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="borrower-land">Agricultural Land Size (acres) *</Label>
                      <Input
                        id="borrower-land"
                        type="number"
                        placeholder="5"
                        value={borrowerForm.landSize}
                        onChange={(e) =>
                          setBorrowerForm({ ...borrowerForm, landSize: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="borrower-purpose">Loan Purpose *</Label>
                    <Textarea
                      id="borrower-purpose"
                      placeholder="Describe what you need the loan for (e.g., purchasing seeds, farm equipment, etc.)"
                      value={borrowerForm.purpose}
                      onChange={(e) =>
                        setBorrowerForm({ ...borrowerForm, purpose: e.target.value })
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div className="bg-[#2E8B57]/5 p-4 rounded-lg">
                    <p className="text-[#1B1B1B]/70" style={{ fontSize: '0.875rem' }}>
                      <strong>Next Steps:</strong> After submission, you'll receive an email with
                      instructions for biometric verification and document upload via DigiLocker.
                      The entire process takes approximately 30 minutes.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2E8B57] to-[#E6C200] text-white hover:opacity-90"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Borrower Application
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Lender Form */}
            <TabsContent value="lender">
              <Card className="p-8 border-[#2E8B57]/20">
                <form onSubmit={handleLenderSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lender-name">Full Name *</Label>
                      <Input
                        id="lender-name"
                        placeholder="Enter your full name"
                        value={lenderForm.name}
                        onChange={(e) => setLenderForm({ ...lenderForm, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lender-email">Email Address *</Label>
                      <Input
                        id="lender-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={lenderForm.email}
                        onChange={(e) => setLenderForm({ ...lenderForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lender-phone">Phone Number *</Label>
                      <Input
                        id="lender-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={lenderForm.phone}
                        onChange={(e) => setLenderForm({ ...lenderForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lender-amount">Investment Amount (₹) *</Label>
                      <Input
                        id="lender-amount"
                        type="number"
                        placeholder="100000"
                        value={lenderForm.investmentAmount}
                        onChange={(e) =>
                          setLenderForm({ ...lenderForm, investmentAmount: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lender-risk">Risk Preference *</Label>
                      <Select
                        value={lenderForm.riskPreference}
                        onValueChange={(value) =>
                          setLenderForm({ ...lenderForm, riskPreference: value })
                        }
                        required
                      >
                        <SelectTrigger id="lender-risk">
                          <SelectValue placeholder="Select risk level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Risk (8-10% returns)</SelectItem>
                          <SelectItem value="medium">Medium Risk (12-15% returns)</SelectItem>
                          <SelectItem value="high">High Risk (16-20% returns)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lender-duration">Investment Duration *</Label>
                      <Select
                        value={lenderForm.duration}
                        onValueChange={(value) =>
                          setLenderForm({ ...lenderForm, duration: value })
                        }
                        required
                      >
                        <SelectTrigger id="lender-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                          <SelectItem value="24">24 Months</SelectItem>
                          <SelectItem value="36">36 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-[#E6C200]/10 p-4 rounded-lg">
                    <p className="text-[#1B1B1B]/70" style={{ fontSize: '0.875rem' }}>
                      <strong>Lender Benefits:</strong> Transparent blockchain tracking,
                      diversified portfolio options, competitive returns, and complete control
                      over your investments. All loans are backed by tokenized agricultural
                      assets.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2E8B57] to-[#E6C200] text-white hover:opacity-90"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Lender Registration
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#1B1B1B]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Get in Touch
            </h2>
            <p className="text-[#1B1B1B]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Have questions? Our team is here to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                content: [
                  'Siddaganga Institute of Technology',
                  'B.H. Road, Tumkur - 572103',
                  'Karnataka, India',
                ],
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: [
                  'contact@ruralconnect.in',
                  'support@ruralconnect.in',
                  'info@ruralconnect.in',
                ],
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: ['+91 XXXX-XXXXXX', 'Mon-Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white hover:shadow-lg transition-all border-[#2E8B57]/20 hover:border-[#2E8B57] text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-[#1B1B1B]" style={{ fontSize: '1.25rem' }}>
                    {contact.title}
                  </h3>
                  <div className="space-y-1">
                    {contact.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-[#1B1B1B]/60" style={{ fontSize: '0.875rem' }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-[#2E8B57]/20">
            <div className="aspect-video bg-[#2E8B57]/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#2E8B57] mx-auto mb-4" />
                <p className="text-[#1B1B1B]/70">
                  Siddaganga Institute of Technology, Tumkur, Karnataka
                </p>
                <p className="text-[#1B1B1B]/50" style={{ fontSize: '0.875rem' }}>
                  Interactive map would be integrated here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
