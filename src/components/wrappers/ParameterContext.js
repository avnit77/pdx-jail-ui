import React, {
    createContext,
    useState,
    useMemo,
    useEffect,
    useContext,
} from 'react'
import queryString from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'
import withConfig from './withConfig'

const ParameterContext = createContext(null)

const ParameterContextProvider = ({ config, children }) => {
    const { API_URL } = config
    const { search } = useLocation()
    const location = useLocation()
    const history = useHistory()
    const queryParams = useMemo(() => queryString.parse(search), [search])
    // const [query, setQuery] = useState({})
    const [clear, setClear] = useState(false)
    const gridQuery = Object.keys(queryParams).map((x) => ({
        id: x,
        value: queryParams[x],
    }))



    // useEffect(() => {
    //     if (query && Object.keys(query).length) {
    //         history.push({
    //             search: queryString.stringify({ ...queryParams, ...query }),
    //         })
    //     }
    // }, [query])

    return (
        <ParameterContext.Provider
            value={{
                // setQuery,
                queryParams,
                gridQuery,
                clear,
                setClear,
            }}
        >
            {children}
        </ParameterContext.Provider>
    )
}

export { ParameterContext }
export default withConfig(ParameterContextProvider)
