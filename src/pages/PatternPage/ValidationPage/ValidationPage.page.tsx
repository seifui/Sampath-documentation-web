import React from "react";
import { PageHeader } from "@components";

export function ValidationPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Validation"
          content="Validation messages help users understand what went wrong and how to
          fix it when entering information."
        />
        <div className="max-w-[820px] mx-auto">
          <section className="space-y-6 px-4">
            <h2 className="text-3xl font-semibold mb-6 ">Example</h2>
            <p>
              Validation messages appear when the user enters invalid input and
              are shown below the related field.
            </p>

            {/* Example Card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 max-w-lg">
              <ValidationExample />
            </div>
          </section>

          <section className="space-y-6 px-4 mt-10">
            <h2 className="text-xl font-semibold text-neutral-900">
              Best practices
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-neutral-700 max-w-3xl">
              <li>Explain what went wrong and how to fix it, when possible.</li>
              <li>Use polite, neutral language that respects the user.</li>
              <li>Write in full sentences and keep messages short.</li>
              <li>Use “please” when giving instructions.</li>
              <li>Be clear and direct without sounding technical.</li>
              <li>Focus on helping the user complete their task.</li>
            </ul>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Avoid
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600 max-w-3xl">
                <li>Blaming the user for mistakes.</li>
                <li>Using system or developer error messages.</li>
                <li>Including inline links inside validation messages.</li>
                <li>Making promises the system can’t guarantee.</li>
                <li>Using jokes, slang, or overly casual language.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6 px-4 mt-10">
            <h2 className="text-xl font-semibold text-neutral-900">Examples</h2>

            <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
              {/* Good examples */}
              <div className="rounded-xl border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                  Clear and helpful
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>Please enter your first name.</li>
                  <li>Name can only contain letters and spaces.</li>
                  <li>Please select an option from the list.</li>
                  <li>
                    Sorry, we couldn’t save your changes. Please try again.
                  </li>
                </ul>
              </div>

              {/* Poor examples */}
              <div className="rounded-xl border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                  Avoid using
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>Invalid input</li>
                  <li>Something went wrong</li>
                  <li>Error 400</li>
                  <li>Oops! Try again</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6 px-4 mt-10">
            <h2 className="text-xl font-semibold text-neutral-900">
              Message library
            </h2>

            <p className="max-w-3xl text-neutral-600">
              Some validation scenarios occur frequently across the product. To
              keep messaging consistent, use standard messages where possible
              instead of creating new ones.
            </p>
          </section>

          <section className="space-y-6 px-4 mt-10">
            <h2 className="text-xl font-semibold text-neutral-900">
              Field validation patterns
            </h2>

            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-700">
                  <tr>
                    <th className="px-4 py-3 font-medium">Rule</th>
                    <th className="px-4 py-3 font-medium">Message template</th>
                    <th className="px-4 py-3 font-medium">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3">Required</td>
                    <td className="px-4 py-3">Please enter {`{field}`}. </td>
                    <td className="px-4 py-3">Please enter your first name.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Minimum length</td>
                    <td className="px-4 py-3">
                      Please enter at least {`{minLength}`} characters.
                    </td>
                    <td className="px-4 py-3">
                      Please enter at least 10 characters.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Maximum length</td>
                    <td className="px-4 py-3">
                      Please enter fewer than {`{maxLength}`} characters.
                    </td>
                    <td className="px-4 py-3">
                      Please enter fewer than 20 characters.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Minimum value</td>
                    <td className="px-4 py-3">
                      Please enter a value of {`{minimum}`} or more.
                    </td>
                    <td className="px-4 py-3">
                      Please enter a value of 3 or more.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Maximum value</td>
                    <td className="px-4 py-3">
                      Please enter a value of {`{maximum}`} or less.
                    </td>
                    <td className="px-4 py-3">
                      Please enter a value of 100 or less.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Format</td>
                    <td className="px-4 py-3">
                      Please enter {`{field}`} in the correct format.
                    </td>
                    <td className="px-4 py-3">
                      Please enter your email address in the correct format.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ValidationExample() {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label
        htmlFor="name"
        className="block text-sm font-medium text-neutral-900"
      >
        Name
      </label>

      {/* Input */}
      <input
        id="name"
        type="text"
        value="Ishara_1"
        readOnly
        aria-invalid="true"
        aria-describedby="name-error"
        className="
          w-full rounded-lg border px-4 py-2.5 text-neutral-900
          border-red-500
          focus:outline-none focus:ring-2 focus:ring-red-500
        "
      />

      {/* Validation Message */}
      <p id="name-error" className="text-sm text-red-600">
        Name can only contain letters and spaces
      </p>
    </div>
  );
}
