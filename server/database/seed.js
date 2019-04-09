const mongoose = 'mongoose'
const { User, Band } = require('.')

module.exports = async function seedData() {
    const user = await User.create(userData)
    const bands = await Band.create(bandsData)
    user.favoriteBands = [ bands[0]._id ]
    await user.save()
    console.log(user)
    const result = await User.findOne({
        _id: user._id
    }).populate('favoriteBands')
    console.log(result)
}

const userData = {
    username: 'toni',
    email: 'example@gmail.com',
    password: '1234'
}

const bandsData = [
    {
        name: 'korn',
        genre: 'hardcore',
        touring: true,
    }
]