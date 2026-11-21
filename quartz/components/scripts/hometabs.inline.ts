function initHomeReveal() {
  const buttons = document.querySelectorAll<HTMLElement>("[data-reveal-target]")
  buttons.forEach((btn) => {
    const targetId = btn.dataset.revealTarget
    const target = targetId ? document.getElementById(targetId) : null
    if (!target) return

    btn.onclick = () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (target.hasAttribute("hidden")) {
        target.removeAttribute("hidden")
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })
        btn.textContent = "Hide ↑"
      } else {
        target.setAttribute("hidden", "")
        btn.textContent = "Book a slot →"
      }
    }
  })
}

initHomeReveal()

// Cal.com's own vendor bootstrap snippet (kept close to their original shape so
// future updates from their embed generator can be dropped in with minimal diff).
function initCalEmbed() {
  if (!document.getElementById("my-cal-inline") || window.__calEmbedInitialized) return
  window.__calEmbedInitialized = true

  const w = window as unknown as Record<string, any>
  ;(function (C: any, A: string, L: string) {
    const p = (a: any, ar: any) => a.q.push(ar)
    const d = C.document
    C.Cal =
      C.Cal ||
      function (...ar: any[]) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement("script")).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = (...apiAr: any[]) => p(api, apiAr)
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ["initNamespace", namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
  })(w, "https://app.cal.com/embed/embed.js", "init")

  w.Cal("init", "consultation", { origin: "https://cal.com" })
  w.Cal.ns.consultation("inline", {
    elementOrSelector: "#my-cal-inline",
    calLink: "YOUR-CAL-USERNAME/consultation",
    config: { layout: "month_view" },
  })
  w.Cal.ns.consultation("ui", { hideEventTypeDetails: false, layout: "month_view" })
}

initCalEmbed()
