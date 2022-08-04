const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h5>Hello, {user?.name}</h5>
    </section>
  );
};
export default Dashboard;
