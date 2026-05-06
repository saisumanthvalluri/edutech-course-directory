
import { useEffect, useRef, useState } from "react";
import "./dynamicSelect.css";
import { FilterType } from "../../types/filter";
import AppConstants from "../../utils/AppConstants";

const DynamicSelect = ({
	options,
	value,
	setterFn,
}: {
	options: { label: string; value: string }[];
	value: FilterType;
	setterFn: (value: FilterType) => void;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	const handleClick = (item: FilterType) => {
		setterFn(item);
		setOpen(false);
	};

	return (
		<div className="dynamic_select" onClick={() => setOpen(!open)} ref={ref}>
			<div className="select_content">
				<span className="placeholder">{value?.label || options[0].label}</span>
				<img src={AppConstants?.common?.arrowDown} className={open ? "rotate" : ""} alt="arrow down" />
			</div>
			{open && (
				<ul className="opt_list">
					{options.map((item) => (
						<li
							key={`dynamic_select_${item.value}`}
							className={`opt_item ${value?.value === item.value ? "active" : ""}`}
							onClick={(e) => {
								e.stopPropagation();
								handleClick(item);
							}}>
							{item.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DynamicSelect;
