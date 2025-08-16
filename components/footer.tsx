import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Twitter, 
  Linkedin, 
  Github,
  Mail,
  Shield,
  Clock
} from 'lucide-react';

const footerNavigation = {
  product: [
    { name: 'AI Chatbot', href: '/product' },
    { name: 'Integrations', href: '/product#integrations' },
    { name: 'Analytics', href: '/product#analytics' },
    { name: 'Security', href: '/product#security' },
  ],
  solutions: [
    { name: 'Fashion & Apparel', href: '/solutions/fashion' },
    { name: 'Electronics', href: '/solutions/electronics' },
    { name: 'Beauty', href: '/solutions/beauty' },
    { name: 'Home & Living', href: '/solutions/home' },
  ],
  resources: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'eCommerce AI Playbook', href: '/resources/playbook' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partner Program', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay ahead of eCommerce AI trends
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get weekly insights on AI chatbots, conversion optimization, and the latest in eCommerce technology.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:ring-[#FF7626] focus:border-[#FF7626]"
                required
              />
              <Button 
                type="submit"
                className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-slate-400 mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img src="https://destinovaailabs.com/wp-content/uploads/2025/06/logo.png" alt="Destinova AI Labs Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Agentic AI chatbots that boost eCommerce conversions with intelligent product recommendations.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Clock className="h-4 w-4 text-green-400" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://twitter.com/destinovaai" 
                className="text-slate-400 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/destinova-ai-labs" 
                className="text-slate-400 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/destinova-ai" 
                className="text-slate-400 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Follow us on GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:hello@destinova-ai.com" 
                className="text-slate-400 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 mb-6">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2024 Destinova AI Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            {footerNavigation.legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-slate-400 hover:text-[#FF7626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}