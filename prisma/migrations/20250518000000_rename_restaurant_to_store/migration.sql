-- Rename table Restaurant to Store and update foreign keys

-- Rename table
ALTER TABLE "Restaurant" RENAME TO "Store";

-- MenuCategory adjustments
ALTER TABLE "MenuCategory" DROP CONSTRAINT "MenuCategory_restaurantId_fkey";
ALTER TABLE "MenuCategory" RENAME COLUMN "restaurantId" TO "storeId";
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Product adjustments
ALTER TABLE "Product" DROP CONSTRAINT "Product_restaurantId_fkey";
ALTER TABLE "Product" RENAME COLUMN "restaurantId" TO "storeId";
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Order adjustments
ALTER TABLE "Order" DROP CONSTRAINT "Order_restaurantId_fkey";
ALTER TABLE "Order" RENAME COLUMN "restaurantId" TO "storeId";
ALTER TABLE "Order" ADD CONSTRAINT "Order_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
