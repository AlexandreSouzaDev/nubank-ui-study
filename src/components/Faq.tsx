const ITEMS = [
  { q: 'Preciso pagar para abrir a conta?', a: 'Neste estudo, nada é cobrado: o site é fictício e serve apenas para demonstrar interface e interações.' },
  { q: 'Meus dados são enviados para algum lugar?', a: 'Não. A validação do CPF acontece só no seu navegador e nada é armazenado ou transmitido.' },
  { q: 'Este site tem relação com a Nubank?', a: 'Não. É um projeto acadêmico de estudo de interface, sem vínculo com a empresa.' },
];

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="h2c">
      <div className="wrap">
        <h2 id="h2c">Dúvidas frequentes</h2>
        <div style={{ maxWidth: 780, marginTop: 24 }}>
          {ITEMS.map((i) => (
            <details key={i.q} name="faq"><summary>{i.q}</summary><p>{i.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
