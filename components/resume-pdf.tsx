import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { personalInfo, projectsData, skills, timeline } from '@/lib/portfolio-data';

// Disable text hyphenation (prevents words like "Prisma" from breaking as "Pris-ma")
Font.registerHyphenationCallback((word) => [word]);

const cleanUrl = (value: string) =>
  value.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');

const uniqueItems = (items: string[]) => Array.from(new Set(items));

const findSkillItems = (category: string) =>
  skills.find((skill) => skill.category === category)?.items ?? [];

const summaryText =
  'Backend-leaning Full Stack Developer focused on NestJS architecture, REST API design, PostgreSQL schema design, and Prisma-based data access. I build module-oriented services with clear contracts, validation layers, and migration discipline. I collaborate on full-stack features in React/Next.js to connect server-side logic with production UI behavior.';

const experienceItems = timeline.filter((item) => item.icon !== 'GraduationCap');
const educationItems = timeline.filter((item) => item.icon === 'GraduationCap');

const preferredProjectIds = ['omniblox', 'harmoni', 'fractal-explorer'];
const preferredProjects = preferredProjectIds
  .map((id) => projectsData.find((project) => project.id === id))
  .filter((project): project is (typeof projectsData)[number] => Boolean(project));
const fallbackProjects = projectsData.filter(
  (project) => project.featured && !preferredProjectIds.includes(project.id)
);
const projectItems = [...preferredProjects, ...fallbackProjects].slice(0, 3);

const projectHighlights: Record<string, { architecture: string; bullet: string; note?: string }> = {
  omniblox: {
    architecture:
      'Modular NestJS architecture with domain-separated services, REST API boundaries, and Prisma-managed PostgreSQL migrations.',
    bullet:
      'Implemented REST API design with module-level separation, production-oriented Prisma schema migrations, and OpenAPI endpoint documentation.',
  },
  harmoni: {
    architecture:
      'PostgreSQL schema modeled for collaboration entities with real-time event flow across chat, boards, and activity streams.',
    bullet:
      'Defined backend API contracts for AI integrations with rate-handling safeguards.',
    note: 'Active development visible at github.com/dev-yousaf',
  },
  'fractal-explorer': {
    architecture:
      'Node.js orchestration layer designed as a distributed coordination service between compute workers and UI control plane.',
    bullet:
      'Structured task queuing and worker coordination for fractal jobs.',
  },
};

const experienceBulletMap: Record<string, string[]> = {
  'Associate Software Engineer': [
    'Designed and maintained RESTful API endpoints and module architecture across 2 production platforms, aligning backend logic with release-cycle delivery.',
    'Implemented integration layers for external APIs and data flow handling, with contract-focused collaboration between server and client teams.',
  ],
  'Web Developer': [
    'Built production pages in in-house drag-and-drop builder and implemented custom HTML, CSS, Bootstrap, jQuery, and JavaScript blocks.',
    'Integrated builder-driven UI flows with backend API contracts for data fetching and state management.',
  ],
};

const stackSection = [
  {
    title: 'Frontend',
    items: uniqueItems(findSkillItems('Frontend Engineering')).slice(0, 6),
  },
  {
    title: 'Backend',
    items: uniqueItems([
      ...findSkillItems('Backend Engineering'),
      'Redis',
      'Microservices',
    ]).slice(0, 6),
  },
  {
    title: 'Databases & DevOps',
    items: [
      'PostgreSQL',
      'Prisma ORM',
      'Docker',
      'Git / GitHub',
      'CI/CD Pipelines',
      'OpenAPI',
    ],
  },
];

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    color: '#333333',
    backgroundColor: '#ffffff',
    padding: 0,
    fontSize: 9,
    lineHeight: 1.4,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  headerDivider: {
    width: '45%', // Makes the separator line much shorter
    borderBottom: '1pt solid #cbd5e1',
    alignSelf: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#333333',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  role: {
    fontSize: 10,
    color: '#475569',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  leftColumn: {
    width: '35%',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    borderRight: '1pt solid #cbd5e1',
  },
  rightColumn: {
    width: '65%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  sectionTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitleIconContainer: {
    width: 18,
    height: 18,
    backgroundColor: '#e2e8f0', // Light grey circle
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
  },
  sectionFirstLetter: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionRestLetters: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 2,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  contactIcon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  contactText: {
    fontSize: 8,
    color: '#475569',
  },
  contactLink: {
    fontSize: 8,
    color: '#475569',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 16,
  },
  educationItem: {
    marginBottom: 8,
  },
  educationYear: {
    fontSize: 8,
    color: '#64748b',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  educationTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333333',
    marginBottom: 2,
  },
  educationDesc: {
    fontSize: 8,
    color: '#475569',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 8,
    color: '#475569',
    marginBottom: 2,
  },
  summaryText: {
    fontSize: 8.5,
    color: '#475569',
    textAlign: 'left', // Fix text justification issue causing hyphenation spacing
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#333333',
  },
  experienceDate: {
    fontSize: 8,
    color: '#64748b',
    textTransform: 'uppercase',
  },
  experienceCompany: {
    fontSize: 8.5,
    color: '#475569',
    marginBottom: 4,
  },
  bulletList: {
    paddingLeft: 8,
  },
  bulletItem: {
    fontSize: 8.5,
    color: '#475569',
    marginBottom: 2,
    position: 'relative',
  },
  projectArchitecture: {
    fontSize: 8,
    color: '#64748b',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  projectNote: {
    fontSize: 8,
    color: '#475569',
    fontStyle: 'italic',
    marginTop: 2,
  },
});

const SectionTitle = ({ title }: { title: string }) => {
  const firstLetter = title.charAt(0);
  const restLetters = title.substring(1).toUpperCase();
  return (
    <View style={styles.sectionTitleBox}>
      <View style={styles.sectionTitleIconContainer}>
        <Text style={styles.sectionFirstLetter}>{firstLetter}</Text>
      </View>
      <Text style={styles.sectionRestLetters}>{restLetters}</Text>
    </View>
  );
};

export const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.role}>{personalInfo.title}</Text>
        </View>

        {/* Shorter horizontal divider */}
        <View style={styles.headerDivider} />

        <View style={styles.mainContainer}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <SectionTitle title="Contact" />
              <View style={styles.contactItem}>
                <Text style={styles.contactText}>{personalInfo.location}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactText}>{personalInfo.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Link src={`mailto:${personalInfo.email}`} style={styles.contactLink}>
                  {personalInfo.email}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Link src={personalInfo.social.linkedin} style={styles.contactLink}>
                  {cleanUrl(personalInfo.social.linkedin)}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Link src={personalInfo.social.github} style={styles.contactLink}>
                  {cleanUrl(personalInfo.social.github)}
                </Link>
              </View>
            </View>

            <View style={styles.section}>
              <SectionTitle title="Education" />
              {educationItems.map((item) => (
                <View key={item.title} style={styles.educationItem}>
                  <Text style={styles.educationYear}>{item.year}</Text>
                  <Text style={styles.educationTitle}>{item.company}</Text>
                  <Text style={styles.educationDesc}>- {item.title}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionTitle title="Skills" />
              {stackSection.map((cat) => (
                <View key={cat.title} style={styles.skillCategory}>
                  <Text style={styles.skillTitle}>{cat.title}</Text>
                  {cat.items.map((skill) => (
                    <Text key={skill} style={styles.skillItem}>
                      - {skill}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <SectionTitle title="Profile Summary" />
              <Text style={styles.summaryText}>{summaryText}</Text>
            </View>

            <View style={styles.section}>
              <SectionTitle title="Work Experience" />
              {experienceItems.map((item) => {
                const roleBullets = experienceBulletMap[item.title] || [];
                return (
                  <View key={item.title} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      <Text style={styles.experienceTitle}>{item.company}</Text>
                      <Text style={styles.experienceDate}>{item.year}</Text>
                    </View>
                    <Text style={styles.experienceCompany}>{item.title}</Text>
                    <View style={styles.bulletList}>
                      {roleBullets.map((bullet, idx) => (
                        <View key={idx} style={{ flexDirection: 'row' }}>
                          <Text style={styles.bulletItem}>- {bullet}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.section}>
              <SectionTitle title="Backend Projects" />
              {projectItems.map((project) => {
                const highlight = projectHighlights[project.id];
                return (
                  <View key={project.id} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      <Text style={styles.experienceTitle}>{project.title}</Text>
                    </View>
                    <Text style={styles.projectArchitecture}>{highlight.architecture}</Text>
                    <View style={styles.bulletList}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bulletItem}>- {highlight.bullet}</Text>
                      </View>
                    </View>
                    {highlight.note && <Text style={styles.projectNote}>{highlight.note}</Text>}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
