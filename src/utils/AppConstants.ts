import arrowDownIcon from "../assets/common/arrow_down.svg";

export const courseNames = [
	"React Basics",
	"React Advanced",
	"Vue Basics",
	"Vue Advanced",
	"Typescript Basics",
	"Typescript Advanced",
	"Node.js Basics",
	"Node.js Advanced",
	"MongoDB Basics",
	"MongoDB Advanced",
	"GraphQL Basics",
	"GraphQL Advanced",
	"Python Basics",
	"Python Advanced",
	"Java Basics",
	"Java Advanced",
	"Go Basics",
	"Go Advanced",
	"Ruby Basics",
	"Ruby Advanced",
	"Swift Basics",
];

export const instructors = [
	"John Doe",
	"Jane Doe",
	"Mark Johnson",
	"Emily Johnson",
	"David Brown",
	"Sarah Brown",
	"Michael Scott",
	"Diana Prince",
	"Robert K. Niven",
	"Lily White",
	"Ethan Black",
	"Olivia Green",
];

export const duration = ["2 weeks", "4 weeks", "6 weeks", "8 weeks", "10 weeks"];

export const categories = ["Frontend", "Backend", "Database"];

export const rating = [1, 2, 3, 3.5, 4, 4.5, 5];

export const courseStatus = [0, 10, 25, 30, 40, 52, 62, 70, 85, 90, 100];

const AppConstants = Object.freeze({
	common: {
		arrowDown: arrowDownIcon,
	},

	filters: {
		categories: {
			name: "categories",
			options: [
				{ label: "All Categories", value: "all" },
				...categories.map((category) => ({
					label: category,
					value: category,
				})),
			],
		},
		duration: {
			name: "duration",
			options: [
				{ label: "All Durations", value: "all" },
				...duration.map((item) => ({
					label: item,
					value: item,
				})),
			],
		},
		instructors: {
			name: "instructors",
			options: [
				{ label: "All Instructors", value: "all" },
				...instructors.map((item) => ({
					label: item,
					value: item,
				})),
			],
		},
		ratingSort: {
			name: "ratingSort",
			options: [
				{ label: "Rating descending", value: "desc" },
				{ label: "Rating ascending", value: "asc" },
			],
		},
	},
});

export default AppConstants;
