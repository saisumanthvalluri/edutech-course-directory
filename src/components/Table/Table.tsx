import { CourseDto } from "../../types/courses";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./table.css";

const Table = ({ courses }: { courses: CourseDto[] }) => {
	return (
		<div className="table-container">
			<table className="table">
				<thead className="table_header">
					<tr>
						<th>Course Name</th>
						<th>Instructor</th>
						<th>Category</th>
						<th>Duration</th>
						<th>Rating</th>
						<th>Status</th>
						<th>Created On</th>
					</tr>
				</thead>

				<tbody className="table_body">
					{courses.map((item: CourseDto) => (
						<tr key={item.id} className="table_row">
							<td>{item.courseName}</td>
							<td>{item.instructor}</td>
							<td>{item.category}</td>
							<td>{item.duration}</td>
							<td>{item.rating}</td>
							<td>
								<ProgressBar filled={item?.status} />
							</td>
							<td>
								{new Date(item.timestamp).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
									weekday: "short",
								})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
