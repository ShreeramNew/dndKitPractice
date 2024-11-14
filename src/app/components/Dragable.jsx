"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

export default function Dragable({ id, text }) {
   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
   const style = {
      transform: CSS.Translate.toString(transform),
   };
   return (
      <div
         ref={setNodeRef}
         style={style}
         {...listeners}
         {...attributes}
         className=" w-[100px] h-[200px] bg-blue-900 cursor-move text-white"
      >
         {text}
      </div>
   );
}
