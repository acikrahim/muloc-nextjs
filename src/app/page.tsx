import NavbarLandingPage from './components/NavbarLandingPage'
import coolSky from './assets/cool_sky.jpg'
const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage></NavbarLandingPage>

      <section
        className='w-screen h-off-navbar lg:px-32'
      >
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <div className='grid grid-cols-2 gap-4 w-full'>
            <div className='col-span-2 md:col-span-1'>
              <p>No more hassle.</p>
              <p>We are the third force.</p>
              <p>

              </p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <p>test</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage;