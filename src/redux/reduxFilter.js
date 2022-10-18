export const getFilter = ({ filter }) => filter;

export const getVisibleTodos = ({ filter, contacts }) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };