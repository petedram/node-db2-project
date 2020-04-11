
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '12345', make: 'tesla', model:'s', milage:'5500'},
        {vin: '12346', make: 'tesla', model:'3', milage:'2500', transmissionType:'auto', titleStatus:'clean'},
        {vin: '12347', make: 'tesla', model:'x', milage:'4500'},
        {vin: '12348', make: 'tesla', model:'y', milage:'500'},
        {vin: '12349', make: 'tesla', model:'r', milage:'10500'},
        {vin: '123410', make: 'tesla', model:'Cyber Truck', milage:'10'},
      ]);
    });
};
