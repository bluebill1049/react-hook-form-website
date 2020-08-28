import React, { useEffect, useState, useRef } from "react"

import searchStyles from "./Search.module.css"

// const searchBarBreakWidth = 1100

const Search = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const searchInput = useRef(null)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize", handleResize)
  //   handleResize()
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <form className={searchStyles.searchForm}>
      {/* <button
        className={searchStyles.searchButton}
        onClick={() => searchInput.current.focus()}
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          height="28"
          width="28"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={searchStyles.spyGlass}
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </button> */}
      <input
        ref={searchInput}
        spellCheck="false"
        aria-label="search input"
        id="algolia-doc-search"
        placeholder="Search ..."
        className={searchStyles.searchBar}
        type="search"
      />
      {/* <input
          style={{
            width: "100%",
            appearance: "none",
            background: "transparent",
            border: 0,
            color: "white",
            fontSize: 18,
            fontWeight: 300,
            fontFamily: "inherit",
            position: "relative",
            padding: "4px 4px 4px 29px",
            backgroundImage: "url(/search.svg)",
            backgroundSize: "16px 16px",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
            backgroundPositionX: "4px",
          }}
          id="algolia-doc-search"
          type="search"
          placeholder="Search"
          aria-label="Search docs"
        /> */}
    </form>
  )
}
export default Search
