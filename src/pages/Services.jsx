import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Mobile App Development",
    description:
      "We build modern Android and iOS applications from idea to production, with a focus on performance, usability, and maintainable code.",
    items: [
      "Cross-platform mobile applications",
      "Android & iOS development",
      "API integration",
      "Authentication & user management",
      "Push notifications",
      "Payment integrations",
      "App Store & Google Play deployment",
      "Existing app maintenance",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },

  {
    id: "02",
    title: "Web Application Development",
    description:
      "We develop responsive web applications for businesses, platforms, dashboards, and internal systems.",
    items: [
      "Business web applications",
      "Admin dashboards",
      "Management systems",
      "Responsive interfaces",
      "Dynamic forms",
      "Advanced filtering",
      "Role-based interfaces",
      "Performance optimization",
    ],
    technologies: ["React", "Vue", "JavaScript", "Tailwind CSS"],
  },

  {
    id: "03",
    title: "Backend & API Development",
    description:
      "We build reliable backend systems and APIs that power mobile applications, web platforms, and business workflows.",
    items: [
      "REST API development",
      "Database architecture",
      "Authentication & authorization",
      "Business logic",
      "Admin APIs",
      "Third-party integrations",
      "Webhooks",
      "Notification systems",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Firebase"],
  },

  {
    id: "04",
    title: "Payment & Financial Systems",
    description:
      "We develop and integrate financial workflows for payment platforms, transaction systems, and business-critical applications.",
    items: [
      "Payment gateway integration",
      "Payment verification",
      "Transaction processing",
      "Refund workflows",
      "Fees & commissions",
      "Exchange rates",
      "Financial operations",
      "Transaction tracking",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Payment APIs",
      "REST APIs",
      "Firebase",
    ],
  },

  {
    id: "05",
    title: "Business & Management Systems",
    description:
      "We create practical business systems that help organizations manage users, operations, workflows, and data.",
    items: [
      "Admin dashboards",
      "Business management platforms",
      "Role-based access",
      "User & permission management",
      "Reports & data management",
      "Workflow automation",
      "Content management",
      "API-driven systems",
    ],
    technologies: [
      "React",
      "Vue",
      "Laravel",
      "MySQL",
      "REST APIs",
    ],
  },

  {
    id: "06",
    title: "Existing Product Development",
    description:
      "Already have an application? We can help improve, maintain, modernize, and extend your existing product.",
    items: [
      "Bug fixing",
      "Code refactoring",
      "Feature development",
      "UI redesign",
      "Performance improvements",
      "Legacy code migration",
      "API integration",
      "Application maintenance",
    ],
    technologies: [
      "Flutter",
      "React",
      "Vue",
      "Laravel",
      "REST APIs",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your idea, business requirements, users, and technical needs.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the product structure, technical approach, APIs, and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our mobile, frontend, and backend engineers work together to turn the plan into a working product.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "We test the product, fix issues, improve performance, and refine the user experience.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "We prepare the application for production and deploy it to the required platforms.",
  },
  {
    number: "06",
    title: "Maintain",
    description:
      "We continue improving the product with new features, updates, and technical improvements.",
  },
];

const reasons = [
  {
    number: "01",
    title: "One Team. Multiple Disciplines.",
    description:
      "Mobile, web, and backend development working together under one team.",
  },
  {
    number: "02",
    title: "Real-World Experience",
    description:
      "Our team has experience working on financial platforms, business applications, e-commerce, educational products, and mobile applications.",
  },
  {
    number: "03",
    title: "End-to-End Development",
    description:
      "From frontend and mobile interfaces to APIs, databases, integrations, and deployment.",
  },
  {
    number: "04",
    title: "Built Around Your Requirements",
    description:
      "We focus on understanding the actual business problem before deciding how to build the solution.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#030A16] text-white">

      {/* ==================== HERO ==================== */}

      <section className="px-10 pb-20 pt-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#168BFF]" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                Our Services
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              What we can
              <span className="block text-[#168BFF]">
                build for you.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
              We design and build digital products across mobile, web,
              backend systems, and financial platforms — combining
              product understanding with practical engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006DFF]"
              >
                Start a Project
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center rounded-md border border-[#24344D] px-7 py-3.5 text-sm font-semibold text-[#B8C2D1] transition hover:border-[#168BFF] hover:text-[#168BFF]"
              >
                View Our Projects
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ==================== SERVICES ==================== */}

      <section className="bg-[#F8FAFC] px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#168BFF]" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Practical solutions for
              <span className="block text-[#168BFF]">
                real-world products.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              From mobile applications and web platforms to backend
              systems and financial integrations, we cover the core
              technical areas needed to build and operate a digital product.
            </p>

          </div>


          {/* Services Grid */}

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
              >

                {/* Header */}

                <div className="flex items-start justify-between gap-5">

                  <span className="text-sm font-semibold text-[#168BFF]">
                    {service.id}
                  </span>

                  <span className="text-2xl text-[#CBD5E1] transition group-hover:text-[#168BFF]">
                    ↗
                  </span>

                </div>


                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>


                {/* Description */}

                <p className="mt-4 leading-7 text-[#64748B]">
                  {service.description}
                </p>


                {/* Features */}

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#475569]"
                    >
                      <span className="mt-1 text-[#168BFF]">
                        +
                      </span>

                      <span>
                        {item}
                      </span>
                    </div>
                  ))}

                </div>


                {/* Technologies */}

                <div className="mt-8 border-t border-[#E2E8F0] pt-6">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#475569]"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ==================== PROCESS ==================== */}

      <section className="bg-[#071426] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#168BFF]" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                Our Process
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              From idea to
              <span className="text-[#168BFF]">
                {" "}working product.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#718096]">
              A straightforward development process that keeps the
              product, technical requirements, and business goals aligned.
            </p>

          </div>


          {/* Process */}

          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="border-t border-[#1A2A40] pt-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-[#168BFF]">
                    {step.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#168BFF]" />

                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#718096]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ==================== WHY US ==================== */}

      <section className="bg-white px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#168BFF]" />

                <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                  Why Work With Us
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                One team.
                <span className="block text-[#168BFF]">
                  Complete development.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-[#64748B]">
                We bring mobile, frontend, and backend development
                together so the different parts of a product can work
                as one system.
              </p>

            </div>


            {/* Reasons */}

            <div className="grid gap-10 sm:grid-cols-2">

              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="border-t border-[#E2E8F0] pt-6"
                >

                  <span className="text-sm font-semibold text-[#168BFF]">
                    {reason.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#64748B]">
                    {reason.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ==================== CTA ==================== */}

      <section className="bg-[#030A16] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-2xl border border-[#1A2A40] bg-[#071426] px-8 py-16 text-center md:px-16">

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#168BFF]">
              Have a project in mind?
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Let's turn your idea into
              <span className="text-[#168BFF]">
                {" "}a real product.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#718096]">
              Tell us what you're trying to build, and let's explore
              the right technical solution for your project.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006DFF]"
            >
              Start a Project
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}