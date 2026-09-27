import { useEffect, useState } from 'react'

// Deteksi apakah aplikasi sudah ter-install (standalone), supaya tombol
// tidak nag berulang di home screen.
function isInstalled() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    window.navigator.standalone === true
  )
}

function isIos() {
  const ua = window.navigator.userAgent
  return /iPad|iPhone|iPod/.test(ua) && !window.MSStream
}

function InstallButton() {
  const [prompt, setPrompt] = useState(null)
  const [installed, setInstalled] = useState(isInstalled)
  const [note, setNote] = useState('')

  useEffect(() => {
    const onBeforeInstall = (e) => {
      // Chrome hanya mau nampilin dialog install kalau kita preventDefault
      e.preventDefault()
      setPrompt(e)
    }
    const onInstalled = () => {
      setInstalled(true)
      setPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  // Sudah ter-install -> jangan tampilkan apa-apa.
  if (installed) return null

  const onClick = async () => {
    if (!prompt) {
      // Safari iOS tidak punya beforeinstallprompt, kasih langkah manual.
      setNote('Tap the Share icon, then "Add to Home Screen".')
      return
    }
    prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') {
      setInstalled(true)
    } else {
      setNote('Install dismissed. You can add it later from the browser menu.')
    }
    setPrompt(null)
  }

  return (
    <div className="install">
      <button type="button" className="install-btn" onClick={onClick}>
        Install app
      </button>
      {!prompt && isIos() && (
        <span className="install-hint">
          No install button here? Use Share → Add to Home Screen.
        </span>
      )}
      {note && <span className="install-hint">{note}</span>}
    </div>
  )
}

export default InstallButton
