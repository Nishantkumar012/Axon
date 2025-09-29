import { Router } from "express";
import {
  createBlockHandler,
  updateBlockHandler,
  deleteBlockHandler,
  getBlocksByPageHandler,
} from "../controllers/blockController";
import {authMiddleware} from "../middleware/authMiddleware";

const router = Router();

// all routes protected with auth
router.post("/:pageId/blocks", authMiddleware, createBlockHandler);     // create block in a page
router.get("/:pageId/blocks", authMiddleware, getBlocksByPageHandler);  // get all blocks of a page
router.patch("/blocks/:blockId", authMiddleware, updateBlockHandler);   // update block
router.delete("/blocks/:blockId", authMiddleware, deleteBlockHandler);  // delete block

export default router;
