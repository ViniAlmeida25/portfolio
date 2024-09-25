import heroImage from './hero.svg';



function HeroSection() {
  return (
    <div className="mt-10 max-sm:mt-5 m-auto flex max-sm:flex-wrap justify-center pt-10  pl-10 pr-10 gap-20">
      <div>
        <p className="mt-4 text-4xl font-bold">
          Hello,
        </p>
        <h1 className='text-4xl font-bold mt-1'>I'm Vinicius Luiz.</h1>
        <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p className="mt-2">This is my personal portfolio website here you can see some of my projects.</p>
      </div>
      <div  className="flex align-bottom mt-5 max-sm:hidden">
        <img src={heroImage} width="400"/>
      </div>
    </div>
  )
}

export default HeroSection
