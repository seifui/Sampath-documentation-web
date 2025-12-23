import React from "react";
import {
  FW_HERO_IMAGE_1,
  FW_HERO_IMAGE_2,
  FW_EXPLORE_DESIGN_1,
  FW_EXPLORE_DESIGN_2,
  FW_EXPLORE_DESIGN_3,
  FW_EXPLORE_DESIGN_4,
  FW_ICON_MAGIC_WAND,
  FW_ICON_BRACKETS,
  FW_ICON_GIT,
  FW_ICON_BOOK,
  FW_ICON_FIGMA,
  FW_ICON_PENCIL,
  FW_ICON_DATAFLOW,
  FW_ICON_USERS,
  FW_ICON_LAPTOP,
  FW_ICON_ARROW_RIGHT,
  FW_DEVICE_DESKTOP,
  FW_DEVICE_SMARTPHONE,
  FW_DEVICE_TABLET,
  FW_DEVICE_CARD,
  FW_DEVICE_WATCH,
  FW_DEVICE_GRID,
} from "@assets";

export function FrameworkPage() {
  const exploreSiefCards = [
    {
      icon: FW_ICON_MAGIC_WAND,
      title: "Generate Interfaces with AI",
      description: "Build beautiful interfaces using AI-powered design tools and components.",
      buttonText: "Visit Subframe",
      buttonType: "primary" as const,
    },
    {
      icon: FW_ICON_BRACKETS,
      title: "NPM Packages",
      description: "Browse our collection of production-ready React components and utilities on NPM.",
      buttonText: "View NPM Profile",
      buttonType: "secondary" as const,
    },
    {
      icon: FW_ICON_GIT,
      title: "GitHub Repos",
      description: "Explore our open-source repositories and contribute to the Sampath ecosystem.",
      buttonText: "View GitHub",
      buttonType: "secondary" as const,
    },
    {
      icon: FW_ICON_BOOK,
      title: "Storybooks",
      description: "Browse our collection of production-ready React components and utilities on NPM.",
      buttonText: "View Storybook",
      buttonType: "secondary" as const,
    },
    {
      icon: FW_ICON_FIGMA,
      title: "Figma Projects",
      description: "Browse our collection of production-ready React components and utilities on NPM.",
      buttonText: "View Projects",
      buttonType: "secondary" as const,
    },
    {
      icon: FW_ICON_PENCIL,
      title: "Design Guidelines",
      description: "Explore our open-source repositories and contribute to the Sampath ecosystem.",
      buttonText: "View Documentation",
      buttonType: "secondary" as const,
    },
  ];

  const onTheLineCards = [
    {
      icon: FW_ICON_DATAFLOW,
      title: "Manage Projects",
      description: "Browse our collection of production-ready React components and utilities on NPM.",
      buttonText: "Coming soon",
    },
    {
      icon: FW_ICON_USERS,
      title: "Customer Requests",
      description: "Browse our collection of production-ready React components and utilities on NPM.",
      buttonText: "Coming soon",
    },
    {
      icon: FW_ICON_LAPTOP,
      title: "Template Library",
      description: "Explore our open-source repositories and contribute to the Sampath ecosystem.",
      buttonText: "Coming soon",
    },
  ];

  const devices = [
    FW_DEVICE_DESKTOP,
    FW_DEVICE_SMARTPHONE,
    FW_DEVICE_TABLET,
    FW_DEVICE_CARD,
    FW_DEVICE_WATCH,
    FW_DEVICE_GRID,
  ];

  return (
    <div className="w-full bg-white dark:bg-solid-dark-base">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-[220px]">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-[72px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] text-center w-full max-w-[870px] px-4">
            <h1 className="font-semibold text-[40px] sm:text-[60px] lg:text-[72px] leading-[74px] text-gray-900 dark:text-gray-dark-900 tracking-[-3.28px] w-full animate-on-load animate-fade-in-up">
              All in-one Sampath Interface Engineering Framework
            </h1>
            <p className="font-normal text-[18px] sm:text-[20px] lg:text-[20px] leading-[24px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.24px] w-full max-w-[627px] animate-on-load animate-fade-in-up animation-delay-200">
              A new initiative to streamline UI design and front-end development using an AI powered workflow.
            </p>
          </div>

          {/* Hero Image Container */}
          <div className="w-full bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] h-[300px] sm:h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden relative animate-on-load animate-scale-in animation-delay-400">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Front Image - Always visible */}
              <img
                src={FW_HERO_IMAGE_1}
                alt="Framework Mockup"
                className="h-[250px] w-auto sm:h-[350px] lg:h-[460px] rounded-tl-[16px] rounded-tr-[16px] sm:rounded-tl-[24px] sm:rounded-tr-[24px] lg:rounded-tl-[32px] lg:rounded-tr-[32px] shadow-[20px_40px_50px_0px_rgba(0,0,0,0.25)] lg:shadow-[30px_60px_70px_0px_rgba(0,0,0,0.25)] z-20 animate-float-phone"
                style={{ animationDelay: '0.6s' }}
              />
              {/* Back Image - Hidden on mobile */}
              <img
                src={FW_HERO_IMAGE_2}
                alt="Framework Mockup"
                className="hidden lg:block absolute h-[443px] w-[631px] rounded-tl-[32px] rounded-tr-[32px] shadow-[30px_60px_70px_0px_rgba(0,0,0,0.25)] right-[200px] top-[126px] z-10 animate-float-subtle"
                style={{ animationDelay: '0.8s' }}
              />
            </div>
          </div>
        </section>

        {/* Explore SIEF Section */}
        <section className="flex flex-col items-center gap-[80px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] w-full max-w-[815px] text-center px-4">
            <div className="flex flex-col items-center w-full">
              <h2 className="font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-[82px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-full animate-fade-in-up">
                Explore SIEF
              </h2>
            </div>
            <p className="font-normal text-[18px] sm:text-[20px] lg:text-[20px] leading-[28px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.24px] w-full max-w-[743px] animate-fade-in-up animation-delay-200">
              Everything that powers Sampath's digital experiences, built for consistency, scale, and speed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
            {exploreSiefCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-solid-dark-raised border border-[#cbcfd5] dark:border-gray-dark-300 rounded-[20px] p-[32px] flex flex-col gap-[33px] w-full"
              >
                <div className="w-[90px] h-[90px] rounded-full bg-brand-50 dark:bg-brand-dark-50 flex items-center justify-center flex-shrink-0">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="max-w-[34px] max-h-[34px] w-auto h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-semibold text-[28px] leading-[37.33px] text-gray-900 dark:text-gray-dark-900 tracking-[-0.28px]">
                    {card.title}
                  </h3>
                  <p className="font-normal text-[18px] leading-[26.67px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px]">
                    {card.description}
                  </p>
                </div>
                <button
                  className={`flex items-center justify-center gap-[6px] px-[20px] py-[16px] rounded-full w-full ${
                    card.buttonType === "primary"
                      ? "bg-brand-600 hover:bg-brand-700 text-white"
                      : "bg-brand-50 dark:bg-brand-dark-50 hover:bg-brand-100 dark:hover:bg-brand-dark-100 text-brand-600"
                  } transition-colors duration-200`}
                >
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[-0.4px]">
                    {card.buttonText}
                  </span>
                  <img
                    src={FW_ICON_ARROW_RIGHT}
                    alt=""
                    className={`w-[20px] h-[20px] ${
                      card.buttonType === "primary" ? "" : "[filter:brightness(0)_saturate(100%)_invert(36%)_sepia(80%)_saturate(2518%)_hue-rotate(4deg)_brightness(95%)_contrast(102%)]"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* On the Line Section */}
        <section className="flex flex-col items-center gap-[80px] mb-[270px]">
          <div className="flex flex-col items-center gap-[20px] w-full max-w-[815px] text-center px-4">
            <div className="flex flex-col items-center w-full">
              <h2 className="font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-[82px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-full animate-fade-in-up">
                On the line
              </h2>
            </div>
            <p className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed text-gray-500 dark:text-gray-dark-500 tracking-[-0.24px] w-full max-w-[743px] animate-fade-in-up animation-delay-200">
              Track, manage, and respond to ongoing work in one place — from project coordination and customer requests to reusable templates that keep teams aligned and moving fast.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
            {onTheLineCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-solid-dark-raised border border-[#cbcfd5] dark:border-gray-dark-300 rounded-[20px] p-[32px] flex flex-col gap-[33px] w-full"
              >
                <div className="w-[90px] h-[90px] rounded-full bg-gray-50 dark:bg-gray-dark-50 flex items-center justify-center flex-shrink-0">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="max-w-[34px] max-h-[34px] w-auto h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-semibold text-[28px] leading-[37.33px] text-gray-900 dark:text-gray-dark-900 tracking-[-0.28px]">
                    {card.title}
                  </h3>
                  <p className="font-normal text-[18px] leading-[26.67px] text-gray-500 dark:text-gray-dark-500 tracking-[-0.2px]">
                    {card.description}
                  </p>
                </div>
                <button className="bg-gray-50 dark:bg-gray-dark-50 px-[20px] py-[16px] rounded-full w-full">
                  <span className="font-semibold text-[20px] leading-[30px] text-gray-700 dark:text-gray-dark-700 tracking-[-0.4px]">
                    {card.buttonText}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Designs Section */}
        <section className="flex flex-col items-center gap-[80px] mb-[270px]">
          <div className="flex flex-col items-center w-full max-w-[815px] px-4">
            <h2 className="font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-[82px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] text-center w-full animate-fade-in-up">
              Explore Designs
            </h2>
          </div>

          {/* Design Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[400px] sm:min-h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden p-[40px] sm:p-[60px]">
              <img
                src={FW_EXPLORE_DESIGN_1}
                alt="Design Preview"
                className="w-full h-auto max-w-[563px] object-contain rounded-[20px] sm:rounded-[32px]"
              />
            </div>
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[400px] sm:min-h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden p-[40px] sm:p-[60px]">
              <img
                src={FW_EXPLORE_DESIGN_2}
                alt="Design Preview"
                className="w-full h-auto max-w-[563px] object-contain rounded-[20px] sm:rounded-[32px]"
              />
            </div>
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[400px] sm:min-h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden p-[40px] sm:p-[60px]">
              <img
                src={FW_EXPLORE_DESIGN_3}
                alt="Design Preview"
                className="w-full h-auto max-w-[563px] object-contain rounded-[20px] sm:rounded-[32px]"
              />
            </div>
            <div className="bg-gray-200 dark:bg-gray-dark-200 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[400px] sm:min-h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden p-[40px] sm:p-[60px]">
              <img
                src={FW_EXPLORE_DESIGN_4}
                alt="Design Preview"
                className="w-full h-auto max-w-[563px] object-contain rounded-[20px] sm:rounded-[32px]"
              />
            </div>
          </div>
        </section>

        {/* Design Once. Scale Everywhere Section */}
        <section className="flex flex-col items-center gap-[80px]">
          <div className="flex flex-col items-center gap-[20px] text-center w-full max-w-[627px] px-4">
            <h2 className="font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-[82px] text-gray-900 dark:text-gray-dark-900 tracking-[-2.88px] w-full animate-fade-in-up">
              Design once. Scale everywhere.
            </h2>
            <p className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed text-gray-500 dark:text-gray-dark-500 tracking-[-0.24px] w-full animate-fade-in-up animation-delay-200">
              A single design language powering every Sampath experience today and in the future.
            </p>
          </div>

          {/* Device Icons Container */}
          <div className="relative w-full bg-brand-50 dark:bg-brand-dark-50 rounded-[20px] sm:rounded-[32px] lg:rounded-[40px] min-h-[400px] sm:min-h-[450px] lg:h-[514px] flex items-center justify-center overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-[40px] sm:gap-[57px] px-[40px] max-w-full">
              {devices.map((device, index) => (
                <img 
                  key={index}
                  src={device} 
                  alt={`Device ${index + 1}`} 
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] object-contain flex-shrink-0" 
                />
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="font-semibold text-[20px] sm:text-[24px] lg:text-[32px] leading-tight text-gray-900 dark:text-gray-dark-900 tracking-[-1.28px] text-center px-4">
            <p className="mb-2">From mobile to web. From ATM to wearable.</p>
            <p>One system. Endless scale.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
