import { useMemo, useState } from 'react';

import { isFolder } from '../helpers/isFolder';
import { DocumentTypeOrFolder } from '../types';

type UseDocumentSearchReturn = {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	result: DocumentTypeOrFolder[];
	defaultSearchTerm?: string;
};

type UseDocumentSearchProps = {
	defaultValue?: string;
	documents: DocumentTypeOrFolder[];
};

const searchRecursively = (items: DocumentTypeOrFolder[], searchTerm: string): DocumentTypeOrFolder[] => {
	const result: DocumentTypeOrFolder[] = [];

	if (searchTerm.length === 0) {
		return items;
	}

	items.forEach((item) => {
		if (isFolder(item)) {
			const matchingFiles = searchRecursively(item.files, searchTerm);
			if (matchingFiles.length > 0) {
				result.push({ ...item, files: matchingFiles });
			}
		} else if (item.name.toLowerCase().includes(searchTerm)) {
			result.push(item);
		}
	});

	return result;
};

export const useDocumentSearch = ({ defaultValue, documents }: UseDocumentSearchProps): UseDocumentSearchReturn => {
	const [searchTerm, setSearchTerm] = useState(defaultValue || '');

	const searchedDocs = useMemo(() => {
		const searchLower = searchTerm.toLowerCase();

		return searchRecursively(documents, searchLower);
	}, [documents, searchTerm]);

	return {
		searchTerm,
		setSearchTerm,
		result: searchedDocs,
	};
};
