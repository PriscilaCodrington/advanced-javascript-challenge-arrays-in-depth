/*
  Do not modify this file
*/

const { utils } = require('./code');

const rooms = [
  { id: 3, flatId: 2, relevance: 20 },
  { id: 2, flatId: 7, relevance: 50 },
  { id: 5, flatId: 1, relevance: 10 },
  { id: 1, flatId: 7, relevance: 30 },
  { id: 4, flatId: 7, relevance: 10 },
  { id: 6, flatId: 1, relevance: 50 },
  { id: 7, flatId: 7, relevance: 40 }
];

console.log(rooms);

describe('Flats and rooms', () => {
  describe('getUniqueFlatIds(rooms)', () => {
    it('should return the list of unique flat ids', () => {
      const result = utils.getUniqueFlatIds(rooms);

      expect(result).toEqual([2, 7, 1]);
    });
  });

  describe('orderByRelevance(rooms)', () => {
    it('should return the list of rooms ordered by relevance', () => {
      const result = utils.orderByRelevance(rooms);

      expect(result).toEqual([
        { id: 5, flatId: 1, relevance: 10 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 3, flatId: 2, relevance: 20 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 7, flatId: 7, relevance: 40 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 6, flatId: 1, relevance: 50 }
      ]);
    });

    it('should not mutate/modify the original list of rooms', () => {
      const result = rooms;

      expect(result).toEqual([
        { id: 3, flatId: 2, relevance: 20 },
        { id: 2, flatId: 7, relevance: 50 },
        { id: 5, flatId: 1, relevance: 10 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 },
        { id: 7, flatId: 7, relevance: 40 }
      ]);
    });
  });

  describe('filterByFlatId(flatId, rooms)', () => {
    it('should filter the list by flatId (2)', () => {
      const flatId = 2;
      const result = utils.filterByFlatId(flatId, rooms);

      expect(result).toEqual([{ id: 3, flatId: 2, relevance: 20 }]);
    });

    it('should filter the list by flatId (7)', () => {
      const flatId = 7;
      const result = utils.filterByFlatId(flatId, rooms);

      expect(result).toEqual([
        { id: 2, flatId: 7, relevance: 50 },
        { id: 1, flatId: 7, relevance: 30 },
        { id: 4, flatId: 7, relevance: 10 },
        { id: 7, flatId: 7, relevance: 40 }
      ]);
    });

    it('should filter the list by flatId (1)', () => {
      const flatId = 1;
      const result = utils.filterByFlatId(flatId, rooms);

      expect(result).toEqual([
        { id: 5, flatId: 1, relevance: 10 },
        { id: 6, flatId: 1, relevance: 50 }
      ]);
    });
  });

  describe('getFlatRoomsIds(flatId, rooms)', () => {
    it('should return the list of rooms of a given flat (2)', () => {
      const flatId = 2;
      const result = utils.getFlatRoomsIds(flatId, rooms);

      expect(result).toEqual([3]);
    });

    it('should return the list of rooms of a given flat (7)', () => {
      const flatId = 7;
      const result = utils.getFlatRoomsIds(flatId, rooms);

      expect(result).toEqual([2, 1, 4, 7]);
    });

    it('should return the list of rooms of a given flat (1)', () => {
      const flatId = 1;
      const result = utils.getFlatRoomsIds(flatId, rooms);

      expect(result).toEqual([5, 6]);
    });
  });

  describe('getFlatRelevance(flatId, rooms)', () => {
    it('should return the total relevance of a given flat (2)', () => {
      const flatId = 2;
      const result = utils.getFlatRelevance(flatId, rooms);

      expect(result).toEqual(20);
    });

    it('should return the total relevance of a given flat (7)', () => {
      const flatId = 7;
      const result = utils.getFlatRelevance(flatId, rooms);

      expect(result).toEqual(130);
    });

    it('should return the total relevance of a given flat (1)', () => {
      const flatId = 1;
      const result = utils.getFlatRelevance(flatId, rooms);

      expect(result).toEqual(60);
    });
  });

  describe('getFlatAggregatedInfo(flatId, rooms)', () => {
    it('should return an object with the array of room ids and the total relevance of given flat (2)', () => {
      const flatId = 2;
      const result = utils.getFlatAggregatedInfo(flatId, rooms);

      expect(result).toEqual({
        flatId: 2,
        roomIds: [3],
        relevance: 20
      });
    });

    it('should return an object with the array of room ids and the total relevance of given flat (7)', () => {
      const flatId = 7;
      const result = utils.getFlatAggregatedInfo(flatId, rooms);

      expect(result).toEqual({
        flatId: 7,
        roomIds: [2, 1, 4, 7],
        relevance: 130
      });
    });

    it('should return an object with the array of room ids and the total relevance of given flat (1)', () => {
      const flatId = 1;
      const result = utils.getFlatAggregatedInfo(flatId, rooms);

      expect(result).toEqual({
        flatId: 1,
        roomIds: [5, 6],
        relevance: 60
      });
    });
  });

  describe('aggregateAndOrderFlatsByRelevance(rooms)', () => {
    it('should return the aggregated info of the rooms ordered by relevance', () => {
      const result = utils.aggregateAndOrderFlatsByRelevance(rooms);

      expect(result).toEqual([
        { flatId: 2, roomIds: [3], relevance: 20 },
        { flatId: 1, roomIds: [5, 6], relevance: 60 },
        { flatId: 7, roomIds: [2, 1, 4, 7], relevance: 130 }
      ]);
    });
  });
});
