import { Search } from "lucide-react";

import { Input } from "@metallicjs/ui/components/input";

export default function SearchInput({
  placeholder = "Search...",
  onSearch,
}: {
  placeholder?: string;
  onSearch: (query: string) => void;
}) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-9 h-9 rounded-md"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
