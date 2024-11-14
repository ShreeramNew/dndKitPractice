"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

export default function Dropable({ children, id }) {
   const { isOver, setNodeRef } = useDroppable({
      id,
   });
   return (
      <div
         className={`${
            isOver ? "border-blue-800" : "border-blue-500"
         } border-2  rounded-lg w-[40%] h-[48vh] flex gap-2 `}
         ref={setNodeRef}
      >
         {children}
      </div>
   );
}
