import { db } from "../model/Storage.js";

export const getStorage = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM storage_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const  getStorageById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      "SELECT * FROM storage_category WHERE id = ?", [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
      return res.send({ message: errro.message });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createStorage = async (req, res) => {
  try {
    const id_category = req.params.id;
    const [rows] = await db.query(
      "SELECT * FROM category_solution WHERE id = ? ",
      [id_category]
    );
    if (rows.length > 0) {
      const {tittle_sc, description_sc, vid_sc } = req.body;
      const result = await db.query(
        "INSERT INTO storage_category (tittle_sc, description_sc, vid_sc, active_NoActive, id_c, date_create, date_update) VALUES (?, ?, ?, ?, 0, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
        [tittle_sc, description_sc, vid_sc, id_category]
      );
      const affectedRows = result[0].affectedRows;
      res.send({ affectedRows });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};

export const deleteStorage = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM storage_category WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Storage no found" });
    res.sendStatus(204).json({ message: "Storage deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
};

export const updateStorage = async (req, res) => {
  try {
    const id_sc = req.params.id;
    const {tittle_sc, description_sc, img_sc, vid_sc, active_NoActive} = req.body;
    const result = await db.query("SELECT * FROM storage_category WHERE id = ?", id_sc);
    if (result.length > 0) {
        await db.query(
        "UPDATE storage_category SET tittle_sc = IFNULL(?, tittle_sc), description_sc = IFNULL(?, description_sc), img_sc = IFNULL(?, img_sc), vid_sc = IFNULL(?, vid_sc), active_NoActive = IFNULL(?, active_NoActive),date_update = UNIX_TIMESTAMP() WHERE id = ?",
        [tittle_sc, description_sc, img_sc, vid_sc, active_NoActive, id_sc]
      );
      const [rows] = await db.query(
        "SELECT * FROM storage_category WHERE id = ?",
        [id_sc]
      );
      res.json(rows[0]);
    }else{
      res.status(404).json({message: "Storage NOT found"});
    }
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};