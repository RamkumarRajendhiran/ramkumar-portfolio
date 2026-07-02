export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const middleOfViewport = window.innerHeight / 2;
  const elementHeight = elementRect.height;
  
  // Target position aligns the center of the element with the center of the screen
  let targetPosition = absoluteElementTop - middleOfViewport + (elementHeight / 2);
  
  // Pad for fixed navbar (~80px) to make sure we don't push it too high if it is tall
  const navbarHeight = 80;
  if (targetPosition < absoluteElementTop - navbarHeight) {
    if (elementHeight > window.innerHeight - navbarHeight) {
      targetPosition = absoluteElementTop - navbarHeight - 20; // 20px top padding
    }
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  targetPosition = Math.max(0, Math.min(targetPosition, maxScroll));
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // Snappy speed of 400ms
  const duration = 400; 
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const t = Math.min(progress / duration, 1);
    
    // Snappy cubic ease-out transition (fast start, decelerating finish)
    const ease = 1 - Math.pow(1 - t, 3);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  window.requestAnimationFrame(step);
};

export const isCollegeMatch = (col1, col2) => {
  if (!col1 || !col2) return false;
  const c1 = col1.toLowerCase();
  const c2 = col2.toLowerCase();
  
  const ignoreWords = ["college", "university", "institute", "of", "and", "engineering", "higher", "secondary", "school", "education", "research", "autonomous"];
  
  const getKeywords = (str) => {
    return str.split(/[\s,()&\-\/]+/)
              .map(w => w.trim())
              .filter(w => w.length >= 3 && !ignoreWords.includes(w));
  };
  
  const kw1 = getKeywords(c1);
  const kw2 = getKeywords(c2);
  
  return kw1.some(k => kw2.includes(k));
};
