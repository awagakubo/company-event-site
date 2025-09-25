import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { speakers } from '../data/event';

export function Speakers() {
  return (
    <section className="bg-slate-950 py-20" id="speakers">
      <Container>
        <SectionTitle eyebrow="Speakers">登壇者紹介</SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6"
            >
              <div
                className={`relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${speaker.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)]" />
                <div className="absolute inset-0 flex items-end p-4 text-xs uppercase tracking-[0.3em] text-white/70">
                  {speaker.topic}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
              <p className="text-sm text-primary">{speaker.title}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{speaker.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
