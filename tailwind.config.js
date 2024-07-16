/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
          transparent: "#FFFFFF00"
        },
        brand: {
          50: "#FFE5DC",
          100: "#FECFBF",
          500: "#FF5C00",
          600: "#EA580C",
          700: "#C2410C",
          dark: {
            50: "#FEF1EA",
            100: "#FEE8DC",
            500: "#D07559",
            600: "#EB5B10",
            700: "#E15319"
          }
        },
        greySlate: {
          50: "#F3F4F6",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937",
          800: "#181C20",
          dark: {
            50: "#FFFFFF",
            100: "#F1F1F3",
            200: "#EAEAEC",
            300: "#E6E6E9",
            400: "#FFFFFF",
            500: "#FFFFFF",
            600: "#FFFFFF",
            700: "#FFFFFF",
            800: "#FFFFFF"
          }
        },
        error: {
          50: "#FEF2F2",
          100: "#FAE0E0",
          500: "#EF4444",
          600: "#DC2626",
          dark: {
            50: "#FDF4F4",
            100: "#FAE0E0",
            500: "#E35151",
            600: "#DC2626"
          }
        },
        warning: {
          50: "#FFF9EB",
          100: "#EDE5D2",
          500: "#B5954B",
          600: "#A37B1E",
          dark: {
            50: "#FBF7ED",
            100: "#F9F2E2",
            500: "#E6CB8D",
            600: "#E0BE70"
          }
        },
        success: {
          50: "#D1FAE5",
          100: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          dark: {
            50: "#F0FDF4",
            100: "#DEF2E5",
            500: "#45B56E",
            600: "#16A34A"
          }
        },
        information: {
          50: "#F4F7FE",
          100: "#E0E9FC",
          500: "#5182EF",
          600: "#2563EB",
          dark: {
            50: "#F4F7FE",
            100: "#E0E9FC",
            500: "#5182EF",
            600: "#2563EB"
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
