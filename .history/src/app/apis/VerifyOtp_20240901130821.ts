// // pages/api/verifyOtp.js
// import { verifyUserOtp } from '../../utils/otpService'; // Implement this function to verify OTP

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { contact, otp } = req.body;

//     const isValid = await verifyUserOtp(contact, otp); // Check if OTP is valid

//     if (isValid) {
//       return res.status(200).json({ message: 'OTP verified' });
//     } else {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
// }