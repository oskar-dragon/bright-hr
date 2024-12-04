import { Input } from '../components/input';
import { DocumentTree } from '../features/documents/components/documentTree';
import { documents } from '../features/documents/constants/mockData';
import { useDocumentSearch } from '../features/documents/hooks/useDocumentSearch';

function App() {
	const { searchTerm, setSearchTerm, result } = useDocumentSearch({ documents });

	return (
		<main className="min-h-dvh bg-gray-100 p-8">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-6 text-2xl font-bold text-gray-900">Document Manager</h1>

				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<Input
							type="text"
							placeholder="Search documents..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							aria-label="Search documents"
						/>
					</div>
					<DocumentTree documents={result} />
				</div>
			</div>
		</main>
	);
}

export default App;
