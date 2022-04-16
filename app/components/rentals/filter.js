import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) =>
          rental.title.toLowerCase().includes(query) ||
          rental.city.toLowerCase().includes(query) ||
          rental.category.toLowerCase().includes(query) ||
          rental.type.toLowerCase().includes(query) ||
          rental.description.toLowerCase().includes(query)
      );
    }

    return rentals;
  }
}
