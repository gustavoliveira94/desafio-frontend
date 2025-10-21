import { useNavigate } from "react-router-dom";

interface UseSearchProps {
  addToHistory: (query: string) => void;
}

export const useSearch = ({ addToHistory }: UseSearchProps) => {
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("search") as string;

    if (query) {
      addToHistory(query);
      navigate(`/search/${query}`);
    }
  };

  return { onSubmit };
};
