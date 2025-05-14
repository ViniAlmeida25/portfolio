import heroImage from './hero.svg';



function HeroSection() {
  return (
    <div className="mt-10 max-sm:mt-5 m-auto flex max-sm:flex-wrap justify-center pt-10  pl-10 pr-10 gap-20">
      <div>
        <p className="mt-4 text-4xl font-bold text-neutral-800">
          Olá, eu sou
        </p>
        <h1 className='text-4xl font-bold mt-1 text-neutral-800'>Vinicius Almeida.</h1>
        <p className="mt-4">Transforming complex data into clear insights, explore my projects and discover how data can drive smarter decisions.</p>
      </div>
      <div  className="flex align-bottom mt-5 max-sm:hidden">
        <img src={heroImage} width="400"/>
      </div>
    </div>
  )
}

export default HeroSection
