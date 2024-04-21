import { NextFunction, Response } from "express";
import Order from "../model/order";
import Ticket from "../model/ticket";
import Customer from "../model/customer";

export const createOrder = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderNo = () => {
      return Math.floor(Math.random() * 100000) + 1;
    };
    const findCustomer = await Customer.findById(req.user._id).populate(
      "tickets"
    );
    if (!findCustomer) {
      return res.status(400).json({ message: "customer is not found." });
    }
    const order = await Order.create({
      customer: findCustomer._id,
      orderNo: "#" + orderNo(),
      payment: {
        paymentAmount: req.body.paymentAmount,
        paymentMethod: req.body.paymentMethod,
      },
    });

    const lastOrder = await (
      await (await order.save()).populate("customer")
    ).populate("customer.tickets");
    res
      .status(201)
      .json({ message: "customer's order created successfully.", lastOrder });
  } catch (error) {
    next(error);
  }
};

export const getAllOrder = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const findOrder = await Order.find({ user: req.user._id });
    if (findOrder) {
      res.status(200).json({ findOrder });
    } else {
      res.status(404).json({ message: "Order not found for this user." });
    }
  } catch (error) {
    next(error);
  }
};

export const invalidTicketDelete = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const ticketId = req.body.ticketId;
    await Ticket.findByIdAndDelete(ticketId);
    const customer = await Customer.findById(req.user._id);
    const popped = customer?.tickets.pop();
    await customer?.save();
    console.log(popped, "ljkadsfjlkdfsajadfs;j");
    res.status(200).json({ message: "ustlaa" });
  } catch (error) {
    res.status(400).json({ message: "Create ticket error - " + error });
  }
};
