import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const leetcodeContext = createContext();

export const LeetcodeProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/viraldobariya33/progress")
      .then((data) => data.json())
      .then((data) => data.numAcceptedQuestions)
      .then((data) => {
        // Transform API response to make it easier to use
        const transformed = {
          solved: {
            easy: data.numAcceptedQuestions?.[0]?.count || 0,
            medium: data.numAcceptedQuestions?.[1]?.count || 0,
            hard: data.numAcceptedQuestions?.[2]?.count || 0,
          },
          percentage: {
            easy: data.userSessionBeatsPercentage?.[0]?.percentage || 0,
            medium: data.userSessionBeatsPercentage?.[1]?.percentage || 0,
            hard: data.userSessionBeatsPercentage?.[2]?.percentage || 0,
          },
          total: (data.numAcceptedQuestions?.[0]?.count || 0) + 
                 (data.numAcceptedQuestions?.[1]?.count || 0) + 
                 (data.numAcceptedQuestions?.[2]?.count || 0)
        };
        console.log(transformed)
        setLeetcodeData(transformed);
      })
      .catch((error) => console.error('LeetCode API error:', error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <leetcodeContext.Provider value={{ loading, leetcodeData }}>
      {children}
    </leetcodeContext.Provider>
  );
};
