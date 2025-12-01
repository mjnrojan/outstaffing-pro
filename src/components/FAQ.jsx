import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How quickly can we start?",
    answer: "Typically, we can have candidates ready for interviews within 48 hours. Once selected, onboarding takes less than a week."
  },
  {
    question: "Do you handle payroll and taxes?",
    answer: "Yes, we handle all legal, payroll, and tax compliance matters, so you don't have to worry about international labor laws."
  },
  {
    question: "What if a developer isn't a good fit?",
    answer: "We offer a replacement guarantee. If a developer doesn't meet your expectations within the first month, we'll replace them at no extra cost."
  },
  {
    question: "Can I manage the team directly?",
    answer: "Absolutely. The team works as an extension of your in-house staff. You have full control over their tasks and priorities."
  },
  {
    question: "What time zones do you support?",
    answer: "We have talent across multiple time zones and can match you with developers who overlap with your working hours."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className={`text-[#39E590] text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about our process.</p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="text-[#39E590] font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
