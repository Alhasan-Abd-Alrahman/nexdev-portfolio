import { Link } from "react-router-dom";

const expertise = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Modern web applications with responsive interfaces, scalable architecture, API integration, and performance-focused development.",
    technologies: ["React", "Vue", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications for Android and iOS, built with a focus on usability, performance, and reliable integrations.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Reliable backend systems and APIs covering business logic, authentication, databases, integrations, and scalable workflows.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
];

const approachSteps = [
  {
    id: 1,
    title: "Understand",
    description:
      "We begin by understanding your business, users, requirements, and the problem your product needs to solve.",
  },
  {
    id: 2,
    title: "Plan",
    description:
      "We define the technical direction, architecture, integrations, and development requirements before writing the first line of code.",
  },
  {
    id: 3,
    title: "Build",
    description:
      "We turn the plan into a working product through focused development across web, mobile, and backend systems.",
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "We test, refine, deploy, and continue improving the product based on real-world requirements and feedback.",
  },
];

export default function About() {
  return (
    <div className="bg-[#030A16] text-white">
      {/* ==================== HERO ==================== */}
      <section className="px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <SectionLabel label="About Us" />

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              We build ideas into
              <span className="block text-[#168BFF]">
                digital products.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
              NEXTDEV is a software development team focused on building
              modern, practical, and reliable digital solutions for
              businesses and ideas.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="bg-white px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <SectionLabel label="Who We Are" />

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Building software
              <span className="block text-[#168BFF]">
                with purpose.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-lg leading-8 text-[#64748B]">
              NEXTDEV brings together different areas of software
              development to create complete digital products rather than
              focusing on a single part of the development process.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              We work across web applications, mobile apps, backend systems,
              APIs, and integrations, allowing us to approach each project
              from both a technical and product perspective.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              Our focus is simple: understand the problem, choose the right
              technology, and build a solution that is practical, maintainable,
              and ready to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== OUR EXPERTISE ==================== */}
      <section className="bg-[#F8FAFC] px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="max-w-2xl">
            <SectionLabel label="Our Expertise" />

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The technology behind
              <span className="block text-[#168BFF]">
                our solutions.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              Our technical capabilities cover the core layers required to
              design, develop, and maintain modern digital products.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-[#E2E8F0] bg-white p-8 transition hover:border-[#168BFF]/40"
              >
                <span className="text-sm font-semibold text-[#168BFF]">
                  {String(item.id).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#64748B]">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#475569]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR APPROACH ==================== */}
      <section className="bg-[#030A16] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <SectionLabel label="Our Approach" />

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                From the first idea
                <span className="block text-[#168BFF]">
                  to the final product.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#718096]">
                A clear development process helps us keep projects focused,
                predictable, and aligned with their goals.
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-10 sm:grid-cols-2">
              {approachSteps.map((step) => (
                <div key={step.id}>
                  <span className="text-sm font-semibold text-[#168BFF]">
                    {String(step.id).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#718096]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-[#071426] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#168BFF]">
            Let's Work Together
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Have an idea in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#718096]">
            Tell us about your project and let's explore how we can turn it
            into a practical digital product.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006DFF]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-[2px] w-10 bg-[#168BFF]" />

      <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
        {label}
      </span>
    </div>
  );
}