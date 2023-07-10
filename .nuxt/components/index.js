export const CaseStudy = () => import('../../components/CaseStudy.vue' /* webpackChunkName: "components/case-study" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const Newsletter = () => import('../../components/Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c))
export const Playground = () => import('../../components/Playground.vue' /* webpackChunkName: "components/playground" */).then(c => wrapFunctional(c.default || c))
export const Scripts = () => import('../../components/Scripts.vue' /* webpackChunkName: "components/scripts" */).then(c => wrapFunctional(c.default || c))
export const Services = () => import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const TopBar = () => import('../../components/TopBar.vue' /* webpackChunkName: "components/top-bar" */).then(c => wrapFunctional(c.default || c))
export const Trusted = () => import('../../components/Trusted.vue' /* webpackChunkName: "components/trusted" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
