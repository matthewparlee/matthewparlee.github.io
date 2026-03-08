import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Linkedin, FileDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Placeholder — would integrate with backend
    toast({ title: "Message sent!", description: `Thanks ${data.name}, I'll get back to you soon.` });
    form.reset();
  };

  return (
    <main className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Interested in working together? I'd love to hear about your project.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-16 md:grid-cols-[1fr_280px]">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="Project inquiry" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea placeholder="Tell me about your project…" rows={6} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="gap-2 rounded-full px-8">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-6">
            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">Connect</h2>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/matthew-parlee-a7bb27120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn Profile
                </a>
                <a
                  href="mailto:mcparlee@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Send className="h-4 w-4" /> mcparlee@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">Resume</h2>
              <Button variant="outline" className="mt-4 w-full gap-2" asChild>
                <a href="/Matthew_Parlee_Resume.docx" download>
                  <FileDown className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
