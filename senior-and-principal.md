# Front-end task for Senior and Principal roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a small task which will form the basis of the technical part of the interview.

During the interview we'll begin by getting you to talk through your solution, there is no structure to this but we'd suggest you highlight the parts you're really happy with and of course the parts you would have liked to spend more time on. Once we're settled in we'll work on a new requirement together, this will NOT be exam like - we'll work through the solution together with you doing as much of the coding as you feel comfortable with.

We appreciate your time is precious so please don’t spend much more than a couple of hours on on it. Don’t worry; there are no right or wrong answers and you don’t have to ‘complete’ the task. Other than a strong hint we’d like to see some TDD we’ll let you decide on what you want to focus on or show off.

When you’ve finished please make it available on something like GitHub and email a link back to us.

# The task

Use the fake endpoints provided to create a list of absences.

* List absences, including visual cue which highlights if there are any conflicts.
* Allow the list to be sorted by date, absence type, and name.
* Provide a free text search to filter
* Clicking on an employees name will list all their absences

# The endpoints

`/api/absences` will return a full list of all absences.

`/api/conflict/{id}` for a given absence id will indicate if there are conflicts or not.

