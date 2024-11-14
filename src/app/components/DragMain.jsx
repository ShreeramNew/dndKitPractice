"use client";
import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Dropable from "./Dropable";
import Dragable from "./Dragable";

export default function DragMain() {
   let allData = [
      {
         id: "hs",
         label: "Item 1",
      },
      {
         id: "hsh",
         label: "Item 2",
      },
      {
         id: "ndhd",
         label: "Item 3",
      },
   ];
   const [dropppedItems, setDroppedItems] = useState({
      drop1: allData,
      drop2: [],
      drop3: [],
      drop4: [],
   });

   const containsItem = (dropAreaId, id) => {
      return dropppedItems[dropAreaId].some((item) => item.id === id);
   };

   useEffect(() => {
      console.log(dropppedItems);
   }, [dropppedItems]);

   const handleDragEnd = (event) => {
      const { active, over } = event;
      console.log("h");

      if (over) {
         let dropedItem = allData.filter((item) => item.id === active.id);
         let targetAreaId = over.id;

         if (!containsItem(targetAreaId, active.id)) {
            let sourceAraeaId = Object.keys(dropppedItems).find((dropAreaId) =>
               dropppedItems[dropAreaId].some((item) => item.id === active.id)
            );

            setDroppedItems((prevState) => {
               let remainingItemsInSource = prevState[sourceAraeaId].filter(
                  (item) => item.id !== active.id
               );

               let updatedTargetArea = prevState[targetAreaId].concat(dropedItem);

               return {
                  ...prevState,
                  [targetAreaId]: updatedTargetArea,
                  [sourceAraeaId]: remainingItemsInSource,
               };
            });
         }
      }
   };
   return (
      <div className=" w-full h-screen flex justify-center items-center ">
         <DndContext onDragEnd={handleDragEnd}>
            <Dropable id={"drop1"}>
               {dropppedItems.drop1.map((item) => (
                  <Dragable key={item.id} id={item.id} text={item.label} />
               ))}
            </Dropable>
            <Dropable id={"drop2"}>
               {dropppedItems.drop2.map((item) => (
                  <Dragable key={item.id} id={item.id} text={item.label} />
               ))}
            </Dropable>
            <Dropable id={"drop3"}>
               {dropppedItems.drop3.map((item) => (
                  <Dragable key={item.id} id={item.id} text={item.label} />
               ))}
            </Dropable>
            <Dropable id={"drop4"}>
               {dropppedItems.drop4.map((item) => (
                  <Dragable key={item.id} id={item.id} text={item.label} />
               ))}
            </Dropable>
         </DndContext>
      </div>
   );
}
