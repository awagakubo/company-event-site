import { Container } from '../components/Container';
import { stats } from '../data/event';

export function Stats() {
  return (
    <section className="bg-slate-950 py-16" aria-label="イベントの規模">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
