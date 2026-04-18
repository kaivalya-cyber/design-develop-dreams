import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin, Send, User, Building, Linkedin, Github } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singh.kaivalya@gmail.com",
      href: "mailto:singh.kaivalya@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (408) 890-9234",
      href: "tel:+14088909234"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Jose, CA",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kaivalya-singh",
      href: "https://www.linkedin.com/in/kaivalya-singh-732190374/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kaivalya-cyber",
      href: "https://github.com/kaivalya-cyber"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-32 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-primary-glow" 
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">Contact Information</CardTitle>
                <CardDescription>
                  Let's connect and discuss your next project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Why Work With Me */}
            <Card className="card-gradient border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "🔥 Passionate about creating innovative solutions",
                    "⚡ Fast turnaround with attention to detail",
                    "🤝 Collaborative approach with clear communication",
                    "🚀 Modern tech stack and best practices",
                    "🎯 Focus on user experience and performance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;