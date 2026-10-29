import type { ComponentPropsWithoutRef } from 'react'

import './Button.css'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`button button--${variant} ${className}`.trim()}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? 'Aguarde...' : children}
    </button>
  )
}

export default Button