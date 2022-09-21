import axios from "axios"
import { API_URL } from "../config"
import { help } from "../interfaces/iHelp"

class HelpAPI {
  findAll = () => axios.get<Array<help>>(`${API_URL}Help`).then((res) => res.data)
  findOne = (id: string | number) => axios.get<help>(`${API_URL}Help/${id}`).then((res) => res.data)
  create = (data: help) => axios.post(`${API_URL}Help`, data)
  update = (id: string | number, data: help) => axios.put(`${API_URL}Help/${id}`, data)
}

export const helpApi = new HelpAPI()
