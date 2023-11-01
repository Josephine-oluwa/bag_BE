import express, {Request, Response} from "express"
import bcrypt from "bcrypt"
import StudentModel from "../model/StudentModel";

export const createStudent = async(req: Request, res: Response ) => {
   try {
      const {email, password,  schoolName} = req.body;

      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)

      const student = await StudentModel.create({
         email,
       
         password: hashed,
        
         schoolName,
         balance: 0
      })

      return res.status(201).json({
         message: "created",
         data: student
      })


   } catch (error) {
      return res.status(404).json({
         message: Error
      })
   }
}


export const getAllStudent = async(req: Request, res: Response ): Promise<Response> => {
   try {
     const student = await StudentModel.find()

      return res.status(201).json({
         message: "created",
         data: student
      })


   } catch (error) {
      return res.status(404).json({
         message:"Error"
      })
   }
}


export const getAStudent = async(req: Request, res: Response ): Promise<Response> => {
   try {
    const studentID = req.params;

    const student = await StudentModel.findById(studentID)

      return res.status(201).json({
         message: "created",
         data: student
      })


   } catch (error) {
      return res.status(404).json({
         message: Error
      })
   }
}

export const updateStudentInfo = async(req: Request, res: Response ): Promise<Response> => {
   try {
      const {studentID} = req.params;
      const {houseAddress, gender, phoneNumber} = req.body

      const student = await StudentModel.findByIdAndUpdate(
         studentID,
         {
            houseAddress, gender, phoneNumber
         },
         {new: true}
      )

      return res.status(201).json({
         message: "created",
         data: student
      })


   } catch (error) {
      return res.status(404).json({
         message: Error
      })
   }
}


export const updateStudentImage = async(req: Request, res: Response ): Promise<Response> => {
   try {
      const {studentID} = req.params;
      const {houseAddress, gender, phoneNumber} = req.body

      const student = await StudentModel.findByIdAndUpdate(
         studentID,
         {
            houseAddress, gender, phoneNumber
         },
         {new: true}
      )

      return res.status(201).json({
         message: "created",
         data: student
      })


   } catch (error) {
      return res.status(404).json({
         message: Error
      })
   }
}