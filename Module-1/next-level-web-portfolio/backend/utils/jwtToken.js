export const generateToken = (user, message, statusCode, res) => {
  try {
    const token = user.generateJsonWebToken();

    // Calculate cookie expiration date
    const cookieExpires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

    // Set secure HTTP-only cookie
    res
      .status(statusCode)
      .cookie("token", token, {
        expires: cookieExpires,
        httpOnly: true,
        secure: true, // Ensure HTTPS is properly configured in production
      })
      .json({
        success: true,
        message,
        user,
        token,
      });
  } catch (err) {
    console.error("Error setting token cookie:", err);
    res.status(500).json({ success: false, message: "Token generation failed" });
  }
};
