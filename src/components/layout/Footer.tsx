import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerServices = [
  { to: '/website-creation', label: 'Website Creation', num: '01' },
  { to: '/ai-seo-optimization', label: 'AI SEO Optimization', num: '02' },
  { to: '/project-management-consulting', label: 'PM Consulting', num: '03' },
]

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="container-swiss pb-10 pt-24 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow">Footer / 00</p>
            <h2 className="display-lg mt-6 text-white">
              Let's build
              <br />
              something deliberate.
            </h2>
            <Link
              to="/contact"
              className="btn-primary mt-10"
            >
              Start a project <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow">Services</p>
            <ul className="mt-6 space-y-3">
              {footerServices.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between text-neutral-400 transition-colors hover:text-white"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="mono text-[10px] text-neutral-500">{item.num}</span>
                      <span className="text-sm">{item.label}</span>
                    </span>
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <li>support@tandtpartners.com</li>
              <li>New York, USA</li>
              <li className="mono text-xs uppercase text-neutral-500">
                Est. 2026
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 overflow-hidden">
          <p className="display-xl whitespace-nowrap text-white opacity-[0.06]">
            T&T PARTNERS · T&T PARTNERS
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            © {new Date().getFullYear()} T&T Partners — All rights reserved
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Business Meets Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
