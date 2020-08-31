import * as React from "react"
import searchStyles from "./Search.module.css"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"

const Search = () => {
  const timer = React.useRef<any>({})
  const { action, state } = useStateMachine(updateSetting)

  React.useEffect(() => {
    // @ts-ignore
    window.docsearch({
      apiKey: "953c771d83fb6ffd55fe58da997f2d9d",
      indexName: "react-hook-form",
      inputSelector: "#algolia-doc-search",
    })

    return () => {
      clearTimeout(timer.current)
      action({
        isFocusOnSearch: false,
      })
    }
  }, [])

  return (
    <form className={searchStyles.searchForm}>
      <input
        className={searchStyles.searchBar}
        spellCheck="false"
        type="search"
        aria-label="search input"
        id="algolia-doc-search"
        placeholder="Search ..."
        onFocus={() =>
          action({
            isFocusOnSearch: true,
          })
        }
        onBlur={() => {
          timer.current && clearTimeout(timer.current)
          timer.current = setTimeout(
            () =>
              action({
                isFocusOnSearch: false,
              }),
            310
          )
        }}
      />
      {!state.setting?.isFocusOnSearch && (
        <span className={`search icon ${searchStyles.icon}`} />
      )}
    </form>
  )
}
export default Search
