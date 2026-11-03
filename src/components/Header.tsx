import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#cartao', label: 'Cartão' },
  { href: '#simulador', label: 'Simulador' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 861px)') : null;
    const onMq = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq?.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      mq?.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <header id="top" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Nubank, início">Nubank</a>
        <button className="burger" aria-expanded={open} aria-controls="links" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        <nav className={`links ${open ? 'open' : ''}`} id="links" aria-label="Principal" onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}>
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a className="btn light" href="#abrir" style={{ padding: '12px 22px' }}>Abrir conta</a>
        </nav>
      </div>
    </header>
  );
}
