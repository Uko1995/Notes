import Header from "./Header";
import Main from "./Body";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Footer() {
  const date = new Date().toUTCString();
  return (
    <>
      <footer>
        <p>Notes App</p>
        <p>{date}</p>
      </footer>
    </>
  );
}
