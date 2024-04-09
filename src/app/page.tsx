import { containerStyle, innerContainerStyle } from './styles.css';

export default function HomePage() {
  return (
    <section className={containerStyle}>
      <div className={innerContainerStyle}>
        <div>
          <h1>
            {`Between 'bbo-log' and 'bo-log', where diligent records lay the
          groundwork for moments of unexpected success.`}
          </h1>
        </div>
      </div>
    </section>
  );
}
