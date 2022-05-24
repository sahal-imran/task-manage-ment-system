
export const initialState = [
  {
    Task: 'i will do mern stack',
    Priorty: 'highest',
    isCompleted: 'no',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod, porro ex delectus iusto quam. Harum numquam amet aliquid esse!'
  },
  {
    Task: 'i will learn php this day',
    Priorty: 'normal',
    isCompleted: 'yes',
    des: 'It is outdated language that is why i will give less attention to php'
  },
  {
    Task: 'i will do masters in blockchain',
    Priorty: 'highest',
    isCompleted: 'no',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod, porro ex delectus iusto quam. Harum numquam amet aliquid esse!'
  }
];
export const reducer = (state, action) => {
  if (action.type === "AddTask") {
    return [...action.payload.state,action.payload.NewTask];
  }
  else if(action.type === "DeleteTask") {
    return action.payload.state.filter((arrItem, ind) => {
      return ind !== action.payload.index;
    });
  }
  return state;
};
