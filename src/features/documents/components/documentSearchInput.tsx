import { Input } from '../../../components/input';

type DocumentSearchProps = {
	searchTerm: string;
	onSearchChange: (value: string) => void;
};

const DocumentSearchInput = ({ searchTerm, onSearchChange }: DocumentSearchProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};

	return (
		<Input
			type="text"
			placeholder="Search documents..."
			value={searchTerm}
			onChange={handleChange}
			aria-label="Search documents"
		/>
	);
};

export default DocumentSearchInput;
