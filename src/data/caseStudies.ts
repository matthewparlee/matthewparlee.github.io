import disinfectionCourseDesign from "@/assets/disinfection-course-design.png";
import cleanEdit from "@/assets/clean-edit.png";
import scenarioBank from "@/assets/scenario-bank.png";
import cleanerImage from "@/assets/cleaner.png";
import evaluatorImage from "@/assets/evaluator-case-study.jpg";
import evaluatorPracticeActivity from "@/assets/evaluator-practice-activity.jpg";
import digitalStrategyCover from "@/assets/case-study-digital-strategy.jpg";
import assessmentImage from "@/assets/case-study-assessment.jpg";

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
  processIntro?: string;
  process: { phase: string; description: string; image?: { src: string; alt: string; caption: string } }[];
  results: { metrics: string[]; quote?: string; quoteAuthor?: string };
  aiEvolution?: { intro: string; cards: { title: string; points: string[] }[] };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "compliance-training",
    title: "Enabling Financial Advisors for Digital Transformation",
    teaser: "Designed scenario-based learning experiences that empowered financial advisors to integrate a digital strategy into client relationships without disrupting the human touch.",
    tags: ["Scenario-Based Learning", "Digital Transformation", "Financial Services"],
    coverImage: digitalStrategyCover,
    overview: "To stay competitive in an evolving landscape, a multinational financial services provider pivoted toward a digital strategy for client self-enablement. As Senior Instructional Designer, this project empowered financial advisors to integrate this evolving approach into their existing client relationships.",
    problem: "The financial advisors needed opportunities to gain confidence in this new approach and the associated digital platforms. The client needed to ensure advisors could find organic, meaningful opportunities to showcase the digital enablement opportunities within the context of their customers' financial priorities.",
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
            "Generative Persona Engines can create unique client variations instead of a one-size-fits-all simulation. By tracking an advisor's previous performance, the AI can increase the complexity of the client's objections. If an advisor excels at retirement planning scenarios, the AI can pivot the client's persona to be more skeptical or technologically averse to push the learner's boundaries.",
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
    id: "evaluator-decision-making",
    title: "Empowering Evaluators for High-Stakes Decision-Making",
    teaser: "Designed an experiential ILT and VILT framework that enabled evaluators to assess complex legislative safety and insurance requirements and navigate high-risk decision-making.",
    tags: ["ILT/VILT", "Experiential Learning", "Regulatory Training"],
    coverImage: evaluatorImage,
    overview: "Served as a Senior Instructional Designer for a government-mandated health and safety authority and regulatory body. This initiative focused on empowering specialized evaluators by distilling complex legislative safety and insurance requirements into an experiential learning program. By transitioning from theoretical study to an ILT and VILT framework, the program helped evaluators navigate high-stakes decision-making with precision.",
    problem: "Evaluators must be equipped to navigate high-stakes regulatory complexity and render complex decisions regarding claims. The cognitive load is immense, requiring them to analyze claims involving medical documentation, investigative findings, and direct claimant interactions. They also must render defensible decisions that are not only accurate but fully supported by the legislative architecture.\n\nA critical gap existed between \"knowing the legislation\" to \"applying the legislation\" in an environment where an incorrect judgment carries significant consequences.",
    solution: "The strategy centered on an ILT/VILT approach that treated the classroom as a regulatory sandbox. Instead of memorizing statutes, learners spent their time in active application; testing evidence against criteria and testing their decisions in a safe, moderated environment. The program shifted the focus from rote compliance to the development of robust mental models for real-world evaluation.\n\nThe design followed a guided practice strategy to build toward performance readiness:",
    solutionPoints: [
      "Peer-Based Problem-Solving: Small-group analysis where learners evaluated case data, debated evidence quality, and practiced rendering judgments based on complex criteria.",
      "Performance Support Integration: To ensure sustainability, we synthesized complex legislation into visual infographics and performance support tools. These served as cognitive scaffolds during learning and high-utility job aids in the field. By offloading procedural memorization, evaluators could prioritize nuanced analysis and high-quality decision-making.",
      "Independent Practice: The final phase required learners to work independently, receiving raw claim documentation and evidence. Learners were required to document and reflect on their thinking throughout the process, justifying their final judgment through the lens of the legislative framework.",
    ],
    solutionImage: { src: evaluatorPracticeActivity, alt: "Practice activity facilitator guide showing structured analysis exercises for evaluator training", caption: "Facilitator guide detailing structured practice activities." },
    processIntro: "This project existed against a backdrop of shifting content and compressed timelines. The core challenge was maintaining value-driven design while the project's scope, content, and SME resources remained in a state of constant change.",
    process: [
      { phase: "Strategic Scoping & Alignment", description: "Facilitated conversations ensuring the core objectives remained stable even as the specific content was still being defined." },
      { phase: "Tiered Solutions", description: "Navigated unexpected changes by providing stakeholders with clear options, allowing for informed decision-making while maintaining project momentum." },
      { phase: "Agile Problem-Solving", description: "Moderated stakeholder expectations, defined risks, and negotiated trade-offs between scope, quality, and schedule." },
      { phase: "Adaptive Review Cycles", description: "Implemented a flexible review process that accommodated late-stage refinements and evolving content, ensuring the final product aligned with shifting organizational needs." },
    ],
    results: { metrics: [] },
    aiEvolution: {
      intro: "If leading this project today, I would explore some exciting opportunities to apply AI and broaden the ILT approach. By integrating focused measurement, ILT experiences, performance support job aids, and on-demand AI simulations with structured mentorship, the program could move beyond isolated events toward a learning ecosystem.\n\nThis multi-layered architecture ensures that learning is sustained and refined within the daily flow of work. We can then build toward a culture where learning is continuous, adaptive, and deeply embedded in the organizational culture.",
      cards: [
        {
          title: "AI-Supported Simulations",
          points: [
            "Because traditional instructor-led training often exists as an isolated event, learners can struggle to transfer skills to the daily workflow. To counter the forgetting curve, we can leverage AI-supported simulations to engage spaced repetition. This will support active retrieval, contextual application, and provide guided feedback opportunities on a continuing basis outside the initial learning event.",
          ],
        },
        {
          title: "Targeted Skill Maintenance",
          points: [
            "On-demand simulations combat skill decay by intentionally cycling through both everyday and rare outlier cases. At regular intervals, learners apply complex criteria to realistic cases in a low-stakes sandbox.",
          ],
        },
        {
          title: "Dynamic Program Adjustments",
          points: [
            "By leveraging real-time performance data from both simulations and real-world performance, we can proactively identify performance gaps. This data-driven loop allows for the dynamic adjustment of ILT content, job aids, and scenarios, ensuring that training content evolves as rapidly as the legislative and operational landscape.",
          ],
        },
      ],
    },
  },
  {
    id: "accredited-disinfection-certificate",
    title: "Guiding Frontline Teams with Accredited Disinfection Program",
    teaser: "Designed a nationally accredited certificate program, equipping frontline workers with standardized disinfection strategies.",
    tags: ["E-Learning", "Certificate Program", "Accreditation"],
    coverImage: cleanerImage,
    overview: "Served as Senior Instructional Designer for a certificate program developed for a leading multinational manufacturer of professional cleaning products. The project involved creating an online learning program to equip frontline workers with best practices for disinfecting public spaces, particularly during periods of pandemic recovery and heightened public health awareness.",
    problem: "During the recovery phases of a global pandemic, there was a critical need for accessible, effective, and standardized training for professional cleaners. These workers lacked a centralized, third-party accredited educational resource that provided vertical-specific cleaning protocols for environments like schools, offices, and hospitals.",
    solution: "Designed a third-party accredited certificate program within the client's online learning platform. The solution featured learning opportunities with targeted protocols for diverse public spaces. The courses covered product use, advanced disinfection technologies, and the latest industry best practices. The learning program provided essential knowledge and immediate training access to maintain safe shared spaces.",
    process: [
      { phase: "Stakeholder Collaboration", description: "Partnered with subject matter experts from the client's professional division to translate their disinfection expertise into digital learning opportunities." },
      { phase: "Program and Course Design", description: "Created detailed storyboards and oversaw the production of multimedia content to demonstrate advanced surface disinfection and product application.", image: { src: cleanEdit, alt: "Interactive scenario-based course design for disinfection training", caption: "Detailed scenarios to practice real-world application." } },
      { phase: "Assessment Development", description: "Designed a rigorous, assessment-based training framework to ensure learners met high-quality competency standards.", image: { src: assessmentImage, alt: "Assessment framework interface", caption: "Competency-based assessment framework for certificate program" } },
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
];