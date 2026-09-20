export default function Home() {
  return (
    <section className="min-h-screen bg-[#030A16] px-10 py-16 text-white md:px-16 lg:px-20">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <div className="max-w-4xl">

          {/* Small Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#168BFF]" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
              Software Development Team
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Build your digital
            <span className="block text-[#168BFF]">
              future with us.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
            We are a team of software engineers specializing in web,
            mobile, and backend development. From idea to production,
            we build reliable and modern digital products.
          </p>

          {/* Services */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#718096]">
            <span>Web Development</span>

            <span className="h-1 w-1 rounded-full bg-[#168BFF]" />

            <span>Mobile Applications</span>

            <span className="h-1 w-1 rounded-full bg-[#168BFF]" />

            <span>Backend & APIs</span>

            <span className="h-1 w-1 rounded-full bg-[#168BFF]" />

            <span>Admin Dashboards</span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* <a
              href="/projects"
              className="rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#006DFF]"
            >
              View Our Projects
            </a> */}

            <a
              href="/contact"
              className="rounded-md border border-[#24344D] px-7 py-3.5 text-sm font-medium text-white transition hover:border-[#168BFF] hover:text-[#168BFF]"
            >
              Start a Project
            </a>
          </div>

        </div>
      </div>
    </section>

    
  );
}