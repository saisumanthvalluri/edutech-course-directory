import classes from "./pagination.module.css";

const Pagination = ({
	total,
	currentPage,
	onChangePage,
}: {
	total: number;
	currentPage: number;
	onChangePage: (page: number) => void;
}) => {
	return total > 1 ? (
		<div className={classes?.pagination}>
			<button disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)}>
				Prev
			</button>
			{Array.from({ length: total }).map((_, index) => (
				<button
					key={`page-${index + 1}`}
					className={currentPage === index + 1 ? classes?.active : ""}
					onClick={() => onChangePage(index + 1)}>
					{index + 1}
				</button>
			))}
			<button disabled={currentPage === total} onClick={() => onChangePage(currentPage + 1)}>
				Next
			</button>
		</div>
	) : null;
};

export default Pagination;
