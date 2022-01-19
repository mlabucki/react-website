import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import Card from '../UI/Card';

const UserProfile = () => {
  return (
    <Card>
    <section className={classes.profile}>
      <h2>Your User Profile</h2>
      <ProfileForm />
    </section>
    </Card>
  );
};

export default UserProfile;