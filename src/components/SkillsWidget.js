const SkillsWidget = ({ topSkills, techExperience }) => {
  const renderTechSection = () => {
    const experience = techExperience.map(technology => (
      <div className="my-4">
        <label className="w-[120px]">{technology.name}:</label>
        <div className="flex items-center justify-center h-8 bg-offWhite w-full rounded-full">{technology.experienceYears} years</div>
      </div>
    ));

    return <div className="grow px-2">{experience}</div>;
  }

  return (
    <div className="flex items-center bg-blue-200 px-2 py-8">
      {renderTechSection()}
      <div className="w-1/2 bg-blue-400 shrink-0">
        Top skills
      </div>
    </div>
  )
}

export default SkillsWidget