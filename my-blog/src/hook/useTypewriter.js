import { useState, useEffect } from 'react'

export default function useTypewriter(texts, { 
  typingSpeed = 150, 
  deletingSpeed = 50, 
  delayBetweenTexts = 2000 
} = {}) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
      } else {
        // Deleting logic
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          // Move to next text or loop back
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [
    displayText, 
    currentTextIndex, 
    isDeleting, 
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts
  ])

  return displayText
}