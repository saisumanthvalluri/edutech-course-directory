import { create } from "zustand";
import { CoursesStore } from "../types/courses";
import { fetchCourses } from "../api/courses";

const useCoursesStore = create<CoursesStore>((set) => ({
	courses: [],
	loading: false,
	error: null,

	async loadCourses(retries = 3) {
		const attempt = async (remaining: number): Promise<void> => {
			set({ loading: true, error: null });
			try {
				const data = await fetchCourses();
				set({ courses: data.data, loading: false });
			} catch (e: any) {
				if (remaining > 0) {
					return attempt(remaining - 1);
				}
				set({ error: e?.message ?? "Unknown error", loading: false });
			}
		};
		return attempt(retries);
	},
}));

export default useCoursesStore;
