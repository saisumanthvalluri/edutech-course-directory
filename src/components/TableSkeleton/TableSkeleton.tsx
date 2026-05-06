import "./tableSkeleton.css";

const SkeletonRow = () => (
	<tr className="row">
		<td className="cell">
			<div className="bone date" />
		</td>

		{/* <td className="cell">
			<div className="categoryCell">
				<div className="bone iconCircle" />
				<div className="bone categoryName" />
			</div>
		</td> */}

		<td className="cell">
			<div className="bone amount" />
		</td>

		<td className="cell">
			<div className="bone amount" />
		</td>

		<td className="cell">
			<div className="bone amount" />
		</td>

		<td className="cell">
			<div className="bone amount" />
		</td>

		<td className="cell">
			<div className="bone amount" />
		</td>

		{/* <td className="cell">
			<div className="progressCell">
				<div className="bone progressBar" />
				<div className="bone progressLabel" />
			</div>
		</td> */}

		{/* <td className="cell">
			<div className="actions">
				<div className="bone actionBtn" />
				<div className="bone actionBtn" />
			</div>
		</td> */}
	</tr>
);

export default function TableSkeleton({ count = 5 }) {
	return (
		<div className="wrapper">
			<table className="table">
				<thead>
					<tr className="headerRow">
						{["Course Name", "Instructor", "Category", "Duration", "Rating", "Created On"].map((h) => (
							<th key={h} className="th">
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: count }).map((_, i) => (
						<SkeletonRow key={i} />
					))}
				</tbody>
			</table>
		</div>
	);
}
