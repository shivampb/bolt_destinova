'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Initialize analytics here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-white shadow-lg border border-slate-200">
        <div className="flex items-start space-x-3">
          <Cookie className="h-5 w-5 text-[#FF7626] mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 mb-1">Cookie Settings</h3>
            <p className="text-sm text-slate-600 mb-4">
              We use cookies to enhance your experience and analyze site usage. 
              <Button 
                variant="link" 
                className="p-0 h-auto text-[#FF7626] hover:text-[#FF7626]/80 underline"
                asChild
              >
                <a href="/cookies" target="_blank">Learn more</a>
              </Button>
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={acceptCookies}
                className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white text-sm px-4 py-2"
              >
                Accept All
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="text-sm px-4 py-2"
              >
                Decline
              </Button>
            </div>
          </div>
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}