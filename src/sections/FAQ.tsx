import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { faqs } from '../data/event';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-20" id="faq">
      <Container>
        <SectionTitle eyebrow="FAQ">よくあるご質問</SectionTitle>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-white"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-sm font-semibold sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${open ? 'rotate-180 text-primary' : 'text-white/50'}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
