import { useEffect, useState, useCallback } from 'react'
// Taken from useHooks site

function useKeyPress(targetKey: string) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey]
  ) // Only recreate if targetKey changes

  const upHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    },
    [targetKey]
  ) // Only recreate if targetKey changes

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])

  return keyPressed
}

export default useKeyPress

// old
// =======================================================
// function useKeyPress(targetKey: string) {
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false)

//   // If pressed key is our target key then set to true
//   function downHandler({ key }: KeyboardEvent) {
//     if (key === targetKey) {
//       setKeyPressed(true)
//     }
//   }

//   // If released key is our target key then set to false
//   const upHandler = ({ key }: KeyboardEvent) => {
//     if (key === targetKey) {
//       setKeyPressed(false)
//     }
//   }

//   // Add event listeners
//   useEffect(() => {
//     window.addEventListener('keydown', downHandler)
//     window.addEventListener('keyup', upHandler)
//     // Remove event listeners on cleanup
//     return () => {
//       window.removeEventListener('keydown', downHandler)
//       window.removeEventListener('keyup', upHandler)
//     }
//   }, []) // Empty array ensures that effect is only run on mount and unmount

//   return keyPressed
// }
