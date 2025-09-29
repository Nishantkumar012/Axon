import { Request, Response } from "express";
import * as blockService from "../services/blockService";

// createBlock
export const createBlockHandler = async (req: Request, res: Response) => {
  try {
    const { type, content } = req.body;
    const pageId = Number(req.params.pageId);

    const block = await blockService.createBlock(pageId, type, content);

    res.status(201).json({ message: "Block created", block });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while creating block", error: (error as Error).message });
  }
};

// get blocks by pageId
export const getBlocksByPageHandler = async (req: Request, res: Response) => {
  try {
    const pageId = Number(req.params.pageId);

    const blocks = await blockService.getBlocksByPage(pageId);

    if (!blocks || blocks.length === 0) {
      return res.status(404).json({ message: "No blocks found for this page" });
    }

    res.status(200).json({ message: "Blocks fetched", blocks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while fetching blocks", error: (error as Error).message });
  }
};

// update block
export const updateBlockHandler = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const blockId = Number(req.params.blockId);

    const updatedBlock = await blockService.updateBlock(blockId, content);

    if (!updatedBlock) {
      return res.status(404).json({ message: "Block not found" });
    }

    res.status(200).json({ message: "Block updated", updatedBlock });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating block", error: (error as Error).message });
  }
};

// delete block
export const deleteBlockHandler = async (req: Request, res: Response) => {
  try {
    const blockId = Number(req.params.blockId);

    const deletedBlock = await blockService.deleteBlock(blockId);

    if (!deletedBlock) {
      return res.status(404).json({ message: "Block not found" });
    }

    res.status(200).json({ message: "Block deleted", deletedBlock });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting block", error: (error as Error).message });
  }
};
