import { Container } from '../components/Container';

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-sm text-slate-400">
      <Container>
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Harmony Project Office.</p>
          <div className="flex justify-center gap-4">
            <a href="#agenda" className="hover:text-white">
              スケジュール
            </a>
            <a href="#speakers" className="hover:text-white">
              登壇者
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#registration" className="hover:text-white">
              参加登録
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
