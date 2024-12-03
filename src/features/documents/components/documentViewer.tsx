import { useState } from 'react';

import type { DocumentTypeOrFolder } from '../types';
import DocumentItem from './documentItem';

type DocumentViewerProps = {
	documents: DocumentTypeOrFolder[];
};

const DocumentViewer = ({ documents }: DocumentViewerProps) => {
	const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

	const toggleFolder = (name: string) => {
		const newOpenFolders = new Set(openFolders);
		if (newOpenFolders.has(name)) {
			newOpenFolders.delete(name);
		} else {
			newOpenFolders.add(name);
		}
		setOpenFolders(newOpenFolders);
	};

	return (
		<div className="space-y-6">
			<div className="rounded-lg bg-white p-6 shadow-lg">
				<div className="space-y-2">
					{documents.length > 0 ? (
						documents.map((item) => (
							<DocumentItem
								key={item.name}
								item={item}
								isOpen={openFolders.has(item.name)}
								onToggleFolder={toggleFolder}
							/>
						))
					) : (
						<span>No files or folders</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default DocumentViewer;
