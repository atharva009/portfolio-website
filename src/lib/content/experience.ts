import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "02. where i've worked",
  experiences: [
    {
      company: 'LTIMindtree',
      companyUrl: 'https://www.ltimindtree.com/',
      roles: [
        {
          role: 'Senior Software Engineer',
          started: 'Sep 2022',
          upto: 'Jun 2024',
          tasks: [
            'Built a cloud-native premium engine with Java/Spring Boot, scaled to 3,000+ users using Redis and async processing.',
            'Deployed a secure chatbot system with OAuth2, JWT, and RBAC, reducing resolution time by 15%.',
            'Automated CI/CD pipelines with GitHub Actions & Jenkins for AWS ECS, improving release speed and reliability.',
            'Managed cloud infrastructure on AWS (RDS, S3, Docker), improving system resilience and provisioning.',
            'Designed real-time dashboards with React, WebSockets, and Chart.js, boosting engagement by 20%.',
            'Improved transaction throughput by 25% via batch payment processing, reducing API overhead.'
          ],
        },
        {
          role: 'Software Engineer Intern',
          started: 'Jun 2022',
          upto: 'Sep 2022',
          tasks: [
            'Built key features for an internal training system using React, Spring Boot & REST APIs, reducing turnaround by 20%.',
            'Created an admin dashboard with React & Chart.js to track user progress and training analytics.',
            'Worked in Agile teams with engineers and PMs to deliver features and refine product requirements.',
            'Implemented RBAC security using Spring Security and JWT to manage access for learners, trainers, and admins.'
          ],
        },
      ],
    },
  ],
};