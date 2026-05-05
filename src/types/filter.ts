export type FilterType = {
	label: string;
	value: string;
};

export type FilterItem = {
	id: number | string;
	name: string;
	options: FilterType[];
	value: FilterType;
	setValue: (val: FilterType) => void;
};

export type FilterStore = {
	category: FilterType;
	duration: FilterType;
	instructor: FilterType;
	ratingSort: FilterType;
	setCategory: (category: FilterType) => void;
	setDuration: (duration: FilterType) => void;
	setInstructor: (instructor: FilterType) => void;
	setRatingSort: (ratingSort: FilterType) => void;
};
