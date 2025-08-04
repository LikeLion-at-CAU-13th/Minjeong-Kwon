import React, { useState } from 'react'
import styled from 'styled-components';
import useCartStore from '../stores/cartStore';
import { importImage } from './ProductList';

const Cart = () => {
    const {
	    cartItems,
	    removeItem,
	    updateQuantity,
	    toggleItemChecked,
	    applyDiscount,
	    discount,
	    loading,
	    getOriginalTotalPrice,
	    getTotalPrice,
      toggleAllChecked, //과제1 추가
    } = useCartStore();

    const [discountCode, setDiscountCode] = useState('');

    //과제2 추가
    const { sortOrder, setSortOrder } = useCartStore();

    const sortedItems = [...cartItems].sort((a, b) => {
      if (sortOrder === 'up') return a.price - b.price;
      if (sortOrder === 'down') return b.price - a.price;
      return 0;
    });

    const handleApplyDiscount = (e) => {
        e.preventDefault();
        applyDiscount(discountCode);
        setDiscountCode('');
    }
    return (
    <CartContainer>
      <CartTitle>장바구니 🛒</CartTitle>
      <CartForm onSubmit={handleApplyDiscount}>
        <CartInput
          type="text"
          placeholder="할인 코드 입력"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <ApplyButton type="submit" disabled={loading}>
          {loading ? '처리 중...' : '적용'}
        </ApplyButton>
      </CartForm>
      {discount > 0 ? (
        <DiscountMessage color="hotpink">{discount * 100}% 할인 적용됨</DiscountMessage>
      ) : (
        <DiscountMessage>할인 코드가 적용되지 않았습니다.</DiscountMessage>
      )}
      {cartItems.length === 0 ? (
        <EmptyMessage>장바구니가 비어있습니다.</EmptyMessage>
      ) : (
        <>
          {/* 과제1 추가 */}
          <SelectAllContainer>
            <div>
              <input
              type="checkbox"
              checked={cartItems.length > 0 && cartItems.every((item) => item.checked)}
              onChange={() => toggleAllChecked()}
            />
            <SelectAllLabel >전체 선택</SelectAllLabel>
            </div>

            {/* 과제2 추가 */}
            <SortItems value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">정렬 옵션</option>
              <option value="up">가격 낮은 순</option>
              <option value="down">가격 높은 순</option>
            </SortItems>
          </SelectAllContainer>


          <CartList>
            {sortedItems.map((item) => (
              <CartItem key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked || false}
                  onChange={() => toggleItemChecked(item.id)}
                />
                <ItemImage
                  src={importImage(item.name)}
                  alt={item.name}
                />
                <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                    <ItemInfo>
                        <QuantityButton onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>
                          -
                        </QuantityButton>
                        <ItemQuantity>{item.quantity}</ItemQuantity>
                        <QuantityButton onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                          +
                        </QuantityButton>
                    </ItemInfo>
                </ItemDetails>
                <DeleteButton onClick={() => removeItem(item.id)}>X</DeleteButton>
              </CartItem>
            ))}
          </CartList>
          <TotalPrice>
            주문 금액:{' '}
            {discount > 0 ? (
              <>
                <span style={{ textDecoration: 'line-through' }}>
                  {getOriginalTotalPrice().toLocaleString()}원
                </span>{' → '}
                <span>{getTotalPrice().toLocaleString()}원</span>
              </>
            ) : (
              <span>{getTotalPrice().toLocaleString()}원</span>
            )}
          </TotalPrice>
        </>
      )}
    </CartContainer>
  );
}

export default Cart

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  background: #ffffff;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 20px;
  text-align: center;
  color: #333;
`;

const CartForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CartInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ApplyButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const DiscountMessage = styled.p`
  color: ${(props) => props.color || 'gray'};
  font-size: 0.9rem;
  margin: 0 0 20px;
  text-align: center;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #555;
  font-size: 1rem;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CartItem = styled.li`
  display: flex;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #555;
`;

const ItemQuantity = styled.span`
  font-size: 1rem;
  color: #000000;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
`;

const TotalPrice = styled.h3`
  margin: 20px 0 20px 0;
  padding-bottom: 20px;
  text-align: center;
  color: #333;
`;

//과제1 추가
const SelectAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SelectAllLabel = styled.label`
  margin-left: 8px;
  font-size: 0.9rem;
`;

//과제2 추가
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

