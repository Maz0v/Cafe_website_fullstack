import Menu from "../model/menu.model.js"

export const getMenu = async(req,res) => {
try {
    const menu = await Menu.find()
    res.send(menu).status(200)
} catch (error) {
    console.log(error)
    res.send("Error" + error.message).status(500)
}
}
