import prisma from "../config/db";

// Create a new block in a page
export const createBlock = async (pageId: number, type: string, content: string) => {
  try {
    return await prisma.block.create({
      data: { pageId, type, content },
    });
  } catch (error) {
    throw new Error(`Error creating block: ${error}`);
  }
};

// Get all blocks for a specific page
export const getBlocksByPage = async (pageId: number) => {
  try {
    return await prisma.block.findMany({
      where: { pageId },
      orderBy: { id: "asc" },
    });
  } catch (error) {
    throw new Error(`Error fetching blocks: ${error}`);
  }
};

// Update a block
export const updateBlock = async (blockId: number, content: string) => {
  try {
    return await prisma.block.update({
      where: { id: blockId },
      data: { content },
    });
  } catch (error) {
    throw new Error(`Error updating block: ${error}`);
  }
};

// Delete a block
export const deleteBlock = async (blockId: number) => {
  try {
    return await prisma.block.delete({
      where: { id: blockId },
    });
  } catch (error) {
    throw new Error(`Error deleting block: ${error}`);
  }
};
