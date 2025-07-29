import { useCallback, useState } from "react";
import { ALL_BOOKS } from "./data";
// import { Button } from "@/components/ui/button";
import SearchBox from "../components/searchBox";

export default function UseCallback() {
  const [books, setBooks] = useState(ALL_BOOKS);
  const [throwError, setThrowError] = useState(false);

  const handleSearch = useCallback(
    (searchTerm: string) => {

      const filteredBooks = ALL_BOOKS.filter((book) =>
        book.title
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );
      setBooks(filteredBooks);
    },
    [books]
  );

  const handleShuffle = () => {
    setBooks(books.slice().sort(() => Math.random() - 0.5));
  };

  if (throwError) {
    throw new Error("💥 code bigriyo vai tero");
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      {/* Shuffle Books & Search */}
      <div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={handleShuffle}>Shuffle Books</button>

          <SearchBox onChange={handleSearch} />
          <button
            onClick={() => setThrowError(true)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Trigger UI Error
          </button>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <li key={book.id} className="rounded-md border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// // use in the App.tsx 

// import { FallbackComponent } from "./components/FallbackComponents";
// import UseCallback from "./useCallBack/callBack";
// // import UseMemo from "./useMemo/memo";
// // import { ErrorBoundary } from "./errorBoundary/ErrorBoundary";
// import { ErrorBoundary } from "react-error-boundary";
// const App = () => {
//   return (
//     <div>
//       <ErrorBoundary FallbackComponent={FallbackComponent} onReset={() =>{
//         window.location.reload()
//       }}>
//         <UseCallback />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;
