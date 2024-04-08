import Link from 'next/link';
import { containerStyle } from './styles.css';

export default function HomePage() {
  return (
    <section className={containerStyle}>
      <div>
        <h1>
          {`Between 'bbo-log' and 'bo-log', where diligent records lay the
          groundwork for moments of unexpected success.`}
        </h1>
      </div>
      <div>
        <Link href="/posts">목록으로 가기</Link>
      </div>
    </section>
  );
}
