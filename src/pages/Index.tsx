import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, TrendingUp, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import profpic from "@/assets/profpic.png";
import { fadeUpStaggered as fadeUp } from "@/lib/animations";

const principles = [
  { icon: Compass, title: "Context Changes Everything", description: "My approach anchors every solution in the specific context of the organization, as well as the daily decisions individuals must make to build toward measurable change." },
  { icon: TrendingUp, title: "Problem Solving Grounded in Business Priorities", description: "Strategic problem-solving ensures every learning experience is a response to an actual business challenge. " },
  { icon: FlaskConical, title: "Solutions Supported by Science", description: "Evidence-based design is the foundation, whether the objective is the automation of technical tasks, elaborating to enhance mental models, or facilitating the recall necessary to perform across real-world contexts." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-36" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.h1
            id="hero-heading"
            className="max-w-2xl font-serif text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            Translating Performance into Organizational Capability
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            I craft customized learning experiences that solve real business problems.
          </motion.p>
          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="mt-10">
            <Button asChild size="lg" className="gap-2 rounded-full px-8">
              <Link to="/case-studies">
                View Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        {/* Decorative element */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      </section>

      {/* About */}
      <section className="border-t py-20 sm:py-28" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="h-72 w-72 overflow-hidden rounded-2xl bg-secondary sm:h-80 sm:w-80" aria-label="Professional headshot placeholder">
              <img
                src={profpic}
                alt="Matthew Parlee — Senior Learning Experience Consultant"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2 id="about-heading" className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hi, I'm Matthew! I'm a Senior Learning Experience Designer focused on crafting customized learning experiences and designing meaningful solutions.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To be honest, I've always found it a bit tricky to talk about my career in the first person. In L&D, successful projects are always a team effort: a "we" rather than an "I." The best work is always a collaboration with leadership, learning designers, and the people on the ground doing the work. This approach makes sure <em className="font-medium">our</em> solutions are proactive and fit into the flow of work and the lived reality of the business.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="border-t bg-secondary/30 py-20 sm:py-28" aria-labelledby="philosophy-heading">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 id="philosophy-heading" className="text-center font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Design Philosophy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Three principles guide every project I take on, ensuring that learning solutions always have a solid foundation.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {principles.map((p, i) => (
              <motion.article
                key={p.title}
                className="rounded-xl border bg-card p-8 transition-shadow hover:shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
