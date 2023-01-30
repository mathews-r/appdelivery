const mockInputSale = {
  products: [
    { id: "9", quantity: "5" },
    { id: "2", quantity: "4" },
  ],
  sellerId: 1,
  deliveryAddress: "rua teste",
  deliveryNumber: "100",
};

const mockSale = {
  sale_date: "2023-01-26T12:05:13.733Z",
  id: 2,
  user_id: 3,
  seller_id: 1,
  delivery_address: "rua teste",
  delivery_number: "100",
  total_price: 74.45,
  status: "Pendente",
};

const mockSalesByUser = [
  {
    id: 1,
    userId: 3,
    sellerId: 1,
    totalPrice: "75.00",
    deliveryAddress: "Rua teste",
    deliveryNumber: "200",
    saleDate: "2023-01-28T16:25:45.000Z",
    status: "Pendente",
  },
  {
    id: 2,
    userId: 3,
    sellerId: 1,
    totalPrice: "75.00",
    deliveryAddress: "Rua teste 2",
    deliveryNumber: "10",
    saleDate: "2023-01-28T16:29:16.000Z",
    status: "Pendente",
  },
];

module.exports = { mockInputSale, mockSale, mockSalesByUser };
