import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";
import { loadCourses } from "../../services/Course.service";
import useFilterStore from "../../store/useFilterStore";
import { CourseDto } from "../../types/courses";
import AppConstants from "../../utils/AppConstants";
import "./courses.css";
import Filters from "./Filters/Filters";

const Courses = () => {
	const [courses, setCourses] = useState<CourseDto[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [pagination, setPagination] = useState<{ total: number; page: number; limit: number; totalPages: number }>({
		total: 0,
		page: 1,
		limit: 10,
		totalPages: 0,
	});

	const { category, duration, instructor, ratingSort, setCategory, setDuration, setInstructor, setRatingSort } =
		useFilterStore();

	useEffect(() => {
		setLoading(true);
		const getCourses = async () => {
			try {
				const data = await loadCourses(
					3,
					pagination.page,
					pagination.limit,
					category.value,
					duration.value,
					instructor.value,
					ratingSort.value,
				);
				setCourses(data?.data || []);
				setPagination({
					total: data?.total || 0,
					page: data?.page || 0,
					limit: data?.limit || 0,
					totalPages: data?.totalPages || 0,
				});
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.error(error);
				alert("Failed to load courses! please try again.");
			}
		};

		getCourses();
	}, [pagination.page, pagination.limit, category.value, duration.value, instructor.value, ratingSort.value]);

	const filters = [
		{
			id: 1,
			name: "Category",
			value: category,
			setValue: setCategory,
			options: AppConstants?.filters?.categories?.options,
		},
		{
			id: 2,
			name: "Instructor",
			value: instructor,
			setValue: setInstructor,
			options: AppConstants?.filters?.instructors?.options || [],
		},
		{
			id: 3,
			name: "Duration",
			value: duration,
			setValue: setDuration,
			options: AppConstants?.filters?.duration?.options || [],
		},
		{
			id: 4,
			name: "Rating Sort",
			value: ratingSort,
			setValue: setRatingSort,
			options: AppConstants?.filters?.ratingSort?.options || [],
		},
	];

	const NoCoursesView = () => {
		return (
			<div className="no_courses">
				<h1 className="no_courses_title">No courses found! please try adjusting filters.</h1>
			</div>
		);
	}

	return (
		<>
			<Header />
			<main className="courses_main">
				<section className="page_cta">
					<h1 className="page_title">Courses</h1>
				</section>
				<Filters filters={filters} />
				{loading ? (
					<TableSkeleton />
				) : courses.length > 0 ? (
					<Table courses={courses} />
				) : (
					<NoCoursesView />
				)}
				<Pagination
					currentPage={pagination?.page}
					onChangePage={(setPage) => setPagination((prev) => ({ ...prev, page: setPage }))}
					total={pagination?.totalPages}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Courses;
