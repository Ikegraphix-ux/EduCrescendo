import { IconName } from "@/components/Icons";

export const domainFocus: { title: string; icon: IconName; areas: string[] }[] = [
  { title: "Flourishing Learners™", icon: "learner", areas: ["Character Development", "Wellbeing", "Future Readiness", "Purpose Formation", "Lifelong Learning"] },
  { title: "Flourishing Educators™", icon: "educator", areas: ["Professional Growth", "Teacher Wellbeing", "Instructional Excellence", "Leadership Capacity", "Continuous Learning"] },
  { title: "Flourishing Leadership™", icon: "leadership", areas: ["Visionary Leadership", "Strategic Thinking", "Culture Building", "Organisational Effectiveness", "Change Leadership"] },
  { title: "Flourishing Schools™", icon: "schools", areas: ["School Culture", "Strategic Improvement", "Organisational Health", "Performance Excellence", "Sustainable Transformation"] },
  { title: "Flourishing Communities™", icon: "communities", areas: ["Community Engagement", "Capacity Building", "Social Impact", "Collaboration", "Sustainable Development"] },
  { title: "Flourishing Societies™", icon: "societies", areas: ["Human Development", "Social Innovation", "National Development", "Systems Transformation", "Societal Wellbeing"] },
];

export type SolutionItem = { title: string; body: string; tags: string[] };
export type SolutionBlock = {
  label: string;
  title: string;
  intro: string;
  items: SolutionItem[];
  icon: IconName;
  cta?: string;
};

export const solBlocks: SolutionBlock[] = [
  {
    label: "Building Flourishing Schools™",
    title: "Solutions for Schools",
    intro: "We help schools strengthen culture, leadership, performance, wellbeing, and long-term impact.",
    icon: "schools",
    cta: "Learn About FlourishScore™",
    items: [
      { title: "School Transformation Framework", body: "A structured approach to diagnosing, planning, implementing, and sustaining school-wide improvement.", tags: ["School Culture", "Strategic Direction", "Organisational Effectiveness", "Teaching and Learning", "Wellbeing and Flourishing", "Continuous Improvement"] },
      { title: "School Improvement Support", body: "Helping schools identify priorities and implement meaningful change initiatives.", tags: ["Needs Assessment", "Strategic Planning", "Improvement Roadmaps", "Monitoring and Evaluation", "Leadership Coaching"] },
      { title: "FlourishScore™ for Schools", body: "A transformation intelligence system that enables schools to measure and improve flourishing outcomes.", tags: ["Diagnostic Insights", "Baseline Assessments", "Progress Tracking", "Strategic Recommendations"] },
    ],
  },
  {
    label: "Building Flourishing Leadership™",
    title: "Solutions for Educational Leaders",
    intro: "Effective transformation begins with effective leadership. Our leadership solutions equip school leaders, administrators, proprietors, and executives with the tools needed to create thriving institutions.",
    icon: "leadership",
    items: [
      { title: "Leadership Development Programmes", body: "Developing leaders who inspire vision, cultivate culture, and sustain transformation.", tags: ["Strategic Leadership", "Transformational Leadership", "Flourishing Leadership™", "Change Management", "Organisational Development"] },
      { title: "Executive Coaching", body: "Personalised support for educational leaders navigating growth, change, and transformation.", tags: ["Leadership Effectiveness", "Strategic Decision-Making", "Team Development", "Culture Transformation"] },
      { title: "Leadership Communities", body: "Collaborative learning networks that foster shared growth and innovation among leaders.", tags: [] },
    ],
  },
  {
    label: "Building Flourishing Educators™",
    title: "Solutions for Educators",
    intro: "Great schools require flourishing educators. We support teachers and educational professionals through practical development opportunities that strengthen effectiveness, wellbeing, and professional growth.",
    icon: "educator",
    items: [
      { title: "Professional Development", body: "Training experiences designed to enhance teaching quality and learner outcomes.", tags: ["Instructional Excellence", "Assessment Practices", "Classroom Culture", "Learner Engagement", "Educational Innovation"] },
      { title: "Teacher Growth Pathways", body: "Structured opportunities for continuous learning and professional advancement.", tags: [] },
      { title: "Educator Wellbeing Initiatives", body: "Supporting educators to thrive personally and professionally.", tags: [] },
    ],
  },
  {
    label: "Building Flourishing Learners™",
    title: "Solutions for Learners",
    intro: "Education should prepare learners not only for examinations but also for life. Our learner-focused solutions help develop the knowledge, skills, character, and capacities needed for long-term flourishing.",
    icon: "learner",
    items: [
      { title: "Character and Values Development", body: "Cultivating integrity, responsibility, resilience, and leadership.", tags: [] },
      { title: "Future Readiness Programmes", body: "Preparing learners for an evolving world through critical competencies and adaptive mindsets.", tags: [] },
      { title: "Learner Wellbeing Initiatives", body: "Promoting holistic development and wellbeing.", tags: [] },
    ],
  },
  {
    label: "Building Flourishing Communities™",
    title: "Solutions for Communities",
    intro: "Educational transformation extends beyond the classroom. Strong communities create stronger educational outcomes.",
    icon: "communities",
    items: [
      { title: "Community Engagement Programmes", body: "Strengthening collaboration between schools, families, and communities.", tags: [] },
      { title: "Capacity Building Initiatives", body: "Equipping community stakeholders to contribute meaningfully to flourishing outcomes.", tags: [] },
      { title: "Partnership Development", body: "Facilitating collaborative approaches to educational and social transformation.", tags: [] },
    ],
  },
];

export const topics: { title: string; tags: string[]; cta: string; icon: IconName }[] = [
  { title: "Flourishing Education™", tags: ["Holistic Education", "Learner Wellbeing", "Human Development", "Educational Purpose", "Flourishing Frameworks"], cta: "Explore Flourishing Education", icon: "learner" },
  { title: "Flourishing Leadership™", tags: ["Leadership Development", "Organisational Culture", "Strategic Leadership", "Transformational Leadership", "Leadership for Flourishing"], cta: "Explore Flourishing Leadership", icon: "leadership" },
  { title: "School Transformation", tags: ["School Improvement", "Change Management", "School Culture", "Strategic Planning", "Organisational Development"], cta: "Explore School Transformation", icon: "schools" },
  { title: "Future of Learning", tags: ["Educational Innovation", "Future Skills", "Artificial Intelligence", "Emerging Technologies", "Future Readiness"], cta: "Explore Future of Learning", icon: "diagnose" },
  { title: "Research and Innovation", tags: ["Research Briefs", "Framework Development", "Innovation Studies", "Validation Findings", "Educational Intelligence"], cta: "Explore Research", icon: "communities" },
  { title: "Flourishing Societies™", tags: ["Human Development", "Community Transformation", "Social Innovation", "National Development", "Flourishing Communities"], cta: "Explore Flourishing Societies", icon: "societies" },
];

export const helpOptions: { title: string; body: string; note?: string; cta: string; href?: string }[] = [
  { title: "Discovery Conversations", body: "Explore opportunities, challenges, goals, and possibilities for transformation within your institution or organisation.", note: "Ideal for: School Leaders, Proprietors, Educational Networks, Development Organisations, Community Leaders", cta: "Book a Discovery Conversation" },
  { title: "Validation Partnership Programme Enquiries", body: "Interested in becoming a pioneer institution? Learn more about current and upcoming validation opportunities, eligibility requirements, and participation processes.", cta: "Explore Validation Programmes", href: "/validation" },
  { title: "Partnerships and Collaborations", body: "We welcome opportunities to collaborate with organisations, institutions, foundations, networks, and innovators committed to advancing flourishing and transformational impact.", note: "Potential areas: Strategic Partnerships, Research Collaborations, Innovation Projects, Capacity Building Initiatives, Ecosystem Development", cta: "Discuss a Partnership" },
  { title: "Speaking and Thought Leadership", body: "Invite EduCrescendo Global™ to contribute to conferences, leadership forums, workshops, webinars, educational events, and strategic conversations.", note: "Topics may include: Flourishing Education™, Flourishing Leadership™, School Transformation, Educational Innovation, Future of Learning, Flourishing Societies™", cta: "Request a Speaking Engagement" },
];
