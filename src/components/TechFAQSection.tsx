
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TechFAQSection = () => {
  const faqs = [
    {
      question: 'Who can join YÄTSU Squad?',
      answer: 'Any student or tech enthusiast passionate about building and growing. We welcome learners from all backgrounds and skill levels.'
    },
    {
      question: 'What does it cost?',
      answer: 'Nothing. It\'s completely free to join and participate in all YÄTSU Squad activities.'
    },
    {
      question: 'How do I get updates?',
      answer: 'You\'ll be added to our LinkedIn & Instagram groups once registered. We also send regular updates via email.'
    },
    {
      question: 'Will I get badges or recognition?',
      answer: 'Yes! Active contributors get badges and visibility in the community. We have a comprehensive recognition system for achievements.'
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
