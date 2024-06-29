

export const checkUserAuth = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username !== "keshav" || password !== "password123") {
      throw new Error('Authentication failed');
    }

    res.json({
      message: 'Successfully logged in',
      status: 200,

    })
  } catch (error) {
    throw new Error('Authentication failed');
  }
}
