import React, { useRef, useEffect, useCallback } from "react";
import {
  HERO_PHONE_1,
  HERO_PHONE_2,
  HERO_PHONE_3,
  CHANNEL_MOBILE,
  CHANNEL_WEB,
  CHANNEL_ATM,
  CHANNEL_POS,
  CHANNEL_WEARABLES,
  CHANNEL_INTERNAL,
  CONSISTENCY_IMAGE_1,
  CONSISTENCY_IMAGE_2,
  ICON_INTERSECT_SQUARE,
  ICON_KEY,
  ICON_USERS,
  ICON_CLOUD,
  ICON_MONITOR,
  ICON_LETTER_SPACING,
  ICON_WALLET,
  ICON_MAGIC_WAND,
  DEVICE_DESKTOP,
  DEVICE_SMARTPHONE,
  DEVICE_TABLET,
  DEVICE_CARD,
  DEVICE_WATCH,
  DEVICE_GRID,
  AREA_VIDEO,
} from "@assets";

export function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isUserScrollingRef = useRef(false);
  const scrollSpeedRef = useRef(0.5); // pixels per frame
  const enterpriseFeatures = [
    {
      icon: ICON_INTERSECT_SQUARE,
      title: "Approved components only",
    },
    {
      icon: ICON_KEY,
      title: "Audit-ready, governed interfaces",
    },
    {
      icon: ICON_USERS,
      title: "Scalable across teams and vendors",
    },
    {
      icon: ICON_CLOUD,
      title: "Aligned with modern DevOps",
    },
    {
      icon: ICON_MONITOR,
      title: "Faster product launches",
    },
    {
      icon: ICON_LETTER_SPACING,
      title: "No fragmented UI experiences",
    },
    {
      icon: ICON_WALLET,
      title: "Predictable, high-quality UX",
    },
    {
      icon: ICON_MAGIC_WAND,
      title: "AI-assisted control",
    },
  ];

  const channels = [
    { image: CHANNEL_MOBILE, label: "Mobile" },
    { image: CHANNEL_WEB, label: "Web" },
    { image: CHANNEL_ATM, label: "ATM" },
    { image: CHANNEL_POS, label: "POS" },
    { image: CHANNEL_WEARABLES, label: "Wearables" },
    { image: CHANNEL_INTERNAL, label: "Internal Apps" },
  ];

  // Duplicate channels for seamless loop
  const duplicatedChannels = [...channels, ...channels];

  // Auto-scroll animation
  const autoScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isUserScrollingRef.current) {
      animationFrameRef.current = requestAnimationFrame(autoScroll);
      return;
    }

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const singleSetWidth = scrollWidth / 2; // Width of one set of channels
    
    // If we've scrolled past the first set, reset to equivalent position in first set
    if (container.scrollLeft >= singleSetWidth) {
      container.scrollLeft = container.scrollLeft - singleSetWidth;
    } else {
      container.scrollLeft += scrollSpeedRef.current;
    }

    animationFrameRef.current = requestAnimationFrame(autoScroll);
  }, []);

  // Handle mouse wheel
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Prevent default vertical scrolling
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      e.preventDefault();
    }

    // Allow horizontal scrolling
    container.scrollLeft += e.deltaY;
    
    // Temporarily pause auto-scroll when user scrolls
    isUserScrollingRef.current = true;
    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 1500);
  }, []);

  useEffect(() => {
    // Start auto-scroll animation
    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if ((window as any).scrollTimeout) {
        clearTimeout((window as any).scrollTimeout);
      }
    };
  }, [autoScroll]);

  const devices = [
    DEVICE_DESKTOP,
    DEVICE_SMARTPHONE,
    DEVICE_TABLET,
    DEVICE_CARD,
    DEVICE_WATCH,
    DEVICE_GRID,
  ];

  return (
    <div className="w-full bg-white dark:bg-solid-dark-base">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[90px] lg:pt-[120px] pb-[80px] sm:pb-[150px] lg:pb-[220px]">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-[30px] sm:gap-[40px] lg:gap-[60px] mb-[80px] sm:mb-[150px] lg:mb-[270px]">
          <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] text-center w-full max-w-[870px]">
            <h1 className="font-semibold text-[36px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 w-full animate-on-load animate-fade-in-up">
              Sampath Digital Design Language
            </h1>
            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-full max-w-[627px] animate-on-load animate-fade-in-up animation-delay-200">
              Design, Interface Engineering and AI shaping every Sampath customer experience with a unified, consistent, and intelligent design language.
            </p>
          </div>

          {/* Hero Image Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] h-[220px] sm:h-[340px] lg:h-[476px] flex items-center justify-center overflow-hidden relative animate-on-load animate-scale-in animation-delay-400">
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Center Phone (Largest) - always visible, animation handles centering via translate(-50%) */}
              <img
                src={HERO_PHONE_3}
                alt="Mobile App"
                className="absolute h-[200px] sm:h-[320px] lg:h-[450px] w-auto z-30 top-[30px] sm:top-[60px] lg:top-[100px] left-1/2 animate-float-phone"
                style={{ animationDelay: '0.6s' }}
              />
              {/* Left Phone - hidden on mobile */}
              <img
                src={HERO_PHONE_2}
                alt="Mobile App"
                className="hidden lg:block absolute h-[384.655px] w-[185.166px] z-20 top-[133px] left-[490px] animate-float-subtle"
                style={{ animationDelay: '0.8s' }}
              />
              {/* Right Phone - hidden on mobile */}
              <img
                src={HERO_PHONE_1}
                alt="Mobile App"
                className="hidden lg:block absolute h-[382.483px] w-[185.251px] z-20 top-[136px] left-[765px] animate-float-subtle"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </section>

        {/* One Design Language Section */}
        <section className="flex flex-col items-center gap-[40px] sm:gap-[56px] lg:gap-[72px] mb-[80px] sm:mb-[150px] lg:mb-[270px]">
          <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] w-full max-w-[743px] text-center">
            <h2 className="font-semibold text-[32px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 w-full animate-fade-in-up">
              One design language. Every channel.
            </h2>
            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-full animate-fade-in-up animation-delay-200">
              From mobile apps to ATMs, from wearables to internal systems, Sampath experiences are designed to feel familiar, reliable, and consistent everywhere customers interact with the bank.
            </p>
          </div>

          {/* Channels Grid */}
          <div 
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className="flex gap-[16px] sm:gap-[24px] w-full overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedChannels.map((channel, index) => (
              <div key={index} className="flex flex-col items-center gap-[12px] sm:gap-[16px] min-w-[200px] sm:min-w-[260px] lg:min-w-[320px] flex-shrink-0">
                <div className="w-[200px] h-[225px] sm:w-[260px] sm:h-[293px] lg:w-[320px] lg:h-[361px] rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden">
                  <img
                    src={channel.image}
                    alt={channel.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[16px] sm:text-[20px] lg:text-[24px] leading-tight text-gray-900 dark:text-gray-dark-900 tracking-[-0.8px] lg:tracking-[-1.44px] text-center w-full">
                  {channel.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Powered Interfaces Section */}
        <section className="flex flex-col items-center gap-[40px] sm:gap-[50px] lg:gap-[60px] mb-[80px] sm:mb-[150px] lg:mb-[270px]">
          <div className="flex flex-col items-center gap-[24px] sm:gap-[40px] w-full max-w-[743px] text-center">
            <h2 className="font-semibold text-[32px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 animate-fade-in-up">
              AI-Powered Interfaces
            </h2>
            <div className="flex flex-col gap-[12px] sm:gap-[16px] w-full">
              <h3 className="font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-tight tracking-[-0.8px] lg:tracking-[-1.28px] text-gray-900 dark:text-gray-dark-900 animate-fade-in-up animation-delay-200">
                From idea to approved UI, faster
              </h3>
              <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] animate-fade-in-up animation-delay-400">
                At the core is the Sampath Interface Engineering Framework (SIEF), using AI to generate, standardize, validate, and accelerate UI creation with built-in governance.
              </p>
            </div>
          </div>

          {/* Video/Illustration Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] h-[280px] sm:h-[480px] lg:h-[748px] flex items-center justify-center overflow-hidden">
            <video
              src={AREA_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[32px] lg:rounded-[40px]"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Button */}
          <button className="bg-brand-600 hover:bg-brand-700 transition-colors duration-200 text-white font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[34px] px-[28px] sm:px-[36px] lg:px-[43px] py-[16px] sm:py-[22px] lg:py-[27px] rounded-[92px]">
            View SIEF Portal
          </button>
        </section>

        {/* Consistency by Design Section */}
        <section className="flex flex-col items-center gap-[40px] sm:gap-[50px] lg:gap-[60px] mb-[80px] sm:mb-[150px] lg:mb-[270px]">
          <div className="flex flex-col items-center gap-[24px] sm:gap-[40px] w-full max-w-[743px] text-center">
            <h2 className="font-semibold text-[32px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 animate-fade-in-up">
              Consistency by Design
            </h2>
            <div className="flex flex-col gap-[12px] sm:gap-[16px] w-full">
              <h3 className="font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-tight tracking-[-0.8px] lg:tracking-[-1.28px] text-gray-900 dark:text-gray-dark-900 animate-fade-in-up animation-delay-200">
                Governance built in, not added later
              </h3>
              <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] animate-fade-in-up animation-delay-400">
                Consistency is enforced at the system level through design tokens, shared components, usage rules, and version control, ensuring teams build on the same foundation without slowing down.
              </p>
            </div>
          </div>

          {/* Design System Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[24px] w-full">
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[280px] sm:min-h-[420px] lg:h-[620px] flex items-start justify-center overflow-hidden px-[24px] sm:px-[48px] lg:px-[70px] py-[32px] sm:py-[56px] lg:py-[85px]">
              <img
                src={CONSISTENCY_IMAGE_1}
                alt="Design Tokens"
                className="w-full max-w-[563px] h-auto object-cover rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
              />
            </div>
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[280px] sm:min-h-[420px] lg:h-[620px] flex items-center justify-center overflow-hidden p-[32px] sm:p-[48px] lg:p-[70px]">
              <img
                src={CONSISTENCY_IMAGE_2}
                alt="Component Library"
                className="w-full max-w-[563px] h-auto object-cover rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
              />
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-brand-600 hover:bg-brand-700 transition-colors duration-200 text-white font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[34px] px-[28px] sm:px-[36px] lg:px-[43px] py-[16px] sm:py-[22px] lg:py-[27px] rounded-[92px]">
            View Design Documentation
          </button>
        </section>

        {/* Enterprise-Ready Impact Section */}
        <section className="flex flex-col items-center gap-[40px] sm:gap-[56px] lg:gap-[72px] mb-[80px] sm:mb-[150px] lg:mb-[270px]">
          <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] w-full text-center">
            <h2 className="font-semibold text-[32px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 w-full max-w-[887px] animate-fade-in-up">
              Enterprise-Ready Impact
            </h2>
            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-full max-w-[628px] animate-fade-in-up animation-delay-200">
              This design ecosystem is created for enterprise environments where reliability, security, and compliance matter—while delivering clear business impact.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[25px] w-full">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-solid-dark-raised border border-[#cbcfd5] dark:border-gray-dark-300 rounded-[20px] p-[24px] sm:p-[32px] lg:p-[40px] flex flex-col items-center gap-[16px] w-full"
              >
                <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full bg-brand-50 dark:bg-brand-dark-50 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[32px] sm:w-[36px] lg:w-[40px] h-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] lg:leading-[32px] text-gray-900 dark:text-gray-dark-900 tracking-[-0.24px] text-center">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section - Design Once. Scale Everywhere */}
        <section className="flex flex-col items-center gap-[40px] sm:gap-[60px] lg:gap-[80px]">
          <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] text-center w-full max-w-[627px]">
            <h2 className="font-semibold text-[32px] sm:text-[52px] lg:text-[72px] leading-tight tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.88px] text-gray-900 dark:text-gray-dark-900 w-full animate-fade-in-up">
              Design once. Scale everywhere.
            </h2>
            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-full animate-fade-in-up animation-delay-200">
              A single design language powering every Sampath experience today and in the future.
            </p>
          </div>

          {/* Device Icons Container */}
          <div className="relative w-full bg-brand-50 dark:bg-brand-dark-50 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[240px] sm:min-h-[380px] lg:h-[514px] flex items-center justify-center py-[40px]">
            <div className="flex flex-wrap items-center justify-center gap-[24px] sm:gap-[40px] lg:gap-[57px] px-[24px] sm:px-[40px] max-w-full">
              <img src={devices[0]} alt="Desktop" className="w-[60px] sm:w-[85px] lg:w-[107px] h-auto object-contain" />
              <img src={devices[1]} alt="Smartphone" className="w-[60px] sm:w-[86px] lg:w-[108px] h-auto object-contain" />
              <img src={devices[2]} alt="Tablet" className="w-[70px] sm:w-[98px] lg:w-[123px] h-auto object-contain" />
              <img src={devices[3]} alt="Card" className="w-[65px] sm:w-[94px] lg:w-[118px] h-auto object-contain" />
              <img src={devices[4]} alt="Watch" className="w-[70px] sm:w-[98px] lg:w-[123px] h-auto object-contain" />
              <img src={devices[5]} alt="Grid" className="w-[65px] sm:w-[94px] lg:w-[118px] h-auto object-contain" />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="font-semibold text-[18px] sm:text-[24px] lg:text-[32px] leading-tight text-gray-900 dark:text-gray-dark-900 tracking-[-0.8px] lg:tracking-[-1.28px] text-center px-4">
            <p className="mb-1 sm:mb-2">From mobile to web. From ATM to wearable.</p>
            <p>One system. Endless scale.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
