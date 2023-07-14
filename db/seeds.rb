# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {username: "Stephen", password: "123"},
    {username: "John",    password: "456"},
    {username: "Maddie",  password: "789"}
])

vending_machines = VendingMachine.create([
    {name: "Snack Master", user: users.first},
    {name: "Dream Vender", user: users.first},
    {name: "Lean Mean Vending Machine", user: users.second}
])

snacks = Snack.create([
    {name: "Chips",       price: 1.00},
    {name: "Cookies",     price: 1.50},
    {name: "Gum",         price: 0.10},
    {name: "Toy",         price: 4.50},
    {name: "Soda",        price: 1.00},
    {name: "Hot Dog",     price: 2.50},
    {name: "Burger",      price: 4.50},
    {name: "Lg Jerky",    price: 6.50},
    {name: "Sm Jerky",    price: 4.00},
    {name: "Coke",        price: 1.50},
    {name: "Fanta",       price: 1.50},
    {name: "Nachos",      price: 3.50},
    {name: "Bouncy ball", price: 1.00}
])

inventories = Inventory.create([
    {vending_machine: vending_machines.first,  snack: snacks.first,  quantity: 5},
    {vending_machine: vending_machines.first,  snack: snacks.second, quantity: 1},
    {vending_machine: vending_machines.first,  snack: snacks.third,  quantity: 1},
    {vending_machine: vending_machines.second, snack: snacks.first,  quantity: 3},
    {vending_machine: vending_machines.second, snack: snacks.second, quantity: 4},
    {vending_machine: vending_machines.third,  snack: snacks.third,  quantity: 10},
    {vending_machine: vending_machines.third,  snack: snacks.fourth, quantity: 2}
])
