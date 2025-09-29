import { Request, Response } from "express";
import * as pageService from "../services/pageService";




// Create Page
export const createPageHandler = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const ownerId = req.userId; // from auth middleware
           
       if (typeof ownerId !== "number") {
      return res.status(401).json({ message: "Unauthorized: userId missing" });
    }
    const page = await pageService.createPage(title, ownerId);
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ message: "Error creating page", error: (error as Error).message });
  }
};

// Get all pages for user
export const getUserPagesHandler = async (req: Request, res: Response) => {
  try {
    const ownerId = req.userId;
    
     if (typeof ownerId !== "number") {
      return res.status(401).json({ message: "Unauthorized: userId missing" });
    }

    const pages = await pageService.getUserPages(ownerId);
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching pages", error: (error as Error).message });
  }
};

// Get single page by ID
export const getPageByIdHandler = async (req: Request, res: Response) => {
  try {
    const pageId = Number(req.params.pageId);
    const page = await pageService.getPageById(pageId);

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching page", error: (error as Error).message });
  }
};

// Update page
export const updatePageHandler = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const pageId = Number(req.params.pageId);

    const updatedPage = await pageService.updatePage(title, pageId);
    res.status(200).json({ message: "Page updated", updatedPage });
  } catch (error) {
    res.status(500).json({ message: "Error updating page", error: (error as Error).message });
  }
};

// Delete page
export const deletePageHandler = async (req: Request, res: Response) => {
  try {
    const pageId = Number(req.params.pageId);

    const deletedPage = await pageService.deletePage(pageId);
    res.status(200).json({ message: "Page deleted", deletedPage });
  } catch (error) {
    res.status(500).json({ message: "Error deleting page", error: (error as Error).message });
  }
};


// Page controller functions: createPageHandler, getUserPagesHandler, getPageByIdHandler, updatePageHandler, deletePageHandler

// Block controller functions: createBlockHandler, getBlocksByPageHandler, updateBlockHandler, deleteBlockHandler


