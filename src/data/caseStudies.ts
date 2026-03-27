import disinfectionCourseDesign from "@/assets/disinfection-course-design.png";
import cleanEdit from "@/assets/clean-edit.png";
import scenarioBank from "@/assets/scenario-bank.png";

export interface CaseStudy {
  id: string;
  title: string;
  teaser: string;
  tags: string[];
  coverImage: string;
  overview: string;
  problem: string;
  solution: string;
  solutionPoints?: string[];
  solutionImage?: { src: string; alt: string; caption: string };
  process: { phase: string; description: string; image?: { src: string; alt: string; caption: string } }[];
  results: { metrics: string[]; quote?: string; quoteAuthor?: string };
  aiEvolution?: { intro: string; cards: { title: string; points: string[] }[] };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "accredited-disinfection-certificate",
    title: "Guiding Frontline Teams with Accredited Disinfection Program",
    teaser: "Designed the first nationally accredited certificate course for a leading cleaning products manufacturer, equipping frontline workers with standardized disinfection protocols.",
    tags: ["E-Learning", "Certificate Program", "Accreditation"],
    coverImage: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80",
    overview: "Served as Senior Instructional Designer for a certificate program developed for a leading multinational manufacturer of professional cleaning products. The project involved creating an online learning program to equip frontline workers with best practices for disinfecting public spaces, particularly during periods of pandemic recovery and heightened public health awareness.",
    problem: "During the recovery phases of a global pandemic, there was a critical need for accessible, effective, and standardized training for professional cleaners. These workers lacked a centralized, third-party accredited educational resource that provided vertical-specific cleaning protocols for environments like schools, offices, and hospitals.",
    solution: "Designed a third-party accredited certificate program within the client's online learning platform. The solution featured learning opportunities with targeted protocols for diverse public spaces. The courses covered product use, advanced disinfection technologies, and the latest industry best practices. The learning program provided essential knowledge and immediate training access to maintain safe shared spaces.",
    process: [
      { phase: "Stakeholder Collaboration", description: "Partnered with subject matter experts from the client's professional division to translate their disinfection expertise into digital learning opportunities." },
      { phase: "Program and Course Design", description: "Created detailed storyboards and oversaw the production of multimedia content to demonstrate advanced surface disinfection and product application.", image: { src: cleanEdit, alt: "Interactive scenario-based course design for disinfection training", caption: "Detailed scenarios to practice real-world application." } },
      { phase: "Assessment Development", description: "Designed a rigorous, assessment-based training framework to ensure learners met high-quality competency standards.", image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", alt: "Assessment framework interface", caption: "Competency-based assessment framework for certificate program" } },
      { phase: "Standards Alignment", description: "Developed all content in strict accordance with a national credentialing standard, which is the standard practice for certificate programs." },
    ],
    results: { metrics: [] },
    aiEvolution: {
      intro: "If I were to lead this project today, I would leverage a Human-AI Collaborative Strategy to move from a static certificate program to a more individualized and adaptive learning ecosystem.",
      cards: [
        {
          title: "Individualized Learning Paths",
          points: [
            "An AI-powered diagnostic tool would evaluate a learner's existing knowledge. If a worker is already an expert in office cleaning but new to food surface protocols, the AI dynamically adjusts the curriculum to focus on the knowledge gaps.",
          ],
        },
        {
          title: "Adaptive Real-Time Support",
          points: [
            "An AI \"Knowledge Assistant\" would be embedded in the mobile learning app, allowing workers to ask specific questions on-site (e.g., \"What is the dwell time for this product on a non-porous surface?\") and receive immediate, accredited answers.",
          ],
        },
        {
          title: "Advanced Assessment & Practical Feedback",
          points: [
            "Instead of multiple-choice questions, learners would engage with AI-simulated scenarios. The AI would evaluate their decision-making, provide context-based feedback, and apply focused updates to their individualized learning path.",
          ],
        },
        {
          title: "Predictive Performance Analytics",
          points: [
            "By integrating AI with the client's operational data, we could correlate training with actual facility health metrics. This enables a more data-driven program, and a refined measurement and evaluation strategy.",
          ],
        },
      ],
    },
  },
  {
    id: "compliance-training",
    title: "Enabling Financial Advisors for Digital Transformation",
    teaser: "Designed scenario-based learning experiences that empowered financial advisors to integrate a digital strategy into client relationships without disrupting the human touch.",
    tags: ["Scenario-Based Learning", "Digital Transformation", "Financial Services"],
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    overview: "To stay competitive in an evolving landscape, a multinational financial services provider pivoted toward a digital strategy for client self-enablement. As Senior Instructional Designer, this project empowered financial advisors to integrate this evolving approach into their existing client relationships without disrupting the \"human touch.\"",
    problem: "The financial advisors and other client-facing roles needed opportunities to gain confidence in this new approach and the associated digital platforms. The client needed to ensure advisors could find organic, meaningful opportunities to showcase the digital enablement opportunities within the context of their customers' financial priorities.",
    solution: "A Scenario-Based Learning experience empowered advisors to bridge the gap between digital self-serve tools and personalized advice.",
    solutionImage: { src: scenarioBank, alt: "Scenario-based learning interaction between advisor and client", caption: "Scenario-based learning simulation for advisor-client interactions" },
    solutionPoints: [
      "Immersive Simulations created scenarios rooted in common client life or business events (e.g., retirement planning, updating business accounts).",
      "A Safe-to-Fail Environment allowed advisors to practice positioning the platform's value.",
      "Grounded Feedback provided immediate, context-specific feedback during simulated client interactions.",
    ],
    process: [
      { phase: "Stakeholder Analysis", description: "Collaborated with SMEs to identify the specific moments of friction during client interactions." },
      { phase: "Contextual Design", description: "Outlined \"Digital Opportunities\" to help learners identify specific client cues that naturally invite digital support." },
      { phase: "Iterative Prototyping", description: "Collaborated with stakeholders and SMEs to ensure the scenarios reflected real-world nuances and provided focused feedback." },
      { phase: "Accessibility Compliance", description: "Communicated with the client to ensure all learning assets met strict internal standards to provide an equitable experience for all employees." },
    ],
    results: { metrics: [] },
    aiEvolution: {
      intro: "If I were to lead this project today, there are some exciting opportunities to explore and apply AI. Here are some strategies where the focused application of AI could be used to help this program achieve its specific business goals.",
      cards: [
        {
          title: "Adaptive Challenge Levels",
          points: [
            "Generative Persona Engines can create thousands of unique client variations instead of a one-size-fits-all simulation. By tracking an advisor's previous performance, the AI can increase the complexity of the client's objections. If an advisor excels at \"Retirement Planning\" scenarios, the AI can pivot the client's persona to be more skeptical or technologically averse to push the learner's boundaries.",
          ],
        },
        {
          title: "Predictive Analytics",
          points: [
            "AI can analyze performance data (from both real-world call data and/or simulations) to automatically flag specific moments of friction where most advisors struggle to pivot to digital. This data can be used to refine the learning program to address real-world performance gaps.",
          ],
        },
        {
          title: "Sentiment Analysis",
          points: [
            "The program can pivot to include Generative Roleplay using LLMs, allowing advisors to practice natural language conversations. Since the core goal is maintaining the human connection while introducing digital tools, AI-powered sentiment analysis can be used to score the \"warmth\" or \"relatability\" of the advisor's response.",
          ],
        },
      ],
    },
  },
  {
    id: "sales-enablement",
    title: "Sales Enablement Job Aids",
    teaser: "Created a suite of performance support tools that increased sales team close rates by 18%.",
    tags: ["Job Aid", "Performance Support", "Sales"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    overview: "Developed a comprehensive set of just-in-time performance support tools for a B2B SaaS company's sales team of 120 representatives. The team needed quick-access resources for competitive positioning, objection handling, and product demos.",
    problem: "Sales reps spent an average of 45 minutes per day searching for product information across disparate systems. Win rates had dropped 12% over two quarters. New product launches were hampered by slow knowledge transfer, and reps reported low confidence in competitive positioning.",
    solution: "Designed a searchable digital job aid system with interactive decision trees for objection handling, competitive battle cards, and step-by-step demo guides. All resources were accessible within the CRM workflow to minimize context-switching.",
    process: [
      { phase: "Analysis", description: "Shadowed top-performing reps, analyzed CRM data for common deal blockers, and conducted a content audit of existing sales collateral to identify gaps." },
      { phase: "Design", description: "Created information architecture for the job aid system. Designed templates for battle cards, objection handlers, and demo scripts using cognitive load principles.", image: { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", alt: "Sales battle card template design", caption: "Competitive battle card template with quick-reference format" } },
      { phase: "Development", description: "Built interactive HTML5 job aids with search functionality. Integrated with Salesforce for in-workflow access. Created video micro-demos for complex product features.", image: { src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80", alt: "Interactive decision tree for objection handling", caption: "Interactive objection handling decision tree" } },
      { phase: "Implementation", description: "Rolled out with a 'train-the-trainer' model. Sales managers led adoption in team meetings. Established a feedback loop for continuous content updates." },
      { phase: "Evaluation", description: "Measured impact on search time, win rates, ramp time for new reps, and rep confidence scores through quarterly surveys." },
    ],
    results: {
      metrics: [
        "18% increase in close rates within 6 months",
        "70% reduction in information search time",
        "30% faster ramp time for new sales hires",
        "91% adoption rate across the sales team",
      ],
      quote: "These tools gave our reps the confidence to handle any conversation. It's the most impactful enablement initiative we've ever launched.",
      quoteAuthor: "Director of Sales Enablement",
    },
  },
  {
    id: "leadership-development",
    title: "Leadership Development Program",
    teaser: "Designed a cohort-based program that improved manager effectiveness scores by 35% across the organization.",
    tags: ["Leadership", "Cohort Learning", "Virtual ILT"],
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    overview: "Created a 12-week leadership development program for mid-level managers at a financial services firm. The program combined virtual instructor-led workshops, peer coaching circles, and applied learning projects to build critical leadership competencies.",
    problem: "Employee engagement surveys revealed that 'relationship with direct manager' was the lowest-scoring category at 3.1/5.0. Exit interviews cited poor management as a top-3 reason for departure in 40% of cases. Existing leadership training was a one-time 2-day workshop with no follow-up or accountability.",
    solution: "Designed a 12-week cohort-based journey blending bi-weekly virtual workshops with structured peer coaching, reflective journaling, and real-world application projects. Each module focused on a specific competency: coaching conversations, feedback delivery, psychological safety, and strategic thinking.",
    process: [
      { phase: "Analysis", description: "Analyzed engagement survey data, conducted focus groups with direct reports, and benchmarked against leadership competency frameworks from CCL and DDI." },
      { phase: "Design", description: "Built a competency-based curriculum map with progressive complexity. Designed experiential activities, case studies, and reflection prompts for each session.", image: { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", alt: "Virtual workshop session with breakout activities", caption: "Live virtual workshop with structured breakout discussions" } },
      { phase: "Development", description: "Created facilitator guides, participant workbooks, peer coaching protocols, and a digital learning community space. Developed pre-work videos and post-session application challenges.", image: { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", alt: "Participant workbook and reflection journal", caption: "Participant workbook with guided reflection prompts" } },
      { phase: "Implementation", description: "Launched with a pilot cohort of 24 managers. Facilitated bi-weekly live sessions and monitored peer coaching circle engagement. Adjusted pacing based on participant feedback." },
      { phase: "Evaluation", description: "Used 360-degree assessments pre- and post-program, tracked engagement survey scores for participants' teams, and measured application of skills through manager observation rubrics." },
    ],
    results: {
      metrics: [
        "35% improvement in manager effectiveness scores",
        "Manager engagement category rose from 3.1 to 4.2/5.0",
        "28% reduction in voluntary turnover for participants' teams",
        "100% of participants recommended the program to peers",
      ],
      quote: "This wasn't just another training program — it changed how I show up as a leader every single day. The peer coaching was transformative.",
      quoteAuthor: "Program Participant, Senior Manager",
    },
  },
];
