import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  orderNo: String,
  countDown: { type: Number, default: 600 },
  paidDate: { type: Date, default: null },
  payment: {
    paymentAmount: Number,
    paymentMethod: {
      type: String,
      enum: ["Qpay", "Bank card"],
      required: true,
    },
  },
});

const Order = model("Order", orderSchema);

export default Order;
