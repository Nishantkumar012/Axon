import prisma from '../config/db'

// Create page
export const createPage = async (title: string, ownerId: number) => {
  try {
    return await prisma.page.create({
      data: { title, ownerId },
    });
  } catch (error) {
    throw new Error(`Error creating page: ${error}`);
  }
};

// Get single page by ID
export const getPageById = async (pageId: number) => {
  try {
    return await prisma.page.findUnique({
      where: { id: pageId },
      include: { blocks: true },
    });
  } catch (error) {
    throw new Error(`Error fetching page: ${error}`);
  }
};

// Get all pages of a user
export const getUserPages = async (ownerId: number) => {
  try {
    return await prisma.page.findMany({
      where: { ownerId },
      orderBy: { id: 'desc' },
    });
  } catch (error) {
    throw new Error(`Error fetching user pages: ${error}`);
  }
};

// Update page
export const updatePage = async (title: string, pageId: number) => {
  try {
    return await prisma.page.update({
      where: { id: pageId },
      data: { title },
    });
  } catch (error) {
    throw new Error(`Error updating page: ${error}`);
  }
};

// Delete page
export const deletePage = async (pageId: number) => {
  try {
    return await prisma.page.delete({
      where: { id: pageId },
    });
  } catch (error) {
    throw new Error(`Error deleting page: ${error}`);
  }
};
