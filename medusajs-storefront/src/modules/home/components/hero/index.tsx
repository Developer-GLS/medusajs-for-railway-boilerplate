import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle hero-container">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-9xl leading-10 text-ui-fg-base font-normal"
          >
                   Phal
          </Heading>
          <Heading
            level="h2"
            className="text-9xl leading-10 text-ui-fg-subtle font-normal"
          >
            
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
