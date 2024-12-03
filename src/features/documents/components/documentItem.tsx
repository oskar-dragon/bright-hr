import type { DocumentTypeOrFolder } from '../types';
import { isFolder } from '../helpers/isFolder';

type DocumentItemProps = {
	item: DocumentTypeOrFolder;
	isOpen: boolean;
	onToggleFolder: (name: string) => void;
};

const DocumentItem = ({ item, isOpen, onToggleFolder }: DocumentItemProps) => {
	const handleClick = () => {
		if (isFolder(item)) {
			onToggleFolder(item.name);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	return (
		<div>
			<div
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				role={isFolder(item) ? 'button' : 'listitem'}
				tabIndex={0}
				aria-expanded={isFolder(item) ? isOpen : undefined}
				className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
			>
				<span className="w-8 text-gray-500">{isFolder(item) ? '📁' : '📄'}</span>
				<span className="flex-1">{item.name}</span>
				<span className="text-sm text-gray-500">{new Date(item.added).toLocaleDateString()}</span>
			</div>

			{isFolder(item) && isOpen && item.files && (
				<div className="ml-8 border-l-2 border-gray-200">
					{item.files.map((file) => (
						<DocumentItem key={file.name} item={file} isOpen={false} onToggleFolder={onToggleFolder} />
					))}
				</div>
			)}
		</div>
	);
};

export default DocumentItem;
