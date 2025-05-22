"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface SortOption {
    value: string;
    label: string;
}

interface SortProps {
    currentSort: string;
    currentOrder: "asc" | "desc";
    options: SortOption[];
}

export default function Sort({
    currentSort,
    currentOrder,
    options,
}: SortProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (field: string) => {
        const newOrder = currentSort === field && currentOrder === "asc" ? "desc" : "asc";
        if (currentSort === field && currentOrder === newOrder) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", field);
        params.set("order", newOrder);
        router.replace(`?${params.toString()}`);
    };

    return (
        <div className={`dropdown my-1`}>
            <button
                className="btn btn-primary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Sort By
            </button>
            <ul className="dropdown-menu">
                {options.map((option) => (
                    <li key={option.value}>
                        <button
                            className="dropdown-item d-flex justify-content-between align-items-center"
                            onClick={() => handleSort(option.value)}
                        >
                            {option.label}
                            {currentSort === option.value && (
                                <i className={`ri-arrow-${currentOrder === "asc" ? "up" : "down"}-line ms-2`} />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}