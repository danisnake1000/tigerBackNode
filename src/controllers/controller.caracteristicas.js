import express from 'express';
import {pool} from "../conexion.js"

const app = express()

export const getCaracteristicas = async (req, res) => {
    const [resp] = await pool.query("SELECT * FROM caracteristicas")
    res.json(resp)
}
export const getIdCaracteristicas = async (req, res) => {
    const {icon,descripcion} = req.body
    const [resp] = await pool.query("")

}
export const postCaracteristicas = async (req, res) => {
    const {icon,descripcion} = req.body
    const [resp] = await pool.query("INSERT INTO caracteristicas(icon,descripcion) VALUES(?,?)",[icon,descripcion])
    res.send({
        id : resp.id,
        icon,
        descripcion
    })

}

export const updateCaracteristicas = async (req, res) => {
    const respuesta = await pool.query()
}

export const deleteCaracteristicas = async (req, res) => {
    const respuesta = await pool.query()
}
