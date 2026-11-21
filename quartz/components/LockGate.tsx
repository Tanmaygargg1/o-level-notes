// @ts-ignore
import lockScript from "./scripts/lock.inline"
import style from "./styles/lock.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export interface LockGateOptions {
  // slugs that stay public (no password needed), e.g. "index" for the home page
  publicSlugs: string[]
  // SHA-256 hex digest of the password — never store the plaintext password here
  passwordHash: string
  title?: string
  subtitle?: string
}

export default ((opts: LockGateOptions) => {
  const LockGate: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData.slug ?? ""
    const isLocked = !opts.publicSlugs.includes(slug)

    return (
      <div id="lock-gate" data-active={isLocked ? "true" : "false"} data-hash={opts.passwordHash}>
        <form id="lock-gate-form" class="lock-gate-card">
          <p class="lock-gate-title">{opts.title ?? "This content is locked"}</p>
          <p class="lock-gate-subtitle">
            {opts.subtitle ?? "Enter the password to view these notes."}
          </p>
          <input
            id="lock-gate-input"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Password"
            aria-label="Password"
          />
          <button type="submit">Unlock</button>
          <p id="lock-gate-error" role="alert"></p>
        </form>
      </div>
    )
  }

  LockGate.css = style
  LockGate.beforeDOMLoaded = lockScript
  return LockGate
}) satisfies QuartzComponentConstructor<LockGateOptions>
