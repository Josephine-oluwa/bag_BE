import express, {Request, Response} from "express"
import StudentModel from "../model/StudentModel"
import bagModel from "../model/bagModel"
import mongoose from "mongoose";

export const createBagRecord = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { bag, email } = req.body;
  
      const searchUser = await StudentModel.findOne({ email });
      if (searchUser) {
        const bagInfo = await bagModel.create({
          bag,
          cash: bag * 200,
        });
  
        await StudentModel.findByIdAndUpdate(
          searchUser._id,
          {
            balance: searchUser?.balance + bagInfo?.cash,
          },
          { new: true }
        );
  
        searchUser.bagHistory.push(new mongoose.Types.ObjectId(bagInfo?._id));
        searchUser.save();
  
        return res.status(201).json({
          message: "created",
          data: bagInfo,
        });
      } else {
        return res.status(404).json({
          message: "no student match",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  };
  


export const viewBagRecord = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {studentID} = req.params;

        const searchUser = await StudentModel.findById(studentID).populate({
            path: "bagHistory",
            options: {
                sort: {
                    createdAt: -1
                }
            }
        })
        return res.status(201).json({
            message: "created",
            data: searchUser
        })
    } catch (error) {
         return res.status(201).json({
            message: "Error Data",
            error
        })
    }
}