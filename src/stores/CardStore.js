import { makeAutoObservable, runInAction } from 'mobx';

class CardStore {
  constructor() {
    if (!CardStore.instance) {
      CardStore.instance = this;
    }
    // Initialize object
    this.data = [];
    return CardStore.instance;
  }

  fetchCards() {
    fetch('/data/cards.json').then(response => response.json()).then(data => {this.cards = data});
    console.log(this.cards);
  }
}



export default new CardStore();