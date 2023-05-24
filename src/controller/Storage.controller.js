import { db } from "../model/Storage.js";

export const getSolutions = async (req, res) => {
  try {
    //throw new Error('Demo Error');
    const [rows] = await db.query("SELECT * FROM solution_ciom");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM main_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM sub_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getVidSubCategories = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM vid_sub_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Somethin went wrong" });
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
      "DELETE FROM solution_ciom WHERE solution_id = ?",
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
    const { name_solution, tittle_solution, description_solution } = req.body;
    const result = await db.query("UPDATE solution_ciom SET name_solution = IFNULL(?, name_solution), tittle_solution = IFNULL(?, tittle_solution), description_solution = IFNULL(?, description_solution), date_update = UNIX_TIMESTAMP() WHERE solution_id = ?" , [name_solution, tittle_solution, description_solution, id])
    const [rows] = await db.query("SELECT * FROM solution_ciom WHERE solution_id = ?", [id])

    res.json(rows[0])

    if (result.affectedRows === 0) return res.status(404).json({ message: "Solution no Found"});


  } catch (error) {
    return res.status(500).send(error.message || error);
  }
}