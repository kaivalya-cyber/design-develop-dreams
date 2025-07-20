import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "singh.kaivalya@gmail.com",
      href: "mailto:singh.kaivalya@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "408-890-9234",
      href: "tel:4088909234"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "California, USA",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss your goals and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-foreground">Project Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-muted/50 border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-plus">$1,000+</option>
                    </select>
                    <p className="text-sm text-muted-foreground mt-1">
                      💡 Pricing is very flexible - let's discuss your needs!
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-glow text-lg py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Why Work With Me */}
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why work with me?</h3>
                <div className="space-y-3">
                  {[
                    "Fast response times (usually within 24 hours)",
                    "Transparent communication throughout the project",
                    "Modern, responsive designs that look great everywhere",
                    "Clean, maintainable code that's built to last",
                    "Ongoing support and maintenance available"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;