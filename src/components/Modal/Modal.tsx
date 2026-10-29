import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'

import Button from '../Button/Button'

import './Modal.css'

type ModalProps = {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

function Modal({ open, title, children, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog || !open) return

    const previousFocus = document.activeElement

    if (!dialog.open) {
      dialog.showModal()
    }

    return () => {
      if (dialog.open) {
        dialog.close()
      }

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus()
      }
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <div className="modal__content">
        <h2 id={titleId}>{title}</h2>

        <div>{children}</div>

        <div className="modal__actions">
          <Button variant="secondary" onClick={onClose} autoFocus>
            Cancelar
          </Button>
        </div>
      </div>
    </dialog>
  )
}

export default Modal