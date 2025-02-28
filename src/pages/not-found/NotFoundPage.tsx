import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  const toHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Not found</h1>
      <button onClick={toHomePage}>Home page</button>
    </div>
  );
}
