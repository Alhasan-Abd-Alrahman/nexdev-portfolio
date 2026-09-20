import { useState } from "react";
import { Link } from "react-router-dom";

const filters = ["All", "Web", "Mobile", "Backend"];

const projects = [
  {
    id: 1,
    title: "Wesal",
    category: "Financial Platform",
    type: "Mobile · Web · Backend",
    description:
      "A financial platform for money transfers, mobile units, bill payments, and multiple payment methods.",
    technologies: [
      "Flutter",
      "Laravel",
      "Vue",
      "PHP",
      "MySQL",
      "Firebase",
    ],
    categories: ["Mobile", "Web", "Backend"],
    featured: true,
    slug: "wesal",
  },

  {
    id: 2,
    title: "ClipGenius",
    category: "Video Services",
    type: "Mobile Application",
    description:
      "A platform for video services where users can upload videos, select dynamic services, track the service status, and download completed videos.",
    technologies: [
      "Flutter",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "clip-genius",
  },

  {
    id: 3,
    title: "Chance",
    category: "Marketplace",
    type: "Mobile Application",
    description:
      "A multi-purpose platform for advertisements, products, subscriptions, gifts, and store ordering with dynamic content and advanced filtering.",
    technologies: [
      "Flutter",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "chance",
  },

  {
    id: 4,
    title: "Gad Al-Tahadi",
    category: "Entertainment",
    type: "Mobile Application",
    description:
      "An interactive entertainment application where two teams compete on the same device using questions with videos, audio, and images.",
    technologies: [
      "Flutter",
      "Dart",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "gad-al-tahadi",
  },

  {
    id: 5,
    title: "Qatar Calendar House",
    category: "Calendar & Utility",
    type: "Mobile Application",
    description:
      "A calendar application providing prayer times, Hijri and Gregorian dates, Qibla direction, weather, astronomy, and other useful information.",
    technologies: [
      "Flutter",
      "Firebase",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "qatar-calendar",
  },

  {
    id: 6,
    title: "Next App",
    category: "Education",
    type: "Mobile Application",
    description:
      "An e-learning and social platform connecting teachers and students through lessons, exams, questions, notes, follows, and reviews.",
    technologies: [
      "Flutter",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "next-app",
  },

  {
    id: 7,
    title: "Aqar",
    category: "Real Estate",
    type: "Mobile Application",
    description:
      "A real estate application for buying and renting apartments, lands, and villas with advanced property filtering.",
    technologies: [
      "Flutter",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "aqar",
  },

  {
    id: 8,
    title: "Gazali Perfumes",
    category: "E-Commerce",
    type: "Mobile Application",
    description:
      "An e-commerce application with product browsing, cart management, favorites, discounts, offers, and delivery.",
    technologies: [
      "Flutter",
    ],
    categories: ["Mobile"],
    featured: false,
    slug: "gazali-perfumes",
  },

  {
    id: 9,
    title: "MTN Business Platform",
    category: "Business Platform",
    type: "Web Application",
    description:
      "A business web application featuring service and product listings, role-based administration, dynamic filtering, and API-driven data.",
    technologies: [
      "Vue",
      "JavaScript",
      "REST APIs",
      "Pinia",
    ],
    categories: ["Web"],
    featured: false,
    slug: "mtn-business",
  },

  {
    id: 10,
    title: "Beauty Salon",
    category: "Booking Platform",
    type: "Web Application",
    description:
      "A responsive web application for discovering beauty services, searching service catalogs, booking appointments, and managing dynamic forms.",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
    ],
    categories: ["Web"],
    featured: false,
    slug: "beauty-salon",
  },

  {
    id: 11,
    title: "Payment & API Integrations",
    category: "FinTech",
    type: "Backend System",
    description:
      "Backend integrations for payment gateways and external APIs, including payment verification, callbacks, refunds, webhooks, and transaction handling.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "Webhooks",
    ],
    categories: ["Backend"],
    featured: false,
    slug: "payment-api-integrations",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") {
      return !project.featured;
    }

    return (
      !project.featured &&
      project.categories.includes(activeFilter)
    );
  });

  return (
    <div className="min-h-screen bg-[#030A16] text-white">

      {/* ==================== HERO ==================== */}

      <section className="px-10 pb-20 pt-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#168BFF]" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                Our Projects
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Things we've
              <span className="block text-[#168BFF]">
                built together.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
              A selection of digital products and applications
              we've worked on across web, mobile, backend systems,
              and business platforms.
            </p>

          </div>

        </div>
      </section>


      {/* ==================== FILTERS ==================== */}

      <section className="px-10 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-wrap gap-3 border-b border-[#18283D] pb-6">

            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#168BFF] text-white"
                      : "border border-[#24344D] text-[#B8C2D1] hover:border-[#168BFF] hover:text-[#168BFF]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}

          </div>

        </div>
      </section>


      {/* ==================== FEATURED PROJECT ==================== */}

      <section className="px-10 py-20 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#168BFF]">
                Featured Project
              </span>
            </div>

            <span className="text-sm text-[#718096]">
              01
            </span>

          </div>


          <div className="overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#071426]">

            <div className="grid lg:grid-cols-[1.2fr_1fr]">

              {/* ==================== FEATURED VISUAL ==================== */}

              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#091A30] p-10">

                <div className="absolute left-10 top-10 h-32 w-32 rounded-full border border-[#168BFF]/20" />

                <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-[#168BFF]/10" />

                <div className="relative text-center">

                  <span className="text-sm uppercase tracking-[0.3em] text-[#718096]">
                    Financial Platform
                  </span>

                  <h2 className="mt-4 text-6xl font-semibold tracking-tight">
                    WESAL
                  </h2>

                  <div className="mx-auto mt-6 h-[2px] w-16 bg-[#168BFF]" />

                  <p className="mt-6 text-sm text-[#718096]">
                    Mobile · Web · Backend
                  </p>

                </div>

              </div>


              {/* ==================== FEATURED CONTENT ==================== */}

              <div className="flex flex-col justify-center p-10 lg:p-14">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <span className="rounded-full bg-[#168BFF]/10 px-4 py-1.5 text-xs font-medium text-[#168BFF]">
                    Financial Technology
                  </span>

                  <span className="text-sm text-[#718096]">
                    Mobile + Web
                  </span>

                </div>


                <h3 className="mt-8 text-3xl font-semibold">
                  Wesal
                </h3>


                <p className="mt-5 leading-7 text-[#B8C2D1]">
                  A financial platform designed for money
                  transfers, mobile units, bill payments, and
                  multiple payment methods.
                </p>


                <p className="mt-4 leading-7 text-[#718096]">
                  The project includes mobile applications,
                  backend services, APIs, financial workflows,
                  payment integrations, and an administration
                  dashboard.
                </p>


                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#24344D] px-3 py-1.5 text-xs text-[#B8C2D1]"
                    >
                      {technology}
                    </span>
                  ))}

                </div>


                {/* Link */}

                <div className="mt-10">

                  <Link
                    to="/projects/wesal"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#168BFF] transition hover:gap-3"
                  >
                    View Project
                    <span>→</span>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================== PROJECTS GRID ==================== */}

      <section className="bg-[#F8FAFC] px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#168BFF]" />

                <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
                  More Projects
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                More products we've
                <span className="block text-[#168BFF]">
                  worked on.
                </span>
              </h2>

            </div>


            {/* Active Filter */}

            <div className="text-sm text-[#718096]">
              Showing:
              <span className="ml-2 font-semibold text-[#030A16]">
                {activeFilter}
              </span>
            </div>

          </div>


          {/* ==================== EMPTY STATE ==================== */}

          {filteredProjects.length === 0 && (
            <div className="mt-14 rounded-xl border border-dashed border-[#CBD5E1] bg-white p-16 text-center">

              <h3 className="text-xl font-semibold">
                No projects found
              </h3>

              <p className="mt-3 text-[#64748B]">
                There are currently no projects in this category.
              </p>

            </div>
          )}


          {/* ==================== PROJECT CARDS ==================== */}

          {filteredProjects.length > 0 && (
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex min-h-[390px] flex-col rounded-xl border border-[#E2E8F0] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
                >

                  {/* Number */}

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-semibold text-[#168BFF]">
                      {String(project.id).padStart(2, "0")}
                    </span>

                    <span className="text-xl text-[#CBD5E1] transition group-hover:text-[#168BFF]">
                      ↗
                    </span>

                  </div>


                  {/* Category */}

                  <span className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#718096]">
                    {project.category}
                  </span>


                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>


                  {/* Type */}

                  <p className="mt-2 text-sm font-medium text-[#168BFF]">
                    {project.type}
                  </p>


                  {/* Description */}

                  <p className="mt-5 flex-1 leading-7 text-[#64748B]">
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#475569]"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>


                  {/* Link */}

                  <div className="mt-7 border-t border-[#E2E8F0] pt-5">

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#030A16] transition group-hover:text-[#168BFF]"
                    >
                      View Details

                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>


      {/* ==================== CTA ==================== */}

      <section className="bg-[#071426] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">

          <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#168BFF]">
            Have a project in mind?
          </span>


          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build something
            <span className="text-[#168BFF]">
              {" "}together.
            </span>
          </h2>


          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#718096]">
            Tell us about your idea, and let's explore how we
            can turn it into a working digital product.
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






