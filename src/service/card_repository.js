import {fireabaseDatabase} from "./firebase"
class CardRepository {
  saveCard(userId, card){
    fireabaseDatabase.ref(`${userId}/cards/${card.id}`).set(card)
  }
  syncCard(userId, onUpdate){
    const ref =  fireabaseDatabase.ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value)
    })
    return () => ref.off();
  }

  removeCard(userId, card){
    fireabaseDatabase.ref(`${userId}/cards/${card.id}`).remove()
  }

}
export default CardRepository