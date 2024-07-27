import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemsids = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalitems = items.filter((item) => {
    const itemIndex = bagItemsids.indexOf(item.id);
    return itemIndex >= 0;
  });
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemsids.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach((bagItem) => {
    totalMRP = totalMRP + bagItem.original_price;
    totalDiscount =
      totalDiscount + bagItem.original_price - bagItem.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} Items </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
