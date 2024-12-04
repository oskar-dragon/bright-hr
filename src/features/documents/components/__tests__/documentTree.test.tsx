import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { DocumentTypeOrFolder } from '../../types';
import { isFolder } from '../../helpers/isFolder';
import { DocumentTree } from '../documentTree';

describe('component: DocumentTree', () => {
	const mockDocuments: DocumentTypeOrFolder[] = [
		{
			type: 'pdf',
			name: 'Document 1',
			added: '2024-01-01',
		},
		{
			type: 'folder',
			name: 'Test Folder',
			added: '2024-01-02',
			files: [
				{
					type: 'doc',
					name: 'Nested Document',
					added: '2024-01-03',
				},
			],
		},
		{
			type: 'csv',
			name: 'Cost centres',
			added: '2016-08-12',
		},
		{
			type: 'mov',
			name: 'Welcome to the company!',
			added: '2015-04-24',
		},
	];

	function setup(documents: DocumentTypeOrFolder[]) {
		const user = userEvent.setup();
		const screen = render(<DocumentTree documents={documents} />);

		return {
			user,
			screen,
		};
	}

	it('shows empty state when there are no documents', () => {
		const { screen } = setup([]);
		expect(screen.getByText(/No files or folders/)).toBeInTheDocument();
	});

	it('renders a list of documents and folders', () => {
		const { screen } = setup(mockDocuments);
		expect(screen.getByText(/Document 1/i)).toBeInTheDocument();
		expect(screen.getByText(/Test Folder/i)).toBeInTheDocument();
	});

	it('displays file type for documents with a correct icon', async () => {
		const { screen, user } = setup(mockDocuments);

		mockDocuments.forEach((doc) => {
			if (doc.type !== 'folder') {
				expect(screen.getByRole('img', { name: new RegExp(doc.type, 'i') })).toBeInTheDocument();
			}
		});

		for (const doc of mockDocuments) {
			if (isFolder(doc)) {
				const folderElement = screen.getByRole('button', { name: new RegExp(doc.type, 'i') });
				await user.click(folderElement);

				doc.files.forEach((file) => {
					expect(screen.getByRole('img', { name: new RegExp(file.type, 'i') })).toBeInTheDocument();
				});
			}
		}
	});

	it('toggles folder content when clicked', async () => {
		const { screen, user } = setup(mockDocuments);
		const folder = screen.getByText(/Test Folder/i);

		expect(screen.queryByText('Nested Document')).not.toBeInTheDocument();

		await user.click(folder);
		expect(screen.getByText('Nested Document')).toBeInTheDocument();

		await user.click(folder);
		expect(screen.queryByText('Nested Document')).not.toBeInTheDocument();
	});

	it('supports keyboard navigation', async () => {
		const { screen, user } = setup(mockDocuments);
		const folder = screen.getByRole('button', { name: /Test Folder/i });

		await user.tab();
		await user.tab();
		expect(folder).toHaveFocus();

		await user.keyboard('[Enter]');
		expect(screen.getByText(/Nested Document/i)).toBeInTheDocument();

		await user.keyboard('[Enter]');
		expect(screen.queryByText(/Nested Document/i)).not.toBeInTheDocument();
	});

	it('shows correct folder state indicators', async () => {
		const { screen, user } = setup(mockDocuments);

		expect(screen.getByText(/(Click to open)/i)).toBeInTheDocument();

		await user.click(screen.getByText('Test Folder'));
		expect(screen.getByText(/(Click to close)/i)).toBeInTheDocument();
	});
});
