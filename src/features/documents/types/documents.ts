export type FileType = 'pdf' | 'doc' | 'csv' | 'mov';

export type DocumentItem = {
	type: FileType;
	name: string;
	added: string;
};

export type Folder = {
	type: 'folder';
	name: string;
	added: string;
	files: DocumentItem[];
};

export type DocumentTypeOrFolder = DocumentItem | Folder;

export const isFolder = (item: DocumentTypeOrFolder): item is Folder => {
	return item.type === 'folder';
};
