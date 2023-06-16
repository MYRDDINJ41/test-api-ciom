import { db } from "../model/Storage.js";

export const getStorage = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM storage_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getStorageById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      "SELECT * FROM storage_category WHERE id_sc = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getStorageByCategoryId = async (req, res) => {
  try {
    const [result] = await db.query(
      "SELECT * FROM category_solution WHERE id = ?",
      [req.params.id]
    );
    if (result.length > 0) {
      const id = [req.params.id];
      const [rows] = await db.query(
        "SELECT * FROM storage_category WHERE id_c = ? ",
        [id]
      );
      res.json(rows);
    } else {
      return res.send({ message: "Category not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createStorage = async (req, res) => {
  try {
    const id = req.params;
    const [rows] = await db.query(
      "SELECT * FROM category_solution WHERE id = ? ",
      [id]
    );
    if (rows.length > 0) {
      const { name_sc, tittle_sc, description_sc, vid_sc,id } = req.body;
      const result = await db.query(
        "INSERT INTO storage_category (name_sc, tittle_sc, description_sc, vid_sc, active_NoActive, id_c, date_create, date_update) VALUES (?, ?, ?, ?, 0, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
        [name_sc, tittle_sc, description_sc, vid_sc, id]
      );
      const affectedRows = result[0].affectedRows;
      res.send({ affectedRows });
    }
  } catch (error) {
    return res.send({ error: error });
  }
};
export const deleteStorage = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM storage_category WHERE id_sc = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Storage no found" });
    res.sendStatus(204).json({ message: "Storage deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong" + error.message });
  }
};
export const updateStorage = async (req, res) => {};
