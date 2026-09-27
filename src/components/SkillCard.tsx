interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default SkillCard;