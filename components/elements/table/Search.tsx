"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Search({ search, placeholder = "Search..." }: { search: string, placeholder?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(search);
    const isPushingRef = useRef(false);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            // Prevent update if we're already pushing
            if (query !== search && !isPushingRef.current) {
                isPushingRef.current = true;
                router.replace(`?${createQueryString("search", query)}`)
                isPushingRef.current = false;
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query, search, router, createQueryString]);

    // Sync local query if the prop changes externally (e.g., back button)
    useEffect(() => {
        if (!isPushingRef.current && search !== query) {
            setQuery(search);
        }
    }, [search, query]);

    return (
        <input
            type="text"
            className="form-control form-control-sm"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
}
