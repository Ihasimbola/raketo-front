import React from 'react'

type PropsType = {
  children: React.ReactNode,
  size: number,
  variant: string,
  as: keyof JSX.IntrinsicElements,
  classname?: string
}

const Text: React.FC<PropsType> = (props) => {
  const { children, size, variant, classname , as = "p" } = props;

  const Tag = as;

  return (
    <Tag
      style={{
        fontSize: size,
        color: variant
      }}
    >
      { children }
    </Tag>
  )
}

export default Text;