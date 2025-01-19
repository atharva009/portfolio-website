import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "02. where i've worked",
  experiences: [
    {
      company: 'LTIMindtree',
      companyUrl: 'https://www.ltimindtree.com/',
      role: 'senior software engineer',
      started: 'sep 2022',
      upto: 'jun 2024',
      tasks: [
        'Collaborated with cross-functional teams for a Fortune 500 insurance client to develop a secure ChatBot API using Spring Boot, Spring MVC, Spring Security, and OAuth2, implementing role-based access control and reducing query resolution time by 35%.',
        'Analyzed and resolved inefficiencies in payment workflows using Cybersource API, implementing batch job solutions that increased payment token efficiency by 30% and reduced processing time by 25%, streamlining payment operations.',
        'Developed high-performance RESTful APIs with Spring Boot, Spring Data JPA, and Hibernate, utilizing query optimization, caching, and asynchronous processing, reducing data retrieval time by 40% and validated reliability using JUnit tests.',
        'Designed and implemented a dynamic React frontend integrated with a Spring Boot backend, managed with Maven and automated through Jenkins, leading to a 20% increase in user engagement and improved system efficiency.',
        'Deployed microservices on AWS, utilizing AWS RDS for database management and S3 for secure file storage, improving system scalability and reliability.'
      ]
    }
    ,
    {
      company: 'L&T Infotech',
      companyUrl: 'https://lntinfotech.com/',
      role: 'software engineer intern',
      started: 'jun 2022',
      upto: 'sep 2022',
      tasks: [
        'Led a high-performing team to develop and deliver a project, utilizing Spring Boot, Spring MVC, and React, while adhering to rigorous SDLC practices and ensuring on-time delivery.',
        'Facilitated sprint planning and conducted code reviews, utilizing tools like JUnit for unit testing, ensuring high code quality, fostering team collaboration, and refining analytical skills.',
        'Collaborated on performance optimization initiatives by implementing query optimization and caching mechanisms with Hibernate and Spring Data JPA, resulting in significant improvements in system efficiency.',
        'Enhanced technical expertise during the training phase by mastering Spring Data JPA, Hibernate, and AWS, while fostering cross-functional communication, resulting in improved problem-solving capabilities and team synergy.'
      ]
    }
    
  ],
};