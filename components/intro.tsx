import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Vivek Maithani
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Engineer, Problem Solver, Value Investor
        <br/>
        <a
          href="https://www.linkedin.com/in/vivek-maithani/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          LinkedIn
        </a>
      </h4>
    </section>
  )
}

export default Intro
