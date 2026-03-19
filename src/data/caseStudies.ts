import disinfectionCourseDesign from "@/assets/disinfection-course-design.png";
import cleanEdit from "@/assets/clean-edit.png";

export interface CaseStudy {
  id: string;
  title: string;
  teaser: string;
  tags: string[];
  coverImage: string;
  overview: string;
  problem: string;
  solution: string;
  process: { phase: string; description: string; image?: { src: string; alt: string; caption: string } }[];
  results: { metrics: string[]; quote?: string; quoteAuthor?: string };
  aiEvolution?: { intro: string; cards: { title: string; points: string[] }[] };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "accredited-disinfection-certificate",
    title: "Accredited Disinfection Certificate Program",
    teaser: "Designed the first nationally accredited certificate course for a leading cleaning products manufacturer, equipping frontline workers with standardized disinfection protocols.",
    tags: ["E-Learning", "Certificate Program", "Accreditation"],
    coverImage: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80",
    overview: "Served as Senior Instructional Designer for a certificate program developed for a leading multinational manufacturer of professional cleaning products. The project involved creating an online learning program to equip frontline workers with best practices for disinfecting public spaces, particularly during periods of pandemic recovery and heightened public health awareness.",
    problem: "During the recovery phases of a global pandemic, there was a critical need for accessible, effective, and standardized training for professional cleaners. These workers lacked a centralized, third-party accredited educational resource that provided vertical-specific cleaning protocols for environments like schools, offices, and hospitals.",
    solution: "Designed and developed the first third-party accredited certificate courses within the client's new on-demand online learning platform. The solution features learning opportunities with targeted protocols for diverse public spaces. A comprehensive curriculum covers product use, advanced disinfection technologies, and the latest industry best practices. The learning program provides essential knowledge and immediate training access to maintain safe shared spaces.",
    process: [
      { phase: "Stakeholder Collaboration", description: "Partnered with subject matter experts from the client's professional division to translate their disinfection expertise into digital learning opportunities." },
      { phase: "Program and Course Design", description: "Created detailed storyboards and oversaw the production of multimedia content to demonstrate advanced surface disinfection and product application.", image: { src: cleanEdit, alt: "Interactive scenario-based course design for disinfection training", caption: "Detailed scenarios to practice real-world application." } },
      { phase: "Assessment Development", description: "Designed a rigorous, assessment-based training framework to ensure learners met high-quality competency standards.", image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", alt: "Assessment framework interface", caption: "Competency-based assessment framework for certificate program" } },
      { phase: "Standards Alignment", description: "Developed all content in strict accordance with a national credentialing standard, which is the standard practice for certificate programs." },
    ],
    results: { metrics: [] },
    aiEvolution: {
      intro: "Building on the success of the accredited certificate program, the next phase envisions integrating AI-driven technologies to create a more adaptive, personalized, and continuously improving learning ecosystem for frontline cleaning professionals.",
      cards: [
        {
          title: "Individualized Learning Paths",
          points: [
            "Pre-Assessment Diagnostic: An AI-powered initial assessment evaluates each learner's existing knowledge of cleaning protocols, chemical safety, and specific vertical requirements to create a customized curriculum path.",
            "Just-in-Time Support: Context-aware AI assistants provide on-demand guidance during training modules, answering questions about product application rates, dwell times, and surface compatibility in real time.",
          ],
        },
        {
          title: "Advanced Assessment & Practical Feedback",
          points: [
            "AI-Simulated Branching Scenarios: Learners navigate realistic, AI-generated disinfection scenarios — such as an outbreak response in a school or a post-surgical suite turnover — where their decisions dynamically alter outcomes and feedback.",
            "Computer Vision Practicals: Using smartphone cameras, AI analyzes a learner's actual cleaning technique — spray pattern, coverage area, and PPE compliance — providing instant corrective feedback during hands-on practice sessions.",
          ],
        },
        {
          title: "Metrics & Continuous Improvement",
          points: [
            "Predictive Performance Analytics: AI models analyze learning patterns and assessment data to identify at-risk learners early and recommend targeted interventions before certification attempts.",
            "Sentiment & Engagement Tracking: Natural language processing monitors discussion forums and feedback submissions to surface emerging training gaps, learner frustrations, and content improvement opportunities.",
          ],
        },
      ],
    },
  },
  {
    id: "compliance-training",
    title: "Compliance Training Gamification",
    teaser: "Transformed mandatory compliance training into an engaging experience, boosting completion from 62% to 98%.",
    tags: ["Gamification", "Compliance", "Mobile Learning"],
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    overview: "Redesigned annual compliance training for a healthcare organization with 3,000 employees across 15 facilities. The existing approach used text-heavy slide decks that failed to engage learners or drive behavior change.",
    problem: "Compliance completion rates averaged 62%, putting the organization at regulatory risk. Knowledge retention assessments showed only 35% recall after 30 days. Employees reported the training as 'irrelevant' and 'boring,' leading to click-through behavior without genuine learning.",
    solution: "Developed a gamified learning experience using scenario-based challenges, point systems, team leaderboards, and real-world case studies from the healthcare industry. Content was chunked into 10-minute mobile-friendly microlearning modules.",
    process: [
      { phase: "Analysis", description: "Reviewed compliance incident reports and interviewed compliance officers to identify the highest-risk knowledge areas and common violations." },
      { phase: "Design", description: "Mapped game mechanics to learning objectives. Designed a badge and achievement system tied to competency milestones. Created scenario scripts based on real incidents.", image: { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", alt: "Gamified learning dashboard showing progress and badges", caption: "Learner dashboard with achievement badges and progress tracking" } },
      { phase: "Development", description: "Built in Articulate Rise with custom JavaScript for gamification elements. Developed a companion mobile app for push notifications and microlearning delivery.", image: { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", alt: "Mobile learning interface", caption: "Mobile-optimized microlearning module on compliance scenarios" } },
      { phase: "Implementation", description: "Launched in phases by facility. Trained compliance champions at each site to support rollout and drive engagement through team challenges." },
      { phase: "Evaluation", description: "Tracked engagement analytics, completion rates, assessment scores, and compliance incident rates over 12 months post-launch." },
    ],
    results: {
      metrics: [
        "98% completion rate (up from 62%)",
        "72% knowledge retention at 30 days (up from 35%)",
        "45% reduction in compliance incidents",
        "4.6/5.0 average learner satisfaction rating",
      ],
      quote: "For the first time, our staff actually talked about compliance training in a positive way. The gamification made it feel relevant to their daily work.",
      quoteAuthor: "Chief Compliance Officer",
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
