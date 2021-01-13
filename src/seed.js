import shortid from 'shortid';

export default (store) => {
  console.log('Insert first list');
  const firstListId = shortid.generate();

  store.dispatch({
    type: 'ADD_LIST',
    payload: { listId: firstListId, listTitle: 'Tasks' },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: 'Learn React',
    },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: 'Learn Javascript',
    },
  });

  console.log('Insert second list');
  const secondListId = shortid.generate();

  store.dispatch({
    type: 'ADD_LIST',
    payload: { listId: secondListId, listTitle: 'Pending' },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: 'Finish the book',
    },
  });
};
