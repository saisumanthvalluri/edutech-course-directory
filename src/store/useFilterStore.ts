import { create } from "zustand";
import AppConstants from "../utils/AppConstants";
import { FilterStore } from "../types/filter";

const { categories, duration, instructors } = AppConstants?.filters || {};

const useFilterStore = create<FilterStore>((set) => ({
	category: categories?.options[0] || "",
	duration: duration?.options[0] || "",
	instructor: instructors?.options[0] || "",
	ratingSort: AppConstants?.filters?.ratingSort?.options[0] || "",

	setCategory: (category) => set({ category }),
	setDuration: (duration) => set({ duration }),
	setInstructor: (instructor) => set({ instructor }),
	setRatingSort: (ratingSort) => set({ ratingSort }),
}));

export default useFilterStore;

export type FilterState = ReturnType<typeof useFilterStore>;
