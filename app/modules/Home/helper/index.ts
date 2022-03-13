/*
** while I plan on fetching skills from the database, doing so might take some time,
therefore, I will use a static array of *main* skills as the initial state, and then set the state after fetching
this will ensure that there's no delay in the app, and no "loading" component
*/

export const MainSkills = [
  {
    name: 'React',
    icon: {
      name: 'akar-icons:react-fill',
      color: '#61dafb',
    },
  },
  {
    name: 'MongoDB',
    icon: {
      name: 'bxl:mongodb',
      color: '#4caf50',
    },
  },
];
