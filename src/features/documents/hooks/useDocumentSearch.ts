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

export const useDocumentSearch = ({ defaultValue, documents }: UseDocumentSearchProps): UseDocumentSearchReturn => {
	const [searchTerm, setSearchTerm] = useState(defaultValue || '');

	return {
		searchTerm,
		setSearchTerm,
		result: documents,
	};
};
