import db from "../model/Storage.js";

export const getStorage = async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM storage_category");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getStorageById = async (req, res) => {}
export const createStorage = async (req, res) => {}
export const deleteStorage = async (req, res) => {}
export const updateStorage = async (req, res) => {}
