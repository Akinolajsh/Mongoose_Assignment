const express = require("express");
const userModel = require("../model/blogModel");

//Get User

const getallUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "Gotten all Users",
      data: getUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while getting users",
      error,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const { title, writer, content, viewers } = req.body;
    const createUser = await userModel.create({
      title,
      writer,
      content,
      viewers,
    });
    res.status(200).json({
      message: "User has been created",
      data: createUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creating user",
      error,
    });
  }
};
