"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PaymentProps = {
  calculateTotal: number;
};
export const Payment = ({ calculateTotal }: PaymentProps) => {
  const [shipping, setShipping] = useState(15);
  const [isopen, setisOpen] = useState(false);
  const paymentTotal = calculateTotal + shipping;
  return (
    <div className="w-[471px] h-[276px] flex flex-col gap-5 px-4 py-4 bg-white rounded-[20px] mt-6">
      <p className="font-semibold text-5">Payment info</p>
      <div className="w-[439px] h-[64px] flex flex-col gap-2">
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Items</p>
          <p className="font-bold text-4">{calculateTotal}$</p>
        </div>
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Shipping</p>
          <p className="font-bold text-4">{shipping}$</p>
        </div>
      </div>
      <Separator />
      <div className="w-full h-[28px] flex justify-between">
        <p className="text-4 text-[#71717a]">Total</p>
        <p className="font-bold text-4">{paymentTotal}$</p>
      </div>

      <Dialog open={isopen} onOpenChange={setisOpen}>
        <DialogTrigger className="w-full">
          <Button className="bg-[#ef4444] font-medium text-[14px] text-white rounded-[9999px] w-full">
            Checkout
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[672px] h-[439px]">
          <DialogHeader>
            <DialogDescription>
              <div className="flex items-center gap-6 flex-col text-[24px] font-semibold text-black">
                Your order has been successfully placed !
                <img src="/illustration.png" alt="" />
                <Button onClick={() => setisOpen(false)}>close</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
