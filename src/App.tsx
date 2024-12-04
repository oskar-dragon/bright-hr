import DocumentTree from './features/documents/components/documentTree';
import { documents } from './features/documents/constants/mockData';

function App() {
	return (
		<main className="min-h-dvh bg-gray-100 p-8">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-6 text-2xl font-bold text-gray-900">Document Manager</h1>
				<DocumentTree documents={documents} />
			</div>
		</main>
	);
}

export default App;
