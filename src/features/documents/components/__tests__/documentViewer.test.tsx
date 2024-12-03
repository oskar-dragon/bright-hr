import { , render, screen } from '@testing-library/react';

import { documents } from '../../constants/mockData';
import { DocumentTypeOrFolder } from '../../types';
import DocumentViewer from '../documentViewer';

describe('component: DocumentViewer', () => {
	const mockDocuments: DocumentTypeOrFolder[] = documents;

	it('shows "no files or folders" when there are no documents', () => {
		render(<DocumentViewer documents={[]} />);
		expect(screen.getByText('No files or folders')).toBeInTheDocument();
	});

	it('shows a list of documents when there are documents', () => {
		render(<DocumentViewer documents={mockDocuments.splice(0, 2)} />);
		expect(screen.getByText('Employee Handbook')).toBeInTheDocument();
		expect(screen.getByText('Public Holiday policy')).toBeInTheDocument();
	});
});
