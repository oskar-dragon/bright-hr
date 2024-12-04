import { act, renderHook } from '@testing-library/react';

import { documents } from '../../constants/mockData';
import { useDocumentSearch } from '../useDocumentSearch';

describe('hook: useDocumentSearch', () => {
	it('should initialise with an empty search term', () => {
		const { result } = renderHook(() => useDocumentSearch({ documents }));

		expect(result.current.searchTerm).toBe('');
	});

	it('should initialise with a defaultValue as a search term when provided', () => {
		const { result } = renderHook(() => useDocumentSearch({ documents, defaultValue: 'hello' }));

		expect(result.current.searchTerm).toBe('hello');
	});

	it('should update search term when setSearchTerm is called', () => {
		const { result } = renderHook(() => useDocumentSearch({ documents }));

		act(() => result.current.setSearchTerm('Hello'));

		expect(result.current.searchTerm).toBe('Hello');
	});
});
