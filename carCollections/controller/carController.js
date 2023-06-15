const express = require("express");

const userModel = require("../model/carModel");

const getallCars = async (req, res) => {
  try {
    const getCars = await userModel.find();
    res.status(200).json({
      message: "All cars Gotten successfully",
      data: getCars,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while getting all the cars",
      error,
    });
  }
};
const createCar = async (req, res) => {
  try {
    const { brand, color, model, price, version } = req.body;

    const createCar = await userModel.create({
      brand,
      color,
      model,
      price,
      version,
    });
    res.status(201).json({
      message: "Created successfully",
      data: getCars,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creaing the car",
      error,
    });
  }
};
