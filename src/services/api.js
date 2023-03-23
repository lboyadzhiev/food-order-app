import * as api from './rootApi';

const url = 'https://test-66f91.firebaseio.com/meals.json';

export const getMeals = async () => {
  return await api.get(url);
};

export const createMeal = async (body) => {
  return await api.post(url, body);
};
