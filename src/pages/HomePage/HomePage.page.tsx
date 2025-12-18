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
    const maxScroll = scrollWidth - clientWidth;
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
      <div className="max-w-[1440px] mx-auto px-0 pt-[120px] pb-[220px]">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-[60px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] text-center w-[870px]">
            <h1 className="font-semibold text-[72px] leading-[74px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-full animate-on-load animate-fade-in-up">
              Sampath Digital Design Language
            </h1>
            <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-[627px] animate-on-load animate-fade-in-up animation-delay-200">
              Design, Interface Engineering and AI shaping every Sampath customer experience with a unified, consistent, and intelligent design language.
            </p>
          </div>

          {/* Hero Image Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-dark-200 rounded-[40px] h-[476px] flex items-center justify-center overflow-hidden relative animate-on-load animate-scale-in animation-delay-400">
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Center Phone (Largest) */}
              <img
                src={HERO_PHONE_3}
                alt="Mobile App"
                className="absolute h-[450px] w-[217px] z-30 top-[100px] left-1/2 animate-float-phone"
                style={{ animationDelay: '0.6s' }}
              />
              {/* Left Phone */}
              <img
                src={HERO_PHONE_2}
                alt="Mobile App"
                className="absolute h-[384.655px] w-[185.166px] z-20 top-[133px] left-[490px] animate-float-subtle"
                style={{ animationDelay: '0.8s' }}
              />
              {/* Right Phone */}
              <img
                src={HERO_PHONE_1}
                alt="Mobile App"
                className="absolute h-[382.483px] w-[185.251px] z-20 top-[136px] left-[765px] animate-float-subtle"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </section>

        {/* One Design Language Section */}
        <section className="flex flex-col items-center gap-[72px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] w-[743px] text-center">
            <div className="flex flex-col items-center w-[627px]">
              <h2 className="font-semibold text-[72px] leading-[74px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-[815px] animate-fade-in-up">
                One design language. Every channel.
              </h2>
            </div>
            <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-full animate-fade-in-up animation-delay-200">
              From mobile apps to ATMs, from wearables to internal systems, Sampath experiences are designed to feel familiar, reliable, and consistent everywhere customers interact with the bank.
            </p>
          </div>

          {/* Channels Grid */}
          <div 
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className="flex gap-[24px] w-full overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {duplicatedChannels.map((channel, index) => (
              <div key={index} className="flex flex-col items-center gap-[16px] min-w-[320px] flex-shrink-0">
                <div className="w-[320px] h-[361px] rounded-[32px] overflow-hidden">
                  <img
                    src={channel.image}
                    alt={channel.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[24px] leading-[76.386px] text-gray-900 dark:text-gray-dark-900 tracking-[-1.44px] text-center w-full">
                  {channel.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Powered Interfaces Section */}
        <section className="flex flex-col items-center gap-[60px] mb-[270px]">
          <div className="flex flex-col items-center gap-[40px] w-[743px] text-center">
            <div className="flex flex-col items-center justify-center w-[627px]">
              <h2 className="font-semibold text-[72px] leading-[86.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] animate-fade-in-up">
                AI-Powered Interfaces
              </h2>
            </div>
            <div className="flex flex-col gap-[16px] w-full">
              <h3 className="font-semibold text-[32px] leading-[38.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-1.28px] animate-fade-in-up animation-delay-200">
                From idea to approved UI, faster
              </h3>
              <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] animate-fade-in-up animation-delay-400">
                At the core is the Sampath Interface Engineering Framework (SIEF), using AI to generate, standardize, validate, and accelerate UI creation with built-in governance.
              </p>
            </div>
          </div>

          {/* Video/Illustration Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-dark-200 rounded-[40px] h-[748px] flex items-center justify-center overflow-hidden">
            <video
              src={AREA_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[40px]"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Button */}
          <button className="bg-brand-600 hover:bg-brand-700 transition-colors duration-200 text-white font-bold text-[20px] leading-[34px] px-[43px] py-[27px] rounded-[92px]">
            View SIEF Portal
          </button>
        </section>

        {/* Consistency by Design Section */}
        <section className="flex flex-col items-center gap-[60px] mb-[270px]">
          <div className="flex flex-col items-center gap-[40px] w-[743px] text-center">
            <div className="flex flex-col items-center justify-center w-[627px]">
              <h2 className="font-semibold text-[72px] leading-[86.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] animate-fade-in-up">
                Consistency by Design
              </h2>
            </div>
            <div className="flex flex-col gap-[16px] w-full">
              <h3 className="font-semibold text-[32px] leading-[38.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-1.28px] animate-fade-in-up animation-delay-200">
                Governance built in, not added later
              </h3>
              <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] animate-fade-in-up animation-delay-400">
                Consistency is enforced at the system level through design tokens, shared components, usage rules, and version control, ensuring teams build on the same foundation without slowing down.
              </p>
            </div>
          </div>

          {/* Design System Images */}
          <div className="flex gap-[24px] w-full justify-between">
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[40px] w-[704px] h-[620px] flex items-start justify-center overflow-hidden px-[70px] py-[85px]">
              <img
                src={CONSISTENCY_IMAGE_1}
                alt="Design Tokens"
                className="w-[563px] h-[450px] object-cover rounded-[32px]"
              />
            </div>
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[40px] w-[704px] h-[620px] flex items-center justify-center overflow-hidden px-[225px] py-[291px]">
              <img
                src={CONSISTENCY_IMAGE_2}
                alt="Component Library"
                className="w-[563px] h-[450px] object-cover rounded-[32px]"
              />
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-brand-600 hover:bg-brand-700 transition-colors duration-200 text-white font-bold text-[20px] leading-[34px] px-[43px] py-[27px] rounded-[92px]">
            View Design Documentation
          </button>
        </section>

        {/* Enterprise-Ready Impact Section */}
        <section className="flex flex-col items-center gap-[72px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] w-[1249px] text-center">
            <div className="flex flex-col items-center justify-center w-[887px]">
              <h2 className="font-semibold text-[72px] leading-[86.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-full animate-fade-in-up">
                Enterprise-Ready Impact
              </h2>
            </div>
            <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-[628px] animate-fade-in-up animation-delay-200">
              This design ecosystem is created for enterprise environments where reliability, security, and compliance matter—while delivering clear business impact.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-[24px] w-full">
            <div className="flex gap-[25px] w-full">
              {enterpriseFeatures.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-solid-dark-raised border border-[#cbcfd5] dark:border-gray-dark-300 rounded-[20px] p-[40px] flex flex-col items-center gap-[16px] w-[341px]"
                >
                  <div className="w-[90px] h-[90px] rounded-full bg-brand-50 dark:bg-brand-dark-50 flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[40px] h-auto object-contain"
                    />
                  </div>
                  <p className="font-semibold text-[20px] leading-[32px] text-gray-900 dark:text-gray-dark-900 tracking-[-0.24px] text-center w-[227px]">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-[25px] w-full">
              {enterpriseFeatures.slice(4, 8).map((feature, index) => (
                <div
                  key={index + 4}
                  className="bg-white dark:bg-solid-dark-raised border border-[#cbcfd5] dark:border-gray-dark-300 rounded-[20px] p-[40px] flex flex-col items-center gap-[16px] w-[341px]"
                >
                  <div className="w-[90px] h-[90px] rounded-full bg-brand-50 dark:bg-brand-dark-50 flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[40px] h-auto object-contain"
                    />
                  </div>
                  <p className="font-semibold text-[20px] leading-[32px] text-gray-900 dark:text-gray-dark-900 tracking-[-0.24px] text-center w-[227px]">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section - Design Once. Scale Everywhere */}
        <section className="flex flex-col items-center gap-[80px]">
          <div className="flex flex-col items-start gap-[20px] text-center">
            <h2 className="font-semibold text-[72px] leading-[79.2px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-[627px] animate-fade-in-up">
              Design once. Scale everywhere.
            </h2>
            <p className="font-normal text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px] w-[627px] animate-fade-in-up animation-delay-200">
              A single design language powering every Sampath experience today and in the future.
            </p>
          </div>

          {/* Device Icons Container */}
          <div className="relative w-full bg-brand-50 dark:bg-brand-dark-50 rounded-[40px] h-[514px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-[57px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={devices[0]} alt="Desktop" className="w-[107px] h-auto object-contain" />
              <img src={devices[1]} alt="Smartphone" className="w-[108px] h-auto object-contain" />
              <img src={devices[2]} alt="Tablet" className="w-[123px] h-auto object-contain" />
              <img src={devices[3]} alt="Card" className="w-[118px] h-auto object-contain" />
              <img src={devices[4]} alt="Watch" className="w-[123px] h-auto object-contain" />
              <img src={devices[5]} alt="Grid" className="w-[118px] h-auto object-contain" />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="font-semibold text-[32px] leading-[38.4px] text-gray-900 dark:text-gray-dark-900 tracking-[-1.28px] text-center whitespace-nowrap">
            <p className="mb-0">From mobile to web. From ATM to wearable.</p>
            <p>One system. Endless scale.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
