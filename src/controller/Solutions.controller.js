//Import for config to DB
import { db } from "../model/Storage.js";
import { ref, uploadBytes, listAll, deleteObject, getDownloadURL } from "firebase/storage";
import { storage }from "../model/firebase.config.js";

// We GET all Solutions from DB Table solution_ciom
export const getSolutions = async (req, res) => {
  try {
    //throw new Error('Demo Error');
    const [rows] = await db.query("SELECT * FROM solution_ciom");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// We GET Solution by id from DB Table solution_ciom
export const getSolutionId = async (req, res) => {
  try {
    const id = req.params.id;
    const [row] = await db.query(
      "SELECT * FROM solution_ciom WHERE id = ?", id
    );
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// We can create one Solution for DB Table solution_ciom
export const createSolution = async (req, res) => {
  const img = req.file;
  const imgRef = ref(storage, `img/${img.originalname}`);
  const metatype = file.originalname
  const {tittle_s, img_s, img_banner_s, description_s } = req.body;
  try {
    await uploadBytes(imgRef, file.buffer, metatype)
      .then((snapshot) => {
        res.send("uploaded");
      })
      .catch((error) => console.log(error.message));
    const result = await db.query(
      "INSERT INTO solution_ciom (tittle_s, img_s, img_banner_s, description_s, active_NoActive, date_create, date_update) VALUES (?, ?, ?, ?, ?, 0, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
      [name_s, tittle_s, img_s, img_banner_s, description_s]
    );
    const affectedRows = result[0].affectedRows;
    res.send({ affectedRows });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const deleteSolution = async (req, res) => {
  try {
    const solution_id = req.params.id;
    const result = await db.query(
      "DELETE FROM solution_ciom WHERE id = ?",
      [solution_id]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Solution no found",
      });

    res.sendStatus(204).json({
      message: "Solution deleted",
    });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const updateSolution = async (req, res) => {
  try {
    const { id } = req.params;
    const {tittle_s, img_s, description_s} = req.body;
    const result = await db.query(
      "UPDATE solution_ciom SET tittle_s = IFNULL(?, tittle_s), img_s = IFNULL(?, img_s), description_s = IFNULL(?, description_s), date_update = UNIX_TIMESTAMP() WHERE id = ?",
      [tittle_s, img_s, description_s, id]
    );
    const [rows] = await db.query(
      "SELECT * FROM solution_ciom WHERE id = ?",
      [id]
    );

    res.json(rows[0]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Solution no Found" });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};