import { useBooks } from "../context";

export default function BookCard({ book }) {
  const {  name, author, img, state, description } = book;
  const { booksDispatch } = useBooks();

  const ChangeState = (e) => {
    const newState = e.target.value;
    const payload = {
      book,
      newState,
      fromState: state,
    };

    switch (newState) {
      case "read":
        booksDispatch({ type: "MOVE_TO_READ", payload });
        break;
      case "currentlyReading":
        booksDispatch({ type: "MOVE_TO_CURRENTLY_READING", payload });
        break;
      case "wantsToRead":
        booksDispatch({ type: "MOVE_TO_WANTS_TO_READ", payload });
        break;
      case "none":
        // Set the book state to "none" or handle as needed
        booksDispatch({ type: "none", payload });
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}
    >
      <h3>Name:{name}</h3>
      <span>Author:{author}</span>
      <p>Description:{description}</p>
      <img src={img} alt="book" style={{width:"200px"}}/>
      <p>{state}</p>
      <select name="books" id="books" onChange={ChangeState}>
        <option >change state</option>
        <option value="none">none</option>
        {state !== "read" && <option value="read">read</option>}
        {state !== "currentlyReading" && (
          <option value="currentlyReading">currently Reading</option>
        )}
        {state !== "wantsToRead" && (
          <option value="wantsToRead">want's To Read</option>
        )}
      </select>
    </div>
  );
}
