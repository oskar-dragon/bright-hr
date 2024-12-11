import { useMemo, useState } from 'react';

import { isFolder } from '../helpers/isFolder';
import { DocumentTypeOrFolder } from '../types';

export type SortBy = 'name' | 'date';

export type UseDocumentSortProps = DocumentTypeOrFolder[];
export type UseDocumentSortReturn = {
	sortBy: SortBy;
	setSortBy: (sort: SortBy) => void;
	sortedDocs: DocumentTypeOrFolder[];
};

function sortByName(documents: DocumentTypeOrFolder[]) {
	return documents
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		})
		.map((doc) => {
			if (isFolder(doc)) {
				doc.files = sortByName(doc.files);
			}
			return doc;
		});
}

function sortByDate(documents: DocumentTypeOrFolder[]): DocumentTypeOrFolder[] {
	return documents
		.sort((a, b) => new Date(a.added).getTime() - new Date(b.added).getTime())
		.map((doc) => {
			if (isFolder(doc)) {
				doc.files = sortByDate(doc.files);
			}
			return doc;
		});
}
export function useDocumentSort(documents: UseDocumentSortProps): UseDocumentSortReturn {
	const [sortBy, setSortBy] = useState<SortBy>('name');

	const sortedDocs = useMemo(() => {
		switch (sortBy) {
			case 'date':
				return sortByDate(documents);
			case 'name':
				return sortByName(documents);
			default:
				throw new Error(`Incorrect sort by value: "${sortBy}"`);
		}
	}, [documents, sortBy]);

	return {
		sortBy,
		setSortBy,
		sortedDocs,
	};
}
