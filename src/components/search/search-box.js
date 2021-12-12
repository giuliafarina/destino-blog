import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"

export default connectSearchBox(
    ({ refine, currentRefinement, className, onFocus }) => (
        // Inline styling to avoid flicker during load of css
        <form style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", padding: "20px 8%", marginBottom: "0", background: "transparent" }} className={className}>
            <input style={{ background: "transparent", border: "none" }}
                className="SearchInput"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={e => refine(e.target.value)}
                value={currentRefinement}
                onFocus={onFocus}
            />
            <SearchIcon size="1em" className="SearchIcon" />
        </form>
    )
)