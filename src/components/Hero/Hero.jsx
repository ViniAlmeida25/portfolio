import heroImage from './hero.svg';



function HeroSection() {
  return (
    <div className="mt-10 m-auto flex max-sm:flex-wrap justify-center pt-10  pl-10 pr-10 gap-20">
      <div className="max-w-md">
        <h1 className="mt-4 text-3xl font-bold">Hello, I'm Vinicius Almeida.</h1>
        <p className="mt-4">I'm a certified expert in Notion, helping busy people like you be more organized and productive. </p>
        <p className="mt-2">I design and optimize Notion templates to be clutter-free, so you can focus on what's important and get things done.  </p>
      </div>
      <div  className="flex align-bottom mt-5 max-sm:hidden">
        <img src={heroImage} width="400"/>
      </div>
    </div>
  )
}

export default HeroSection
