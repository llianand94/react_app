const reducer = (state, action) =>{
  const {type, data:{authors, messages}} = action;
  console.log(authors);
  switch (type){
    case 'DATA_RESPONCE_SUCCES':{
      const authorsMap = new Map();
      authors.forEach(author=>authorsMap.set(author.id, author));

      const messagesWithAuthors = messages.map((message)=>{
        const messageWithAuthorId= {
          ...message,
          authorName: authorsMap.get(message.authorId),
        }
        return messageWithAuthorId;
      });
      const newState= {
        ...state,
        authors,
        messages:messagesWithAuthors,
      }
      return newState;
    }
    default:
      return state;
  }
  
}

export default reducer;