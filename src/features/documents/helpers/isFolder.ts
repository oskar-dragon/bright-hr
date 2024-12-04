import { DocumentTypeOrFolder, Folder } from '../types';

export const isFolder = (item: DocumentTypeOrFolder): item is Folder => {
	return item.type === 'folder';
};
