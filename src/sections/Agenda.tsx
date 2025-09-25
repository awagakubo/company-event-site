import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { timeline } from '../data/event';

export function Agenda() {
  return (
    <section id="agenda" className="bg-slate-950 py-20">
      <Container>
        <SectionTitle eyebrow="Agenda">当日の流れ</SectionTitle>
        <ol className="relative mx-auto max-w-3xl border-l border-white/10 pl-6">
          {timeline.map((item, index) => (
            <li key={item.time} className="mb-12 last:mb-0">
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-primary bg-slate-950" />
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between text-sm text-primary">
                  <span className="font-semibold">{item.time}</span>
                  <span className="uppercase tracking-[0.3em] text-white/60">
                    Session {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
                <p className="text-sm font-medium text-slate-200">登壇: {item.speaker}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
