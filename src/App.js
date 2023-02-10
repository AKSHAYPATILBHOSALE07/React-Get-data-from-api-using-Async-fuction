import "./styles.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const apiLink = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    async function fetchAPI() {
      fetch(apiLink)
        .then((res) => res.json())
        .then((res) => setUser(res))
        .catch((err) => console.log(err));
    }
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <p>This is a text</p>
      {user?.map((data, i) => {
        return <p key={i}> {data.email}</p>;
      })}
    </div>
  );
}
export default App;
