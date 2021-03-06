const connection = require('./connection')

module.exports = {
  getPurchases,
  addPurchase,
  deletePurchase,
  updatePurchase
}

function getPurchases (db = connection) {
  return db('purchases').select()
}

function addPurchase (purchase, db = connection) {
  return db('purchases')
    .insert(purchase)
    .then(latestPurchase => latestPurchase)
}

function deletePurchase (id, db = connection) {
  return db('purchases')
    .where('id', id)
    .first()
    .delete()
}

function updatePurchase (id, obj, db = connection) {
  const { quantity, dollarAmount } = obj
  return db('purchases')
    .where('id', id)
    .first()
    .update({
      quantity,
      dollar_amount: dollarAmount
    })
}
