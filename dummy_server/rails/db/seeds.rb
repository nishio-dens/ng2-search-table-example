# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Dummy Inventories
(1..500).each do |index|
  Inventory.find_or_initialize_by(id: index).tap do |inv|
    inv.name = "Dummy Product #{index}"
    inv.status = index % 10 == 0 ? "inactive" : "active"
    inv.price = 10 * index
  end.save!
end
