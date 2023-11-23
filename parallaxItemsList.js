const parallaxItemsList = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  getAllItems() {
    return this.items;
  }
};

export default parallaxItemsList;