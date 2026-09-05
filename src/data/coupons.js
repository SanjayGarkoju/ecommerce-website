export const MOCK_COUPONS = [
  {
    code: 'SPHERE20',
    discountType: 'percentage',
    discountValue: 20,
    minAmount: 50,
    description: '20% Off on orders above $50'
  },
  {
    code: 'WELCOME10',
    discountType: 'flat',
    discountValue: 10,
    minAmount: 30,
    description: 'Flat $10 Off on your first order'
  },
  {
    code: 'FREESHIP',
    discountType: 'shipping',
    discountValue: 0,
    minAmount: 0,
    description: 'Free Shipping on all orders'
  },
  {
    code: 'SUPER50',
    discountType: 'percentage',
    discountValue: 50,
    minAmount: 200,
    description: '50% Mega Savings on orders above $200'
  }
];
