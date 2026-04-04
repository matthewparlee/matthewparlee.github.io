import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const Contact = () => {
  return (
    <main className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Interested in working together? I'd love to hear about your project.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-14 max-w-sm">
          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">Connect</h2>
            <a
              href="https://www.linkedin.com/in/matthew-parlee-a7bb27120"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
