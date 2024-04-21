import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new Schema({
  googleId: String,
  name: {
    type: String,
    require: true,
  },
  fullName: String,
  avatarUrl: String,
  password: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  otp: {
    type: String,
    default: "",
  },
  tickets: [
    {
      type: Schema.ObjectId,
      ref: "Ticket",
    },
  ],
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
});

customerSchema.pre("save", async function (next) {
  // if (this.isModified("password")) {
  //   this.password = bcrypt.hashSync(this.password as string, 10);
  // }
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password as string, salt);
    console.log(this.password);
  }
  next();
});

const Customer = model("Customer", customerSchema);

export default Customer;
