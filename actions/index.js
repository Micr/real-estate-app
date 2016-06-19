const SET_ID = 'SET_ID';

/**
 * Creates a setId action
 * @param {Number} id - an id that this action sets 
 */
function setId(id) {
  return {
    type: SET_ID,
    id: id
  }
}

export default setId;
