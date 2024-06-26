import demoImg from '../assets/demo.jpg';

export default function Work() {
  return (
    <div className= 'maindiv'>
      <h1>Portfolio</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      <div className='maincontainer'>

      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/WeatherReport/">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="weather app" />
          </a>
          <div className="container">
            <p className="caption">Weather App</p>
          </div>
        </div>
      </div>

      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/AccessibleWebsite/">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="Accessible Website" />
          </a>
          <div className="container">
            <p className="caption">Horiseon Demo Site</p>
          </div>
        </div>
      </div>

      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/PasswordGen/">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="Password generator app" />
          </a>
          <div className="container">
            <p className="caption">Password Generator</p>
          </div>
        </div>
      </div>

      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/Restaurant/public/index.html">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="Restaurant site" />
          </a>
          <div className="container">
            <p className="caption">Restaurant Website Project</p>
          </div>
        </div>
      </div>

      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/WeatherReport/">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="weather app" />
          </a>
          <div className="container">
            <p className="caption">Weather App</p>
          </div>
        </div>
      </div>
      
      <div className="imgcontainer">
        <div className="exampleimg">
          <a href="https://hobbsab.github.io/WeatherReport/">
            <img className="portfolioImg img-thumbnail" src={demoImg} alt="weather app" />
          </a>
          <div className="container">
            <p className="caption">Weather App</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
