import React from 'react'
import { cn } from '../../lib/utils';

type Props = {
  height?: number | string,
  width?: number | string,
  currentColor?: string,
  className?: string
}


function PlayIcon(props: Props) {
  const { height = 14, width = 14, currentColor = "#212121", className } = props;

  return (
    <svg className={cn([`fill-current ${currentColor}`, className])} height={height} viewBox="0 0 20 20" width={width} xmlns="http://www.w3.org/2000/svg"><path d="m3 4.60441299v10.68046321c0 .9664983.78350169 1.75 1.75 1.75.30213089 0 .5991154-.0782213.86204688-.2270505l10.10829552-5.7216767c.8411018-.4760954 1.136998-1.54389461.6609027-2.38499639-.1736118-.30671412-.4357881-.55386079-.7522058-.70908458l-10.10829556-4.95878651c-.86771195-.42567001-1.91620519-.06732422-2.34187521.80038773-.11768194.23989013-.17886853.50354286-.17886853.77074374z" fill={currentColor} /></svg>
  )
}

export default PlayIcon