export interface CourseDto {
	id: string;
	courseName: string;
	instructor: string;
	duration: string;
	category: string;
	rating: number;
	status: number;
	timestamp: string;
}

export interface PaginatedCoursesResponse {
	data: CourseDto[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export type CoursesStore = {
	courses: CourseDto[];
	loading: boolean;
	error: string | null;
	loadCourses: (retries?: number) => Promise<void>;
};
