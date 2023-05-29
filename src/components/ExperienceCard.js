import cx from 'classnames';

const ExperienceCard = ({ organisation, website, logo, location, roles }) => {

  const renderSkillTags = (role) => {
    const result = [];
      Object.keys(role.tech).forEach(key => (
        role.tech[key].forEach(skill => (
          result.push(<li className={cx("inline-block py-1 px-[4px] mx-1 my-1 text-slate-200 rounded",
            {
              'bg-slate-800': key === 'stack',
              'bg-blue-800': key === 'testing',
              'bg-green-700': key === 'ciTools',
            }
          )}>{skill}</li>)
        ))
      ));

    return (
      <div className="py-1">
        <ul className="mb-2 text-md">{result}</ul>
      </div>
    )
  }
  
  const renderRolesBreakdown = () => {
    return roles.map((role, index) => (
      <div className={cx("border-slate-500", { "border-t pt-2": index > 0 })}>
        <div className="mb-4 md:text-center">
          <h4 className="text-2xl whitespace-nowrap font-light">{role.title}</h4>
          {role.department && <span className="block text-md italic">Team: {role.department}</span>}
          <span className="font-light">{role.from} - {role.to || "Present"}</span>
        </div>
        {renderSkillTags(role)}
        <p>{role.summary}</p>
        {role.keypoints.map(point => <li className="my-3">{point}</li>)}
      </div>
    ));
  }

  return (
    <div className="w-full mx-auto mb-5 p-4 border-t-2 border-stone-300 border-dashed md:flex">
      <div className="relative md:w-1/4 md:shrink-0 md:p-4">
        <div className="flex items-center hidden md:block md:static md:w-[125px] md:h-auto md:mx-auto">
          <img src={logo} alt={`${organisation} logo`}/>
        </div>
        <div className="text-center mb-8 md:my-4">
          <h3 className="text-3xl md:text-2xl">{organisation}</h3>
          <li className="text-md list-none">{location}</li>
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