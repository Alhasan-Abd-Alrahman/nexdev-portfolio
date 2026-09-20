import { Link } from "react-router-dom";

const team = [
  {
    name: "Mohamad Al-Homsi",
    role: "Flutter Developer",
    description:
      "Specialized in building scalable Flutter applications, mobile architecture, API integration, and publishing production apps on Android and iOS.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    name: "Montajeh Shihah",
    role: "Backend Engineer",
    description:
      "Specialized in Laravel backend systems, API development, financial platforms, payment integrations, and business workflows.",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
  {
    name: "Alhasan Abd Alrahman",
    role: "Frontend Developer",
    description:
      "Specialized in building modern web applications, responsive interfaces, dashboards, and API-driven platforms using React and Vue.",
    skills: ["React", "Vue", "JavaScript", "Tailwind CSS"],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-[#030A16] text-white">

      {/* Hero */}
      <section className="px-10 pb-20 pt-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#168BFF]" />

            <span className="text-sm uppercase tracking-[0.25em] text-[#718096]">
              Our Team
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
            Three engineers.
            <span className="block text-[#168BFF]">
              One team.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
            A multidisciplinary team covering mobile, frontend, and backend
            development to build complete digital products.
          </p>

        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F8FAFC] px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-5 md:grid-cols-3">

            {team.map((member, index) => (
              <article
                key={member.name}
                className="group rounded-xl border border-[#E2E8F0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
              >

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#168BFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl text-[#CBD5E1] group-hover:text-[#168BFF]">
                    ↗
                  </span>
                </div>

                {/* Avatar */}
                <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#071426] text-xl font-semibold text-[#168BFF]">
                  {member.name
                    .split(" ")
                    .map((name) => name[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                {/* Info */}
                <h2 className="mt-7 text-2xl font-semibold">
                  {member.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-[#168BFF]">
                  {member.role}
                </p>

                <p className="mt-5 leading-7 text-[#64748B]">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#475569]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071426] px-10 py-24 text-center md:px-16 lg:px-20">
        <span className="text-sm uppercase tracking-[0.25em] text-[#168BFF]">
          Let's work together
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold md:text-5xl">
          Have an idea?
          <span className="text-[#168BFF]"> Let's build it.</span>
        </h2>

        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006DFF]"
        >
          Start a Project
        </Link>
      </section>

    </div>
  );
}