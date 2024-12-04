import { forwardRef } from 'react';

import { cn } from '../libs/cn';

type SelectOption = {
	label: string;
	value: string;
};

type SelectProps = {
	options: SelectOption[];
	onChange: (value: SelectOption['value']) => void;
	placeholder?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ options, value, onChange, className, placeholder, ...props }, ref) => {
		const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value);
		};

		return (
			<select
				ref={ref}
				value={value}
				onChange={handleChange}
				className={cn(
					'h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					'disabled:cursor-not-allowed disabled:opacity-50',
					'md:text-sm',
					className,
				)}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		);
	},
);

export { Select };
export type { SelectOption, SelectProps };
