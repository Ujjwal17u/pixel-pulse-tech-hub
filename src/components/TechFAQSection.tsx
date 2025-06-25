
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TechFAQSection = () => {
  const faqs = [
    {
      question: 'Who can join TechComm?',
      answer: 'Anyone interested in tech, networking, and building real things. We welcome students, professionals, and anyone passionate about technology.'
    },
    {
      question: 'Is there any fee?',
      answer: 'No, TechComm is 100% free and open to all. We believe in making tech education and community accessible to everyone.'
    },
    {
      question: 'How will I get updates?',
      answer: 'Via email and social groups after registration. We keep our community informed through multiple channels including Discord, LinkedIn, and our newsletter.'
    },
    {
      question: 'Will I get recognition?',
      answer: 'Yes! Active members get badges and get spotlighted. We have a comprehensive recognition system including skill badges, member spotlights, and achievement tracking.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-tech-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-tech-dark/50 border border-tech-orange/30 rounded-lg tech-glow hover:tech-glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-6 py-4 text-left font-primary text-lg font-semibold text-tech-light hover:text-tech-orange transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-tech-gray leading-relaxed font-body">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TechFAQSection;
