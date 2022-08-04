const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h2>Dashboard</h2>
      <h5>Hello, {user?.name}</h5>
    </section>
  );
};
export default Dashboard;
