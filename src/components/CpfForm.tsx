import { useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { isValidCPF, maskCPF } from '../lib/cpf';

type Status = { kind: 'idle' | 'error' | 'ok'; text: string };

export function CpfForm() {
  const msgId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle', text: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(maskCPF(e.target.value));
    setStatus({ kind: 'idle', text: '' });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      setStatus({ kind: 'error', text: 'Informe seu CPF para continuar.' });
      inputRef.current?.focus();
    } else if (!isValidCPF(value)) {
      setStatus({ kind: 'error', text: 'CPF inválido. Confira os números e tente de novo.' });
      inputRef.current?.focus();
    } else {
      setStatus({ kind: 'ok', text: 'CPF válido! Neste estudo, o cadastro termina aqui.' });
    }
  };

  return (
    <>
      <form className="cpf" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="cpf" className="sr-only">CPF</label>
          <input
            id="cpf"
            ref={inputRef}
            value={value}
            onChange={onChange}
            inputMode="numeric"
            autoComplete="off"
            maxLength={14}
            placeholder="Digite seu CPF"
            aria-invalid={status.kind === 'error'}
            aria-describedby={msgId}
          />
        </div>
        <button className="btn light" type="submit">Continuar</button>
      </form>
      <p id={msgId} className={`msg ${status.kind === 'idle' ? '' : status.kind === 'error' ? 'err' : 'ok'}`} role="status" aria-live="polite">
        {status.text}
      </p>
    </>
  );
}
