import { useHistorySearch } from "@/core/hooks";
import { useSearch } from "@/core/hooks/useSearch";
import { HistoryIcon } from "@/presentation/assets/HistoryIcon";
import { useNavigate } from "react-router-dom";

export const Search: React.FC = () => {
  const navigate = useNavigate();

  const { history, setOpen, open, clearItem, addToHistory } =
    useHistorySearch();
  const { onSubmit } = useSearch({ addToHistory });

  return (
    <form
      className="flex items-center max-w-2xl mx-auto w-full relative"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="flex-grow p-2 border border-gray-300 rounded-md"
        name="search"
        autoComplete="off"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
      {open && history?.length > 0 ? (
        <div className="bg-gray-100 p-2 rounded-md absolute top-[40px] mt-1 w-full z-10">
          <ul className="space-y-1">
            {history.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-1 bg-white rounded border hover:bg-gray-100"
                onMouseDown={() =>
                  navigate(`/search/${encodeURIComponent(item)}`)
                }
              >
                <p className="flex items-center gap-2">
                  <HistoryIcon /> {item}
                </p>
                <p
                  className="cursor-pointer"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    clearItem(item);
                  }}
                >
                  X
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button className="p-2 bg-blue-500 rounded-r-md hover:bg-blue-600 text-black">
        Search
      </button>
    </form>
  );
};
