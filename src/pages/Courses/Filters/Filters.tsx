import DynamicSelect from "../../../components/DynamicSelect/DynamicSelect";
import { FilterItem } from "../../../types/filter";
import "./filter.css";

const Filters = ({ filters }: { filters: FilterItem[] }) => {
	return (
		<section className="filter_sec">
			{filters.map((filter) => (
				<DynamicSelect
					key={filter.id}
					options={filter.options}
					value={filter.value}
					setterFn={filter.setValue}
				/>
			))}
		</section>
	);
};

export default Filters;
