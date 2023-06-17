import { useEffect, useState } from 'react'
import { useBooks } from '../../context'
import { searchBooks } from '../../utils'
import { BookCard } from '../../components'
import { useNavigate } from 'react-router-dom/dist'

export default function SearchPage() {
  const [seachParm,setSearch] = useState("")
  const [filteredBooks, setFilterdBooks] = useState([]);
  const navigate = useNavigate();

  const {booksData:{books}} =useBooks()
  useEffect(()=>{
    setFilterdBooks(searchBooks(books,seachParm))
  },[seachParm])

  return (
    <div  style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding:"5rem"
    }}>
        <input type="text" placeholder="search books by name Author description" onChange={(e)=>setSearch(e.target.value)} 
        style={{
          padding:"1rem"
        }}
        />
        <button onClick={()=>navigate("/")}>Main page</button>
{  filteredBooks?.length>0  && <div style={{ border: "1px solid blue",    margin:" 0 auto" }}>
          <ol>
            {filteredBooks?.map((book) => {
              const { id } = book;
              return (
                <li key={id}>
                  <BookCard book={book} />
                </li>
              );
            })}
          </ol>
        </div>}
    </div>
  )
}
