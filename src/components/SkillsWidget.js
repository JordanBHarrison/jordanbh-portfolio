import cx from 'classnames';

const SkillsWidget = ({ topSkills }) => {
  const renderTechSection = () => {
    const experience = topSkills.map((skill, index) => (
        <div className="relative mb-12">
          <div
            className={cx(
              "relative h-[65px] bg-gold overflow-hidden py-2 px-4 w-[250px] border-2 border-goldTint before:content-[''] before:absolute before:-top-12 before:right-[32px] before:w-[35px] before:h-[250%] before:bg-gradient-to-r before:from-gold before:via-goldHighlight before:to-gold before:transform before:scale-y-2 before:rotate-45",
              {
                "before:!right-[110px]": index === 1,
                "before:!right-[185px]": index === 2,
              }
            )}>
              <p className="relative leading-tight text-xl font-bold">{skill.name}</p>
              <p className="relative text-sm text-slate-800">{skill.experienceYears} years</p>
          </div>
          <div 
            className={cx(
              "absolute bottom-4 left-1/4 h-8 w-2/4 rounded-full border-2 border-charcoalTint overflow-hidden drop-shadow-xl z-10 before:content-[''] before:h-full before:absolute before:bg-dustyYellow before:left-0",
              {
                "before:w-3/6": skill.skillStrength > 0 && skill.skillStrength <= 5,
                "before:w-4/6": skill.skillStrength > 5 && skill.skillStrength <= 7,
                "before:w-5/6": skill.skillStrength > 7 && skill.skillStrength <= 9,
                "before:w-11/12": skill.skillStrength >= 10,
              }
            )}
          />
        </div>
    ));

    return experience;
  }

  return (
    <div className="px-2 py-8 max-w-[80%] mx-auto">
      {renderTechSection()}
    </div>
  )
}

export default SkillsWidget