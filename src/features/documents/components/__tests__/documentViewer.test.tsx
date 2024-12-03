import { render, screen } from '@testing-library/react';

import DocumentViewer from '../documentViewer';

describe('component: DocumentViewer', () => {
	// const mockDocuments: DocumentTypeOrFolder[] = documents;

	it('shows "no files or folders" when there are no documents', () => {
		render(<DocumentViewer documents={[]} />);
		expect(screen.getByText('No files or folders')).toBeInTheDocument();
	});
});
