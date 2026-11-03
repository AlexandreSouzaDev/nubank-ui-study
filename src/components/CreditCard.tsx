import { useEffect, useRef, useState } from 'react';

const canTilt = (): boolean =>
  typeof window.matchMedia === 'function' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function CreditCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const [tilt] = useState(canTilt);
  const [visible, setVisible] = useState(false);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const move = (e: React.PointerEvent) => {
    if (!tilt) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = cardRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.classList.remove('rest');
      el.style.setProperty('--ry', `${(((clientX - r.left) / r.width - 0.5) * 16).toFixed(1)}deg`);
      el.style.setProperty('--rx', `${(-((clientY - r.top) / r.height - 0.5) * 16).toFixed(1)}deg`);
    });
  };

  const leave = () => {
    cancelAnimationFrame(raf.current);
    const el = cardRef.current;
    if (!el) return;
    el.classList.add('rest');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="stage" onPointerMove={move} onPointerLeave={leave}>
      <div className="ccard" ref={cardRef} aria-label="Cartão ilustrativo">
        <div className="rowc"><b>Nubank</b><span>Crédito</span></div>
        <div className="num" aria-live="polite">{visible ? '5502 1234 9087 4821' : '•••• •••• •••• 4821'}</div>
        <div className="rowc"><span>ALEXANDRE S SOUZA</span><span>12/31</span></div>
      </div>
      <button className="reveal" aria-pressed={visible} onClick={() => setVisible((v) => !v)}>
        {visible ? 'Ocultar número' : 'Mostrar número'}
      </button>
    </div>
  );
}
