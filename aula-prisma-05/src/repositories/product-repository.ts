import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const TABLE_NAME = "products";

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

async function getProduct(id: number) {
  const products = await prisma.product.findUnique({
    where: { id }
  });
  return products;
}

async function createProduct(product) {
  return await prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;