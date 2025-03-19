import React from "react"

import TimeStamp from "./TimeStamp"
import { CheckCircle, Clock, XCircle } from "lucide-react"

const FactCard = ({ TrueFact, data }) => {

  // Neon color scheme inspired by loading animation
  const colors = {
    true: {
      primary: '#00FFDD', // Neon teal
      glow: 'rgba(0, 255, 221, 0.15)',
      border: 'rgba(0, 255, 221, 0.5)'
    },
    false: {
      primary: '#FF00A0', // Neon pink
      glow: 'rgba(255, 0, 160, 0.15)',
      border: 'rgba(255, 0, 160, 0.5)'
    },
    neutral: {
      bg: '#121212',
      cardBg: '#1A1A1A',
      text: '#FFFFFF',
      subtext: '#AAAAAA'
    }
  };
  const colorSet = TrueFact ? colors.true : colors.false;

  return (
    <div
      className="w-full mb-4 relative rounded-lg mx-2"
      style={{
        backgroundColor: colors.neutral.cardBg,
        boxShadow: `0 0 15px ${colorSet.glow}`,
        border: `1px solid ${colorSet.border}`
      }}
    >
      <div className="p-4 overscroll-none rounded-lg" style={{ backgroundColor: colors.neutral.cardBg }}>
        {/* Header with validation status */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            {TrueFact ? (
              <CheckCircle style={{ color: colors.true.primary }} size={20} />
            ) : (
              <XCircle style={{ color: colors.false.primary }} size={20} />
            )}
            <span
              className="font-bold ml-2"
              style={{
                color: colorSet.primary,
                textShadow: `0 0 5px ${colorSet.glow}`
              }}
            >
              {TrueFact ? "Verified" : "Misleading"}
            </span>
          </div>
          {/* Timestamp with neon styling */}
          <div
            className="flex items-center px-3 py-1 rounded-full"
            style={{
              border: `1px solid ${colorSet.border}`,
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }}
          >
            <Clock size={14} className="mr-1" style={{ color: colorSet.primary }} />
            <span
              className="text-sm font-mono"
              style={{ color: colors.neutral.text }}
            >
              {(data.timestampInStr || 0)}
            </span>
          </div>
        </div>
        {/* Claim content with neon accent */}
        <div
          className="mb-3 p-3 rounded-md"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderLeft: `2px solid ${colorSet.primary}`,
            color: colors.neutral.text
          }}
        >
          <div className="italic">
            "{data.claim || 'Claim made in the video'}"
          </div>
        </div>
        {/* Explanation section with neon square accent */}
        <div
          className="text-sm relative pl-4"
          style={{ color: colors.neutral.subtext }}
        >
          <div
            className="absolute left-0 top-1 w-2 h-2"
            style={{
              backgroundColor: colorSet.primary,
              boxShadow: `0 0 5px ${colorSet.primary}`
            }}
          />
          <p>{data.explanation || (TrueFact
            ? 'Our analysis confirms this statement is factually accurate.'
            : 'Our analysis found this statement to be misleading or inaccurate.')}
          </p>
        </div>
      </div>
    </div>
  )
}
export default FactCard
