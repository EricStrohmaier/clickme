"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

export function InfoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 rounded-full w-10 h-10"
          aria-label="Information"
        >
          <InfoIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">🤔 What is this?</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p>
            A button. You click it. Weird things happen. Sometimes sounds. Sometimes a message. Sometimes nothing. Sometimes everything.
          </p>
          <p>
            First click farts. You're welcome.
          </p>
          <p>
            There's no goal. Or is there?
          </p>
          <div className="space-y-2 pt-2">
            <p className="flex items-center"><span className="mr-2">💡</span> Tip: Keep clicking. We dare you.</p>
            <p className="flex items-center"><span className="mr-2">👁️</span> Live chaos is shared across the world.</p>
            <p className="flex items-center"><span className="mr-2">📞</span> Call your mom.</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button variant="secondary">Got it, let me click again</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}