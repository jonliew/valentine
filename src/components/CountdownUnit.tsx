interface IProps {
	value: number;
	label: string;
}

export function CountdownUnit(props: IProps) {
	const { value, label } = props;
	return (
		<div className="flex flex-col items-center border-4 rounded-md md:w-24 w-16 py-4">
			<div className="text-4xl font-bold">{value}</div>
			<div className="text-sm">{label}</div>
		</div>
	)
}