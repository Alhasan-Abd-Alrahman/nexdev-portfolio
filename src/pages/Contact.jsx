// import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="min-h-screen bg-[#030A16] text-white">

      {/* ==================== HERO ==================== */}

      <section className="px-10 pb-20 pt-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#168BFF]" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#718096]">
              Contact Us
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Let's talk about
            <span className="block text-[#168BFF]">
              your project.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8C2D1]">
            Have an idea, a project, or an existing product that needs
            development? Tell us what you're working on and let's see
            how we can help.
          </p>

        </div>
      </section>


      {/* ==================== CONTACT INFO ==================== */}

      <section className="bg-[#F8FAFC] px-10 py-24 text-[#030A16] md:px-16 lg:px-20">
  <div className="mx-auto max-w-6xl">

    <div className="grid gap-5 md:grid-cols-3">

      {/* Phone */}

      <a
        href=""
        className="group rounded-xl border border-[#E2E8F0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
      >
        <span className="text-sm font-semibold text-[#168BFF]">
          01
        </span>

        <div className="mt-7 flex items-center gap-3">
          <FaPhone
            size={24}
            className="text-[#168BFF] transition-transform duration-300 group-hover:scale-110"
          />

          <h2 className="text-2xl font-semibold">
            Phone
          </h2>
        </div>

        <p className="mt-3 text-[#64748B]">
          Call or message our team
        </p>

        <p className="mt-6 font-semibold text-[#030A16] group-hover:text-[#168BFF]">
          +984645187
        </p>
      </a>


      {/* Email */}

      <a
        href="mailto:nexdev.company@proton.me"
        className="group rounded-xl border border-[#E2E8F0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
      >
        <span className="text-sm font-semibold text-[#168BFF]">
          02
        </span>

        <div className="mt-7 flex items-center gap-3">
          <FaEnvelope
            size={26}
            className="text-[#168BFF] transition-transform duration-300 group-hover:scale-110"
          />

          <h2 className="text-2xl font-semibold">
            Email
          </h2>
        </div>

        <p className="mt-3 text-[#64748B]">
          Send us your project details
        </p>

        <p className="mt-6 font-semibold text-[#030A16]">
          nexdev.company@proton.me
        </p>
      </a>


      {/* Social */}

      <a
        href="https://www.facebook.com/profile.php?id=61594231761705"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl border border-[#E2E8F0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-lg"
      >
        <span className="text-sm font-semibold text-[#168BFF]">
          03
        </span>

        <div className="mt-7 flex items-center gap-3">
          <FaFacebook
            size={28}
            className="text-[#1877F2] transition-transform duration-300 group-hover:scale-110"
          />

          <h2 className="text-2xl font-semibold">
            Social
          </h2>
        </div>

        <p className="mt-3 text-[#64748B]">
          Follow our team and projects
        </p>

        <p className="mt-6 font-semibold text-[#030A16]">
          Facebook · LinkedIn
        </p>
      </a>

    </div>

  </div>
</section>


      {/* ==================== PROJECT CTA ==================== */}

      <section className="bg-[#071426] px-10 py-24 md:px-16 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#168BFF]">
            Start a Conversation
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us what you're
            <span className="text-[#168BFF]">
              {" "}building.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#718096]">
            Whether you're starting from an idea or improving an existing
            product, we're ready to discuss your requirements.
          </p>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+984645187"
              className="rounded-md bg-[#168BFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006DFF]"
            >
              Call Our Team
            </a>

            <Link
              to="/projects"
              className="rounded-md border border-[#24344D] px-7 py-3.5 text-sm font-semibold text-[#B8C2D1] transition hover:border-[#168BFF] hover:text-[#168BFF]"
            >
              View Projects
            </Link>

          </div> */}

        </div>
      </section>

    </div>
  );
}