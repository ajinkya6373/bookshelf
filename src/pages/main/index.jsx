import { useBooks } from "../../context";
import { BookCard } from "../../components";
import { useNavigate } from "react-router-dom/dist";
export default function MainPage() {
  const { booksData } = useBooks();
  const navigate = useNavigate();
  const { read, currentlyReading, wantsToRead } = booksData;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding:"1rem"
      }}
    >
      <button onClick={()=>navigate("/search")} >search books</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ border: "1px solid green" }}>
          <h3 style={{"textAlign": "center","color": "green"}}>Already Read </h3>
          <ol>
            {read.map((book) => {
              const { id } = book;
              return (
                <li key={id}>
                  <BookCard book={book} />
                </li>
              );
            })}
          </ol>
        </div>
        <div style={{ border: "1px solid blue" }}>
          <h3 style={{"textAlign": "center","color": "Blue"}}>Currently Reading </h3>
          <ol>
            {currentlyReading.map((book) => {
              const { id } = book;
              return (
                <li key={id}>
                  <BookCard book={book} />
                </li>
              );
            })}
          </ol>
        </div>
        <div style={{ border: "1px solid red" }}>
          <h3 style={{"textAlign": "center","color": "red"}}>Wants To Read </h3>
          <ol>
            {wantsToRead.map((book) => {
              const { id } = book;
              return (
                <li key={id}>
                  <BookCard book={book} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
