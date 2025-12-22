import React from "react";
import { PageHeader } from "@components";
const brandColors = [
  { name: "50", hex: "#FFF7ED", usage: "Backgrounds, subtle highlights" },
  { name: "100", hex: "#FFEDD5", usage: "Secondary backgrounds" },
  {
    name: "200",
    hex: "#FED7AA",
    usage: "Hover backgrounds for light elements",
  },
  { name: "300", hex: "#FDBA74", usage: "Borders, subtle emphasis" },
  { name: "400", hex: "#FB923C", usage: "Icons, secondary actions" },
  { name: "500", hex: "#F97316", usage: "Highlights or less prominent CTAs" },
  { name: "600", hex: "#EA580C", usage: "Primary buttons / main actions" },
  {
    name: "700",
    hex: "#C2410C",
    usage: "Hover / Active state for primary buttons",
  },
  { name: "800", hex: "#9A3412", usage: "Strong emphasis text" },
  { name: "900", hex: "#7C2D12", usage: "Rare / high contrast use" },
];

const grayColors = [
  { name: "0", hex: "#FFFFFF" },
  { name: "50", hex: "#F9FAFB" },
  { name: "100", hex: "#F3F4F6" },
  { name: "200", hex: "#E5E7EB" },
  { name: "300", hex: "#D1D5DB" },
  { name: "400", hex: "#9CA3AF" },
  { name: "500", hex: "#6B7280" },
  { name: "600", hex: "#4B5563" },
  { name: "700", hex: "#374151" },
  { name: "800", hex: "#1F2937" },
  { name: "900", hex: "#111827" },
  { name: "950", hex: "#030712" },
];


// Semantic Colors
const errorColors = [
  { name: "50", hex: "#FEF2F2" },
  { name: "100", hex: "#FEE2E2" },
  { name: "500", hex: "#EF4444" },
  { name: "600", hex: "#DC2626" },
];
const warningColors = [
  { name: "50", hex: "#FFC1311A" },
  { name: "100", hex: "#A37B1E33" },
  { name: "500", hex: "#A37B1ECC" },
  { name: "600", hex: "#A37B1E" },
];
const successColors = [
  { name: "50", hex: "#16A34A12" },
  { name: "100", hex: "#16A34A24" },
  { name: "500", hex: "#16A34ACC" },
  { name: "600", hex: "#16A34A" },
];
const informationColors = [
  { name: "50", hex: "#2563EB0D" },
  { name: "100", hex: "#2563EB24" },
  { name: "500", hex: "#3F63EBCC" },
  { name: "600", hex: "#2563EB" },
];

const colors = [
  {
    name: "Brand Primary",
    hex: "#EA580C",
    bg: "#EA580C",
  },
  {
    name: "Default Font",
    hex: "#171717",
    bg: "#171717",
  },
  {
    name: "Subtext Color",
    hex: "#737373",
    bg: "#737373",
  },
  {
    name: "Neutral Border",
    hex: "#E5E5E5",
    bg: "#E5E5E5",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    bg: "#FFFFFF",
    border: true,
  },
  {
    name: "Default Background",
    hex: "#FFFFFF",
    bg: "#FFFFFF",
    border: true,
  },
];

export function ColorPage() {
  return (
    <div className="w-full">
      <div className="space-y-12 min-h-screen">
        <PageHeader
          heading="Color"
          content="Our color system provides a consistent visual language for all UI components. Colors are organized into Brand, Gray scale, and Semantic colors for actions and status."
        />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto">
            {/* Most Used Colors */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Main Colors</h2>
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              
                  <div
                    className="rounded-lg flex flex-col cursor-pointer bg-brand-600"
                  >
                    
                    <div className="my-2">
                      <p className="font-medium">Orange </p>
                      <p className="text-sm text-gray-500">2</p>
                      <p className="text-xs mt-1">2</p>
                    </div>
                  </div>
              
              </div> */}
              <div className="flex flex-wrap justify-between gap-10">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Color Circle */}
                    <div
                      className={`w-32 h-32 rounded-full ${
                        color.border ? "border border-gray-200" : ""
                      }`}
                      style={{ backgroundColor: color.bg }}
                    />

                    {/* Label */}
                    <p className="mt-4 text-base font-medium text-gray-900">
                      {color.name}
                    </p>

                    {/* Hex */}
                    <p className="mt-1 text-sm text-gray-500">{color.hex}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Brand Colors */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {brandColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="mt-2 text-center">
                      <p className="font-medium">Brand {color.name}</p>
                      <p className="text-sm text-gray-500">{color.usage}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gray Scale */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Gray Scale</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {grayColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* <p className="text-xs mt-1">{color.hex}</p> */}
                    <div className="mt-2 text-center">
                      <p className="font-medium">Gray {color.name}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                Use gray for typography, dividers, and subtle UI surfaces.
              </p>
            </section>

            {/* Semantic Colors */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {Object.entries(semanticColors).map(([type, shades]) => (
                  <div
                    key={type}
                    className="rounded-lg shadow p-4 flex flex-col items-center"
                  >
                    <div
                      className="w-full h-16 rounded"
                      style={{ backgroundColor: shades["600"] }}
                    />
                    <p className="font-medium mt-2 capitalize">{type}</p>
                    <div className="flex flex-col items-center text-xs mt-1">
                      {Object.entries(shades).map(([key, hex]) => (
                        <span key={key}>
                          {key}: {hex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {errorColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* <p className="text-xs mt-1">{color.hex}</p> */}
                    <div className="mt-2 text-center">
                      <p className="font-medium">Error {color.name}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
                {warningColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* <p className="text-xs mt-1">{color.hex}</p> */}
                    <div className="mt-2 text-center">
                      <p className="font-medium">Warning {color.name}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
                {successColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* <p className="text-xs mt-1">{color.hex}</p> */}
                    <div className="mt-2 text-center">
                      <p className="font-medium">Success {color.name}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
                {informationColors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-full h-24 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* <p className="text-xs mt-1">{color.hex}</p> */}
                    <div className="mt-2 text-center">
                      <p className="font-medium">Information {color.name}</p>
                      <p className="text-xs mt-1">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
