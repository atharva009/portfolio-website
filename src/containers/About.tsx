'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Link, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        {/* <div className="space-y-4 lg:w-3/5">
          <p>
          Hello, I’m Atharva Hankare, a Software Engineer with two years of professional experience, having worked as a Full Stack Developer at{' '}
            <Link
              href="https://www.ltimindtree.com/"
              target="_blank"
              className="text-accent"
            >
              LTIMindtree
            </Link> in the insurance domain.
          </p>
          <p>
          I’m currently pursuing my Master’s in Computer Software Engineering at{' '}
          <Link
              href="https://www.northeastern.edu/"
              target="_blank"
              className="text-accent"
            >
              Northeastern University
            </Link>, with a focus on backend engineering, cloud technologies, and web development.
          </p>
          <p>
          In my previous role, I worked on building scalable solutions, collaborating across departments, and addressing technical challenges to achieve business goals. I’m passionate about staying up-to-date with the latest technology trends, whether it’s through coding, cloud solutions, or leveraging data for better insights. I’m eager to apply my skills to new challenges and contribute to innovative projects.
          </p>
        </div> */}
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I’m Atharva Hankare, an SWE passionate about building scalable backend systems, Agentic AI, cloud-native applications, and intelligent web solutions.
          </p>
          <p>
            As a Software Engineer Co-Op at <Link
              href="https://ribboncommunications.com/"
              target="_blank"
              className="text-accent"
            >
              Ribbon
            </Link>, I focus on research and development of Agentic AI systems in the AWS cloud environment building autonomous & scalable architectures while also automating Ribbon’s Cyber Lab migration to enable seamless environment replication and microservices deployment.
          </p>
          <p>
            Previously, I spent two years as a Senior Software Engineer at <Link
              href="https://www.ltimindtree.com/"
              target="_blank"
              className="text-accent"
            >
              LTIMindtree
            </Link> in the insurance domain, developing enrollment and policy-tracking applications and collaborating across teams to deliver resilient enterprise solutions.
          </p>
          <p>
            Alongside my work, I am pursuing my Master’s in Software Engineering Systems at <Link
              href="https://www.northeastern.edu/"
              target="_blank"
              className="text-accent"
            >
              Northeastern University
            </Link>, specializing in backend engineering & cloud-native development. I enjoy exploring emerging technologies such as Agentic AI and Kotlin multiplatform apps, always seeking opportunities to push boundaries and apply new ideas to real-world problems.
          </p>
          <p>
            My goal is to combine hands-on industry experience with academic rigor to build solutions that scale, adapt, and create meaningful impact.
          </p>
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;


// Hello, I’m Atharva Hankare, a Software Engineer with two years of professional experience, having worked as a Java Full Stack Developer at LTIMindtree in the insurance domain. I’m currently pursuing my Master’s in Software Engineering Systems at Northeastern University, with a focus on backend engineering, cloud technologies, and web development. In my previous role, I worked on building scalable solutions, collaborating across departments, and addressing technical challenges to achieve business goals. I’m passionate about staying up-to-date with the latest technology trends, whether it’s through coding, cloud solutions, or leveraging data for better insights. I’m eager to apply my skills to new challenges and contribute to innovative projects. If you have any information or updates on job openings, internships, or co-op opportunities within your organization, I’d be grateful if you could share them.