import config from './userData/config';
import ExperienceCard from './components/ExperienceCard';
import { SocialIcon } from 'react-social-icons';

const App = () => {
  const renderSocialLinks = () => {
    const socialLinks = config.links.map(link => (
      <SocialIcon url={link} bgColor="#2d2d2d" />
    ));

    return (
      <div className="flex gap-2 mb-4 text-center">{socialLinks}</div>
    )
  }

  return (
    <div className="App">
      <div className="max-w-screen-lg mx-auto text-leafgreen">
        <div className="justify-between py-20 px-12 items-center bg-offwhite text-leafgreen drop-shadow-xl md:flex lg:rounded-b-xl">
          <div>
            <h1 className="text-[36px] mb-2">Jordan Bartholomew-Harrison</h1>
            <span className="text-2xl font-light block">Frontend Web Developer</span>
          </div>
          <div className="shrink-0">
            {renderSocialLinks()}
            <span className="text-xl font-thin block">Email: <span className="font-normal">j.b.harrison@outlook.com</span></span>
            <span className="text-xl font-thin block">Phone: <span className="font-normal">07823332517</span></span>
          </div>
        </div>
        <div className="py-8 md:flex">
          <div className="shrink-0 md:w-1/3 ">
            <div className="w-[220px] h-[220px] mx-auto rounded-full bg-profile-image bg-cover shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" />
          </div>
          <p>
            I'm an experienced full stack developer, specialising in developing frontend web applications in Javascript, always learning and making use of the latest React 
            and Javascript features. Experienced in using multiple testing methods from my time working with highly scalable, high traffic systems as well as smaller more
            cutting edge projects, where I have been heavily involved in driving the initial growth and direction of new products. I have experience working with a range of
            cloud computing platforms and have always been enthusiastic to work with new systems and pick up new techniques. Some of my other interests include basketball 
            and fitness and for a few years now have been a keen investor in the tech space.
          </p>
        </div>
        <div>
          <h2 className="text-center text-3xl font-thin my-2">Experience</h2>
          {config.jobs.map((job) => (
            <ExperienceCard
              organisation={job.organisation}
              website={job.website}
              logo={job.logo}
              location={job.location}
              roles={job.roles}
            />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
