
const TOC_SELECTOR = `.js-toc`
const STUCK_CLASS = `is-stuck`
const SENTINEL_CLASS = `article-long__toc-sentinel`

const init = () => {
  // https://developers.google.com/web/updates/2017/09/sticky-headers
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  if (!`IntersectionObserver` in window) return
  const toc = document.querySelector( TOC_SELECTOR )
  if (!toc) return
  const tocSentinel = document.createElement( `div` )
  tocSentinel.classList.add( SENTINEL_CLASS )
  toc.insertBefore( tocSentinel, toc.firstChild )

  const observerCb = (entries)  => {
    const tocSentinelEntry = entries[ 0 ]
    const isStuck = tocSentinelEntry.intersectionRatio === 0
    const classMethod = isStuck ? `add` : `remove`
    toc.classList[ classMethod ]( STUCK_CLASS )
  }
  const observer = new IntersectionObserver(observerCb, {
    threshold: 1,
  })
  observer.observe( tocSentinel)
}

export default init
