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

module.exports = { mockInputSale, mockSale };
