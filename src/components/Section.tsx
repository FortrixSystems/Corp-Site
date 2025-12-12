import { ReactNode } from 'react';
import Container from './Container';
import ScrollReveal from './ScrollReveal';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  delay?: number;
}

export default function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  id,
  delay = 0
}: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] ${className}`}>
      <ScrollReveal delay={delay}>
        <Container className={containerClassName}>
          {children}
        </Container>
      </ScrollReveal>
    </section>
  );
}

