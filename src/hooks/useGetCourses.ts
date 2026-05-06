import useCoursesStore from "../store/useCoursesStore";

const useGetCourses = () => {
	const { courses, loading, error } = useCoursesStore();
	return { courses, loading, error };
};
