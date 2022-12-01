import tw from 'tailwind-styled-components'

export const Title = tw.h2<{ $center?: boolean }>`
 ${(p) => (p.$center ? 'text-center' : '')}
  text-2xl 
  font-bold 
  text-gray-800 
  dark:text-white 
  md:text-3xl
`

export const TextBase = tw.p<{ $bold?: boolean }>`
 ${(p) => (p.$bold ? 'block text-xl font-semibold' : 'text-base')}
  text-gray-500 
  dark:text-gray-400
`
export const TextHighlight = tw.span`
 text-primary-focus
 
`

export const Typography = {
  Title: Title,
  P: TextBase,
  Highlight: TextHighlight,
}
