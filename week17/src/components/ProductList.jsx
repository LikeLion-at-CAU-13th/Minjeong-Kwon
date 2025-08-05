import React from 'react'
import styled from 'styled-components';
import useCartStore from '../stores/cartStore';

const products = [
    { name: '사탕', price: 2000 },
    { name: '젤리', price: 1000 },
    { name: '초콜렛', price: 2500 },
    { name: '쿠키', price: 3500 },
    { name: '마카롱', price: 4000 },
    { name: '아이스크림', price: 990 },
    { name: '도넛', price: 5000 },
    { name: '엽떡', price: 14000 },
    { name: '양꼬치', price: 25000 }
];

export const importImage = (name) => {
    const path = `${process.env.PUBLIC_URL}/assets/${name}.png`;
    return path;
}

const ProductList = () => {
    const addItem = useCartStore ((state) => state.addItem);

    //과제2 추가
    const { sortOrder, setSortOrder } = useCartStore();

    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'up') return a.price - b.price;
      if (sortOrder === 'down') return b.price - a.price;
      return 0;
    });

    return (
      <ProductListContainer>
        {/* 과제2 추가 */}
        <SortBar>
          <SortItems value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">정렬 옵션</option>
            <option value="up">가격 낮은 순</option>
            <option value="down">가격 높은 순</option>
          </SortItems>
        </SortBar>
        <ProductGrid>
          {sortedProducts.map((product, index) => (
            <ProductItem key={index}>
              <ProductImage
                src={importImage(product.name)}
                alt={product.name}
              />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
              <AddButton onClick={() => addItem(product)}>카트에 추가</AddButton>
            </ProductItem>
          ))}
        </ProductGrid>
      </ProductListContainer>
  );
}

export default ProductList;

const ProductListContainer = styled.div`
  width: calc(100% - 350px);
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  min-width: 0;
  /* display: flex;
  justify-content: center; */
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 5px;
  list-style: none;
  padding: 0;
  width: 100%;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 280px);
  }
`;

const ProductItem = styled.li` 
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 280px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  margin: 0 0 10px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

//과제2 추가
const SortBar = styled.div`
  margin-bottom: 10px;
  text-align: left;
`;

const SortItems = styled.select`
  padding: 10px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  appearance: none;

  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l5 6 5-6H0z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  padding-right: 30px;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;