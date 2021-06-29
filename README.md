# bProductive

Plan your days and track your productivity with this user-friendly and simplistically designed web-based app 

<img width="1286" alt="Screen Shot 2021-06-29 at 9 15 10 AM" src="https://user-images.githubusercontent.com/68198839/123813559-03dd7700-d8c3-11eb-8694-8955f37d2987.png">

Built with: [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/docs)

### About

Being someone who can easily lose track of time, I wanted to implement a productivity app with a key feature of being able to track and view how much time has been spent on each task. The time tracker, coupled with ability to estimate how much time each task will take, allows for perfect planning. Other features include displaying tasks on a calendar and allowing editing of name, email, and password. Each task can be customized, specifying as little or as much information as the user wants, and there are the basic abilities to edit, add, pause, play, delete, and move (ongoing --> completed or vise versa) tasks.

From designing to implementing, I've learned a lot technically and behaviorly. I'd say the following is an important takeaway I learned:

⭐️ organization is key -- in design, mind, and code.

### Acknowledgements

This was my first time building the frontend and backend of an application and deploying it. I used a lot of resources and followed many tutorials:

* [setup for auth / firebase](https://www.youtube.com/watch?v=PKwu15ldZ7k&t=2352s&ab_channel=WebDevSimplifiedWebDevSimplified)
* [random firebase bug](https://medium.com/firebase-developers/why-is-my-currentuser-null-in-firebase-auth-4701791f74f0)
* [react-big-calendar](https://github.com/jquense/react-big-calendar)
* [date & time picker](https://projects.wojtekmaj.pl/react-datetime-picker/)
* [task form](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=3423s&ab_channel=TraversyMedia)

### Todo
* implement functionality for edit
* fix bug where currentUser.displayName is null just when the user immediately signs in
* make responsive
* fix bug where time tracker display doesn't show when something else is clicked
* time tracker sticky header perhaps?
* switching between pause and play icons on task rather than displaying both,, might require scss??
