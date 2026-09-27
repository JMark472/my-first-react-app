interface ProfileCardProps {
  name: string;
  course: string;
  school: string;
}

function ProfileCard({
  name,
  course,
  school,
}: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-circle">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>
      <p>{course}</p>
      <span>{school}</span>
    </div>
  );
}

export default ProfileCard;