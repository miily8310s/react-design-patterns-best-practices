interface IProps {
  connectedUser: any;
}

export const Dashboard = ({ connectedUser }: IProps) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {connectedUser.username}!</h1>
      <ul>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};
