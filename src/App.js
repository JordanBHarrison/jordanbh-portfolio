import config from './userData/config';
import ExperienceCard from './components/ExperienceCard';
import { SocialIcon } from 'react-social-icons';
import SkillsWidget from './components/SkillsWidget';

const App = () => {
  const skillsWidgetConfig = {
    techExperience: [
      {
        name: "ReactJs",
        experienceYears: 10,
        skillStrength: 9,
        forceHighlight: false,
      },
      {
        name: "NodeJs",
        experienceYears: 4,
        skillStrength: 5,
        forceHighlight: false,
      },
      {
        name: "Javascript and HTML5",
        experienceYears: 12,
        skillStrength: 9,
        forceHighlight: false,
      }
    ],
    topSkills: ['']
  };

  const renderHeaderSection = () => (
    <div className="flex flex-col gap-8 justify-between py-12 px-4 items-center bg-offWhite text-leafgreen drop-shadow-xl md:px-12 md:py-20 md:gap-4 md:flex-row lg:rounded-b-xl">
      <div className="w-full md:w-auto leading-tight">
        <h1 className="text-[36px] mb-2">Jordan Bartholomew-Harrison</h1>
        <span className="text-2xl font-light block">Frontend Web Developer</span>
      </div>
      <div className="w-full shrink-0 md:w-auto">
        {renderSocialLinks()}
        <span className="text-xl font-thin block">Email: <span className="font-normal">j.b.harrison@outlook.com</span></span>
        <span className="text-xl font-thin block">Phone: <span className="font-normal">07823332517</span></span>
      </div>
    </div>
  );
  
  const renderSocialLinks = () => {
    const socialLinks = config.links.map(link => (
      <SocialIcon url={link} bgColor="#2d2d2d" />
    ));

    return (
      <div className="flex gap-2 mb-4 text-center">{socialLinks}</div>
    )
  }

  const renderProfileSection = () => (
    <div className="py-8 px-4 md:flex">
      <div className="shrink-0 mb-10 md:mb-0 md:w-1/3">
        <div className="w-[220px] h-[220px] mx-auto rounded-full bg-profile-image bg-cover shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" />
      </div>
      <p className="!leading-relaxed text-lg font-light md:text-xl">
        I'm an experienced full stack developer, specialising in developing frontend web applications in Javascript, always learning and making use of the latest React 
        and Javascript features. Experienced in using multiple testing methods from my time working with highly scalable, high traffic systems as well as smaller more
        cutting edge projects, where I have been heavily involved in driving the initial growth and direction of new products. I have experience working with a range of
        cloud computing platforms and have always been enthusiastic to work with new systems and pick up new techniques. Some of my other interests include basketball 
        and fitness and for a few years now have been a keen investor in the tech space.
      </p>
    </div>
  );

  const renderEducationSection = () => (
    <>
      <h2 className="text-center text-3xl font-thin my-2">Education</h2>
      <div className="px-4 py-8">
        <div className="mx-auto text-center list-none">
          <li className="text-2xl">Oxford Brookes University</li>
          <li className="text-md italic">2010 - 2014</li>
          <li className="text-xl font-bold">BSc Hons Software Engineering</li>
          <li className="text-lg">Attained: 2:1</li>
        </div>
      </div>
    </>
  );

  const renderExperienceSection = () => (
    <div className="relative mt-10">
      <h2 className="text-center text-3xl font-thin my-2">Experience</h2>
      {renderExperienceSectionKey()}
      {config.jobs.map((job, index) => (
        <ExperienceCard
          organisation={job.organisation}
          website={job.website}
          logo={job.logo}
          location={job.location}
          roles={job.roles}
          isMostRecent={!index}
        />)
      )}
    </div>
  );
  
  const renderExperienceSectionKey = () => (
    <div className="absolute italic -translate-y-[65%] bg-white p-4 right-4 border-2 border-borderColor border-dashed hidden md:block">
      <li className="list-none flex mb-2">
        <span className="block w-6 h-6 mr-1 bg-charcoal rounded-md" />: Main tech stack
      </li>
      <li className="list-none flex mb-2">
        <span className="block w-6 h-6 mr-1 bg-dustyYellow rounded-md" />: Testing
      </li>
      <li className="list-none flex mb-2">
        <span className="block w-6 h-6 mr-1 bg-darkSalmon rounded-md" />: CI tools
      </li>
    </div>
  );
  
  const renderProjectsSection = () => (
    <div className="relative px-4 py-6">
      <h2 className="text-center text-3xl font-thin mb-8">Projects</h2>
      <div className="flex items-center">
        <div className="w-1/2 shrink-0">
          <div className="w-[220px] h-[220px] mx-auto bg-profile-image bg-cover" />
        </div>
        <div className="my-4">
          <p>{config.projects[0].summary}</p>
          {config.projects[0].keypoints.map(point => <li className="my-3">{point}</li>)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="max-w-screen-lg mx-auto text-leafGreen">
        {renderHeaderSection()}
        {renderProfileSection()}
        {/* {<SkillsWidget topSkills={skillsWidgetConfig.topSkills} techExperience={skillsWidgetConfig.techExperience} />} */}
        {renderExperienceSection()}
        {/* {renderProjectsSection()} */}
        {renderEducationSection()}
      </div>
    </div>
  );
}

export default App;
