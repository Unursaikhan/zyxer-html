import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";

type PaggProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  last: number;
};
export const Pagg = ({ page, setPage, last }: PaggProps) => {
  return (
    <Pagination className="lg:justify-end justify-center px-0 lg:px-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              page === 1 ? "" : setPage((prev) => prev - 1);
            }}
            href="#"
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className={
              page === 1 ? "border border-black dark:border-white" : "border-0"
            }
            onClick={() => page !== 1 && setPage(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className={page > 3 ? "flex" : "hidden"} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className={page < 3 ? "hidden" : "flex"}
            onClick={() => setPage((prev) => prev - 1)}
          >
            {page - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              page === 1 ? setPage(2) : "";
            }}
            className={
              page === 1
                ? "border-none"
                : "border border-black dark:border-white"
            }
          >
            {page === 1 ? 2 : page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem className={page === last ? "hidden" : "flex"}>
          {page === 1 ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink href="#" onClick={() => setPage(page + 1)}>
              {page + 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem className={page >= last - 1 ? "hidden" : "flex"}>
          <PaginationEllipsis className={page === 1 ? "hidden" : "flex"} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => setPage(last)}
            className={page >= last - 1 ? "hidden" : "flex"}
          >
            {last}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => {
              page === last ? "" : setPage((prev) => prev + 1);
            }}
          ></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
