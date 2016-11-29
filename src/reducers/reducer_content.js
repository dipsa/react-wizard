import initialState from './initialState';

export default function(state = initialState.content, action) {
  switch (action.type) {
    case 'SHOW_CONTENT':
      return state.map((individualContent) => {
        if (individualContent.id === action.payload && individualContent.visible === false) {
          return Object.assign({}, individualContent, { visible: !individualContent.visible });
        }

        return individualContent;
      });
    default:
      return state;
  }
}
