import { CpfForm } from './components/CpfForm';
import { CreditCard } from './components/CreditCard';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Simulator } from './components/Simulator';

const FEATURES = [
  { icon: '◎', title: 'Sem anuidade', text: 'O cartão não cobra mensalidade, nem para pedir a segunda via.' },
  { icon: '↻', title: 'Rende todo dia', text: 'O saldo da conta rende automaticamente, com resgate quando quiser.' },
  { icon: '⚑', title: 'Você no comando', text: 'Bloqueie o cartão, ajuste o limite e acompanhe gastos em tempo real.' },
];

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Pular para o conteúdo</a>
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="h1">
          <div className="wrap">
            <div>
              <h1 id="h1">Um jeito simples de cuidar do seu dinheiro.</h1>
              <p>Conta digital, cartão sem anuidade e rendimento todo dia. Comece informando seu CPF.</p>
              <CpfForm />
            </div>
            <CreditCard />
          </div>
        </section>
        <section id="cartao" aria-labelledby="h2a">
          <div className="wrap">
            <h2 id="h2a">Menos burocracia, mais controle.</h2>
            <p className="lead">Tudo o que você precisa no app, sem tarifa escondida.</p>
            <div className="grid3">
              {FEATURES.map((f) => (
                <article className="feat" key={f.title}>
                  <div className="ico" aria-hidden="true">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Simulator />
        <Faq />
        <section className="cta" id="abrir" aria-labelledby="h2d">
          <div className="wrap">
            <h2 id="h2d">Pronto para começar?</h2>
            <a className="btn light" href="#top">Informar meu CPF</a>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <span>Projeto acadêmico de interface. Sem vínculo com a Nubank.</span>
          <span>Feito por Alexandre Souza</span>
        </div>
      </footer>
    </>
  );
}
