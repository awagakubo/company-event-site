import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import dayjs from 'dayjs';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Container } from '../components/Container';
import { eventMeta } from '../data/event';

export function Hero() {
  const date = dayjs(eventMeta.date).format('YYYY年M月D日 (ddd)');

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-24">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(37,99,235,0.25),_transparent_50%)]" />
      </div>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Badge>Harmony Summit 2024</Badge>
              <span className="text-sm text-slate-300">部署横断イノベーションを加速する1日</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              つながりが変革を生む。<br />未来の働き方を共につくる日。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Harmony Summitは、部署の枠を超えてアイデアと知見を持ち寄る社内イベントです。2024年のテーマは「Co-Create the Future」。新プロジェクトの発表や最新ツールの体験、クロストークで共創のヒントを見つけましょう。
            </p>
            <dl className="mt-8 flex flex-wrap gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>
                  {date} / {eventMeta.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{eventMeta.location}</span>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button as="a" href={eventMeta.registrationUrl} className="text-sm">
                参加登録する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button as="a" variant="ghost" href="#agenda">
                当日の流れを見る
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">Highlights</div>
              <ul className="mt-6 space-y-5 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  新プロジェクト「Harmony OS」初公開
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  生成AI活用 × 現場のベストプラクティス共有
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  チーム横断ネットワーキング & ライトニングトーク
                </li>
              </ul>
              <div className="mt-8 rounded-2xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <p className="font-semibold text-white">ハイブリッド開催</p>
                <p className="mt-2 leading-relaxed">
                  会場参加は先着順・オンラインは誰でも気軽に参加可能。配信アーカイブも後日共有します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
