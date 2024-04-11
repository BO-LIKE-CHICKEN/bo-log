'use client';

import Spline, { SplineEvent } from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';
import { splineContainerStyle } from './styles.css';

export default function App() {
  const router = useRouter();

  function onMouseUp(e: SplineEvent) {
    if (e.target.name === 'Text') {
      router.push('/');
    }
  }

  return (
    <div className={splineContainerStyle}>
      <Spline onMouseUp={onMouseUp} scene="https://prod.spline.design/Kn1uQRyYZBOhpfWa/scene.splinecode" />
    </div>
  );
}
