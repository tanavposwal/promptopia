"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("s", value);
    } else {
      params.delete("s");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  })

  return (
    <div className="w-full px-24 py-3 flex items-center justify-center">
      <input
        type="text"
        className="w-9/12 px-4 py-3 border rounded-xl shadow-lg outline-none hover:border-secondary-foreground transition-colors"
        placeholder="Search from titles"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
