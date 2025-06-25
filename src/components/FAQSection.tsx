
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Who can join?',
      answer: 'Any passionate student or young professional interested in technology, design, or innovation can join our community. We welcome learners from all backgrounds and skill levels.'
    },
    {
      question: 'Is this community free?',
      answer: 'Yes, joining our community is completely free! We believe in making tech education and networking accessible to everyone.'
    },
    {
      question: 'What are the benefits of joining?',
      answer: 'Members get access to exclusive workshops, networking events, collaborative projects, mentorship opportunities, and a supportive community of like-minded individuals.'
    },
    {
      question: 'Where can I stay updated?',
      answer: 'Follow us on our social media channels (LinkedIn, Instagram, Twitter, Discord) and join our community platforms for the latest updates on events and opportunities.'
    },
    {
      question: 'How do I participate in projects?',
      answer: 'Once you join, you\'ll have access to our project boards where you can collaborate with other members on various tech initiatives and hackathons.'
    },
    {
      question: 'Are there offline events?',
      answer: 'Yes! We organize regular meetups, workshops, and networking events across different cities in India. Check our timeline for upcoming events.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-pixel-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-futuristic text-5xl font-bold text-center mb-16 text-neon-white neon-text">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-pixel-gray/50 border border-neon-red/30 rounded-lg pixel-glow hover:pixel-glow-orange transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-futuristic text-lg font-semibold text-neon-white hover:text-neon-orange transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
