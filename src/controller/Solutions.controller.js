import { db } from "../model/Storage.js";
import multer from "multer";

export const getSolutions = async (req, res) => {
  try {
    //throw new Error('Demo Error');
    const [rows] = await db.query("SELECT * FROM solution_ciom");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSolutionId = async (req, res) => {
  try {
    const id_solution = [req.params.id];
    const [row] = await db.query(
      "SELECT * FROM solution_ciom WHERE id_solution = ?",
      id_solution
    );
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createSolution = async (req, res) => {
  try {
    const { name_solution, tittle_solution, description_solution } = req.body;
    const result = await db.query(
      "INSERT INTO solution_ciom (name_solution, tittle_solution, description_solution, date_create, date_update) VALUES (?, ?, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
      [name_solution, tittle_solution, description_solution]
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
      "DELETE FROM solution_ciom WHERE id_solution = ?",
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
    const {
      name_solution,
      tittle_solution,
      img_solution,
      description_solution,
    } = req.body;
    const result = await db.query(
      "UPDATE solution_ciom SET name_solution = IFNULL(?, name_solution), tittle_solution = IFNULL(?, tittle_solution), img_solution = IFNULL(?, img_solution), description_solution = IFNULL(?, description_solution), date_update = UNIX_TIMESTAMP() WHERE id_solution = ?",
      [name_solution, tittle_solution, img_solution, description_solution, id]
    );
    const [rows] = await db.query(
      "SELECT * FROM solution_ciom WHERE id_solution = ?",
      [id]
    );

    res.json(rows[0]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Solution no Found" });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};


export const uploadImage = async (req, res) => {
  try {

    const imgUrl = "resources/images/" + req.file.filename

    console.log(imgUrl);
    console.log(req.file);
    //res.send("uploadIMG");

    const result = await db.query("UPDATE solution_ciom SET img_solution = IFNULL(?, img_solution) WHERE id_solution = ?", [imgUrl, req.params.id]);

    //res.sendFile(result);

    const [rows] = await db.query(
      "SELECT * FROM solution_ciom WHERE id_solution = ?",
      [req.params.id]
    );

    res.json(rows[0]);
    

  } catch (error) {
    res.status(500).send(error.message || error);
  }
};