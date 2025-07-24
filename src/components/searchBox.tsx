import clsx from "clsx";
import { memo } from "react";

interface ISearchBoxProps {
  onChange: (value: string) => void;
  className?: string;
}

function SearchBox({ onChange, className }: ISearchBoxProps) {
  console.log("SearchBox rendered");

  return (
    <input
      type="text"
      placeholder="Search Books..."
      onChange={(e) => onChange(e.target.value)}
      className={clsx("rounded-md border border-gray-300 p-2", className)}
    />
  );
}

export default memo(SearchBox);
