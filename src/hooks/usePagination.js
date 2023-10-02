import { useEffect, useState } from "react";

export const usePagination = (data) => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [data, rowsPerPage]);

    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;

    const currentData = data.slice(startIdx, endIdx);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const pageRange = `${Math.min(startIdx + 1, data.length)}-${Math.min(endIdx, data.length)} of ${
        data.length
    }`;

    return {
        currentPage,
        currentData,
        totalPages,
        nextPage,
        prevPage,
        pageRange,
        rowsPerPage,
        setRowsPerPage,
    };
};
