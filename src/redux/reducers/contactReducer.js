const initialState = [
  {
    id: 0,
    name: "Md Atik Asif Khan Akash",
    number: 123456789,
    email: "akash@gmail.com",
  },
  {
    id: 1,
    name: "Ashik Khan",
    number: 987654321,
    email: "ashik@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];

      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
