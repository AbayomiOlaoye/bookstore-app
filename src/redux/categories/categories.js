const CHECK_STATUS = 'BookStore/Categories/CHECK_STATUS';

const CATEGORIES = [];

const category = () => ({
  type: CHECK_STATUS,
});

const CategoryRedux = (state = CATEGORIES, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
};
export { category };
export default CategoryRedux;
