exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id
    const updates = req.body

    const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user
    })
  } catch (error) {
    console.error('Update profile error:', error)
    res.status(500).json({
      success: false,
      message: 'Error updating profile',
      error: error.message
    })
  }
} 