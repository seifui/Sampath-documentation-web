import React from "react";
import { PageHeader } from "@components";

export function TypographyPage() {
  return (
    <div className="w-full">
      <div className="space-y-12 min-h-screen">
        <PageHeader
          heading="Typography"
          content="Our typography system establishes a clear visual hierarchy and ensures readability across all interfaces. Font styles, sizes, and weights are structured to maintain consistency, accessibility, and usability throughout the product."
        />
        <div className="max-w-[820px] mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inter */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h1 className="text-5xl font-sans font-normal">Inter</h1>
              <p className="mt-3 text-sm text-gray-500">
                Google Font • 7 text tokens
              </p>
            </div>

            {/* Monospace */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h1 className="text-5xl font-mono font-normal">monospace</h1>
              <p className="mt-3 text-sm text-gray-500">
                System • 1 text token
              </p>
            </div>
          </section>

          {/* ================= Typography Scale ================= */}
          <section className="rounded-2xl border border-gray-200 divide-y mt-10">
            <TypeRow
              title="Heading 1"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-semibold"
              size="text-[30px] leading-[36px]"
              meta="Inter 600  •  Aa 30px  •  36px  •  0em"
            />

            <TypeRow
              title="Heading 2"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-semibold"
              size="text-[20px] leading-[24px]"
              meta="Inter 600  •  Aa 20px  •  24px  •  0em"
            />

            <TypeRow
              title="Heading 3"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-semibold"
              size="text-[16px] leading-[20px]"
              meta="Inter 600  •  Aa 16px  •  20px  •  0em"
            />

            <TypeRow
              title="Body Bold"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-medium"
              size="text-[14px] leading-[20px]"
              meta="Inter 500  •  Aa 14px  •  20px  •  0em"
            />

            <TypeRow
              title="Body"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-normal"
              size="text-[14px] leading-[20px]"
              meta="Inter 400  •  Aa 14px  •  20px  •  0em"
            />

            <TypeRow
              title="Monospace Body"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-mono font-normal"
              size="text-[14px] leading-[20px]"
              meta="Monospace 400  •  Aa 14px  •  20px  •  0em"
            />

            <TypeRow
              title="Caption Bold"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-medium"
              size="text-[12px] leading-[16px]"
              meta="Inter 500  •  Aa 12px  •  16px  •  0em"
            />

            <TypeRow
              title="Caption"
              sample="A quick brown fox jumps over the lazy dog"
              font="font-sans font-normal"
              size="text-[12px] leading-[16px]"
              meta="Inter 400  •  Aa 12px  •  16px  •  0em"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

type TypeRowProps = {
  title: string;
  sample: string;
  font: string;
  size: string;
  meta: string;
};

function TypeRow({ title, sample, font, size, meta }: TypeRowProps) {
  return (
    <div className="px-8 py-6">
      <div className="flex flex-col gap-2">
        {/* Sample Text */}
        <p className={`${font} ${size} text-gray-900`}>
          <span className="font-semibold">{title}</span>{" "}
          <span className="text-gray-400">— {sample}</span>
        </p>

        {/* Meta Info */}
        <p className="text-xs text-gray-500">{meta}</p>
      </div>
    </div>
  );
}
