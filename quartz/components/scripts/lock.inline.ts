async function sha256Hex(text: string) {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

const UNLOCK_KEY = "lock-gate-unlocked"

function applyLockState() {
  const gate = document.getElementById("lock-gate")
  if (!gate) return

  // keep the overlay a direct child of <body> so it always sits on top,
  // regardless of where it lands in the component tree
  if (gate.parentElement !== document.body) {
    document.body.appendChild(gate)
  }

  const isLockedPage = gate.dataset.active === "true"
  const unlocked = sessionStorage.getItem(UNLOCK_KEY) === "1"

  if (!isLockedPage || unlocked) {
    gate.classList.add("lock-gate-hidden")
    document.body.style.overflow = ""
  } else {
    gate.classList.remove("lock-gate-hidden")
    document.body.style.overflow = "hidden"
    const input = document.getElementById("lock-gate-input") as HTMLInputElement | null
    input?.focus()
  }
}

applyLockState()

if (!window.__lockGateBound) {
  window.__lockGateBound = true

  document.addEventListener("submit", async (e) => {
    const form = e.target as HTMLElement | null
    if (!form || form.id !== "lock-gate-form") return
    e.preventDefault()

    const gate = document.getElementById("lock-gate")
    const input = document.getElementById("lock-gate-input") as HTMLInputElement | null
    const error = document.getElementById("lock-gate-error")
    if (!gate || !input) return

    const expected = gate.dataset.hash
    const attempt = await sha256Hex(input.value)

    if (attempt === expected) {
      sessionStorage.setItem(UNLOCK_KEY, "1")
      if (error) error.textContent = ""
      applyLockState()
    } else {
      if (error) error.textContent = "Incorrect password. Try again."
      input.value = ""
      input.focus()
    }
  })
}
