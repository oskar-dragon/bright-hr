# Front-end task for Senior and Principal roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a small task which will form the basis of the technical part of the interview...

* We'll begin by getting you to talk through your solution, there is no structure to this we're interested in how you think about code and how you communicate what you've done.
* Secondly, once we're settled, in we'll work on a new requirement together. This will NOT be exam like we'll work through the solution together with you doing as much of the coding as you feel comfortable with. The aim isn't to finish the task but to see how you approach new requirements and how you work with others.

We appreciate your time is precious so please don’t spend much more than a couple of hours on on it. Don’t worry; there are no right or wrong answers and you don’t have to ‘complete’ the task. Other than a strong hint we’d like to see some TDD we’ll let you decide on what you want to focus on or show off.

When you’ve finished please make it available on something like GitHub and email a link back to us.

# The task

Use the fake endpoints provided to create a list of absences.

1. For each absence show:
    * start date
    * end date
    * employee name
    * approved/pending approval
    * absence type
1. Include a visual indication that an absence has conflicts.
1. Allow the list to be sorted by dates, absence type, and name.
1. When an employee's name is clicked show all of their absences.

# The endpoints

`https://front-end-kata.brighthr.workers.dev/api/absences` will return a full list of all absences.

`https://front-end-kata.brighthr.workers.dev/api/conflict/{id}` for a given absence id will indicate if there are conflicts or not.

