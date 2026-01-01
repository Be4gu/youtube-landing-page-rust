import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Youtube, Play, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]' />
        <div className='absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background' />

        <div className='relative container mx-auto px-4 py-14 lg:py-24'>
          <div className='max-w-6xl mx-auto text-center space-y-8'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight animate-fade-in-up animation-delay-100'>
              Los <span className='text-primary'>Mejores Momentos</span> de Rust y <span className='text-[#53fc18]'> Kick</span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-200'>
              Raids épicos, PvP y fails. ¡Ahora incluyendo a los streamers de habla hispana!
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300'>
              <Button size='lg' className='text-lg px-8 py-6 gap-2 group' asChild>
                <a href='https://www.youtube.com/@best-rust-clips' target='_blank' rel='noopener noreferrer'>
                  <Youtube className='w-5 h-5 group-hover:scale-110 transition-transform' />
                  Suscríbete al Canal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section id='video' className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto space-y-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-4xl md:text-5xl font-bold text-balance'>Último Video</h2>
          </div>

          <Card className='overflow-hidden bg-card/50 backdrop-blur border-border/50'>
            <div className='aspect-video w-full'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/wCrcIWbvsho'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='w-full h-full'
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border/50 mt-16'>
        <div className='container mx-auto px-4 py-8'>
          <div className='text-center text-muted-foreground'>
            <p className='text-sm'>Created by Entrellaves</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
