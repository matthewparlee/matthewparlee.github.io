import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Quote } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/Lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const index = caseStudies.findIndex((cs) => cs.id === id);
  const cs = caseStudies[index];

  if (!cs) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Case study not found</h1>
          <Button asChild variant="link" className="mt-4">
            <Link to="/case-studies">← Back to Case Studies</Link>
          </Button>
        </div>
      </main>
    );
  }

  const prev = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  return (
    <main className="py-16 sm:py-24">
      <article className="mx-auto max-w-[1100px] px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{cs.title}</span>
        </nav>

        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">{cs.title}</h1>
          <div className="mt-8 aspect-[21/9] overflow-hidden rounded-xl">
            <img src={cs.coverImage} alt={cs.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="overview">
          <h2 id="overview" className="font-serif text-2xl text-foreground sm:text-3xl">Project Overview</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{cs.overview}</p>
        </motion.section>

        {/* Problem */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="problem">
          <h2 id="problem" className="font-serif text-2xl text-foreground sm:text-3xl">The Problem</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{cs.problem}</p>
        </motion.section>

        {/* Solution */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="solution">
          <h2 id="solution" className="font-serif text-2xl text-foreground sm:text-3xl">The Solution</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{cs.solution}</p>
        </motion.section>

        {/* Process */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="process">
          <h2 id="process" className="font-serif text-2xl text-foreground sm:text-3xl">The Process</h2>
          <div className="mt-8 space-y-0">
            {cs.process.map((step, i) => (
              <div key={step.phase} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Timeline line */}
                {i < cs.process.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-full w-px bg-border" aria-hidden="true" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-sans text-lg font-bold text-foreground">{step.phase}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Visual Evidence */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="evidence">
          <h2 id="evidence" className="font-serif text-2xl text-foreground sm:text-3xl">Visual Evidence</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cs.images.map((img, i) => (
              <button
                key={i}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                className="group overflow-hidden rounded-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`View ${img.alt} in full resolution`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="p-3 text-left text-xs text-muted-foreground">{img.caption}</p>
              </button>
            ))}
          </div>
        </motion.section>

        <Lightbox
          images={cs.images}
          currentIndex={lightboxIndex}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          onNavigate={setLightboxIndex}
        />

        {/* Results */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="results">
          <h2 id="results" className="font-serif text-2xl text-foreground sm:text-3xl">The Results</h2>
          <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-8">
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {cs.results.metrics.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="font-sans text-sm font-medium text-foreground">{m}</span>
                </li>
              ))}
            </ul>
            {cs.results.quote && (
              <blockquote className="mt-8 border-t border-primary/10 pt-6">
                <Quote className="mb-2 h-5 w-5 text-primary/40" aria-hidden="true" />
                <p className="font-serif text-lg italic text-foreground">"{cs.results.quote}"</p>
                {cs.results.quoteAuthor && (
                  <cite className="mt-2 block text-sm font-medium not-italic text-muted-foreground">— {cs.results.quoteAuthor}</cite>
                )}
              </blockquote>
            )}
          </div>
        </motion.section>

        {/* Prev / Next */}
        <nav className="mt-20 flex items-center justify-between border-t pt-8" aria-label="Case study navigation">
          {prev ? (
            <Link to={`/case-studies/${prev.id}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/case-studies/${next.id}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
};

export default CaseStudyDetail;
