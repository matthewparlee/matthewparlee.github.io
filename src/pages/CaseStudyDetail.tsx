import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Quote } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Lightbox from "@/components/Lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const index = caseStudies.findIndex((cs) => cs.id === id);
  const cs = caseStudies[index];

  const allImages = useMemo(() => {
    if (!cs) return [];
    const imgs: { src: string; alt: string; caption: string }[] = [];
    if (cs.solutionImage) imgs.push(cs.solutionImage);
    cs.process.filter((s) => s.image).forEach((s) => imgs.push(s.image!));
    return imgs;
  }, [cs]);

  const processImages = allImages;

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

  const openLightboxForStep = (step: typeof cs.process[number]) => {
    const imgIndex = processImages.findIndex((img) => img.src === step.image?.src);
    if (imgIndex >= 0) {
      setLightboxIndex(imgIndex);
      setLightboxOpen(true);
    }
  };

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
          {cs.problem.split('\n\n').map((para, i) => (
            <p key={i} className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{para}</p>
          ))}
        </motion.section>

        {/* Solution */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="solution">
          <h2 id="solution" className="font-serif text-2xl text-foreground sm:text-3xl">The Solution</h2>
          {cs.solution.split('\n\n').map((para, i) => (
            <p key={i} className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{para}</p>
          ))}
          {cs.solutionPoints && cs.solutionPoints.length > 0 && (
            <ul className="mt-4 max-w-3xl space-y-2" role="list">
              {cs.solutionPoints.map((point) => {
                const verbMatch = point.match(/^(.+?)\s+(created|allowed|provided|designed|developed|built|implemented)\b/i);
                const colonMatch = !verbMatch ? point.match(/^(.+?):(.+)$/) : null;
                return (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="leading-relaxed text-muted-foreground">
                      {verbMatch ? (
                        <>
                          <strong className="font-semibold text-foreground">{verbMatch[1]}</strong>{" "}
                          {point.slice(verbMatch[1].length + 1)}
                        </>
                      ) : colonMatch ? (
                        <>
                          <strong className="font-semibold text-foreground">{colonMatch[1]}:</strong>
                          {colonMatch[2]}
                        </>
                      ) : point}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          {cs.solutionImage && (
            <button
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
              className="group mt-6 overflow-hidden rounded-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`View ${cs.solutionImage.alt} in full resolution`}
            >
              <div className="max-w-md overflow-hidden">
                <img
                  src={cs.solutionImage.src}
                  alt={cs.solutionImage.alt}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="p-3 text-left text-xs text-muted-foreground">{cs.solutionImage.caption}</p>
            </button>
          )}
        </motion.section>

        {/* Process */}
        <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="process">
          <h2 id="process" className="font-serif text-2xl text-foreground sm:text-3xl">The Process</h2>
          {cs.processIntro && (
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{cs.processIntro}</p>
          )}
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
                <div className="flex-1 pt-1">
                  <h3 className="font-sans text-lg font-bold text-foreground">{step.phase}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
                  {step.image && (
                    <button
                      onClick={() => openLightboxForStep(step)}
                      className="group mt-4 overflow-hidden rounded-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`View ${step.image.alt} in full resolution`}
                    >
                      <div className="max-w-md overflow-hidden">
                        <img
                          src={step.image.src}
                          alt={step.image.alt}
                          className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="p-3 text-left text-xs text-muted-foreground">{step.image.caption}</p>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <Lightbox
          images={processImages}
          currentIndex={lightboxIndex}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          onNavigate={setLightboxIndex}
        />

        {/* Results (only if metrics exist) */}
        {cs.results.metrics.length > 0 && (
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
        )}

        {/* AI Evolution */}
        {cs.aiEvolution && (
          <motion.section className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} aria-labelledby="ai-evolution">
            <h2 id="ai-evolution" className="font-serif text-2xl text-foreground sm:text-3xl">AI Roadmap</h2>
            {cs.aiEvolution.intro.split('\n\n').map((para, i) => (
              <p key={i} className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{para}</p>
            ))}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cs.aiEvolution.cards.map((card) => (
                <Card key={card.title} className="border-border/60">
                  <CardHeader>
                    <CardTitle className="font-sans text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3" role="list">
                      {card.points.map((point) => (
                        <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

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

        <p className="mt-12 text-center text-xs leading-relaxed text-muted-foreground/70 italic">
          To respect the privacy and proprietary information of my clients, certain details, textual information, visual elements, and specific branding has been modified or replaced with generic equivalents.
        </p>
      </article>
    </main>
  );
};

export default CaseStudyDetail;
