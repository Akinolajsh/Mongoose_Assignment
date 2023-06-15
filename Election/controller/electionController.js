const express = require("express");

const userModel = require("../model/electionModel");

const getallelections = async (req, res) => {
  try {
    const getelection = await userModel.find();
    res.status(200).json({
      message: "Election gotten successfully",
      data: getelection,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while retrieving the election",
    });
  }
};
const createelection = async (req, res) => {
  try {
    const { party, vote, votersname, cadidatename, gender } = req.body;
    const createelection = await userModel.create({
      party,
      vote,
      votersname,
      cadidatename,
      gender,
    });
    res.status(201).json({
      message: "Election created successfully",
      data: createelection,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while creating election",
    });
  }
};
