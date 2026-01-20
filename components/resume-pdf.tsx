import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { about, personalInfo, projectsData, skills, timeline } from '@/lib/portfolio-data';

const truncate = (text: string, maxLength: number) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  // Sidebar (left column with accent color)
  sidebar: {
    width: '35%',
    backgroundColor: '#2b294e',
    padding: '28 20',
    color: '#ffffff',
  },
  sidebarName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    lineHeight: 1.2,
  },
  sidebarTitle: {
    fontSize: 10.5,
    color: '#c7b8ea',
    marginBottom: 16,
    lineHeight: 1.3,
  },
  sidebarSection: {
    marginBottom: 14,
  },
  sidebarSectionTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 7,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    borderBottom: '1pt solid #6d5a9e',
    paddingBottom: 3,
  },
  contactItem: {
    fontSize: 8,
    color: '#e8e3f3',
    marginBottom: 5,
    lineHeight: 1.4,
  },
  contactLabel: {
    color: '#b19cd9',
    fontSize: 7,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  skillItems: {
    fontSize: 8,
    color: '#e8e3f3',
    lineHeight: 1.5,
  },
  skillBullet: {
    fontSize: 7.5,
    color: '#e8e3f3',
    marginBottom: 2,
    paddingLeft: 6,
  },
  // Main content (right column)
  main: {
    width: '65%',
    padding: '28 24 28 20',
  },
  header: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottom: '2pt solid #2b294e',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2b294e',
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#374151',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeft: '2pt solid #e5e7eb',
    paddingBottom: 6,
  },
  experienceHeader: {
    marginBottom: 4,
  },
  jobTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  year: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  company: {
    fontSize: 9,
    color: '#2b294e',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#4b5563',
    marginBottom: 4,
  },
  bulletPoint: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#4b5563',
    marginBottom: 3,
    paddingLeft: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  tag: {
    fontSize: 7,
    backgroundColor: '#e8e3f3',
    color: '#2b294e',
    padding: '2 6',
    marginRight: 4,
    marginBottom: 3,
    borderRadius: 2,
    fontWeight: 'bold',
  },
  projectItem: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottom: '1pt solid #f3f4f6',
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#111827',
  },
  projectMeta: {
    fontSize: 8,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  projectSummary: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#4b5563',
    marginBottom: 5,
  },
  linkText: {
    fontSize: 7.5,
    color: '#2b294e',
    textDecoration: 'underline',
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 7,
    color: '#9ca3af',
    paddingTop: 8,
  },
});

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar - Left Column */}
      <View style={styles.sidebar}>
        {/* Name & Title in Sidebar */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.sidebarName}>{personalInfo.name}</Text>
          <Text style={styles.sidebarTitle}>{personalInfo.title}</Text>
          <Text style={styles.sidebarTitle}>{personalInfo.subtitle}</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Contact</Text>
          <View>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactItem}>{personalInfo.location}</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactItem}>{personalInfo.email}</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactItem}>{personalInfo.phone}</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.contactLabel}>GitHub</Text>
            <Link src={personalInfo.social.github} style={styles.contactItem}>
              {personalInfo.social.github.replace('https://', '')}
            </Link>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.contactLabel}>LinkedIn</Text>
            <Link src={personalInfo.social.linkedin} style={styles.contactItem}>
              {personalInfo.social.linkedin.replace('https://www.', '')}
            </Link>
          </View>
        </View>

        {/* Skills in Sidebar */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Technical Skills</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
              {skill.items.slice(0, 5).map((item, idx) => (
                <Text key={idx} style={styles.skillBullet}>• {item}</Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Main Content - Right Column */}
      <View style={styles.main}>
        {/* Profile Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.bio}>{personalInfo.bio || about.description}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {timeline
            .filter((item) => item.icon !== 'GraduationCap')
            .map((item, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.year}>{item.year}</Text>
                </View>
                <Text style={styles.company}>{item.company} • {item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.tags}>
                  {item.tags.map((tag, idx) => (
                    <Text key={idx} style={styles.tag}>{tag}</Text>
                  ))}
                </View>
              </View>
            ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {timeline
            .filter((item) => item.icon === 'GraduationCap')
            .map((item, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.year}>{item.year}</Text>
                </View>
                <Text style={styles.company}>{item.company} • {item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))}
        </View>

        {/* Key Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects Portfolio</Text>
          {projectsData.map((project) => (
            <View key={project.id} style={styles.projectItem}>
              <View style={styles.projectTitleRow}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectMeta}>{project.category}</Text>
              </View>
              <Text style={styles.projectSummary}>
                {project.shortDescription ?? truncate(project.description, 140)}
              </Text>
              <Text style={{ fontSize: 8.5, color: '#4b5563', marginTop: 2, lineHeight: 1.4 }}>
                {truncate(project.challenge ?? '', 120)}
              </Text>
              <View style={styles.tags}>
                {project.tech.slice(0, 7).map((tag, idx) => (
                  <Text key={idx} style={styles.tag}>{tag}</Text>
                ))}
              </View>
              {project.github && (
                <Link src={project.github} style={styles.linkText}>
                  ↗ GitHub
                </Link>
              )}
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            {personalInfo.name} • Resume • Generated {new Date().toLocaleDateString()}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
