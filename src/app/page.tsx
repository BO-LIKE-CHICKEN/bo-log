import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          {`Between 'bbo-log' and 'bo-log', where diligent records lay the
          groundwork for moments of unexpected success.`}
        </h1>
      </div>
      <div>
        <Link href="/post/development-habits">링크: 마크다운 스타일 테스트 페이지</Link>
      </div>
    </main>
  );
}
