## Search Input
To improve the search input functionality, I would implement debouncing to limit the number of requests sent to the backend on each keystroke (if that would be the case). Additionally, I would use query params in a router to provide default values for the input, enabling users to share links easily with already pre-defined state of a component.

## Testing Approach
In frontend development, I mainly care about 100% coverage for utility functions and helpers. For React Hooks and UI testing, my strategy involves writing tests from the user's perspective. This means I focus on the actual input and output rather than the framework's internals. 

For components, I adopt a similar approach, putting emphasis on integration tests that simulate user interactions with async hooks, reusable React hooks, and components as a whole.

In this case though, I decided to test hooks and components separately as they could have been reused somewhere else in the application. For feature coverage, I would also implement E2E tests using Playwright to validate the entire user journey and all requirements of the feature.

## Decision to Change Mock Data
I decided to modify the mock data to reflect real-world scenarios, where users may create nested folders. This change allows for the implementation of recursive rendering of the entire folder tree and enables searching through the tree recursively.

## Sorting Implementation
Before starting the search implementation, I developed a simple [`Select`](../src/components/select.tsx) component but did not have time to implement sorting functionality. My proposed approach is as follows:

1. Create a custom hook that accepts a list of documents.
2. Store the state of the currently selected sort option.
3. Expose a function to update the selected sort option.
4. Inside of a hook, I would have a function that recursively sorts the files and folders based on the selected criteria. This would allow to sort folders and files at the same time.

## Opening Folders Automatically When a Search Matches a File Name
To improve my current implementation, I would update the functionality to automatically open folders that contain files matching the search criteria. This improvement will likely require a change of how state is managed within these components, potentially that would mean the relocation of state outside of the [`DocumentItem`](../src/features/documents/components/documentTree.tsx) component. This would be a good feature to add during next iteration.