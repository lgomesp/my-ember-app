import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalsComponent extends Component {
  @tracked query = '';

  get querySearch() {
    return this.query.toLowerCase();
  }
}
