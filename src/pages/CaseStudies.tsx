import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { fadeUpStaggered as fadeUp } from "@/lib/animations";

const CaseStudies = () => (
  <main className="py-20 sm:py-28">
    <div className="mx-auto max-w-[1100px] px-6">
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">Case Studies</h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">
        Deep dives into projects where instructional design solved real performance challenges.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={i}
            variants={fadeUp}
          >
            <Link
              to={`/case-studies/${cs.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={cs.coverImage}
                  alt={cs.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-sans text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {cs.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{cs.teaser}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <p className="mt-16 text-center text-xs leading-relaxed text-muted-foreground/70 italic">
        To respect the privacy and proprietary information of my clients, certain details, textual information, visual elements, and specific branding has been modified or replaced with generic equivalents.
      </p>
    </div>
  </main>
);

export default CaseStudies;
