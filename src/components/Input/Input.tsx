import { useId } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import './Input.css'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string
  error?: string
}

function Input({
  label,
  error,
  id,
  required,
  className = '',
  'aria-describedby': describedBy,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  const descriptionIds =
    [describedBy, error ? errorId : undefined].filter(Boolean).join(' ') ||
    undefined

  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={inputId}>
        {label}
        {required && (
          <span className="input-field__required"> (obrigatório)</span>
        )}
      </label>

      <input
        {...props}
        id={inputId}
        required={required}
        className={`input-field__control ${className}`.trim()}
        aria-invalid={error ? true : props['aria-invalid']}
        aria-describedby={descriptionIds}
      />

      {error && (
        <p id={errorId} className="input-field__error">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input