import { createContext, useState } from "react"
import { helpApi } from "../api/HelpAPI"
import { help } from "../interfaces/iHelp"

export const HelpContext = createContext<any>({})

const HelpProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState<Array<help>>([])
  const [entity, setEntity] = useState<help>()

  const GetAll = async () => {
    setIsLoading(true)
    await helpApi
      .findAll()
      .then((res) => setList(res))
      .catch(() => setList([]))
      .finally(() => setIsLoading(false))
  }

  const GetOne = async (id: string | number) => {
    setIsLoading(true)
    await helpApi
      .findOne(id)
      .then((res) => setEntity(res))
      .catch(() => setEntity(undefined))
      .finally(() => setIsLoading(false))
  }

  return (
    <HelpContext.Provider
      value={{
        list,
        entity,
        GetAll,
        isLoading,
        GetOne
      }}
    >
      {props.children}
    </HelpContext.Provider>
  )
}
export default HelpProvider
