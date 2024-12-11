import { act, renderHook } from '@testing-library/react';

import { documents } from '../../constants/mockData';
import { DocumentTypeOrFolder } from '../../types';
import { SortBy, useDocumentSort } from '../useDocumentSort';

describe('hook: useDocumentSort', () => {
	it('should initialise with a default sort', () => {
		const { result } = renderHook(() => useDocumentSort(documents));

		expect(result.current.sortBy).toBe('name');
	});

	it('should update sort value when setSortBy is called', () => {
		const { result } = renderHook(() => useDocumentSort(documents));

		act(() => result.current.setSortBy('date'));

		expect(result.current.sortBy).toBe('date');
	});

	it('should return documents', () => {
		const { result } = renderHook(() => useDocumentSort(documents));

		expect(result.current.sortedDocs).toEqual(documents);
	});

	it('should return documents sorted by name when that option is selected', () => {
		const mockData: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
		];

		const expected: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
		];
		const { result } = renderHook(() => useDocumentSort(mockData));

		expect(result.current.sortedDocs).toEqual(expected);
	});

	it('should return documents sorted by date when that option is selected', () => {
		const mockData: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
		];

		const expected: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
		];

		const { result } = renderHook(() => useDocumentSort(mockData));

		act(() => result.current.setSortBy('date'));

		expect(result.current.sortedDocs).toEqual(expected);
	});

	it('should throw an error if a property that we want to sort by does not exist', () => {
		const mockData: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
		];
		const { result } = renderHook(() => useDocumentSort(mockData));

		expect(() => {
			act(() => result.current.setSortBy('random' as SortBy));
		}).toThrow('Incorrect sort by value: "random"');
	});

	it('should sort dates within folder', () => {
		const mockDataWithFolder: DocumentTypeOrFolder[] = [
			{
				type: 'folder',
				name: 'Expenses',
				added: '2017-05-02',
				files: [
					{
						type: 'doc',
						name: 'Fuel allowances',
						added: '2017-05-03',
					},
					{
						type: 'doc',
						name: 'Expenses claim form',
						added: '2017-05-02',
					},
				],
			},
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
		];

		const expected: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'Public Holiday policy',
				added: '2016-12-06',
			},
			{
				type: 'pdf',
				name: 'Employee Handbook',
				added: '2017-01-06',
			},
			{
				type: 'folder',
				name: 'Expenses',
				added: '2017-05-02',
				files: [
					{
						type: 'doc',
						name: 'Expenses claim form',
						added: '2017-05-02',
					},
					{
						type: 'doc',
						name: 'Fuel allowances',
						added: '2017-05-03',
					},
				],
			},
		];

		const { result } = renderHook(() => useDocumentSort(mockDataWithFolder));

		act(() => result.current.setSortBy('date'));

		expect(result.current.sortedDocs).toEqual(expected);
	});

	it('should sort names within folder', () => {
		const mockDataWithFolder: DocumentTypeOrFolder[] = [
			{
				type: 'folder',
				name: 'C Folder',
				added: '2017-05-02',
				files: [
					{
						type: 'doc',
						name: 'Z Item',
						added: '2017-05-03',
					},
					{
						type: 'doc',
						name: 'G Item',
						added: '2017-05-02',
					},
				],
			},
			{
				type: 'pdf',
				name: 'A Item',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'B Item',
				added: '2016-12-06',
			},
		];

		const expected: DocumentTypeOrFolder[] = [
			{
				type: 'pdf',
				name: 'A Item',
				added: '2017-01-06',
			},
			{
				type: 'pdf',
				name: 'B Item',
				added: '2016-12-06',
			},
			{
				type: 'folder',
				name: 'C Folder',
				added: '2017-05-02',
				files: [
					{
						type: 'doc',
						name: 'G Item',
						added: '2017-05-02',
					},
					{
						type: 'doc',
						name: 'Z Item',
						added: '2017-05-03',
					},
				],
			},
		];

		const { result } = renderHook(() => useDocumentSort(mockDataWithFolder));

		act(() => result.current.setSortBy('name'));

		expect(result.current.sortedDocs).toEqual(expected);
	});
});
