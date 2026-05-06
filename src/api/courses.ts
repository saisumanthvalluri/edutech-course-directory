import { CourseDto, PaginatedCoursesResponse } from "../types/courses";
import { categories, courseNames, courseStatus, duration, instructors, rating } from "../utils/AppConstants";

function generateCourses(count: number): CourseDto[] {
	const now = Date.now();
	const courses: CourseDto[] = [];

	for (let i = 0; i < count; i++) {
		const offset = Math.floor(Math.random() * 1000 * 60 * 60 * 72);
		courses.push({
			id: String(i + 1),
			courseName: courseNames[Math.floor(Math.random() * courseNames.length)],
			instructor: instructors[Math.floor(Math.random() * instructors.length)],
			duration: duration[Math.floor(Math.random() * duration.length)],
			category: categories[Math.floor(Math.random() * categories.length)],
			rating: rating[Math.floor(Math.random() * rating.length)],
			status: courseStatus[Math.floor(Math.random() * courseStatus.length)],
			timestamp: new Date(now - offset).toISOString(),
		});
	}

	return courses;
}

// export async function fetchCourses(): Promise<CourseDto[]> {
// 	// simulate network
// 	await new Promise((resolve) => setTimeout(resolve, 200));

// 	// 5% random error
// 	if (Math.random() < 0.05) {
// 		throw new Error("Random backend failure");
// 	}

// 	return generateCourses(300);
// }

const ALL_COURSES = generateCourses(50);

export async function fetchCourses(
	page: number = 1,
	limit: number = 10,
	category?: string,
	duration?: string,
	instructor?: string,
	ratingSort?: string,
): Promise<PaginatedCoursesResponse> {
	// simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 300));

	// simulate random error
	if (Math.random() < 0.05) {
		throw new Error("Random backend failure");
	}

	let allCourses = ALL_COURSES;
	// apply filters
	if (category) {
		allCourses = category !== "all" ? allCourses.filter((course) => course.category === category) : allCourses;
	}
	if (duration) {
		allCourses = duration !== "all" ? allCourses.filter((course) => course.duration === duration) : allCourses;
	}
	if (instructor) {
		allCourses = instructor !== "all" ? allCourses.filter((course) => course.instructor === instructor) : allCourses;
	}
	if (ratingSort) {
		allCourses = allCourses.sort((a, b) => {
			if (ratingSort === "desc") {
				return b.rating - a.rating;
			} else if (ratingSort === "asc") {
				return a.rating - b.rating;
			}
			return 0;
		});
	}

	const total = allCourses.length;
	const totalPages = Math.ceil(total / limit);

	// ensure valid page
	const safePage = Math.max(1, Math.min(page, totalPages));

	const startIndex = (safePage - 1) * limit;
	const endIndex = startIndex + limit;

	const paginatedData = allCourses.slice(startIndex, endIndex);

	return {
		data: paginatedData,
		total,
		page: safePage,
		limit,
		totalPages,
	};
}
