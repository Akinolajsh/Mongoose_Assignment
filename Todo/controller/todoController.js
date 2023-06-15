const express = require("express");

const userModel = require("../model/todoModel");

const getallTodo = async (req, res) => {
  try {
    const getTodo = await userModel.find();
    res.status(200).json({
      message: "All Todo gotten successfully",
      data: getTodo,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while getting Todo",
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const { title, description, date, complete } = req.body;

    const createtodo = await userModel.create({
      title,
      description,
      date,
      complete,
    });
    res.status(201).json({
      message: "Created successfully",
      data: createtodo,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creating Todo",
    });
  }
};
