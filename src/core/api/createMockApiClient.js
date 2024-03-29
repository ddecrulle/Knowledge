import functions from 'core/mockData/functions/functions';
import gsbpm from 'core/mockData/hierarchy/gsbpm';
import users from 'core/mockData/hierarchy/users';
import products from 'core/mockData/hierarchy/products';
import services from 'core/mockData/hierarchy/services';
import status from 'core/mockData/hierarchy/status';

export const createMockApiClient = () => {
  const getHierarchywithId = (id) => {
    switch (id) {
      case 'users':
        return users;
      case 'gsbpm':
        return gsbpm;
      case 'products':
        return products;
      case 'services':
        return services;
      case 'status':
        return status;
      default:
        return {};
    }
  };
  return {
    getFunctions: () => Promise.resolve(functions),
    getFunctionById: (id) =>
      Promise.resolve(functions.filter((fct) => fct[id] === id)),
    getProducts: async () => Promise.resolve(getHierarchywithId('products')),
  };
};
