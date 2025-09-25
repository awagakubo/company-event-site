# Harmony Summit 2024 内部イベント特設サイト

社内イベント「Harmony Summit 2024」の特設ランディングページ。React (Vite) + TypeScript + Tailwind CSS構成で作成しています。

## 必要環境
- Node.js 18 以上
- npm (または pnpm/yarn)

## セットアップ
```bash
npm install
```

## 開発サーバー
```bash
npm run dev
```
`http://localhost:5173` にアクセスして確認します。

## ビルド
```bash
npm run build
```

```bash
npm run preview
```
でローカル確認ができます。

## デプロイ候補
- GitHub Pages: `npm run build` → `dist/` を `gh-pages` ブランチに配信。
- Vercel / Netlify: レポジトリを接続し、ビルドコマンドを `npm run build`、出力を `dist` に設定。

## ページ構成
- Hero: イベントの概要とCTA
- Agenda: タイムライン
- Speakers: 登壇者紹介
- Venue: 会場情報とオンライン視聴案内
- FAQ: よくある質問
- Registration: 申し込みCTA

必要に応じて文言やデータ (`src/data/event.ts`) を更新してください。
