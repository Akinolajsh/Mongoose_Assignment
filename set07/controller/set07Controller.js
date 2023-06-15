const express = require(express);

const userModel = require("../model/set07Model");

const getallStudents = async (req, res) => {
  try {
    const getStudents = await userModel.find();
    res.status(200).json({
      message: "All students gotten successfully",
      data: getStudents,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while getting students",
    });
  }
};
const createStudents = async (req, res) => {
  try {
    const { name, email, course, age, sex } = req.body;

    const createStudents = await userModel.create({
      name,
      email,
      course,
      age,
      sex,
    });
    res.status(200).json({
      message: "Students created successfully",
      data: createStudents,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creating students",
    });
  }
};
