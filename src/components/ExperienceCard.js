import cx from 'classnames';

const ExperienceCard = ({ organisation, website, logo, location, roles, isMostRecent }) => {

  const renderSkillTags = (role) => {
    const skillTagClasses = {
      stack: 'bg-charcoal border-charcoalTint',
      testing: 'bg-dustyYellow border-dustyYellowTint',
      ciTools: 'bg-darkSalmon border-darkSalmonTint',
    }
    const skillTags = [];
      Object.keys(role.tech).forEach(key => (
        role.tech[key].forEach(skill => (
          skillTags.push(<li className={cx("inline-block border-2 drop-shadow-md py-1 px-2 m-[2px] text-slate-200 rounded-se-xl rounded-es-xl rounded-ss-sm rounded-ee-sm",
            { [skillTagClasses[key]]: key }
          )}>{skill}</li>)
        ))
      ));

    return <ul className="mb-6">{skillTags}</ul>
  }
  
  const renderRolesBreakdown = () => {
    return roles.map((role, index) => (
      <div className={cx("border-borderColor", { "border-t pt-4 mt-8": index > 0 })}>
        <div className="mb-4">
          <h4 className="whitespace-nowrap font-light text-2xl">{role.title}</h4>
          {role.department && <span className="block text-md italic">Team: {role.department}</span>}
          <span className="font-light">{role.from} - {role.to || "Present"}</span>
        </div>
        {renderSkillTags(role)}
        <div>
          <p>{role.summary}</p>
          {role.keypoints.map(point => <li className="my-3">{point}</li>)}
        </div>
      </div>
    ));
  }

  return (
    <div className={cx("w-full mx-auto p-4 pt-6 pb-10 border-b-2 border-borderColor border-dashed md:flex", { 'border-t-2': isMostRecent })}>
      <div className="relative md:w-1/4 md:shrink-0">
        <div className="flex items-center hidden md:block md:static md:w-[125px] md:h-auto md:mx-auto">
          <img src={logo} alt={`${organisation} logo`}/>
        </div>
        <div className="text-center mb-4 md:my-4">
          <h3 className="text-3xl md:text-2xl">{organisation}</h3>
          <li className="text-md font-light list-none">{location}</li>
          <li className="text-md list-none">{website}</li>
        </div>
      </div>
      <div>
        {renderRolesBreakdown()}
      </div>
    </div>
  )
}

export default ExperienceCard