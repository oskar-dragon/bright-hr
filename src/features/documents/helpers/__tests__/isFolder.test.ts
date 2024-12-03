import { DocumentTypeOrFolder } from '../../types';
import { isFolder } from '../isFolder';

const mockFile: DocumentTypeOrFolder = {
	type: 'csv',
	added: '28/08/1992',
	name: 'CSVFile',
};

const mockFolder: DocumentTypeOrFolder = {
	type: 'folder',
	added: '28/08/1992',
	name: 'CSVFile',
	files: [mockFile],
};

describe('isFolder', () => {
	it('returns false whe item is not a folder', () => {
		expect(isFolder(mockFile)).toBe(false);
	});

	it('return true when the item is a folder', () => {
		expect(isFolder(mockFolder));
	});
});
