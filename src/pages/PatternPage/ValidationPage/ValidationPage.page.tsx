import React from "react";
import { PageHeader } from "@components";

export function ValidationPage() {
  return (
    <div className="w-full">
      <div className="space-y-12 min-h-screen">
        <PageHeader
          heading="Validation"
          content="The validation system ensures that users receive immediate and clear feedback when interacting with forms or inputs. Validation messages guide users to correct errors, prevent invalid submissions, and confirm successful actions. Error, warning, and success states are consistently styled to maintain clarity, accessibility, and visual consistency across the interface."
        />
        <div className="max-w-[820px] mx-auto">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6 ">Validation States</h2>
            <p>
              Each input field supports multiple validation states to guide
              users during data entry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ValidationCard
                title="Error"
                description="Displayed when user input is invalid or required information is missing."
                message="Email address is required."
                color="border-red-200"
                bg="bg-red-50"
                text="text-red-700"
              />

              <ValidationCard
                title="Warning"
                description="Displayed when input may cause an issue but does not block submission."
                message="Password strength is weak."
                color="border-yellow-200"
                bg="bg-yellow-50"
                text="text-yellow-700"
              />

              <ValidationCard
                title="Success"
                description="Displayed when input is valid or an action is completed successfully."
                message="Profile updated successfully."
                color="border-green-200"
                bg="bg-green-50"
                text="text-green-700"
              />

              <ValidationCard
                title="Information"
                description="Provides helpful guidance or additional context."
                message="You can update this later from settings."
                color="border-blue-200"
                bg="bg-blue-50"
                text="text-blue-700"
              />
            </div>
          </section>

          {/* ================= Guidelines ================= */}
          <section className="space-y-6 mt-10">
           
            <h2 className="text-3xl font-semibold mb-6 ">Usage Guidelines</h2>
            <p>
              Follow these guidelines to ensure validation feedback is clear, accessible, and consistent.
            </p>

            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                Place validation messages directly below the related input
                field.
              </li>
              <li>
                Use semantic colors consistently for each validation state.
              </li>
              <li>Keep messages short, clear, and action-oriented.</li>
              <li>
                Do not rely on color alone to communicate validation states.
              </li>
              <li>Remove error messages once the input becomes valid.</li>
            </ul>
          </section>

          {/* ================= Accessibility ================= */}
          <section className="space-y-4 mt-10">
            <h2 className="text-3xl font-semibold mb-6 ">Accessibility</h2>
            <p>
              Validation messages must be accessible to all users.
            </p>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>Ensure sufficient contrast between text and background.</li>
              <li>Use readable font sizes for validation messages.</li>
              <li>
                Provide meaningful text that can be read by screen readers.
              </li>
              <li>Avoid technical or unclear language.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

type ValidationCardProps = {
  title: string;
  description: string;
  message: string;
  color: string;
  bg: string;
  text: string;
};

function ValidationCard({
  title,
  description,
  message,
  color,
  bg,
  text,
}: ValidationCardProps) {
  return (
    <div className={`rounded-2xl border p-6 ${color}`}>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>

      <div className={`mt-4 rounded-lg px-4 py-3 ${bg}`}>
        <p className={`text-sm font-medium ${text}`}>{message}</p>
      </div>
    </div>
  );
}
