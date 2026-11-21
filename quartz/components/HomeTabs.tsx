// @ts-ignore
import homeTabsScript from "./scripts/hometabs.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// No markup of its own — it just wires up the reveal button and Cal.com
// embed that live in the home page's markdown content. A no-op on every
// other page, and safe to re-run on every load and SPA navigation.
const HomeTabs: QuartzComponent = () => null

HomeTabs.beforeDOMLoaded = homeTabsScript

export default (() => HomeTabs) satisfies QuartzComponentConstructor
