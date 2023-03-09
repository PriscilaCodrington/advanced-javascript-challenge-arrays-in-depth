/*
  You should write the code in this file
*/

/*
  Return the list of unique flat ids
  @Example
    Given:
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      [2, 7, 1]
*/
const getUniqueFlatIds = rooms => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Order ther list of rooms by relevance, a new array should be returned
  @Example
    Given:
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      [
        { id: 5, flatId: 1, relevance: 10 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 3, flatId: 2, relevance: 20 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 7, flatId: 7, relevance: 40 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 6, flatId: 1, relevance: 50 }
      ]
*/
const orderByRelevance = rooms => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Filter the list of rooms by the given flatId
  @Example
    Given:
      @param flatId 7
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      [
        { id: 4, flatId: 7, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 7, flatId: 7, relevance: 40 },
        { id: 2, flatId: 7, relevance: 50 }
      ]
*/
const filterByFlatId = (flatId, rooms) => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Return the list of rooms ids of the given flatId
  @Example
    Given:
      @param flatId 7
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      [2, 1, 4, 7]
*/
const getFlatRoomsIds = (flatId, rooms) => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Return the sum of the rooms relevances of the given flatId
  @Example
    Given:
      @param flatId 7
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      130
*/
const getFlatRelevance = (flatId, rooms) => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Return the aggregated info (room ids and total relevance) of the given flatId
  @Example
    Given:
      @param flatId 7
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      {
        flatId: 7,
        roomIds: [2, 1, 4, 7],
        relevance: 130
      }
*/
const getFlatAggregatedInfo = (flatId, rooms) => {
  // *********************************
  // Write your code here
  // *********************************
};



/*
  Return the aggregated info (room ids and total relevance) of all the flats
    ordered by relevance
  @Example
    Given:
      @param flatId 7
      @param rooms [
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ];
    Returns:
      [
        { flatId: 2, roomIds: [3], relevance: 20 },
        { flatId: 1, roomIds: [5, 6], relevance: 60 },
        { flatId: 7, roomIds: [2, 1, 4, 7], relevance: 130 }
      ]
*/
const aggregateAndOrderFlatsByRelevance = rooms => {
  // *********************************
  // Write your code here
  // *********************************
};

module.exports = {
  getUniqueFlatIds,
  orderByRelevance,
  filterByFlatId,
  getFlatRoomsIds,
  getFlatRelevance,
  getFlatAggregatedInfo,
  aggregateAndOrderFlatsByRelevance
};
