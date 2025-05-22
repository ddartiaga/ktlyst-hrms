"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
};

export default function Pagination({
    currentPage,
    totalItems,
    itemsPerPage,
}: PaginationProps) {
    const searchParams = useSearchParams();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", pageNumber.toString());
        return `?${params.toString()}`;
    };

    return (
        <div className="d-flex align-items-center">
            <div>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
                <i className="bi bi-arrow-right ms-2 fw-semibold" />
            </div>
            <div className="ms-auto">
                <nav aria-label="Page navigation" className="pagination-style-4">
                    <ul className="pagination mb-0">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <Link
                                href={createPageURL(currentPage - 1)}
                                className="page-link"
                                aria-disabled={currentPage === 1}
                            >
                                Prev
                            </Link>
                        </li>

                        {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                            const pageNum = Math.min(
                                Math.max(1, currentPage - 1) + i,
                                totalPages
                            );
                            return (
                                <li
                                    key={pageNum}
                                    className={`page-item ${currentPage === pageNum ? "active" : ""
                                        }`}
                                >
                                    <Link href={createPageURL(pageNum)} className="page-link">
                                        {pageNum}
                                    </Link>
                                </li>
                            );
                        })}

                        <li
                            className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                }`}
                        >
                            <Link
                                href={createPageURL(currentPage + 1)}
                                className="page-link"
                                aria-disabled={currentPage === totalPages}
                            >
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}