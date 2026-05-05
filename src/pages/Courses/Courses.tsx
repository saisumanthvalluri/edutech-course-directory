import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import { fetchCourses } from "../../api/courses";
import Footer from "../../components/Footer/Footer";
import "./courses.css";
import Filters from "./Filters/Filters";
import useFilterStore from "../../store/useFilterStore";
import AppConstants from "../../utils/AppConstants";
import Pagination from "../../components/Pagination/Pagination";
import { CourseDto } from "../../types/courses";

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
		fetchCourses(
			pagination.page,
			pagination.limit,
			category.value,
			duration.value,
			instructor.value,
			ratingSort.value,
		).then((courses) => {
			setCourses(courses.data);
			setPagination({
				total: courses.total,
				page: courses.page,
				limit: courses.limit,
				totalPages: courses.totalPages,
			});
		});
		setLoading(false);
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
	return (
		<>
			<Header />
			<main className="courses_main">
				<section className="page_cta">
					<h1 className="page_title">Courses</h1>
				</section>
				<Filters filters={filters} />
				<Table courses={courses} />
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
