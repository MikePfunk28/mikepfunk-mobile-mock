import * as React from "react"

// Default remains 768 to avoid breaking existing callers.
export function useIsMobile( breakpoint: number = 768 ) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>( undefined )

  React.useEffect( () => {
    const mql = window.matchMedia( `(max-width: ${breakpoint - 1}px)` )
    const onChange = () => {
      setIsMobile( window.innerWidth < breakpoint )
    }
    mql.addEventListener( "change", onChange )
    // initialize
    setIsMobile( window.innerWidth < breakpoint )
    return () => mql.removeEventListener( "change", onChange )
  }, [breakpoint] )

  return !!isMobile
}
