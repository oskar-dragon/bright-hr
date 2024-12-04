import { act, render, renderHook } from '@testing-library/react';

import { documents } from '../../constants/mockData';
import { DocumentTypeOrFolder } from '../../types';
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

	it('should return all documents when search is empty', () => {
		const { result } = renderHook(() => useDocumentSearch({ documents }));

		expect(result.current.result).toEqual(documents);
	});

	it('should return empty array when search result does not match', () => {
		const { result } = renderHook(() => useDocumentSearch({ documents }));

		act(() => result.current.setSearchTerm("random string that doesn't exist"));

		expect(result.current.result.length).toBe(0);
	});

	it('should return all documents that match search value', () => {
		const mockDocuments: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: "Helen's invoice",
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: "Joe' invoice",
				added: '2016-12-06',
			},
			{
				type: 'pdf',
				name: 'Expenses',
				added: '2016-12-06',
			},
		];

		const { result } = renderHook(() => useDocumentSearch({ documents: mockDocuments }));

		act(() => result.current.setSearchTerm('invoice'));

		const expected = mockDocuments.slice(0, 2);

		expect(result.current.result).toEqual(expected);
	});

	it.only('should recursively search through all nested folders', () => {
		const expected = [
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
			{
				type: 'folder',
				name: 'Misc',
				added: '2017-12-01',
				files: [
					{
						type: 'folder',
						name: 'Onboarding',
						added: '2017-05-02',
						files: [
							{
								type: 'doc',
								name: 'Holidays',
								added: '2017-05-02',
							},
						],
					},
				],
			},
		];
		const { result } = renderHook(() => useDocumentSearch({ documents, defaultValue: 'holiday' }));

		expect(result.current.result).toEqual(expected);
	});
});
