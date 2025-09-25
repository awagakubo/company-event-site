import { Calendar, MapPin, Wifi } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { eventMeta } from '../data/event';

export function Venue() {
  return (
    <section className="bg-slate-950 py-20" id="venue">
      <Container>
        <SectionTitle eyebrow="Venue" alignment="left">
          会場アクセス & オンライン視聴
        </SectionTitle>
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">本社 5F ホール (対面)</h3>
              <p className="mt-2 text-sm text-slate-300">
                〒123-4567 東京都渋谷区○○ 1-2-3 Harmony Tower 5F。渋谷駅より徒歩7分、バス停「青葉坂」下車すぐ。
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Google Mapsで「Harmony Tower」で検索してください。
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  受付開始 12:30 / Wi-Fi・電源完備。
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">オンライン配信</h3>
              <p className="mt-2 text-sm text-slate-300">
                イベント前日に参加者に配信URLと視聴手順をメールでお送りします。リアルタイムで質問やコメントが可能なインタラクティブ配信です。
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-200">
                <Wifi className="h-4 w-4 text-primary" /> 安定したネットワーク環境での視聴を推奨します。
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-950 p-6">
            <div className="rounded-2xl bg-slate-950/70 p-6 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Check List</p>
              <ul className="mt-4 space-y-3">
                <li>会社PCの場合はVPN接続を確認</li>
                <li>オンライン参加者は事前にチャットアカウントを準備</li>
                <li>ワークショップ参加者はノートPC・充電器持参</li>
                <li>受付で社員証スキャンを実施</li>
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-white/5 bg-slate-900/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Quick Info</p>
              <dl className="mt-4 space-y-3 text-sm text-slate-200">
                <div className="flex justify-between">
                  <dt>イベント名</dt>
                  <dd>{eventMeta.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>開催日時</dt>
                  <dd>3/28(木) {eventMeta.time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>想定服装</dt>
                  <dd>ビジネスカジュアル</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
