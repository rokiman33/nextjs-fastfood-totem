import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/products-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  console.log(productId); // Debug para verificar se o ID está correto

  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      store: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true,
        },
      },
    },
  });

  console.log(product?.name)

  if (!product) {
    return notFound();
  }

  if (product.store.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;