function UserProfile({ user }) {
  console.log(user);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}

export default UserProfile;
