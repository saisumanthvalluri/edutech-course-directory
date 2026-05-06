import { fetchCourses } from "../api/courses";
import { PaginatedCoursesResponse } from "../types/courses";

export const loadCourses = (
	retries: number = 3,
	page: number = 1,
	limit: number = 10,
	category: string,
	duration: string,
	instructor: string,
	ratingSort: string,
) => {
	const attempt = async (remaining: number): Promise<PaginatedCoursesResponse | undefined> => {
		try {
			const data = await fetchCourses(page, limit, category, duration, instructor, ratingSort);
			return data as PaginatedCoursesResponse;
		} catch (e: any) {
			if (remaining > 0) {
				return attempt(remaining - 1);
			}
		}
	};
	return attempt(retries);
};
