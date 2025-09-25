import { ArrowRight, CalendarPlus, Users } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { eventMeta } from '../data/event';

export function Registration() {
  return (
    <section id="registration" className="bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 py-20">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-950/90 p-10 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Registration</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {eventMeta.name} 参加登録
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                先着順で会場参加枠をご用意しています。オンライン参加の方も事前登録制です。部署を越えてチームメンバーを誘い合いましょう。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4 text-primary" /> 締切: 2024年3月21日(木) 12:00
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" /> 参加対象: 全社員 (パートナー含む)
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Button as="a" href="https://example.com/form" target="_blank" rel="noreferrer">
                フォームで申し込む
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button as="a" variant="ghost" href="mailto:events@example.com">
                担当チームに連絡する
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
